import { jsxs, jsx } from "react/jsx-runtime";
function SidebarItem({
  number,
  name,
  description
}) {
  return /* @__PURE__ */ jsxs("div", { className: "item_right_sidebar_section_2", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: number }),
    /* @__PURE__ */ jsxs("div", { className: "text", children: [
      /* @__PURE__ */ jsx("p", { className: "bold", children: name }),
      /* @__PURE__ */ jsx("p", { className: "text-light", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("button", { className: "button-icon right-top", children: /* @__PURE__ */ jsx(
      "i",
      {
        className: "bi bi-plus-square",
        style: { fontSize: "25px" }
      }
    ) }) })
  ] });
}
export {
  SidebarItem as default
};
