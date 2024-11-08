import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import Friends from "./Friends-07193852.js";
import PostsList from "./PostList-c70d7e13.js";
import FileViewList from "./FileViewList-5320cefe.js";
import { useState } from "react";
import AboutFriend from "./AboutFriend-1a886abc.js";
import FriendFile from "./FriendlFile-76d7e1ac.js";
import FriendCard from "./FriendCard-ab1657c4.js";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
import "./ProfileUserCard-c839c202.js";
import "./Post-4d233726.js";
import "./PostContent-994e3774.js";
import "./LinkPreviewPost-c5eba1a2.js";
import "./PostFooter-3daef4a2.js";
import "./PostHeader-d5435675.js";
import "./ModalYesOrNot-65fc07f4.js";
import "moment";
import "react-redux";
import "./PostActions-71a831ec.js";
import "./CommentsList-015d00bc.js";
import "./Comment-d5f73ae4.js";
import "./ParentSayPost-0db9c564.js";
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
import "./useAxios-a6ad7719.js";
import "./FileView-09a7aeeb.js";
import "./FileViewHeader-da0cf291.js";
import "./useExpandableContent-d234d7eb.js";
import "./FileViewContent-605a882f.js";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
import "./FileViewFooter-58e55ffa.js";
import "./Videos-3b71ac9d.js";
import "./Music-ad5ce7b3.js";
import "./Posts-58f50fe4.js";
import "./Images-d1c7ebbd.js";
function ProfileFriend({
  auth,
  posts,
  friendsAndFollowers,
  profileData,
  userFile
}) {
  const [typeFiles, setTypeFiles] = useState("");
  const [showFiles, setShowFiles] = useState(false);
  const { isFriend, isFollowing, isFollower } = friendsAndFollowers;
  const handleToggleFiles = (shouldShowFiles, shouldTypeFiles) => {
    setShowFiles(shouldShowFiles);
    setTypeFiles(shouldTypeFiles);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "New Page Title" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "New Page" }),
        /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "container ar-px-profile", children: /* @__PURE__ */ jsxs("div", { className: "gridcol", children: [
          /* @__PURE__ */ jsxs("div", { className: "sidebar", children: [
            /* @__PURE__ */ jsx(AboutFriend, { profileData }),
            /* @__PURE__ */ jsx(
              FriendFile,
              {
                profileData,
                onToggleFiles: handleToggleFiles
              }
            ),
            /* @__PURE__ */ jsx(
              Friends,
              {
                friendsAndFollowers
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "content", children: [
            !showFiles && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: "post-item", children: /* @__PURE__ */ jsx(
                FriendCard,
                {
                  profileData,
                  isFriendAndFollow: {
                    isFriend,
                    isFollowing,
                    isFollower
                  }
                }
              ) }),
              /* @__PURE__ */ jsx(PostsList, { posts })
            ] }),
            showFiles && /* @__PURE__ */ jsxs("div", { className: "posts", children: [
              /* @__PURE__ */ jsx("div", { className: "post", children: /* @__PURE__ */ jsx(FileViewList, { files: userFile }) }),
              " "
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  ProfileFriend as default
};
