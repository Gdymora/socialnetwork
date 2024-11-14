import { useState } from 'react';
import styles from '../styles/NotificationSection.module.css';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  text: string;
  time: string;
  isUnread?: boolean;
  hasPreview?: boolean;
  groupAvatars?: number;
  actionButton?: string;
}

interface NotificationSection {
  title: string;
  notifications: Notification[];
}

const NotificationSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Усі');
  const filters = ['Усі', 'Лайки', 'Коментарі', 'Згадування', 'Нові підписники'];

  const getNotificationIcon = (type: string) => {
    const icons = {
      like: '❤️',
      comment: '💬',
      follow: '👤',
      mention: '@'
    };
    return icons[type as keyof typeof icons];
  };

  const renderGroupAvatars = (count: number) => (
    <div className={styles.groupAvatars}>
      {Array(count).fill(0).map((_, index) => (
        <div key={index} className={styles.groupAvatar} />
      ))}
    </div>
  );

  const renderNotification = (notification: Notification) => (
    <div key={notification.id} 
      className={`${styles.notification} ${notification.isUnread ? styles.unread : ''}`}>
      <div className={styles.avatarContainer}>
        <div className={styles.notificationAvatar} />
        <div className={`${styles.notificationIcon} ${styles[`icon-${notification.type}`]}`}>
          {getNotificationIcon(notification.type)}
        </div>
      </div>

      <div className={styles.notificationContent}>
        <div className={styles.notificationText} 
          dangerouslySetInnerHTML={{ __html: notification.text }} />
        <div className={styles.notificationTime}>{notification.time}</div>
        {notification.actionButton && (
          <div className={styles.actionButtons}>{notification.actionButton}</div>
        )}
      </div>

      {notification.groupAvatars && renderGroupAvatars(notification.groupAvatars)}
      {notification.hasPreview && <div className={styles.notificationPreview} />}
    </div>
  );

  const renderSection = (section: NotificationSection) => (
    <section className={styles.notificationsSection}>
      <h3 className={styles.sectionTitle}>{section.title}</h3>
      {section.notifications.map(renderNotification)}
    </section>
  );

  return (
    <div className={styles.notificationsContainer}>
      <header className={styles.header}>
        <h2>Сповіщення</h2>
        <button className={styles.markAllRead}>
          Позначити всі прочитаними
        </button>
      </header>

      <div className={styles.filters}>
        {filters.map(filter => (
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

      {renderSection({
        title: 'Сьогодні',
        notifications: [
          {
            id: '1',
            type: 'like',
            text: '<strong>username</strong> та ще 24 людини вподобали ваше відео',
            time: '2 год',
            isUnread: true,
            hasPreview: true
          },
          {
            id: '2',
            type: 'comment',
            text: '<strong>user123</strong> прокоментував: "Дуже круте відео! 🔥"',
            time: '3 год',
            hasPreview: true
          }
        ]
      })}

      {renderSection({
        title: 'Цього тижня',
        notifications: [
          {
            id: '3',
            type: 'follow',
            text: '<strong>newuser</strong> підписався на ваші оновлення',
            time: '2 дні',
            actionButton: 'Підписатися у відповідь'
          },
          {
            id: '4',
            type: 'like',
            text: '<strong>user456</strong> та ще 45 людей вподобали ваші фото',
            time: '3 дні',
            hasPreview: true,
            groupAvatars: 3
          }
        ]
      })}

      <div className={styles.loadingIndicator}>
        <div className={styles.loadingDots}>
          {[1, 2, 3].map((dot) => (
            <div key={dot} className={styles.dot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;