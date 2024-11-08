import { jsx, jsxs } from "react/jsx-runtime";
import { C as CustomAudioPlayer } from "./CustomAudioPlayer-b9199818.js";
import { useState } from "react";
import "@heroicons/react/16/solid";
function FileViewContent({ media }) {
  useState(false);
  const fileCard = {
    overflow: "hidden",
    width: "100%",
    height: "auto"
  };
  return /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsxs("div", { children: [
    media.type === "image" && /* @__PURE__ */ jsx("div", { style: fileCard, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `/user-file/${media.url}`,
        alt: "Media",
        loading: "lazy"
      }
    ) }),
    media.type === "video" && /* @__PURE__ */ jsx("div", { style: fileCard, children: /* @__PURE__ */ jsx("video", { src: `/user-file/${media.url}`, controls: true }) }),
    media.type === "music" && /* @__PURE__ */ jsx("div", { style: fileCard, children: /* @__PURE__ */ jsx(CustomAudioPlayer, { src: `/user-file/${media.url}` }) })
  ] }, media.id) });
}
export {
  FileViewContent as default
};
