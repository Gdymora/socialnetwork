import { jsxs, jsx } from "react/jsx-runtime";
function PostFooter({ onToggleComments }) {
  if (typeof onToggleComments !== "function") {
    console.error("onToggleComments should be a function", onToggleComments);
  }
  return /* @__PURE__ */ jsxs("div", { className: "post-footer", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-content-center align-items-center", children: /* @__PURE__ */ jsx("button", { className: "like-button", children: "Like" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-content-center align-items-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "like-button comment-button",
        onClick: onToggleComments,
        children: "Comment"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-content-center align-items-center", children: /* @__PURE__ */ jsx("button", { className: "like-button", children: "Share" }) })
  ] });
}
export {
  PostFooter as default
};
