"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[251],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(665),i=(a(9496),a(9613));const l={id:"PlaylistVideos",title:"Class: PlaylistVideos",sidebar_label:"PlaylistVideos",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"api/classes/PlaylistVideos",id:"api/classes/PlaylistVideos",title:"Class: PlaylistVideos",description:"Continuable of videos inside a Playlist",source:"@site/docs/api/classes/PlaylistVideos.md",sourceDirName:"api/classes",slug:"/api/classes/PlaylistVideos",permalink:"/docs/api/classes/PlaylistVideos",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlaylistVideos",title:"Class: PlaylistVideos",sidebar_label:"PlaylistVideos",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"PlaylistCompact",permalink:"/docs/api/classes/PlaylistCompact"},next:{title:"Reply",permalink:"/docs/api/classes/Reply"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"continuation",id:"continuation",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"items",id:"items",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"playlist",id:"playlist",level:3},{value:"Methods",id:"methods",level:2},{value:"next",id:"next",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable"},"Continuable")," of videos inside a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Playlist"},"Playlist")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const playlist = await youtube.getPlaylist(PLAYLIST_ID);\nconsole.log(playlist.videos) // first 100 videos\n\nlet newVideos = await playlist.videos.next();\nconsole.log(newVideos) // 100 loaded videos\nconsole.log(playlist.videos) // first 200 videos\n\nawait playlist.videos.next(0); // load the rest of the videos in the playlist\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,i.kt)("p",null,"How many times to load the next videos. Set 0 to load all videos (might take a while on a large playlist!)"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable"},(0,i.kt)("inlineCode",{parentName:"a"},"Continuable")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"PlaylistVideos"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"client"},"client"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"client"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Client"},(0,i.kt)("inlineCode",{parentName:"a"},"Client"))),(0,i.kt)("p",null,"An instance of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Client"},"Client")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable#client"},"client")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"continuation"},"continuation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"continuation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable#continuation"},"continuation")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"items"},"items"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"items"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),"[] = ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable#items"},"items")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"playlist"},"playlist"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"playlist"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Playlist"},(0,i.kt)("inlineCode",{parentName:"a"},"Playlist"))),(0,i.kt)("p",null,"The playlist this videos belongs to"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"next"},"next"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"next"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"count?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),"[]",">"),(0,i.kt)("p",null,"Fetch next items using continuation token"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"count")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/VideoCompact"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoCompact")),"[]",">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable"},"Continuable"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/Continuable#next"},"next")))}c.isMDXComponent=!0}}]);