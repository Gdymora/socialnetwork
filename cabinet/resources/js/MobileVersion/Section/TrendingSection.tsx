// components/TrendingSection.tsx
import { useState } from 'react';
import styles from '../styles/TrendingSection.module.css';

interface Creator {
   rank: number;
   username: string;
   verified: boolean;
   followers: string;
   likes: string;
}

interface Sound {
   title: string;
   author: string;
   videos: string;
}

const TrendingSection = () => {
   const [activeCategory, setActiveCategory] = useState('now');
   
   const categories = ['Зараз', 'Музика', 'Танці', 'Гумор', 'Ігри', 'Спорт'];
   
   const creators: Creator[] = [
       {
           rank: 1,
           username: 'username',
           verified: true,
           followers: '1.2M',
           likes: '45M'
       }
   ];

   const sounds: Sound[] = [
       {
           title: 'Назва звуку',
           author: 'Автор',
           videos: '1.2M'
       }
   ];

   return (
       <div className={styles.trendsContainer}>
           <header className={styles.header}>
               <h2>Тренди</h2>
           </header>

           <div className={styles.categories}>
               {categories.map((category) => (
                   <button 
                       key={category}
                       className={`${styles.categoryChip} ${
                           category === 'Зараз' ? styles.active : ''
                       }`}
                       onClick={() => setActiveCategory(category.toLowerCase())}
                   >
                       {category}
                   </button>
               ))}
           </div>

           <div className={styles.trendContainer}>
               <div className={styles.trendHeader}>
                   <div className={styles.fireTag}>
                       🔥 Тренди дня
                   </div>
                   <div className={styles.liveCounter}>
                       <div className={styles.pulseDot}/>
                       1.2M переглядів зараз
                   </div>
               </div>

               <div className={styles.trendingVideos}>
                   <div className={styles.videoCard}>
                       <div className={styles.videoPreview}>
                           🎬
                           <span className={styles.videoDuration}>0:30</span>
                       </div>
                       <div className={styles.videoInfo}>
                           <div className={styles.videoTitle}>Назва відео</div>
                           <div className={styles.videoStats}>
                               1.2M переглядів • 256K лайків
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <div className={styles.trendContainer}>
               <h3>Популярні хештеги</h3>
               <div className={styles.hashtagsGrid}>
                   <div className={styles.hashtagCard}>
                       <div className={styles.hashtagName}>#challenge</div>
                       <div className={styles.hashtagStats}>
                           1.2M постів • 500K сьогодні
                       </div>
                   </div>
               </div>
           </div>

           <div className={styles.trendContainer}>
               <h3>Популярні творці</h3>
               <div className={styles.creatorsList}>
                   {creators.map((creator) => (
                       <div key={creator.username} className={styles.creatorCard}>
                           <div className={styles.creatorAvatar}>
                               <div className={styles.rankBadge}>{creator.rank}</div>
                           </div>
                           <div className={styles.creatorInfo}>
                               <div className={styles.creatorName}>
                                   {creator.username}
                                   {creator.verified && <span className={styles.verifiedBadge}>✓</span>}
                               </div>
                               <div className={styles.creatorStats}>
                                   {creator.followers} підписників • {creator.likes} лайків
                               </div>
                           </div>
                           <button className={styles.followBtn}>Підписатися</button>
                       </div>
                   ))}
               </div>
           </div>

           <div className={styles.trendContainer}>
               <h3>Популярні звуки</h3>
               <div className={styles.trendingSounds}>
                   {sounds.map((sound) => (
                       <div key={sound.title} className={styles.soundCard}>
                           <div className={styles.soundIcon}>♪</div>
                           <div className={styles.soundInfo}>
                               <div className={styles.soundName}>{sound.title}</div>
                               <div className={styles.soundAuthor}>
                                   {sound.author} • {sound.videos} відео
                               </div>
                           </div>
                           <button className={styles.useBtn}>Використати</button>
                       </div>
                   ))}
               </div>
           </div>
       </div>
   );
};

export default TrendingSection;