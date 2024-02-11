import { Media, UserFile } from "@/types";
import { useState, useEffect, useRef } from "react";

const MediaCarousel = ({
    media,
    autoPlay = true,
    autoPlayTime = 0,
    startIndex = 0,
    onClose,
}: {
    media: Media[];
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

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < media.length ? prevIndex + 1 : 0
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
            case "music":
                return (
                    <div className="w-full h-auto flex justify-center items-center">
                        {item.type === "video" && (
                            <video
                                controls
                                src={`/user-file/${item.url}`}
                                className="max-w-full max-h-full"
                            />
                        )}
                        {item.type === "music" && (
                            <audio controls className="max-w-full">
                                <source
                                    src={`/user-file/${item.url}`}
                                    type="audio/mp3"
                                />
                                Your browser does not support the audio element.
                            </audio>
                        )}
                    </div>
                );
            case "image":
            default:
                return (
                    <img
                        src={`/user-file/${item.url}`}
                        alt={item.title || "media"}
                        className="max-w-full max-h-full object-contain"
                    />
                );
        }
    };
    return ( 
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="relative w-full h-full max-w-4xl max-h-3xl p-4 bg-white rounded-md flex items-center justify-center">
               <button
                    onClick={onClose}
                    className="absolute top-0 right-0 z-20 p-2 m-2 text-white bg-red-600 rounded-full"
                >
                    X
                </button>  
                {media[currentIndex].type === "image" ? (
                    <div className="flex transition-opacity duration-500">
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
                    </div>
                ) : (
                    renderMediaItem(media[currentIndex])
                )}
              
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 z-10 p-2 text-white bg-black bg-opacity-50"
                >
                    &#60;
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-0 z-10 p-2 text-white bg-black bg-opacity-50"
                >
                    &#62;
                </button>
            </div>
        </div> 
    );
};

export default MediaCarousel;
