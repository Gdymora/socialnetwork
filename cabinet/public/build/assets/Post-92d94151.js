import{r as d,j as o}from"./app-e8313916.js";import p from"./PostContent-3c7fd060.js";import f from"./PostFooter-72ec0576.js";import h from"./PostHeader-1ec26e94.js";import x from"./PostActions-6ec31a2d.js";import g from"./CommentsList-c3eefec0.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./LinkPreviewPost-0d12ae6c.js";import"./Dropdown-a747ab9c.js";import"./transition-c744c454.js";import"./ModalYesOrNot-bc993130.js";import"./dialog-bcb8bba9.js";import"./moment-a9aaa855.js";import"./Comment-6347eabe.js";function T({post:t,onChangeUpdatePost:m,onChangeDeletePost:i}){var s;const[r,n]=d.useState(!1),a=()=>{n(!r)},c=e=>{m&&m(e)},l=e=>{i&&i(e)};return o.jsxs("div",{className:"post",children:[o.jsx(h,{author:t.author,id:t.id,createdAt:t.created_at,visibility:t.visibility,onChangeUpdate:c,onChangeDelete:l}),o.jsx(p,{title:t.title,media:t.media,links:t.links,content:t.content,maxLength:100}),o.jsx(x,{likes:t.likes,comments:((s=t.comments)==null?void 0:s.length)??0,share:t.share}),o.jsx(f,{onToggleComments:a}),o.jsx(g,{comments:t.comments,showComments:r})]})}export{T as default};
