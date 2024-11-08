import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import "react";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
function Galery({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "New Page Title" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "New Page" }),
        /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("div", { className: "ar-px-galery", children: [
          /* @__PURE__ */ jsx("nav", { className: "ar-px-galery-menu", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
            /* @__PURE__ */ jsx("i", { className: "nav-icon bi bi-house-door-fill" }),
            /* @__PURE__ */ jsx("span", { className: "nav-text", children: "Gallery" })
          ] }) }) }) }),
          /* @__PURE__ */ jsx("div", { className: "content", children: /* @__PURE__ */ jsxs("div", { className: "gallery-grid", children: [
            /* @__PURE__ */ jsxs("div", { className: "gallery-card", children: [
              /* @__PURE__ */ jsxs("div", { className: "header", children: [
                /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/noimg.png", alt: "" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text", children: [
                  /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                  /* @__PURE__ */ jsx("p", { className: "text-light", children: "5 october о 14:58 public" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "media", children: /* @__PURE__ */ jsx("img", { src: "assets/images/galery/colob.png", alt: "Фото або відео" }) }),
              /* @__PURE__ */ jsx("div", { className: "description", children: /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "sun" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "nature" }),
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "summer" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Like" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Comment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "gallery-card", children: [
              /* @__PURE__ */ jsxs("div", { className: "header", children: [
                /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/noimg.png", alt: "" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text", children: [
                  /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                  /* @__PURE__ */ jsx("p", { className: "text-light", children: "5 october о 14:58 public" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "media", children: /* @__PURE__ */ jsx("img", { src: "assets/images/galery/clever.png", alt: "Фото або відео" }) }),
              /* @__PURE__ */ jsx("div", { className: "description", children: /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "sun" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "nature" }),
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "summer" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Like" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Comment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "gallery-card", children: [
              /* @__PURE__ */ jsxs("div", { className: "header", children: [
                /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/noimg.png", alt: "" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text", children: [
                  /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                  /* @__PURE__ */ jsx("p", { className: "text-light", children: "5 october о 14:58 public" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "media", children: /* @__PURE__ */ jsx("img", { src: "assets/images/galery/dino.png", alt: "Фото або відео" }) }),
              /* @__PURE__ */ jsx("div", { className: "description", children: /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "sun" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "nature" }),
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "summer" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Like" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Comment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "gallery-card", children: [
              /* @__PURE__ */ jsxs("div", { className: "header", children: [
                /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/noimg.png", alt: "" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text", children: [
                  /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                  /* @__PURE__ */ jsx("p", { className: "text-light", children: "5 october о 14:58 public" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "media", children: /* @__PURE__ */ jsx("img", { src: "assets/images/galery/ledy.png", alt: "Фото або відео" }) }),
              /* @__PURE__ */ jsx("div", { className: "description", children: /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "sun" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "nature" }),
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "summer" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Like" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Comment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "gallery-card", children: [
              /* @__PURE__ */ jsxs("div", { className: "header", children: [
                /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/noimg.png", alt: "" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text", children: [
                  /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                  /* @__PURE__ */ jsx("p", { className: "text-light", children: "5 october о 14:58 public" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "media", children: /* @__PURE__ */ jsx("img", { src: "assets/images/galery/ten.png", alt: "Фото або відео" }) }),
              /* @__PURE__ */ jsx("div", { className: "description", children: /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "sun" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "nature" }),
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "summer" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Like" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Comment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "gallery-card", children: [
              /* @__PURE__ */ jsxs("div", { className: "header", children: [
                /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/noimg.png", alt: "" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text", children: [
                  /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                  /* @__PURE__ */ jsx("p", { className: "text-light", children: "5 october о 14:58 public" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "media", children: /* @__PURE__ */ jsx("img", { src: "assets/images/galery/valy.png", alt: "Фото або відео" }) }),
              /* @__PURE__ */ jsx("div", { className: "description", children: /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "sun" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "nature" }),
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "summer" }),
                /* @__PURE__ */ jsx("span", { className: "hashtag", children: "Piople" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Like" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Comment" })
              ] })
            ] })
          ] }) })
        ] }) })
      ]
    }
  );
}
export {
  Galery as default
};
