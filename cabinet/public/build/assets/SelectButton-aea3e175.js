import{r,j as s}from"./app-a142f554.js";const p=l=>({height:"36px",padding:"5px 26px",border:"1px solid #ccc",borderRadius:"5px",backgroundColor:"#f8f8f8",cursor:"pointer",fontSize:l==="small"?"12px":l==="large"?"20px":"16px"}),g=({size:l="medium",style:n,options:e,onChange:a,selectedSet:u})=>{const d={...p(l),...n},[o,x]=r.useState(u||(e.length>0?e[0].value:""));r.useEffect(()=>{e.length>0&&a(e[0].value)},[]);const S=t=>{const c=t.target.value;x(c),a(c)};return s.jsx("select",{style:d,value:o,onChange:S,children:e.map(t=>s.jsx("option",{value:t.value,children:t.label},t.value))})},m=g;export{m as S};
