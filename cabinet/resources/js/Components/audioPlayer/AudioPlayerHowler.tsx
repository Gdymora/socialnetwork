import { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import styles from "./AudioPlayer.module.css";
import SiriWaveComponent from "./SiriWaveComponent";

const AudioPlayer = ({ playlist, currentIndex, widthCanvas, heightCanvas }) => {
    const [playing, setPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(currentIndex);
    const [sound, setSound] = useState(null);
    const [duration, setDuration] = useState(0);
    const [seek, setSeek] = useState(0);
    const [volume, setVolume] = useState(0.3); // Default volume at 100%
    const [volumeVisible, setVolumeVisible] = useState(false);
    const [sliderDown, setSliderDown] = useState(false);
    const [containerSize, setContainerSize] = useState({
        width: widthCanvas,
        height: heightCanvas,
    });
    const [isBar, setIsBar] = useState(false);
    const [isWave, setIsWave] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaylist, setIsPlaylist] = useState(false);
    const updateProgress = useRef();
    const playerContainerRef = useRef(null);
    const barFullRef = useRef(null); // Реф для елемента, що показує заповнення гучності
    const sliderBtnRef = useRef(null); // Реф для кнопки слайдера гучності
    const barEmptyRef = useRef(null);
    const volumeRef = useRef(null); // Реф для контейнера гучності

    // Оновлення розмірів контейнера при зміні пропсів
    useEffect(() => {
        setContainerSize({
            width: widthCanvas,
            height: heightCanvas,
        });
    }, [widthCanvas, heightCanvas]);

    // Відслідковування змін розмірів контейнера через ResizeObserver
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });

        if (playerContainerRef.current) {
            resizeObserver.observe(playerContainerRef.current);
        }

        if (sound && sliderBtnRef.current) {
            const barWidth = volume * 0.9;
            sliderBtnRef.current.style.left =
                window.innerWidth * barWidth + window.innerWidth * 0.05 - 25;
        }

        return () => {
            if (playerContainerRef.current) {
                resizeObserver.unobserve(playerContainerRef.current);
            }
            sound?.stop();
        };
    }, [sound]);

    useEffect(() => {
        if (playlist && playlist.length > 0 && !sound) {
            const track = playlist[currentTrackIndex];
            if (!track) {
                setIsLoading(true);
                return;
            } else {
                setIsLoading(false);
            }
            const newSound = new Howl({
                src: [track.src],
                html5: true,
                volume,
                onplay: () => {
                    setPlaying(true);
                    setDuration(newSound.duration());
                    requestAnimationFrame(updatePosition);
                    setIsWave(true);
                    setIsBar(false);
                    setIsLoading(false);
                },
                onend: () => {
                    setIsWave(false);
                    setIsBar(true);
                    setPlaying(false);
                    nextTrack();
                },
                onpause: () => {
                    setPlaying(false);
                    setIsWave(false);
                    setIsBar(true);
                },
                onstop: () => {
                    setPlaying(false);
                    setIsWave(false);
                    setIsBar(true);
                },
                onseek: () => {
                    setSeek(sound.seek());
                },
            });
            setSound(newSound);
            newSound.play();
        }
    }, [playlist, currentTrackIndex, volume]);

    // Ефект, що оновлює стилі слайдера, коли змінюється гучність
    useEffect(() => {
        if (barFullRef.current && sliderBtnRef.current) {
            const barWidth = volume * 0.9;
            barFullRef.current.style.width = `${barWidth * 100}%`;
            sliderBtnRef.current.style.left = `${
                containerSize.width * barWidth + containerSize.width * 0.05 - 25
            }px`;
        }
    }, [volume, containerSize]);

    const play = () => {
        if (sound && sound.state() === "loaded") {
            sound.play();
        } else {
            setIsLoading(true);
        }
    };
    const pause = () => sound?.pause();
    const stop = () => sound?.stop();

    const nextTrack = () =>
        changeTrack(
            currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist.length - 1
        );
    const prevTrack = () =>
        changeTrack(
            currentTrackIndex < playlist.length - 1 ? currentTrackIndex + 1 : 0
        );
    const changeTrack = (index) => {
        stop();
        setSound(null);
        setCurrentTrackIndex(index);
    };

    const updatePosition = () => {
        const sound = playlist[currentTrackIndex]?.howl;
        if (sound?.playing()) {
            setSeek(sound.seek());
            updateProgress.current = requestAnimationFrame(updatePosition);
        }
    };

    const waveform = (e) => {
        sound.seek.seek(e.clientX / window.innerWidth);
    };

    const playlistBtn = () => {
        setIsPlaylist((prevIsPlaylist) => !prevIsPlaylist);
    };

    const toggleVolume = () => {
        setVolumeVisible((prevVisible) => !prevVisible);
    };

    const barEmpty = (event) => {
        const per = event.layerX / parseFloat(barEmptyRef.scrollWidth);
        setVolume(per);
    };

    const handleMove = (event) => {
        if (!sliderDown) return;
        const clientX = event.type.includes("mouse")
            ? event.clientX
            : event.touches[0].clientX;
        const startX = volumeRef.current.getBoundingClientRect().left;
        const layerX = clientX - startX;
        const per = Math.min(
            1,
            Math.max(0, layerX / volumeRef.current.offsetWidth)
        );
        // Встановлення гучності
        setVolume(per);
        sound.volume(volume);
    };

    const sliderBtn = () => {
        setSliderDown(true);
    };

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60) || 0;
        const seconds = Math.floor(secs - minutes * 60) || 0;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const volumeMouseUp = () => setSliderDown(false);

    return (
        <div
            ref={playerContainerRef}
            className={styles.audioPlayerHowler}
            style={{
                width: containerSize.width,
                height: containerSize.height,
            }}
        >
            <div className={styles.title}>
                <span className={styles.track}>
                    {playlist[currentTrackIndex]?.title || ""}
                </span>
                <div className={styles.timer}>{formatTime(seek)}</div>
                <div className={styles.duration}>{formatTime(duration)}</div>
            </div>
            <div className={styles.controlsOuter}>
                <div
                    className={`${styles.btn} ${styles.playlistBtn}`}
                    onClick={playlistBtn}
                ></div>
                <div className={styles.controlsInner}>
                    <div
                        className={`${styles.btn} ${styles.prevBtn}`}
                        onClick={prevTrack}
                    ></div>
                    <div
                        className={styles.loading}
                        style={{ display: isLoading ? "block" : "none" }}
                    ></div>
                    {!isLoading &&
                        (playing ? (
                            <div
                                className={`${styles.btn} ${styles.pauseBtn}`}
                                onClick={pause}
                            ></div>
                        ) : (
                            <div
                                className={`${styles.btn} ${styles.playBtn}`}
                                onClick={play}
                            ></div>
                        ))}

                    <div
                        className={`${styles.btn} ${styles.nextBtn}`}
                        onClick={nextTrack}
                    ></div>
                </div>

                <div
                    className={`${styles.btn} ${styles.volumeBtn}`}
                    onClick={toggleVolume}
                ></div>
            </div>
            <div style={{ display: isWave ? "block" : "none" }}>
                {containerSize.width > 0 && (
                    <SiriWaveComponent
                        color="white"
                        speed={0.03}
                        amplitude={0.5}
                        width={containerSize.width}
                        height={containerSize.height}
                    />
                )}
            </div>
            {/* <!-- Progress --> */}
            <div className={styles.waveform} onClick={waveform}></div>
            <div
                className={styles.barProgres}
                style={{
                    display: isBar ? "block" : "none",
                    width: `${containerSize.width}px`,
                }}
            ></div>

            <div className={styles.progress}></div>

            {/* <!-- Playlist --> */}
            <div
                className={styles.playlist}
                onClick={playlistBtn}
                style={{ display: isPlaylist ? "block" : "none" }}
            >
                <div className={styles.list}>
                    <div className={styles.list}>
                        {playlist.map((song, index) => (
                            <div
                                key={index}
                                className="list-song"
                                onClick={() => changeTrack(index)}
                            >
                                {song.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <!-- Volume --> */}
            <div
                ref={volumeRef}
                className={`${volumeVisible ? styles.fadein : styles.fadeout} ${
                    styles.volume
                }`}
                style={{ display: volumeVisible ? "block" : "none" }}
                onClick={toggleVolume}
                onMouseUp={volumeMouseUp}
                onTouchEnd={volumeMouseUp}
                onMouseMove={handleMove}
                onTouchMove={handleMove}
            >
                <div
                    ref={barFullRef}
                    className={`${styles.barFull} ${styles.bar}`}
                ></div>
                <div
                    ref={barEmptyRef}
                    className={`${styles.barEmpty} ${styles.bar}`}
                    onClick={barEmpty}
                ></div>
                <div
                    ref={sliderBtnRef}
                    className={styles.sliderBtn}
                    onTouchStart={sliderBtn}
                    onMouseDown={sliderBtn}
                ></div>
            </div>
        </div>
    );
};

export default AudioPlayer;
