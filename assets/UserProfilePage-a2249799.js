import{j as s,E as k,r as o,_ as d,d as u,R as h,b as j,I as b}from"./index-73878708.js";import I from"./NotFoundPage-bd05c3e7.js";import{a as R}from"./Layout-76a6f230.js";import{H as v}from"./Heading-178aac5a.js";import{B as S,a as L}from"./BlogItem-1827caeb.js";import{P as p}from"./Button-e76cae7b.js";import{L as U}from"./LabelRole-3d400287.js";import{v as B}from"./v4-a960c1f4.js";import"./index.esm-5b8dc22c.js";import"./data-e666bb0d.js";import"./index.esm-92eb5b9a.js";import"./BlogMeta-79ada34d.js";import"./slugify-5a8ede35.js";const y=({data:e,slug:l,formatDate:n})=>s.jsxs("div",{className:"flex items-center gap-5",children:[s.jsx("img",{className:`w-[130px] 
         flex-shrink-0 h-[130px] md:w-[250px] object-cover md:h-[250px] rounded border-2 border-gradient`,src:e==null?void 0:e.avatar,alt:"data-avatar"}),s.jsxs("div",{className:"flex flex-col flex-1 gap-4",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(v,{children:e==null?void 0:e.username}),s.jsx(U,{type:e==null?void 0:e.role,children:e==null?void 0:e.role})]}),s.jsx("span",{className:"hover:opacity-90 italic select-none inline-block px-[15px] text-center rounded-lg font-semibold bg-blue-500 w-fit bg-opacity-10 dark:bg-colorDarkSaga text-blue-500 text-sm py-[10px]",children:e==null?void 0:e.email}),s.jsx("div",{className:"flex items-center gap-5",children:s.jsx("span",{className:"text-sm font-medium select-none md:text-base text-text3 dark:text-white hover:opacity-90",children:`Date: ${n}`})})]})]});y.propTypes={data:p.object,slug:p.string,formatDate:p.string};const M=()=>{var x,f;const{slug:e}=k(),[l,n]=o.useState([]),[t,D]=o.useState({}),[N,w]=o.useState(!0);o.useEffect(()=>{async function r(){const a=d(u,"posts"),i=h(a,j("user.slug","==",e));b(i,m=>{const c=[];m.forEach(g=>{c.push({id:g.id,...g.data()}),n(c),w(!1)})})}r()},[e]),o.useEffect(()=>{async function r(){const a=d(u,"users"),i=h(a,j("slug","==",e));b(i,m=>{m.forEach(c=>{c.data()&&D(c.data())})})}r()},[e]),o.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]);const E=(x=t==null?void 0:t.createdAt)!=null&&x.seconds?new Date(((f=t==null?void 0:t.createdAt)==null?void 0:f.seconds)*1e3):new Date,P=new Date(E).toLocaleDateString("vi-VI");return e?s.jsx(R,{children:s.jsxs("div",{className:"page-container py-[150px]",children:[s.jsx(y,{data:t,slug:e,formatDate:P}),s.jsxs("div",{className:"mt-20",children:[s.jsx(v,{children:"blogs post"}),s.jsxs("div",{className:"grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3",children:[N&&s.jsx(S,{Imageheight:200,blogs:3}),l.length>0&&l.map(r=>s.jsx(L,{data:r},B()))]})]})]})}):s.jsx(I,{})};export{M as default};