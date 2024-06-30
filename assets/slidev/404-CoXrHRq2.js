import{L as f,y as m,b as h,e as o,af as t,x as r,A as x,c as u,k as d,g as p,r as v,o as n,p as g,a as k}from"../modules/vue-wyXTn7LN.js";import{_ as S,u as y}from"../index-qB7uHyZH.js";import"../modules/shiki-BfBsVyTL.js";const N=s=>(g("data-v-d8d7c4c5"),s=s(),k(),s),w={class:"grid justify-center text-center pt-15% gap-5"},B=N(()=>o("h1",{class:"text-9xl font-light"},`
        404
      `,-1)),I={class:"text-2xl"},R={class:"op-60"},C={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},L={__name:"404",setup(s){const{currentRoute:l}=f(),{total:i}=y(),a=m(()=>{const c=l.value.path.match(/\d+/);if(c){const e=+c[0];if(e>0&&e<=i.value)return e}return null});return(_,c)=>{const e=v("RouterLink");return n(),h("div",w,[o("div",null,[B,t(),o("p",I,[t(`
        Page `),o("code",R,r(x(l).path),1),t(` not found
      `)])]),t(),o("div",C,[a.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:d(()=>[t(`
        Go Home
      `)]),_:1})):p("v-if",!0),t(),a.value?(n(),u(e,{key:1,to:`/${a.value}`,class:"page-link"},{default:d(()=>[t(`
        Go to Slide `+r(a.value),1)]),_:1},8,["to"])):p("v-if",!0)])])}}},j=S(L,[["__scopeId","data-v-d8d7c4c5"]]);export{j as default};
