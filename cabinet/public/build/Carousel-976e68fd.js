import { jsx } from "react/jsx-runtime";
import UserCard from "./UserCard-daba5f63.js";
function Carousel({
  users
}) {
  return /* @__PURE__ */ jsx("div", { className: "carousel-container", children: /* @__PURE__ */ jsx("div", { className: "carousel-wrapper", children: users.map((user) => /* @__PURE__ */ jsx(UserCard, { user }, user.id)) }) });
}
export {
  Carousel as default
};
