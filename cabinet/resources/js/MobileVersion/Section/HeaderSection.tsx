import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReucer";
import { toggleSideMenu } from "@/store/slices/uiSlice";
import styles from '../styles/HeaderSection.module.css';
import { User } from "@/types";

interface HeaderSectionProps {
    user: User;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ user }) => {
    const dispatch = useDispatch();
    const { currentSection } = useSelector((state: RootState) => state.ui);
    const { notificationsCount } = useSelector((state: RootState) => state.header);

    return (
        <div className={styles.topBar}>
            <div className={styles.mainHeader}>
                <button 
                    className={styles.menuBtn}
                    onClick={() => dispatch(toggleSideMenu())}
                >
                    <i className="bi bi-list"></i>
                </button>
                
                <div className={styles.sectionIndicator}>
                    <div className={`${styles.indicator} ${currentSection === "main" ? styles.active : ""}`} />
                    <div className={`${styles.indicator} ${currentSection === "friendsPost" ? styles.active : ""}`} />
                    <div className={`${styles.indicator} ${currentSection === "mediaPost" ? styles.active : ""}`} />
                </div>

                <button className={styles.notificationsBtn}>
                    <i className="bi bi-bell"></i>
                    {/* <span className={styles.notificationsBadge}>
                            3
                        </span> */}
                      {notificationsCount > 0 && (
                        <span className={styles.notificationsBadge}>
                            {notificationsCount}
                        </span>
                    )} 
                </button>
            </div>
        </div>
    );
};


export default HeaderSection;
