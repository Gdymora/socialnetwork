import { jsx, jsxs } from "react/jsx-runtime";
import RightSidebarHeader from "./RightSidebarHeader-d4cd8cb5.js";
function SidebarSection2({ title, children }) {
  return /* @__PURE__ */ jsx("div", { className: "section_2", children: /* @__PURE__ */ jsxs("div", { className: "section_2", children: [
    /* @__PURE__ */ jsx(RightSidebarHeader, { title }),
    /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
      /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
      children
    ] })
  ] }) });
}
export {
  SidebarSection2 as default
};
