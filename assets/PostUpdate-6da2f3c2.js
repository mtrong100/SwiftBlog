import{u as W,e as X,m as Z,r as o,Q as E,j as e,g as v,d as g,h as O,_ as ee,R as te,b as se,f as ae,n as oe}from"./index-5917582e.js";import{u as re,I as le}from"./ImageUpload-fa0e29d6.js";import{s as ne}from"./slugify-dbefd1a6.js";import{l as ie,I as ce,a as de,D as me,S as ue,L as he,O as pe,R as xe}from"./quill.snow-2aa63b52.js";import{R as i}from"./Radio-3afec421.js";import{c as ge,a as fe,u as je,F as c,L as d,I as be,b as Ee,o as ve}from"./yup-040dcb7d.js";import{H as Se}from"./Heading-d680cfe2.js";import{B as we}from"./Button-5b97f855.js";import{u as T,a as m,p as u}from"./constants-c6ed1daf.js";import{B as ye,a as Ne}from"./index.esm-127c725d.js";import"./index.esm-c9114a4d.js";ie.Quill.register("modules/imageUploader",ce);const ke=ge({title:fe().required("Please enter your title !")}),B="fixed shadow-2xl w-[50px] h-[50px] rounded-full flex items-center justify-center dark:bg-whiteSoft  bg-colorDarkRedux text-white z-40 cursor-pointer dark:text-black font-bold text-2xl",He=()=>{const{userInfo:l}=W(),H=X(),[$]=Z(),h=$.get("id"),{control:r,handleSubmit:L,watch:S,setValue:w,getValues:f,reset:y,formState:{isValid:V,isSubmitting:N,errors:k}}=je({mode:"onchange",resolver:ve(ke)}),R=f("image"),q=f("image_name"),j=S("status"),b=S("promote"),{image:D,setImage:P,progress:_,handleSelectImage:M,handleDeleteImage:Q}=re(w,f,q),[C,G]=o.useState([]),[n,I]=o.useState(""),[A,U]=o.useState("");o.useEffect(()=>{async function t(){var x,p;if(!h)return;const s=v(g,"posts",h),a=await O(s);a.data()&&(y(a.data()),I(((x=a.data())==null?void 0:x.category)||""),U(((p=a.data())==null?void 0:p.content)||""))}t()},[h,y]),o.useEffect(()=>{async function t(){const s=ee(g,"categories"),a=te(s,se("status","==","approved")),x=await ae(a);let p=[];x.forEach(F=>{p.push({id:F.id,...F.data()})}),G(p)}t()},[]),o.useEffect(()=>{P(R)},[R,P]);const J=async t=>{const s=v(g,"categories",t.id),a=await O(s);w("category",{id:a.id,...a.data()}),I(t)},z=async t=>{if(V)try{const s=v(g,"posts",h);t.slug=ne(t.title,{lower:!0}),await oe(s,{...t,content:A,image:D}),E.success("Update post successfully !",{theme:"colored",autoClose:2e3,pauseOnHover:!1}),H("/manage/post")}catch{E.error("Failed to update post !",{theme:"colored",autoClose:2e3,pauseOnHover:!1})}},K="95913b3beeb193701b10ab1aa5b6bfbf",Y=o.useMemo(()=>({toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,4,5,6,!1]}],["link","image"],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],imageUploader:{upload:async t=>{const s=new FormData;return s.append("image",t),(await de({method:"post",url:`https://api.imgbb.com/1/upload?key=${K}`,data:s,headers:{"Content-Type":"multipath/form-data"}})).data.data.url}}}),[]);return o.useEffect(()=>{var s;const t=Object.values(k);t.length>0&&E.error((s=t[0])==null?void 0:s.message,{theme:"colored",autoClose:2e3,pauseOnHover:!1})},[k]),h?e.jsxs("div",{children:[e.jsx(Se,{children:"Update post"}),e.jsxs("form",{className:"pt-14",onSubmit:L(z),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-10 mb-10",children:[e.jsxs(c,{children:[e.jsx(d,{children:"Title ✒️"}),e.jsx(be,{control:r,placeholder:"Enter your title",name:"title"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Category 📦"}),e.jsxs(me,{children:[e.jsx(ue,{placeholder:"Select Category"}),e.jsx(he,{children:C.length>0&&C.map(t=>e.jsx(pe,{onClick:()=>J(t),children:t.title},t.id))})]}),(n==null?void 0:n.title)&&e.jsx("span",{className:"inline-block p-3 text-sm font-medium text-blue-500 bg-blue-500 rounded-lg bg-opacity-20",children:`#${n==null?void 0:n.title}`})]})]}),e.jsxs("div",{className:"grid items-center grid-cols-2 mb-10 gap-x-10",children:[e.jsxs(c,{children:[e.jsx(d,{children:"Image"}),e.jsx(le,{onChange:M,handleDeleteImage:Q,progress:_,image:D}),e.jsx("input",{type:"file",name:"image",className:"hidden-input"})]}),e.jsx("div",{className:"flex flex-col gap-20",children:((l==null?void 0:l.role)===T.ADMIN||(l==null?void 0:l.role)===T.MOD)&&e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Promote Post"}),e.jsxs("div",{className:"flex items-center gap-x-5",children:[e.jsx(i,{name:"promote",control:r,checked:b===m.FEATURE,value:m.FEATURE,children:"Feature"}),e.jsx(i,{name:"promote",control:r,checked:b===m.BEST,value:m.BEST,children:"Best"}),e.jsx(i,{name:"promote",control:r,checked:b===m.HOT,value:m.HOT,children:"Hot"})]})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Status "}),e.jsxs("div",{className:"flex items-center gap-x-5",children:[e.jsx(i,{name:"status",control:r,checked:j===u.APPROVED,value:u.APPROVED,children:"Approved"}),e.jsx(i,{name:"status",control:r,checked:j===u.PENDING,value:u.PENDING,children:"Pending"}),e.jsx(i,{name:"status",control:r,checked:j===u.REJECTED,value:u.REJECTED,children:"Reject"})]})]})]})})]}),e.jsx("div",{className:"mb-10",children:e.jsxs(c,{children:[e.jsx(d,{children:"Content ✍️"}),e.jsx("div",{className:"w-full entry-content",children:e.jsx(xe,{className:"text-text1 dark:text-white",modules:Y,theme:"snow",value:A,onChange:U})})]})}),e.jsx(we,{id:"update-post",type:"submit",kind:"secondary",className:`w-[200px] mx-auto h-[65px]  ${N?"opacity-50 pointer-events-none":""}`,children:N?e.jsx(Ee,{}):"update post"})]}),e.jsx("a",{href:"#",children:e.jsx("div",{className:`${B} bottom-20 right-5`,children:e.jsx(ye,{})})}),e.jsx("a",{href:"#update-post",children:e.jsx("div",{className:`${B} bottom-5 right-5`,children:e.jsx(Ne,{})})})]}):null};export{He as default};
