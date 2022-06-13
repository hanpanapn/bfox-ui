import{r as w,a as _,o as c,c as l,b as i,F as x,d as k,e as N,f as $,w as E,g as S,t as h,h as B,i as A,j as f,k as v,u as D,E as V,p as L,l as P,P as I,m as O,v as F,n as R,q}from"./vendor.e95b3bbf.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};H();var M=[{compName:"Button",compZhName:"\u6309\u94AE",compDesc:"\u8FD9\u662F\u4E00\u4E2A\u6309\u94AE",compClassName:"button"},{compName:"Clipboard",compZhName:"\u590D\u5236\u7EC4\u4EF6",compDesc:"\u590D\u5236\u6587\u5B57",compClassName:"clipboard"}];const j={class:"bfox-kit-doc"},T={name:"App",setup(t){const o=w({links:M.map(s=>({path:`/components/${s.compName}`,name:s.compZhName}))});return(s,n)=>{const e=_("router-link"),r=_("router-view");return c(),l("div",j,[i("aside",null,[(c(!0),l(x,null,k(o.links,(a,u)=>(c(),$(e,{key:u,to:a.path},{default:E(()=>[S(h(a.name),1)]),_:2},1032,["to"]))),128))]),i("main",null,[N(r)])])}}},z="modulepreload",y={},Z="./",g=function(o,s){return!s||s.length===0?o():Promise.all(s.map(n=>{if(n=`${Z}${n}`,n in y)return;y[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":z,e||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),e)return new Promise((u,b)=>{a.addEventListener("load",u),a.addEventListener("error",b)})})).then(()=>o())},W=[{title:"\u6309\u94AE",name:"Button",path:"/components/Button",component:()=>g(()=>import("./README.96683a7d.js"),["assets/README.96683a7d.js","assets/vendor.e95b3bbf.js"])},{title:"\u590D\u5236\u7EC4\u4EF6",name:"Clipboard",path:"/components/Clipboard",component:()=>g(()=>import("./README.44a3fcfb.js"),["assets/README.44a3fcfb.js","assets/vendor.e95b3bbf.js"])}],K={history:B(),routes:W,scrollBehavior(t,o){if(t.path!==o.path)return{top:0}}},G=A(K);var d=(t,o)=>{const s=t.__vccOpts||t;for(const[n,e]of o)s[n]=e;return s};const J=f({name:"index",emits:["click"],setup(t){return(o,s)=>(c(),l("button",{class:"bfox-button",onClick:s[0]||(s[0]=n=>o.$emit("click",n))},[v(o.$slots,"default",{},void 0,!0)]))}});var Q=d(J,[["__scopeId","data-v-c4a52e88"]]);const p={install(t){t.component("BuButton",Q)}};const U=t=>(L("data-v-6deb010a"),t=t(),P(),t),X=U(()=>i("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[i("path",{fill:"currentColor",d:"M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"}),i("path",{fill:"currentColor",d:"M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"})],-1)),Y=[X],ee=f({name:"index",props:{text:{type:String,default:""}},setup(t){const{toClipboard:o}=D(),s=async n=>{try{await o(n),V({message:"\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F",type:"success"})}catch{}};return(n,e)=>(c(),l("div",{class:"clipboard",style:{width:"17px",height:"17px"},onClick:e[0]||(e[0]=r=>s(t.text))},Y))}});var te=d(ee,[["__scopeId","data-v-6deb010a"]]);const m={install(t){t.component("bfox-clipboard",te)}},oe={install(t){var o,s;(o=p.install)==null||o.call(p,t),(s=m.install)==null||s.call(m,t)}};const se={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"'@tencent/bfox-kit'")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/packages/components/${this.compName}/docs/${this.demoName}.vue`).then(t=>t.text())),await this.$nextTick(),I.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible}}},re={class:"Bfox-preview"},ne={class:"source-code"},ae={class:"language-html"},ie={class:"language-html"},ce={class:"preview-bottom"};function le(t,o,s,n,e,r){return c(),l("div",re,[i("section",null,[v(t.$slots,"default")]),O(i("div",ne,[i("pre",ae,[i("code",ie,h(r.previewSourceCode),1)])],512),[[F,e.codeVisible]]),i("div",ce,[i("span",{name:"Code",onClick:o[0]||(o[0]=(...a)=>r.showSourceCode&&r.showSourceCode(...a))},"\u67E5\u770B\u4EE3\u7801")])])}var ue=d(se,[["render",le]]);const C=R(T);C.component("Preview",ue);C.use(oe).use(q).use(G).mount("#app");export{Q as B,d as _};