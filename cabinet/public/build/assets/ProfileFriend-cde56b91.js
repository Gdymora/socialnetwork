import{r as s,j as i,Y as F}from"./app-e8313916.js";import{A as g}from"./AuthenticatedLayout-d659fea8.js";import f from"./Friends-9180d47b.js";import u from"./PostList-30f1af40.js";import N from"./FileViewList-c24cdf8c.js";import v from"./AboutFriend-4af57166.js";import w from"./FriendlFile-af1ee9c7.js";import y from"./FriendCard-67b4cb18.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./Dropdown-a747ab9c.js";import"./transition-c744c454.js";import"./react-toastify.esm-16d35fd7.js";import"./ProfileUserCard-e1484310.js";import"./Post-92d94151.js";import"./PostContent-3c7fd060.js";import"./LinkPreviewPost-0d12ae6c.js";import"./PostFooter-72ec0576.js";import"./PostHeader-1ec26e94.js";import"./ModalYesOrNot-bc993130.js";import"./dialog-bcb8bba9.js";import"./moment-a9aaa855.js";import"./PostActions-6ec31a2d.js";import"./CommentsList-c3eefec0.js";import"./Comment-6347eabe.js";import"./ParentSayPost-45a2b39c.js";import"./SayPost-298d0250.js";import"./Button-078a0dfe.js";import"./TextInput-cccf061c.js";import"./Modal-b5ce8d54.js";import"./JobTabContent-5ba2719d.js";import"./SelectButton-0b060359.js";import"./FileTabContent-2e31168d.js";import"./UploaderLot-bf6a7bfd.js";import"./LinkTabContent-4b7cc45f.js";import"./LinkPreviewModal-06dc3ea9.js";import"./EditableText-46ab8cf7.js";import"./useAxios-9604ea7f.js";import"./FileView-5dd0a35e.js";import"./FileViewHeader-21a1daed.js";import"./useExpandableContent-808315c0.js";import"./FileViewContent-1d2c4d8d.js";import"./CustomAudioPlayer-7f936f73.js";import"./FileViewFooter-bc7baf7d.js";import"./Videos-fc08d287.js";import"./Music-48999eee.js";import"./Posts-14d90ad8.js";import"./Images-c658b421.js";function yi({auth:e,posts:m,friendsAndFollowers:t,profileData:r,userFile:p}){const[P,l]=s.useState(""),[o,n]=s.useState(!1),{isFriend:a,isFollowing:d,isFollower:c}=t,x=(j,h)=>{n(j),l(h)};return i.jsxs(g,{user:e.user,header:i.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"New Page Title"}),children:[i.jsx(F,{title:"New Page"}),i.jsx("main",{children:i.jsx("div",{className:"container ar-px-profile",children:i.jsxs("div",{className:"gridcol",children:[i.jsxs("div",{className:"sidebar",children:[i.jsx(v,{profileData:r}),i.jsx(w,{profileData:r,onToggleFiles:x}),i.jsx(f,{friendsAndFollowers:t})]}),i.jsxs("div",{className:"content",children:[!o&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"post-item",children:i.jsx(y,{profileData:r,isFriendAndFollow:{isFriend:a,isFollowing:d,isFollower:c}})}),i.jsx(u,{posts:m})]}),o&&i.jsxs("div",{className:"posts",children:[i.jsx("div",{className:"post",children:i.jsx(N,{files:p})})," "]})]})]})})})]})}export{yi as default};
