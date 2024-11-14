import { ProfileData } from "@/types";
import { SetStateAction, useState } from "react";
import SettingsInterface from "./Profile/SettingsInterface";

interface ProfileSectionProps {
    profileData?: ProfileData;
}

const ProfileSection = ({ profileData }: ProfileSectionProps) => {
    const [activeTab, setActiveTab] = useState<"posts" | "likes" | "saved">(
        "posts"
    ); 

    const switchTab = (tab: "posts" | "likes" | "saved") => {
        setActiveTab(tab);
    }; 

    return (
        <div className="scroll-wrapper">
            <div>
                <div className="profile-content">
                    <div className="profile-topbar">
                        <div className="profile-topbar-title">Акаунт</div>
                        <div className="profile-topbar-actions">
                            <button className="action-btn">⋮</button>
                        </div>
                    </div>
                    <div className="profile-header">
                        <div className="profile-avatar"></div>
                        <h2>Ім'я Користувача</h2>
                        <p style={{ color: "#999", margin: "5px 0" }}>
                            @username
                        </p>

                        <div className="profile-stats">
                            <div className="stat-item">
                                <div className="stat-number">1.2K</div>
                                <div className="stat-label">Дописи</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">4.5K</div>
                                <div className="stat-label">Підписники</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">985</div>
                                <div className="stat-label">Підписки</div>
                            </div>
                        </div>

                        <button
                            className="edit-profile-btn"                            
                        >
                            Редагувати профіль
                        </button>
                    </div>

                    <div className="profile-tabs">
                        <div
                            className={`tab ${
                                activeTab === "posts" ? "active" : ""
                            }`}
                            onClick={() => switchTab("posts")}
                        >
                            <span>Дописи</span>
                        </div>
                        <div
                            className={`tab ${
                                activeTab === "likes" ? "active" : ""
                            }`}
                            onClick={() => switchTab("likes")}
                        >
                            <span>Лайки</span>
                        </div>
                        <div
                            className={`tab ${
                                activeTab === "saved" ? "active" : ""
                            }`}
                            onClick={() => switchTab("saved")}
                        >
                            <span>Збережені</span>
                        </div>
                    </div>

                    <div className="tab-content">
                        {activeTab === "posts" && (
                            <div id="posts">
                                {
                                    <div className="profile-grid">
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 1.2K</span>
                                                    <span>💬 234</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 3.4K</span>
                                                    <span>💬 567</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 892</span>
                                                    <span>💬 123</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 
                    <!-- Додаткові пости --> */}
                                    </div>
                                }
                            </div>
                        )}
                        {activeTab === "likes" && (
                            <div id="likes">
                                <div id="posts" className="tab-content active">
                                    <div className="profile-grid">
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 1.2K</span>
                                                    <span>💬 234</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 3.4K</span>
                                                    <span>💬 567</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 892</span>
                                                    <span>💬 123</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "saved" && (
                            <div id="saved">
                                <div id="posts" className="tab-content active">
                                    <div className="profile-grid">
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 1.2K</span>
                                                    <span>💬 234</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 3.4K</span>
                                                    <span>💬 567</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-post">
                                            <div className="post-overlay">
                                                <div className="post-stats">
                                                    <span>❤️ 892</span>
                                                    <span>💬 123</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ProfileSection;
