import{H as d,r as o,j as s,_ as u,d as f,R as h,b as x,I as j}from"./index-7b34d9b5.js";import b from"./NotFoundPage-717f1419.js";import{a as y}from"./Layout-75a18789.js";import{H as I}from"./Heading-477794ce.js";import{B as v,a as E}from"./BlogItem-29df9e14.js";import{v as P}from"./v4-a960c1f4.js";import"./Button-3187d7fe.js";import"./index.esm-002b4c65.js";import"./data-d1188f9a.js";import"./index.esm-6817c77a.js";import"./BlogMeta-8e19eaae.js";import"./slugify-94ae0324.js";const V=()=>{const{slug:t}=d(),[e,m]=o.useState([]),[n,c]=o.useState(!0);return o.useEffect(()=>{async function a(){const l=u(f,"posts"),g=h(l,x("category.slug","==",t));j(g,p=>{const r=[];p.forEach(i=>{r.push({id:i.id,...i.data()}),m(r),c(!1)})})}a()},[t]),o.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]),t?s.jsx(y,{children:s.jsxs("div",{className:"page-container py-[150px]",children:[s.jsx(I,{children:`Category:  #${t}`}),s.jsxs("div",{className:"grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3",children:[n&&s.jsx(v,{Imageheight:220,blogs:6}),e.length>0&&e.map(a=>s.jsx(E,{data:a},P()))]})]})}):s.jsx(b,{})};export{V as default};
