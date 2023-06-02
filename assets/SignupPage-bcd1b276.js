import{e as w,a as j,r as b,Q as c,j as e,L as y,l as P,c as a,K as A,M as E,G as S,g as D,d as G}from"./index-5917582e.js";import{s as H}from"./slugify-dbefd1a6.js";import{c as N,a as o,u as U,F as t,L as n,I as d,b as B,o as M}from"./yup-040dcb7d.js";import{A as v,I as C}from"./AuthPage-9768300e.js";import{B as F}from"./Button-5b97f855.js";import{u as L}from"./constants-c6ed1daf.js";import"./index.esm-c9114a4d.js";const q=N({username:o().max(20,"Username cannot exceed 20 characters!").required("Please enter your username!"),email:o().lowercase().email("Please enter valid email!").required("Please enter your email!"),password:o().min(8,"Your password is too short!").required("Please enter your password!")}),W=()=>{const u=w(),{control:r,handleSubmit:h,formState:{isValid:p,isSubmitting:i,errors:l}}=U({mode:"onchange",resolver:M(q)}),f=async s=>{p&&(await P(a,s.email,s.password),await A(a.currentUser,{displayName:s.username,photoURL:"https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"}),await E(D(G,"users",a.currentUser.uid),{username:s.username,email:s.email,password:s.password,role:L.USER,slug:H(s.username,{lower:!0}),avatar:"https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",createdAt:S()}),c.success("Create user successfully!",{theme:"colored",autoClose:2e3,pauseOnHover:!1}),u("/"))},{theme:x}=j(),g=(()=>{switch(x){case"primary":return"border-colorOrange";case"secondary":return"border-colorPink";case"third":return"border-colorGreen";case"fourth":return"border-colorYellow";default:return""}})();return b.useEffect(()=>{var m;const s=Object.values(l);s.length>0&&c.error((m=s[0])==null?void 0:m.message,{theme:"colored",autoClose:2e3,pauseOnHover:!1})},[l]),e.jsx("section",{className:"flex items-center justify-center h-screen signupBG",children:e.jsx("div",{className:"page-container",children:e.jsx("form",{onSubmit:h(f),className:`w-full ${g} border-2 max-w-[600px] p-10 shadow-lg glass-design rounded-lg mx-auto`,children:e.jsxs(v,{children:[e.jsxs(t,{children:[e.jsx(n,{htmlFor:"username",children:"Username"}),e.jsx(d,{name:"username",placeholder:"Enter your username...",control:r})]}),e.jsxs(t,{children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(d,{name:"email",placeholder:"Enter your email...",control:r})]}),e.jsxs(t,{children:[e.jsx(n,{htmlFor:"password",children:"Password"}),e.jsx(C,{control:r}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold normal-case select-none",children:[e.jsx("p",{children:"Already have an account?"}),e.jsx(y,{to:"/sign-in",className:"cursor-pointer text-colorPink",children:"SignIn"})]})]}),e.jsx(F,{type:"submit",kind:"secondary",className:`w-full h-[53px] md:h-[60px] font-semibold md:text-xl ${i?"opacity-50 pointer-events-none":""}`,children:i?e.jsx(B,{}):"Sign up"})]})})})})};export{W as default};
