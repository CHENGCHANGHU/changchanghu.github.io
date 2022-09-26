!function(){var e={91:function(e,t,n){"use strict";function r(e){const{tag:t,text:n,html:o,children:a,attributes:i,events:s}=e,l=document.createElement(t);return o&&(l.innerHTML=o),n&&(l.innerText=n),i&&Object.keys(i).forEach((e=>{"classes"===e?l.className=i[e].join(" "):l.setAttribute(e,i[e])})),s&&Object.keys(s).forEach((t=>{l.addEventListener(t,s[t].bind(e))})),a&&a.forEach((e=>l.appendChild(r(e)))),l}function o(e){if(!e)return;if(e instanceof HTMLElement)return e;if(Array.isArray(e))return e.map((e=>o(e)));const{tag:t,text:n,html:r,children:a,attributes:i,events:s}=e;if(!t)return document.createElement("template");let l=null;return l=["svg","path"].includes(t)?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t),r&&(l.innerHTML=r),(n||0===n||""===n)&&(l.innerText=n),i&&Object.keys(i).forEach((e=>{"classes"===e&&Array.isArray(i[e])?l.className=i[e].join(" "):l.setAttribute("classes"===e?"class":e,i[e])})),s&&Object.keys(s).forEach((t=>{l.addEventListener(t,s[t].bind(e))})),a&&l.append(...a.filter(Boolean).map(o)),l}function a({tag:e,text:t,html:n,parent:o,children:a,attributes:i}){o&&o.appendChild(r({tag:e,text:t,html:n,children:a,attributes:i}))}function i({tag:e,text:t,attributes:n}){return`<${e}${n?" "+Object.keys(n).map((e=>"classes"===e?`class="${n[e].join(" ")}"`:`${e}="${n[e]}"`)).join(" "):""}">${t}</${e}>`}function s(e){const t=new Map;if(!t.has(e)){const n=document.getElementById(e);if(!n)return null;t.set(e,n)}return t.get(e)}function l(e,t,n){const r=e.getAttribute("style")||"";new RegExp(`${t}`,"g").test(r)?e.setAttribute("style",r.replaceAll(new RegExp(`(${t}: )[\\w\\.]+(;)`,"g"),`$1${n}$2`)):e.setAttribute("style",`${r} ${t}: ${n};`)}n.r(t),n.d(t,{getElement:function(){return r},createElement:function(){return o},appendElement:function(){return a},elementString:function(){return i},id:function(){return s},setInlineStyle:function(){return l}})},515:function(e,t,n){const{createElement:r}=n(91);function o(e){return e.replace(/<(?!(\/?(p|pre|code|div|strong|em|table|thead|tbody|th|tr|td)))/g,"&lt;").replace(/(?<!(p|pre|code|div|strong|em|table|thead|tbody|th|tr|td))>/g,"&gt;").replace(/^(.*)\*\*(.+)\*\*(.*)$/g,((e,t,n,r)=>`${t}<strong>${n}</strong>${r}`)).replace(/^(.*)\*(.+)\*(.*)$/g,((e,t,n,r)=>`${t}<i>${n}</i>${r}`)).replace(/(?<!\\)`([^`]+)(?<!\\)`/g,((e,t)=>`<code>${t}</code>`)).replace(/^([^\[]*)\[(.*)\]\((.*)\)(.*)$/g,((e,t,n,r,o)=>`${t}<a href="${r}" target="_blank">${n}</a>${o}`))}const a={tag:"style",text:"\n    [data-markdown-heading='h1'] {\n      padding: 32px 0 16px 0;\n    }\n\n    [data-markdown-heading='h2'] {\n      padding: 16px 0 8px 0;\n    }\n\n    [data-markdown-heading='h2'] {\n      padding: 8px 0 8px 0;\n    }\n    \n    p {\n      margin: 8px 0 8px 0;\n    }\n\n    [data-markdown-block-quotes='block-quotes'] {\n      margin-left: var(--indent);\n      margin-top: 8px;\n      margin-bottom: 8px;\n      padding: 4px 16px;\n      border-left: 8px solid #ccc;\n      background-color: #efefef;\n    }\n    \n    table, th,\n    [data-markdown-td='td'] {\n      border: 1px solid #343434;\n    }\n    \n    table {\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin: 8px 0 8px 0;\n    }\n    \n    tr:nth-child(1) {\n      background-color: #dedede;\n      font-weight: 700;\n    }\n    \n    th, td {\n      padding: 4px 8px;\n    }\n    \n    a {\n      color: seagreen;\n    }\n\n    code {\n      display: inline-block;\n      border: 1px solid #d1d1d1;\n      padding: 0 2px;\n      border-radius: 4px;\n      background-color: #e1e1e1;\n    }        \n  "};e.exports=function(e,t={indent:16}){const n=[];let i=0,s="",l=!1;e.replace(/\\r\\n/g,"\n");for(let t of e)l?(n.push(s),n.push("\n"),s="",i++,l=!1):"\r"!==e[i]||"\n"!==e[i+1]?"\n"!==t&&"\r"!==t?(s+=t,i++):(n.push(s),n.push("\n"),s="",i++):(l=!0,i++);n.push(s);const d=n.reduce((({options:e,lastNodeType:t,status:n},r,a)=>{let i=null;if((i=r.match(/^(\s*)```([^`]*)$/))&&"code-block-start"!==t)return e.push({tag:"div",attributes:{classes:`code-block-index-${a}`,style:`--indent: ${16*i[1].length}px`,"data-code-type":i[2],"data-code-block-index":a},children:[{tag:"pre",text:"",attributes:{classes:`code-block-index-${a}-line-box`}},{tag:"pre",text:"",attributes:{classes:`code-block-index-${a}-code-box`}}]}),{options:e,lastNodeType:"code-block-start",status:{skipNextLine:!0}};if((i=r.match(/^(\s*)```(\s*)$/))&&"code-block-start"===t){const t=e.at(-1),n=t.attributes["data-code-block-index"];return t.children.push({tag:"style",text:`\n            .code-block-index-${n} {\n              display: flex;\n              flex-flow: row nowrap;\n              column-gap: 4px;\n              padding: 8px 16px;\n              border-radius: 4px;\n              background-color: #aaa;\n              box-sizing: border-box;\n              max-height: 400px;\n              overflow-y: auto;\n            }\n            .code-block-index-${n}-line-box,\n            .code-block-index-${n}-code-box {\n              color: #ccc;\n              font-family: monospace;\n              white-space: pre;\n              line-height: 14px;\n              padding: 4px 0;\n              line-height: 1.2;\n            }\n            .code-block-index-${n}-line-box {\n              color: #343434;\n              text-align: right;\n            }\n            .code-block-index-${n}-code-box {\n              flex: 1;\n              height: 100%;\n              padding-left: 4px;\n              border-radius: 4px;\n              background-color: #222;\n            }\n          `}),{options:e,lastNodeType:"code-block-end"}}if("code-block-start"===t){if(n&&n.skipNextLine)return{options:e,lastNodeType:"code-block-start"};const{attributes:{"data-code-block-index":t},children:[o,i]}=e.at(-1);return"\n"!==r&&(o.text+=(a-t-2)/2+":\n"),i.text+=r,{options:e,lastNodeType:"code-block-start"}}if(""===r)return e.push({tag:"div",text:"",attributes:{"data-markdown-split-line":"split-line"}}),{options:e,lastNodeType:"split"};if(i=r.match(/^(#+) (.+?)$/))return e.push({tag:`h${i[1].length}`,html:o(i[2].trim()),attributes:{"data-markdown-heading":`h${i[1].length}`}}),{options:e,lastNodeType:"heading"};if(i=r.match(/^(\s*)(>+) (.+?)$/)){const n=e[e.length-1];return"quote"===t&&i[1].length===n.attributes["data-indent"]?n.html+="<br>"+o(i[3].trim()):e.push({tag:"p",html:o(i[3].trim()),attributes:{style:`--indent: ${16*i[1].length}px`,"data-indent":i[1].length,"data-markdown-block-quotes":"block-quotes"}}),{options:e,lastNodeType:"quote"}}if(i=r.match("tablerow"===t?/^(\|[^\|]*)+\|$/:/^(\|[^\|]+)+\|$/)){const n=e[e.length-1];let i=0;"tablerow"===t&&(i=n.children[0].children.length);const s=r.slice(1,r.length-1).split("|").map(((e,t)=>{const n={"data-row-index":i,"data-col-index":t,rowspan:1,colspan:1};return e=e.replace(/(.*)(?<! )\(-(\d+)\)(.*)/,((e,t,r,o)=>(n.colspan=parseInt(r),`${t}${o}`))).replace(/(.*)(?<! )\(=(\d+)\)(.*)/,((e,t,r,o)=>(n.rowspan=parseInt(r),`${t}${o}`))),n["data-row-span"]=n.rowspan,n["data-col-span"]=n.colspan,{tag:"td",html:o(e.trim()),attributes:{"data-markdown-td":"td",...n}}}));if(s.reduce(((e,t)=>(t.attributes["data-col-index"]=e,e+t.attributes["data-col-span"])),0),n&&n.tableRowShadow&&(n.tableRowShadow=n.tableRowShadow.filter((e=>i<e.rowIndex+e.rowSpan)),n.tableRowShadow.forEach((e=>{s.filter((t=>t.attributes["data-col-index"]>=e.colIndex)).forEach((t=>t.attributes["data-col-index"]+=e.colSpan))}))),"tablerow"!==t){const t=s.filter((e=>e.attributes["data-row-span"]>1)).map((({attributes:{"data-row-index":e,"data-col-index":t,"data-row-span":n,"data-col-span":r}})=>({rowIndex:e,colIndex:t,rowSpan:n,colSpan:r}))),n=Math.max(t.reduce(((e,t)=>Math.max(e,t.rowSpan)),0),1);return e.push({tag:"table",attributes:{classes:`table-index-${a}`,"data-markdown-table-index":a},children:[{tag:"tbody",children:[{tag:"tr",children:s}]},{tag:"style",text:`.table-index-${a} tr:nth-child(-n+${n}) td { font-weight: 500; background-color: #dedede; }`}],tableRowShadow:t}),{options:e,lastNodeType:"tablerow"}}if(/^[\|:\-]+$/.test(r)){const t=r.slice(1,r.length-1).split("|").map(((e,t)=>/^:\-+:$/.test(e)?`[data-markdown-table-index='${n.attributes["data-markdown-table-index"]}'] td[data-col-index='${t}'] { text-align: center; }`:/^\-+:$/.test(e)?`[data-markdown-table-index='${n.attributes["data-markdown-table-index"]}'] td[data-col-index='${t}'] { text-align: right; }`:"")).join(" ");return n.children.push({tag:"style",text:t}),{options:e,lastNodeType:"tablerow"}}return n.tableRowShadow.push(...s.filter((e=>e.attributes["data-row-span"]>1)).map((({attributes:{"data-row-index":e,"data-col-index":t,"data-row-span":n,"data-col-span":r}})=>({rowIndex:e,colIndex:t,rowSpan:n,colSpan:r})))),n.children[0].children.push({tag:"tr",children:s}),{options:e,lastNodeType:"tablerow"}}return(i=r.match(/^[\*\-_]{3,}$/))?(e.push({tag:"hr"}),{options:e,lastNodeType:"horizontal-rule"}):(i=r.match(/^(\s*)\- (.*)$/))?(e.push({tag:"li",html:o(i[2].trim()),attributes:{style:`--indent: ${16*i[1].length}px`}}),{options:e,lastNodeType:"list-item"}):(i=r.match(/^(\s*)([^<>\n]+)$/))?(e.push({tag:"p",html:o(i[2].trim()),attributes:{style:`--indent: ${16*i[1].length}px`}}),{options:e,lastNodeType:"paragraph"}):"\n"!==r?(e.push({tag:"p",html:o(r.trim())}),{options:e,lastNodeType:"paragraph"}):{options:e,lastNodeType:t}}),{options:[a],lastNodeType:"",status:{}}).options;return console.log(d),d.map(r)}},530:function(e){function t(e,t){return e<<t|e>>>32-t}function n(...e){return e.reduce(((e,t)=>e+t&4294967295),0)}function r(e,t,n,r){return 0<=e&&e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function o(e){return 0<=e&&e<20?1518500249:e<40?1859775393:e<60?2400959708:3395469782}function a(e){return("00000000"+e).slice(-8)}e.exports=function(e){let i=function(e){let t=[];for(let n of e){const e=n.codePointAt(0);e<=127?t.push(e):e<=2047?(t.push(192|e>>>6),t.push(128|63&e)):e<=65535?(t.push(224|e>>>12),t.push(128|e>>>6&63),t.push(128|63&e)):e<=1114111?(t.push(240|e>>>18),t.push(128|e>>>12&63),t.push(128|e>>>6&63),t.push(128|63&e)):e<=67108863?(t.push(248|e>>>24),t.push(128|e>>>18&63),t.push(128|e>>>12&63),t.push(128|e>>>6&63),t.push(128|63&e)):e<=2147483647&&(t.push(252|e>>>30),t.push(128|e>>>24&63),t.push(128|e>>>18&63),t.push(128|e>>>12&63),t.push(128|e>>>6&63),t.push(128|63&e))}return t}(e),s=8*i.length;const l=[];for(;i.length>=64;)l.push(i.slice(0,64)),i=i.slice(64);if(i.length<=55)for(i.push(128);i.length<64;)i.push(0);else{for(i.push(128);i.length<64;)i.push(0);l.push(i.slice(0,64)),i=new Array(64).fill(0)}let d=0;for(;s>0;)i[64-++d]=255&s,s>>>=8;l.push(i);let c=1732584193,h=4023233417,p=2562383102,u=271733878,x=3285377520;for(;l.length;){let e=l.shift();const a=[];for(;e.length;)a.push(e.slice(0,4).reduce(((e,t)=>e<<8|t),0)),e=e.slice(4);for(let e=16;e<80;e++)a[e]=t(a[e-3]^a[e-8]^a[e-14]^a[e-16],1);let i=c,s=h,d=p,g=u,b=x;for(let e=0;e<80;e++){const l=n(t(i,5),r(e,s,d,g),b,a[e],o(e));b=g,g=d,d=t(s,30),s=i,i=l}c=n(c,i),h=n(h,s),p=n(p,d),u=n(u,g),x=n(x,b)}return a((c>>>0).toString(16))+a((h>>>0).toString(16))+a((p>>>0).toString(16))+a((u>>>0).toString(16))+a((x>>>0).toString(16))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";class e extends HTMLElement{#e=null;#t=null;#n=null;constructor(){super(),this.#e=this.attachShadow({mode:"closed"}),this.#e.appendChild(document.getElementById("page-header").content.cloneNode(!0)),this.#t=this.#e.querySelector("#manuscript-logo-img"),this.#n=this.#e.querySelector("#manuscript-logo-text")}connectedCallback(){this.#t.addEventListener("click",this.#r),this.#n.addEventListener("click",this.#r)}#r(){this.dispatchEvent(new CustomEvent("click-logo",{bubbles:!1,cancelable:!1,composed:!0,detail:{data:new Date}}))}#o(){const e=window.location.href;console.log(e),/manuscript/.test(e)?window.location.assign("/manuscript"):window.location.assign("/")}}document.getElementById("page-header")||(document.body.innerHTML+='<template id="page-header">\r\n  <style>\r\n    .page-header-box {\r\n      --logoSize: 36px;\r\n\r\n      position: fixed;\r\n      width: 100vw;\r\n      height: 48px;\r\n      top: 0;\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n      padding: 0 8px;\r\n      font-size: 12px;\r\n      box-sizing: border-box;\r\n      z-index: 9999;\r\n      background-color: #32343d;\r\n      box-sizing: border-box;\r\n      box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.2);\r\n      color: #ffffff;\r\n    }\r\n\r\n    .manuscript-logo-box {\r\n      display: flex;\r\n      flex-flow: row nowrap;\r\n      align-items: center;\r\n    }\r\n\r\n    .manuscript-logo-img {\r\n      width: var(--logoSize);\r\n      transform: rotateY(180deg);\r\n      border: 1px solid #343434;\r\n      border-radius: 50%;\r\n      cursor: pointer;\r\n      background-color: #fff;\r\n    }\r\n\r\n    .manuscript-logo-text {\r\n      text-decoration: underline;\r\n      font-weight: bolder;\r\n      transition: all .3s ease-in-out;\r\n      cursor: pointer;\r\n      margin-left: 8px;\r\n    }\r\n\r\n    .manuscript-logo-text:hover {\r\n      color: rgb(3, 145, 98);\r\n    }\r\n\r\n    .page-title-box {\r\n      margin-left: 16px;\r\n      font-size: 16px;\r\n      font-weight: bolder;\r\n    }\r\n  </style>\r\n  <div class="page-header-box">\r\n    <div class="manuscript-logo-box">\r\n      <img\r\n        id="manuscript-logo-img"\r\n        class="manuscript-logo-img"\r\n        src="/assets/images/writing.a59d3288.png"\r\n        alt="tigercheng manuscript logo"\r\n      />\r\n      <div\r\n        id="manuscript-logo-text"\r\n        class="manuscript-logo-text"\r\n      >JavaScript Manuscript</div>\r\n    </div>\r\n    <div class="page-title-box">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>'),customElements.define("page-header",e);var t=n(91);class r extends HTMLElement{#a=null;#i=null;#s=null;#l="";#d="";#c="";#h="";#p="";static get observedAttributes(){return["rows","cols","resize","placeholder"]}#u(e,t){this.#d=parseInt(t),this.#s.setAttribute("rows",this.#d)}#x(e,t){this.#c=parseInt(t),this.#s.setAttribute("cols",this.#c)}#g(e,n){this.#h=n,(0,t.setInlineStyle)(this.#s,"resize",this.#h)}#b(e,t){this.#p=t,this.#s.setAttribute("placeholder",this.#p)}#f(e){return()=>{this.dispatchEvent(new CustomEvent("e-textarea-input",{bubbles:!1,cancelable:!1,composed:!0,detail:{data:this.#s.value}}))}}setData(e){this.#s.value=e}clearData(){this.#s.value=""}constructor(){super(),this.#a=this.attachShadow({mode:"closed"}),this.#a.appendChild((0,t.id)("e-textarea-template").content.cloneNode(!0)),this.#i=this.#a.querySelector("#e-textarea-box"),this.#s=this.#a.querySelector("#textarea"),this.#s.addEventListener("input",(e=>this.#f(e)()))}attributeChangedCallback(e,t,n){switch(console.log("[attributeChangedCallback]"),e){case"rows":this.#u(t,n);break;case"cols":this.#x(t,n);break;case"resize":this.#g(t,n);break;case"placeholder":this.#b(t,n)}}connectedCallback(){console.log("[connectedCallback]"),this.#c||(0,t.setInlineStyle)(this.#s,"width","100%")}}(0,t.id)("e-textarea-templat")||(document.body.innerHTML+='<template id="e-textarea-template">\r\n  <style>\r\n    * {\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n    .e-textarea-box {\r\n      /* padding: 8px; */\r\n    }\r\n    textarea {\r\n      padding: 8px;\r\n      border: 1px solid #343434;\r\n      border-radius: 4px;\r\n      outline: none;\r\n      box-sizing: border-box;\r\n    }\r\n    textarea:focus {\r\n      border-color: rgb(72, 128, 248);\r\n      outline: 2px solid rgb(206, 218, 246);\r\n      outline-offset: 0px;\r\n    }\r\n  </style>\r\n  <div id="e-textarea-box" class="e-textarea-box">\r\n    <textarea part="textarea" name="" id="textarea" cols="50" rows="5"></textarea>\r\n  </div>\r\n</template>'),customElements.define("e-textarea",r);var o=n(530),a=n.n(o),i=n(515),s=n.n(i);window.addEventListener("load",(function(){(0,t.id)("message-textarea").addEventListener("e-textarea-input",(e=>{e.detail.data?(0,t.id)("message-digest-textarea").setData(a()(e.detail.data)):(0,t.id)("message-digest-textarea").setData("")})),(0,t.id)("introduction-box").append(...s()("# Secure Hash Algorithm in JavaScript (SHA1)\r\n\r\n## Basic\r\n\r\nFor a message of length < 2^64 bits, the SHA-1 produces a 160-bit condensed representation of the message called a message digest.\r\n\r\n> 18446744073709551616 bits (2**64 = 1 << 64) Integer left shift in js does not exceed 32\r\n> -> 536870912 Bytes (2**61 = 1 << 61)\r\n> -> 524288 KB (2**51 = 1 << 51)\r\n> -> 512 MB (2**41 = 1 << 41)\r\n\r\n- A hex digit is the representation of a 4-bit string.\r\n\r\n- A word equals a 32-bit string which may be represented as a sequence of 8 hex digits.\r\n\r\n- An integer between 0 and 1 << 32 - 1 inclusive may be represented as a word.\r\n\r\n- A block (512-bit string) may be represented as a sequence of 16 words.\r\n\r\n## Operation on Words (A Word 32 Bits)\r\n\r\n### 1. Bitwise Operation Based on Word\r\n\r\n- bitwise and: &\r\n\r\n- bitwise or: |\r\n\r\n- bitwise xor: ^\r\n\r\n- bitwise complete: ~ Negate plus one\r\n\r\n> a & (a - 1) === 0: a is an integer power of 2\r\n\r\n### 2. Plus X + Y\r\n\r\nThe operation X + Y is defined as follows: words X and Y represent integers x and y.\r\n\r\nThen z = (x + y) mod 232. Convert z to a word, Z, and define Z = X + Y.\r\n\r\n> 0 <= x,y,z < 1 << 32\r\n\r\n### 3. Circular left shift operation\r\n\r\ncirLeftShift(X, n) = (X << n) or (X >> (32 - n))\r\n\r\n> X << n is obtained as follows: discard the left-most n bits of X and then pad the result with n zeroes on the right (the result will still be 32 bits).\r\n\r\n> X >> n is obtained by discarding the right-most n bits of X and then padding the result with n zeroes on the left.\r\n\r\n> cirLeftShift(X, n) is equivalent to a circular shift of X by n positions to the left.\r\n\r\n## Get binary of js string\r\n\r\nThe conversion between characters and their binary is realized through `codePointAt` and `String.fromCodePoint`.\r\n\r\n> `charCodeAt` returns a number between 0 and 65535, which represents a code unit of UTF-16. Codes exceeding 65535 are obtained using `codePointAt`.\r\n\r\n> `String.fromCharCode` is the reverse operation of the above process. It obtains the corresponding UTF-8 encoded characters from numbers. `String.fromCodePoint` is also the conversion of characters beyond the UTF-16 encoding range.\r\n\r\nSince a UTF-16 encoded character may be concatenated from multiple bytes, you need to use `**let...of**` to loop through the characters of the string instead of using the string index to get the character.\r\n\r\n```js\r\nconsole.log('𐀀'.charCodeAt(0));\r\n// 55296\r\nconsole.log('𐀀'.codePointAt(0));\r\n// 65536\r\n\r\nlet utf16String = '';\r\nfor (let i = 65536; i < 65546; i++)\r\n  utf16String += String.fromCodePoint(i);\r\n\r\nconsole.log(utf16String);\r\n// 𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉\r\nconsole.log(utf16String.length);\r\n// 20\r\nconsole.log(utf16String[0]);\r\n// �\r\nfor (let char of utf16String) \r\n  console.log(char, char.codePointAt(0));\r\n// 𐀀 65536\r\n// 𐀁 65537\r\n// 𐀂 65538\r\n// 𐀃 65539\r\n// 𐀄 65540\r\n// 𐀅 65541\r\n// 𐀆 65542\r\n// 𐀇 65543\r\n// 𐀈 65544\r\n// 𐀉 65545\r\nconsole.log(utf16String.split(''));\r\n// [\r\n//   '�', '�', '�', '�', '�',\r\n//   '�', '�', '�', '�', '�',\r\n//   '�', '�', '�', '�', '�',\r\n//   '�', '�', '�', '�', '�'\r\n// ]\r\n```\r\n\r\nASCii code uses one byte of 8-bit binary to encode one character, which can encode 128 kinds of characters (the first bit is 0), and the encoding of characters in other languages with more than 127 characters requires longer bytes. Unicode (Universal Multiple-Octet Coded Character Set) encoding encodes the characters of each language to obtain a unique encoding. For the storage of unicode, it is difficult for the computer to identify whether it is a multi-byte encoding or a single-byte ASCii encoding. If the ASCii encoding is uniformly extended, it will lead to a great waste of storage space, and different unicode implementation methods have been born. UTF-8 is a common implementation of unicode encoding used in the Internet. It is a variable-length encoding method that uses 1-6 bytes to represent characters according to different symbols.\r\n\r\nEncoding rules for utf-8:\r\n\r\n- 1）For single-byte encoded characters, the first bit is 0, and the last seven bits are the unicode encoding of the character. (For characters up to 128, utf-8 encoding is the same as ASCii encoding)\r\n\r\n- 2）For multi-byte encoded characters, such as n-byte characters, the first n bits of the first byte are 1, the n+1 bits are 0, the first two bits of the subsequent bytes are 10, and the spare binary bits are filled with the character's unicode encoding.\r\n\r\nunicode encoding and utf-8 encoding comparison table\r\n\r\n|unicode Coding Range (hex)|utf-8 Encoding (binary)|\r\n|:-:|--:|\r\n|0000 0000 - 0000 007F|0xxxxxxx|\r\n|0000 0080 - 0000 07FF|110xxxxx 10xxxxxx|\r\n|0000 0800 - 0000 FFFF|1110xxxx 10xxxxxx 10xxxxxx|\r\n|0001 0000 - 0010 FFFF|11110xxx 10xxxxxx 10xxxxxx 10xxxxxx|\r\n|0020 0000 - 03FF FFFF|111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx|\r\n|0400 0000 - 7FFF FFFF|1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx|\r\n\r\n## Reference\r\n\r\n> [SECURE HASH STANDARD](https://cis.temple.edu/~giorgio/cis307/readings/sha1.html)\r\n\r\n> [online sha1](https://crypot.51strive.com/sha1.html)\r\n\r\n> [js-sha1](https://github.com/emn178/js-sha1)\r\n\r\n> [Secure Hash Algorithms](https://brilliant.org/wiki/secure-hashing-algorithms/)\r\n\r\n> [JS SHA1 Example](https://blog.csdn.net/qq_40147863/article/details/88034357)\r\n"))}))}()}();