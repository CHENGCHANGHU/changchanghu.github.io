!function(){"use strict";function e(t){if(!t)return;if(t instanceof HTMLElement)return t;if(Array.isArray(t))return t.map((t=>e(t)));const{tag:n,text:r,html:a,children:o,attributes:s,events:l}=t;if(!n)return document.createElement("template");let i=null;return i=["svg","path"].includes(n)?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n),a&&(i.innerHTML=a),(r||0===r||""===r)&&(i.innerText=r),s&&Object.keys(s).forEach((e=>{"classes"===e&&Array.isArray(s[e])?i.className=s[e].join(" "):i.setAttribute("classes"===e?"class":e,s[e])})),l&&Object.keys(l).forEach((e=>{i.addEventListener(e,l[e].bind(t))})),o&&i.append(...o.filter(Boolean).map(e)),i}function t(e){const t=new Map;if(!t.has(e)){const n=document.getElementById(e);if(!n)return null;t.set(e,n)}return t.get(e)}class n extends HTMLElement{#e=null;#t=null;#n=[];#r(e,t){console.log("[EDraggable handleDragStart]"),console.log(this,e),e.dataTransfer.setDate("text/plain","drag data")}#a(e){console.log("[handleDragStart]"),console.log(e.target,e.currentTarget);const t=e.target;e.dataTransfer.setData("application/x-moz-node",e.target.outerHTML),t.style.border="1px solid red",e.dataTransfer.effectAllowed="move",console.dir(e.target)}#o(e){console.log("handleDragenter",e.target),e.dataTransfer.dropEffect="move"}#s(e){e.dataTransfer.types.includes("application/x-moz-node")&&(e.preventDefault(),e.dataTransfer.dropEffect="move")}#l(e){console.log("[handleDragleave]",e.target)}#i(t){console.log("[handleDrop]",t),t.dataTransfer.dropEffect="move",t.target.parentNode.insertBefore(e({tag:"template",html:t.dataTransfer.getData("application/x-moz-node")}).content.firstChild,t.target),t.dataTransfer.clearData()}#d(e){console.log("[handleDragend]",e)}constructor(){super(),this.#e=this.attachShadow({mode:"closed"}),this.#e.appendChild(t("e-draggable-template").content.cloneNode(!0)),this.#t=this.#e.querySelector(".e-draggable-box")}connectedCallback(){this.#n=[].slice.call(this.children),console.log(this.#n),this.#n.forEach((e=>{e.setAttribute("draggable",!0)})),this.addEventListener("dragstart",this.#a),this.addEventListener("dragenter",this.#o),this.addEventListener("dragover",this.#s),this.addEventListener("dragleave",this.#l),this.addEventListener("drop",this.#i),this.addEventListener("dragend",this.#d)}}t("e-draggable-template")||(document.body.innerHTML+='<template id="e-draggable-template">\r\n  <style></style>\r\n  \x3c!-- <div class="e-draggable-box" draggable="true">\r\n    <slot></slot>\r\n  </div> --\x3e\r\n  <div class="e-draggable-box">\r\n    <slot></slot>\r\n  </div>\r\n</template>'),customElements.define("e-draggable",n);class r extends HTMLElement{#e=null;#g=null;#h=null;constructor(){super(),this.#e=this.attachShadow({mode:"closed"}),this.#e.appendChild(document.getElementById("page-header").content.cloneNode(!0)),this.#g=this.#e.querySelector("#manuscript-logo-img"),this.#h=this.#e.querySelector("#manuscript-logo-text")}connectedCallback(){this.#g.addEventListener("click",this.#c),this.#h.addEventListener("click",this.#c)}#c(){this.dispatchEvent(new CustomEvent("click-logo",{bubbles:!1,cancelable:!1,composed:!0,detail:{data:new Date}}))}#u(){const e=window.location.href;console.log(e),/manuscript/.test(e)?window.location.assign("/manuscript"):window.location.assign("/")}}document.getElementById("page-header")||(document.body.innerHTML+='<template id="page-header">\r\n  <style>\r\n    .page-header-box {\r\n      --logoSize: 36px;\r\n\r\n      position: fixed;\r\n      width: 100vw;\r\n      height: 48px;\r\n      top: 0;\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n      padding: 0 8px;\r\n      font-size: 12px;\r\n      box-sizing: border-box;\r\n      z-index: 9999;\r\n      background-color: #32343d;\r\n      box-sizing: border-box;\r\n      box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.2);\r\n      color: #ffffff;\r\n    }\r\n\r\n    .manuscript-logo-box {\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n    }\r\n\r\n    .manuscript-logo-img {\r\n      width: var(--logoSize);\r\n      transform: rotateY(180deg);\r\n      border: 1px solid #343434;\r\n      border-radius: 50%;\r\n      cursor: pointer;\r\n      background-color: #fff;\r\n    }\r\n\r\n    .manuscript-logo-text {\r\n      text-decoration: underline;\r\n      font-weight: bolder;\r\n      transition: all .3s ease-in-out;\r\n      cursor: pointer;\r\n      margin-left: 8px;\r\n    }\r\n\r\n    .manuscript-logo-text:hover {\r\n      color: rgb(3, 145, 98);\r\n    }\r\n\r\n    .page-title-box {\r\n      margin-left: 16px;\r\n      font-size: 16px;\r\n      font-weight: bolder;\r\n    }\r\n  </style>\r\n  <div class="page-header-box">\r\n    <div class="manuscript-logo-box">\r\n      <img\r\n        id="manuscript-logo-img"\r\n        class="manuscript-logo-img"\r\n        src="/manuscript/assets/images/writing.a59d3288.png"\r\n        alt="tigercheng manuscript logo"\r\n      />\r\n      <div\r\n        id="manuscript-logo-text"\r\n        class="manuscript-logo-text"\r\n      >JavaScript Manuscript</div>\r\n    </div>\r\n    <div class="page-title-box">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>'),customElements.define("page-header",r),EventTarget;class a extends EventTarget{constructor(){super()}}class o{#m=[];#p=[];#f=null;#E=null;#b=null;#v=[];#x=[];#D=null;#y=void 0;#w=void 0;#L=null;#I=null;#T=null;#C=null;#H=null;#S=null;#k=null;events=null;constructor(){this.events=new a,this.#L=this.#B.bind(this),this.#I=this.#A.bind(this),this.#T=this.#d.bind(this),this.#C=this.#o.bind(this),this.#H=this.#s.bind(this),this.#S=this.#l.bind(this),this.#k=this.#i.bind(this),this.#f={duration:300,fill:"forwards",easing:"ease-in-out"}}add(...e){e.forEach((({ele:e,drag:t,drop:n})=>{t&&(e.setAttribute("draggable",!0),e.addEventListener("dragstart",this.#L),e.addEventListener("drag",this.#I),e.addEventListener("dragend",this.#T),this.#m.push(e)),n&&(e.addEventListener("dragenter",this.#C),e.addEventListener("dragover",this.#H),e.addEventListener("dragleave",this.#S),e.addEventListener("drop",this.#k),this.#p.push(e))}))}async#B(e){const{target:t,dataTransfer:n,x:r,y:a}=e;this.#E=t,this.#v=Array.from(t.parentElement.children),this.#x=Array.from(t.parentElement.children),this.#x.forEach((e=>{e.setAttribute("draggable",!1)}));for(let e of t.style){const n=e.replace(/(-\w)/g,(e=>e[1].toUpperCase()));t.dataset[n]=t.style[n]}const o=t.getBoundingClientRect();this.#b=t.cloneNode(!0),this.#b.style.backgroundColor="red",this.#b.style.position="fixed",this.#b.style.top="-100vh",this.#b.style.left="-100vw",this.#b.style.width=`${o.width}px`,this.#b.style.top=`${o.height}px`,t.parentElement.appendChild(this.#b),n.setDragImage(this.#b,r-o.left,a-o.top),this.#D=new Map(this.#v.map((e=>[e,e.getBoundingClientRect()]))),this.#y=this.#v.indexOf(this.#E),this.events.dispatchEvent(new CustomEvent("dragstart",{bubbles:!1,cancelable:!1,composed:!0,detail:{draggedEle:t,goastEle:this.#b}}))}#A(e){const{target:t}=e;t.style.opacity="0.3",t.style.zIndex="9999"}async#d(e){console.log("[dnd] dragend");const{target:t}=e;t.style.opacity="",t.style.zIndex="";for(let e in t.dataset)t.style[e]=t.dataset[e],delete t.dataset[e];if(this.#b.remove(),this.#b=null,this.#y!==this.#w){const e=this.#x.map((e=>e.animation)).filter(Boolean);await Promise.all(e.map((e=>e.finished))),e.forEach((e=>e.cancel()))}console.log("insert element",this.#y,this.#w),this.#w<this.#y?this.#v[this.#w].before(this.#E):this.#w>this.#y&&this.#E.parentElement.insertBefore(this.#E,this.#v[this.#w].nextElementSibling),this.#x.forEach((e=>e.setAttribute("draggable",!0))),this.events.dispatchEvent(new CustomEvent("dragend",{bubbles:!1,cancelable:!1,composed:!0,detail:{data:"test"}}))}#o(e){const{target:t}=e;if(console.log("dragenter",t),t===this.#E)return;const n=this.#x.indexOf(this.#E),r=this.#x.indexOf(t);this.#w=this.#x.indexOf(t);let a="";a=this.#w<this.#y?"up":this.#w>this.#y?"down":"none";const o=this.#v.filter(((e,t)=>this.#w<this.#y?t>=this.#w&&t<this.#y:t<=this.#w&&t>this.#y)),{y:s,height:l}=this.#D.get(this.#E)||{y:0,height:0},{y:i,height:d}=this.#D.get(o[0])||{y:0,height:0},{y:g,height:h}=this.#D.get(o[o.length-1])||{y:0,height:0};switch(this.#x.forEach((e=>{if(o.includes(e))switch(a){case"up":e.animation=e.animate([{transform:`matrix(1, 0, 0, 1, 0, ${s+l-g-h})`,offset:1}],this.#f);break;case"down":e.animation=e.animate([{transform:`matrix(1, 0, 0, 1, 0, ${s-i})`}],this.#f);break;case"none":e.animation=e.animate([{transform:"matrix(1, 0, 0, 1, 0, 0)"}],this.#f)}else e.animation=e.animate([{transform:"matrix(1, 0, 0, 1, 0, 0)"}],this.#f)})),a){case"up":this.#E.animation=this.#E.animate([{transform:getComputedStyle(this.#E).transform},{transform:`matrix(1, 0, 0, 1, 0, ${i-s})`}],this.#f);break;case"down":this.#E.animation=this.#E.animate([{transform:getComputedStyle(this.#E).transform},{transform:`matrix(1, 0, 0, 1, 0, ${g+h-s-l})`}],this.#f)}this.#x.splice(n,1),this.#x.splice(r,0,this.#E)}#s(e){e.preventDefault()}#l(e){const{target:t}=e;console.log("leave",t)}#i(e){const{target:t}=e;console.log("drop",t)}}window.addEventListener("load",(function(){t("content-box").appendChild(e({tag:"e-draggable",children:e(["a","b","c","d","e","f","g","h","i","k"].slice(0,3).map(((t,n)=>e({tag:"div",text:`value: task-${t}, index: ${n}`,attributes:{classes:["draggable-item"]}}))))}));const n=document.querySelectorAll(".item"),r=document.querySelectorAll(".drop-zone-item");n.forEach((e=>{e.addEventListener("dragstart",c),e.addEventListener("dragenter",p),e.addEventListener("dragleave",f),e.addEventListener("dragover",E),e.addEventListener("drop",m),e.addEventListener("dragend",u)})),r.forEach((e=>{e.addEventListener("dragover",b),e.addEventListener("dragenter",v),e.addEventListener("dragleave",x),e.addEventListener("drop",D)})),function(){const e=[];for(let n=1;n<8;n++){const r=t(`dragItem${n}`);r.dataset.id=n,e.push({ele:r,drag:!0,drop:!0})}const n=new o({datasetKeys:[]});n.add(...e),n.events.addEventListener("dragstart",(e=>{const{draggedEle:t,goastEle:n}=e.detail;console.log("dragstart",t.dataset.id),n.style.backgroundColor="sienna"})),n.events.addEventListener("dragend",(e=>{console.log("dragend",e.detail)}))}()}));let s=null,l=null,i=null,d=null,g=null,h=null;function c(){console.log("[handleItemDragStart]"),i=this,s=this.parentNode,this.classList.add("dragged-item")}function u(){console.log("[handleItemDragEnd]"),this.classList.remove("dragged-item"),console.log(d,h,g),d&&(h||g)&&(console.log("targetDropZone: ",l,s),l===s&&(d.remove(),d=null,g&&(g.before(i),g=null),h&&(h.parentNode.insertBefore(i,h.nextElementSibling),h=null)))}function m(){console.log("[handleItemDrop]")}function p(e){if(console.log("[handleItemDragEnter]",this===i),d&&d.remove(),this===i)return;d||(d=i.cloneNode(!0),d.style.backgroundColor="red");const t=this.getBoundingClientRect();if(e.y<t.top+t.height/2){if(i.nextElementSibling===this)return h=null,void(g=null);h=null,g=this,this.before(d)}else{if(this.nextElementSibling===i)return h=null,void(g=null);g=null,h=this,console.log(this,d),this.parentNode.insertBefore(d,this.nextElementSibling)}}function f(){}function E(e){if(e.preventDefault(),e.stopPropagation(),this===i)return;d||(d=i.cloneNode(!0),d.style.backgroundColor="red");const t=this.getBoundingClientRect();if(e.y<t.top+t.height/2){if(i.nextElementSibling===this)return h=null,void(g=null);console.log(d),h=null,g=this,this.before(d)}else{if(this.nextElementSibling===i)return h=null,void(g=null);g=null,h=this,this.parentNode.insertBefore(d,this.nextElementSibling)}}function b(e){e.preventDefault(),this!==s&&console.log("drag over")}function v(){l=this,this!==s?console.log("drag entered"):d||(d=i.cloneNode(!0),d.style.backgroundColor="red")}function x(){l=s,this!==s&&console.log("drag left")}function D(){console.log("drag dropped"),this!==s&&(d&&d.parentNode!==this&&(d.remove(),d=null),this.append(i))}}();