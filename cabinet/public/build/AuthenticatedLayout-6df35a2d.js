import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { D as Dropdown } from "./Dropdown-c4cea7d8.js";
import { ToastContainer } from "react-toastify";
const ReactToastify = "";
function Header() {
  return /* @__PURE__ */ jsxs("header", { className: "ar-header", children: [
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h1", { children: "Art-Pixel" }),
      /* @__PURE__ */ jsx("div", { className: "col-md-3 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "input-group search", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-control border",
            type: "search",
            placeholder: "Search..."
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "input-group-text search", children: /* @__PURE__ */ jsx("i", { className: "bi bi-search" }) })
      ] }) }),
      /* @__PURE__ */ jsx("nav", { className: "menu", children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "dashboard", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-house-door-fill" }),
          "Home"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "user-home", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-person-fill" }),
          "Profile"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "friends", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-people-fill" }),
          "Friends"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "galery", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-people-fill" }),
          "Galery"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "message", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-chat-square-text-fill" }),
          "Message"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "work-shop", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-hammer" }),
          "Workshop"
        ] }) }),
        /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("li", { className: "nav-item dropdown", children: /* @__PURE__ */ jsxs(
            "a",
            {
              className: "nav-link dropdown-toggle",
              href: "#",
              id: "navbarDropdown",
              role: "button",
              "data-bs-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              children: [
                /* @__PURE__ */ jsx("i", { className: "bi bi-gear-fill" }),
                " ",
                "Settings"
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: "profile.edit", children: "Profile" }),
            /* @__PURE__ */ jsx(
              Dropdown.Link,
              {
                href: "logout",
                method: "post",
                as: "button",
                children: "Log Out"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { id: "theme-toggle", children: /* @__PURE__ */ jsx("i", { className: "bi bi-brightness-alt-high-fill" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("button", { id: "mobile-menu-button", children: "Меню" }),
    /* @__PURE__ */ jsx(ToastContainer, {}),
    " "
  ] });
}
function Authenticated({
  user,
  header,
  children
}) {
  useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "body", "data-mode": "light", "data-sidebar-size": "lg", children: /* @__PURE__ */ jsx("main", { children }) })
  ] });
}
export {
  Authenticated as A
};
