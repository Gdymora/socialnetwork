import{s as d,j as s,Y as p}from"./app-3ffd3504.js";import{A as n}from"./AuthenticatedLayout-8762a6bf.js";import{u as x,r as j,i as h}from"./redux-52861b2e.js";import{SuggestionsList as g}from"./SuggestionsList-0bcd45bb.js";import f from"./UserProfile-d24f3f2e.js";import N from"./PostList-2448aaad.js";import v from"./RightSidebar-913aef37.js";import u from"./ParentSayPost-0b5d977f.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./router-6000881a.js";import"./utils-7409c456.js";import"./Dropdown-2db83955.js";import"./ui-92f4c6ee.js";import"./Post-8c6ecd30.js";import"./PostContent-ee396dd1.js";import"./LinkPreviewPost-006ebc2d.js";import"./PostFooter-bbb78cb2.js";import"./PostHeader-109fdfe9.js";import"./ModalYesOrNot-de12e09c.js";import"./PostActions-8cc2d8f7.js";import"./CommentsList-24047efd.js";import"./Comment-af81ed95.js";import"./useAxios-ae1d4547.js";import"./SidebarItem-1dec5f7a.js";import"./SidebarSection1-6ccf0edc.js";import"./SidebarSection3-2b546e8b.js";import"./RightSidebarHeader-bb1766ce.js";import"./SidebarSection2-850642bf.js";import"./SayPost-3ff4d9e9.js";import"./Button-42b20b5a.js";import"./TextInput-866c0206.js";import"./Modal-040a6404.js";import"./JobTabContent-d5a8869e.js";import"./SelectButton-9c925666.js";import"./FileTabContent-511b6f30.js";import"./UploaderLot-b2596a22.js";import"./LinkTabContent-db4154a4.js";import"./LinkPreviewModal-43e2b212.js";import"./EditableText-34553ca5.js";function ps({auth:r,posts:o,friendsAndFollowers:a,profileData:t,postMostViewed:m,randomUsersForFriendship:c}){const e=x();j.useEffect(()=>{const i=r.user;i&&e&&e(d(i))},[r,e]);const l=h(i=>i.user);return console.log("User from Redux store:",l),s.jsxs(n,{user:r.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Dashboard"}),children:[s.jsx(p,{title:"Dashboard"}),s.jsx("main",{children:s.jsxs("div",{className:"container ar-px",children:[s.jsxs("div",{className:"gridcol",children:[s.jsxs("div",{className:"left-sidebar",children:[s.jsx("div",{className:"section_1",children:s.jsx(f,{profileData:t,friendsAndFollowers:a})}),s.jsx("div",{className:"section_2",children:s.jsx(g,{randomUsersForFriendship:c})})]}),s.jsxs("div",{className:"content",children:[s.jsx(u,{profileData:t}),s.jsx(N,{posts:o})]}),s.jsx("div",{className:"right-sidebar",children:s.jsx(v,{postMostViewed:m})})]}),s.jsx("div",{className:"container ar-px",children:s.jsx("div",{className:"gridcol",children:s.jsxs("div",{className:"fixed-bottom-right",children:[s.jsxs("div",{className:"note-count",children:[s.jsx("div",{className:"circle",children:s.jsx("img",{src:"assets/images/galery/pexels-photo-18731989.jpeg",alt:""})}),s.jsx("div",{className:"notification-badge",children:"3"})]}),s.jsxs("div",{className:"note-count",children:[s.jsx("div",{className:"circle",children:s.jsx("img",{src:"assets/images/galery/pexels-photo-8908813.jpeg",alt:""})}),s.jsx("div",{className:"notification-badge",children:"3"})]}),s.jsxs("div",{className:"note-count",children:[s.jsx("div",{className:"circle",children:s.jsx("img",{src:"assets/images/galery/pexels-photo-11960755.jpeg",alt:""})}),s.jsx("div",{className:"notification-badge",children:"3"})]})]})})})]})})]})}export{ps as default};
