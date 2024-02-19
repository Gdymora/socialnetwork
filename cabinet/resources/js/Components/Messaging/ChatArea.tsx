import style from "./Messaging.module.css";
function ChatArea() {
    // Припустимо, ми маємо деякі дані для повідомлень у чаті
    const messages = [
        {
            author: "Madison Jones",
            content: "Hello, how are you?",
            time: "1:22pm",
            owner: false,
        },
        {
            author: "You",
            content: "I'm good, thanks! And you?",
            time: "1:25pm",
            owner: true,
        },
        // Додайте інші повідомлення тут
    ];

    return (
        <div className={style.chat_area}>
            <div className={style.chat_area_header}>
                <div className={style.chat_area_title}>CodePen Group</div>
                <div className={style.chat_area_group}>
                    <img
                        className={style.chat_area_profile}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                        alt=""
                    />
                    <img
                        className={style.chat_area_profile}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                        alt=""
                    />
                    <img
                        className={style.chat_area_profile}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
                        alt=""
                    />
                    <span>+4</span>
                </div>
            </div>

            <div className={style.chat_area_main}>
                <div className={style.chat_msg}>
                    <div className={style.chat_msg_profile}>
                        <img
                            className={style.chat_msg_img}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                            alt=""
                        />
                        <div className={style.chat_msg_date}>
                            Message seen 1.22pm
                        </div>
                    </div>
                    <div className={style.chat_msg_content}>
                        <div className={style.chat_msg_text}>
                            Luctus et ultrices posuere cubilia curae.
                        </div>
                        <div className={style.chat_msg_text}>
                            <img src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif" />
                        </div>
                        <div className={style.chat_msg_text}>
                            Neque gravida in fermentum et sollicitudin ac orci
                            phasellus egestas. Pretium lectus quam id leo.
                        </div>
                    </div>
                </div>
                <div className={`${style.chat_msg} ${style.owner}`}>
                    <div className={style.chat_msg_profile}>
                        <img
                            className={style.chat_msg_img}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                            alt=""
                        />
                        <div className={style.chat_msg_date}>
                            Message seen 1.22pm
                        </div>
                    </div>
                    <div className={style.chat_msg_content}>
                        <div className={style.chat_msg_text}>
                            Sit amet risus nullam eget felis eget. Dolor sed
                            viverra ipsum😂😂😂
                        </div>
                        <div className={style.chat_msg_text}>
                            Cras mollis nec arcu malesuada tincidunt.
                        </div>
                    </div>
                </div>
                <div className={style.chat_msg}>
                    <div className={style.chat_msg_profile}>
                        <img
                            className={style.chat_msg_img}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                            alt=""
                        />
                        <div className={style.chat_msg_date}>
                            Message seen 2.45pm
                        </div>
                    </div>
                    <div className={style.chat_msg_content}>
                        <div className={style.chat_msg_text}>
                            Aenean tristique maximus tortor non tincidunt.
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia curae😊
                        </div>
                        <div className={style.chat_msg_text}>
                            Ut faucibus pulvinar elementum integer enim neque
                            volutpat.
                        </div>
                    </div>
                </div>
                <div className={`${style.chat_msg} ${style.owner}`}>
                    <div className={style.chat_msg_profile}>
                        <img
                            className={style.chat_msg_img}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                            alt=""
                        />
                        <div className={style.chat_msg_date}>
                            Message seen 2.50pm
                        </div>
                    </div>
                    <div className={style.chat_msg_content}>
                        <div className={style.chat_msg_text}>
                            posuere eget augue sodales, aliquet posuere eros.
                        </div>
                        <div className={style.chat_msg_text}>
                            Cras mollis nec arcu malesuada tincidunt.
                        </div>
                    </div>
                </div>
                <div className={style.chat_msg}>
                    <div className={style.chat_msg_profile}>
                        <img
                            className={style.chat_msg_img}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
                            alt=""
                        />
                        <div className={style.chat_msg_date}>
                            Message seen 3.16pm
                        </div>
                    </div>
                    <div className={style.chat_msg_content}>
                        <div className={style.chat_msg_text}>
                            Egestas tellus rutrum tellus pellentesque
                        </div>
                    </div>
                </div>
               
                <div className={`${style.chat_msg} ${style.owner}`}>
                    <div className={style.chat_msg_profile}>
                        <img
                            className={style.chat_msg_img}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                            alt=""
                        />
                        <div className={style.chat_msg_date}>
                            Message seen 2.50pm
                        </div>
                    </div>
                    <div className={style.chat_msg_content}>
                        <div className={style.chat_msg_text}>
                            Tincidunt arcu non sodales😂
                        </div>
                    </div>
                </div>
                <div className={style.chat_msg}>
                    <div className={style.chat_msg_profile}>
                        <img
                            className={style.chat_msg_img}
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                            alt=""
                        />
                        <div className={style.chat_msg_date}>
                            Message seen 3.16pm
                        </div>
                    </div>
                    <div className={style.chat_msg_content}>
                        <div className={style.chat_msg_text}>
                            Consectetur adipiscing elit pellentesque habitant
                            morbi tristique senectus et🥰
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat_area_main">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`chat_msg ${message.owner ? "owner" : ""}`}
                    >
                         
                        <div className={style.chat_msg_profile}>
                            <img
                                className={style.chat_msg_img}
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                                alt=""
                            />
                            <div className={style.chat_msg_date}>
                                Message seen 3.16pm
                            </div>
                        </div>
                        <div className={style.chat_msg_content}>
                            <div className={style.chat_msg_text}>
                                Consectetur adipiscing elit pellentesque
                                habitant morbi tristique senectus et🥰
                            </div>
                        </div>
                    </div>
                ))}
            </div>
 
            <div className="chat_area_footer">
                {/* Елементи нижньої частини чату */}
            </div>
        </div>
    );
}

export default ChatArea;
