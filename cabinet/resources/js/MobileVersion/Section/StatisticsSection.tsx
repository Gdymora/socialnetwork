// components/StatisticsSection.tsx
import { useState } from 'react';
import styles from '../styles/StatisticsSection.module.css';

interface Metric {
   title: string;
   value: string;
   change: number;
}

const StatisticsSection = () => {
   const [period, setPeriod] = useState('7');
   
   const metrics: Metric[] = [
       { title: 'Підписники', value: '1,234', change: 12 },
       { title: 'Перегляди', value: '45.2K', change: 8 },
       { title: 'Лайки', value: '12.8K', change: -3 },
       { title: 'Коментарі', value: '2,456', change: 15 }
   ];

   const chartData = [1.2, 1.6, 0.8, 1.8, 1.4, 0.9, 1.3];
   
   const demographics = [
       { title: 'Вік', value: '18-24', percentage: '45%' },
       { title: 'Стать', value: 'Жін.', percentage: '60%' },
       { title: 'Топ країна', value: 'Україна', percentage: '75%' },
       { title: 'Мова', value: 'UA', percentage: '80%' }
   ];

   return (
       <div className={styles.analyticsContainer}>
           <header className={styles.header}>
               <button className={styles.backBtn}>←</button>
               <h2>Статистика</h2>
               <button className={styles.menuBtn}>⋮</button>
           </header>

           <div className={styles.periodFilter}>
               {['7', '28', '90', '180', '365'].map((days) => (
                   <button 
                       key={days}
                       className={`${styles.periodOption} ${period === days ? styles.active : ''}`}
                       onClick={() => setPeriod(days)}
                   >
                       {days === '365' ? 'Рік' : 
                        days === '180' ? '6 місяців' :
                        days === '90' ? '3 місяці' :
                        `${days} днів`}
                   </button>
               ))}
           </div>

           <div className={styles.metricsGrid}>
               {metrics.map((metric) => (
                   <div key={metric.title} className={styles.metricCard}>
                       <div className={styles.metricTitle}>{metric.title}</div>
                       <div className={styles.metricValue}>{metric.value}</div>
                       <div className={`${styles.metricChange} ${metric.change > 0 ? styles.positive : styles.negative}`}>
                           {metric.change > 0 ? '↑' : '↓'} {Math.abs(metric.change)}% за тиждень
                       </div>
                   </div>
               ))}
           </div>

           <div className={styles.chartContainer}>
               <div className={styles.chartHeader}>
                   <h3>Активність за тиждень</h3>
                   <div className={styles.tooltip} title="Кількість переглядів по днях">ℹ️</div>
               </div>
               <div className={styles.chartArea}>
                   {chartData.map((value, index) => (
                       <div 
                           key={index}
                           className={styles.chartBar}
                           style={{ height: `${value * 50}%` }}
                           data-value={`${value}K`}
                       />
                   ))}
               </div>
           </div>

           <div className={styles.postsTable}>
               <h3>Найпопулярніші пости</h3>
               <div className={styles.postRow}>
                   <div className={styles.postPreview}>🎬</div>
                   <div className={styles.postInfo}>
                       <div>Відео про подорож</div>
                       <div className={styles.postStats}>
                           👁️ 12.5K ❤️ 2.3K 💬 456
                       </div>
                   </div>
               </div>
           </div>

           <div className={styles.demographics}>
               <h3>Демографія аудиторії</h3>
               <div className={styles.demoGrid}>
                   {demographics.map((demo) => (
                       <div key={demo.title} className={styles.demoItem}>
                           <div className={styles.demoTitle}>{demo.title}</div>
                           <div className={styles.demoValue}>{demo.value}</div>
                           <div className={styles.demoPercentage}>{demo.percentage} аудиторії</div>
                       </div>
                   ))}
               </div>
           </div>
       </div>
   );
};

export default StatisticsSection;