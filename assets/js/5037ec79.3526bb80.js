"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[407],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(t),u=l,c=h["".concat(o,".").concat(u)]||h[u]||d[u]||i;return t?a.createElement(c,r(r({ref:n},m),{},{components:t})):a.createElement(c,r({ref:n},m))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(665),l=(t(9496),t(9613));const i={id:"Channel",title:"Class: Channel",sidebar_label:"Channel",sidebar_position:0,custom_edit_url:null},r=void 0,s={unversionedId:"api/classes/Channel",id:"api/classes/Channel",title:"Class: Channel",description:"Represents a Youtube Channel",source:"@site/docs/api/classes/Channel.md",sourceDirName:"api/classes",slug:"/api/classes/Channel",permalink:"/docs/api/classes/Channel",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Channel",title:"Class: Channel",sidebar_label:"Channel",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"BaseVideo",permalink:"/docs/api/classes/BaseVideo"},next:{title:"ChannelPlaylists",permalink:"/docs/api/classes/ChannelPlaylists"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"banner",id:"banner",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"client",id:"client",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"id",id:"id",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"mobileBanner",id:"mobilebanner",level:3},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"name",id:"name",level:3},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"playlists",id:"playlists",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"shelves",id:"shelves",level:3},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"subscriberCount",id:"subscribercount",level:3},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"thumbnails",id:"thumbnails",level:3},{value:"Implementation of",id:"implementation-of-7",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"tvBanner",id:"tvbanner",level:3},{value:"Implementation of",id:"implementation-of-8",level:4},{value:"videoCount",id:"videocount",level:3},{value:"Implementation of",id:"implementation-of-9",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"videos",id:"videos",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Accessors",id:"accessors",level:2},{value:"url",id:"url",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-8",level:4}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents a Youtube Channel"),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseChannel"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Channel"))))),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ChannelProperties"))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"banner"},"banner"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"banner"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/Thumbnails"},(0,l.kt)("inlineCode",{parentName:"a"},"Thumbnails"))),(0,l.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.banner"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"client"},"client"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"client"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/Client"},(0,l.kt)("inlineCode",{parentName:"a"},"Client"))),(0,l.kt)("p",null,"An instance of ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/Client"},"Client")),(0,l.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.client"),(0,l.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#client"},"client")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"id"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.id"),(0,l.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#id"},"id")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mobilebanner"},"mobileBanner"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"mobileBanner"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/Thumbnails"},(0,l.kt)("inlineCode",{parentName:"a"},"Thumbnails"))),(0,l.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.mobileBanner"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"name"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The channel's name"),(0,l.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.name"),(0,l.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#name"},"name")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"playlists"},"playlists"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"playlists"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/ChannelPlaylists"},(0,l.kt)("inlineCode",{parentName:"a"},"ChannelPlaylists"))),(0,l.kt)("p",null,"Continuable of playlists"),(0,l.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#playlists"},"playlists")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shelves"},"shelves"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"shelves"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Shelf"},(0,l.kt)("inlineCode",{parentName:"a"},"Shelf")),"[] = ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")),(0,l.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.shelves"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"subscribercount"},"subscriberCount"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"subscriberCount"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"How many subscriber does this channel have,"),(0,l.kt)("p",null,"This is not the exact amount, but a literal string like ",(0,l.kt)("inlineCode",{parentName:"p"},'"1.95M subscribers"')),(0,l.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.subscriberCount"),(0,l.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#subscribercount"},"subscriberCount")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbnails"},"thumbnails"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"thumbnails"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/Thumbnails"},(0,l.kt)("inlineCode",{parentName:"a"},"Thumbnails"))),(0,l.kt)("p",null,"Thumbnails of this Channel"),(0,l.kt)("h4",{id:"implementation-of-7"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.thumbnails"),(0,l.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#thumbnails"},"thumbnails")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tvbanner"},"tvBanner"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"tvBanner"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/Thumbnails"},(0,l.kt)("inlineCode",{parentName:"a"},"Thumbnails"))),(0,l.kt)("h4",{id:"implementation-of-8"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.tvBanner"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"videocount"},"videoCount"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"videoCount"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"How many video does this channel have"),(0,l.kt)("h4",{id:"implementation-of-9"},"Implementation of"),(0,l.kt)("p",null,"ChannelProperties.videoCount"),(0,l.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#videocount"},"videoCount")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"videos"},"videos"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"videos"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/ChannelVideos"},(0,l.kt)("inlineCode",{parentName:"a"},"ChannelVideos"))),(0,l.kt)("p",null,"Continuable of videos"),(0,l.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel"},"BaseChannel"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/BaseChannel#videos"},"videos")),(0,l.kt)("h2",{id:"accessors"},"Accessors"),(0,l.kt)("h3",{id:"url"},"url"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"url"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The URL of the channel page"),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,l.kt)("p",null,"BaseChannel.url"))}d.isMDXComponent=!0}}]);