import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import "axios";
function FriendCard({
  profileData,
  isFriendAndFollow: isFriendAndFollow2
}) {
  var _a;
  const { id, name, last_name, profile_image_url } = profileData;
  const { isFriend } = isFriendAndFollow2;
  const [isFriendStatus, setIsFriendStatus] = useState(isFriend);
  const { sendRequest, data, loading, error } = useAxios("");
  const handleAddFriend = () => {
    sendRequest("patch", {}, { url: `/friends/${id}/follow` });
    setIsFriendStatus(true);
  };
  const handleDeleteFriend = () => {
    sendRequest("patch", {}, { url: `/friends/${id}/unfollow` });
    setIsFriendStatus(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
    /* @__PURE__ */ jsxs("a", { href: route("profile-friend", { id }), children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: profile_image_url ? `/user-file/${profile_image_url}` : "/assets/images/noimg.png",
          alt: `Аватар ${name}`
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          name,
          " ",
          last_name
        ] }),
        /* @__PURE__ */ jsx("p", { children: (_a = profileData.about_me) == null ? void 0 : _a.hobbies })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "user-card-footer", children: !isFriendStatus ? /* @__PURE__ */ jsx("button", { className: "like-button", onClick: handleAddFriend, children: "Add to friends" }) : /* @__PURE__ */ jsx("button", { className: "comment-button", onClick: handleDeleteFriend, children: "Delete" }) })
  ] });
}
export {
  FriendCard as default
};
