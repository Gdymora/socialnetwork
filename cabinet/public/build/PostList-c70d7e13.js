import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import Post from "./Post-4d233726.js";
import ParentSayPost from "./ParentSayPost-0db9c564.js";
import { useState, useEffect } from "react";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import { toast } from "react-toastify";
import "./PostContent-994e3774.js";
import "./LinkPreviewPost-c5eba1a2.js";
import "./PostFooter-3daef4a2.js";
import "./PostHeader-d5435675.js";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "@headlessui/react";
import "./ModalYesOrNot-65fc07f4.js";
import "moment";
import "react-redux";
import "./PostActions-71a831ec.js";
import "./CommentsList-015d00bc.js";
import "./Comment-d5f73ae4.js";
import "./SayPost-75bdbc0b.js";
import "./Button-9cb580cd.js";
import "./TextInput-3550b10b.js";
import "./Modal-84e6b027.js";
import "./JobTabContent-27d67371.js";
import "./SelectButton-79e61b6d.js";
import "./FileTabContent-5f275063.js";
import "./UploaderLot-cdead3c3.js";
import "./LinkTabContent-1fe1e586.js";
import "axios";
import "./LinkPreviewModal-232e28eb.js";
import "./EditableText-cbf634f4.js";
function PostsList({ posts }) {
  const {
    sendRequest: sendRequestDelete,
    data: dataDelete,
    loading: loadingDelete,
    error: errorDelete
  } = useAxios();
  const [postData, setPostData] = useState();
  const [postDelete, setPostDelete] = useState();
  const [postsArray, setPostsArray] = useState();
  useEffect(() => {
    if (posts) {
      setPostsArray(posts);
    }
  }, [posts]);
  useEffect(() => {
    if (dataDelete && postDelete) {
      toast.success("Success delete");
      const post = posts.filter((post2) => post2.id != postDelete.id);
      if (post) {
        setPostsArray(post);
      }
    }
  }, [dataDelete]);
  useEffect(() => {
    const errorNow = errorDelete;
    if (errorNow) {
      toast.error("Error:", errorNow.message);
    }
  }, [errorDelete]);
  const onChangeModal = (id) => {
    const post = posts.find((post2) => post2.id === id);
    if (post) {
      setPostData({ ...post });
    }
  };
  const onChangeDelete = (id) => {
    const post = posts.find((post2) => post2.id === id);
    if (post) {
      setPostDelete(post);
    }
    handleDelete(id);
  };
  const handleDelete = (id) => {
    sendRequestDelete(
      "delete",
      {},
      {
        url: `/posts/${id}`
      }
    );
  };
  const handleCreatePost = (postData2) => {
    console.log(postData2);
    if (postsArray) {
      setPostsArray([...postsArray, postData2]);
    }
  };
  const handleUpdatePost = (postData2) => {
    console.log(postData2);
    if (postsArray) {
      const updatedPosts = postsArray.map((post) => {
        if (post.id === postData2.id) {
          return postData2;
        }
        return post;
      });
      setPostsArray(updatedPosts);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "posts", children: postsArray && postsArray.map((post) => /* @__PURE__ */ jsx(
      Post,
      {
        post,
        onChangeUpdatePost: onChangeModal,
        onChangeDeletePost: onChangeDelete
      },
      post.id
    )) }),
    postData && /* @__PURE__ */ jsx(
      ParentSayPost,
      {
        postData,
        onCreatePost: handleCreatePost,
        onUpdatePost: handleUpdatePost
      }
    )
  ] });
}
export {
  PostsList as default
};
