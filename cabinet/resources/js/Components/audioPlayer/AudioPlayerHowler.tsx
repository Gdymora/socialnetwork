import { useState, useEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import styles from "./AudioPlayer.module.css";
import SiriWaveComponent from "./SiriWaveComponent";

const AudioPlayer = ({ playlist, widthCanvas, heightCanvas }) => {
    const [playing, setPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [sound, setSound] = useState(null);
    const [duration, setDuration] = useState(0);
    const [seek, setSeek] = useState(0);
    const [volume, setVolume] = useState(0.3); // Default volume at 100%
    const [volumeVisible, setVolumeVisible] = useState(false);
    const [sliderDown, setSliderDown] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [containerSize, setContainerSize] = useState({
        width: widthCanvas,
        height: heightCanvas,
    });
    const [isBar, setIsBar] = useState(false);
    const [isWave, setIsWave] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const seekRef = useRef();
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

        if (sound?.state() === "loaded") {
            setPlaying(true);
        } else {
            console.log("sound");
            setIsLoading(true);
            setPlaying(false);
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
            console.log("Плеєр зупинено", playing, sound);
            sound?.stop();
        };
    }, [sound]);

    useEffect(() => {
        if (playlist && playlist.length > 0 && !sound) {
            const track = playlist[currentTrackIndex];
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
            //setVolume(sound?.volume());
            // sound?.volume(volume);
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
            console.log(
                sliderBtnRef.current.style.left,
                containerSize,
                window.innerWidth
            );
        }
    }, [volume, sound, containerSize]);

    const play = () => sound?.play();
    const pause = () => sound?.pause();
    const nextTrack = () =>
        changeTrack((currentTrackIndex + 1) % playlist.length);
    const prevTrack = () =>
        changeTrack(
            (currentTrackIndex - 1 + playlist.length) % playlist.length
        );
    const changeTrack = (index) => {
        sound?.stop();
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

    const onSeek = (e) => {
        const { clientX } = e.nativeEvent;
        const { left, width } = seekRef.current.getBoundingClientRect();
        const clickPosition = (clientX - left) / width;
        const seekTo = clickPosition * duration;
        sound.seek(seekTo);
        setSeek(seekTo);
    };
    const waveform = (e) => {
        sound.seek.seek(e.clientX / window.innerWidth);
    };

    const playlistBtn = () => {
        //  sound.togglePlaylist();
    };
    const handlePlaylist = () => {
        //  sound.togglePlaylist();
    };

    const toggleVolume = () => {
        setVolumeVisible((prevVisible) => !prevVisible);
    };

    const barEmpty = (event) => {
        const per = event.layerX / parseFloat(barEmptyRef.scrollWidth);
        setVolume(per);
        // sound.volume(per);
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

                    {playing ? (
                        <div
                            className={`${styles.btn} ${styles.pauseBtn}`}
                            onClick={pause}
                        ></div>
                    ) : (
                        <div
                            className={`${styles.btn} ${styles.playBtn}`}
                            onClick={play}
                        ></div>
                    )}

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
            <div className={styles.playlist} onClick={handlePlaylist}>
                <div className={styles.list}></div>
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
