import { useState } from "react";

export default function PostContent({
    title,
    content,
    maxLength,
}: {
    title: string;
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
            <p>{renderContent()}</p>
            {content.length > maxLength && (
                <div>
                    <a href="#" onClick={toggleExpanded}>
                        {isExpanded ? "View less" : "View more"}
                    </a>
                </div>
            )}
        </div>
    );
}
