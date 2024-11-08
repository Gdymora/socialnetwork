import { jsxs, jsx } from "react/jsx-runtime";
const Images = ({
  handleShowImages
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center images", children: [
    /* @__PURE__ */ jsx("h2", { children: "Images" }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("button", { className: "link-button", onClick: handleShowImages, children: "View all images" }) })
  ] });
};
const Images$1 = Images;
export {
  Images$1 as default
};
