import { useState } from 'react';
import styles from '../styles/SearchSection.module.css';

interface User {
  username: string;
  isVerified: boolean;
  followers: string;
  videoCount: number;
}

interface Post {
  type: '🎬' | '📸' | '🎵';
  views: string;
  likes: string;
}

interface Hashtag {
  name: string;
  posts: string;
}

const SearchSection = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [selectedSort, setSelectedSort] = useState('За популярністю');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const filters = ['Все', 'Люди', 'Відео', 'Фото', 'Хештеги', 'Музика'];
  
  const users: User[] = [{
    username: 'username',
    isVerified: true,
    followers: '1.2M',
    videoCount: 45
  }];

  const posts: Post[] = [
    { type: '🎬', views: '12.5K', likes: '2.3K' },
    { type: '📸', views: '8.9K', likes: '1.8K' },
    { type: '🎵', views: '15.2K', likes: '3.4K' }
  ];

  const hashtags: Hashtag[] = [
    { name: '#тренд', posts: '1.2M' },
    { name: '#challenge', posts: '890K' }
  ];

  const SectionTitle = ({ title, showAll = true }: { title: string, showAll?: boolean }) => (
    <div className={styles.sectionTitle}>
      <h3>{title}</h3>
      {showAll && <span className={styles.showAll}>Дивитися всі</span>}
    </div>
  );

  const AdvancedFilters = () => {
    const filterSections = [
      {
        title: 'Сортування',
        options: ['За популярністю', 'Найновіші', 'Найбільше лайків']
      },
      {
        title: 'Тривалість',
        options: ['Короткі', 'Середні', 'Довгі']
      },
      {
        title: 'Дата публікації',
        options: ['Сьогодні', 'Цього тижня', 'Цього місяця', 'Цього року']
      }
    ];

    return (
      <div className={styles.advancedFilters}>
        {filterSections.map((section) => (
          <div key={section.title} className={styles.filterSection}>
            <div className={styles.filterTitle}>{section.title}</div>
            <div className={styles.filterOptions}>
              {section.options.map((option) => (
                <button
                  key={option}
                  className={`${styles.filterOption} ${
                    selectedSort === option ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedSort(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        <div className={styles.searchBar}>
          <button className={styles.backButton}>←</button>
          <input type="text" placeholder="Пошук" />
          <button className={styles.searchButton}>🔍</button>
        </div>

        <div className={styles.filtersScroll}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterChip} ${
                activeFilter === filter ? styles.active : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.searchResults}>
        <SectionTitle title="Популярні користувачі" />
        {users.map((user) => (
          <div key={user.username} className={styles.userItem}>
            <div className={styles.userAvatar} />
            <div className={styles.userInfo}>
              <div className={styles.username}>
                {user.username}
                {user.isVerified && <span className={styles.verifiedBadge}>✓</span>}
              </div>
              <div className={styles.userStats}>
                {user.followers} підписників • {user.videoCount} відео
              </div>
            </div>
            <button className={styles.followButton}>Підписатися</button>
          </div>
        ))}

        <SectionTitle title="Популярні пости" />
        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <div key={index} className={styles.postItem}>
              <div className={styles.postContent}>{post.type}</div>
              <div className={styles.postOverlay}>
                👁️ {post.views} ❤️ {post.likes}
              </div>
            </div>
          ))}
        </div>

        <SectionTitle title="Трендові хештеги" />
        {hashtags.map((hashtag) => (
          <div key={hashtag.name} className={styles.hashtagItem}>
            <div className={styles.hashtagName}>{hashtag.name}</div>
            <div className={styles.hashtagCount}>{hashtag.posts} постів</div>
          </div>
        ))}
      </div>

      {showAdvancedFilters && <AdvancedFilters />}
    </div>
  );
};

export default SearchSection;