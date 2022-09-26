!function(){var t={91:function(t,e,n){"use strict";function o(t){const{tag:e,text:n,html:a,children:r,attributes:i,events:l}=t,d=document.createElement(e);return a&&(d.innerHTML=a),n&&(d.innerText=n),i&&Object.keys(i).forEach((t=>{"classes"===t?d.className=i[t].join(" "):d.setAttribute(t,i[t])})),l&&Object.keys(l).forEach((e=>{d.addEventListener(e,l[e].bind(t))})),r&&r.forEach((t=>d.appendChild(o(t)))),d}function a(t){if(!t)return;if(t instanceof HTMLElement)return t;if(Array.isArray(t))return t.map((t=>a(t)));const{tag:e,text:n,html:o,children:r,attributes:i,events:l}=t;if(!e)return document.createElement("template");let d=null;return d=["svg","path"].includes(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),o&&(d.innerHTML=o),(n||0===n||""===n)&&(d.innerText=n),i&&Object.keys(i).forEach((t=>{"classes"===t&&Array.isArray(i[t])?d.className=i[t].join(" "):d.setAttribute("classes"===t?"class":t,i[t])})),l&&Object.keys(l).forEach((e=>{d.addEventListener(e,l[e].bind(t))})),r&&d.append(...r.filter(Boolean).map(a)),d}function r({tag:t,text:e,html:n,parent:a,children:r,attributes:i}){a&&a.appendChild(o({tag:t,text:e,html:n,children:r,attributes:i}))}function i({tag:t,text:e,attributes:n}){return`<${t}${n?" "+Object.keys(n).map((t=>"classes"===t?`class="${n[t].join(" ")}"`:`${t}="${n[t]}"`)).join(" "):""}">${e}</${t}>`}function l(t){const e=new Map;if(!e.has(t)){const n=document.getElementById(t);if(!n)return null;e.set(t,n)}return e.get(t)}function d(t,e,n){const o=t.getAttribute("style")||"";new RegExp(`${e}`,"g").test(o)?t.setAttribute("style",o.replaceAll(new RegExp(`(${e}: )[\\w\\.]+(;)`,"g"),`$1${n}$2`)):t.setAttribute("style",`${o} ${e}: ${n};`)}n.r(e),n.d(e,{getElement:function(){return o},createElement:function(){return a},appendElement:function(){return r},elementString:function(){return i},id:function(){return l},setInlineStyle:function(){return d}})},515:function(t,e,n){const{createElement:o}=n(91);function a(t){return t.replace(/<(?!(\/?(p|pre|code|div|strong|em|table|thead|tbody|th|tr|td)))/g,"&lt;").replace(/(?<!(p|pre|code|div|strong|em|table|thead|tbody|th|tr|td))>/g,"&gt;").replace(/^(.*)\*\*(.+)\*\*(.*)$/g,((t,e,n,o)=>`${e}<strong>${n}</strong>${o}`)).replace(/^(.*)\*(.+)\*(.*)$/g,((t,e,n,o)=>`${e}<i>${n}</i>${o}`)).replace(/(?<!\\)`([^`]+)(?<!\\)`/g,((t,e)=>`<code>${e}</code>`)).replace(/^([^\[]*)\[(.*)\]\((.*)\)(.*)$/g,((t,e,n,o,a)=>`${e}<a href="${o}" target="_blank">${n}</a>${a}`))}const r={tag:"style",text:"\n    [data-markdown-heading='h1'] {\n      padding: 32px 0 16px 0;\n    }\n\n    [data-markdown-heading='h2'] {\n      padding: 16px 0 8px 0;\n    }\n\n    [data-markdown-heading='h2'] {\n      padding: 8px 0 8px 0;\n    }\n    \n    p {\n      margin: 8px 0 8px 0;\n    }\n\n    [data-markdown-block-quotes='block-quotes'] {\n      margin-left: var(--indent);\n      margin-top: 8px;\n      margin-bottom: 8px;\n      padding: 4px 16px;\n      border-left: 8px solid #ccc;\n      background-color: #efefef;\n    }\n    \n    table, th,\n    [data-markdown-td='td'] {\n      border: 1px solid #343434;\n    }\n    \n    table {\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin: 8px 0 8px 0;\n    }\n    \n    tr:nth-child(1) {\n      background-color: #dedede;\n      font-weight: 700;\n    }\n    \n    th, td {\n      padding: 4px 8px;\n    }\n    \n    a {\n      color: seagreen;\n    }\n\n    code {\n      display: inline-block;\n      border: 1px solid #d1d1d1;\n      padding: 0 2px;\n      border-radius: 4px;\n      background-color: #e1e1e1;\n    }        \n  "};t.exports=function(t,e={indent:16}){const n=[];let i=0,l="",d=!1;t.replace(/\\r\\n/g,"\n");for(let e of t)d?(n.push(l),n.push("\n"),l="",i++,d=!1):"\r"!==t[i]||"\n"!==t[i+1]?"\n"!==e&&"\r"!==e?(l+=e,i++):(n.push(l),n.push("\n"),l="",i++):(d=!0,i++);n.push(l);const s=n.reduce((({options:t,lastNodeType:e,status:n},o,r)=>{let i=null;if((i=o.match(/^(\s*)```([^`]*)$/))&&"code-block-start"!==e)return t.push({tag:"div",attributes:{classes:`code-block-index-${r}`,style:`--indent: ${16*i[1].length}px`,"data-code-type":i[2],"data-code-block-index":r},children:[{tag:"pre",text:"",attributes:{classes:`code-block-index-${r}-line-box`}},{tag:"pre",text:"",attributes:{classes:`code-block-index-${r}-code-box`}}]}),{options:t,lastNodeType:"code-block-start",status:{skipNextLine:!0}};if((i=o.match(/^(\s*)```(\s*)$/))&&"code-block-start"===e){const e=t.at(-1),n=e.attributes["data-code-block-index"];return e.children.push({tag:"style",text:`\n            .code-block-index-${n} {\n              display: flex;\n              flex-flow: row nowrap;\n              column-gap: 4px;\n              padding: 8px 16px;\n              border-radius: 4px;\n              background-color: #aaa;\n              box-sizing: border-box;\n              max-height: 400px;\n              overflow-y: auto;\n            }\n            .code-block-index-${n}-line-box,\n            .code-block-index-${n}-code-box {\n              color: #ccc;\n              font-family: monospace;\n              white-space: pre;\n              line-height: 14px;\n              padding: 4px 0;\n              line-height: 1.2;\n            }\n            .code-block-index-${n}-line-box {\n              color: #343434;\n              text-align: right;\n            }\n            .code-block-index-${n}-code-box {\n              flex: 1;\n              height: 100%;\n              padding-left: 4px;\n              border-radius: 4px;\n              background-color: #222;\n            }\n          `}),{options:t,lastNodeType:"code-block-end"}}if("code-block-start"===e){if(n&&n.skipNextLine)return{options:t,lastNodeType:"code-block-start"};const{attributes:{"data-code-block-index":e},children:[a,i]}=t.at(-1);return"\n"!==o&&(a.text+=(r-e-2)/2+":\n"),i.text+=o,{options:t,lastNodeType:"code-block-start"}}if(""===o)return t.push({tag:"div",text:"",attributes:{"data-markdown-split-line":"split-line"}}),{options:t,lastNodeType:"split"};if(i=o.match(/^(#+) (.+?)$/))return t.push({tag:`h${i[1].length}`,html:a(i[2].trim()),attributes:{"data-markdown-heading":`h${i[1].length}`}}),{options:t,lastNodeType:"heading"};if(i=o.match(/^(\s*)(>+) (.+?)$/)){const n=t[t.length-1];return"quote"===e&&i[1].length===n.attributes["data-indent"]?n.html+="<br>"+a(i[3].trim()):t.push({tag:"p",html:a(i[3].trim()),attributes:{style:`--indent: ${16*i[1].length}px`,"data-indent":i[1].length,"data-markdown-block-quotes":"block-quotes"}}),{options:t,lastNodeType:"quote"}}if(i=o.match("tablerow"===e?/^(\|[^\|]*)+\|$/:/^(\|[^\|]+)+\|$/)){const n=t[t.length-1];let i=0;"tablerow"===e&&(i=n.children[0].children.length);const l=o.slice(1,o.length-1).split("|").map(((t,e)=>{const n={"data-row-index":i,"data-col-index":e,rowspan:1,colspan:1};return t=t.replace(/(.*)(?<! )\(-(\d+)\)(.*)/,((t,e,o,a)=>(n.colspan=parseInt(o),`${e}${a}`))).replace(/(.*)(?<! )\(=(\d+)\)(.*)/,((t,e,o,a)=>(n.rowspan=parseInt(o),`${e}${a}`))),n["data-row-span"]=n.rowspan,n["data-col-span"]=n.colspan,{tag:"td",html:a(t.trim()),attributes:{"data-markdown-td":"td",...n}}}));if(l.reduce(((t,e)=>(e.attributes["data-col-index"]=t,t+e.attributes["data-col-span"])),0),n&&n.tableRowShadow&&(n.tableRowShadow=n.tableRowShadow.filter((t=>i<t.rowIndex+t.rowSpan)),n.tableRowShadow.forEach((t=>{l.filter((e=>e.attributes["data-col-index"]>=t.colIndex)).forEach((e=>e.attributes["data-col-index"]+=t.colSpan))}))),"tablerow"!==e){const e=l.filter((t=>t.attributes["data-row-span"]>1)).map((({attributes:{"data-row-index":t,"data-col-index":e,"data-row-span":n,"data-col-span":o}})=>({rowIndex:t,colIndex:e,rowSpan:n,colSpan:o}))),n=Math.max(e.reduce(((t,e)=>Math.max(t,e.rowSpan)),0),1);return t.push({tag:"table",attributes:{classes:`table-index-${r}`,"data-markdown-table-index":r},children:[{tag:"tbody",children:[{tag:"tr",children:l}]},{tag:"style",text:`.table-index-${r} tr:nth-child(-n+${n}) td { font-weight: 500; background-color: #dedede; }`}],tableRowShadow:e}),{options:t,lastNodeType:"tablerow"}}if(/^[\|:\-]+$/.test(o)){const e=o.slice(1,o.length-1).split("|").map(((t,e)=>/^:\-+:$/.test(t)?`[data-markdown-table-index='${n.attributes["data-markdown-table-index"]}'] td[data-col-index='${e}'] { text-align: center; }`:/^\-+:$/.test(t)?`[data-markdown-table-index='${n.attributes["data-markdown-table-index"]}'] td[data-col-index='${e}'] { text-align: right; }`:"")).join(" ");return n.children.push({tag:"style",text:e}),{options:t,lastNodeType:"tablerow"}}return n.tableRowShadow.push(...l.filter((t=>t.attributes["data-row-span"]>1)).map((({attributes:{"data-row-index":t,"data-col-index":e,"data-row-span":n,"data-col-span":o}})=>({rowIndex:t,colIndex:e,rowSpan:n,colSpan:o})))),n.children[0].children.push({tag:"tr",children:l}),{options:t,lastNodeType:"tablerow"}}return(i=o.match(/^[\*\-_]{3,}$/))?(t.push({tag:"hr"}),{options:t,lastNodeType:"horizontal-rule"}):(i=o.match(/^(\s*)\- (.*)$/))?(t.push({tag:"li",html:a(i[2].trim()),attributes:{style:`--indent: ${16*i[1].length}px`}}),{options:t,lastNodeType:"list-item"}):(i=o.match(/^(\s*)([^<>\n]+)$/))?(t.push({tag:"p",html:a(i[2].trim()),attributes:{style:`--indent: ${16*i[1].length}px`}}),{options:t,lastNodeType:"paragraph"}):"\n"!==o?(t.push({tag:"p",html:a(o.trim())}),{options:t,lastNodeType:"paragraph"}):{options:t,lastNodeType:e}}),{options:[r],lastNodeType:"",status:{}}).options;return console.log(s),s.map(o)}}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";class t extends HTMLElement{#t=null;#e=null;#n=null;constructor(){super(),this.#t=this.attachShadow({mode:"closed"}),this.#t.appendChild(document.getElementById("page-header").content.cloneNode(!0)),this.#e=this.#t.querySelector("#manuscript-logo-img"),this.#n=this.#t.querySelector("#manuscript-logo-text")}connectedCallback(){this.#e.addEventListener("click",this.#o),this.#n.addEventListener("click",this.#o)}#o(){this.dispatchEvent(new CustomEvent("click-logo",{bubbles:!1,cancelable:!1,composed:!0,detail:{data:new Date}}))}#a(){const t=window.location.href;console.log(t),/manuscript/.test(t)?window.location.assign("/manuscript"):window.location.assign("/")}}document.getElementById("page-header")||(document.body.innerHTML+='<template id="page-header">\n  <style>\n    .page-header-box {\n      --logoSize: 36px;\n\n      position: fixed;\n      width: 100vw;\n      height: 48px;\n      top: 0;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      padding: 0 8px;\n      font-size: 12px;\n      box-sizing: border-box;\n      z-index: 9999;\n      background-color: #32343d;\n      box-sizing: border-box;\n      box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.2);\n      color: #ffffff;\n    }\n\n    .manuscript-logo-box {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n    }\n\n    .manuscript-logo-img {\n      width: var(--logoSize);\n      transform: rotateY(180deg);\n      border: 1px solid #343434;\n      border-radius: 50%;\n      cursor: pointer;\n      background-color: #fff;\n    }\n\n    .manuscript-logo-text {\n      text-decoration: underline;\n      font-weight: bolder;\n      transition: all .3s ease-in-out;\n      cursor: pointer;\n      margin-left: 8px;\n    }\n\n    .manuscript-logo-text:hover {\n      color: rgb(3, 145, 98);\n    }\n\n    .page-title-box {\n      margin-left: 16px;\n      font-size: 16px;\n      font-weight: bolder;\n    }\n  </style>\n  <div class="page-header-box">\n    <div class="manuscript-logo-box">\n      <img\n        id="manuscript-logo-img"\n        class="manuscript-logo-img"\n        src="/manuscript/assets/images/writing.a59d3288.png"\n        alt="tigercheng manuscript logo"\n      />\n      <div\n        id="manuscript-logo-text"\n        class="manuscript-logo-text"\n      >JavaScript Manuscript</div>\n    </div>\n    <div class="page-title-box">\n      <slot></slot>\n    </div>\n  </div>\n</template>'),customElements.define("page-header",t),n(515),window.addEventListener("load",(function(){}))}()}();