import LinkPreviewPost from "@/Pages/Dashboard/Partials/Post/LinkPreviewPost";
import { LinkData, Media } from "@/types";
import React, { useState } from "react";

const MobilePostContent = ({
    title,
    content,
    media,
    links,
    maxLength,
    onReadMore,
    postContent,
}: {
    title: string;
    media: Media[];
    links: LinkData[];
    content: string;
    maxLength: number;
    onReadMore?: () => void;
    postContent: boolean;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
        null
    );
    const [isPostContent] = useState<boolean>(postContent);
    const [isToggleShareOptions, setIsToggleShareOptions] =
        useState<boolean>(false);

    const renderContent = () => {
        if (isExpanded || content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + "...";
    };

    const showFullScreenImage = (index: number) => {
        setCurrentImageIndex(index);
        document.body.style.overflow = "hidden"; // Запобігаємо прокрутці фону
    };

    const closeFullScreenImage = () => {
        setCurrentImageIndex(null);
        document.body.style.overflow = "auto"; // Відновлюємо прокрутку
    };
    const toggleShareOptions = () => {
        setIsToggleShareOptions((prev) => !prev);
    };

    const postContentStyle = {
        display: isPostContent ? "block" : "none",
    };

    const shareOptionsStyle = {
        display: isToggleShareOptions ? "block" : "none",
    };
    return (
        <div className="mobile-post-content">
            {/* Медіа галерея */}
            <div className="media-gallery">
                {media.length === 1 ? (
                    <div
                        className="single-media"
                        onClick={() => showFullScreenImage(0)}
                    >
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
                                    <img
                                        src={`/media/${item.url}`}
                                        alt="Media"
                                    />
                                ) : (
                                    <video
                                        src={`/media/${item.url}`}
                                        controls
                                    />
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

            <div className="post-content">
                <div className="author-info">
                    <div className="author-avatar"></div>
                    <div>
                        <div className="author-name">
                            username
                            <span className="verified-badge">✓</span>
                        </div>
                        <div className="post-time">2 години тому</div>
                    </div>
                </div>

                {/* Контент */}

                <div className="post-text" onClick={onReadMore}>
                    {/*   <div className="post-tags">
                        <span className="tag">#подорож</span>
                        <span className="tag">#природа</span>
                        <span className="tag">#пригоди</span>
                    </div> */}
                    <p>{renderContent()}</p>
                    {content.length > maxLength && (
                        <button
                            className="view-more-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(!isExpanded);
                            }}
                        >
                            {isExpanded ? "View less" : "View more"}
                        </button>
                    )}
                </div>
            </div>

            {isPostContent && (<div style={postContentStyle}>
                <div className="post_action_post-stats">
                    <div className="post_action_stat-item">
                        <span className="post_action_stat-value">1.2K</span>
                        <span className="post_action_stat-label">Лайків</span>
                    </div>
                    <div className="post_action_stat-item">
                        <span className="post_action_stat-value">234</span>
                        <span className="post_action_stat-label">
                            Коментарів
                        </span>
                    </div>
                    <div className="post_action_stat-item">
                        <span className="post_action_stat-value">45</span>
                        <span className="post_action_stat-label">
                            Збережень
                        </span>
                    </div>
                </div>
                <div className="post_action_post-actions">
                    <button className="post_action_action-btn">
                        <div className="post_action_action-icon">❤️</div>
                        <span>Лайк</span>
                    </button>
                    <button className="post_action_action-btn">
                        <div className="post_action_action-icon">💬</div>
                        <span>Коментар</span>
                    </button>
                    <button className="post_action_action-btn">
                        <div className="post_action_action-icon">⭐</div>
                        <span>Зберегти</span>
                    </button>
                    <button
                        className="post_action_action-btn"
                        onClick={toggleShareOptions}
                    >
                        <div className="post_action_action-icon">↪️</div>
                        <span>Поділитись</span>
                    </button>
                </div>
                <div className="post_action_comments-section">
                    <div className="post_action_section-header">
                        <h3>Коментарі (234)</h3>
                        <button className="post_action_header-btn">
                            Найновіші
                        </button>
                    </div>
                    <div className="post_action_comment">
                        <div className="author-avatar"></div>
                        <div className="comment-content">
                            <div className="comment-header">
                                <span className="author-name">user123</span>
                                <span className="post-time">1г</span>
                            </div>
                            <div className="comment-text">
                                Неймовірно красиво! 😍 Де це?
                            </div>
                            <div className="comment-actions">
                                <button className="action-btn">
                                    <span>❤️ 45</span>
                                </button>
                                <button className="action-btn">
                                    <span>Відповісти</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

            { isToggleShareOptions && (<div
                className="post_action_share-options"
            >
                <div style={{ textAlign: "center" }}>
                    <h3>Поділитися</h3>
                </div>
                <div className="post_action_share-grid">
                    <a href="#" className="post_action_share-item">
                        <div className="post_action_share-icon">📱</div>
                        <span>Історія</span>
                    </a>
                    <a href="#" className="post_action_share-item">
                        <div className="post_action_share-icon">💬</div>
                        <span>Повідомлення</span>
                    </a>
                    <a href="#" className="post_action_share-item">
                        <div className="post_action_share-icon">📧</div>
                        <span>Email</span>
                    </a>
                    <a href="#" className="post_action_share-item">
                        <div className="post_action_share-icon">🔗</div>
                        <span>Копіювати</span>
                    </a>
                </div>
            </div>)}

            {/* Повноекранне зображення */}
            {currentImageIndex !== null && (
                <div
                    className="fullscreen-media"
                    onClick={closeFullScreenImage}
                >
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
}

export default MobilePostContent;