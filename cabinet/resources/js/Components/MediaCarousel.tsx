import { UserFile } from "@/types";
import { useState, useEffect, useRef } from "react";
import AudioPlayer from "./audioPlayer/AudioPlayerHowler";

const MediaCarousel = ({
    media,
    autoPlay = true,
    autoPlayTime = 0,
    startIndex = 0,
    onClose,
}: {
    media: UserFile[];
    autoPlay?: boolean;
    autoPlayTime?: number;
    startIndex?: number;
    onClose: () => void;
}) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const timeoutRef = useRef<NodeJS.Timeout | null | number>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : media.length - 1
        );
    };

    const startSlideShow = () => {
        return;
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < media.length - 1 ? prevIndex + 1 : 0
        );
    };

    useEffect(() => {
        if (autoPlay && autoPlayTime > 0) {
            timeoutRef.current = setTimeout(goToNext, autoPlayTime);
            return () => clearTimeout(timeoutRef.current as number);
        }
    }, [currentIndex, autoPlay, autoPlayTime]);

    useEffect(() => {
        setCurrentIndex(startIndex);
    }, [startIndex]);

    const renderMediaItem = (item: UserFile) => {
        switch (item.type) {
            case "video":
                return (
                    <video
                        controls
                        src={`/user-file/${item.url}`}
                        className="w-full h-auto"
                    />
                );
            case "music":
                return (
                    <audio controls className="w-full">
                        <source
                            src={`/user-file/${item.url}`}
                            type="audio/mp3"
                        />
                        Your browser does not support the audio element.
                    </audio>
                );
            case "image":
            default:
                return (
                    <img
                        src={`/user-file/${item.url}`}
                        alt={item.title || "media social"}
                        className=""
                    />
                );
        }
    };
    const renderMediaAudio = (media: UserFile[]) => {
        const [containerSize, setContainerSize] = useState({
            width: 0,
            height: 0,
        });

        useEffect(() => {
            const updateSize = () => {
                if (containerRef.current) {
                    setContainerSize({
                        width: containerRef.current.offsetWidth,
                        height: containerRef.current.offsetHeight,
                    });
                }
            }; 
            updateSize(); 
            window.addEventListener("resize", updateSize);
            return () => window.removeEventListener("resize", updateSize);
        }, []);

        const playlist = media.map((item) => ({
            src: `/user-file/${item.url}`,
            title: item.title,
        }));

        return (
            <div
                ref={containerRef}
                className={`absolute audio_player_canvas !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`}
            >
                <AudioPlayer
                    playlist={playlist}
                    currentIndex={startIndex}
                    widthCanvas={containerSize.width}
                    heightCanvas={containerSize.height}
                />
            </div>
        );
    };
    return (
        <div className="">
            <button
                onClick={onClose}
                className="fixed top-24 right-12 z-50 p-2 m-2 text-white bg-red-600 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
                X
            </button>
            {media[currentIndex]?.type === "image" ? (
                <>
                    <div className="large-image flex justify-content-center align-items-center">
                        {media.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
                                    index === currentIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                style={{ maxWidth: "90vh" }}
                            >
                                {renderMediaItem(item)}
                            </div>
                        ))}
                        <div
                            className="absolute bottom-12 inset-x-0 mx-auto rounded-lg p-4 flex items-center justify-center"
                            style={{ maxWidth: "600px" }}
                        >
                            <button
                                onClick={goToPrevious}
                                className="z-10 p-2 text-black bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center md:absolute md:left-1"
                            >
                                &#60;
                            </button>

                            <button
                                onClick={startSlideShow}
                                className="p-2 text-black bg-white bg-opacity-75 rounded-lg flex items-center justify-center text-sm md:w-32 md:text-base"
                            >
                                Auto
                            </button>

                            <button
                                onClick={goToNext}
                                className="z-10 p-2 text-black bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center md:absolute md:right-1"
                            >
                                &#62;
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="large-image flex justify-content-center align-items-center">
                        {renderMediaAudio(media)}
                    </div>
                </>
            )}
        </div>
    );
};

export default MediaCarousel;
