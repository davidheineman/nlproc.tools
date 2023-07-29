import{_ as m,h as S,j as u,d as k,a as L,b as h}from"./Interface-c469d66e.js";import{o as i,c as o,a,t as b,b as p,d as v,e as w,n as T,g as z}from"./index-95351945.js";const O={class:"landing-box"},j={class:"container landing-container"},V=a("h4",null,"Annotating with",-1),C={class:"flex justify-center"},N=a("label",{for:"assetsFieldHandle",class:"block cursor-pointer"},[a("div",null,[v(" Drag & drop, or "),a("span",{class:"underline"},"click here"),v(" to add an annotation file ")])],-1),F={key:0,class:"separator"},E=a("span",null,"or",-1),R=[E],B={key:1,class:"option-buttons"},H=["href"],U=a("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"See Tutorial",-1),Y=[U],A=a("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"View Example Data",-1),q=[A],G=["href"],J=a("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"Customize this Template",-1),K=[J],M=["href"],Q=a("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"View Paper",-1),W=[Q],X={data(){return{filelist:[],config:{}}},props:["consumed_config","set_data","set_config","customize_template_link"],watch:{consumed_config(){this.consume_config()}},methods:{consume_config(){this.consumed_config.hasOwnProperty("consumed_config")?this.config=m.cloneDeep(this.consumed_config.consumed_config):this.consumed_config.hasOwnProperty("config")?this.config=m.cloneDeep(this.consumed_config.config):this.config=m.cloneDeep(this.consumed_config),this.config.template_label&&$("title").text(this.config.template_label)},async handle_drag_drop(t){var s;let e=await S(t);if(this.config.template_name=="serverless"){let n=(s=e.find(l=>l.hasOwnProperty("_nlproc_tools_template")))==null?void 0:s._nlproc_tools_template;n=u.load(n),this.set_config(n),e=e.filter(l=>!("_nlproc_tools_template"in l))}this.set_data(e)},remove(t){this.filelist.splice(t,1)},dragover(t){t.preDefault(),t.currentTarget.classList.contains("bg-green-300")||(t.currentTarget.classList.remove("bg-gray-100"),t.currentTarget.classList.add("bg-green-300"))},dragleave(t){t.currentTarget.classList.add("bg-gray-100"),t.currentTarget.classList.remove("bg-green-300")},async drop(t){t.preDefault(),await handle_drag_drop(t),t.currentTarget.classList.add("bg-gray-100"),t.currentTarget.classList.remove("bg-green-300")},get_example_data(){let t;if(this.customize_template_link.includes("http"))this.config.default_data_link?t=this.config.default_data_link:t="data/demo/start.json";else{let e=this.config.template_name;e=e.replace("demo_","demo/"),t=`data/${e}.json`}k(t).then(e=>{this.set_data(e)})}},created(){this.consume_config()},computed:{template_link(){return`/?t=${this.customize_template_link}`}}},Z=Object.assign(X,{__name:"Landing",setup(t){return(e,s)=>(i(),o("main",O,[a("div",j,[V,a("h2",null,b(e.config.template_label),1),a("h3",null,b(e.config.template_description),1),a("div",C,[a("div",{class:"ba b--dashed bw2 file-box",onDragover:s[1]||(s[1]=(...n)=>e.dragover&&e.dragover(...n)),onDragleave:s[2]||(s[2]=(...n)=>e.dragleave&&e.dragleave(...n)),onDrop:s[3]||(s[3]=(...n)=>e.drop&&e.drop(...n))},[a("input",{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",id:"assetsFieldHandle",class:"file-input-field",onChange:s[0]||(s[0]=(...n)=>e.handle_drag_drop&&e.handle_drag_drop(...n)),ref:"file",accept:".json"},null,544),N],32)]),e.config.template_name!="serverless"?(i(),o("div",F,R)):p("",!0),e.config.template_name!="serverless"?(i(),o("div",B,[e.config.tutorial_link?(i(),o("a",{key:0,href:e.config.tutorial_link},Y,8,H)):p("",!0),a("a",{onClick:s[4]||(s[4]=(...n)=>e.get_example_data&&e.get_example_data(...n))},q),a("a",{href:e.template_link},K,8,G),e.config.paper_link?(i(),o("a",{key:1,href:e.config.paper_link,target:"_blank"},W,8,M)):p("",!0)])):p("",!0)])]))}});const x={key:0},ee={key:1},te={key:2},ae=a("div",{class:"spinner-container"},[a("div",{class:"spinner"})],-1),se=[ae],ne={data(){return{data:null,consumed_config:null,set_data:this.set_data,set_config:this.set_config,customize_template_link:null,is_fetching:!0}},props:["template_path","serverless"],methods:{set_data(t){this.data=t},set_config(t){this.consumed_config=t}},created:async function(){let t;const e=new URLSearchParams(window.location.search);var s=e.get("i"),n=e.get("gh"),l=e.get("hf"),f=e.get("PROLIFIC_PID"),y=e.get("STUDY_ID"),D=e.get("SESSION_ID");s?(t=s,this.customize_template_link=t):n?(t=`https://raw.githubusercontent.com/${n}`,this.customize_template_link=t):l?(t=`https://huggingface.co/datasets/${l.replace("main","resolve/main")}`,this.customize_template_link=t):(this.customize_template_link=this.template_path,t=`templates/${this.template_path}.yml`),this.serverless&&(t="templates/serverless.yml");let _=await h(t).then(r=>{let d=u.load(r);return f&&(d.crowdsource="prolific"),d});const P=`lang/${_.language||"en"}.yml`;let I=await h(P).then(r=>u.load(r));_.interface_text=Object.assign({},I,_.interface_text),this.set_config(_);var g=e.get("d");if(g){let r=g;n?r=`https://raw.githubusercontent.com/${g}`:l&&(r=`https://huggingface.co/datasets/${g.replace("main","resolve/main")}`),await k(r).then(d=>{if(f)for(let c of d)c.metadata||(c.metadata={}),c.metadata.PROLIFIC_PID=f,c.metadata.STUDY_ID=y,c.metadata.SESSION_ID=D;this.set_data(d)})}this.is_fetching=!1}},de=Object.assign(ne,{__name:"Viewer",setup(t){return(e,s)=>e.consumed_config!=null&&e.consumed_config!=null&&e.data!=null&&e.data!=null&&e.is_fetching==!1?(i(),o("main",x,[w(L,{input_data:{data:e.data},consumed_config:{consumed_config:e.consumed_config}},null,8,["input_data","consumed_config"])])):e.consumed_config!=null&&e.consumed_config!=null&&(e.data==null||e.data==null)&&e.is_fetching==!1?(i(),o("main",ee,[w(Z,T(z(e.$data)),null,16)])):(i(),o("main",te,se))}});export{de as default};