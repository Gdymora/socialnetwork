import{u as d,r as p,s as n,b as x,j as s,Y as j}from"./app-2181791e.js";import{A as h}from"./AuthenticatedLayout-f59888f7.js";import{SuggestionsList as g}from"./SuggestionsList-1470e9ff.js";import N from"./UserProfile-25c7dd64.js";import v from"./PostList-9962d608.js";import u from"./RightSidebar-9c77bfc6.js";import f from"./ParentSayPost-46569420.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./Dropdown-52bb87a6.js";import"./transition-ad5484f3.js";import"./react-toastify.esm-98ad1542.js";import"./LinkPreviewPost-234463c1.js";import"./Button-c48d99e5.js";import"./EditableText-fe40ec2f.js";import"./SelectButton-33279a7e.js";import"./useAxios-2971df0c.js";import"./FileTabContent-4a0ab4b2.js";import"./UploaderLot-cbb61778.js";import"./LinkTabContent-94711e03.js";import"./LinkPreviewModal-0c2d6540.js";import"./Post-9cc5948a.js";import"./PostContent-8c889a29.js";import"./PostFooter-8ee2eb4c.js";import"./PostHeader-3a86e98b.js";import"./ModalYesOrNot-e1d9267a.js";import"./dialog-91f2bc47.js";import"./moment-a9aaa855.js";import"./PostActions-d823508f.js";import"./CommentsList-1fd3cb74.js";import"./Comment-62f94169.js";import"./SidebarItem-15ddb758.js";import"./SidebarSection1-4a5af231.js";import"./SidebarSection3-942f02dc.js";import"./RightSidebarHeader-e903a07f.js";import"./SidebarSection2-22d12dcc.js";import"./SayPost-7984fbff.js";import"./TextInput-ff385964.js";import"./Modal-f47a1951.js";import"./JobTabContent-2868b45a.js";function ps({auth:e,posts:o,friendsAndFollowers:a,profileData:r,postMostViewed:m,randomUsersForFriendship:c}){const t=d();p.useEffect(()=>{const i=e.user;i&&t&&t(n(i))},[e,t]);const l=x(i=>i.user);return console.log("User from Redux store:",l),s.jsxs(h,{user:e.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Dashboard"}),posts:o,friendsAndFollowers:a,profileData:r,postMostViewed:m,randomUsersForFriendship:c,children:[s.jsx(j,{title:"Dashboard"}),s.jsx("main",{children:s.jsxs("div",{className:"container ar-px",children:[s.jsxs("div",{className:"gridcol",children:[s.jsxs("div",{className:"left-sidebar",children:[s.jsx("div",{className:"section_1",children:s.jsx(N,{profileData:r,friendsAndFollowers:a})}),s.jsx("div",{className:"section_2",children:s.jsx(g,{randomUsersForFriendship:c})})]}),s.jsxs("div",{className:"content",children:[s.jsx(f,{profileData:r}),s.jsx(v,{posts:o})]}),s.jsx("div",{className:"right-sidebar",children:s.jsx(u,{postMostViewed:m})})]}),s.jsx("div",{className:"container ar-px",children:s.jsx("div",{className:"gridcol",children:s.jsxs("div",{className:"fixed-bottom-right",children:[s.jsxs("div",{className:"note-count",children:[s.jsx("div",{className:"circle",children:s.jsx("img",{src:"assets/images/galery/pexels-photo-18731989.jpeg",alt:""})}),s.jsx("div",{className:"notification-badge",children:"3"})]}),s.jsxs("div",{className:"note-count",children:[s.jsx("div",{className:"circle",children:s.jsx("img",{src:"assets/images/galery/pexels-photo-8908813.jpeg",alt:""})}),s.jsx("div",{className:"notification-badge",children:"3"})]}),s.jsxs("div",{className:"note-count",children:[s.jsx("div",{className:"circle",children:s.jsx("img",{src:"assets/images/galery/pexels-photo-11960755.jpeg",alt:""})}),s.jsx("div",{className:"notification-badge",children:"3"})]})]})})})]})})]})}export{ps as default};
