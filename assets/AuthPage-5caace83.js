import{r as n,j as e,a as o,L as i}from"./index-73878708.js";import{j as l,k as c}from"./index.esm-5b8dc22c.js";import{P as x}from"./Button-e76cae7b.js";import{I as d}from"./yup-cab4d3ba.js";const p=({control:t})=>{const[s,r]=n.useState(!1);return t?e.jsx(e.Fragment,{children:e.jsx(d,{type:s?"text":"password",name:"password",placeholder:"Enter your password...",control:t,children:s?e.jsx("span",{className:"text-2xl",onClick:()=>r(!1),children:e.jsx(c,{})}):e.jsx("span",{className:"text-2xl",onClick:()=>r(!0),children:e.jsx(l,{})})})}):null};p.propTypes={control:x.any.isRequired};const f=({children:t})=>{const{theme:s}=o(),a=(()=>{switch(s){case"primary":return"primary-gradient-text";case"secondary":return"secondary-gradient-text";case"third":return"third-gradient-text";case"fourth":return"fourth-gradient-text";default:return""}})();return e.jsxs(e.Fragment,{children:[e.jsx(i,{className:`flex ${a} items-center justify-center pb-5 text-4xl font-bold text-center capitalize md:text-5xl `,to:"/",children:"SwiftBlog"}),t]})};export{f as A,p as I};