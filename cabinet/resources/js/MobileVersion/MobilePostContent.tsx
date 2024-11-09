import LinkPreviewPost from "@/Pages/Dashboard/Partials/Post/LinkPreviewPost";
import { LinkData, Media } from "@/types";
import { useState } from "react";

export default function MobilePostContent({
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
    const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

    const renderContent = () => {
        if (isExpanded || content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + "...";
    };

    const showFullScreenImage = (index: number) => {
        setCurrentImageIndex(index);
        document.body.style.overflow = 'hidden'; // Запобігаємо прокрутці фону
    };

    const closeFullScreenImage = () => {
        setCurrentImageIndex(null);
        document.body.style.overflow = 'auto'; // Відновлюємо прокрутку
    };

    return (
        <div className="mobile-post-content">
            {/* Медіа галерея */}
            <div className="media-gallery">
                {media.length === 1 ? (
                    <div className="single-media" onClick={() => showFullScreenImage(0)}>
                        {media[0].type === "image" ? (
                            <img src={`/media/${media[0].url}`} alt="Media" />
                        ) : (
                            <video src={`/media/${media[0].url}`} controls />
                        )}
                    </div>
                ) : (
                    <div className={`media-grid grid-${media.length}`}>
                        {media.map((item, index) => (
                            <div 
                                key={item.id} 
                                className="media-item"
                                onClick={() => showFullScreenImage(index)}
                            >
                                {item.type === "image" ? (
                                    <img src={`/media/${item.url}`} alt="Media" />
                                ) : (
                                    <video src={`/media/${item.url}`} controls />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Лінки */}
            {links.map((link, index) => (
                <div key={index} className="mobile-link-preview">
                    <LinkPreviewPost linkData={link} />
                </div>
            ))}

            {/* Контент */}
            <div className="post-text">
                <p>{renderContent()}</p>
                {content.length > maxLength && (
                    <button 
                        className="view-more-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "View less" : "View more"}
                    </button>
                )}
            </div>

            {/* Повноекранне зображення */}
            {currentImageIndex !== null && (
                <div className="fullscreen-media" onClick={closeFullScreenImage}>
                    <div className="media-container">
                        {media[currentImageIndex].type === "image" ? (
                            <img 
                                src={`/media/${media[currentImageIndex].url}`} 
                                alt="Fullscreen" 
                            />
                        ) : (
                            <video 
                                src={`/media/${media[currentImageIndex].url}`} 
                                controls 
                                autoPlay 
                            />
                        )}
                    </div>
                    <button className="close-btn">×</button>
                </div>
            )}
        </div>
    );
};