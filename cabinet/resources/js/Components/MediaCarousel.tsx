import { Media, UserFile } from "@/types";
import { useState, useEffect, useRef } from "react";

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

    return (
        <div className="flex transition-opacity duration-500">
            <button
                onClick={onClose}
                className="absolute top-24 right-12 rounded-full w-12 h-12 flex items-center justify-center md:absolute md: z-50 p-2 m-2 text-white bg-red-600 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
                X
            </button>
            {media[currentIndex].type === "image" ? (
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
                    {/* <div className="flex transition-opacity duration-500">
                            {media.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`absolute inset-0 w-full h-full flex !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
                                        index === currentIndex
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                    style={{ width: "100%", height: "100%" }}
                                >
                                    {renderMediaItem(item)}
                                </div>
                            ))}
                        </div> */}
                </>
            )}
        </div>
    );
};

export default MediaCarousel;
