import { jsxs, jsx } from "react/jsx-runtime";
const MenegmentPost = ({ profileData }) => {
  return /* @__PURE__ */ jsxs("div", { className: "profile-posts", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center", children: [
      /* @__PURE__ */ jsx("h2", { children: "Posts" }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "button-tag", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-sliders mr-1" }),
          " Filters"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "button-tag", children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-gear mr-1" }),
          "Post management"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex border-block-end" }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex align-items-center justify-content-center color-danger bg-danger-bottom", children: [
        /* @__PURE__ */ jsx("i", { className: "bi bi-list mr-1" }),
        "List"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-content-center", children: [
        /* @__PURE__ */ jsx("i", { className: "bi bi-grid-3x3-gap mr-1" }),
        "Grid"
      ] })
    ] })
  ] });
};
const MenegmentPost$1 = MenegmentPost;
export {
  MenegmentPost$1 as default
};
