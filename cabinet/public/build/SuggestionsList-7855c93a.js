import { jsxs, jsx } from "react/jsx-runtime";
import { Inertia } from "@inertiajs/inertia";
function SuggestionsList({
  randomUsersForFriendship
}) {
  return /* @__PURE__ */ jsxs("div", { className: "section_2", children: [
    /* @__PURE__ */ jsx("div", { className: "header-card", children: /* @__PURE__ */ jsxs("div", { className: "space-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "bold", children: "Suggestions" }),
      /* @__PURE__ */ jsx("button", { className: "button-icon", children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "section centered-container", children: [
      /* @__PURE__ */ jsx("div", { className: "border-block-end" }),
      randomUsersForFriendship.map(
        (friend) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "item_left_sidebar_section_2",
            children: [
              " ",
              /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: friend.profile_image_url ? `/user-file/${friend.profile_image_url}` : "/assets/images/noimg.png",
                  alt: `${friend.name} ${friend.last_name}`
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "text", children: [
                /* @__PURE__ */ jsxs("p", { className: "bold", children: [
                  friend.name,
                  " ",
                  friend.last_name
                ] }),
                friend.about_me && friend.about_me.occupations && /* @__PURE__ */ jsx("p", { className: "text-light", children: friend.about_me.occupations })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => Inertia.visit(
                    route("profile-friend", {
                      id: friend.id
                    })
                  ),
                  className: "button-icon right-top",
                  children: /* @__PURE__ */ jsx(
                    "i",
                    {
                      className: "bi bi-plus-square",
                      style: { fontSize: "25px" }
                    }
                  )
                }
              ) })
            ]
          },
          friend.id
        )
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "View More Profiles" }) }),
      " "
    ] })
  ] });
}
export {
  SuggestionsList
};
