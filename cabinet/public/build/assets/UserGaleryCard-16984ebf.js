import{r as N,j as e}from"./app-e8313916.js";import{u as k}from"./useAxios-9604ea7f.js";import{u as c}from"./useExpandableContent-808315c0.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */function L({profileData:s}){var i,l;const{id:n,name:m,last_name:_,profile_image_url:o}=s,[u,d]=N.useState(!1),{sendRequest:a,data:$,loading:y,error:F}=k(""),x=()=>{a("patch",{},{url:`/friends/${n}/follow`}),d(!0)},p=()=>{a("patch",{},{url:`/friends/${n}/unfollow`}),d(!1)},t=16,r=(i=s.about_me)!=null&&i.hobbies?(l=s.about_me)==null?void 0:l.hobbies:"",{isExpanded:h,toggleExpanded:b,renderContent:g}=c(r,t),f=`${s.name} ${s.last_name}`,{isExpanded:j,toggleExpanded:C,renderContent:E}=c(f,t);return e.jsxs("div",{className:"user-galery-card",children:[e.jsxs("a",{href:route("profile-friend",{id:n}),children:[e.jsx("img",{src:o?`/user-file/${o}`:"/assets/images/noimg.png",alt:`Аватар ${m}`}),e.jsxs("div",{className:"user-card-content",children:[e.jsxs("button",{className:"link-button",children:[E(),r.length>t&&e.jsx("button",{style:{border:"1px solid #ddd"},onClick:C,children:j?" <-":"..."})]}),e.jsxs("p",{children:[g(),r.length>t&&e.jsx("button",{style:{border:"1px solid #ddd"},onClick:b,children:h?" <-":"..."})]})]})]}),e.jsx("div",{className:"user-card-footer",children:u?e.jsx("button",{className:"comment-button",onClick:p,children:"Delete"}):e.jsx("button",{className:"like-button",onClick:x,children:"Add to friends"})})]})}export{L as default};
