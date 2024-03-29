import { useEffect, useState } from "react";
import ChatArea from "./ChatArea";
import ConversationArea from "./ConversationArea";
import DetailArea from "./DetailArea";
import style from "./Messaging.module.css";
// import { ReactComponent as Logo } from './logo.svg'; // Логотип як React компонент
// import { ReactComponent as SettingsIcon } from './settings-icon.svg'; // Іконка налаштувань
import sunIcon from "./sun-icon.svg";
import Svg from "./Svg";

function Messaging() {
    const [theme, setTheme] = useState("blue"); // Початкова тема
    const [darkMode, setDarkMode] = useState(false); // Стан для режиму темної теми

    useEffect(() => {
        // Встановлення атрибуту data-theme для <body>
        document.body.setAttribute("data-theme", theme);
        // Переключення класу dark-mode для <body>
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [theme, darkMode]); // Залежності useEffect, що викликаються при зміні теми або стану darkMode

    return (
        <div className={style.app}>
            <div className={style.header}>
                <div className={style.logo}>
                    <svg
                        viewBox="0 0 513 513"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M256.025.05C117.67-2.678 3.184 107.038.025 245.383a240.703 240.703 0 0085.333 182.613v73.387c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 005.653-1.621l59.456-37.141a264.142 264.142 0 0094.891 17.429c138.355 2.728 252.841-106.988 256-245.333C508.866 107.038 394.38-2.678 256.025.05z" />
                        <path
                            d="M330.518 131.099l-213.825 130.08c-7.387 4.494-5.74 15.711 2.656 17.97l72.009 19.374a9.88 9.88 0 007.703-1.094l32.882-20.003-10.113 37.136a9.88 9.88 0 001.083 7.704l38.561 63.826c4.488 7.427 15.726 5.936 18.003-2.425l65.764-241.49c2.337-8.582-7.092-15.72-14.723-11.078zM266.44 356.177l-24.415-40.411 15.544-57.074c2.336-8.581-7.093-15.719-14.723-11.078l-50.536 30.744-45.592-12.266L319.616 160.91 266.44 356.177z"
                            fill="#fff"
                        />
                    </svg>

                    {/* <Svg svg={sunIcon} /> */}
                </div>
                <div className={style.search_bar}>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className={style.user_settings}>
                    <div className={style.dark_light}>
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                        {/* Кнопка для переключення режиму темної теми */}
                    {/*     <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={style.dark_light}
                        >
                            Toggle Dark/Light
                        </button> */}

                        {/* Колірні кнопки */}
                        <div className={style.colors}>
                            {["blue", "purple", "green", "orange"].map(
                                (color) => (
                                    <div
                                        key={color}
                                        className={`color ${
                                            theme === color ? "selected" : ""
                                        }`}
                                        data-color={color}
                                        onClick={() => setTheme(color)}
                                        style={{ backgroundColor: color }}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className={style.settings}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                        </svg>
                    </div>
                    <img
                        className={style.user_profile}
                        src="user-profile-url.png"
                        alt="User Profile"
                    />
                </div>
            </div>
            <div className={style.wrapper}>
                <ConversationArea />
                <ChatArea />
                <DetailArea />
            </div>
        </div>
    );
}

export default Messaging;
