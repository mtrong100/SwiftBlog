import{H as d,r as o,j as s,_ as u,d as f,R as h,b as x,I as j}from"./index-c9fa4626.js";import b from"./NotFoundPage-cebff3ca.js";import{a as y}from"./Layout-fe8c123e.js";import{H as I}from"./Heading-803c943e.js";import{B as v,a as E}from"./BlogItem-7575f00a.js";import{v as P}from"./v4-a960c1f4.js";import"./Button-7ee070cf.js";import"./index.esm-20135b09.js";import"./data-e78fadbb.js";import"./index.esm-d13e1133.js";import"./BlogMeta-3037b890.js";import"./slugify-a1a6da86.js";const V=()=>{const{slug:t}=d(),[e,m]=o.useState([]),[n,c]=o.useState(!0);return o.useEffect(()=>{async function a(){const l=u(f,"posts"),g=h(l,x("category.slug","==",t));j(g,p=>{const r=[];p.forEach(i=>{r.push({id:i.id,...i.data()}),m(r),c(!1)})})}a()},[t]),o.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]),t?s.jsx(y,{children:s.jsxs("div",{className:"page-container py-[150px]",children:[s.jsx(I,{children:`Category:  #${t}`}),s.jsxs("div",{className:"grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3",children:[n&&s.jsx(v,{Imageheight:220,blogs:6}),e.length>0&&e.map(a=>s.jsx(E,{data:a},P()))]})]})}):s.jsx(b,{})};export{V as default};