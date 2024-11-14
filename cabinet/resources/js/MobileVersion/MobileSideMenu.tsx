import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReucer";
import { toggleSideMenu, setCurrentSection } from "@/store/slices/uiSlice";
import styles from "./styles/SideMenu.module.css";

const MobileSideMenu: React.FC = () => {
    const dispatch = useDispatch();
    const { isSideMenuOpen } = useSelector((state: RootState) => state.ui);

    const menuSections = [
        {
            title: "ПРОФІЛЬ",
            items: [
                { id: "profile", icon: "👤", label: "Мій профіль" },
                { id: "settings", icon: "⚙️", label: "Налаштування" },
                { id: "statistics", icon: "📊", label: "Статистика" },
                { id: "notification", icon: "🔔", label: "Сповіщення" },
            ],
        },
        {
            title: "КОНТЕНТ",
            items: [
                { id: "trending", icon: "🔥", label: "Тренди" },
                { id: "collections", icon: "🔖", label: "Збережене" },
                // { id: 'collections', icon: '📁', label: 'Колекції' },
                { id: "drafts", icon: "📝", label: "Чернетки" },
            ],
        },
        {
            title: "ІНШЕ",
            items: [
                { id: "chat", icon: "💬", label: "Чат" },
                { id: "liveStream", icon: "📹", label: "Живі трансляції" },
                { id: "challenges", icon: "🎯", label: "Челенжі" },
                { id: "search", icon: "🔍", label: "Пошук" },
                { id: "help", icon: "❓", label: "Допомога" },
                {
                    id: "logout",
                    icon: "🚪",
                    label: "Вийти",
                    style: { color: "#FF4444" },
                },
            ],
        },
    ];

    const handleNavigation = (id: string) => {
        dispatch(setCurrentSection(id as any));
        dispatch(toggleSideMenu());
    };

    return (
        <>
            {/* Overlay */}
            {isSideMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => dispatch(toggleSideMenu())}
                />
            )}

            {/* Side Menu */}
            <div
                className={`${styles.sideMenu} ${
                    isSideMenuOpen ? styles.open : ""
                }`}
            >
                <div className={styles.menuHeader}>
                    <h2>Меню</h2>
                    <button
                        className={styles.closeBtn}
                        onClick={() => dispatch(toggleSideMenu())}
                    >
                        ✕
                    </button>
                </div>

                {menuSections.map((section) => (
                    <div key={section.title} className={styles.menuSection}>
                        <div className={styles.menuTitle}>{section.title}</div>
                        {section.items.map((item) => (
                            <div
                                key={item.id}
                                className={styles.menuItem}
                                onClick={() => handleNavigation(item.id)}
                                style={item.style}
                            >
                                <div className={styles.menuIcon}>
                                    {item.icon}
                                </div>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MobileSideMenu;
