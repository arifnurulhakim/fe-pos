import{N as p}from"./NodeService-2dd984bb.js";import{r as l,o as h,b as c,c as f,d as b,e,f as o,g as v,i as y}from"./index-61406ec9.js";const N={class:"grid"},x={class:"col-12"},V={class:"card"},K=e("h5",null,"Tree",-1),g={class:"col-12"},k={class:"card"},C=e("h5",null,"TreeTable",-1),w={__name:"Tree",setup(S){const r=l(null),d=l(null),i=l(null),u=l(null),_=new p;return h(()=>{_.getTreeNodes().then(s=>r.value=s),_.getTreeTableNodes().then(s=>i.value=s)}),(s,t)=>{const T=c("Tree",!0),n=c("Column"),m=c("TreeTable");return f(),b("div",N,[e("div",x,[e("div",V,[K,o(T,{value:r.value,selectionMode:"checkbox",selectionKeys:d.value,"onUpdate:selectionKeys":t[0]||(t[0]=a=>d.value=a)},null,8,["value","selectionKeys"])])]),e("div",g,[e("div",k,[C,o(m,{value:i.value,selectionMode:"checkbox",selectionKeys:u.value,"onUpdate:selectionKeys":t[1]||(t[1]=a=>u.value=a)},{header:v(()=>[y(" FileSystem ")]),default:v(()=>[o(n,{field:"name",header:"Name",expander:!0}),o(n,{field:"size",header:"Size"}),o(n,{field:"type",header:"Type"})]),_:1},8,["value","selectionKeys"])])])])}}};export{w as default};
