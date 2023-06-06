import{_ as v,r as h,C as y,o as x,b as f,c as m,d as _,f as o,g as c,e,F as b,j as I,D as k,i as t,n as w,t as S,p as C,l as z}from"./index-61406ec9.js";const s=r=>(C("data-v-8beee8b8"),r=r(),z(),r),V={class:"card"},P=s(()=>e("h3",null,"Icons",-1)),j=s(()=>e("p",null,[t(" PrimeVue components internally use "),e("a",{href:"https://github.com/primefaces/primeicons",class:"font-medium text-primary hover:underline"},"PrimeIcons"),t(" library, the official icons suite from "),e("a",{href:"https://www.primetek.com.tr",class:"font-medium text-primary hover:underline"},"PrimeTek"),t(". ")],-1)),T=s(()=>e("h5",null,"Download",-1)),B=s(()=>e("p",null,"PrimeIcons is available at npm, run the following command to download it to your project.",-1)),D=s(()=>e("h5",null,"Getting Started",-1)),H=s(()=>e("p",null,[t("PrimeIcons use the "),e("strong",null,"pi pi-{icon}"),t(" syntax such as "),e("strong",null,"pi pi-check"),t(". A standalone icon can be displayed using an element like "),e("i",null,"i"),t(" or "),e("i",null,"span")],-1)),L=s(()=>e("i",{class:"pi pi-check",style:{"margin-right":"0.5rem"}},null,-1)),N=s(()=>e("i",{class:"pi pi-times"},null,-1)),A=s(()=>e("h5",null,"Size",-1)),F=s(()=>e("p",null,"Size of the icons can easily be changed using font-size property.",-1)),O=s(()=>e("i",{class:"pi pi-check"},null,-1)),q=s(()=>e("i",{class:"pi pi-check",style:{"font-size":"2rem"}},null,-1)),E=s(()=>e("h5",null,"Spinning Animation",-1)),G=s(()=>e("p",null,"Special pi-spin class applies continuous rotation to an icon.",-1)),M=s(()=>e("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1)),U=s(()=>e("h5",null,"List of Icons",-1)),Y=s(()=>e("p",null,[t(" Here is the current list of PrimeIcons, more icons are added periodically. You may also "),e("a",{href:"https://github.com/primefaces/primeicons/issues",class:"font-medium text-primary hover:underline"},"request new icons"),t(" at the issue tracker. ")],-1)),J={class:"grid icons-list text-center"},K={__name:"Icons",setup(r){const d=h(null),p=h(null),g=y(()=>p.value?d.value.filter(i=>i.properties.name.indexOf(p.value.toLowerCase())>-1):d.value);return x(()=>{fetch("demo/data/icons.json",{headers:{"Cache-Control":"no-cache"}}).then(i=>i.json()).then(i=>{let l=i.icons.filter(n=>n.icon.tags.indexOf("deprecate")===-1);l.sort((n,u)=>n.properties.name<u.properties.name?-1:n.properties.name>u.properties.name?1:0),d.value=l})}),(i,l)=>{const n=f("CodeHighlight"),u=f("InputText");return m(),_("div",V,[P,j,T,B,o(n,null,{default:c(()=>[t(" npm install primeicons --save ")]),_:1}),D,H,o(n,null,{default:c(()=>[t(' <i class="pi pi-check"></i> <i class="pi pi-times"></i> ')]),_:1}),L,N,A,F,o(n,null,{default:c(()=>[t(' <i class="pi pi-check"></i> ')]),_:1}),O,o(n,null,{default:c(()=>[t(' <i class="pi pi-check" style="font-size: 2rem"></i> ')]),_:1}),q,E,G,o(n,null,{default:c(()=>[t(' <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i> ')]),_:1}),M,U,Y,o(u,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=a=>p.value=a),class:"w-full p-3 mt-3 mb-5",placeholder:"Search an icon"},null,8,["modelValue"]),e("div",J,[(m(!0),_(b,null,I(k(g),a=>(m(),_("div",{class:"col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",key:a.properties.name},[e("i",{class:w("text-2xl mb-2 pi pi-"+a.properties.name)},null,2),e("div",null,"pi-"+S(a.properties.name),1)]))),128))])])}}},R=v(K,[["__scopeId","data-v-8beee8b8"]]);export{R as default};