import MobileDashboard from "@/MobileVersion/MobileDashboard";
import MobileParentSayPost from "@/MobileVersion/MobileParentSayPost";
import ParentSayPost from "@/Pages/Dashboard/Partials/ModalSay/ParentSayPost";
import {
    FriendsAndFollowers,
    PostType,
    PostsListProps,
    ProfileData,
    RandomUserForFriendship,
    User,
    postMostViewed,
} from "@/types";
import React, { ReactNode, useRef, useState } from "react";
import FriendsSection from "../MobileVersion/Section/FriendsSection";
import ProfileSection from "../MobileVersion/Section/ProfileSection";
import GallerySection from "../MobileVersion/Section/GallerySection";
import HeaderSection from "@/MobileVersion/Section/HeaderSection";
import { UiState, setCurrentSection } from "@/store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReucer";
import MobileSideMenu from "@/MobileVersion/MobileSideMenu";
import SettingsInterface from "@/MobileVersion/Section/Profile/SettingsInterface";
import PostSave from "@/MobileVersion/Section/Profile/PostSave";
import StatisticsSection from "@/MobileVersion/Section/StatisticsSection";
import NotificationsComponent from "@/MobileVersion/Section/NotificationSection";
import NotificationsSection from "@/MobileVersion/Section/NotificationSection";
import TrendingSection from "@/MobileVersion/Section/TrendingSection";
import ChatSection from "@/MobileVersion/Section/ChatSection";
import ChallengesSection from "@/MobileVersion/Section/ChallengesSection";
import LiveStreamSection from "@/MobileVersion/Section/LiveStreamSection";
import SearchSection from "@/MobileVersion/Section/SearchSection";

interface MobileLayoutProps {
    user: User; // тільки user обов'язковий
    children?: ReactNode;
    posts?: PostType[];
    profileData?: ProfileData;
    friendsAndFollowers?: FriendsAndFollowers;
    postMostViewed?: postMostViewed[];
    randomUsersForFriendship?: RandomUserForFriendship[];
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
    user,
    posts,
    friendsAndFollowers,
    profileData,
    postMostViewed,
    randomUsersForFriendship,
}) => {
    const dispatch = useDispatch();
    const { currentSection } = useSelector((state: RootState) => state.ui);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);

    const touchStartX = useRef<number>(0);
    const touchStartY = useRef<number>(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchStartX.current - touchEndX;
        const diffY = touchStartY.current - touchEndY;

        // Перевіряємо, що свайп був більше горизонтальний, ніж вертикальний
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Свайп вліво
                if (currentSection === "main") {
                    dispatch(setCurrentSection("friendsPost"));
                } else if (currentSection === "friendsPost") {
                    dispatch(setCurrentSection("mediaPost"));
                }
            } else {
                // Свайп вправо
                if (currentSection === "mediaPost") {
                    dispatch(setCurrentSection("friendsPost"));
                } else if (currentSection === "friendsPost") {
                    dispatch(setCurrentSection("main"));
                }
            }
        }
    };
    // Заглушки для нових секцій

    const CollectionsSection = () => (
        <div className="collections-section">
            <div className="scroll-wrapper">
                <PostSave />
            </div>
        </div>
    );
    const renderContent = () => {
        switch (currentSection) {
            //| 'chat' | 'challenges' | 'liveStream' |'search' |
            case "chat":
                return (
                    <div className="chat-section">
                        <div className="scroll-wrapper">
                            <ChatSection />
                        </div>
                    </div>
                );
            case "challenges":
                return (
                    <div className="challenges-section">
                        <div className="scroll-wrapper">
                            <ChallengesSection />
                        </div>
                    </div>
                );
            case "liveStream":
                return (
                    <div className="liveStream-section">
                        <div className="scroll-wrapper">
                            <LiveStreamSection />
                        </div>
                    </div>
                );
            case "search":
                return (
                    <div className="search-section">
                        <div className="scroll-wrapper">
                            <SearchSection />
                        </div>
                    </div>
                );
            case "trending":
                return (
                    <div className="trending-section">
                        <div className="scroll-wrapper">
                            <TrendingSection />
                        </div>
                    </div>
                );
            case "notification":
                return (
                    <div className="notification-section">
                        <div className="scroll-wrapper">
                            <NotificationsSection />
                        </div>
                    </div>
                );
            case "settings":
                return (
                    <div className="settings-section">
                        <div className="scroll-wrapper">
                            <SettingsInterface />
                        </div>
                    </div>
                );
            case "statistics":
                return (
                    <div className="statistics-section">
                        <div className="scroll-wrapper">
                            <StatisticsSection />
                        </div>
                    </div>
                );
            case "collections":
                return <CollectionsSection />;
            case "friendsPost":
                return (
                    <div className="friends-post-section">
                        <h2>Тут будуть пости від друзів</h2>
                    </div>
                );
            case "mediaPost":
                return (
                    <div className="media-post-section">
                        <h2>тут буде тільки медіа картинки відео</h2>
                    </div>
                );
            case "friends":
                return (
                    <FriendsSection
                        friendsAndFollowers={friendsAndFollowers}
                        randomUsersForFriendship={randomUsersForFriendship}
                    />
                );
            case "gallery":
                return <GallerySection />;
            case "profile":
                return <ProfileSection profileData={profileData} />;
            default:
                return (
                    posts &&
                    profileData &&
                    friendsAndFollowers &&
                    postMostViewed &&
                    randomUsersForFriendship && (
                        <MobileDashboard
                            posts={posts}
                            profileData={profileData}
                            friendsAndFollowers={friendsAndFollowers}
                            postMostViewed={postMostViewed}
                            randomUsersForFriendship={randomUsersForFriendship}
                        />
                    )
                );
        }
    };

    // Обробники для нижньої навігації
    const handleNavigation = (section: UiState["currentSection"]) => {
        dispatch(setCurrentSection(section));
    };

    return (
        <div className="mobile-layout">
            <HeaderSection user={user} />
            <MobileSideMenu />
            <main
                className="mobile-content"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className={`content-container section-${currentSection}`}>
                    {renderContent()}
                </div>
            </main>

            <nav className="bottom-nav">
                <button
                    className={`nav-btn ${
                        currentSection === "main" ? "active" : ""
                    }`}
                    onClick={() => handleNavigation("main")}
                >
                    <i className="bi bi-house"></i>
                    <span>Home</span>
                </button>
                <button
                    className={`nav-btn ${
                        currentSection === "friends" ? "active" : ""
                    }`}
                    onClick={() => handleNavigation("friends")}
                >
                    <i className="bi bi-people"></i>
                    <span>Friends</span>
                </button>
                <button
                    className="nav-btn"
                    onClick={() => setIsPostModalOpen(true)}
                >
                    <i className="bi bi-plus-square"></i>
                    <span>Add</span>
                </button>
                <button
                    className={`nav-btn ${
                        currentSection === "gallery" ? "active" : ""
                    }`}
                    onClick={() => handleNavigation("gallery")}
                >
                    <i className="bi bi-collection"></i>
                    <span>Gallery</span>
                </button>
                <button
                    className={`nav-btn ${
                        currentSection === "profile" ? "active" : ""
                    }`}
                    onClick={() => handleNavigation("profile")}
                >
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                </button>
            </nav>

            {isPostModalOpen && profileData && (
                <MobileParentSayPost
                    profileData={profileData}
                    onCreatePost={() => setIsPostModalOpen(false)}
                    onClose={() => setIsPostModalOpen(false)}
                />
            )}
        </div>
    );
};

export default MobileLayout;
