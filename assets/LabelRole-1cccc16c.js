import{j as t}from"./index-c9fa4626.js";import{P as o}from"./Button-7ee070cf.js";const s=({children:r,type:a=""})=>{let e="";switch(a){case"admin":e="bg-colorOrange bg-opacity-20 text-colorOrange dark:bg-colorDarkSaga shadow-sm";break;case"mod":e="bg-colorPurple bg-opacity-20 text-colorPurple dark:bg-colorDarkSaga shadow-sm";break;case"user":e="bg-colorBlue bg-opacity-20 text-colorBlue dark:bg-colorDarkSaga shadow-sm";break}return t.jsx("span",{className:`${e} capitalize hover:opacity-90 select-none inline-block px-[15px] w-[100px] text-center rounded-lg font-semibold text-sm py-[10px]`,children:r})};s.propTypes={children:o.node,type:o.string,typeStyles:o.string};export{s as L};