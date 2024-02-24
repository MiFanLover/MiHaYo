import{L as F,F as g,A as b,C as E,p as f,a as C,b as y,B as v,c as B,d as A,P as k,e as w}from"./DataProvider-0d0e2909.js";import{i as p,h as l}from"./utils-1035a8c0.js";import{r as Y,o as d,c as h,b as i,w as c,v as m,t as _,d as x,n as L,p as M,a as S,e as H}from"./index-84fc1fa6.js";import{_ as N}from"./plugin-vueexport-helper-c27b6911.js";E.register(f,C,y,v,B,A,k,w);const U={name:"BarChart",components:{Line:F},computed:{chartData(){let e={labels:this.labels,datasets:[]};for(let t=0;t<this.datas.length;t++)e.datasets.push({label:this.translateName(this.datas[t].name),data:this.datas[t].values,fill:!1,borderColor:this.hashColorForString(this.datas[t].name),tension:.1,hidden:this.isDefaultHidden(this.datas[t].name)});return e},isMobile(){return window.innerWidth<window.innerHeight}},data(){return{dataUpdatedAt:"",isApi:!p(),provider:p()?new g:new b,errorstr:"",startDate:"2023-12-16",endDate:l().format("YYYY-MM-DD"),datas:[{name:"loading...",values:[]}],labels:[],chartOptions:{responsive:!0}}},mounted(){this.submit()},methods:{isDefaultHidden(e){return e!=="miui_unlock_person_count"&&e!=="loading..."},translateName(e){return{miui_applying_count:"总允许人数",miui_establish_count:"establishCnt",miui_unlock_person_count:"BootLoader解锁申请通过人数"}[e]||e},hashColorForString(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);var o=(t&16777215).toString(16).toUpperCase();return"#"+"00000".substring(0,6-o.length)+o},loading(){this.labels=[],this.datas=[{name:"loading...",values:[]}],this.errorstr=""},submit(){console.log("submit"),console.log(this.startDate),console.log(this.endDate),this.loading(),setTimeout(async()=>{this.dataUpdatedAt=l(await this.provider.updatedAt()).format("YYYY-MM-DD HH:mm"),await this.fetchData()},1)},generateLabels(){let e=[],t=[],a=l(this.startDate),o=l(this.endDate).add(1,"days"),u=o.diff(a,"days")>7;if(u){if(u)for(;a<=o;)e.push(a.unix()),t.push(a.format("YYYY-MM-DD")),a=a.add(1,"days")}else for(;a<=o;)e.push(a.unix()),t.push(a.format("MM-DD HH:mm")),a=a.add(1,"hours");return[e,t]},parseData(e){let[t,a]=this.generateLabels(),o={};for(let s of e){o[s.type]||(o[s.type]={name:s.type,values:Array(a.length).fill(NaN)});let n=t.indexOf(s.timestamp);n!==-1&&(o[s.type].values[n]=s.count)}let u=[];for(let s in o)u.push(o[s]);return[a,u]},async fetchData(){let e=l(this.startDate).unix(),t=l(this.endDate).add(1,"days").unix();try{let a=await this.provider.get(e,t);[this.labels,this.datas]=this.parseData(a),console.log(this.labels),console.log(this.datas)}catch(a){console.error(a),this.errorstr="Error: "+a;return}},goto_delta(){this.$router.push("/delta")},goto_probability(){this.$router.push("/probability")},goto_key_delta(){this.$router.push("/key_delta")}}};const D=e=>(M("data-v-61e22fc3"),e=e(),S(),e),V={class:"container"},P=D(()=>i("h1",null,[i("span",{class:"mi"},"米"),H("蛤游抽卡统计")],-1)),I={class:"topbar"},O={class:"error"},G={key:0},T={key:1},j=D(()=>i("div",{class:"info"},[i("p",null,"免责声明：本项目记录的数据来源于小米粉丝社群人工统计，小米公司没有以任何形式参与本项目。")],-1));function z(e,t,a,o,u,s){const n=Y("Line");return d(),h("div",V,[P,i("div",I,[c(i("input",{type:"date","onUpdate:modelValue":t[0]||(t[0]=r=>u.startDate=r)},null,512),[[m,u.startDate]]),c(i("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=r=>u.endDate=r)},null,512),[[m,u.endDate]]),i("button",{onClick:t[2]||(t[2]=(...r)=>s.submit&&s.submit(...r))},"Submit")]),i("div",O,_(u.errorstr),1),i("div",{class:L({"chart-container":!0,mobile:s.isMobile})},[x(n,{options:u.chartOptions,data:s.chartData},null,8,["options","data"])],2),i("div",null,[u.isApi?(d(),h("div",G,"如果提示error，是服务器内网通讯问题，请重试。")):(d(),h("div",T,"数据更新时间："+_(u.dataUpdatedAt),1))]),i("div",{class:"delta-link",onClick:t[3]||(t[3]=(...r)=>s.goto_delta&&s.goto_delta(...r))},"省流模式[文字版 BootLoader解锁申请通过人数]"),i("div",{class:"delta-link",onClick:t[4]||(t[4]=(...r)=>s.goto_probability&&s.goto_probability(...r))},"抽卡概率公开[当前签到+1的概率图表]"),i("div",{class:"delta-link",onClick:t[5]||(t[5]=(...r)=>s.goto_key_delta&&s.goto_key_delta(...r))},"兄弟买挂吗[文字版 XiaomiKEY UBL历史价格数据]"),j])}const q=N(U,[["render",z],["__scopeId","data-v-61e22fc3"]]);export{q as default};
