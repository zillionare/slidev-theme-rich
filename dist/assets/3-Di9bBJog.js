import{_ as D}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Cuwv63t1.js";import{y as p,ag as $,ax as C,al as N,an as M,o as v,b as P,e as s,m as y,c as q,k,af as i,l as a,q as E,s as F,A as _}from"./modules/vue-wyXTn7LN.js";import{u as x,p as S,f as T}from"./slidev/context-CYhDBl2u.js";import{I as O}from"./slidev/default-DDNubLKd.js";import{a1 as f}from"./index-qB7uHyZH.js";import"./modules/unplugin-icons-sn8kgbm3.js";import"./modules/shiki-BfBsVyTL.js";const V=["id","src"],z={__name:"Audio",props:{name:{type:String,required:!0},fadeOut:{type:Number,default:0},fadeIn:{type:Number,default:0},at:{type:Number,default:-1},volume:{type:Number,default:1},delay:{type:Number,default:0}},setup(c){const{$slidev:d,$nav:w,$clicksContext:t,$clicks:u,$page:bs,$renderContext:As,$frontmatter:js}=x();var b={du:"https://images.jieyu.ai/images/sounds/du.wav","mouse-click":"https://images.jieyu.ai/images/sounds/mouse-click.wav","wechat-dingdong":"https://images.jieyu.ai/images/sounds/wechat-dingdong.wav","wechat-huwo":"https://images.jieyu.ai/images/sounds/wechat-huwo.mp3","laughing-man":"https://images.jieyu.ai/images/sounds/laughing-man-04s.mp3",giggling1:"https://images.jieyu.ai/images/sounds/giggling-8s.mp3",giggling2:"https://images.jieyu.ai/images/sounds/giggling-08s.mp3",giggling3:"https://images.jieyu.ai/images/sounds/baby-laugh-28s.mp3","evil-man-laughing":"https://images.jieyu.ai/images/sounds/evil-man-laughing-02s.mp3",crow:"https://images.jieyu.ai/images/sounds/crow-03s.wav",dodo:"https://images.jieyu.ai/images/sounds/做做提醒.mp3","whoosh-2":"https://images.jieyu.ai/images/sounds/whoosh-2.mp3",whoosh:"https://images.jieyu.ai/images/sounds/whoosh.mp3",bloop:"https://images.jieyu.ai/images/sounds/bloop-0s.mp3",pop:"https://images.jieyu.ai/images/sounds/pop-0s.mp3",typer:"https://images.jieyu.ai/images/sounds/typewriter-typing-27s.mp3"};const e=c;function A(n,o,l){var h=Math.floor(n-o),I=setInterval(function(){if(l.currentTime>=h&&l.volume>=0){var m=Math.max(0,l.volume-.1);m>0?l.volume=m:clearInterval(I)}},200)}function j(n,o){o.volume=0;var l=setInterval(function(){if(o.currentTime<n&&o.volume<1){var h=Math.max(0,o.volume+.1);h>0?o.volume=h:clearInterval(l)}},200)}const B=p(()=>{var n=e.name.substr(0,4)==="http";if(n)return e.name;var o=e.name.split(".").pop(-1);return["mp3","wav","aiff"].includes(o)?"https://images.jieyu.ai/images/sounds/"+e.name:b[e.name]}),g=p(()=>Array.isArray(e.at)?e.at.includes(d.nav.clicks):[-1,d.nav.clicks].includes(e.at)),r=p(()=>{if(e.seq)return`audio_${e.seq}`;var n=e.at;if(Number.isInteger(n)&&n!=-1)return`audio_${n}`;var o=Math.floor(Math.random()*1e4);return`audio_${o}`});return $(()=>{var n=C();if(n.controls===void 0)var o=setInterval(()=>{var l=document.getElementById(r.value);if(l==null){clearInterval(o),console.warn(`未找到Audio${r.value}`);return}l.volume=e.volume;var h=localStorage.getItem(r.value);h&&clearInterval(o),g.value&&h==null&&(localStorage.setItem(r.value,1),setTimeout(()=>{l.play(),e.fadeOut!=0&&(l.onloadedmetadata=()=>{A(l.duration,e.fadeOut,l)}),e.fadeIn!=0&&j(e.fadeIn,l)},e.delay))},200)}),(n,o)=>N((v(),P("div",null,[s("audio",y({id:r.value,src:B.value},n.$attrs),null,16,V)],512)),[[M,g.value]])}},L=s("h1",null,"Play with sound",-1),R={class:"abs top-150px left-50px"},W=s("h2",null,"whoo",-1),G={class:"abs top-300px left-50px"},H=s("h2",null,"du",-1),J={class:"abs top-450px left-50px"},K=s("h2",null,"Mouse click",-1),Q={class:"abs top-600px left-50px"},U=s("h2",null,"wechat-dingdong",-1),X={class:"abs top-150px left-450px"},Y=s("h2",null,"wechat-dingdong",-1),Z={class:"abs top-300px left-450px"},ss=s("h2",null,"giggling1",-1),is={class:"abs top-450px left-450px"},ts=s("h2",null,"giggling2",-1),es={class:"abs top-600px left-450px"},as=s("h2",null,"giggling3",-1),os={class:"abs top-600px left-850px"},ls=s("h2",null,"Evil man laughing",-1),ns={class:"abs top-450px left-850px"},hs=s("h2",null,"Crow",-1),rs={class:"abs top-300px left-850px"},ds=s("h2",null,"dodo",-1),ps={class:"abs top-150px left-850px"},cs=s("h2",null,"whoosh-2",-1),us={class:"abs top-150px left-1200px"},gs=s("h2",null,"whoosh",-1),ms={class:"abs top-300px left-1200px"},ks=s("h2",null,"bloop",-1),_s={class:"abs top-450px left-1200px"},fs=s("h2",null,"pop",-1),vs={class:"abs top-600px left-1200px"},ys=s("h2",null,"typer",-1),xs={class:"abs bottom-50px w-90%"},ws=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"Audio"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"typer"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," controls"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," /"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"Audio"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," src"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"*.mp3"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," :"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"at"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," :"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"volume"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0.5"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," /"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),Ps={__name:"3",setup(c){return S(f),x(),(d,w)=>{const t=z,u=D;return v(),q(O,E(F(_(T)(_(f),2))),{default:k(()=>[L,i(),s("div",R,[W,i(),a(t,{name:"wechat-huwo",controls:""})]),i(),s("div",G,[H,i(),a(t,{name:"du",controls:""})]),i(),s("div",J,[K,i(),a(t,{name:"mouse-click",controls:""})]),i(),s("div",Q,[U,i(),a(t,{name:"wechat-dingdong",controls:""})]),i(),s("div",X,[Y,i(),a(t,{name:"laughing-man",controls:""})]),i(),s("div",Z,[ss,i(),a(t,{name:"giggling1",controls:""})]),i(),s("div",is,[ts,i(),a(t,{name:"giggling2",controls:""})]),i(),s("div",es,[as,i(),a(t,{name:"giggling3",controls:""})]),i(),s("div",os,[ls,i(),a(t,{name:"evil-man-laughing",controls:""})]),i(),s("div",ns,[hs,i(),a(t,{name:"crow",controls:""})]),i(),s("div",rs,[ds,i(),a(t,{name:"dodo",controls:""})]),i(),s("div",ps,[cs,i(),a(t,{name:"whoosh-2",controls:""})]),i(),s("div",us,[gs,i(),a(t,{name:"whoosh",controls:""})]),i(),s("div",ms,[ks,i(),a(t,{name:"bloop",controls:""})]),i(),s("div",_s,[fs,i(),a(t,{name:"pop",controls:""})]),i(),s("div",vs,[ys,i(),a(t,{name:"typer",controls:""})]),i(),s("div",xs,[a(u,y({},{ranges:[]}),{default:k(()=>[ws]),_:1},16)])]),_:1},16)}}};export{Ps as default};
