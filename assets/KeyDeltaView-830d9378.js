import{i as E,g as h,a as f,h as m}from"./utils-1035a8c0.js";import{_ as F}from"./plugin-vueexport-helper-c27b6911.js";import{o as n,c as l,b as t,F as D,f as b,t as c,p as B,a as C}from"./index-84fc1fa6.js";const v={name:"About",data(){return{data:[{date:"1980-01-01",value:"loading..."}]}},mounted(){this.fetchData()},methods:{fetchData(){let e=E()?h()+"/KEY.js"+f():"/undefined";fetch(e).then(o=>o.text()).then(o=>{this.data=[];let i=o.split(`
`);for(let s of i){if(s.trim()==="")continue;let[u,d]=s.split(",");if(isNaN(parseInt(u)))continue;let a=m.unix(parseInt(u)).format("YYYY-MM-DD"),r=!1;for(let _ of this.data)if(_.date===a){r=!0;continue}r||this.data.push({date:a,value:"$"+d})}this.data.sort((s,u)=>s.date<u.date?1:-1)})}}};const p=e=>(B("data-v-0ec337b5"),e=e(),C(),e),y={class:"about"},g=p(()=>t("p",null,"免责声明：本项目记录的数据来源于小米粉丝社群人工统计，XiaomiKEY没有以任何形式参与本项目。本项目不推荐也不反对XiaomiKEY。",-1)),x={for:"delta",class:"table table-striped"},A=p(()=>t("thead",null,[t("tr",null,[t("th",null,"Time"),t("th",null,"Value")])],-1));function Y(e,o,i,s,u,d){return n(),l("div",y,[g,t("table",x,[A,t("tbody",null,[(n(!0),l(D,null,b(u.data,a=>(n(),l("tr",{key:a.date},[t("td",null,c(a.date),1),t("td",null,c(a.value),1)]))),128))])])])}const S=F(v,[["render",Y],["__scopeId","data-v-0ec337b5"]]);export{S as default};
