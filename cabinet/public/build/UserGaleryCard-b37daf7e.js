import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import { u as useExpandableContent } from "./useExpandableContent-d234d7eb.js";
import "axios";
function UserGaleryCard({
  profileData
}) {
  var _a, _b;
  const { id, name, last_name, profile_image_url } = profileData;
  const [isFriendStatus, setIsFriendStatus] = useState(false);
  const { sendRequest, data, loading, error } = useAxios("");
  const handleAddFriend = () => {
    sendRequest("patch", {}, { url: `/friends/${id}/follow` });
    setIsFriendStatus(true);
  };
  const handleDeleteFriend = () => {
    sendRequest("patch", {}, { url: `/friends/${id}/unfollow` });
    setIsFriendStatus(false);
  };
  const maxLength = 16;
  const text = ((_a = profileData.about_me) == null ? void 0 : _a.hobbies) ? (_b = profileData.about_me) == null ? void 0 : _b.hobbies : "";
  const { isExpanded, toggleExpanded, renderContent } = useExpandableContent(
    text,
    maxLength
  );
  const nameUser = `${profileData.name} ${profileData.last_name}`;
  const {
    isExpanded: isExpandedName,
    toggleExpanded: toggleExpandedName,
    renderContent: renderContentName
  } = useExpandableContent(nameUser, maxLength);
  return /* @__PURE__ */ jsxs("div", { className: "user-galery-card", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: route("profile-friend", { id }),
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: profile_image_url ? `/user-file/${profile_image_url}` : "/assets/images/noimg.png",
              alt: `Аватар ${name}`
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "user-card-content", children: [
            /* @__PURE__ */ jsxs("button", { className: "link-button", children: [
              renderContentName(),
              text.length > maxLength && /* @__PURE__ */ jsx(
                "button",
                {
                  style: { border: "1px solid #ddd" },
                  onClick: toggleExpandedName,
                  children: isExpandedName ? " <-" : "..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              renderContent(),
              text.length > maxLength && /* @__PURE__ */ jsx(
                "button",
                {
                  style: { border: "1px solid #ddd" },
                  onClick: toggleExpanded,
                  children: isExpanded ? " <-" : "..."
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "user-card-footer", children: !isFriendStatus ? /* @__PURE__ */ jsx("button", { className: "like-button", onClick: handleAddFriend, children: "Add to friends" }) : /* @__PURE__ */ jsx(
      "button",
      {
        className: "comment-button",
        onClick: handleDeleteFriend,
        children: "Delete"
      }
    ) })
  ] });
}
export {
  UserGaleryCard as default
};
