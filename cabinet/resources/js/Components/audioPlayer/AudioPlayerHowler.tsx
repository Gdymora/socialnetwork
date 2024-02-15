/* 
//https://github.com/goldfire/howler.js#documentation
 */
import { useState, useEffect, useRef, MouseEvent, TouchEvent } from "react";
import { Howl } from "howler";
import styles from "./AudioPlayer.module.css";
import SiriWaveComponent from "./SiriWaveComponent";
interface PlaylistItem {
    src: string;
    title: string;
    artist?: string;
    album?: string;
    albumArt?: string;
    duration?: number;
    howl?: Howl;
}

interface Props {
    playlist: PlaylistItem[];
    currentIndex: number;
    widthCanvas: number;
    heightCanvas: number;
}

const AudioPlayer = ({
    playlist,
    currentIndex,
    widthCanvas,
    heightCanvas,
}: Props) => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [currentTrackIndex, setCurrentTrackIndex] =
        useState<number>(currentIndex);
    const [sound, setSound] = useState<Howl | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.3);
    const [sliderDown, setSliderDown] = useState<boolean>(false);
    const [volumeVisible, setVolumeVisible] = useState<boolean>(false);
    const [containerSize, setContainerSize] = useState<{
        width: number;
        height: number;
    }>({
        width: widthCanvas,
        height: heightCanvas,
    });
    const [isBar, setIsBar] = useState(false);
    const [isWave, setIsWave] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaylist, setIsPlaylist] = useState(false);
    const playerContainerRef = useRef<HTMLDivElement>(null);
    const barFullRef = useRef<HTMLDivElement>(null);
    const sliderBtnRef = useRef<HTMLDivElement>(null);
    const barEmptyRef = useRef<HTMLDivElement>(null);
    const volumeRef = useRef<HTMLDivElement>(null);
    const durationRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);
    // Оновлення розмірів контейнера при зміні пропсів
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (sound) {
            const durationInSeconds = Math.round(sound.duration());
            setDuration(durationInSeconds);
            if (durationRef.current) {
                durationRef.current.innerHTML = formatTime(durationInSeconds);
            }
            sound?.once("load", function () {
                const duration = sound?.duration(); // Отримання тривалості треку
                console.log("Тривалість треку:", duration, "секунд");
            });
            getHTMLMediaElement();
        }
    }, [sound]);

    /*
     *отримати доступ до
     * <audio preload="auto" src="/user-file/music/.mp3"></audio>
     */
    const getHTMLMediaElement = () => {
        const node = (sound as any)?._sounds[0]._node as HTMLAudioElement;
        console.log(node);
    };

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
            sliderBtnRef.current.style.left = (
                window.innerWidth * barWidth +
                window.innerWidth * 0.05 -
                25
            ).toString();
        }
        console.log("effectSound", sound);
        step();
        return () => {
            if (playerContainerRef.current) {
                resizeObserver.unobserve(playerContainerRef.current);
            }
            stop();
        };
    }, [sound]);

    useEffect(() => {
        if (playlist && playlist.length > 0 && !sound) {
            const track = playlist[currentTrackIndex];
            if (!track) {
                setIsLoading(true);
                return;
            }
            const newSound = new Howl({
                src: [track.src],
                html5: false,
                // html5: true, почне відтворюватися, щойно стане можливо, за замовченням завантажує весь файл
                volume,
                onplay: () => {
                    setPlaying(true);
                    setIsWave(true);
                    setIsBar(false);
                    setIsLoading(false);
                    step();
                    console.log("one play");
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
                    cancelAnimationFrame(animationFrameId.current as number);
                },
                onstop: () => {
                    setPlaying(false);
                    setIsWave(false);
                    setIsBar(true);
                },
                onseek: () => {
                    step();
                },
            });
            setSound(newSound);
            newSound.play();

            console.log(newSound);
        }
    }, [playlist, currentTrackIndex, sound, volume, sound?.duration()]);

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

    const updateCurrentTime = () => {
        if (sound && sound.playing()) {
            const time = sound.seek();
            setCurrentTime(time);
        }
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (playing) {
            intervalId = setInterval(() => {
                updateCurrentTime();
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };

        console.log(sound?.duration());
    }, [playing]);

    const play = () => {
        if (sound && sound.state() === "loaded") {
            sound.play();
            step();
        } else {
            setIsLoading(true);
        }
    };
    const pause = () => sound?.pause();

    const stop = () => {
        sound?.stop();
        cancelAnimationFrame(animationFrameId.current as number);
    };

    const nextTrack = () =>
        changeTrack(
            currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist.length - 1
        );
    const prevTrack = () =>
        changeTrack(
            currentTrackIndex < playlist.length - 1 ? currentTrackIndex + 1 : 0
        );
    const changeTrack = (index: number) => {
        stop();
        setSound(null);
        setCurrentTrackIndex(index);
    };

    const seek = (per: number) => {
        if (sound?.playing()) {
            seek(sound?.duration() * per);
        }
    };

    const step = () => {
        if (sound) {
            // Отримання поточної позиції відтворення
            const seek = sound?.seek() || 0; 
            setCurrentTime(seek); // Оновлення поточного часу відтворення
            if (timerRef.current) {
                timerRef.current.innerHTML = formatTime(Math.round(seek));
            }
            if (progressRef.current) {
                progressRef.current.style.width = `${
                    (seek / sound?.duration()) * 100 || 0
                }%`; // Оновлення прогрес-бару
            }
            animationFrameId.current = requestAnimationFrame(step);
         //   console.log("frame");
        }
    };

    const waveformClick = (event: MouseEvent) => {
        if (sound && progressRef.current) {
           // Визначення відсотка кліку відносно ширини прогрес-бару
            const clickX =
                event.clientX /* -
                progressRef.current.getBoundingClientRect().left */;
            const percentage = clickX / progressRef.current.offsetWidth;
            const seconds = percentage;
            console.log(clickX, sound.duration());
            // Перемотування треку до нової позиції
            sound.seek(seconds);
            console.log(event.clientX, window.innerWidth, containerSize.width)
            // sound?.seek(event.clientX / containerSize.width);
        } 
       
    };
    const playlistBtn = () => {
        setIsPlaylist((prevIsPlaylist) => !prevIsPlaylist);
    };

    const toggleVolume = () => {
        setVolumeVisible((prevVisible) => !prevVisible);
    };

    const barEmpty = (event: MouseEvent | any) => {
        if (barEmptyRef.current) {
            const per =
                (event.layerX as any) /
                parseFloat(barEmptyRef.current.scrollWidth.toString());
            setVolume(per);
        }
    };

    const handleMove = (event: MouseEvent | TouchEvent<HTMLDivElement>) => {
        if (!sliderDown) return;
        const clientX =
            "touches" in event
                ? event.touches[0].clientX
                : (event as MouseEvent).clientX;

        if (volumeRef.current) {
            const startX = volumeRef.current.getBoundingClientRect().left;
            const layerX = clientX - startX;
            const per = Math.min(
                1,
                Math.max(0, layerX / volumeRef.current.offsetWidth)
            );
            setVolume(per);
            sound?.volume(volume);
        }
    };

    const sliderBtn = () => {
        setSliderDown(true);
    };

    const formatTime = (secs: number) => {
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
                <div /* ref={timerRef} */ className={styles.timer}>
                    {formatTime(currentTime)}
                </div>
                <div ref={durationRef} className={styles.duration}></div>
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

            <div
                style={{
                    display: isPlaylist || volumeVisible ? "none" : "block",
                }}
                className={styles.waveform}
                onClick={waveformClick}
            ></div>

            <div
                className={styles.barProgres}
                style={{
                    display: isBar ? "block" : "none",
                    width: `${containerSize.width}px`,
                }}
            ></div>
            <div ref={progressRef} className={styles.progress}></div>

            {/* <!-- Playlist --> */}
            <div
                className={styles.playlist}
                onClick={playlistBtn}
                style={{ display: isPlaylist ? "block" : "none" }}
            >
                <div className={styles.list}>
                    {playlist.map((song, index) => (
                        <div
                            key={index}
                            className={styles.list_song}
                            onClick={() => changeTrack(index)}
                        >
                            {index + 1}. {song.title}
                        </div>
                    ))}
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
