import{j as e,d as u}from"./app-a142f554.js";import{h as g}from"./moment-a9aaa855.js";import{D as t}from"./Dropdown-c13a3ddc.js";import{u as j}from"./useExpandableContent-33b3aeb5.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./transition-1cec1691.js";function Y({title:o,createdAt:s,visibility:a,type:l,url:d}){g(s).format("DD.MM.YYYY HH:mm:ss");const p={display:"grid",gridTemplateColumns:"8fr 1fr",margin:"10px",alignContent:"center"},n=10,i=o||"",{isExpanded:c,toggleExpanded:m,renderContent:h}=j(i,n),x=f=>{f.preventDefault(),u.patch("/user-about-me",{profile_image_url:d}).then(r=>{console.log(r.data)}).catch(r=>{console.error("Error:",r)})};return e.jsxs("div",{className:"",style:p,children:[e.jsx("span",{className:"bold",style:{fontSize:"0.7rem"},children:e.jsxs("p",{children:[h(),i.length>n&&e.jsx("button",{onClick:m,children:c?"<-":"..."})]})}),e.jsx("div",{className:"flex justify-content-right",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx("button",{className:"nav-link dropdown-toggle button-icon",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.jsx("i",{className:"bi bi-three-dots-vertical"})})}),e.jsxs(t.Content,{children:[e.jsx(t.Link,{href:route("profile.edit"),children:"Profile"})," ",a==="private"&&l==="image"&&e.jsxs(t.Link,{onClick:x,method:"post",as:"button",href:"#",children:[" ","Set as profile picture"]})]})]})})]})}export{Y as default};
