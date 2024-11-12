import { ProfileData } from "@/types";
import { useState } from "react";

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
        <div className="profile-content">
            <div className="profile-header">
                <div className="profile-avatar"></div>
                <h2>Ім'я Користувача</h2>
                <p style={{ color: "#999", margin: "5px 0" }}>@username</p>

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

                <button className="edit-profile-btn">Редагувати профіль</button>
            </div>

            <div className="profile-tabs">
                <div
                    className={`tab ${activeTab === "posts" ? "active" : ""}`}
                    onClick={() => switchTab("posts")}
                >
                    <span>Дописи</span>
                </div>
                <div
                    className={`tab ${activeTab === "likes" ? "active" : ""}`}
                    onClick={() => switchTab("likes")}
                >
                    <span>Лайки</span>
                </div>
                <div
                    className={`tab ${activeTab === "saved" ? "active" : ""}`}
                    onClick={() => switchTab("saved")}
                >
                    <span>Збережені</span>
                </div>
            </div>

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
                    {/* 
                <!-- Додаткові пости --> */}
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
                    <div id="likes">{/* likesContent */}</div>
                )}
                {activeTab === "saved" && (
                    <div id="saved">{/* savedContent */}</div>
                )}
            </div>
        </div>
    );
};

export default ProfileSection;
