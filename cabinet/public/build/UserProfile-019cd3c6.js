import { jsxs, jsx } from "react/jsx-runtime";
function UserProfile({
  profileData,
  friendsAndFollowers
}) {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "section_1", children: [
    /* @__PURE__ */ jsx("div", { className: "header", children: /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: profileData.profile_image_url ? `/user-file/${profileData.profile_image_url}` : "/assets/images/noimg.png",
        loading: "lazy",
        alt: `${profileData == null ? void 0 : profileData.name} ${profileData == null ? void 0 : profileData.last_name}`
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
      /* @__PURE__ */ jsxs("h2", { className: "bold", children: [
        profileData.name,
        " ",
        profileData.last_name
      ] }),
      ((_a = profileData.about_me) == null ? void 0 : _a.occupations) && /* @__PURE__ */ jsx("p", { className: "text-light", children: profileData.about_me.occupations }),
      /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-light", children: "Following" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "bold", children: friendsAndFollowers == null ? void 0 : friendsAndFollowers.followingCount }) }),
      /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-light", children: "Followers" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "bold", children: friendsAndFollowers == null ? void 0 : friendsAndFollowers.followersCount }) }),
      /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "user-home", children: "View Profile" }) })
    ] })
  ] });
}
export {
  UserProfile as default
};
