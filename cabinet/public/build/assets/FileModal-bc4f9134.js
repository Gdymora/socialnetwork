import{j as i}from"./app-e8313916.js";import{M as t}from"./Modal-b5ce8d54.js";import m from"./FileView-175544a4.js";import{s as o}from"./Modal.module-bd5ebb47.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./transition-c744c454.js";import"./dialog-bcb8bba9.js";import"./FileViewHeader-33068f58.js";import"./moment-a9aaa855.js";import"./Dropdown-a747ab9c.js";import"./ModalYesOrNot-bc993130.js";import"./useAxios-9604ea7f.js";import"./react-toastify.esm-16d35fd7.js";import"./FileViewContent-70c1736d.js";import"./CustomAudioPlayer-7f936f73.js";import"./FileViewFooter-fe586dcd.js";import"./useExpandableContent-808315c0.js";function E({isModalOpen:e,modalContent:s,onClose:r,onNextClick:l,onPrevClick:a}){return i.jsx(t,{show:e,overlayColor:"black",maxWidth:"4xl",onClose:r,children:i.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl",children:[i.jsxs("div",{className:o.modalHeader,children:[i.jsx("span",{children:"Modal Header"}),i.jsx("div",{className:o.modalCloseButton,onClick:()=>r(!1),children:i.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[i.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),i.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})]})})]}),i.jsx("div",{className:"overflow-y-auto max-h-[90vh]",children:i.jsx("div",{className:o.modalContent,children:s&&i.jsx("div",{className:"flex",children:i.jsx(m,{file:s,contentModal:e,onNextClick:()=>l(),onPrevClick:()=>a()},s.id)})})}),i.jsx("div",{className:o.modalFooter,children:i.jsx("div",{className:"flex align-items-center post_message"})}),i.jsx("div",{className:o.modalFooter})]})})}export{E as default};
