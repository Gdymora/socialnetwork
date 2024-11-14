import React, { useState } from 'react';

interface Collection {
    id: string;
    icon: string;
    name: string;
    count: number;
}

interface Post {
    id: string;
    type: 'photo' | 'video';
    preview: string;
}

interface PostSaveProps {
    onBack?: () => void;
}

const PostSave: React.FC<PostSaveProps> = ({ onBack }) => {
    const [activeView, setActiveView] = useState<'collections' | 'all'>('collections');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
    const [isPrivate, setIsPrivate] = useState(true);
    const [newCollectionName, setNewCollectionName] = useState('');

    // Приклад даних
    const collections: Collection[] = [
        { id: '1', icon: '🎬', name: 'Відео', count: 45 },
        { id: '2', icon: '📸', name: 'Фото', count: 89 },
        { id: '3', icon: '⭐', name: 'Улюблене', count: 122 },
    ];

    const handleCreateCollection = () => {
        // Логіка створення колекції
        setIsCreateModalOpen(false);
        setNewCollectionName('');
    };

    const openCollection = (collection: Collection) => {
        // Логіка відкриття колекції
        console.log('Opening collection:', collection.name);
    };

    return (
        <div className="post-save-container">
            {/* Header */}
            <div className="post-save-header">
                <button className="vback-button" onClick={onBack}>←</button>
                <h2>Збережене</h2>
                <button 
                    className="post-save-add-button"
                    onClick={() => setIsCreateModalOpen(true)}
                >
                    +
                </button>
            </div>

            {/* Stats Bar */}
            <div className="post-save-stats-bar">
                <div className="post-save-stat-item">
                    <div className="post-save-stat-value">12</div>
                    <div className="post-save-stat-label">Колекцій</div>
                </div>
                <div className="post-save-stat-item">
                    <div className="post-save-stat-value">256</div>
                    <div className="post-save-stat-label">Збережень</div>
                </div>
                <div className="post-save-stat-item">
                    <div className="post-save-stat-value">45</div>
                    <div className="post-save-stat-label">Відео</div>
                </div>
            </div>

            {/* View Switcher */}
            <div className="post-save-view-switcher">
                <div 
                    className={`view-option ${activeView === 'collections' ? 'active' : ''}`}
                    onClick={() => setActiveView('collections')}
                >
                    Колекції
                </div>
                <div 
                    className={`view-option ${activeView === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveView('all')}
                >
                    Усі збереження
                </div>
            </div>

            {/* Collections Grid */}
            {activeView === 'collections' && (
                <div className="post-save-collections-grid">
                    {collections.map(collection => (
                        <div 
                            key={collection.id}
                            className="post-save-collection-card"
                            onClick={() => openCollection(collection)}
                        >
                            <div className="post-save-collection-preview">
                                {collection.icon}
                            </div>
                            <div className="post-save-collection-info">
                                <div className="post-save-collection-name">{collection.name}</div>
                                <div className="post-save-collection-count">
                                    {collection.count} збережень
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Create Collection Modal */}
            {isCreateModalOpen && (
                <div className="post-save-modal">
                    <div className="post-save-modal-content">
                        <div className="post-save-modal-header">
                            <h3>Нова колекція</h3>
                            <button 
                                className="post-save-close-button"
                                onClick={() => setIsCreateModalOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="post-save-form-group">
                            <label>Назва колекції</label>
                            <input
                                type="post-save-text"
                                value={newCollectionName}
                                onChange={(e) => setNewCollectionName(e.target.value)}
                                placeholder="Введіть назву колекції"
                            />
                        </div>
                        <div className="post-save-form-group">
                            <label>Приватність</label>
                            <div className="post-save-privacy-toggle">
                                <button
                                    className={isPrivate ? 'active' : ''}
                                    onClick={() => setIsPrivate(true)}
                                >
                                    Приватна
                                </button>
                                <button
                                    className={!isPrivate ? 'active' : ''}
                                    onClick={() => setIsPrivate(false)}
                                >
                                    Публічна
                                </button>
                            </div>
                        </div>
                        <button 
                            className="post-save-create-button"
                            onClick={handleCreateCollection}
                        >
                            Створити
                        </button>
                    </div>
                </div>
            )}

            {/* Collection Options Modal */}
            {isCollectionModalOpen && (
                <div className="post-save-modal" id="collectionModal">
                    <div className="post-save-modal-content">
                        <div className="post-save-modal-header">
                            <h3>Опції колекції</h3>
                            <button 
                                className="post-save-close-button"
                                onClick={() => setIsCollectionModalOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="post-save-options-menu">
                            <div className="post-save-menu-item">
                                <span className="post-save-menu-icon">✏️</span>
                                <span>Редагувати</span>
                            </div>
                            <div className="post-save-menu-item">
                                <span className="post-save-menu-icon">🔄</span>
                                <span>Змінити обкладинку</span>
                            </div>
                            <div className="post-save-menu-item">
                                <span className="post-save-menu-icon">🔒</span>
                                <span>Змінити приватність</span>
                            </div>
                            <div className="post-save-menu-item">
                                <span className="post-save-menu-icon">↪️</span>
                                <span>Поділитися</span>
                            </div>
                            <div className="post-save-menu-item delete">
                                <span className="post-save-menu-icon">🗑️</span>
                                <span>Видалити</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostSave;