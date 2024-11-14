import React, { useState } from 'react';

interface VideoInfo {
    likes: string;
    comments: string;
    stars: string;
    username: string;
    description: string;
    musicTrack: string;
}

interface FriendInfo {
    avatar: string;
    name: string;
    username: string;
    followers: string;
}

interface GalleryItem {
    id: string;
    likes: string;
    comments: string;
    type: 'photo' | 'video';
    url: string;
}

type PageType = 'home' | 'friends' | 'gallery';

const ProfileFriends: React.FC = () => {
    const [activePage, setActivePage] = useState<PageType>('home');
    const [activeCategory, setActiveCategory] = useState('Усі');
    const [activeFilter, setActiveFilter] = useState('Усі');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    
    // Приклад даних
    const videoInfo: VideoInfo = {
        likes: '123K',
        comments: '1.2K',
        stars: '56K',
        username: '@username',
        description: 'Опис відео з #хештегами #тренди #вайб',
        musicTrack: 'Назва треку - Виконавець'
    };

    const friends: FriendInfo[] = [
        {
            avatar: '',
            name: "Ім'я Користувача",
            username: '@username',
            followers: '1.2K'
        }
        // Додайте більше друзів за потреби
    ];

    const handleFileUpload = (event: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => {
        // Логіка завантаження файлу
        event.preventDefault();
        console.log('File upload logic here');
    };

    return (
        <div className="profile-container">
            {/* Home Page */}
            <div className={`page ${activePage === 'home' ? 'active' : ''}`} id="home-page">
                <div className="video-container">
                    <div className="video-actions">
                        <div className="action-item">
                            <div className="action-icon">❤️</div>
                            <span>{videoInfo.likes}</span>
                        </div>
                        <div className="action-item">
                            <div className="action-icon">💬</div>
                            <span>{videoInfo.comments}</span>
                        </div>
                        <div className="action-item">
                            <div className="action-icon">⭐</div>
                            <span>{videoInfo.stars}</span>
                        </div>
                        <div className="action-item">
                            <div className="action-icon">↪️</div>
                            <span>Share</span>
                        </div>
                    </div>

                    <div className="video-info">
                        <div className="video-author">
                            <div className="author-avatar" />
                            <div>
                                <strong>{videoInfo.username}</strong>
                                <button className="subscribe-btn">Підписатися</button>
                            </div>
                        </div>
                        <p className="video-description">{videoInfo.description}</p>
                        <div className="music-info">
                            🎵 {videoInfo.musicTrack}
                        </div>
                    </div>
                </div>
            </div>

            {/* Friends Page */}
            <div className={`page ${activePage === 'friends' ? 'active' : ''}`} id="friends-page">
                <div className="header">
                    <h1>Друзі</h1>
                </div>

                <div className="friends-categories">
                    {['Усі', 'Нові', 'Популярні', 'Рекомендації'].map(category => (
                        <div
                            key={category}
                            className={`category-chip ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>

                <div className="friend-list">
                    {friends.map((friend, index) => (
                        <div key={index} className="friend-card">
                            <div className="author-avatar" />
                            <div className="friend-info">
                                <h3>{friend.name}</h3>
                                <p>{friend.username}</p>
                                <p>{friend.followers} підписників</p>
                            </div>
                            <div className="friend-actions">
                                <button className="subscribe-btn">Підписатися</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Page */}
            <div className={`page ${activePage === 'gallery' ? 'active' : ''}`} id="gallery-page">
                <div className="header">
                    <h1>Галерея</h1>
                </div>

                <div className="gallery-filters">
                    {['Усі', 'Фото', 'Відео', 'Збережені'].map(filter => (
                        <span
                            key={filter}
                            className={`filter-item ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </span>
                    ))}
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item">
                        <div className="item-stats">
                            <span>❤️ 1.2K</span>
                            <span>💬 234</span>
                        </div>
                    </div>
                    {/* Додайте більше елементів галереї */}
                </div>
            </div>

            {/* Create Modal */}
            {isCreateModalOpen && (
                <div className="create-modal">
                    <div className="modal-header">
                        <h2>Створити пост</h2>
                        <button onClick={() => setIsCreateModalOpen(false)}>×</button>
                    </div>

                    <div 
                        className="upload-area"
                        onDrop={handleFileUpload}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <div>
                            <span>📤</span>
                            <p>Натисніть щоб завантажити або перетягніть файл</p>
                        </div>
                        <input
                            type="file"
                            hidden
                            onChange={handleFileUpload}
                        />
                    </div>

                    <button className="publish-btn">Опублікувати</button>
                </div>
            )}
        </div>
    );
};

export default ProfileFriends;