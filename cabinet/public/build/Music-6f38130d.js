import { jsxs, jsx } from "react/jsx-runtime";
const Music = ({
  onAddMusics,
  handleShowMusics
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center images", children: [
    /* @__PURE__ */ jsx("h2", { children: "Music" }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("button", { className: "link-button", onClick: onAddMusics, children: "Add musics" }) }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsxs("button", { className: "link-button", onClick: handleShowMusics, children: [
      "View all music",
      " "
    ] }) })
  ] });
};
const Music$1 = Music;
export {
  Music$1 as default
};
