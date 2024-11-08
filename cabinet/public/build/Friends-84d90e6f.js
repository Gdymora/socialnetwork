import { jsxs, jsx } from "react/jsx-runtime";
import ProfileUserCard from "./ProfileUserCard-79a0c1dc.js";
const Friends = ({
  friendsAndFollowers
}) => {
  const friends = friendsAndFollowers.friends || [];
  const friendsCount = friendsAndFollowers.friendsCount;
  return /* @__PURE__ */ jsxs("div", { className: "frends", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "header", children: [
        /* @__PURE__ */ jsx("h2", { children: "Friends" }),
        /* @__PURE__ */ jsx("p", { children: friendsCount })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "right-top", children: /* @__PURE__ */ jsx("button", { className: "link-button", children: "View all friends" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "section", children: [
      friends.map((friend, index) => /* @__PURE__ */ jsx(ProfileUserCard, { user: friend }, index)),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-18843275.webp",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Anna Helton" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-18866330.webp",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Rebeka Gald" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-18731989.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Mary Bly" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-18666051.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Kety Valgyr" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-18570210.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Ango Pedrolo" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-18435667.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Agata Oldrit" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-18038136.webp",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Victoria Lagutova" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-17503411.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Bianca Kuprina" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-11960755.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Olga Volkova" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-11077187.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Jeny Gorenkova" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/images/galery/pexels-photo-8908813.jpeg",
            alt: "Фото або відео"
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          " ",
          /* @__PURE__ */ jsx("p", { children: "Katrin Malkovich" }),
          " "
        ] })
      ] })
    ] })
  ] });
};
const Friends$1 = Friends;
export {
  Friends$1 as default
};
