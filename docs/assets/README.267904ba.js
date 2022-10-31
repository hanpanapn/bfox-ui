import{_ as u}from"./index.71fd7856.js";import{b as d,o as s,c as i,f as t,w as a,a as _,r as b,i as h,d as n,g as f}from"./vendor.74de5999.js";const v={};function k(o,l){const e=d("el-table-column"),r=d("bu-table");return s(),i("div",null,[t(r,{headerTopfixed:!1,apiUrl:"/packages/components/BuTable/src/mock.json",isPaging:!1},{default:a(()=>[t(e,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"CreatedAt"}),t(e,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"UpdatedAt"}),t(e,{label:"name",prop:"name"}),t(e,{label:"tagsType",prop:"tagsType"})]),_:1})])}var w=u(v,[["render",k]]);const B=h("\u8BE6\u60C5"),T={name:"demo2",setup(o){const l=_({}),e=b(null),r={CreatedAt:{type:"datetime",label:"\u521B\u5EFA\u65F6\u95F4",align:"left",minWidth:"180px",sortable:"custom"},UpdatedAt:{type:"datetime",label:"\u66F4\u65B0\u65F6\u95F41",align:"left",minWidth:"180px",sortable:"custom"},name:{type:"default",label:"Name",align:"left",minWidth:"180px",width:"180px"},tagsType:{type:"default",label:"tagsType",align:"left",width:"180px"},Action:{type:"slot",label:"\u64CD\u4F5C",align:"right",width:"100px",fixed:"right"}},g=()=>l,c=async({prop:y,order:x})=>{y&&(l.value.orderKey=orderKey,l.value.desc=x==="descending"),await e.value.reload()};return(y,x)=>{const p=d("bu-button"),m=d("bu-table");return s(),i("div",null,[t(m,{headerTopfixed:!1,apiUrl:"/packages/components/BuTable/src/mock.json",ref_key:"table",ref:e,apiMethod:"get",apiParams:g,columns:r,onSortChange:c,isPaging:!0,selection:!1,customColumn:!0},{Action:a(M=>[t(p,null,{default:a(()=>[B]),_:1})]),_:1},512)])}}},A={class:"markdown-body"},C=n("h1",null,"\u8868\u683C",-1),N=n("p",null,[h("\u5BF9element table \u6269\u5C55\u4E86\u81EA\u5B9A\u4E49\u5217\u529F\u80FD\uFF0C\u5206\u9875\u529F\u80FD\uFF0C\u517C\u5BB9\u539F\u751F\u7528\u6CD5\uFF0C"),n("a",{href:"https://element-plus.org/zh-CN/component/table.html"},"\u5B98\u65B9DEMO")],-1),P=n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),j=n("p",null,"\u57FA\u7840\u7528\u6CD5\u4E2D\u4E0D\u542B\u81EA\u5B9A\u4E49\u5217\u8868\u529F\u80FD",-1),E=n("h2",null,"\u81EA\u5B9A\u4E49\u5217\u7528\u6CD5",-1),S=n("p",null,"\u81EA\u5B9A\u4E49\u5217\u9700\u8981\u5C06\u539F\u6765\u7684html\u6807\u7B7E\u7684\u5217\u4EE3\u7801\u8F6C\u5199\u6210js\u5BF9\u8C61\uFF0C\u624D\u80FD\u4F7F\u7528\u7A0B\u5E8F\u52A8\u6001\u63A7\u5236\u662F\u5426\u5C55\u793A",-1),U=f('<div class="prev_table"><h2>\u5C5E\u6027\uFF08\u9664\u539F\u59CB\u5C5E\u6027\u5916\u65B0\u589E\u7684\u5C5E\u6027\uFF09</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>apiData</code></td><td style="text-align:center;">\u6570\u636E\u6E90\u7531\u5916\u90E8\u4F20\u8FDB\u6765\uFF0CapiData\u548CapiUrl\u53EA\u80FD\u9009\u4E00\u79CD\u65B9\u5F0F</td><td style="text-align:center;">Array</td><td style="text-align:center;">-</td><td style="text-align:center;"></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>apiUrl</code></td><td style="text-align:center;">\u6570\u636E\u8BF7\u6C42AIP\u5730\u5740\uFF0C\u6B64\u65B9\u5F0F\uFF1AapiParams\uFF0CapiMethod\u5FC5\u586B</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"></td><td style="text-align:center;">\u662F</td></tr><tr><td style="text-align:center;"><code>apiParams</code></td><td style="text-align:center;">\u83B7\u53D6\u67E5\u8BE2\u53C2\u6570</td><td style="text-align:center;">Function</td><td style="text-align:center;">-</td><td style="text-align:center;"></td><td style="text-align:center;">\u662F</td></tr><tr><td style="text-align:center;"><code>apiMethod</code></td><td style="text-align:center;">\u8BF7\u6C42\u65B9\u5F0F</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>get</code></td><td style="text-align:center;">\u662F</td></tr><tr><td style="text-align:center;"><code>apiFilter</code></td><td style="text-align:center;">\u8FC7\u6EE4\u3001\u91CD\u7EC4\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E</td><td style="text-align:center;">Function</td><td style="text-align:center;">-</td><td style="text-align:center;"></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>apiHeaders</code></td><td style="text-align:center;">\u8BF7\u6C42\u5934</td><td style="text-align:center;">Object</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>{ &#39;x-token&#39;: localStorage.getItem(&#39;token&#39;), &#39;x-user-id&#39;: 1 } </code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>columns</code></td><td style="text-align:center;">js\u5BF9\u8C61\u5F62\u5F0F\u7684\u5217</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>customColumn</code></td><td style="text-align:center;">\u662F\u5426\u542F\u7528\u81EA\u5B9A\u4E49\u663E\u793A\u5217\u529F\u80FD</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>headerTopfixed</code></td><td style="text-align:center;">\u8868\u5934\u6D6E\u52A8</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>showHeader</code></td><td style="text-align:center;">\u663E\u793A\u8868\u5934</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>pageSize</code></td><td style="text-align:center;">\u6BCF\u9875N\u6761\u6570\u636E</td><td style="text-align:center;">Number</td><td style="text-align:center;">-</td><td style="text-align:center;">15</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>pageSizes</code></td><td style="text-align:center;">\u6BCF\u9875\u53EF\u9009N\u6761\u6570\u636E</td><td style="text-align:center;">Array</td><td style="text-align:center;">-</td><td style="text-align:center;">[15, 30, 50, 100]</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>reload</code></td><td style="text-align:center;">\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</td><td style="text-align:center;">reload</td><td style="text-align:center;">:\u4ECE\u7B2C\u4E00\u9875\u52A0\u8F7D\u6570\u636E,\u5982\u91CD\u7F6E\u6309\u94AE \u8C03\u7528\u6B64\u65B9\u6CD5\u65F6\u9700\u8981\u4F20true</td></tr><tr><td style="text-align:center;"><code>reloadSync</code></td><td style="text-align:center;">\u66F4\u65B0\u4E00\u6761\u6570\u636E\uFF0C\u66F4\u65B0\u505C\u7559\u5728\u539F\u4F4D\u7F6E</td><td style="text-align:center;">row ={}, key = \u2018id\u2019</td><td style="text-align:center;">row:\u683C\u5F0F\u9700\u548C\u5217\u8868\u4E00\u6761\u7684\u683C\u5F0F\u4E00\u81F4\uFF0Ckey\uFF1A\u4E3B\u952E\uFF0C\u9ED8\u8BA4id\uFF0C\u4F7F\u7528\u573A\u666F\uFF1A\u7F16\u8F91\u5F39\u6846\u4E2D\u63D0\u4EA4\u6570\u636E\u540E\u5173\u95ED\u5F39\u6846\uFF0C\u5217\u8868\u6570\u636E\u52A8\u6001\u6539\u53D8\uFF0C\u5E76\u4E14\u5217\u8868\u4F4D\u7F6E\u4E0D\u53D8</td></tr></tbody></table><h2>\u4E8B\u4EF6</h2><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>response</code></td><td style="text-align:center;">\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E</td><td style="text-align:center;">e</td><td style="text-align:center;">\u63A5\u53E3\u539F\u59CB\u6570\u636E\uFF0C\u53EF\u5C06\u63A5\u6536\u5230\u7684\u6570\u636E\u5728\u5176\u4ED6\u5730\u65B9\u81EA\u5B9A\u4E49\u663E\u793A</td></tr><tr><td style="text-align:center;"><code>request</code></td><td style="text-align:center;">\u8BF7\u6C42\u53C2\u6570</td><td style="text-align:center;">e</td><td style="text-align:center;">Object,\u6240\u6709\u7684\u67E5\u8BE2\u53C2\u6570\uFF0C\u53EF\u7528\u4E8E\u5916\u90E8\u7EC4\u4EF6\u5BFC\u51FA\u4F7F\u7528</td></tr></tbody></table><p>\u66F4\u591A\u4E8B\u4EF6\u8BF7\u67E5\u9605<a href="https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6">\u5B98\u65B9\u5730\u5740</a></p></div><h2>\u95EE\u9898</h2><p>\u5F53\u4E00\u4E2A\u9875\u9762\u6709\u591A\u4E2A\u8868\u683C\u65F6\uFF0C\u81EA\u5B9A\u4E49\u663E\u793A\u5217\u529F\u80FD\u53EF\u80FD\u4F1A\u6709\u95EE\u9898\uFF0C\u8868\u5934\u6D6E\u52A8\u529F\u80FD\u4E5F\u53EF\u80FD\u6709\u95EE\u9898\uFF0C\u5C31\u662F\u56E0\u4E3A\u8FD9\u4E9B\u529F\u80FD\u5728\u67E5\u8868\u683C\u4E2D\u67D0\u4E9B\u5143\u7D20\u65F6\uFF0C\u8868\u683C\u6CA1\u6709id\u5C5E\u6027\uFF0C\u4ECE\u800C\u5728\u6574\u4E2A\u9875\u9762\u67E5\u627E\uFF0C\u4EE5\u540E\u5E94\u8BE5\u4F18\u5316\u6210\uFF1A\u8868\u5934\u6D6E\u52A8\u529F\u80FD\u53EA\u9488\u5BF9\u5F53\u524D\u8868\u683C</p>',3),V={name:"README",setup(o,{expose:l}){return l({frontmatter:{}}),(r,g)=>{const c=d("Preview");return s(),i("div",A,[C,N,P,j,t(c,{"comp-name":"BuTable","demo-name":"demo"},{default:a(()=>[t(w)]),_:1}),E,S,t(c,{"comp-name":"BuTable","demo-name":"demo2"},{default:a(()=>[t(T)]),_:1}),U])}}};export{V as default};