import React, { useState } from 'react';

interface TrendingVideo {
    id: string;
    title: string;
    views: string;
    likes: string;
    duration: string;
}

interface Hashtag {
    name: string;
    totalPosts: string;
    todayPosts: string;
}

interface Creator {
    rank: number;
    username: string;
    isVerified: boolean;
    followers: string;
    likes: string;
}

interface Sound {
    id: string;
    name: string;
    author: string;
    videoCount: string;
}

const TrendingContent: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Зараз');

    // Приклад даних
    const categories = ['Зараз', 'Музика', 'Танці', 'Гумор', 'Ігри', 'Спорт'];
    
    const trendingVideos: TrendingVideo[] = [
        {
            id: '1',
            title: 'Назва відео',
            views: '1.2M',
            likes: '256K',
            duration: '0:30'
        },
        // Додайте більше відео за потреби
    ];

    const hashtags: Hashtag[] = [
        {
            name: '#challenge',
            totalPosts: '1.2M',
            todayPosts: '500K'
        },
        // Додайте більше хештегів
    ];

    const creators: Creator[] = [
        {
            rank: 1,
            username: 'username',
            isVerified: true,
            followers: '1.2M',
            likes: '45M'
        },
        // Додайте більше креаторів
    ];

    const sounds: Sound[] = [
        {
            id: '1',
            name: 'Назва звуку',
            author: 'Автор',
            videoCount: '1.2M'
        },
        // Додайте більше звуків
    ];

    return (
        <div className="trends-container">
            <div className="header">
                <h2>Тренди</h2>
            </div>

            {/* Categories */}
            <div className="categories">
                {categories.map(category => (
                    <div
                        key={category}
                        className={`category-chip ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            {/* Trending Videos Section */}
            <div className="trend-container">
                <div className="trend-header">
                    <div className="fire-tag">
                        🔥 Тренди дня
                    </div>
                    <div className="live-counter">
                        <div className="pulse-dot" />
                        1.2M переглядів зараз
                    </div>
                </div>

                <div className="trending-videos">
                    {trendingVideos.map(video => (
                        <div key={video.id} className="video-card">
                            <div className="video-preview">
                                🎬
                                <div className="video-duration">{video.duration}</div>
                            </div>
                            <div className="video-info">
                                <div className="video-title">{video.title}</div>
                                <div className="video-stats">
                                    {video.views} переглядів {video.likes} лайків
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hashtags Section */}
            <div className="trend-container">
                <div className="trend-header">
                    <h3>Популярні хештеги</h3>
                </div>
                <div className="hashtags-grid">
                    {hashtags.map(hashtag => (
                        <div key={hashtag.name} className="hashtag-card">
                            <div className="hashtag-name">{hashtag.name}</div>
                            <div className="hashtag-stats">
                                {hashtag.totalPosts} постів • {hashtag.todayPosts} сьогодні
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Creators Section */}
            <div className="trend-container">
                <div className="trend-header">
                    <h3>Популярні творці</h3>
                </div>
                <div className="creators-list">
                    {creators.map(creator => (
                        <div key={creator.username} className="creator-card">
                            <div className="creator-avatar">
                                <div className="rank-badge">{creator.rank}</div>
                            </div>
                            <div className="creator-info">
                                <div className="creator-name">
                                    {creator.username} 
                                    {creator.isVerified && <span className="verified-badge">✓</span>}
                                </div>
                                <div className="creator-stats">
                                    {creator.followers} підписників • {creator.likes} лайків
                                </div>
                            </div>
                            <button className="subscribe-btn">Підписатися</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sounds Section */}
            <div className="trend-container">
                <div className="trend-header">
                    <h3>Популярні звуки</h3>
                </div>
                <div className="trending-sounds">
                    {sounds.map(sound => (
                        <div key={sound.id} className="sound-card">
                            <div className="sound-icon">♪</div>
                            <div className="sound-info">
                                <div className="sound-name">{sound.name}</div>
                                <div className="sound-author">
                                    {sound.author} • {sound.videoCount} відео
                                </div>
                            </div>
                            <button className="use-sound-btn">Використати</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingContent;