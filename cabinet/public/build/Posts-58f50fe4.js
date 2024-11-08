import { jsxs, jsx } from "react/jsx-runtime";
const Posts = ({ handleShowPosts }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center images", children: [
    /* @__PURE__ */ jsx("h2", { children: "Posts" }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("button", { className: "link-button", onClick: handleShowPosts, children: "View all posts" }) })
  ] });
};
const Posts$1 = Posts;
export {
  Posts$1 as default
};
