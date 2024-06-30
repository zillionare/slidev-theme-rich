import{y as u,ax as b,o as v,b as _,e as s,f as D,af as e,i as x,h as $,ag as B,al as A,an as C,m as w,c as S,k as p,l as r,q as I,s as V,A as f}from"./modules/vue-wyXTn7LN.js";import{u as m,p as q,f as P}from"./slidev/context-CYhDBl2u.js";import{I as N}from"./slidev/default-DDNubLKd.js";import{a0 as g}from"./index-qB7uHyZH.js";import"./modules/shiki-BfBsVyTL.js";function E(a,t){if(!a)return t;let n=a.split(" ");return n.includes(t)||n.push(t),n.join(" ")}const F={class:"device-frame"},M={class:"device-screen",style:{overflow:"hidden"}},z=s("div",{class:"device-stripe"},null,-1),j=s("div",{class:"device-header"},null,-1),L=s("div",{class:"device-sensors"},null,-1),R=s("div",{class:"device-btns"},null,-1),W=s("div",{class:"device-power"},null,-1),Z={__name:"Device",props:{kind:{type:String,required:!0},scale:{type:Number,default:1}},setup(a){m();const t=a,n=u(()=>`device device-${t.kind}`),o=u(()=>{var i=b().style,k={transform:`scale(${t.scale})`};return i?(i.transform=E(i.transform,k.transform),i):k});return(i,k)=>(v(),_("div",{class:x([i.$attrs.class,n.value]),style:$(o.value)},[s("div",F,[s("div",M,[D(i.$slots,"default")])]),e(),z,e(),j,e(),L,e(),R,e(),W],6))}},G=["id","src"],H={__name:"Video",props:{at:{type:Number,default:-1},muted:{type:String,required:!1},src:{type:String,required:!0}},setup(a){const{$slidev:t,$nav:n,$clicksContext:o,$clicks:i,$page:k,$renderContext:T,$frontmatter:U}=m(),c=a,y=u(()=>Array.isArray(c.at)?c.at.includes(t.nav.clicks):[-1,t.nav.clicks].includes(c.at)),h=u(()=>{if(c.seq)return`video_${c.seq}`;var l=c.at;if(Number.isInteger(l)&&l!=-1)return`video_${l}`;var d=Math.floor(Math.random()*1e4);return`video_${d}`});return B(()=>{var l=document.getElementById(h.value);if(l==null){clearInterval(timer),console.warn(`未找到Video ${h.value}`);return}var d=localStorage.getItem(h.value);d&&clearInterval(timer),y.value&&d==null&&(localStorage.setItem(h.value,1),l.play())}),(l,d)=>A((v(),_("div",null,[s("video",w({id:h.value,src:a.src},l.$attrs),null,16,G)],512)),[[C,y.value]])}},J=s("h1",null,"Mockup - Mobile Phone，Computers and Watches",-1),K=s("div",{class:"abs left-1100px top-550px"},[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"Device"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," kind"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"apple-watch-s8"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"        autoplay")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"        loop"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"forever"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        :"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"scale"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0.6"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"Video"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," src"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"*.mp4"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"/"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"Device"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])])],-1),O=s("div",{class:"abs bottom-10px w-full text-center"},[s("p",null,[e("Powered by "),s("a",{href:"https://github.com/picturepan2/devices.css",target:"_blank"},"Device.css"),e(" | Video source: Pixabay")])],-1),Q=s("div",{class:"abs top-150px left-1200px"},[s("h2",null,"available devices"),e(),s("ul",null,[s("li",null,"iphone-14-pro"),e(),s("li",null,"iphone-x"),e(),s("li",null,"iphone"),e(),s("li",null,"imac"),e(),s("li",null,"ipad-pro"),e(),s("li",null,"apple-watch-ultra"),e(),s("li",null,[e("more … "),s("a",{href:"https://github.com/picturepan2/devices.css",target:"_blank"},"Device.css")])])],-1),ts={__name:"2",setup(a){return q(g),m(),(t,n)=>{const o=H,i=Z;return v(),S(N,I(V(f(P)(f(g),1))),{default:p(()=>[J,e(),r(i,{class:"abs top-200px",kind:"the-iphone"},{default:p(()=>[r(o,{src:"https://cdn.pixabay.com/video/2023/07/21/172597-847835440_large.mp4",autoplay:"",loop:"forever",muted:""})]),_:1}),e(),r(i,{class:"abs top-410px left-350px",kind:"macbook-pro",scale:.8},{default:p(()=>[r(o,{src:"https://cdn.pixabay.com/video/2016/09/21/5373-183629075_medium.mp4"})]),_:1}),e(),r(i,{class:"abs top-150px left-400px",kind:"apple-watch-s8",autoplay:"",scale:.6},{default:p(()=>[r(o,{src:"https://cdn.pixabay.com/video/2023/07/08/170617-843561820_large.mp4"})]),_:1}),e(),r(i,{class:"abs top-150px left-670px",kind:"apple-watch-ultra",autoplay:"",loop:"forever",muted:"",scale:.6,style:{transform:"rotateZ(45deg)"}},{default:p(()=>[r(o,{src:"https://cdn.pixabay.com/video/2023/08/22/177210-857004263_large.mp4"})]),_:1}),e(),K,e(),O,e(),Q]),_:1},16)}}};export{ts as default};
