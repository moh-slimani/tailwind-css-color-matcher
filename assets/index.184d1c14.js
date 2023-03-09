var B=Object.defineProperty,E=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var L=(f,n,r)=>n in f?B(f,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):f[n]=r,y=(f,n)=>{for(var r in n||(n={}))T.call(n,r)&&L(f,r,n[r]);if(I)for(var r of I(n))V.call(n,r)&&L(f,r,n[r]);return f},w=(f,n)=>E(f,H(n));import{r as k,a as D,t as C,c as z,o as u,b as h,d as s,w as F,v as R,e as d,u as g,n as j,f as S,F as x,g as b,h as N,i as A,j as G,k as P}from"./vendor.d4dba3dc.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))v(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&v(m)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function v(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};q();const K={class:"p-5 grid grid-cols-1 lg:grid-cols-12 gap-4"},U={class:"col-span-1 lg:col-span-4"},J=s("p",{class:"text-lg font-bold mb-2"},[N("input "),s("code",null,"#hex"),N(" code")],-1),Q={class:"flex justify-between"},W={class:"text-lg font-bold my-2 flex justify-between"},X=s("p",null,"Hue range",-1),Y={class:"flex flex-row"},Z={class:"mx-5"},ee={class:"text-lg font-bold my-2 flex justify-between"},se=s("p",null,"Saturation range",-1),te={class:"flex flex-row"},le={class:"mx-5"},oe={class:"text-lg font-bold my-2 flex justify-between"},ne=s("p",null,"Light range",-1),ae={class:"flex flex-row"},re={class:"mx-5"},ie=s("p",{class:"text-sm text-gray-500 font-bold mt-4 mb-2"},"if you don't see any result widen the range a bit",-1),ce=s("hr",{class:"my-5"},null,-1),de={class:"col-span-2 sm:col-span-1 sm:row-span-4 lg:col-span-2"},ue={class:"capitalize text-2xl font-bold"},he=["onClick"],pe={class:"relative"},fe={class:"font-bold"},ge={class:"text-sm font-normal uppercase"},ve={class:"text-sm font-normal uppercase"},me={key:1,class:"col-span-1 lg:col-span-8 p-5 border border-gray-200 row-span-3 bg-gray-50 shadow-lg rounded-lg"},xe=s("hr",{class:"m-5"},null,-1),be=s("div",{class:"p-5"},[s("h2",{class:"font-bold text-2xl"},"Tailwind CSS color pallet")],-1),_e={class:"col-span-2 xl:col-span-2 xl:row-span-1 sm:row-span-3 lg:col-span-3 lg:row-span-2"},ye={class:"capitalize text-2xl font-bold"},we={class:"text-gray-500"},ke=["onClick"],Ce={class:"relative"},Se={class:"font-bold"},$e={class:"text-sm font-normal uppercase"},Me={class:"text-xs font-normal uppercase"},je={setup(f){const n=([o,e,t])=>{let l=Math.max(o,e,t),c=l-Math.min(o,e,t),_=1-Math.abs(l+l-c-1),M=c&&(l==o?(e-t)/c:l==e?2+(t-o)/c:4+(o-e)/c);return[parseInt(60*(M<0?M+6:M)),parseInt((_?-c/_:0)*100),parseInt((l+l-c)/2*100/256)]},r=o=>{let e=o.toString().replace("#","");return e.length===3&&(e=e.substring(0,1)+e.substring(0,1)+e.substring(1,2)+e.substring(1,2)+e.substring(2,3)+e.substring(2,3)),[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)]},v=k("#ffffff"),a=k(0),i=k(0),m=k(0),$=D([{name:"black",values:[{key:1e3,hex:"#000000",hsl:n(r("#000"))}]},{name:"white",values:[{hex:"#ffffff",hsl:n(r("#fff"))}]}]);Object.keys(C).filter(o=>o!=="black"&&o!=="white"&&o!=="inherit"&&o!=="default"&&o!=="current"&&o!=="transparent").forEach(o=>{const e=[];Object.keys(C[o]).forEach(t=>{e.push({key:t,hex:C[o][t],hsl:n(r(C[o][t]))})}),$.push({name:o,values:e})});const p=z(()=>{let o=!1,e="",t=[0,0,0],l=[0,0,0];const c=v.value.toLowerCase();return c.match("^#?([0-9a-f]{3}){1,2}$")&&(o=!0,e="#"+c.toString().replace("#",""),t=r(e),l=n(t)),{valid:o,hex:e,rgb:t,hsl:l}}),O=z(()=>{let o=[];if(p.value.valid)return o=$.filter(e=>{let t=0,l=360,c=0;return e.values.forEach(_=>{c=_.hsl[0],t=t<c?c:t,l=l>c?c:l}),l-i.value<=p.value.hsl[0]&&p.value.hsl[0]<=t+i.value}),o=o.map(e=>{const t=e.values.filter(l=>Math.abs(l.hsl[1]-p.value.hsl[1])<=a.value);return w(y({},e),{values:t})}).map(e=>{const t=e.values.filter(l=>Math.abs(l.hsl[2]-p.value.hsl[2])<=m.value);return w(y({},e),{values:t})}).map(e=>{const t=e.values.filter(l=>Math.abs(l.hsl[0]-p.value.hsl[0])<=i.value);return w(y({},e),{values:t})}),o.filter(e=>e.values.length)});return(o,e)=>(u(),h(x,null,[s("div",K,[s("div",U,[J,s("div",Q,[F(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>v.value=t),class:"flex-grow border-2 border-gray-200 px-5 py-3 mb-4 rounded-lg",type:"text",placeholder:"#fff or #ffffff"},null,512),[[R,v.value]])]),s("div",W,[X,s("div",Y,[s("button",{onClick:e[1]||(e[1]=t=>i.value--),class:"px-5 border rounded"},"-"),s("p",Z,d(("00"+i.value).slice(-3)),1),s("button",{onClick:e[2]||(e[2]=t=>i.value++),class:"px-5 border rounded"},"+")])]),s("div",ee,[se,s("div",te,[s("button",{onClick:e[3]||(e[3]=t=>a.value--),class:"px-5 border rounded"},"-"),s("p",le,d(("00"+a.value).slice(-3)),1),s("button",{onClick:e[4]||(e[4]=t=>a.value++),class:"px-5 border rounded"},"+")])]),s("div",oe,[ne,s("div",ae,[s("button",{onClick:e[5]||(e[5]=t=>m.value--),class:"px-5 border rounded"},"-"),s("p",re,d(("00"+m.value).slice(-3)),1),s("button",{onClick:e[6]||(e[6]=t=>m.value++),class:"px-5 border rounded"},"+")])]),ie]),g(p).valid?(u(),h("div",{key:0,style:j({backgroundColor:g(p).hex}),class:S([{"text-white":g(p).hsl[2]<80},"col-span-1 lg:col-span-8 p-5 border border-gray-200 row-span-3 bg-gray-50 shadow-lg rounded-lg"])},[(u(!0),h(x,null,b(Object.keys(g(p)).filter(t=>t!=="valid"),t=>(u(),h("p",{key:t},d(t)+" : "+d(g(p)[t]),1))),128)),ce,(u(!0),h(x,null,b(g(O),t=>(u(),h("div",{key:t.name,class:"grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-2 mb-2"},[s("div",de,[s("h3",ue,d(t.name),1),s("p",{class:S({"text-gray-500":g(p).hsl[2]>80,"text-gray-200":g(p).hsl[2]<80})}," colors."+d(t.name),3)]),(u(!0),h(x,null,b(t.values,l=>(u(),h("div",{key:l.hex,onClick:c=>v.value=l.hex,class:"col-span-1 cursor-pointer"},[s("div",pe,[s("div",{class:"rounded-lg h-20 shadow-lg",style:j({backgroundColor:l.hex})},null,4),s("div",{class:S(["absolute text-left z-10 p-2 inset-0",{"text-white":l.key>300}])},[s("p",fe,d(l.key),1),s("p",ge,d(l.hex),1),s("p",ve,d(l.hsl),1)],2)])],8,he))),128))]))),128))],6)):(u(),h("div",me," invalid Color !! "))]),xe,be,(u(!0),h(x,null,b(g($),t=>(u(),h("div",{key:t.name,class:"p-5 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-y-4 gap-x-2"},[s("div",_e,[s("h3",ye,d(t.name),1),s("p",we,"colors."+d(t.name),1)]),(u(!0),h(x,null,b(t.values,l=>(u(),h("div",{key:l.hex,onClick:c=>v.value=l.hex,class:"col-span-1 cursor-pointer"},[s("div",Ce,[s("div",{class:"rounded-lg h-20 shadow-lg",style:j({backgroundColor:l.hex})},null,4),s("div",{class:S(["absolute text-left z-10 p-2 inset-0",{"text-white":l.key>300}])},[s("p",Se,d(l.key),1),s("p",$e,d(l.hex),1),s("p",Me,d(l.hsl),1)],2)])],8,ke))),128))]))),128))],64))}},Ie=G('<div class="p-5"><div class="flex flex-row justify-between"><h2 class="font-bold text-2xl">Tailwind CSS color matcher</h2><div><a href="https://github.com/moh-slimani/tailwind-css-color-matcher"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a></div></div><div class="py-10"><p>put your Hex Code here and edit the ranges to find the closes match to your color from the tailwind css color pallet</p><p>I&#39;m using the HSL value to compare and find the best match for the color you are looking for</p><p>The Background of the result section will use the input value as color, this will help you compare visually to see the best match</p></div></div>',1),Le=s("div",{class:"p-5"},[s("a",{class:"underline",href:"https://slimani.dev"},"Mohamed Slimani"),s("a",{class:"underline",href:"https://github.com/moh-slimani/tailwind-css-color-matcher"},"GitGub")],-1),ze={setup(f){return(n,r)=>(u(),h(x,null,[Ie,A(je),Le],64))}};P(ze).mount("#app");