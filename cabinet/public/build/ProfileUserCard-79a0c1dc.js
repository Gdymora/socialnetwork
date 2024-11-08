import { jsxs, jsx } from "react/jsx-runtime";
function ProfileUserCard({ user }) {
  const { id, name, last_name, profile_image_url } = user;
  return /* @__PURE__ */ jsxs("div", { className: "profile-user-card", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: profile_image_url ? `/user-file/${profile_image_url}` : "/assets/images/noimg.png",
        loading: "lazy",
        alt: `Аватар ${name}`
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: route("profile-friend", { id }),
        children: [
          " ",
          /* @__PURE__ */ jsxs("p", { children: [
            name,
            " ",
            last_name
          ] }),
          " "
        ]
      }
    )
  ] });
}
export {
  ProfileUserCard as default
};
