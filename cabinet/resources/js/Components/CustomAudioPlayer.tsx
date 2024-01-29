import React, { useRef, useState, useEffect } from "react";

const CustomAudioPlayer = ({ src }: { src: string }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1); // Гучність від 0 до 1

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleRewind = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 5;
        }
    };

    const handleForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 5;
        }
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    }, [audioRef.current?.duration]);

    return (
        <div className="custom-audio-player">
            <button onClick={handleRewind}>Rewind</button>
            <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={handleForward}>Forward</button>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
            <audio
                ref={audioRef}
                src={src}
                style={{ display: "none" }}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                    setDuration(audioRef.current.duration);
                }}
            />
            <div>
                {currentTime.toFixed(2)} / {duration.toFixed(2)}
            </div>
        </div>
    );
};

export default CustomAudioPlayer;
