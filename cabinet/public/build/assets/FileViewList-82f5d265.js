var ut=Object.defineProperty;var dt=(n,e,a)=>e in n?ut(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var Q=(n,e,a)=>(dt(n,typeof e!="symbol"?e+"":e,a),a);import{j as t}from"./app-3ffd3504.js";import{r as i}from"./redux-52861b2e.js";import{S as ft}from"./SelectButton-9c925666.js";import{a as mt}from"./utils-7409c456.js";import z from"./FileCategoryView-82a44538.js";/* empty css            *//* empty css               *//* empty css                *//* empty css              *//* empty css                 *//* empty css              */import"./router-6000881a.js";import"./FileView-86334469.js";import"./FileViewHeader-d509c7ef.js";import"./Dropdown-2db83955.js";import"./ui-92f4c6ee.js";import"./ModalYesOrNot-de12e09c.js";import"./useAxios-ae1d4547.js";import"./FileViewContent-edda763f.js";import"./CustomAudioPlayer-5b5338cd.js";import"./FileViewFooter-e8d7f619.js";import"./useExpandableContent-55168e12.js";const pt="_audioPlayerHowler_1hy8c_1",_t="_title_1hy8c_19",gt="_timer_1hy8c_32",yt="_duration_1hy8c_43",xt="_controlsOuter_1hy8c_56",vt="_controlsInner_1hy8c_66",bt="_btn_1hy8c_73",wt="_playBtn_1hy8c_86",jt="_pauseBtn_1hy8c_92",kt="_prevBtn_1hy8c_98",$t="_nextBtn_1hy8c_106",Nt="_playlistBtn_1hy8c_114",St="_volumeBtn_1hy8c_122",Ct="_waveform_1hy8c_132",Bt="_barProgres_1hy8c_150",Mt="_progress_1hy8c_160",Ft="_loading_1hy8c_171",Rt="_playlist_1hy8c_114",Et="_list_1hy8c_215",It="_list_song_1hy8c_236",Tt="_list_song_playing_1hy8c_252",At="_volume_1hy8c_122",Pt="_bar_1hy8c_150",Wt="_barEmpty_1hy8c_278",Lt="_barFull_1hy8c_284",zt="_sliderBtn_1hy8c_287",Ot="_fadeout_1hy8c_301",Xt="_fadein_1hy8c_306",o={audioPlayerHowler:pt,title:_t,timer:gt,duration:yt,controlsOuter:xt,controlsInner:vt,btn:bt,playBtn:wt,pauseBtn:jt,prevBtn:kt,nextBtn:$t,playlistBtn:Nt,volumeBtn:St,waveform:Ct,barProgres:Bt,progress:Mt,loading:Ft,"sk-scaleout":"_sk-scaleout_1hy8c_1",playlist:Rt,list:Et,list_song:It,list_song_playing:Tt,volume:At,bar:Pt,barEmpty:Wt,barFull:Lt,sliderBtn:zt,fadeout:Ot,fadein:Xt};class Ht{constructor(e={}){Q(this,"_GATF_cache",{});this.phase=0,this.run=!1,console.log(e),this.ratio=e.ratio||window.devicePixelRatio||1,this.width=this.ratio*(e.width||320),this.width_2=this.width/2,this.width_4=this.width/4,this.height=this.ratio*(e.height||100),this.height_2=this.height/2,this.MAX=this.height_2-4,this.amplitude=e.amplitude||1,this.speed=e.speed||.2,this.frequency=e.frequency||6,this.color=this.hex2rgb(e.color||"#fff")||"255,255,255",this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,e.cover?this.canvas.style.width=this.canvas.style.height="100%":(this.canvas.style.width=`${this.width/this.ratio}px`,this.canvas.style.height=`${this.height/this.ratio}px`),this.container=e.container||document.body,this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),e.autostart&&this.start()}hex2rgb(e){let a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,(p,f,d,x)=>f+f+d+d+x+x);let h=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return h?`${parseInt(h[1],16)},${parseInt(h[2],16)},${parseInt(h[3],16)}`:null}_globAttFunc(e){return this._GATF_cache[e]==null&&(this._GATF_cache[e]=Math.pow(4/(4+Math.pow(e,4)),4)),this._GATF_cache[e]}_xpos(e){return this.width_2+e*this.width_4}_ypos(e,a){var h=this.MAX*this.amplitude/a;return this.height_2+this._globAttFunc(e)*h*Math.sin(this.frequency*e-this.phase)}_drawLine(e,a,h){this.ctx.moveTo(0,0),this.ctx.beginPath(),this.ctx.strokeStyle=a,this.ctx.lineWidth=h||1;for(var p=-2;(p+=.01)<=2;){var f=this._ypos(p,e);Math.abs(p)>=1.9&&(f=this.height_2),this.ctx.lineTo(this._xpos(p),f)}this.ctx.stroke()}_clear(){this.ctx.globalCompositeOperation="destination-out",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="source-over"}_draw(){if(this.run!==!1){if(this.phase=(this.phase+Math.PI*this.speed)%(2*Math.PI),this._clear(),this._drawLine(-2,`rgba(${this.color},0.1)`),this._drawLine(-6,`rgba(${this.color},0.2)`),this._drawLine(4,`rgba(${this.color},0.4)`),this._drawLine(2,`rgba(${this.color},0.6)`),this._drawLine(1,`rgba(${this.color},1)`,1.5),window.requestAnimationFrame){requestAnimationFrame(this._draw.bind(this));return}setTimeout(this._draw.bind(this),20)}}start(){this.phase=0,this.run=!0,this._draw()}stop(){this.phase=0,this.run=!1}setSpeed(e){this.speed=e}setNoise(e){this.setAmplitude(e)}setAmplitude(e){this.amplitude=Math.max(Math.min(e,1),0)}}const Vt=n=>{const e=i.useRef(null);return i.useEffect(()=>{const a=new Ht({...n,container:e.current,cover:!0,frequency:2});return a.start(),()=>{a.stop(),e.current&&e.current.firstChild&&e.current.removeChild(e.current.firstChild)}},[]),t.jsx("div",{ref:e})},qt=({playlist:n,currentIndex:e,widthCanvas:a,heightCanvas:h})=>{var K;const[p,f]=i.useState(!1),[d,x]=i.useState(e),[s,w]=i.useState(null),[B,_]=i.useState(0),[y,j]=i.useState(.3),[u,c]=i.useState(!1),[g,k]=i.useState(!1),[m,v]=i.useState({width:a,height:h}),[Z,M]=i.useState(!1),[tt,F]=i.useState(!1),[O,E]=i.useState(!1),[X,et]=i.useState(!1),$=i.useRef(null),I=i.useRef(null),N=i.useRef(null),T=i.useRef(null),R=i.useRef(null),A=i.useRef(null),P=i.useRef(null),S=i.useRef(null),W=i.useRef(null);i.useEffect(()=>{s==null||s.once("load",function(){if(s){const r=Math.round(s.duration());_(r),A.current&&(A.current.innerHTML=Y(r));const l=s==null?void 0:s.duration();console.log("Тривалість треку:",l,"секунд"),st()}})},[s]);const st=()=>{const r=s==null?void 0:s._sounds[0]._node;console.log(r)};i.useEffect(()=>{v({width:a,height:h})},[a,h]),i.useEffect(()=>{const r=new ResizeObserver(l=>{for(let b of l)v({width:b.contentRect.width,height:b.contentRect.height})});if($.current&&r.observe($.current),s&&N.current){const l=y*.9;N.current.style.left=(window.innerWidth*l+window.innerWidth*.05-25).toString()}return console.log("effectSound",s),C(),()=>{$.current&&r.unobserve($.current),H()}},[s]),i.useEffect(()=>{if(n&&n.length>0&&!s){const r=n[d];if(!r){E(!0);return}const l=new mt.Howl({src:[r.src],html5:!1,volume:y,onplay:()=>{f(!0),F(!0),M(!1),E(!1),C(),console.log("one play")},onend:()=>{F(!1),M(!0),f(!1),V()},onpause:()=>{f(!1),F(!1),M(!0),cancelAnimationFrame(W.current)},onstop:()=>{f(!1),F(!1),M(!0)},onseek:()=>{C()}});w(l),l.play(),console.log(l)}},[n,d,s,y]),i.useEffect(()=>{if(I.current&&N.current){const r=y*.9;I.current.style.width=`${r*100}%`,N.current.style.left=`${m.width*r+m.width*.05-25}px`}},[y,m]);const it=()=>{s&&s.state()==="loaded"?(s.play(),C()):E(!0)},nt=()=>s==null?void 0:s.pause(),H=()=>{s==null||s.stop(),cancelAnimationFrame(W.current)},V=()=>L(d>0?d-1:n.length-1),rt=()=>L(d<n.length-1?d+1:0),L=r=>{H(),w(null),x(r)},ot=r=>{s!=null&&s.playing()&&(s==null||s.seek((s==null?void 0:s.duration())*r))},C=()=>{if(s){const r=(s==null?void 0:s.seek())||0;P.current&&(P.current.innerHTML=Y(Math.round(r))),S.current&&(S.current.style.width=`${r/(s==null?void 0:s.duration())*100||0}%`),W.current=requestAnimationFrame(C)}},at=r=>{if(s&&S.current){const l=S.current.getBoundingClientRect().left,b=r.clientX-l;ot(b/m.width)}},q=()=>{et(r=>!r)},D=()=>{k(r=>!r)},lt=r=>{if(T.current){const l=r.layerX/parseFloat(T.current.scrollWidth.toString());j(l)}},G=r=>{if(!u)return;const l="touches"in r?r.touches[0].clientX:r.clientX;if(R.current){const b=R.current.getBoundingClientRect().left,ct=l-b,ht=Math.min(1,Math.max(0,ct/R.current.offsetWidth));j(ht),s==null||s.volume(y)}},U=()=>{c(!0)},Y=r=>{const l=Math.floor(r/60)||0,b=Math.floor(r-l*60)||0;return`${l}:${b<10?"0":""}${b}`},J=()=>c(!1);return t.jsxs("div",{ref:$,className:o.audioPlayerHowler,style:{width:m.width,height:m.height},children:[t.jsxs("div",{className:o.title,children:[t.jsx("span",{className:o.track,children:((K=n[d])==null?void 0:K.title)||""}),t.jsx("div",{ref:P,className:o.timer}),t.jsx("div",{ref:A,className:o.duration})]}),t.jsxs("div",{className:o.controlsOuter,children:[t.jsx("div",{className:`${o.btn} ${o.playlistBtn}`,onClick:q}),t.jsxs("div",{className:o.controlsInner,children:[t.jsx("div",{className:`${o.btn} ${o.prevBtn}`,onClick:rt}),t.jsx("div",{className:o.loading,style:{display:O?"block":"none"}}),!O&&(p?t.jsx("div",{className:`${o.btn} ${o.pauseBtn}`,onClick:nt}):t.jsx("div",{className:`${o.btn} ${o.playBtn}`,onClick:it})),t.jsx("div",{className:`${o.btn} ${o.nextBtn}`,onClick:V})]}),t.jsx("div",{className:`${o.btn} ${o.volumeBtn}`,onClick:D})]}),t.jsx("div",{style:{display:tt?"block":"none"},children:m.width>0&&t.jsx(Vt,{color:"white",speed:.03,amplitude:.5,width:m.width,height:m.height})}),t.jsx("div",{style:{display:X||g?"none":"block"},className:o.waveform,onClick:at}),t.jsx("div",{className:o.barProgres,style:{display:Z?"block":"none",width:`${m.width}px`}}),t.jsx("div",{ref:S,className:o.progress}),t.jsx("div",{className:o.playlist,onClick:q,style:{display:X?"block":"none"},children:t.jsx("div",{className:o.list,children:n.map((r,l)=>t.jsxs("div",{className:`${o.list_song} ${d===l?o.list_song_playing:""}`,onClick:()=>L(l),children:[l+1,". ",r.title]},l))})}),t.jsxs("div",{ref:R,className:`${g?o.fadein:o.fadeout} ${o.volume}`,style:{display:g?"block":"none"},onClick:D,onMouseUp:J,onTouchEnd:J,onMouseMove:G,onTouchMove:G,children:[t.jsx("div",{ref:I,className:`${o.barFull} ${o.bar}`}),t.jsx("div",{ref:T,className:`${o.barEmpty} ${o.bar}`,onClick:lt}),t.jsx("div",{ref:N,className:o.sliderBtn,onTouchStart:U,onMouseDown:U})]})]})},Dt=({media:n,autoPlay:e=!0,autoPlayTime:a=0,startIndex:h=0,onClose:p})=>{var u;const[f,d]=i.useState(h),x=i.useRef(null),s=i.useRef(null),w=()=>{d(c=>c>0?c-1:n.length-1)},B=()=>{},_=()=>{d(c=>c<n.length-1?c+1:0)};i.useEffect(()=>{if(e&&a>0)return x.current=setTimeout(_,a),()=>clearTimeout(x.current)},[f,e,a]),i.useEffect(()=>{d(h)},[h]);const y=c=>{switch(c.type){case"video":return t.jsx("video",{controls:!0,src:`/user-file/${c.url}`,className:"w-full h-auto"});case"music":return t.jsxs("audio",{controls:!0,className:"w-full",children:[t.jsx("source",{src:`/user-file/${c.url}`,type:"audio/mp3"}),"Your browser does not support the audio element."]});case"image":default:return t.jsx("img",{src:`/user-file/${c.url}`,alt:c.title||"media social",className:""})}},j=c=>{const[g,k]=i.useState({width:0,height:0});i.useEffect(()=>{const v=()=>{s.current&&k({width:s.current.offsetWidth,height:s.current.offsetHeight})};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const m=c.map(v=>({src:`/user-file/${v.url}`,title:v.title}));return t.jsx("div",{ref:s,className:"absolute audio_player_canvas !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none",children:t.jsx(qt,{playlist:m,currentIndex:h,widthCanvas:g.width,heightCanvas:g.height})})};return t.jsxs("div",{className:"",children:[t.jsx("button",{onClick:p,className:"fixed top-24 right-12 z-50 p-2 m-2 text-white bg-red-600 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center",children:"X"}),((u=n[f])==null?void 0:u.type)==="image"?t.jsx(t.Fragment,{children:t.jsxs("div",{className:"large-image flex justify-content-center align-items-center",children:[n.map((c,g)=>t.jsx("div",{className:`absolute !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${g===f?"opacity-100":"opacity-0"}`,style:{maxWidth:"90vh"},children:y(c)},c.id)),t.jsxs("div",{className:"absolute bottom-12 inset-x-0 mx-auto rounded-lg p-4 flex items-center justify-center",style:{maxWidth:"600px"},children:[t.jsx("button",{onClick:w,className:"z-10 p-2 text-black bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center md:absolute md:left-1",children:"<"}),t.jsx("button",{onClick:B,className:"p-2 text-black bg-white bg-opacity-75 rounded-lg flex items-center justify-center text-sm md:w-32 md:text-base",children:"Auto"}),t.jsx("button",{onClick:_,className:"z-10 p-2 text-black bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center md:absolute md:right-1",children:">"})]})]})}):t.jsx(t.Fragment,{children:t.jsx("div",{className:"large-image flex justify-content-center align-items-center",children:j(n)})})]})},Gt=Dt;function ge({files:n}){const[e,a]=i.useState([]),[h,p]=i.useState([]),[f,d]=i.useState(),[x,s]=i.useState(!1);i.useEffect(()=>{const u=[...n==null?void 0:n.public,...n==null?void 0:n.private,...n==null?void 0:n.friends];a(u)},[n]);const w=(u,c)=>{if(u){const g=e.filter(m=>m.type===u.type),k=g.findIndex(m=>m.id===u.id);d(k),p(g),s(!0)}},B=()=>{s(!1)},[_,y]=i.useState("all"),j=u=>{y(u)};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"post",children:t.jsxs("div",{className:"post-header",children:[t.jsx("div",{className:"text",children:t.jsx("p",{className:"bold",children:"File"})}),t.jsx("div",{className:"flex justify-content-right",children:t.jsx(ft,{size:"small",style:{backgroundColor:"lightblue"},options:[{label:"All",value:"all"},{label:"Image",value:"image"},{label:"Video",value:"video"},{label:"Music",value:"music"}],onChange:j})})]})}),x&&t.jsx(Gt,{media:h,startIndex:f,onClose:B}),t.jsx(z,{title:"Private",files:n.private.filter(u=>_==="all"||u.type===_),onFileClick:w}),t.jsx(z,{title:"Friends",files:n.friends.filter(u=>_==="all"||u.type===_),onFileClick:w}),t.jsx(z,{title:"Public",files:n.public.filter(u=>_==="all"||u.type===_),onFileClick:w})]})}export{ge as default};
