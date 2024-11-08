import { jsxs, jsx } from "react/jsx-runtime";
function PostActions({ likes, comments, share }) {
  return /* @__PURE__ */ jsxs("div", { className: "post-actions flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "left", children: [
      /* @__PURE__ */ jsx("i", { className: "bi bi-hand-thumbs-up-fill color-orange icon-30 mr-1" }),
      " ",
      likes
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-content-center align-items-center", children: [
      /* @__PURE__ */ jsx("i", { className: "bi bi-chat icon-30 mr-1" }),
      " ",
      comments
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "right align-items-center", children: [
      /* @__PURE__ */ jsx("i", { className: "bi bi-reply icon-30 mr-1" }),
      " ",
      share
    ] })
  ] });
}
export {
  PostActions as default
};
