import React, { useState } from 'react';

interface PersonalInfo {
    name: string;
    username: string;
    bio: string;
    email: string;
}

interface SettingsInterfaceProps {
    onBack?: () => void;
}

const SettingsInterface: React.FC<SettingsInterfaceProps> = ({ onBack }) => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
        name: '',
        username: '',
        bio: '',
        email: ''
    });
    const [isPersonalInfoModalOpen, setIsPersonalInfoModalOpen] = useState(false);
    const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
    const [isPrivateAccount, setIsPrivateAccount] = useState(false);
    const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] = useState(true);
    const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] = useState(false);

    const handlePersonalInfoSave = () => {
        // Логіка збереження персональної інформації
        setIsPersonalInfoModalOpen(false);
    };

    const handleLogout = () => {
        // Логіка виходу
        console.log('Logging out...');
    };

    return (
        <div className="settings-container">
            {/* Header */}
            <div className="settings-header">
                <button className="back-button" onClick={onBack}>←</button>
                <h2>Налаштування</h2>
                <div style={{ width: '24px' }} />
            </div>

            {/* Profile Section */}
            <div className="profile-section">
                <div className="profile-avatar">
                    <div className="camera-icon">📷</div>
                </div>
                <h3>@username</h3>
                <button className="edit-profile-btn">Редагувати профіль</button>
            </div>

            {/* Account Section */}
            <div className="settings-section">
                <div className="section-title">ОБЛІКОВИЙ ЗАПИС</div>

                <div className="setting-item" onClick={() => setIsPersonalInfoModalOpen(true)}>
                    <div className="setting-left">
                        <div className="setting-icon">👤</div>
                        <div className="setting-info">
                            <div className="setting-name">Особиста інформація</div>
                            <div className="setting-description">Ім'я, біографія, email</div>
                        </div>
                    </div>
                    <div className="setting-value">→</div>
                </div>

                <div className="setting-item">
                    <div className="setting-left">
                        <div className="setting-icon">🔒</div>
                        <div className="setting-info">
                            <div className="setting-name">Пароль і безпека</div>
                            <div className="setting-description">Змінити пароль, двофакторна автентифікація</div>
                        </div>
                    </div>
                    <div className="setting-value">→</div>
                </div>
            </div>

            {/* Privacy Section */}
            <div className="settings-section">
                <div className="section-title">ПРИВАТНІСТЬ</div>

                <div className="setting-item">
                    <div className="setting-left">
                        <div className="setting-icon">👁️</div>
                        <div className="setting-info">
                            <div className="setting-name">Приватний акаунт</div>
                            <div className="setting-description">Тільки схвалені підписники можуть бачити ваші пости</div>
                        </div>
                    </div>
                    <div 
                        className={`toggle-switch ${isPrivateAccount ? 'active' : ''}`}
                        onClick={() => setIsPrivateAccount(!isPrivateAccount)}
                    />
                </div>

                <div className="setting-item">
                    <div className="setting-left">
                        <div className="setting-icon">💬</div>
                        <div className="setting-info">
                            <div className="setting-name">Коментарі</div>
                            <div className="setting-description">Керувати тим, хто може коментувати</div>
                        </div>
                    </div>
                    <div className="setting-value">Усі →</div>
                </div>
            </div>

            {/* Notifications Section */}
            <div className="settings-section">
                <div className="section-title">СПОВІЩЕННЯ</div>

                <div className="setting-item">
                    <div className="setting-left">
                        <div className="setting-icon">🔔</div>
                        <div className="setting-info">
                            <div className="setting-name">Push-сповіщення</div>
                            <div className="setting-description">Лайки, коментарі, нові підписники</div>
                        </div>
                    </div>
                    <div 
                        className={`toggle-switch ${isPushNotificationsEnabled ? 'active' : ''}`}
                        onClick={() => setIsPushNotificationsEnabled(!isPushNotificationsEnabled)}
                    />
                </div>

                <div className="setting-item">
                    <div className="setting-left">
                        <div className="setting-icon">📧</div>
                        <div className="setting-info">
                            <div className="setting-name">Email сповіщення</div>
                            <div className="setting-description">Важливі оновлення та активність</div>
                        </div>
                    </div>
                    <div 
                        className={`toggle-switch ${isEmailNotificationsEnabled ? 'active' : ''}`}
                        onClick={() => setIsEmailNotificationsEnabled(!isEmailNotificationsEnabled)}
                    />
                </div>
            </div>

            {/* Appearance Section */}
            <div className="settings-section">
                <div className="section-title">ВИГЛЯД</div>

                <div className="setting-item" onClick={() => setIsThemeModalOpen(true)}>
                    <div className="setting-left">
                        <div className="setting-icon">🌙</div>
                        <div className="setting-info">
                            <div className="setting-name">Тема</div>
                            <div className="setting-description">Темна</div>
                        </div>
                    </div>
                    <div className="setting-value">→</div>
                </div>

                <div className="setting-item">
                    <div className="setting-left">
                        <div className="setting-icon">🌐</div>
                        <div className="setting-info">
                            <div className="setting-name">Мова</div>
                            <div className="setting-description">Українська</div>
                        </div>
                    </div>
                    <div className="setting-value">→</div>
                </div>
            </div>

            {/* Other Section */}
            <div className="settings-section">
                <div className="section-title">ІНШЕ</div>

                <div className="setting-item">
                    <div className="setting-left">
                        <div className="setting-icon">❓</div>
                        <div className="setting-info">
                            <div className="setting-name">Допомога</div>
                            <div className="setting-description">Центр підтримки, умови використання</div>
                        </div>
                    </div>
                    <div className="setting-value">→</div>
                </div>

                <div className="setting-item logout" onClick={handleLogout}>
                    <div className="setting-left">
                        <div className="setting-icon">🚪</div>
                        <div className="setting-info">
                            <div className="setting-name">Вийти</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Personal Info Modal */}
            {isPersonalInfoModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Особиста інформація</h3>
                            <button 
                                className="close-button"
                                onClick={() => setIsPersonalInfoModalOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="form-group">
                            <label>Ім'я</label>
                            <input
                                type="text"
                                value={personalInfo.name}
                                onChange={(e) => setPersonalInfo({
                                    ...personalInfo,
                                    name: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Ім'я користувача</label>
                            <input
                                type="text"
                                value={personalInfo.username}
                                onChange={(e) => setPersonalInfo({
                                    ...personalInfo,
                                    username: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Біографія</label>
                            <textarea
                                value={personalInfo.bio}
                                onChange={(e) => setPersonalInfo({
                                    ...personalInfo,
                                    bio: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={personalInfo.email}
                                onChange={(e) => setPersonalInfo({
                                    ...personalInfo,
                                    email: e.target.value
                                })}
                            />
                        </div>
                        <button 
                            className="save-button"
                            onClick={handlePersonalInfoSave}
                        >
                            Зберегти
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsInterface;