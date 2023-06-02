import{a as h,j as e,N as p,u,s as m,c as f,O as v}from"./index-5917582e.js";import{L as g,C as w,T as b}from"./Layout-b87435e5.js";import{S as l}from"./sweetalert2.all-dbd17bc1.js";import{s as j}from"./data-e0eb84be.js";import{v as c}from"./v4-a960c1f4.js";import y from"./HomePage-7af4384d.js";import{B as C}from"./Button-5b97f855.js";import{G as N}from"./index.esm-c9114a4d.js";import"./index.esm-127c725d.js";import"./Heading-d680cfe2.js";import"./BlogItem-1dbad6c5.js";import"./BlogMeta-606583af.js";import"./slugify-dbefd1a6.js";import"./NotFoundPage-a6120051.js";const O=()=>{const{theme:t}=h(),s=()=>{switch(t){case"primary":return"hover:text-colorOrange dark:hover:text-colorOrange";case"secondary":return"hover:text-colorPink dark:hover:text-colorPink";case"third":return"hover:text-colorGreen dark:hover:text-colorGreen";case"fourth":return"hover:text-colorYellow dark:hover:text-colorYellow";default:return""}},a=()=>{switch(t){case"primary":return"text-colorOrange dark:text-colorOrange";case"secondary":return"text-colorPink dark:text-colorPink";case"third":return"text-colorGreen dark:text-colorGreen";case"fourth":return"text-colorYellow dark:text-colorYellow";default:return""}},n=s(),i=a(),x=()=>{l.fire({title:"Log out of your account?",text:"You'll need to log in again to access it later",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, log out!"}).then(async r=>{r.isConfirmed&&(m(f),l.fire("Log out successfully !"))})};return e.jsxs("section",{className:"hidden lg:block z-40 w-[300px] h-fit bg-graySoft dark:bg-colorDarkRedux text-text1 dark:text-white shadow-lg rounded-lg p-5",children:[e.jsx(g,{className:"flex items-center justify-center pb-5"}),e.jsx("ul",{className:"flex flex-col gap-1 pt-2 border-t border-text3",children:j.map(r=>r.onClick?e.jsxs("li",{className:`flex gap-3 px-5 py-4 text-lg font-semibold uppercase cursor-pointer select-none ${n}`,onClick:x,children:[e.jsx("span",{children:r.icon}),e.jsx("span",{children:r.title})]},c()):e.jsxs(p,{className:({isActive:d})=>`${d?`${i}`:""} flex items-center gap-3  cursor-pointer  text-lg font-semibold uppercase select-none px-5 py-4 ${n}`,to:r.url,children:[e.jsx("span",{children:r.icon}),e.jsx("span",{children:r.title})]},c()))})]})},Y=()=>{const{open:t,setOpen:s}=u(),{theme:a}=h(),n=()=>{switch(a){case"primary":return"hover:text-colorOrange dark:hover:text-colorOrange";case"secondary":return"hover:text-colorPink dark:hover:text-colorPink";case"third":return"hover:text-colorGreen dark:hover:text-colorGreen";case"fourth":return"hover:text-colorYellow dark:hover:text-colorYellow";default:return""}},i=()=>{switch(a){case"primary":return"text-colorOrange dark:text-colorOrange";case"secondary":return"text-colorPink dark:text-colorPink";case"third":return"text-colorGreen dark:text-colorGreen";case"fourth":return"text-colorYellow dark:text-colorYellow";default:return""}},x=n(),r=i(),d=()=>{l.fire({title:"Log out of your account?",text:"You'll need to log in again to access it later",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, log out!"}).then(async o=>{o.isConfirmed&&(m(f),l.fire("Log out successfully !"))})};return e.jsxs("section",{className:`${t?"translate-x-0":"-translate-x-full"}  w-[300px] fixed shadow-xl z-[99] transition-all duration-300 top-0 h-full left-0 bg-graySoft dark:bg-colorDarkRedux text-text1 dark:text-white pt-5
       p-5 `,children:[e.jsxs("div",{className:"flex items-center justify-between pb-5",children:[e.jsx(g,{className:"flex items-center justify-center"}),e.jsx("span",{onClick:()=>s(!1),className:"text-xl w-[40px] h-[40px] rounded-full bg-colorDarkSaga flex items-center justify-center text-white",children:e.jsx(w,{})})]}),e.jsx("ul",{className:"flex flex-col gap-2 pt-3 border-t border-text3",children:j.map(o=>o.onClick?e.jsxs("li",{className:`${x} flex items-center gap-3 px-5 py-4 text-lg font-semibold uppercase cursor-pointer select-none sidebar-item`,onClick:d,children:[e.jsx("span",{children:o.icon}),e.jsx("span",{children:o.title})]},c()):e.jsxs(p,{onClick:()=>s(!1),className:({isActive:k})=>`${k?`${r}`:""} flex items-center gap-3 cursor-pointer sidebar-item text-lg font-semibold uppercase select-none px-5 py-4`,to:o.url,children:[e.jsx("span",{children:o.icon}),e.jsx("span",{children:o.title})]},c()))})]})};function B(t){return N({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(t)}const S=()=>{const{userInfo:t,setOpen:s,open:a}=u();return e.jsx("header",{className:"w-full py-2 shadow-md md:py-5 bg-whiteSoft text-text1 dark:text-white dark:bg-colorDarkRedux",children:e.jsxs("div",{className:"flex items-center justify-between page-container",children:[e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("span",{onClick:()=>s(!a),className:"text-4xl lg:hidden",children:e.jsx(B,{})}),e.jsx(C,{className:"hidden py-3 md:flex",type:"button",path:"/",children:"return home"})]}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("span",{className:"text-sm font-semibold capitalize md:text-lg",children:t==null?void 0:t.username}),e.jsx("div",{className:"w-[50px] h-[50px] rounded-full",children:e.jsx("img",{className:"rounded-full imgCover",src:t==null?void 0:t.avatar,alt:"user-img"})})]})]})})},J=()=>{const{userInfo:t}=u();return t?e.jsxs(e.Fragment,{children:[e.jsx(S,{}),e.jsxs("div",{className:"dashboard-layout py-[50px] px-5 lg:px-10 ",children:[e.jsx(O,{}),e.jsx(Y,{}),e.jsx("div",{className:"dashboard-content",children:e.jsx(v,{})}),e.jsx(b,{})]})]}):e.jsx(y,{})};export{J as default};
