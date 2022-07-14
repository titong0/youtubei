"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[651],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(665),a=(n(9496),n(9613));const i={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/"},o=void 0,l={unversionedId:"quickstart",id:"quickstart",title:"Quick Start",description:"Installation",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/"},sidebar:"sidebars",next:{title:"Snippets & FAQ",permalink:"/docs/snippets-faq"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Read Client API",id:"read-client-api",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i youtubei\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { Client } = require("youtubei");\n// or for TS / ES6\nimport { Client } from "youtubei";\n\nconst youtube = new Client();\n\n(async () => {\n    const result = await youtube.search("Never gonna give you up", {\n        type: "video", // video | playlist | channel | all\n    });\n\n    console.log(result.items);\n})();\n')),(0,a.kt)("h2",{id:"read-client-api"},"Read Client API"),(0,a.kt)("p",null,"You can read the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," API here: ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/client"},(0,a.kt)("inlineCode",{parentName:"a"},"api/classes/Client"))))}p.isMDXComponent=!0}}]);