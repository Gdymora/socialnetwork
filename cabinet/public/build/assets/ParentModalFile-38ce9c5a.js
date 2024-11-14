import{W as y,r as a,j as e}from"./app-2181791e.js";import{M as F}from"./Modal-f47a1951.js";import{B}from"./Button-c48d99e5.js";import{s as t}from"./Modal.module-bd5ebb47.js";import{S as k}from"./SelectButton-33279a7e.js";import E from"./Videos-7e92caa6.js";import{T as j}from"./TextInput-ff385964.js";import O from"./Music-42a744ef.js";import A from"./Posts-88910c25.js";import z from"./Images-c09a1536.js";import{B as v}from"./react-toastify.esm-98ad1542.js";import{U as I}from"./UploaderLot-cbb61778.js";import{u as P}from"./useAxios-2971df0c.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./transition-ad5484f3.js";import"./dialog-91f2bc47.js";function ne({profileData:l,onToggleFiles:i}){const{data:r,setData:n,post:_,processing:$,errors:H,reset:R}=y({title:"",descriptionData:"",selectedOption:"",fileData:null}),{data:d,error:u,sendRequest:g}=P(),[x,c]=a.useState(!1),[C,N]=a.useState(""),[o,b]=a.useState(null),[w,f]=a.useState(!0);a.useEffect(()=>{d&&(v.success(d.message),f(!0))},[d]),a.useEffect(()=>{const s=u;s&&v.error("Error:",s.message)},[u]);const m=s=>{c(!0)},S=s=>{N(s)},M=s=>{b(s),(s==null?void 0:s.length)==1&&s[0].name&&n("title",s[0].name),f(!1)},D=()=>{const s=new FormData;s.append("selectedOption",C),s.append("titleData",r.title),s.append("descriptionData",r.descriptionData),o&&Array.from(o).forEach((p,h)=>{s.append(`fileData${h}`,p)}),o&&Array.from(o).forEach((p,h)=>{s.append(`fileData${h}`,p)}),g("post",s,{url:"/user-file",headers:{"Content-Type":"multipart/form-data"}})};return e.jsxs(e.Fragment,{children:[e.jsx(z,{onAddImages:()=>m(),handleShowImages:()=>i(!0,"image")}),e.jsx(O,{onAddMusics:()=>m(),handleShowMusics:()=>i(!0,"music")}),e.jsx(E,{onAddVideos:()=>m(),handleShowVideos:()=>i(!0,"video")}),e.jsx(A,{handleShowPosts:()=>i(!1,"post")}),x&&e.jsx(F,{show:x,onClose:()=>c(!1),children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl",children:[e.jsxs("div",{className:t.modalHeader,children:[e.jsx("span",{children:"Modal Header"}),e.jsx("div",{className:t.modalCloseButton,onClick:()=>c(!1),children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[e.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})]})})]}),e.jsx("div",{className:"overflow-y-auto max-h-[80vh]",children:e.jsxs("div",{className:t.modalContent,children:[e.jsxs("div",{className:t.gridBlock,children:[e.jsx("div",{className:`circle ${t.sizeCircle}`,children:e.jsx("img",{src:l.profile_image_url?`/user-file/${l.profile_image_url}`:"/assets/images/noimg.png",alt:l.name||"noimage"})}),e.jsx("div",{className:t.textFlexCenter,children:e.jsxs("p",{className:"bold",children:[l.name," ",l.last_name]})}),e.jsx("div",{className:t.textFlexCenter,children:e.jsx(k,{size:"small",style:{backgroundColor:"lightblue"},options:[{label:"Public",value:"1"},{label:"Private",value:"2"}],onChange:S})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",children:"Title:"}),e.jsx(j,{id:"title",type:"text",name:"title",value:r.title,className:"mt-1 block w-full",isFocused:!0,onChange:s=>n("title",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Description:"}),e.jsx(j,{id:"description",type:"description",name:"description",value:r.descriptionData,className:"mt-1 block w-full",isFocused:!0,onChange:s=>n("descriptionData",s.target.value)})]}),e.jsx("div",{className:"overflow-y-auto max-h-[80vh]",children:e.jsxs("div",{className:t.modalContent,children:[e.jsxs("div",{className:t.gridBlock,children:[e.jsx("div",{children:" "}),e.jsx("div",{className:t.textFlexCenter,children:e.jsx("p",{className:"bold"})})]}),e.jsx(I,{onChange:M,style:{},className:"custom-uploader-class"})]})})]})}),e.jsxs("div",{className:t.modalFooter,children:[e.jsx(B,{className:"btn btn-primary-send",onClick:D,disabled:w,children:"Send"})," "]})]})})]})}export{ne as default};