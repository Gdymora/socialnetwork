import { jsx, jsxs } from "react/jsx-runtime";
function RightSidebarHeader({ title }) {
  return /* @__PURE__ */ jsx("div", { className: "header-card", children: /* @__PURE__ */ jsxs("div", { className: "space-between", children: [
    /* @__PURE__ */ jsx("h2", { className: "bold", children: title }),
    /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) })
  ] }) });
}
export {
  RightSidebarHeader as default
};
