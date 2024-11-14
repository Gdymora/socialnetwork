import { useState, useRef, ReactNode, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { nextPost, prevPost, setPosts } from "@/store/slices/postsSlice";
import { RootState } from "@/store/rootReucer";

interface MobileDashboardProps {
    children?: ReactNode;
    posts?: PostType[];
    profileData?: ProfileData;
    friendsAndFollowers?: FriendsAndFollowers;
    postMostViewed?: postMostViewed[];
    randomUsersForFriendship?: RandomUserForFriendship[];
}

const MobileDashboard = ({
    posts,
    profileData,
    friendsAndFollowers,
    postMostViewed,
    randomUsersForFriendship,
}: MobileDashboardProps) => {
    const dispatch = useDispatch();
    const { currentPostIndex } = useSelector((state: RootState) => state.posts);
    const touchStart = useRef<number>(0);
    const [activePage, setActivePage] = useState<"feed" | "post">("feed");
    const currentPost: PostType | null = posts ? posts[currentPostIndex] : null;
    useEffect(() => {
        if (posts && posts.length > 0) {
            dispatch(setPosts(posts));
        }
    }, [posts, dispatch]);
    return (
        <div className="">
            <div
                className={`main-content ${
                    activePage === "feed" ? "active" : ""
                }`}
            >
                <div
                    className="post-container"
                    onTouchStart={(e) => {
                        touchStart.current = e.touches[0].clientY;
                    }}
                    onTouchEnd={(e) => {
                        const touchEnd = e.changedTouches[0].clientY;
                        const diff = touchStart.current - touchEnd;

                        if (Math.abs(diff) > 120) { // Long swipe threshold for full article
                            setActivePage("post");
                        } else if (Math.abs(diff) > 30) { // Short swipe threshold for switching posts
                            if (diff > 0) {
                                dispatch(nextPost());
                            } else {
                                dispatch(prevPost());
                            }
                        }
                    }}
                >
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
                            onReadMore={() => setActivePage("post")}
                            postContent={false}
                        />
                    )}
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
                        <span>{currentPost?.share || "17K"}</span>
                    </button>
                    <div className="user-avatar">
                        <div className="circle">
                            <img
                                src={
                                    currentPost?.author.profile_image_url
                                        ? `/user-file/${currentPost?.author.profile_image_url}`
                                        : "/assets/images/noimg.png"
                                }
                                alt={currentPost?.author?.name || "User"}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`page ${activePage === "post" ? "active" : ""}`}
                id="post-detail-page"
            >
                <div className="header">
                    <button
                        className="back-button"
                        onClick={() => setActivePage("feed")}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <h1>Пост</h1>
                </div>

                {currentPost && (
                    <div className="scroll-wrapper">
                        <MobilePostContent
                            title={currentPost.title || ""}
                            media={currentPost.media || []}
                            links={currentPost.links || []}
                            content={
                                typeof currentPost.content === "string"
                                    ? currentPost.content
                                    : ""
                            }
                            maxLength={10000}
                            onReadMore={() => setActivePage("post")}
                            postContent={true}
                        />
                    </div>
                )}
            </div>
            {/* <div className="user-info">
                <div className="user-details">
                    <img
                        src={
                            currentPost?.author.profile_image_url
                                ? `/user-file/${currentPost?.author.profile_image_url}`
                                : "/assets/images/noimg.png"
                        }
                        alt={currentPost?.author?.name || "User"}
                        className="user-avatar"
                    />
                    <span className="username">
                        {currentPost?.author?.name || "username"}
                    </span>
                </div>
            </div> */}
        </div>
    );
};

export default MobileDashboard;
