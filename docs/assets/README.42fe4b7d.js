import{b as d,o as a,c as i,f as o,w as _,i as r,d as c}from"./vendor.74de5999.js";const m=r("\u7B2C\u4E00\u4E2A"),p=r("\u7B2C\u4E8C\u4E2A"),f=r("\u7B2C\u4E09\u4E2A"),v={name:"demo",setup(u){const e=l=>{console.log(`\u6211\u662F\u7B2C ${l} \u4E2A\u81EA\u5B9A\u4E49\u6309\u94AE`)};return(l,t)=>{const n=d("bu-button");return a(),i("div",null,[o(n,{onClick:t[0]||(t[0]=s=>e(1))},{default:_(()=>[m]),_:1}),o(n,{onClick:t[1]||(t[1]=s=>e(2))},{default:_(()=>[p]),_:1}),o(n,{onClick:t[2]||(t[2]=s=>e(3))},{default:_(()=>[f]),_:1})])}}},$={class:"markdown-body"},h=c("h1",null,"\u6309\u94AE\u7EC4\u4EF6",-1),k=c("p",null,"\u5E38\u7528\u7684\u64CD\u4F5C\u6309\u94AE\u3002",-1),b=c("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),C=c("p",null,"\u4F7F\u7528 type\u3001plain\u3001round \u548C circle \u6765\u5B9A\u4E49\u6309\u94AE\u7684\u6837\u5F0F\u3002",-1),x={name:"README",setup(u,{expose:e}){return e({frontmatter:{}}),(t,n)=>{const s=d("Preview");return a(),i("div",$,[h,k,b,C,o(s,{"comp-name":"Button","demo-name":"demo"},{default:_(()=>[o(v)]),_:1})])}}};export{x as default};
