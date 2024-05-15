import { LinkData, Media } from "@/types";
import { useState } from "react";
import LinkPreviewPost from "./LinkPreviewPost";

export default function PostContent({
    title,
    content,
    media,
    links,
    maxLength,
}: {
    title: string;
    media: Media[];
    links: LinkData[];
    content: string;
    maxLength: number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{
        width: number;
        height: number;
    } | null>(null);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const renderContent = () => {
        if (isExpanded || content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + "...";
    };

    const openLargeImage = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeLargeImage = () => {
        setSelectedImage(null);
    };

    const handleImageLoad = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        const img = event.target as HTMLImageElement;
        setImageDimensions({ width: img.width, height: img.height });
    };

    return (
        <div className="post-content">
            <div className="grid grid-cols-3 gap-4">
                {media.map((mediaItem) => (
                    <div
                        key={mediaItem.id}
                        onClick={() =>
                            openLargeImage(`/media/${mediaItem.url}`)
                        }
                        className="relative"
                    >
                        {mediaItem.type === "image" && (
                            <img
                                src={`/media/${mediaItem.url}`}
                                alt="Media"
                                loading="lazy"
                                onLoad={handleImageLoad}
                            />
                        )}

                        {mediaItem.type === "video" && (
                            <video src={`/media/${mediaItem.url}`} controls />
                        )}
                    </div>
                ))}
            </div>
            {links.map((linksItem, index) => (
                <div key={index}>
                    <LinkPreviewPost linkData={linksItem} />
                </div>
            ))}

            <p>{renderContent()}</p>
            {content.length > maxLength && (
                <div>
                    <span
                        onClick={toggleExpanded}
                        style={{ cursor: "pointer", color: "blue" }}
                    >
                        {isExpanded ? "View less" : "View more"}
                    </span>
                </div>
            )}

            {selectedImage && imageDimensions && (
                <div
                    className="large-image flex justify-content-center align-items-center"
                    onClick={closeLargeImage}
                >
                    <div>
                        <img
                            src={selectedImage}
                            alt="Large Media"
                            width={imageDimensions.width}
                            height={imageDimensions.height}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
