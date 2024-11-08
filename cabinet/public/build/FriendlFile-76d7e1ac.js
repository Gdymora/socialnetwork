import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import Videos from "./Videos-3b71ac9d.js";
import Music from "./Music-ad5ce7b3.js";
import Posts from "./Posts-58f50fe4.js";
import Images from "./Images-d1c7ebbd.js";
function FriendFile({
  profileData,
  onToggleFiles
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Images,
      {
        handleShowImages: () => onToggleFiles(true, "image")
      }
    ),
    /* @__PURE__ */ jsx(
      Music,
      {
        handleShowMusics: () => onToggleFiles(true, "music")
      }
    ),
    /* @__PURE__ */ jsx(
      Videos,
      {
        handleShowVideos: () => onToggleFiles(true, "video")
      }
    ),
    /* @__PURE__ */ jsx(Posts, { handleShowPosts: () => onToggleFiles(false, "post") })
  ] });
}
export {
  FriendFile as default
};
