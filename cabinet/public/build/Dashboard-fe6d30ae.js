import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { SuggestionsList } from "./SuggestionsList-7855c93a.js";
import UserProfile from "./UserProfile-019cd3c6.js";
import PostsList from "./PostList-c70d7e13.js";
import RightSidebar from "./RightSidebar-fe488ab9.js";
import ParentSayPost from "./ParentSayPost-0db9c564.js";
import { useEffect } from "react";
import { s as setUser } from "./app.js";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
import "@inertiajs/inertia";
import "./Post-4d233726.js";
import "./PostContent-994e3774.js";
import "./LinkPreviewPost-c5eba1a2.js";
import "./PostFooter-3daef4a2.js";
import "./PostHeader-d5435675.js";
import "./ModalYesOrNot-65fc07f4.js";
import "moment";
import "./PostActions-71a831ec.js";
import "./CommentsList-015d00bc.js";
import "./Comment-d5f73ae4.js";
import "./useAxios-a6ad7719.js";
import "axios";
import "./SidebarItem-65cb1f8e.js";
import "./SidebarSection1-4bd6eb3e.js";
import "./SidebarSection3-a2cb8a88.js";
import "./RightSidebarHeader-d4cd8cb5.js";
import "./SidebarSection2-dccfb3d4.js";
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
import "./EditableText-cbf634f4.js";
import "react-dom/client";
import "react-router-dom";
import "@reduxjs/toolkit";
function Dashboard({
  auth,
  posts,
  friendsAndFollowers,
  profileData,
  postMostViewed: postMostViewed2,
  randomUsersForFriendship
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    const user2 = auth.user;
    if (user2 && dispatch) {
      dispatch(setUser(user2));
    }
  }, [auth, dispatch]);
  const user = useSelector((state) => state.user);
  console.log("User from Redux store:", user);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("div", { className: "container ar-px", children: [
          /* @__PURE__ */ jsxs("div", { className: "gridcol", children: [
            /* @__PURE__ */ jsxs("div", { className: "left-sidebar", children: [
              /* @__PURE__ */ jsx("div", { className: "section_1", children: /* @__PURE__ */ jsx(
                UserProfile,
                {
                  profileData,
                  friendsAndFollowers
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "section_2", children: /* @__PURE__ */ jsx(
                SuggestionsList,
                {
                  randomUsersForFriendship
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "content", children: [
              /* @__PURE__ */ jsx(ParentSayPost, { profileData }),
              /* @__PURE__ */ jsx(PostsList, { posts })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "right-sidebar", children: /* @__PURE__ */ jsx(RightSidebar, { postMostViewed: postMostViewed2 }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "container ar-px", children: /* @__PURE__ */ jsx("div", { className: "gridcol", children: /* @__PURE__ */ jsxs("div", { className: "fixed-bottom-right", children: [
            /* @__PURE__ */ jsxs("div", { className: "note-count", children: [
              /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "assets/images/galery/pexels-photo-18731989.jpeg",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "notification-badge", children: "3" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "note-count", children: [
              /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "assets/images/galery/pexels-photo-8908813.jpeg",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "notification-badge", children: "3" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "note-count", children: [
              /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "assets/images/galery/pexels-photo-11960755.jpeg",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "notification-badge", children: "3" })
            ] })
          ] }) }) })
        ] }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
