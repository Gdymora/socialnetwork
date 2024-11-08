import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import AboutMe from "./AboutMe-e70c5b38.js";
import Friends from "./Friends-84d90e6f.js";
import ParentSayPost from "./ParentSayPost-0db9c564.js";
import PostsList from "./PostList-c70d7e13.js";
import ParentModalFile from "./ParentModalFile-2273e529.js";
import FileViewList from "./FileViewList-59ea718b.js";
import { useState } from "react";
import MenegmentPost from "./MenegmentPost-7738e069.js";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
import "./EditableText-cbf634f4.js";
import "./useAxios-a6ad7719.js";
import "axios";
import "./ProfileUserCard-79a0c1dc.js";
import "./SayPost-75bdbc0b.js";
import "./Button-9cb580cd.js";
import "./TextInput-3550b10b.js";
import "./Modal-84e6b027.js";
import "./JobTabContent-27d67371.js";
import "./SelectButton-79e61b6d.js";
import "./FileTabContent-5f275063.js";
import "./UploaderLot-cdead3c3.js";
import "./LinkTabContent-1fe1e586.js";
import "./LinkPreviewModal-232e28eb.js";
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
import "./Modal.module-5acca05a.js";
import "./Videos-03cc7185.js";
import "./Music-6f38130d.js";
import "./Posts-38373ab1.js";
import "./Images-dc28d36f.js";
import "howler";
import "./FileCategoryView-b2a98b8c.js";
import "./FileView-a83e6aa4.js";
import "./FileViewHeader-989eeec3.js";
import "./FileViewContent-3c344970.js";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
import "./FileViewFooter-2a2dbeae.js";
import "./useExpandableContent-d234d7eb.js";
function UserHome({
  auth,
  posts,
  friendsAndFollowers,
  profileData,
  userFile
}) {
  const [typeFiles, setTypeFiles] = useState("");
  const [showFiles, setShowFiles] = useState(false);
  const handleToggleFiles = (shouldShowFiles, shouldTypeFiles) => {
    setShowFiles(shouldShowFiles);
    setTypeFiles(shouldTypeFiles);
  };
  console.log(userFile);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "New Page Title" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "New Page" }),
        /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "container ar-px-profile", children: /* @__PURE__ */ jsxs("div", { className: "gridcol", children: [
          /* @__PURE__ */ jsxs("div", { className: "sidebar", children: [
            /* @__PURE__ */ jsx(AboutMe, { profileData }),
            /* @__PURE__ */ jsx(
              ParentModalFile,
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
              /* @__PURE__ */ jsx(ParentSayPost, { profileData }),
              /* @__PURE__ */ jsx(MenegmentPost, { profileData }),
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
  UserHome as default
};
