import{j as r}from"./app-e8313916.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */function c({user:s}){const{id:o,name:e,last_name:t,profile_image_url:i}=s;return r.jsxs("div",{className:"profile-user-card",children:[r.jsx("img",{src:i?`/user-file/${i}`:"/assets/images/noimg.png",alt:`Аватар ${e}`}),r.jsxs("a",{href:route("profile-friend",{id:o}),children:[" ",r.jsxs("p",{children:[e," ",t]})," "]})]})}export{c as default};