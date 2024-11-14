import React, { useState } from 'react';
import styles from '../styles/LiveStreamSection.module.css';

interface StreamCard {
  id: string;
  title: string;
  viewers: string;
  username: string;
  previewEmoji: string;
}

interface CreateStreamForm {
  title: string;
  category: string;
}

const LiveStreamSection = () => {
  const [activeCategory, setActiveCategory] = useState('Усі');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<CreateStreamForm>({
    title: '',
    category: 'Ігри'
  });

  const categories = ['Усі', 'Ігри', 'Музика', 'Спорт', 'Подорожі', 'Готування'];

  const streams: StreamCard[] = [
    {
      id: '1',
      title: 'Гра в CS:GO',
      viewers: '1.2K',
      username: 'username',
      previewEmoji: '🎮'
    },
    {
      id: '2',
      title: 'Музичний вечір',
      viewers: '856',
      username: 'musician',
      previewEmoji: '🎵'
    }
  ];

  const handleCreateStream = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle stream creation
    setIsModalOpen(false);
  };

  const StreamCard = ({ stream }: { stream: StreamCard }) => (
    <div className={styles.streamCard} onClick={() => console.log('Opening stream:', stream.id)}>
      <div className={styles.streamPreview}>
        {stream.previewEmoji}
      </div>
      <div className={styles.streamInfo}>
        <h3 className={styles.streamTitle}>{stream.title}</h3>
        <div className={styles.streamStats}>
          <span className={styles.liveBadge}>LIVE</span>
          <span>👁️ {stream.viewers}</span>
          <span>@{stream.username}</span>
        </div>
      </div>
    </div>
  );

  const CreateStreamModal = () => (
    <div className={`${styles.streamModal} ${isModalOpen ? styles.show : ''}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Нова трансляція</h3>
          <button 
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleCreateStream}>
          <div className={styles.streamPreviewSection}>
            📱
          </div>

          <div className={styles.formGroup}>
            <label>Назва трансляції</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Категорія</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              {categories.slice(1).map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.startStreamButton}>
            Почати трансляцію
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className={styles.liveContainer}>
      <header className={styles.header}>
        <button className={styles.backButton}>←</button>
        <h2>Живі трансляції</h2>
        <div style={{ width: '24px' }}></div>
      </header>

      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryChip} ${
              activeCategory === category ? styles.active : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.streamsGrid}>
        {streams.map(stream => (
          <StreamCard key={stream.id} stream={stream} />
        ))}
      </div>

      <button 
        className={styles.createStreamButton}
        onClick={() => setIsModalOpen(true)}
      >
        📱
      </button>

      <CreateStreamModal />
    </div>
  );
};

export default LiveStreamSection;