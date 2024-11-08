import { jsx, jsxs } from "react/jsx-runtime";
import RightSidebarHeader from "./RightSidebarHeader-d4cd8cb5.js";
function SidebarSection3({
  title,
  children
}) {
  return /* @__PURE__ */ jsx("div", { className: "section_3", children: /* @__PURE__ */ jsxs("div", { className: "section_3", children: [
    /* @__PURE__ */ jsx(RightSidebarHeader, { title }),
    /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
      /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
      children
    ] })
  ] }) });
}
export {
  SidebarSection3 as default
};
