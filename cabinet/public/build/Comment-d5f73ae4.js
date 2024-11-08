import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import moment from "moment";
function Comment({ comment }) {
  const defaultImageUrl = "assets/images/noimg.png";
  const dateString = comment.created_at;
  const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("input", { type: "text", placeholder: "write coment" }),
    /* @__PURE__ */ jsxs("div", { className: "comment", children: [
      /* @__PURE__ */ jsxs("div", { className: "header flex", children: [
        /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: comment.author_comments.profile_image_url || defaultImageUrl,
            alt: `Avatar ${comment.author_comments.name}`
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "comment-info flex align-items-center", children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            comment.author_comments.name,
            " ",
            comment.author_comments.last_name
          ] }),
          /* @__PURE__ */ jsx("p", { children: formattedDate })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "comment-text", children: comment.content }),
      comment.childComments && comment.childComments.length > 0 && /* @__PURE__ */ jsx("div", { className: "child-comments", children: comment.childComments.map((childComment) => /* @__PURE__ */ jsx(
        Comment,
        {
          comment: childComment
        },
        childComment.id
      )) })
    ] })
  ] });
}
export {
  Comment as default
};
