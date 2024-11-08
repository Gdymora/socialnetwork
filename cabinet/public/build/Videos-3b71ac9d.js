import { jsxs, jsx } from "react/jsx-runtime";
const Videos = ({
  handleShowVideos
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center images", children: [
    /* @__PURE__ */ jsx("h2", { children: "Videos" }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("button", { className: "link-button", onClick: handleShowVideos, children: "View all videos" }) })
  ] });
};
const Videos$1 = Videos;
export {
  Videos$1 as default
};
