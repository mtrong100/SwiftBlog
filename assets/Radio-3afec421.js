import{a as m,j as e}from"./index-5917582e.js";import{d as p}from"./yup-040dcb7d.js";import{P as r}from"./Button-5b97f855.js";const h=({checked:t,children:o,control:n,name:a,...i})=>{const{field:d}=p({control:n,name:a,defaultValue:""}),{theme:s}=m(),c=()=>{switch(s){case"primary":return"primary-gradient-bg";case"secondary":return"secondary-gradient-bg";case"third":return"third-gradient-bg";case"fourth":return"fourth-gradient-bg";default:return""}},l=(()=>{switch(s){case"primary":return"border-colorOrange";case"secondary":return"border-colorPink";case"third":return"border-colorGreen";case"fourth":return"border-colorYellow";default:return""}})(),u=c();return e.jsxs("label",{children:[e.jsx("input",{checked:t,type:"radio",className:"hidden-input",...d,...i}),e.jsxs("div",{className:"flex items-center font-medium cursor-pointer gap-x-3",children:[e.jsx("div",{className:`w-7 h-7 rounded-full border border-slate-400 flex items-center justify-center p-1  ${t?`${u}`:`${l} text-transparent`}`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"font-medium uppercase select-none dark:text-white text-text1",children:o})]})]})};h.propTypes={checked:r.bool,children:r.node,control:r.any.isRequired,name:r.string.isRequired};export{h as R};
