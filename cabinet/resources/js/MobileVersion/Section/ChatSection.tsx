import { useState } from 'react';
import styles from '../styles/ChatSection.module.css';

interface Message {
  id: string;
  text: string;
  time: string;
  type: 'sent' | 'received';
}

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  isOnline?: boolean;
  isVerified?: boolean;
  hasUnread?: boolean;
}

const ChatSection = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [activeFilter, setActiveFilter] = useState('Усі повідомлення');
  const [messages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привіт! Як справи?',
      time: '14:30',
      type: 'received'
    },
    {
      id: '2',
      text: 'Привіт! Все добре, дякую. Як ти?',
      time: '14:31',
      type: 'sent'
    }
  ]);

  const chats: Chat[] = [
    {
      id: '1',
      name: 'Іван Петренко',
      lastMessage: 'Привіт! Як справи?',
      time: '14:30',
      isOnline: true,
      isVerified: true,
      hasUnread: true
    },
    {
      id: '2',
      name: 'Марія Коваленко',
      lastMessage: 'Дякую за відео! 👍',
      time: 'Вчора',
      isOnline: false
    }
  ];

  return (
    <div className={styles.container}>
      <div className={!selectedChat ? styles.visibleSection : styles.hiddenSection}>
        <header className={styles.header}>
          <h2>Повідомлення</h2>
          <button className={styles.newMessageBtn}>✎</button>
        </header>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Пошук чатів..." />
        </div>

        <div className={styles.quickActions}>
          {['Усі повідомлення', 'Непрочитані', 'Запити'].map(filter => (
            <button
              key={filter}
              className={`${styles.actionChip} ${
                activeFilter === filter ? styles.active : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.chatsList}>
          {chats.map(chat => (
            <div
              key={chat.id}
              className={styles.chatItem}
              onClick={() => setSelectedChat(chat)}
            >
              <div className={styles.chatAvatar}>
                {chat.isOnline && <div className={styles.onlineIndicator} />}
              </div>

              <div className={styles.chatInfo}>
                <div className={styles.chatName}>
                  {chat.name}
                  {chat.isVerified && <span className={styles.verifiedBadge}>✓</span>}
                </div>
                <div className={styles.lastMessage}>
                  {chat.hasUnread && <span className={styles.unreadIndicator} />}
                  {chat.lastMessage}
                </div>
              </div>

              <div className={styles.messageTime}>{chat.time}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedChat && (
        <div className={styles.visibleSection}>
          <header className={styles.header}>
            <button 
              className={styles.backButton} 
              onClick={() => setSelectedChat(null)}
            >
              ←
            </button>
            <div className={styles.chatName}>
              {selectedChat.name}
              {selectedChat.isVerified && <span className={styles.verifiedBadge}>✓</span>}
            </div>
            <button className={styles.menuButton}>⋮</button>
          </header>

          <div className={styles.chatMessages}>
            {messages.map(message => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.type === 'sent' ? styles.sent : styles.received
                }`}
              >
                {message.text}
                <div className={styles.messageTime}>{message.time}</div>
              </div>
            ))}

            <div className={styles.typingIndicator}>
              <span>{selectedChat.name} друкує</span>
              <div className={styles.typingDots}>
                {[1, 2, 3].map(dot => (
                  <div key={dot} className={styles.typingDot} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.messageForm}>
            <button className={styles.attachButton}>📎</button>
            <input type="text" placeholder="Напишіть повідомлення..." />
            <button className={styles.emojiButton}>😊</button>
            <button className={styles.sendButton}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;