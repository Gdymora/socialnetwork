import { useState } from "react";

interface GallerySectionProps {}
const GallerySection = () => {
    const [isAlbumOpen, setIsAlbumOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [selectionMode, setSelectionMode] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);
    const [activeFilter, setActiveFilter] = useState("Усі");
    const [selectedMedia, setSelectedMedia] = useState<Set<number>>(new Set());

    const toggleSelectionMode = () => {
        setSelectionMode(!selectionMode);
        setSelectedCount(0);
        setSelectedMedia(new Set());
    };

    const handleMediaClick = (index: number) => {
        if (selectionMode) {
            const newSelection = new Set(selectedMedia);
            if (newSelection.has(index)) {
                newSelection.delete(index);
            } else {
                newSelection.add(index);
            }
            setSelectedMedia(newSelection);
            setSelectedCount(newSelection.size);
        }
    };

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    const openAlbum = () => {
        setIsAlbumOpen(true);
    };

    const closeAlbum = () => {
        setIsAlbumOpen(false);
    };

    const openSettings = () => {
        setIsSettingsOpen(prev => !prev);
    };

    const closeSettings = () => {
        setIsSettingsOpen(false);
    };

    const closeAllModals = () => {
        closeAlbum();
        closeSettings();
    };

    return (
        <div className="gallery-section">
            {/* Overlay */}
            {(isAlbumOpen || isSettingsOpen) && (
                <div className="modal-overlay" onClick={closeAllModals}></div>
            )}

            {/* Album Modal */}
            {isAlbumOpen && (
                <div className="album-modal">
                    <div className="album-modal-header">
                        <button className="action-btn" onClick={closeAlbum}>
                            ←
                        </button>
                        <div className="album-modal-title">
                            <h2>Подорожі</h2>
                        </div>
                        <button className="action-btn">⋮</button>
                    </div>
                    <div className="album-content">
                        <div className="album-info-bar">
                            <p>Створено: 10 жовтня 2023</p>
                            <div className="album-stats">
                                <div className="stat-item">
                                    <div className="stat-value">125</div>
                                    <div className="stat-label">Фото</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">1.2K</div>
                                    <div className="stat-label">Переглядів</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">45</div>
                                    <div className="stat-label">Коментарів</div>
                                </div>
                            </div>
                        </div>
                        <div className="media-grid">
                            {[1, 2].map((_, index) => (
                                <div className="media-item" key={index}>
                                    <div className="media-preview">🏖️</div>
                                    <div className="media-type">🖼️</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Menu */}
            {isSettingsOpen && (
                <div className="settings-menu">
                    <div className="menu-header">
                        <div className="menu-indicator"></div>
                        <h3>Налаштування галереї</h3>
                    </div>
                    <div className="menu-item">
                        <div className="menu-icon">📁</div>
                        <div className="menu-text">
                            <div>Створити альбом</div>
                            <div style={{ fontSize: "12px", color: "#999" }}>
                                Організуйте свої медіа
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-icon">🔄</div>
                        <div className="menu-text">
                            <div>Синхронізувати</div>
                            <div style={{ fontSize: "12px", color: "#999" }}>
                                Оновити медіафайли
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-icon">🔍</div>
                        <div className="menu-text">
                            <div>Знайти дублікати</div>
                            <div style={{ fontSize: "12px", color: "#999" }}>
                                Очистити галерею
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="menu-icon">⚙️</div>
                        <div className="menu-text">
                            <div>Налаштування відображення</div>
                            <div style={{ fontSize: "12px", color: "#999" }}>
                                Змінити вигляд галереї
                            </div>
                        </div>
                    </div>
                    <div className="menu-item" style={{ color: "#FF3B30" }}>
                        <div className="menu-icon">🗑️</div>
                        <div className="menu-text">
                            <div>Очистити кеш</div>
                            <div style={{ fontSize: "12px", color: "#999" }}>
                                Видалити тимчасові файли
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div>
                {/* Header */}
                <div className="gallery-header">
                    <div className="gallery-header-title">Галерея</div>
                    <div className="gallery-header-actions">
                        <button
                            className="action-btn"
                            onClick={toggleSelectionMode}
                        >
                            ☑️
                        </button>
                        <button className="action-btn" onClick={()=>openSettings()}>
                            ⋮
                        </button>
                    </div>
                </div>

                {/* Selection Header */}
                {selectionMode && (
                    <div className="selection-header">
                        <div className="selection-actions">
                            <span className="selected-count">
                                Вибрано: {selectedCount}
                            </span>
                            <div>
                                <button className="action-btn">📥</button>
                                <button className="action-btn">🗑️</button>
                                <button
                                    className="action-btn"
                                    onClick={()=>toggleSelectionMode()}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filters */}
                <div className="filters-container">
                    <div className="filters-scroll">
                        {["Усі", "Фото", "Відео", "Альбоми", "Збережені"].map(
                            (filter) => (
                                <div
                                    key={filter}
                                    className={`filter-chip ${
                                        activeFilter === filter ? "active" : ""
                                    }`}
                                    onClick={() => handleFilterClick(filter)}
                                >
                                    {filter}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Albums Section */}
                <div className="albums-section">
                    <div className="section-title">Альбоми</div>
                    <div className="albums-grid">
                        <div className="album-card" onClick={()=>openAlbum()}>
                            <div className="album-preview">📸</div>
                            <div className="album-info">
                                <div className="album-name">Подорожі</div>
                                <div className="album-count">125 фото</div>
                            </div>
                        </div>
                        <div className="album-card">
                            <div className="album-preview">🎬</div>
                            <div className="album-info">
                                <div className="album-name">Відео</div>
                                <div className="album-count">43 відео</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Media Grid */}
                <div className="media-grid">
                    {[1, 2].map((_, index) => (
                       <div key={`media-group-${index}`}>
                            
                            <div
                                className={`media-item ${
                                    selectedMedia.has(index) ? "selected" : ""
                                }`}
                                key={index}
                                onClick={() => handleMediaClick(index)}
                            >
                                <div className="media-preview">📸</div>
                                <div className="media-type">🖼️</div>
                                <div className="media-actions">
                                    <button className="action-btn">❤️</button>
                                    <button className="action-btn">💬</button>
                                    <button className="action-btn">↪️</button>
                                </div>
                            </div>
                            <div className="media-item">
                                <div className="media-preview">🎬</div>
                                <div className="media-type">▶️</div>
                                <div className="media-select"></div>
                                <div className="media-actions">
                                    <button className="action-btn">❤️</button>
                                    <button className="action-btn">💬</button>
                                    <button className="action-btn">↪️</button>
                                </div>
                            </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
