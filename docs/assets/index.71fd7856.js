var ce=Object.defineProperty,ue=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var Z=(e,o,a)=>o in e?ce(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,M=(e,o)=>{for(var a in o||(o={}))pe.call(o,a)&&Z(e,a,o[a]);if(U)for(var a of U(o))me.call(o,a)&&Z(e,a,o[a]);return e},J=(e,o)=>ue(e,de(o));import{r as B,a as _e,b as x,o as r,c as g,d as p,F as j,e as L,t as z,u as T,f as C,g as he,h as O,w as _,i as N,n as fe,j as ye,k as ge,l as R,m as E,p as ve,q as be,s as K,v as G,E as we,x as Q,y as X,z as xe,A as Ce,B as V,C as ee,D as Se,G as ke,H as te,I as $e,P as Be,J as Ee,K as De,L as ze,M as oe}from"./vendor.74de5999.js";const Ne=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}};Ne();var Oe="./assets/logo.fdea686d.png";const Ae="bfox-ui",qe="2.0.24",je="dist/bfox.umd.js",Ve="bfox-ui",Me={dev:"vite --config ./build/base.config.ts",build:"npm run build:doc && npm run build:lib","build:doc":"vue-tsc --noEmit && vite build --config ./build/doc.config.ts && node script/copyDir.js","build:lib":"vue-tsc --noEmit && vite build --config ./build/lib.config.ts",gen:"node ./script/genNewComp/index.js"},Le={"@element-plus/icons-vue":"^0.2.7",axios:"^0.27.2","element-plus":"^2.0.1",md5:"^2.3.0",moment:"^2.29.3",prismjs:"^1.25.0",uuid:"^8.3.2",vue:"^3.2.23","vue-clipboard3":"^2.0.0","vue-router":"^4.0.12"},Te={"@types/node":"^16.11.41","@vitejs/plugin-vue":"^1.10.2","@vitejs/plugin-vue-jsx":"^1.3.10","fs-extra":"^10.0.0",handlebars:"^4.7.7",inquirer:"^8.2.0",less:"^4.1.2","node-sass":"^7.0.1",sass:"^1.52.3","sass-loader":"^13.0.0",typescript:"^4.4.4","unplugin-vue-define-options":"^0.6.1",vite:"^2.7.0","vite-plugin-copy":"^0.1.6","vite-plugin-dts":"^0.9.6","vite-plugin-md":"^0.11.4","vue-tsc":"^0.28.10",webpack:"^5.0.0"},Re=[],Fe="hanpanpan",Pe="MIT",Ie={type:"git",url:"git+https://github.com/hanpanapn/bfox-ui.git"},He={url:"https://github.com/hanpanapn/bfox-ui/issues"},Ye="https://hanpanapn.github.io/bfox-ui/#/";var We={name:Ae,version:qe,main:je,description:Ve,scripts:Me,dependencies:Le,devDependencies:Te,keywords:Re,author:Fe,license:Pe,repository:Ie,bugs:He,homepage:Ye},Ue=[{compName:"Button",compZhName:"\u6309\u94AE",compDesc:"\u8FD9\u662F\u4E00\u4E2A\u6309\u94AE",compClassName:"button"},{compName:"BuClipboard",compZhName:"\u590D\u5236\u7EC4\u4EF6",compDesc:"\u590D\u5236\u6587\u5B57",compClassName:"bu-clipboard"},{compName:"BuTable",compZhName:"\u8868\u683C",compDesc:"\u8868\u683C",compClassName:"bu-table"},{compName:"BuDialog",compZhName:"\u5F39\u6846",compDesc:"\u5F39\u6846",compClassName:"bu-dialog"}];const Ze={class:"bfox-ui-doc"},Je={class:"bfox-ui-doc_sider"},Ke=p("h4",null,[p("img",{class:"logo",src:Oe,alt:""})],-1),Ge={class:"version"},Qe=he('<div class="main_header"><div class="nav"><a class="active" href="https://codesandbox.io/s/bfoxui-demo-rw1x7n" target="_blank">\u5728\u7EBF\u7F16\u8F91\u5668</a><a class="active" href="https://jshare.com.cn/new" target="_blank">\u7B80\u5355JS\u8FD0\u884C</a></div><a href="https://github.com/hanpanapn/bfox-ui" target="_blank" class="icon"><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-6c8d2bba=""><path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></svg></a></div>',1),Xe={name:"App",setup(e){B("");const o=B("/"),a=n=>{console.log("m",n),o.value=n},t=_e({links:[{path:"/",name:"\u7B80\u4ECB"},{path:"/install",name:"\u5FEB\u901F\u5F00\u59CB"},...Ue.map(n=>({path:`/components/${n.compName}`,name:n.compZhName})),{path:"/blog",name:"\u5E38\u89C1\u95EE\u9898"}]});return(n,s)=>{const i=x("router-link"),v=x("router-view");return r(),g("div",Ze,[p("div",Je,[Ke,(r(!0),g(j,null,L(t.links,(f,b)=>(r(),O(i,{onClick:m=>a(f.path),class:fe(o.value==f.path?"is-active":""),key:b,to:f.path},{default:_(()=>[N(z(f.name),1)]),_:2},1032,["onClick","class","to"]))),128)),p("div",Ge,"V"+z(T(We).version),1)]),p("main",null,[Qe,C(v)])])}}},et="modulepreload",ne={},tt="./",A=function(o,a){return!a||a.length===0?o():Promise.all(a.map(t=>{if(t=`${tt}${t}`,t in ne)return;ne[t]=!0;const n=t.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":et,n||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),n)return new Promise((v,f)=>{i.addEventListener("load",v),i.addEventListener("error",f)})})).then(()=>o())},ot=[{title:"\u9996\u9875",name:"Home",path:"/",component:()=>A(()=>import("./Index.12e6a04f.js"),["assets/Index.12e6a04f.js","assets/Index.e4e68f53.css","assets/vendor.74de5999.js"])},{title:"\u5FEB\u901F\u5F00\u59CB",name:"Install",path:"/install",component:()=>A(()=>import("./Install.ab179384.js"),["assets/Install.ab179384.js","assets/vendor.74de5999.js"])},{title:"\u6309\u94AE",name:"Button",path:"/components/Button",component:()=>A(()=>import("./README.42fe4b7d.js"),["assets/README.42fe4b7d.js","assets/vendor.74de5999.js"])},{title:"\u590D\u5236\u7EC4\u4EF6",name:"BuClipboard",path:"/components/BuClipboard",component:()=>A(()=>import("./README.f79b0725.js"),["assets/README.f79b0725.js","assets/vendor.74de5999.js"])},{title:"\u8868\u683C",name:"BuTable",path:"/components/BuTable",component:()=>A(()=>import("./README.267904ba.js"),["assets/README.267904ba.js","assets/vendor.74de5999.js"])},{title:"\u5F39\u6846",name:"BuDialog",path:"/components/BuDialog",component:()=>A(()=>import("./README.046e2e57.js"),["assets/README.046e2e57.js","assets/vendor.74de5999.js"])}],nt=[{title:"\u5E38\u89C1\u95EE\u9898",name:"Blog",path:"/blog",component:()=>A(()=>import("./Blog.bf982a7d.js"),["assets/Blog.bf982a7d.js","assets/Blog.3e450d0c.css","assets/vendor.74de5999.js"])}],at={history:ye(),routes:ot.concat(nt),scrollBehavior(e,o){if(e.path!==o.path)return{top:0}}},st=ge(at);var q=(e,o)=>{const a=e.__vccOpts||e;for(const[t,n]of o)a[t]=n;return a};const lt=R({name:"index",emits:["click"],setup(e){return(o,a)=>(r(),g("button",{class:"bfox-button",onClick:a[0]||(a[0]=t=>o.$emit("click",t))},[E(o.$slots,"default",{},void 0,!0)]))}});var it=q(lt,[["__scopeId","data-v-3a1f7e0e"]]);const F={install(e){e.component("BuButton",it)}};const rt=e=>(K("data-v-f12d3124"),e=e(),G(),e),ct=rt(()=>p("div",{class:"clipboard",style:{width:"17px",height:"17px"}},[p("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[p("path",{fill:"currentColor",d:"M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"}),p("path",{fill:"currentColor",d:"M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"})])],-1)),ut=R({name:"index",props:{text:{type:String,default:""}},setup(e){ve();const{toClipboard:o}=be(),a=async t=>{try{await o(t),we({message:"\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F",type:"success"})}catch{}};return(t,n)=>(r(),g("div",{class:"clipboard-box",onClick:n[0]||(n[0]=s=>a(e.text))},[E(t.$slots,"default",{},void 0,!0),ct]))}});var dt=q(ut,[["__scopeId","data-v-f12d3124"]]);const P={install(e){e.component("BuClipboard",dt)}},ae=(e,o,a)=>{e.getBoundingClientRect().top>document.body.clientHeight?(o.style.display==="none"&&(o.style.display="block",o.scrollLeft=a.scrollLeft),o.style.display="block"):o.style.display="none"},pt=(e,o,a)=>{let t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),i=document.querySelector("#"+e).querySelector(".el-table__body"),v=document.querySelector("#"+e).querySelector(".el-table__body-wrapper"),f=document.querySelector("#"+e);if(!f)return;f.append(t);let b=window.MutationObserver||window.webkitMutationObserver||window.MozMutationObserver;window.mutationObserver=new b(function(m){ae(t,s,v)}),window.mutationObserver.observe(f,{childList:!0,subtree:!0}),n.style.width=i.getBoundingClientRect().width+"px",n.style.height="1px",s.style.width=f.getBoundingClientRect().width+"px",s.style.height="30px",s.style.overflow="auto",s.style.zIndex=a,s.style.bottom="0px",s.style.position="fixed",s.append(n),f.append(s),window.addEventListener("scroll",()=>{let m=document.querySelector("#"+e);if(!m)return;s.style.display==="block"?v.scrollLeft=s.scrollLeft:s.scrollLeft=v.scrollLeft,ae(t,s,v);let w=document.querySelector("#"+e).querySelector(".el-table__header-wrapper"),k=document.querySelector("#"+e).querySelector(".el-table__fixed .el-table__fixed-header-wrapper"),S=document.querySelector("#"+e).querySelector(".el-table__fixed-right .el-table__fixed-header-wrapper"),D=document.querySelector("#"+e).querySelector(".el-table__fixed-right  .el-table__header");if(m.getBoundingClientRect().top<o){if(!document.querySelector("#"+e).querySelector(".zhanweitablehead")){let $=document.createElement("div");$.className="zhanweitablehead",$.style.width=w.getBoundingClientRect().width+"px",$.style.height=w.getBoundingClientRect().height+"px",m.insertBefore($,m.children[0])}w&&(w.style.position="fixed",w.style.zIndex=a,w.style.top=o+"px",w.style.right="56px",w.style.boxShadow="inset 0 8px 10px -10px #00000026",w.style.width=m.getBoundingClientRect().width+"px",w.style.overflow="hidden"),k&&(k.style.position="fixed",k.style.zIndex=a,k.style.top=o+"px",k.style.right="56px",k.style.width="320px",k.style.overflow="hidden"),S&&(S.style.width=document.querySelector("#"+e).querySelector(".el-table__fixed-right").style.width,S.style.position="fixed",S.style.zIndex=a,S.style.top=o+"px",S.style.height="50px",S.style.right="36px",S.style.overflow="hidden",D.style.position="absolute",D.style.right="0")}else{if(!m)return;document.querySelector("#"+e).querySelector(".zhanweitablehead")&&document.querySelector("#"+e).removeChild(document.querySelector("#"+e).querySelector(".zhanweitablehead")),w&&(w.style={}),k&&(k.style={}),S&&(S.style={}),D&&(D.style.position="initial")}},!0)},mt=(e,o={top:100,zIndex:997})=>{pt(e,o.top,o.zIndex)},_t={apiData:{type:Array,default:()=>[]},apiUrl:{type:String,default:""},apiParams:{type:Function,default:()=>({})},apiMethod:{type:String,default:"get"},apiFilter:{type:Function},apiHeaders:{type:Object,default:()=>({"x-token":localStorage.getItem("token"),"x-user-id":1})},columns:{type:Object,default:()=>({})},selection:{type:Boolean,default:!1},customColumn:{type:Boolean,default:!1},isPaging:{type:Boolean,default:!0,required:!0},headerTopfixed:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},size:{type:String},pageSize:{type:Number,default:15},pageSizes:{type:Array,default:()=>[15,30,50,100]},rowKey:{type:String||Function,default:"ID"},fit:{type:Boolean,default:!0},rowClassName:{type:[String,Function],default:""},spanMethod:{type:Function,default:()=>{}},border:{type:Boolean,default:!1},"cell-style":{type:[Object,Function],default:()=>{}},defaultExpandAll:{type:Boolean,default:!1}};const ht=e=>(K("data-v-061c8303"),e=e(),G(),e),ft={style:{display:"flex","justify-content":"end","text-align":"center","margin-left":"auto"}},yt=ht(()=>p("h5",null,"\u81EA\u5B9A\u4E49\u663E\u793A\u5217",-1)),gt=N("\u4FDD\u5B58 "),vt=N("\u91CD\u7F6E "),bt=N("\u5168\u9009 "),wt={name:"dialogTools",props:{colunmVisible:{type:Array,default:()=>[]},columns:{type:Object,default:()=>({})}},emits:["input"],setup(e,{emit:o}){const a=e;let t=Q(location.href);const n=B([]),s=()=>{console.log("\u663E\u793A\u989D\u5217\u8868\uFF1A",n.value),localStorage.setItem("bu-table-column_"+t,JSON.stringify(n.value)),window.location.reload()},i=()=>{n.value=[],localStorage.removeItem("bu-table-column_"+t),window.location.reload()},v=()=>{n.value=Object.keys(a.columns)};return X(()=>{n.value=[...a.colunmVisible]}),(f,b)=>{const m=x("Tools"),w=x("el-icon"),k=x("el-checkbox"),S=x("el-col"),D=x("el-button"),$=x("el-row"),W=x("el-checkbox-group"),l=x("el-popover");return r(),g("div",ft,[C(l,{placement:"left",width:600,trigger:"click"},{reference:_(()=>[C(w,{class:"icon_config",size:20,title:"\u81EA\u5B9A\u4E49\u5217"},{default:_(()=>[C(m)]),_:1})]),default:_(()=>[C(W,{modelValue:n.value,"onUpdate:modelValue":b[0]||(b[0]=d=>n.value=d)},{default:_(()=>[yt,C($,{justify:"start"},{default:_(()=>[(r(!0),g(j,null,L(a.columns,(d,y,h)=>(r(),O(S,{span:6,key:h},{default:_(()=>[C(k,{label:y},{default:_(()=>[N(z(d.label),1)]),_:2},1032,["label"])]),_:2},1024))),128)),C(S,{span:24},{default:_(()=>[C(D,{style:{padding:"5px 9px",height:"unset"},type:"success",onClick:s},{default:_(()=>[gt]),_:1}),C(D,{style:{padding:"5px 9px",height:"unset"},type:"info",onClick:i},{default:_(()=>[vt]),_:1}),C(D,{style:{padding:"5px 9px",height:"unset"},onClick:v},{default:_(()=>[bt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}};var xt=q(wt,[["__scopeId","data-v-061c8303"]]);const Ct=["id"],St={class:"bu-tools"},kt={key:0},$t={key:1},Bt={key:2},Et={key:3},Dt={key:4},zt={key:5},Nt={key:0,class:"gva-pagination"},Ot={name:"BuTable"},At=Object.assign(Ot,{props:_t,emits:["sort-change","selection-change","response","request"],setup(e,{expose:o,emit:a}){const t=e,n=B("tid_"+xe()),s=B({}),i=B([]);if(t.customColumn){let l=Q(location.href),d=localStorage.getItem("bu-table-column_"+l);try{d=d?JSON.parse(d):[]}catch{d=Object.keys(t.columns)}i.value=d;let y=Object.assign({},t.columns);for(const h in y)Object.hasOwnProperty.call(y,h)&&Array.isArray(d)&&d.length>0?y[h].show=d.indexOf(h)!=-1:y[h].show=!0;s.value=y,d.length==0&&(i.value=Object.keys(s.value))}const v=l=>{l.column&&l.column.sortable&&l.column.sortable!==!0&&a("sort-change",l)},f=B(!1),b=B([]),m=B({page:1,pageSize:t.pageSize?t.pageSize:15,total:0}),w=B([...t.pageSizes]),k=l=>{m.value.page=l,$()},S=l=>{m.value.pageSize=l,$()},D=l=>{a("selection-change",l)},$=async(l=!1)=>{if(t.apiData&&Array.isArray(t.apiData)&&t.apiData.length>0){b.value=t.apiData;return}let d={url:t.apiUrl,method:t.apiMethod,headers:t.apiHeaders},y=M({},t.apiParams());t.isPaging&&(y.page=l?1:m.value.page,y.pageSize=l?10:m.value.pageSize),t.apiMethod.toLowerCase()=="get"?d.params=y:d.data=y,f.value=!0,b.value=[];let h=await $e(d);f.value=!1,t.apiFilter&&(h={},h=t.apiFilter(h.data)),h.data&&h.data.data&&(b.value=h.data.data.list||[],m.value.total=h.data.data.total,m.value.page=h.data.data.page,m.value.pageSize=h.data.data.pageSize),a("response",h.data),a("request",y)};return o({reload:$,reloadSync:async(l={},d="id")=>{l[d]&&Array.isArray(b.value)&&(b.value=b.value.map(y=>y[d]==l[d]?l:y))}}),X(async()=>{t.headerTopfixed&&mt(n.value),$()}),(l,d)=>{const y=x("el-table-column"),h=x("el-table"),se=x("el-pagination"),le=Ce("loading");return r(),g("div",{id:"box-"+n.value,class:"bu-table"},[p("div",St,[E(l.$slots,"tools",{},void 0,!0),t.customColumn?(r(),O(xt,{key:0,title:"\u81EA\u5B9A\u4E49\u663E\u793A\u5217",colunmVisible:i.value,columns:t.columns},null,8,["colunmVisible","columns"])):V("",!0)]),ee((r(),O(h,{id:n.value,fit:l.fit,size:t.size,"show-header":t.showHeader,data:b.value,style:{width:"100%"},"row-class-name":l.rowClassName,border:l.border,"span-method":l.spanMethod,"row-key":l.rowKey,"default-expand-all":l.defaultExpandAll,onSortChange:v,onSelectionChange:D},{default:_(()=>[E(l.$slots,"default",{},void 0,!0),t.selection?(r(),O(y,{key:0,type:"selection",width:"55",fixed:"left"})):V("",!0),(r(!0),g(j,null,L(s.value,(c,ie,re)=>(r(),g(j,{key:re},[c.show?(r(),O(y,{key:0,label:c.label,prop:ie,align:c.align,width:c.width,minWidth:c.minWidth?c.minWidth:c.width,sortable:c.sortable,fixed:c.fixed,type:c.type},Se({default:_(u=>[c.show&&c.type=="datetime"?(r(),g("div",kt,[p("span",null,z(u.row[u.column.property]?T(te)(u.row[u.column.property]).format("YYYY-MM-DD HH:mm:ss"):""),1)])):c.show&&c.type=="date"?(r(),g("div",$t,[p("span",null,z(u.row[u.column.property]?T(te)(u.row[u.column.property]).format("YYYY-MM-DD"):""),1)])):c.show&&c.type=="slot"?(r(),g("div",Bt,[E(l.$slots,u.column.property,{row:u.row,$index:u.$index},void 0,!0)])):c.show&&c.type=="action"?(r(),g("div",Et,[E(l.$slots,u.column.property,{row:u.row,$index:u.$index},void 0,!0)])):c.show&&c.type=="expand"?(r(),g("div",Dt,[E(l.$slots,u.column.property,{row:u.row,$index:u.$index},void 0,!0)])):(r(),g("div",zt,[p("span",null,z(c.render?c.render(u.row[u.column.property],u.row):u.row[u.column.property]),1)]))]),_:2},[c.renderHeader?{name:"header",fn:_(u=>[(r(),O(ke(c.renderHeader)))])}:void 0]),1032,["label","prop","align","width","minWidth","sortable","fixed","type"])):V("",!0)],64))),128))]),_:3},8,["id","fit","size","show-header","data","row-class-name","border","span-method","row-key","default-expand-all"])),[[le,f.value]]),l.isPaging?(r(),g("div",Nt,[C(se,{small:t.size=="small",layout:"total, sizes, prev, pager, next, jumper","current-page":m.value.page,"page-size":m.value.pageSize,"page-sizes":w.value,total:m.value.total,onCurrentChange:k,onSizeChange:S},null,8,["small","current-page","page-size","page-sizes","total"])])):V("",!0)],8,Ct)}}});var qt=q(At,[["__scopeId","data-v-22463633"]]);const I={install(e){e.component("BuTable",qt)}};const jt={class:"bu-dialog"},Vt={style:{padding:"0 10px"}},Mt={class:"dialog-footer"},Lt=N("\u53D6 \u6D88"),Tt=N("\u63D0 \u4EA4"),Rt={name:"BuDialog"},Ft=R(J(M({},Rt),{props:{closeOnClickModal:{type:Boolean,default:!1},width:{type:[String,Number],default:"50%"},title:{type:String,default:"\u5F39\u6846"}},emits:["close","submit"],setup(e,{emit:o}){const a=B(!0),t=()=>{o("close",!1)},n=()=>{o("submit",!1)};return(s,i)=>{const v=x("el-button"),f=x("el-dialog");return r(),g("div",jt,[C(f,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=b=>a.value=b),"before-close":t,"close-on-click-modal":e.closeOnClickModal,width:e.width},{title:_(()=>[E(s.$slots,"title",{},()=>[N(z(e.title),1)])]),footer:_(()=>[E(s.$slots,"footer",{},()=>[p("div",Mt,[C(v,{onClick:t},{default:_(()=>[Lt]),_:1}),C(v,{type:"primary",onClick:n},{default:_(()=>[Tt]),_:1})])])]),default:_(()=>[p("div",Vt,[E(s.$slots,"default")])]),_:3},8,["modelValue","close-on-click-modal","width"])])}}})),H={install(e){e.component("BuDialog",Ft)}},Pt={install(e){var o,a,t,n;(o=F.install)==null||o.call(F,e),(a=P.install)==null||a.call(P,e),(t=I.install)==null||t.call(I,e),(n=H.install)==null||n.call(H,e)}};const It={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"'@tencent/bfox-ui'")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/packages/components/${this.compName}/docs/${this.demoName}.vue`).then(e=>e.text())),await this.$nextTick(),Be.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible}}},Ht={class:"Bfox-preview"},Yt={class:"preview-bottom"},Wt={class:"source-code"},Ut={class:"language-html"},Zt={class:"language-html"};function Jt(e,o,a,t,n,s){const i=x("el-collapse-transition");return r(),g("div",Ht,[p("section",null,[E(e.$slots,"default")]),p("div",Yt,[p("span",{name:"Code",onClick:o[0]||(o[0]=(...v)=>s.showSourceCode&&s.showSourceCode(...v))},"\u67E5\u770B\u4EE3\u7801")]),C(i,null,{default:_(()=>[ee(p("div",Wt,[p("pre",Ut,[p("code",Zt,z(s.previewSourceCode),1)])],512),[[Ee,n.codeVisible]])]),_:1})])}var Kt=q(It,[["render",Jt]]);const Y=De(Xe);Y.component("Preview",Kt);Y.use(Pt).use(ze).use(st).mount("#app");Object.keys(oe).forEach(e=>{Y.component(e,oe[e])});export{q as _};