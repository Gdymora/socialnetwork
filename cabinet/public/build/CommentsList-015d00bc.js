import { jsx } from "react/jsx-runtime";
import Comment from "./Comment-d5f73ae4.js";
import "moment";
function CommentsList({ comments, showComments }) {
  const commentsStyle = {
    display: showComments ? "block" : "none"
  };
  return /* @__PURE__ */ jsx("div", { className: "comments", style: commentsStyle, children: comments.map((comment) => /* @__PURE__ */ jsx(Comment, { comment }, comment.id)) });
}
export {
  CommentsList as default
};
