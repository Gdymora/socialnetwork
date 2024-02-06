import {
    PlayIcon,
    PauseIcon,
    ForwardIcon,
    BackwardIcon,
    SpeakerWaveIcon,
} from "@heroicons/react/16/solid";
import { useRef, useState, useEffect, ChangeEvent, CSSProperties } from "react";
import RangeSlider from "./RangeSlider";

const CustomAudioPlayer = ({ src }: { src: string }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1); // Гучність від 0 до 1
    const [playbackPosition, setPlaybackPosition] = useState<number>(1);

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

    const handlePlaybackPositionChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const newplaybackPosition = parseFloat(event.target.value);
        setPlaybackPosition(newplaybackPosition);
        if (audioRef.current) {
            audioRef.current.currentTime = newplaybackPosition;
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
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

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
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

    const audioPlayerButton: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "4fr 1fr",
        margin: "2px",
        alignContent: "center",
    };
    return (
        <div className="custom-audio-player">
            <div className="mt-1" style={audioPlayerButton}>
                <div className="custom-audio-player-button m-2">
                    <span onClick={handleRewind}>
                        <BackwardIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                    </span>
                    <span onClick={togglePlay}>
                        {isPlaying ? (
                            <PauseIcon className="w-8 h-8 text-gray-500 hover:text-gray-700" />
                        ) : (
                            <PlayIcon className="w-8 h-8 text-gray-500 hover:text-gray-700" />
                        )}
                    </span>
                    <span onClick={handleForward}>
                        <ForwardIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <RangeSlider
                    min={0}
                    max={100}
                    step={1}
                    value={playbackPosition}
                    onChange={handlePlaybackPositionChange}
                />
                {/*  <div className="flex justify-center">
                    <p className="pl-4 text-center text-sm font-medium">
                        {parseInt(playbackPosition, 10) === 5
                            ? "minimum of "
                            : ""}{" "}
                        {playbackPosition} Vehicles
                    </p>
                </div> */}
                {/*  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={playbackPosition}
                    onChange={handlePlaybackPositionChange}
                      className={`w-36 h-6 transparent h-2 w-full cursor-pointer appearance-none rounded-lg border-transparent accent-green-700 hover:accent-green-700 active:accent-green-800 bg-gray-100`}
   
                /> */}
            </div>

            <audio
                ref={audioRef}
                src={src}
                style={{ display: "none" }}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                    if (audioRef.current) {
                        setDuration(audioRef.current.duration);
                    }
                }}
            />
            <div
                className="flex"
                style={{
                    flexDirection: "column-reverse",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{ width: "46px" }}
                    className="mt-2 transform -rotate-180"
                />
                <SpeakerWaveIcon className="w-4 text-gray-500 hover:text-gray-700" />
            </div>
            <div>
                {currentTime.toFixed(2)} / {duration.toFixed(2)}
            </div>
        </div>
    );
};

export default CustomAudioPlayer;
