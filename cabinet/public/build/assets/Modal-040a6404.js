import{j as a}from"./app-3ffd3504.js";import{r as e}from"./redux-52861b2e.js";import{q as s,_ as t}from"./ui-92f4c6ee.js";function u({children:l,show:r=!1,maxWidth:o="2xl",overlayColor:m="gray",closeable:n=!0,onClose:i=()=>{}}){const x=()=>{n&&i()},c={gray:"bg-gray-500/75",black:"bg-black"}[m],d={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl"}[o];return a.jsx(s,{show:r,as:e.Fragment,leave:"duration-200",children:a.jsxs(t,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:x,children:[a.jsx(s.Child,{as:e.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx("div",{className:`absolute inset-0 ${c} dark:bg-gray-900/75`})}),a.jsx(s.Child,{as:e.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:a.jsx(t.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${d}`,children:l})})]})})}export{u as M};
