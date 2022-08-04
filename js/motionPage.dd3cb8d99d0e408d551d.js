!function(){"use strict";class t extends HTMLElement{#t=null;#e=null;#r=null;constructor(){super(),this.#t=this.attachShadow({mode:"closed"}),this.#t.appendChild(document.getElementById("page-header").content.cloneNode(!0)),this.#e=this.#t.querySelector("#manuscript-logo-img"),this.#r=this.#t.querySelector("#manuscript-logo-text")}connectedCallback(){this.#e.addEventListener("click",this.#n),this.#r.addEventListener("click",this.#n)}#n(){const t=window.location.href;console.log(t),/manuscript/.test(t)?window.location.assign("/manuscript"):window.location.assign("/")}}function e(t){const e=new Map;if(!e.has(t)){const r=document.getElementById(t);if(!r)return null;e.set(t,r)}return e.get(t)}function r(t,{deltaA:e=0,deltaB:r=0,deltaC:n=0,deltaD:a=0,deltaX:o=0,deltaY:i=0}={deltaA:0,deltaB:0,deltaC:0,deltaD:0,deltaX:0,deltaY:0}){const[l,s,d,c,g,m]=t;return[l+e,s+r,d+n,c+a,g+o,m+i]}document.getElementById("page-header")||(document.body.innerHTML+='<template id="page-header">\r\n  <style>\r\n    .page-header-box {\r\n      --logoSize: 36px;\r\n\r\n      position: sticky;\r\n      width: 100vw;\r\n      height: 48px;\r\n      top: 0;\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n      padding: 0 8px;\r\n      font-size: 12px;\r\n      box-sizing: border-box;\r\n      z-index: 9999;\r\n      background-color: #32343d;\r\n      box-sizing: border-box;\r\n      box-shadow: 0px 5px 10px #afafaf;\r\n      color: #ffffff;\r\n    }\r\n\r\n    .manuscript-logo-box {\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n    }\r\n\r\n    .manuscript-logo-img {\r\n      width: var(--logoSize);\r\n      transform: rotateY(180deg);\r\n      border: 1px solid #343434;\r\n      border-radius: 50%;\r\n      cursor: pointer;\r\n      background-color: #fff;\r\n    }\r\n\r\n    .manuscript-logo-text {\r\n      text-decoration: underline;\r\n      font-weight: bolder;\r\n      transition: all .3s ease-in-out;\r\n      cursor: pointer;\r\n      margin-left: 8px;\r\n    }\r\n\r\n    .manuscript-logo-text:hover {\r\n      color: rgb(3, 145, 98);\r\n    }\r\n\r\n    .page-title-box {\r\n      margin-left: 16px;\r\n      font-size: 16px;\r\n      font-weight: bolder;\r\n    }\r\n  </style>\r\n  <div class="page-header-box">\r\n    <div class="manuscript-logo-box">\r\n      <img\r\n        id="manuscript-logo-img"\r\n        class="manuscript-logo-img"\r\n        src="/assets/images/writing.a59d3288.png"\r\n        alt="tigercheng manuscript logo"\r\n      />\r\n      <div\r\n        id="manuscript-logo-text"\r\n        class="manuscript-logo-text"\r\n      >ALLX Manuscript (Loom)</div>\r\n    </div>\r\n    <div class="page-title-box">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>'),customElements.define("page-header",t),window.addEventListener("load",(function(){let t=[];const n=e("ball");"none"===getComputedStyle(n).transform&&(t=[1,0,0,1,0,0]),n.targetMatrix=t,e("reset").addEventListener("click",(()=>{let e=getComputedStyle(n).transform;t="none"===e?[1,0,0,1,0,0]:e.replace("matrix","").replace("(","").replace(")","").split(", ").map(Number),n.animation=n.animate([{transform:`matrix(${t.join(", ")})`},{transform:"matrix(1, 0, 0, 1, 0, 0)"}],{duration:2e3,fill:"forwards",easing:"cubic-bezier(0.7, 0, 1, 1)"}),t=[1,0,0,1,0,0],n.targetMatrix=[1,0,0,1,0,0],n.animation.finished.then((t=>{console.log(getComputedStyle(n).transform)}))})),e("up").addEventListener("click",(()=>{if(console.log("up"),n.animation){let e=getComputedStyle(n).transform;t="none"===e?[1,0,0,1,0,0]:e.replace("matrix","").replace("(","").replace(")","").split(", ").map(Number)}let e=r(n.targetMatrix,{deltaY:-30});e[5]<0&&(e=r(n.targetMatrix,{deltaY:0-n.targetMatrix[5]})),n.targetMatrix=e,n.animation=n.animate([{transform:`matrix(${n.targetMatrix.join(", ")})`}],{duration:2e3,fill:"forwards",easing:"cubic-bezier(0.7, 0, 1, 1)"}),n.animation.finished.then((t=>{console.log(getComputedStyle(n).transform)}))})),e("down").addEventListener("click",(()=>{if(console.log("down"),n.animation){let e=getComputedStyle(n).transform;t="none"===e?[1,0,0,1,0,0]:e.replace("matrix","").replace("(","").replace(")","").split(", ").map(Number)}let e=r(n.targetMatrix,{deltaY:30});e[5]>n.parentElement.clientHeight-30&&(e=r(n.targetMatrix,{deltaY:n.parentElement.clientHeight-30-n.targetMatrix[5]})),n.targetMatrix=e,n.animation=n.animate([{transform:`matrix(${n.targetMatrix.join(", ")})`}],{duration:2e3,fill:"forwards",easing:"cubic-bezier(0.7, 0, 1, 1)"}),n.animation.finished.then((t=>{console.log(getComputedStyle(n).transform)}))})),e("left").addEventListener("click",(()=>{if(console.log("left"),n.animation){let e=getComputedStyle(n).transform;t="none"===e?[1,0,0,1,0,0]:e.replace("matrix","").replace("(","").replace(")","").split(", ").map(Number)}let e=r(n.targetMatrix,{deltaX:-30});e[4]<0&&(e=r(n.targetMatrix,{deltaX:0-n.targetMatrix[4]})),n.targetMatrix=e,n.animation=n.animate([{transform:`matrix(${n.targetMatrix.join(", ")})`}],{duration:2e3,fill:"forwards",easing:"cubic-bezier(0.7, 0, 1, 1)"}),n.animation.finished.then((t=>{console.log(getComputedStyle(n).transform)}))})),e("right").addEventListener("click",(()=>{if(console.log("right"),n.animation){let e=getComputedStyle(n).transform;t="none"===e?[1,0,0,1,0,0]:e.replace("matrix","").replace("(","").replace(")","").split(", ").map(Number)}let e=r(n.targetMatrix,{deltaX:30});e[4]>n.parentElement.clientWidth-30&&(e=r(n.targetMatrix,{deltaX:n.parentElement.clientWidth-30-n.targetMatrix[4]})),n.targetMatrix=e,n.animation=n.animate([{transform:`matrix(${n.targetMatrix.join(", ")})`}],{duration:2e3,fill:"forwards",easing:"cubic-bezier(0.7, 0, 1, 1)"}),n.animation.finished.then((t=>{console.log(getComputedStyle(n).transform)}))})),window.addEventListener("keydown",(t=>{switch(console.log(t),t.key){case"ArrowUp":e("up").click();break;case"ArrowDown":e("down").click();break;case"ArrowLeft":e("left").click();break;case"ArrowRight":e("right").click()}}))}))}();