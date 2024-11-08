import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
const galery = "";
const profile = "";
const users = "";
const workshop = "";
const audioAndVideo = "";
const scrollbar = "";
const style = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const initialState = {
  user: {
    id: 0,
    name: "",
    email: ""
  }
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});
const { setUser } = userSlice.actions;
const userReducer = userSlice.reducer;
const rootReducer = combineReducers({
  user: userReducer
});
const store = configureStore({
  reducer: rootReducer
});
const appName = "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    const parts = name.split("/");
    const path = parts.length > 1 ? `${name}` : `${name}/${name}`;
    return resolvePageComponent(
      `./Pages/${path}.tsx`,
      /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.tsx": () => import("./ConfirmPassword-145e9795.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./ForgotPassword-6205a146.js"), "./Pages/Auth/Login.tsx": () => import("./Login-e6400e53.js"), "./Pages/Auth/Register.tsx": () => import("./Register-cb97ba2b.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./ResetPassword-a852a7b4.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./VerifyEmail-faa8db2f.js"), "./Pages/Dashboard/Dashboard.tsx": () => import("./Dashboard-fe6d30ae.js"), "./Pages/Dashboard/Partials/LeftSidebar/SuggestionsList.tsx": () => import("./SuggestionsList-7855c93a.js"), "./Pages/Dashboard/Partials/LeftSidebar/UserProfile.tsx": () => import("./UserProfile-019cd3c6.js"), "./Pages/Dashboard/Partials/ModalSay/FileTabContent.tsx": () => import("./FileTabContent-5f275063.js"), "./Pages/Dashboard/Partials/ModalSay/JobTabContent.tsx": () => import("./JobTabContent-27d67371.js"), "./Pages/Dashboard/Partials/ModalSay/LinkPreviewModal.tsx": () => import("./LinkPreviewModal-232e28eb.js"), "./Pages/Dashboard/Partials/ModalSay/LinkTabContent.tsx": () => import("./LinkTabContent-1fe1e586.js"), "./Pages/Dashboard/Partials/ModalSay/ParentSayPost.tsx": () => import("./ParentSayPost-0db9c564.js"), "./Pages/Dashboard/Partials/ModalSay/SayPost.tsx": () => import("./SayPost-75bdbc0b.js"), "./Pages/Dashboard/Partials/ModalSay/TextTabContent.tsx": () => import("./TextTabContent-fccd1fbd.js"), "./Pages/Dashboard/Partials/Post/Carousel.tsx": () => import("./Carousel-976e68fd.js"), "./Pages/Dashboard/Partials/Post/Comment.tsx": () => import("./Comment-d5f73ae4.js"), "./Pages/Dashboard/Partials/Post/CommentsList.tsx": () => import("./CommentsList-015d00bc.js"), "./Pages/Dashboard/Partials/Post/LinkPreviewPost.tsx": () => import("./LinkPreviewPost-c5eba1a2.js"), "./Pages/Dashboard/Partials/Post/Post.tsx": () => import("./Post-4d233726.js"), "./Pages/Dashboard/Partials/Post/PostActions.tsx": () => import("./PostActions-71a831ec.js"), "./Pages/Dashboard/Partials/Post/PostContent.tsx": () => import("./PostContent-994e3774.js"), "./Pages/Dashboard/Partials/Post/PostFooter.tsx": () => import("./PostFooter-3daef4a2.js"), "./Pages/Dashboard/Partials/Post/PostHeader.tsx": () => import("./PostHeader-d5435675.js"), "./Pages/Dashboard/Partials/Post/PostList.tsx": () => import("./PostList-c70d7e13.js"), "./Pages/Dashboard/Partials/Post/UserCard.tsx": () => import("./UserCard-daba5f63.js"), "./Pages/Dashboard/Partials/RightSidebar/RightSidebar.tsx": () => import("./RightSidebar-fe488ab9.js"), "./Pages/Dashboard/Partials/RightSidebar/RightSidebarHeader.tsx": () => import("./RightSidebarHeader-d4cd8cb5.js"), "./Pages/Dashboard/Partials/RightSidebar/SidebarItem.tsx": () => import("./SidebarItem-65cb1f8e.js"), "./Pages/Dashboard/Partials/RightSidebar/SidebarSection1.tsx": () => import("./SidebarSection1-4bd6eb3e.js"), "./Pages/Dashboard/Partials/RightSidebar/SidebarSection2.tsx": () => import("./SidebarSection2-dccfb3d4.js"), "./Pages/Dashboard/Partials/RightSidebar/SidebarSection3.tsx": () => import("./SidebarSection3-a2cb8a88.js"), "./Pages/Friends/Friends.tsx": () => import("./Friends-89a8070e.js"), "./Pages/Friends/NavSidebar.tsx": () => import("./NavSidebar-d4cf2187.js"), "./Pages/Friends/UserGaleryCard.tsx": () => import("./UserGaleryCard-b37daf7e.js"), "./Pages/Galery/Galery.tsx": () => import("./Galery-afef7d57.js"), "./Pages/Message/Message.tsx": () => import("./Message-001579bf.js"), "./Pages/Post/Post.tsx": () => import("./Post-e3877f7a.js"), "./Pages/Profile/Edit.tsx": () => import("./Edit-6c262a46.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./DeleteUserForm-508ea245.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./UpdatePasswordForm-12fad180.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./UpdateProfileInformationForm-58cd9f0f.js"), "./Pages/ProfileFriend/Partials/AboutFriend.tsx": () => import("./AboutFriend-1a886abc.js"), "./Pages/ProfileFriend/Partials/FileView/Carousel.tsx": () => import("./Carousel-9f3d7757.js"), "./Pages/ProfileFriend/Partials/FileView/FileView.tsx": () => import("./FileView-09a7aeeb.js"), "./Pages/ProfileFriend/Partials/FileView/FileViewContent.tsx": () => import("./FileViewContent-605a882f.js"), "./Pages/ProfileFriend/Partials/FileView/FileViewFooter.tsx": () => import("./FileViewFooter-58e55ffa.js"), "./Pages/ProfileFriend/Partials/FileView/FileViewHeader.tsx": () => import("./FileViewHeader-da0cf291.js"), "./Pages/ProfileFriend/Partials/FileView/FileViewList.tsx": () => import("./FileViewList-5320cefe.js"), "./Pages/ProfileFriend/Partials/FriendCard.tsx": () => import("./FriendCard-ab1657c4.js"), "./Pages/ProfileFriend/Partials/FriendlFile.tsx": () => import("./FriendlFile-76d7e1ac.js"), "./Pages/ProfileFriend/Partials/Friends.tsx": () => import("./Friends-07193852.js"), "./Pages/ProfileFriend/Partials/Images.tsx": () => import("./Images-d1c7ebbd.js"), "./Pages/ProfileFriend/Partials/MenegmentPost.tsx": () => import("./MenegmentPost-f3846e0a.js"), "./Pages/ProfileFriend/Partials/Music.tsx": () => import("./Music-ad5ce7b3.js"), "./Pages/ProfileFriend/Partials/Posts.tsx": () => import("./Posts-58f50fe4.js"), "./Pages/ProfileFriend/Partials/ProfileUserCard.tsx": () => import("./ProfileUserCard-c839c202.js"), "./Pages/ProfileFriend/Partials/Videos.tsx": () => import("./Videos-3b71ac9d.js"), "./Pages/ProfileFriend/ProfileFriend.tsx": () => import("./ProfileFriend-cf8b63af.js"), "./Pages/UserHome/Partials/AboutMe.tsx": () => import("./AboutMe-e70c5b38.js"), "./Pages/UserHome/Partials/FileView/Carousel.tsx": () => import("./Carousel-3472a21f.js"), "./Pages/UserHome/Partials/FileView/FileCategoryView.tsx": () => import("./FileCategoryView-b2a98b8c.js"), "./Pages/UserHome/Partials/FileView/FileView.tsx": () => import("./FileView-a83e6aa4.js"), "./Pages/UserHome/Partials/FileView/FileViewContent.tsx": () => import("./FileViewContent-3c344970.js"), "./Pages/UserHome/Partials/FileView/FileViewFooter.tsx": () => import("./FileViewFooter-2a2dbeae.js"), "./Pages/UserHome/Partials/FileView/FileViewHeader.tsx": () => import("./FileViewHeader-989eeec3.js"), "./Pages/UserHome/Partials/FileView/FileViewList.tsx": () => import("./FileViewList-59ea718b.js"), "./Pages/UserHome/Partials/Friends.tsx": () => import("./Friends-84d90e6f.js"), "./Pages/UserHome/Partials/Images.tsx": () => import("./Images-dc28d36f.js"), "./Pages/UserHome/Partials/MenegmentPost.tsx": () => import("./MenegmentPost-7738e069.js"), "./Pages/UserHome/Partials/ModalAddFile/FileModal.tsx": () => import("./FileModal-ff94e2f9.js"), "./Pages/UserHome/Partials/ModalAddFile/FileTabContent.tsx": () => import("./FileTabContent-699a8b5d.js"), "./Pages/UserHome/Partials/ModalAddFile/TextTabContent.tsx": () => import("./TextTabContent-62eea939.js"), "./Pages/UserHome/Partials/ModalViewFile/TextTabContent.tsx": () => import("./TextTabContent-a937f326.js"), "./Pages/UserHome/Partials/Music.tsx": () => import("./Music-6f38130d.js"), "./Pages/UserHome/Partials/ParentModalFile.tsx": () => import("./ParentModalFile-2273e529.js"), "./Pages/UserHome/Partials/Posts.tsx": () => import("./Posts-38373ab1.js"), "./Pages/UserHome/Partials/ProfileUserCard.tsx": () => import("./ProfileUserCard-79a0c1dc.js"), "./Pages/UserHome/Partials/Videos.tsx": () => import("./Videos-03cc7185.js"), "./Pages/UserHome/UserHome.tsx": () => import("./UserHome-0053fdf8.js"), "./Pages/Welcome.tsx": () => import("./Welcome-b6276229.js"), "./Pages/WorkShop/WorkShop.tsx": () => import("./WorkShop-e41a3bae.js") })
    );
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, { ...props }) }) }) })
    );
  },
  progress: {
    color: "#4B5563"
  }
});
export {
  setUser as s
};
