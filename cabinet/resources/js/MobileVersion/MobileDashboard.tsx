import { useState, useRef, ReactNode } from "react";
import MobilePostContent from "./MobilePostContent";
import {
    FriendsAndFollowers,
    PostType,
    PostsListProps,
    ProfileData,
    RandomUserForFriendship,
    User,
    postMostViewed,
} from "@/types";

interface MobileDashboardProps {
    children?: ReactNode;
    posts?: PostType[];
    profileData?: ProfileData;
    friendsAndFollowers?: FriendsAndFollowers;
    postMostViewed?: postMostViewed[];
    randomUsersForFriendship?: RandomUserForFriendship[];
}
function MobileDashboard({
    posts,
    profileData,
    friendsAndFollowers,
    postMostViewed,
    randomUsersForFriendship,
}: MobileDashboardProps) {
    const [currentPostIndex, setCurrentPostIndex] = useState(0);
    const touchStart = useRef<number>(0);
    const currentPost = posts[currentPostIndex];

    // Для дебагу
    console.log("Current Post:", currentPost);

    const handleNextPost = () => {
        if (currentPostIndex < posts.length - 1) {
            setCurrentPostIndex((prev) => prev + 1);
        }
    };

    const handlePrevPost = () => {
        if (currentPostIndex > 0) {
            setCurrentPostIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="mobile-dashboard">
            <div
                className="post-container"
                onTouchStart={(e) => {
                    touchStart.current = e.touches[0].clientY;
                }}
                onTouchEnd={(e) => {
                    const touchEnd = e.changedTouches[0].clientY;
                    const diff = touchStart.current - touchEnd;

                    if (Math.abs(diff) > 50) {
                        if (diff > 0) {
                            handleNextPost();
                        } else {
                            handlePrevPost();
                        }
                    }
                }}
            >
                <div className="post">
                    {/* Перевіряємо наявність даних перед рендером */}
                    {currentPost && (
                        <MobilePostContent
                            title={currentPost.title || ""}
                            media={currentPost.media || []}
                            links={currentPost.links || []}
                            content={
                                typeof currentPost.content === "string"
                                    ? currentPost.content
                                    : ""
                            }
                            maxLength={100}
                        />
                    )}
                </div>
            </div>

            <div className="right-actions">
                <button className="action-btn">
                    <i className="bi bi-heart"></i>
                    <span>{currentPost?.likes || "26K"}</span>
                </button>
                <button className="action-btn">
                    <i className="bi bi-chat"></i>
                    <span>{currentPost?.comments?.length || "1.7K"}</span>
                </button>
                <button className="action-btn">
                    <i className="bi bi-share"></i>
                    <span>{currentPost?.shares || "17K"}</span>
                </button>
            </div>

            <div className="user-info">
                <div className="user-details">
                    <img
                        src={
                            currentPost?.user?.avatar ||
                            "/api/placeholder/40/40"
                        }
                        alt={currentPost?.user?.name || "User"}
                        className="user-avatar"
                    />
                    <span className="username">
                        {currentPost?.user?.name || "username"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MobileDashboard;
