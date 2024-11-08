import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { B as Button } from "./Button-9cb580cd.js";
import { T as TextInput } from "./TextInput-3550b10b.js";
import "react";
function SayPost({
  profileData,
  onTextClick,
  onFileClick,
  onLinkClick,
  onJobClick
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "section_say", children: [
    /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: profileData.profile_image_url ? `/user-file/${profileData.profile_image_url}` : "/assets/images/noimg.png",
        alt: "Media",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "form flex align-items-center", children: /* @__PURE__ */ jsx(TextInput, { onClick: onTextClick }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex align-items-center post_message", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "but btn btn-danger",
          onClick: onFileClick,
          children: "Image/Video"
        }
      ),
      /* @__PURE__ */ jsx(Button, { className: "btn btn-secondary", onClick: onLinkClick, children: "Link" }),
      /* @__PURE__ */ jsx(Button, { className: "btn btn-secondary", onClick: onJobClick, children: "Job" })
    ] })
  ] }) });
}
export {
  SayPost as default
};
