import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import PostContent from "./PostContent-994e3774.js";
import PostFooter from "./PostFooter-3daef4a2.js";
import PostHeader from "./PostHeader-d5435675.js";
import PostActions from "./PostActions-71a831ec.js";
import CommentsList from "./CommentsList-015d00bc.js";
import "./LinkPreviewPost-c5eba1a2.js";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "@headlessui/react";
import "./ModalYesOrNot-65fc07f4.js";
import "moment";
import "react-redux";
import "./Comment-d5f73ae4.js";
function Post({ post, onChangeUpdatePost, onChangeDeletePost }) {
  var _a;
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  const onChangeUpdateId = (id) => {
    if (onChangeUpdatePost) {
      onChangeUpdatePost(id);
    }
  };
  const onChangeDeleteId = (id) => {
    if (onChangeDeletePost) {
      onChangeDeletePost(id);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "post", children: [
    /* @__PURE__ */ jsx(
      PostHeader,
      {
        author: post.author,
        id: post.id,
        createdAt: post.created_at,
        visibility: post.visibility,
        onChangeUpdate: onChangeUpdateId,
        onChangeDelete: onChangeDeleteId
      }
    ),
    /* @__PURE__ */ jsx(
      PostContent,
      {
        title: post.title,
        media: post.media,
        links: post.links,
        content: post.content,
        maxLength: 100
      }
    ),
    /* @__PURE__ */ jsx(
      PostActions,
      {
        likes: post.likes,
        comments: ((_a = post.comments) == null ? void 0 : _a.length) ?? 0,
        share: post.share
      }
    ),
    /* @__PURE__ */ jsx(
      PostFooter,
      {
        onToggleComments: toggleComments
      }
    ),
    /* @__PURE__ */ jsx(
      CommentsList,
      {
        comments: post.comments,
        showComments
      }
    )
  ] });
}
export {
  Post as default
};
