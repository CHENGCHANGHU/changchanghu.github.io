!function(){"use strict";class t extends HTMLElement{#t=null;#e=null;#n=null;constructor(){super(),this.#t=this.attachShadow({mode:"closed"}),this.#t.appendChild(document.getElementById("page-header").content.cloneNode(!0)),this.#e=this.#t.querySelector("#manuscript-logo-img"),this.#n=this.#t.querySelector("#manuscript-logo-text")}connectedCallback(){this.#e.addEventListener("click",this.#r),this.#n.addEventListener("click",this.#r)}#r(){this.dispatchEvent(new CustomEvent("click-logo",{bubbles:!1,cancelable:!1,composed:!0,detail:{data:new Date}}))}#o(){const t=window.location.href;console.log(t),/manuscript/.test(t)?window.location.assign("/manuscript"):window.location.assign("/")}}function e(t){if(!t)return;if(t instanceof HTMLElement)return t;if(Array.isArray(t))return t.map((t=>e(t)));const{tag:n,text:r,html:o,children:a,attributes:i,events:s}=t;if(!n)return document.createElement("template");let l=null;return l=["svg","path"].includes(n)?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n),o&&(l.innerHTML=o),(r||0===r||""===r)&&(l.innerText=r),i&&Object.keys(i).forEach((t=>{"classes"===t&&Array.isArray(i[t])?l.className=i[t].join(" "):l.setAttribute("classes"===t?"class":t,i[t])})),s&&Object.keys(s).forEach((e=>{l.addEventListener(e,s[e].bind(t))})),a&&l.append(...a.filter(Boolean).map(e)),l}function n(t){const e=new Map;if(!e.has(t)){const n=document.getElementById(t);if(!n)return null;e.set(t,n)}return e.get(t)}document.getElementById("page-header")||(document.body.innerHTML+='<template id="page-header">\r\n  <style>\r\n    .page-header-box {\r\n      --logoSize: 36px;\r\n\r\n      position: fixed;\r\n      width: 100vw;\r\n      height: 48px;\r\n      top: 0;\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n      padding: 0 8px;\r\n      font-size: 12px;\r\n      box-sizing: border-box;\r\n      z-index: 9999;\r\n      background-color: #32343d;\r\n      box-sizing: border-box;\r\n      box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.2);\r\n      color: #ffffff;\r\n    }\r\n\r\n    .manuscript-logo-box {\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n    }\r\n\r\n    .manuscript-logo-img {\r\n      width: var(--logoSize);\r\n      transform: rotateY(180deg);\r\n      border: 1px solid #343434;\r\n      border-radius: 50%;\r\n      cursor: pointer;\r\n      background-color: #fff;\r\n    }\r\n\r\n    .manuscript-logo-text {\r\n      text-decoration: underline;\r\n      font-weight: bolder;\r\n      transition: all .3s ease-in-out;\r\n      cursor: pointer;\r\n      margin-left: 8px;\r\n    }\r\n\r\n    .manuscript-logo-text:hover {\r\n      color: rgb(3, 145, 98);\r\n    }\r\n\r\n    .page-title-box {\r\n      margin-left: 16px;\r\n      font-size: 16px;\r\n      font-weight: bolder;\r\n    }\r\n  </style>\r\n  <div class="page-header-box">\r\n    <div class="manuscript-logo-box">\r\n      <img\r\n        id="manuscript-logo-img"\r\n        class="manuscript-logo-img"\r\n        src="/assets/images/writing.a59d3288.png"\r\n        alt="tigercheng manuscript logo"\r\n      />\r\n      <div\r\n        id="manuscript-logo-text"\r\n        class="manuscript-logo-text"\r\n      >JavaScript Manuscript</div>\r\n    </div>\r\n    <div class="page-title-box">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>'),customElements.define("page-header",t),window.addEventListener("load",(function(){n("add-horizontal-curve").addEventListener("click",(t=>{d("horizontal"),o++})),n("add-vertical-curve").addEventListener("click",(t=>{d("vertical"),o++}));const t={el:null,x:0,y:0,offsetX:0,offsetY:0};document.body.addEventListener("mouseover",(t=>{const{target:e}=t;"joint"===e.dataset.type&&(r.get(e).draggable=!0)})),document.body.addEventListener("mousedown",(e=>{const{target:n,x:o,y:a}=e;console.log(n),"joint"===n.dataset.type&&(r.get(n).dragging=!0,t.el=n,t.el.style.zIndex=999999,t.x=o,t.y=a,t.offsetX=o-n.offsetLeft,t.offsetY=a-n.offsetTop)})),document.body.addEventListener("mousemove",(e=>{const{x:n,y:o}=e;t.el&&r.get(t.el).dragging&&(r.get(t.el).x=n-t.offsetX,r.get(t.el).y=o-t.offsetY)})),document.body.addEventListener("mouseup",(e=>{t.el&&r.get(t.el).dragging&&(r.get(t.el).dragging=!1,t.el.style.zIndex="",t.el=null,t.x=0,t.y=0,t.offsetX=0,t.offsetY=0)}))}));const r=new Map;let o=1;function a(t,e,r){return{el:n(t),draggable:!1,dragging:!1,x:n(t).offsetLeft,y:n(t).offsetTop,type:e,curve:null}}function i(t,e){return t[e]}function s(t,e,n){try{switch(e){case"x":t.el.style.left=n+"px";break;case"y":t.el.style.top=n+"px"}const{curve:r}=t;if(r&&("x"===e||"y"===e)){const{x:t,y:e,tailJoint:n,headJoint:o,direction:a,path:i,arrow:s}=r;r.x=Math.min(o.x,n.x)-8,r.y=Math.min(o.y,n.y)-8,r.width=Math.abs(o.x-n.x)+16,r.height=Math.abs(o.y-n.y)+16,i.setAttribute("d",`M ${n.x-t} ${n.y-e} Q ${"horizontal"===a?.75*n.x+.25*o.x-t:n.x-t} ${"horizontal"===a?n.y-e:.75*n.y+.25*o.y-e} ${(o.x+n.x)/2-t} ${(o.y+n.y)/2-e} ${"horizontal"===a?.25*n.x+.75*o.x-t:o.x-t} ${"horizontal"===a?o.y-e:.25*n.y+.75*o.y-e} ${o.x-t} ${o.y-e}`),s.setAttribute("d",("horizontal"===a?Math.abs(o.x-n.x)>.2*Math.abs(o.y-n.y):.2*Math.abs(o.x-n.x)>Math.abs(o.y-n.y))?`M ${o.x-t} ${o.y-e} l ${o.x<n.x?"":"-"}8 5 v -10`:`M ${o.x-t} ${o.y-e} l 5 ${o.y<n.y?"":"-"}8 h -10`)}return t[e]=n,!0}catch(t){return!1}}function l(t,e){return t[e]}function c(t,e,n){try{switch(e){case"x":t.el.style.left=n+"px";break;case"y":t.el.style.top=n+"px";break;case"width":case"height":t.el.setAttribute(e,n)}return t[e]=n,!0}catch(t){return!1}}function d(t){n("content-box").append(...e([{tag:"svg",attributes:{id:`curve-${o}`,xmlns:"http://www.w3.org/2000/svg","data-type":"curve"},children:[{tag:"path",attributes:{id:`curve-path-${o}`,stroke:"black",fill:"transparent","data-type":"curve-path"}},{tag:"path",attributes:{id:`curve-arrow-${o}`,stroke:"black",fill:"black","data-type":"curve-arrow"}}]},{tag:"div",attributes:{id:"joint-"+2*o,classes:"joint","data-type":"joint"}},{tag:"div",attributes:{id:"joint-"+(2*o+1),classes:"joint","data-type":"joint"}}]));const d=new Proxy(a("joint-"+2*o,"curve-head"),{set:s,get:i}),g=new Proxy(a("joint-"+(2*o+1),"curve-tail"),{set:s,get:i}),u=new Proxy(function(t,e){return{draggable:!1,dragging:!1,el:n(t),path:n(t).querySelector("path"),arrow:n(t).querySelector("path:nth-of-type(2)"),direction:e,x:0,y:0,width:0,height:0,headJoint:null,tailJoint:null}}(`curve-${o}`,t),{set:c,get:l});u.headJoint=d,u.tailJoint=g,d.curve=u,g.curve=u,r.set(n("joint-"+2*o),d),r.set(n("joint-"+(2*o+1)),g)}}();