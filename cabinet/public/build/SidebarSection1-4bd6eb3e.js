import { jsxs, jsx } from "react/jsx-runtime";
function SidebarSection1({ title }) {
  return /* @__PURE__ */ jsxs("div", { className: "section_1", children: [
    /* @__PURE__ */ jsx("div", { className: "header centered-container", children: /* @__PURE__ */ jsx("img", { src: "assets/images/noimg.png", alt: "" }) }),
    /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { children: "Track Time on Workwise" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-light", children: "Pay only for the Hours worked" }) }),
      /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
      /* @__PURE__ */ jsx("h2", { children: "SIGN UP" }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("a", { href: "", children: "Learn more" }) })
    ] })
  ] });
}
export {
  SidebarSection1 as default
};
