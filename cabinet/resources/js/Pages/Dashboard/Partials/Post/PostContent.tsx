import { Media } from "@/types";
import { useState } from "react";

export default function PostContent({
    title,
    content,
    media,
    maxLength,
}: {
    title: string;
    media: Media[];
    content: string;
    maxLength: number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const renderContent = () => {
        if (isExpanded || content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + "...";
    };

    return (
        <div className="post-content">
            {media.map((mediaItem) => (
                <div key={mediaItem.id}>
                    {mediaItem.type === "image" && (
                        <img
                            src={`/media/${mediaItem.url}`}
                            alt="Media"
                            loading="lazy"
                        />
                    )}
                    {mediaItem.type === "video" && (
                        <video src={`/media/${mediaItem.url}`} controls />
                    )}
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
        </div>
    );
}
