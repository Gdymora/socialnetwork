import{j as e}from"./app-3ffd3504.js";import{r as f}from"./redux-52861b2e.js";import{u as h}from"./useAxios-ae1d4547.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./router-6000881a.js";import"./utils-7409c456.js";function E({profileData:r,isFriendAndFollow:d}){var a;const{id:s,name:t,last_name:l,profile_image_url:i}=r,{isFriend:c}=d,[m,o]=f.useState(c),{sendRequest:n,data:x,loading:j,error:F}=h(""),u=()=>{n("patch",{},{url:`/friends/${s}/follow`}),o(!0)},p=()=>{n("patch",{},{url:`/friends/${s}/unfollow`}),o(!1)};return e.jsxs("div",{className:"user-galery-card",children:[e.jsxs("a",{href:route("profile-friend",{id:s}),children:[e.jsx("img",{src:i?`/user-file/${i}`:"/assets/images/noimg.png",alt:`Аватар ${t}`}),e.jsxs("div",{className:"user-card-content",children:[e.jsxs("a",{href:"",children:[t," ",l]}),e.jsx("p",{children:(a=r.about_me)==null?void 0:a.hobbies})]})]}),e.jsx("div",{className:"user-card-footer",children:m?e.jsx("button",{className:"comment-button",onClick:p,children:"Delete"}):e.jsx("button",{className:"like-button",onClick:u,children:"Add to friends"})})]})}export{E as default};
