import { jsxs, jsx } from "react/jsx-runtime";
const LinkPreviewPost = ({
  linkData
}) => {
  const { site_name, title, description, image, url } = linkData;
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      backgroundColor: "#f5f5f5"
    },
    title: {
      margin: 0,
      fontSize: "18px"
    },
    deleteButton: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "20px"
    },
    image: {
      width: "100%",
      height: "auto",
      // objectFit: 'cover', // Заповнення контейнера картинкою без втрати пропорцій      
      display: "block"
    },
    body: {
      padding: "8px"
    },
    description: {
      margin: 0,
      fontSize: "14px"
    },
    url: {
      display: "block",
      color: "blue",
      marginTop: "8px",
      marginBottom: "8px"
    },
    siteName: {
      margin: 0,
      fontSize: "12px",
      color: "#666"
    }
  };
  return /* @__PURE__ */ jsxs("div", { style: styles.card, children: [
    /* @__PURE__ */ jsx("div", { style: styles.header, children: /* @__PURE__ */ jsx("h2", { style: styles.title, children: title }) }),
    /* @__PURE__ */ jsx("img", { src: image, alt: title, style: styles.image }),
    /* @__PURE__ */ jsxs("div", { style: styles.body, children: [
      /* @__PURE__ */ jsx("p", { style: styles.description, children: description }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: route("external.redirect", { url }),
          target: "_blank",
          rel: "noopener noreferrer",
          style: styles.url,
          children: "Перейти на сайт"
        }
      ),
      /* @__PURE__ */ jsxs("p", { style: styles.siteName, children: [
        "Сайт: ",
        site_name
      ] })
    ] })
  ] });
};
const LinkPreviewPost$1 = LinkPreviewPost;
export {
  LinkPreviewPost$1 as default
};
