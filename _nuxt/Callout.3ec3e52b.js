import p from"./ContentSlot.1d2babee.js";import{a as m,r as l,o as d,i as f,k as a,m as o,j as c,u as r,ae as v,af as h,L as y,x as g}from"./entry.920f2961.js";const C={class:"summary"},V={class:"content"},k=m({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),i=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,x)=>{const n=p,_=y;return d(),f("div",{class:c(["callout",[s.type]])},[a("span",{class:"preview",onClick:i},[a("span",C,[o(n,{use:t.$slots.summary},null,8,["use"])]),o(_,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(a("div",V,[o(n,{use:t.$slots.content},null,8,["use"])],512),[[h,r(e)]])],2)}}});const $=g(k,[["__scopeId","data-v-961b73c7"]]);export{$ as default};
