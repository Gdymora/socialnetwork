import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import "react";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
function WorkShop({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "New Page Title" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "New Page" }),
        /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "container ar-px-workshop", children: /* @__PURE__ */ jsxs("div", { className: "grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "left-sidebar", children: [
            /* @__PURE__ */ jsxs("div", { className: "section_1", children: [
              /* @__PURE__ */ jsx("div", { className: "header" }),
              /* @__PURE__ */ jsx("div", { className: "section centered-container" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "section_2", children: [
              /* @__PURE__ */ jsx("div", { className: "header-card", children: /* @__PURE__ */ jsxs("div", { className: "space-between", children: [
                /* @__PURE__ */ jsx("h2", { className: "bold", children: "Suggestions" }),
                /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
                /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
                /* @__PURE__ */ jsx("div", { className: "item_left_sidebar_section_2" }),
                /* @__PURE__ */ jsx("div", { className: "item_left_sidebar_section_2" }),
                /* @__PURE__ */ jsx("div", { className: "item_left_sidebar_section_2" }),
                /* @__PURE__ */ jsx("div", { className: "item_left_sidebar_section_2" }),
                /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("a", { href: "", children: "View Profile" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "content", children: [
            /* @__PURE__ */ jsxs("div", { className: "section_say", children: [
              "menu",
              /* @__PURE__ */ jsxs("div", { className: "flex align-items-center post_message", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-secondary",
                    children: "Post a Job"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "but btn btn-danger",
                    children: "Post a message"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "posts", children: "canvas" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "right-sidebar", children: [
            /* @__PURE__ */ jsxs("div", { className: "section_1", children: [
              /* @__PURE__ */ jsx("div", { className: "header centered-container", children: /* @__PURE__ */ jsx("img", { src: "assets/images/noimg.png", alt: "" }) }),
              /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
                /* @__PURE__ */ jsx("div", { className: "", children: "Track Time on Workwise" }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-light", children: "Pay only for the Hours worked" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "section_2", children: [
              /* @__PURE__ */ jsx("div", { className: "header-card", children: /* @__PURE__ */ jsxs("div", { className: "space-between", children: [
                "Top Jobs",
                /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
                /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
                /* @__PURE__ */ jsxs("div", { className: "item_right_sidebar_section_2", children: [
                  /* @__PURE__ */ jsx("div", { className: "", children: "1" }),
                  /* @__PURE__ */ jsxs("div", { className: "text", children: [
                    /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                    /* @__PURE__ */ jsx("p", { className: "text-light", children: "Web develodiver" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("button", { className: "button-icon right-top", children: /* @__PURE__ */ jsx(
                    "i",
                    {
                      className: "bi bi-plus-square",
                      style: { fontSize: "25px" }
                    }
                  ) }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "item_right_sidebar_section_2", children: [
                  /* @__PURE__ */ jsx("div", { className: "", children: "2" }),
                  /* @__PURE__ */ jsxs("div", { className: "text", children: [
                    /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                    /* @__PURE__ */ jsx("p", { className: "text-light", children: "Web develodiver" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("button", { className: "button-icon right-top", children: /* @__PURE__ */ jsx(
                    "i",
                    {
                      className: "bi bi-plus-square",
                      style: { fontSize: "25px" }
                    }
                  ) }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "section_3", children: [
              /* @__PURE__ */ jsx("div", { className: "header-card", children: /* @__PURE__ */ jsxs("div", { className: "space-between", children: [
                /* @__PURE__ */ jsx("h2", { className: "bold", children: "Most Viewed This Week" }),
                /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
                /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
                /* @__PURE__ */ jsxs("div", { className: "item_right_sidebar_section_2", children: [
                  /* @__PURE__ */ jsx("div", { className: "", children: "1" }),
                  /* @__PURE__ */ jsxs("div", { className: "text", children: [
                    /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                    /* @__PURE__ */ jsx("p", { className: "text-light", children: "Web develodiver" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("button", { className: "button-icon right-top", children: /* @__PURE__ */ jsx(
                    "i",
                    {
                      className: "bi bi-plus-square",
                      style: { fontSize: "25px" }
                    }
                  ) }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "item_right_sidebar_section_2", children: [
                  /* @__PURE__ */ jsx("div", { className: "", children: "2" }),
                  /* @__PURE__ */ jsxs("div", { className: "text", children: [
                    /* @__PURE__ */ jsx("p", { className: "bold", children: "Alex Petroff" }),
                    /* @__PURE__ */ jsx("p", { className: "text-light", children: "Web develodiver" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("button", { className: "button-icon right-top", children: /* @__PURE__ */ jsx(
                    "i",
                    {
                      className: "bi bi-plus-square",
                      style: { fontSize: "25px" }
                    }
                  ) }) })
                ] })
              ] })
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  WorkShop as default
};
