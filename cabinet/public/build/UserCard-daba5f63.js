import { jsxs, jsx } from "react/jsx-runtime";
function UserCard({ user }) {
  const { name, last_name, description, profile_image_url } = user;
  const defaultImageUrl = "assets/images/galery/pexels-photo-18784917.webp";
  return /* @__PURE__ */ jsxs("div", { className: "user-card", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: profile_image_url || defaultImageUrl,
        alt: `Аватар ${name}`
      }
    ),
    /* @__PURE__ */ jsx("h3", { children: name }),
    /* @__PURE__ */ jsx("p", { children: description }),
    /* @__PURE__ */ jsx("button", { className: "add-friend-button", children: "Додати в друзі" })
  ] });
}
export {
  UserCard as default
};
