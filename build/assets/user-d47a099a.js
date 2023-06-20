import{_ as J,s as Q,r as d,k as W,o as X,E as w,l as Z,b as c,c as b,d as h,e as o,f as s,g as i,q as S,t as N,n as P,i as k,p as ee,j as le}from"./index-edebdb0d.js";const p=x=>(ee("data-v-17c040e2"),x=x(),le(),x),ae={class:"grid"},se={class:"col-12"},te={class:"card"},oe={class:"my-2"},ie={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},ne=p(()=>o("h5",{class:"m-0"},"User",-1)),re={class:"block mt-2 md:mt-0 p-input-icon-left"},ue=p(()=>o("i",{class:"pi pi-search"},null,-1)),de=p(()=>o("span",{class:"p-column-title"},"Name",-1)),ce=p(()=>o("span",{class:"p-column-title"},"Email",-1)),pe={class:"field"},me=p(()=>o("label",{for:"name"},"Name",-1)),ve={key:0,class:"p-invalid"},fe={class:"field"},_e=p(()=>o("label",{for:"email"},"Email",-1)),be={key:0,class:"p-invalid"},he={class:"field"},ye=p(()=>o("label",{for:"password"},"Password",-1)),ge={key:0,class:"p-invalid"},we={class:"flex align-items-center justify-content-center"},ke=p(()=>o("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),xe={key:0},Ue={class:"flex align-items-center justify-content-center"},Ce=p(()=>o("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),Se={key:0},Ve={__name:"user",setup(x){const f=Q(),r=d(null),m=d(!1),y=d(!1),g=d(!1),e=d({}),v=d(null),T=d(null),U=d({}),u=d(!1);W(()=>{R()}),X(()=>{I()});const I=()=>{w.get("api/getAlluser").then(t=>{t.data.status==="success"&&(r.value=t.data.data)}).catch(t=>{console.error(t)})},E=()=>{e.value={},u.value=!1,m.value=!0},M=()=>{m.value=!1,u.value=!1},L=async()=>{if(u.value=!0,e.value.name&&e.value.email&&e.value.password){if(console.log(e.value.id),e.value.id){const t=$(e.value.id);r.value[t]=e.value,await w.put(`/api/updateUser/${e.value.id}`,{name:e.value.name,email:e.value.email,password:e.value.password}),f.add({severity:"success",summary:"Successful",detail:"User Updated",life:3e3}),m.value=!1,e.value={}}else r.value.push(e.value),await w.post("/api/register",{name:e.value.name,email:e.value.email,password:e.value.password}),f.add({severity:"success",summary:"Successful",detail:"User Created",life:3e3}),m.value=!1,e.value={};m.value=!1,e.value={}}},B=t=>{e.value={...t},console.log(e),m.value=!0},A=t=>{e.value=t,y.value=!0},F=async()=>{try{await w.delete(`/api/user/${e.value.id}`),r.value=r.value.filter(t=>t.id!==e.value.id),y.value=!1,e.value={},f.add({severity:"success",summary:"Successful",detail:"User Deleted",life:3e3})}catch(t){console.error(t),f.add({severity:"error",summary:"Error",detail:"An error occurred",life:3e3})}},$=t=>{let l=-1;for(let _=0;_<r.value.length;_++)if(r.value[_].id===t){l=_;break}return l},q=()=>{T.value.exportCSV()},j=()=>{g.value=!0},z=async()=>{try{const t=v.value.map(l=>l.id);await w.delete("/api/user",{data:{ids:t}}),r.value=r.value.filter(l=>!v.value.includes(l)),g.value=!1,v.value=null,f.add({severity:"success",summary:"Successful",detail:"Users Deleted",life:3e3})}catch(t){console.error(t),f.add({severity:"error",summary:"Error",detail:"An error occurred",life:3e3})}},R=()=>{U.value={global:{value:null,matchMode:Z.CONTAINS}}};return(t,l)=>{const _=c("Toast"),n=c("Button"),O=c("FileUpload"),Y=c("Toolbar"),V=c("InputText"),C=c("Column"),K=c("DataTable"),G=c("Password"),D=c("Dialog");return b(),h("div",ae,[o("div",se,[o("div",te,[s(_),s(Y,{class:"mb-4"},{start:i(()=>[o("div",oe,[s(n,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:E}),s(n,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:j,disabled:!v.value||!v.value.length},null,8,["disabled"])])]),end:i(()=>[s(O,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"mr-2 inline-block"}),s(n,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:l[0]||(l[0]=a=>q(a))})]),_:1}),s(K,{ref_key:"dt",ref:T,value:r.value,selection:v.value,"onUpdate:selection":l[2]||(l[2]=a=>v.value=a),dataKey:"id",paginator:!0,rows:10,filters:U.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} users",responsiveLayout:"scroll"},{header:i(()=>[o("div",ie,[ne,o("span",re,[ue,s(V,{modelValue:U.value.global.value,"onUpdate:modelValue":l[1]||(l[1]=a=>U.value.global.value=a),placeholder:"Search..."},null,8,["modelValue"])])])]),default:i(()=>[s(C,{selectionMode:"multiple",headerStyle:"width: 3rem"}),s(C,{field:"name",header:"name",sortable:!0,headerStyle:"width:10%; min-width:10rem;"},{body:i(a=>[de,S(" "+N(a.data.name),1)]),_:1}),s(C,{field:"email",header:"Email",sortable:!0,headerStyle:"width:10%; min-width:10rem;"},{body:i(a=>[ce,S(" "+N(a.data.email),1)]),_:1}),s(C,{headerStyle:"min-width:15rem;"},{body:i(a=>[s(n,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:H=>B(a.data)},null,8,["onClick"]),s(n,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:H=>A(a.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","filters"]),s(D,{visible:m.value,"onUpdate:visible":l[6]||(l[6]=a=>m.value=a),style:{width:"450px"},header:"User Details",modal:!0,class:"p-fluid"},{footer:i(()=>[s(n,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:M}),s(n,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:L})]),default:i(()=>[o("div",pe,[me,s(V,{id:"name",modelValue:e.value.name,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value.name=a),modelModifiers:{trim:!0},required:"true",autofocus:"",class:P({"p-invalid":u.value&&!e.value.name})},null,8,["modelValue","class"]),u.value&&!e.value.name?(b(),h("small",ve,"Name is required.")):k("",!0)]),o("div",fe,[_e,s(V,{id:"email",modelValue:e.value.email,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value.email=a),modelModifiers:{trim:!0},required:"true",class:P({"p-invalid":u.value&&!e.value.email})},null,8,["modelValue","class"]),u.value&&!e.value.email?(b(),h("small",be,"Email is required.")):k("",!0)]),o("div",he,[ye,s(G,{id:"password",modelValue:e.value.password,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value.password=a),modelModifiers:{trim:!0},class:P({"p-invalid":u.value&&!e.value.password})},null,8,["modelValue","class"]),u.value&&!e.value.password?(b(),h("small",ge)):k("",!0)])]),_:1},8,["visible"]),s(D,{visible:y.value,"onUpdate:visible":l[8]||(l[8]=a=>y.value=a),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[s(n,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:l[7]||(l[7]=a=>y.value=!1)}),s(n,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:F})]),default:i(()=>[o("div",we,[ke,e.value?(b(),h("span",xe,[S("Are you sure you want to delete "),o("b",null,N(e.value.name),1),S("?")])):k("",!0)])]),_:1},8,["visible"]),s(D,{visible:g.value,"onUpdate:visible":l[10]||(l[10]=a=>g.value=a),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[s(n,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:l[9]||(l[9]=a=>g.value=!1)}),s(n,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:z})]),default:i(()=>[o("div",Ue,[Ce,e.value?(b(),h("span",Se,"Are you sure you want to delete the selected users?")):k("",!0)])]),_:1},8,["visible"])])])])}}},Ne=J(Ve,[["__scopeId","data-v-17c040e2"]]);export{Ne as default};
