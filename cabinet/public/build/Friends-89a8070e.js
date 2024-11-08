import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import UserGaleryCard from "./UserGaleryCard-b37daf7e.js";
import NavSidebar from "./NavSidebar-d4cf2187.js";
import "react";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
import "./useAxios-a6ad7719.js";
import "axios";
import "./useExpandableContent-d234d7eb.js";
function Friends({
  auth,
  randomUsersForFriendship
}) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "New Page Title" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "New Page" }),
        /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("div", { className: "ar-px-user-galery", children: [
          /* @__PURE__ */ jsx(NavSidebar, {}),
          /* @__PURE__ */ jsx("div", { className: "content", children: /* @__PURE__ */ jsxs("div", { className: "user-grid", children: [
            randomUsersForFriendship.map((profileData) => /* @__PURE__ */ jsx(UserGaleryCard, { profileData })),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-18843275.webp",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Anna Helton" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-18779079.webp",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Helga Borman" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-18866330.webp",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Rebeka Gald" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-18731989.jpeg",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Mary Bly" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-18666051.jpeg",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Kety Valgyr" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-18435667.jpeg",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Ango Pedrolo" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-18038136.webp",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Victoria Lagutova" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-17503411.jpeg",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Bianca Kuprina" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-11960755.jpeg",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Olga Volkova" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-11077187.jpeg",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Jeny Gorenkova" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
              /* @__PURE__ */ jsxs("a", { href: "", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/images/galery/pexels-photo-8908813.jpeg",
                    alt: "Фото або відео"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
                  /* @__PURE__ */ jsxs("a", { href: "", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Katrin Malkovich" }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Web design." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "user-card-footer", children: [
                /* @__PURE__ */ jsx("button", { className: "like-button", children: "Add to friends" }),
                /* @__PURE__ */ jsx("button", { className: "comment-button", children: "Delete" })
              ] })
            ] })
          ] }) })
        ] }) })
      ]
    }
  );
}
export {
  Friends as default
};
