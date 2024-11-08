import { jsxs, jsx } from "react/jsx-runtime";
import ProfileUserCard from "./ProfileUserCard-c839c202.js";
const Friends = ({
  friendsAndFollowers
}) => {
  const friends = friendsAndFollowers.friends || [];
  const friendsCount = friendsAndFollowers.friendsCount;
  return /* @__PURE__ */ jsxs("div", { className: "frends", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex space-between align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "header", children: [
        /* @__PURE__ */ jsx("h2", { children: "Friends" }),
        /* @__PURE__ */ jsx("p", { children: friendsCount })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "right-top", children: /* @__PURE__ */ jsx("button", { className: "link-button", children: "View all friends" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "section", children: friends.map((friend, index) => /* @__PURE__ */ jsx(ProfileUserCard, { user: friend }, index)) })
  ] });
};
const Friends$1 = Friends;
export {
  Friends$1 as default
};
