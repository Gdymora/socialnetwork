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
    const [volume, setVolume] = useState(1); // Default volume at 100%
    const seekRef = useRef();
    const updateProgress = useRef();

    const [containerSize, setContainerSize] = useState({
        width: widthCanvas,
        height: heightCanvas,
    });

    const playerContainerRef = useRef(null);

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
                },
                onend: () => {
                    setPlaying(false);
                    nextTrack();
                },

                onpause: () => {
                    setPlaying(false);
                },
                onstop: () => {
                    setPlaying(false);
                },
                onseek: () => {
                    setSeek(sound.seek());
                },
            });
            setSound(newSound);
        }
    }, [playlist, currentTrackIndex, volume]);

    useEffect(() => {
        Howler.volume(volume);
    }, [volume]);

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

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60) || 0;
        const seconds = Math.floor(secs - minutes * 60) || 0;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div
            ref={playerContainerRef}
            className={styles.audioPlayerHowler}
            style={{
                width: containerSize.width,
                height: containerSize.height,
            }}
        >
            <SiriWaveComponent
                color="#00f"
                speed={0.5}
                amplitude={0.5}
                width={containerSize.width}
                height={containerSize.height}
            />
            <div className={styles.title}>
                <span className={styles.track}>
                    {playlist[currentTrackIndex]?.title || ""}
                </span>
                <div className={styles.timer}>{formatTime(seek)}</div>
                <div className={styles.duration}>{formatTime(duration)}</div>
            </div>
            <div className={styles.controlsOuter}>
                <div className={styles.controlsInner}>
                    <div className={styles.loading}></div>
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
                        className={`${styles.btn} ${styles.prevBtn}`}
                        onClick={prevTrack}
                    ></div>
                    <div
                        className={`${styles.btn} ${styles.nextBtn}`}
                        onClick={nextTrack}
                    ></div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className={styles.volumeSlider}
                    />
                    <div className={styles.playlist}>
                        <div className={styles.list}></div>
                    </div>
                </div>
            </div>
            <div
                className={styles.progressContainer}
                ref={seekRef}
                onClick={onSeek}
            >
                <div
                    className={styles.progress}
                    style={{ width: `${(seek / duration) * 100}%` }}
                ></div>
            </div>

            <div className={styles.playlist}>
                {playlist.map((track, index) => (
                    <div
                        key={index}
                        className={styles.list}
                        onClick={() => changeTrack(index)}
                    >
                        {track.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AudioPlayer;
