import MobileDashboard from "@/MobileVersion/MobileDashboard";
import {
    FriendsAndFollowers,
    PostType,
    PostsListProps,
    ProfileData,
    RandomUserForFriendship,
    User,
    postMostViewed,
} from "@/types";
import { Link } from "@inertiajs/react";
import React, { ReactElement, ReactNode, useRef, useState } from "react";

interface MobileLayoutProps {
    user: User; // тільки user обов'язковий
    children?: ReactNode;
    posts?: PostType[];
    profileData?: ProfileData;
    friendsAndFollowers?: FriendsAndFollowers;
    postMostViewed?: postMostViewed[];
    randomUsersForFriendship?: RandomUserForFriendship[];
}

const MobileLayout = ({
    user,
    children,
    posts,
    friendsAndFollowers,
    profileData,
    postMostViewed,
    randomUsersForFriendship,
}: MobileLayoutProps) => {
    const [currentSection, setCurrentSection] = useState<
        "main" | "friends" | "gallery"
    >("main");
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
                setCurrentSection((prev) => {
                    if (prev === "main") return "friends";
                    if (prev === "friends") return "gallery";
                    return prev;
                });
            } else {
                // Свайп вправо
                setCurrentSection((prev) => {
                    if (prev === "gallery") return "friends";
                    if (prev === "friends") return "main";
                    return prev;
                });
            }
        }
    };

    const renderContent = () => {
        switch (currentSection) {
            case "friends":
                return (
                    <div className="friends-section">
                        <h2>Friends Section</h2>
                        {/* Тут буде контент друзів */}
                    </div>
                );
            case "gallery":
                return (
                    <div className="gallery-section">
                        <h2>Gallery Section</h2>
                        {/* Тут буде галерея */}
                    </div>
                );
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
    return (
        <div className="mobile-layout">
            {/* Верхній бар */}
            <div className="top-bar">
                <div className="status-bar">
                    {/* <span>10:45</span>
            <div className="status-icons">
              <i className="bi bi-reception-4"></i>
              <i className="bi bi-wifi"></i>
              <i className="bi bi-battery-full"></i>
            </div> */}
                    {/* Індикатор поточної секції */}
                    <div className="section-indicator">
                        <div
                            className={`indicator ${
                                currentSection === "main" ? "active" : ""
                            }`}
                        />
                        <div
                            className={`indicator ${
                                currentSection === "friends" ? "active" : ""
                            }`}
                        />
                        <div
                            className={`indicator ${
                                currentSection === "gallery" ? "active" : ""
                            }`}
                        />
                    </div>
                </div>

                <div className="header-actions">
                    <span className="header-title">Reels</span>
                    <i className="bi bi-camera"></i>
                </div>
            </div>
            <main
                className="mobile-content"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className={`content-container section-${currentSection}`}>
                    {renderContent()}
                </div>
            </main>

            {/* Нижня навігація */}
            <nav className="bottom-nav">
                {/*     <Link href="/mobile/dashboard" className="nav-btn">
                    <i className="bi bi-house"></i>
                    <span>Home</span>
                </Link>
                <Link href="/mobile/gallery" className="nav-btn">
                    <i className="bi bi-collection"></i>
                    <span>Gallery</span>
                </Link>
                 <Link href="/mobile/profile" className="nav-btn">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                </Link> */}

                <button className="nav-btn">
                    <i className="bi bi-house"></i>
                    <span>Home</span>
                </button>
                <Link href="/mobile/friends" className="nav-btn">
                    <i className="bi bi-people"></i>
                    <span>Friends</span>
                </Link>
                {/* <button className="nav-btn">
                    <i className="bi bi-search"></i>
                    <span>Search</span>
                </button> */}
                <button className="nav-btn">
                    <i className="bi bi-plus-square"></i>
                    <span>Add</span>
                </button>
                <button className="nav-btn">
                    <i className="bi bi-collection"></i>
                    <span>Gallery</span>
                </button>
                <button className="nav-btn">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                </button>
            </nav>
        </div>
    );
};

export default MobileLayout;
