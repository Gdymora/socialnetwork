import style from "./Messaging.module.css";
function ConversationArea() {
    // Припустимо, ми маємо деякі дані для розмов
    const conversations = [
        {
            name: "Lea Debere",
            message: "Shoreditch iPhone jianbing",
            time: "45m",
            profileUrl:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png",
            online: false,
            active: true,
        },
        {
            name: "Jordan Smith",
            message: "Snackwave craft beer raclette, beard kombucha",
            time: "45m",
            profileUrl:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png",
            online: false,
            active: false,
        },
        {
            name: "Jared Jackson",
            message: "Tattooed brooklyn typewriter gastropub",
            time: "18m",
            profileUrl:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png",
            online: false,
            active: false,
        },
        {
            name: "Henry Clark",
            message: "Shoreditch iPhone jianbing",
            time: "45m",
            profileUrl:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png",
            online: false,
            active: false,
        },
        {
            name: "Chiwa Lauren",
            message: "Pabst af 3 wolf moon",
            time: "28m",
            profileUrl:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%288%29.png",
            online: true,
            active: false,
        },
        {
            name: "Caroline Orange",
            message: "Shoreditch iPhone jianbing",
            time: "45m",
            profileUrl:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%289%29.png",
            online: false,
            active: false,
        },
        {
            name: "Lina Ashma",
            message: "Migas food truck crucifix vexi",
            time: "42m",
            profileUrl:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%286%29.png",
            online: true,
            active: false,
        },

        // Додайте інші розмови тут
    ];

    return (
        <div className={style.conversation_area}>
            {conversations.map((conversation, index) => (
                <div
                    key={index}
                    className={`${style.msg} ${conversation.online ?  style.online: ""
                    } ${conversation.active ? style.active: ""}`}
                >
                    <img
                        className={style.msg_profile}
                        src={conversation.profileUrl}
                        alt=""
                    />
                    <div className={style.msg_detail}>
                        <div className={style.msg_username}>
                            {conversation.name}
                        </div>
                        <div className={style.msg_content}>
                            <span className={style.msg_message}>
                                {conversation.message}
                            </span>
                            <span className={style.msg_date}>
                                {conversation.time}
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            <button className={style.add}></button>
            <div className={style.overlay}></div>
        </div>
    );
}

export default ConversationArea;
