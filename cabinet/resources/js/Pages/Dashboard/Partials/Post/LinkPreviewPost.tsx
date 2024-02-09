import { LinkData } from "@/types";


const LinkPreviewPost = ({
    linkData
}: {
    linkData: LinkData;
}) => {
    const { site_name, title, description, image, url } = linkData;

    const styles = {
        card: {
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            backgroundColor: "#f5f5f5",
        },
        title: {
            margin: 0,
            fontSize: "18px",
        },
        deleteButton: {
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "20px",
        },
        image: {
            width: "100%",
            height: "auto",
            // objectFit: 'cover', // Заповнення контейнера картинкою без втрати пропорцій      
            display: "block",
        },
        body: {
            padding: "8px",
        },
        description: {
            margin: 0,
            fontSize: "14px",
        },
        url: {
            display: "block",
            color: "blue",
            marginTop: "8px",
            marginBottom: "8px",
        },
        siteName: {
            margin: 0,
            fontSize: "12px",
            color: "#666",
        },
    };

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <h2 style={styles.title}>{title}</h2>
            </div>
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.body}>
                <p style={styles.description}>{description}</p>
                <a
                    /* 
                     */href={route("external.redirect", { url: url })}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.url}
                >
                    Перейти на сайт
                </a>
                <p style={styles.siteName}>Сайт: {site_name}</p>
            </div>
        </div>
    );
};

export default LinkPreviewPost;
