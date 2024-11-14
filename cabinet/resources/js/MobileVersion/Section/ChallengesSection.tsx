import { useState } from 'react';
import styles from '../styles/ChallengesSection.module.css';

interface Challenge {
  id: string;
  title: string;
  participants: number;
  views: number;
  prize: string;
  timeLeft: string;
  emoji: string;
  participantsAvatars: number;
}

interface ChallengeDetails {
  title: string;
  prize: string;
  description: string;
  timeLeft: string;
  participants: number;
  topVideos: Array<{ likes: string; rank: number }>;
  leaderboard: Array<{
    rank: number;
    username: string;
    likes: string;
    trophy: string;
  }>;
}

const ChallengesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Усі');
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Топ відео');

  const categories = ['Усі', 'Офіційні', 'Брендові', 'Музичні', 'Танці', 'Спорт'];

  const challenges: Challenge[] = [
    {
      id: '1',
      title: '#DanceChallenge2024',
      participants: 1200,
      views: 2500000,
      prize: '100,000 ₴',
      timeLeft: '2 дні',
      emoji: '🎵',
      participantsAvatars: 5
    },
    {
      id: '2',
      title: '#GamingMoments',
      participants: 856,
      views: 1800000,
      prize: '50,000 ₴',
      timeLeft: '5 днів',
      emoji: '🎮',
      participantsAvatars: 3
    }
  ];

  const challengeDetails: ChallengeDetails = {
    title: '#DanceChallenge2024',
    prize: '100,000 ₴',
    description: 'Покажіть свої найкращі танцювальні рухи під новий трек! Переможці отримають призовий фонд та спеціальний значок.',
    timeLeft: '2 дні',
    participants: 1200,
    topVideos: [
      { likes: '12.5K', rank: 1 },
      { likes: '8.9K', rank: 2 },
      { likes: '7.2K', rank: 3 }
    ],
    leaderboard: [
      { rank: 1, username: '@username1', likes: '12.5K', trophy: '🏆' },
      { rank: 2, username: '@username2', likes: '8.9K', trophy: '🥈' },
      { rank: 3, username: '@username3', likes: '7.2K', trophy: '🥉' }
    ]
  };

  const ChallengeCard = ({ challenge }: { challenge: Challenge }) => (
    <div className={styles.challengeCard} onClick={() => setSelectedChallenge(challenge.id)}>
      <div className={styles.challengePreview}>
        <span className={styles.challengeEmoji}>{challenge.emoji}</span>
        <div className={styles.prizeBadge}>🏆 {challenge.prize}</div>
        <div className={styles.timer}>⏰ {challenge.timeLeft}</div>
      </div>
      
      <div className={styles.challengeInfo}>
        <h3 className={styles.challengeTitle}>{challenge.title}</h3>
        <div className={styles.challengeStats}>
          👤 {challenge.participants.toLocaleString()} учасників 
          👁️ {(challenge.views / 1000000).toFixed(1)}M переглядів
        </div>
        
        <div className={styles.participants}>
          {Array(challenge.participantsAvatars).fill(0).map((_, i) => (
            <div key={i} className={styles.participant} />
          ))}
        </div>
        
        <button className={styles.joinButton}>Взяти участь</button>
      </div>
    </div>
  );

  const ChallengeDetails = () => (
    <div className={styles.challengeDetails}>
      <header className={styles.detailsHeader}>
        <button className={styles.backButton} onClick={() => setSelectedChallenge(null)}>
          ←
        </button>
        <h2>{challengeDetails.title}</h2>
        <div style={{ width: '24px' }} />
      </header>

      <div className={styles.detailsContent}>
        <section className={styles.detailsSection}>
          <div className={styles.prizeBadge}>🏆 {challengeDetails.prize}</div>
          <p>{challengeDetails.description}</p>
          <div className={styles.challengeStats}>
            ⏰ Залишилось {challengeDetails.timeLeft} 
            👤 {challengeDetails.participants.toLocaleString()} учасників
          </div>
        </section>

        <div className={styles.tabs}>
          {['Топ відео', 'Нові', 'Рейтинг'].map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab !== 'Рейтинг' ? (
          <div className={styles.videosGrid}>
            {challengeDetails.topVideos.map(video => (
              <div key={video.rank} className={styles.videoItem}>
                <div className={styles.videoStats}>
                  ❤️ {video.likes} {video.rank}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.leaderboard}>
            {challengeDetails.leaderboard.map(leader => (
              <div key={leader.rank} className={styles.leaderItem}>
                <div className={`${styles.rank} ${styles[`top-${leader.rank}`]}`}>
                  {leader.rank}
                </div>
                <div className={styles.leaderInfo}>
                  <div>{leader.username}</div>
                  <div className={styles.leaderLikes}>{leader.likes} лайків</div>
                </div>
                <div className={styles.leaderScore}>{leader.trophy}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.challengesContainer}>
      {!selectedChallenge ? (
        <>
          <header className={styles.header}>
            <button className={styles.backButton}>←</button>
            <h2>Челенджі</h2>
            <div style={{ width: '24px' }} />
          </header>

          <div className={styles.categories}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.category} ${
                  activeCategory === category ? styles.active : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.featuredChallenges}>
            {challenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </>
      ) : (
        <ChallengeDetails />
      )}
    </div>
  );
};

export default ChallengesSection;