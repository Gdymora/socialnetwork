import { FriendsAndFollowers, RandomUserForFriendship } from "@/types";
import { useState } from "react";

interface FriendsSectionProps {
    friendsAndFollowers?: FriendsAndFollowers;
    randomUsersForFriendship?: RandomUserForFriendship[];
}
const FriendsSection = ({
    friendsAndFollowers,
    randomUsersForFriendship,
}: FriendsSectionProps) => {
    const [activeFilter, setActiveFilter] = useState<string>("Усі");
    const [subscriptions, setSubscriptions] = useState<{ [key: string]: boolean }>({
        "Іван Петренко": false,
        "Марія Ковальчук": false,
    });

    const toggleSubscription = (name: string) => {
        setSubscriptions((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div className="profile-content">
            {/* Header with search */}
            <div className="friends-page-header">
                <div className="friends-page-search-bar">
                    <input
                        type="text"
                        className="friends-page-search-input"
                        placeholder="Пошук друзів..."
                    />
                </div>
            </div>

            {/* Stories */}
            <div className="stories-container">
                {["Ваша історія", "user123", "friend456"].map((username, index) => (
                    <div className="story" key={index}>
                        <div className="story-ring">
                            <div className="story-avatar" />
                        </div>
                        <span className="story-username">{username}</span>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="filters">
                {["Усі", "Онлайн", "Нові", "Спільні друзі", "Рекомендації"].map(
                    (filter) => (
                        <div
                            key={filter}
                            className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </div>
                    )
                )}
            </div>

            {/* Popular Section */}
            <div className="section-title">Популярні</div>
            <div className="friend-card">
                <div className="friend-avatar-container">
                    <div className="friend-avatar" />
                    <div className="online-status" />
                </div>
                <div className="friend-info">
                    <div className="friend-name">Іван Петренко</div>
                    <div className="friend-username">@ivan_p</div>
                    <div className="friend-stats">3.2K підписників • 120 відео</div>
                    <div className="mutual-friends">
                        <div className="mutual-avatars">
                            <div className="mutual-avatar" />
                            <div className="mutual-avatar" />
                        </div>
                        <span>12 спільних друзів</span>
                    </div>
                </div>
                <div className="friend-actions">
                    <button
                        className={`action-btn ${
                            subscriptions["Іван Петренко"] ? "secondary" : "primary"
                        }`}
                        onClick={() => toggleSubscription("Іван Петренко")}
                    >
                        {subscriptions["Іван Петренко"] ? "Відписатися" : "Підписатися"}
                    </button>
                </div>
            </div>

            {/* Recommendations Section */}
            <div className="section-title">Рекомендації</div>
            <div className="friend-card">
                <div className="friend-avatar-container">
                    <div className="friend-avatar" />
                </div>
                <div className="friend-info">
                    <div className="friend-name">Марія Ковальчук</div>
                    <div className="friend-username">@maria_k</div>
                    <div className="friend-stats">1.8K підписників • 85 відео</div>
                    <div className="mutual-friends">
                        <div className="mutual-avatars">
                            <div className="mutual-avatar" />
                            <div className="mutual-avatar" />
                            <div className="mutual-avatar" />
                        </div>
                        <span>8 спільних друзів</span>
                    </div>
                </div>
                <div className="friend-actions">
                    <button
                        className={`action-btn ${
                            subscriptions["Марія Ковальчук"] ? "secondary" : "primary"
                        }`}
                        onClick={() => toggleSubscription("Марія Ковальчук")}
                    >
                        {subscriptions["Марія Ковальчук"] ? "Відписатися" : "Підписатися"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FriendsSection;
