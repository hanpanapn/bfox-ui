import{B as a}from"./index.16d9edb2.js";import{o as c,c as l,e as o,w as n,G as d,g as _,a as u,b as p}from"./vendor.686eae6b.js";const f=_("\u7B2C\u4E00\u4E2A"),v=_("\u7B2C\u4E8C\u4E2A"),k=_("\u7B2C\u4E09\u4E2A"),B={name:"demo",setup(m){const t=s=>{console.log(`\u6211\u662F\u7B2C ${s} \u4E2A\u81EA\u5B9A\u4E49\u6309\u94AE`)};return(s,e)=>(c(),l("div",null,[o(d(a),{onClick:e[0]||(e[0]=r=>t(1))},{default:n(()=>[f]),_:1}),o(d(a),{onClick:e[1]||(e[1]=r=>t(2))},{default:n(()=>[v]),_:1}),o(d(a),{onClick:e[2]||(e[2]=r=>t(3))},{default:n(()=>[k]),_:1})]))}},$={class:"markdown-body"},x=p("h1",null,"\u6309\u94AE\u7EC4\u4EF6",-1),b={name:"README",setup(m,{expose:t}){return t({frontmatter:{}}),(e,r)=>{const i=u("Preview");return c(),l("div",$,[x,o(i,{"comp-name":"Button","demo-name":"demo"},{default:n(()=>[o(B)]),_:1})])}}};export{b as default};