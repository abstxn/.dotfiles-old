"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1997],{99737:(e,a,i)=>{i.d(a,{z:()=>d});var n=i(3634),r=i(89477),s=i(51216),t=i(46309),u=i(95332),l=i(42781),c=i(143),o=i(85893);function d(e,a){switch(e.type){case l.p.ALBUM:return(0,o.jsx)(n.r,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:a},e.uri);case l.p.ARTIST:return(0,o.jsx)(r.I,{uri:e.uri,name:e.name,images:e.images,index:a},e.uri);case l.p.SHOW:return(0,o.jsx)(u._,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:c.E.UNKNOWN,index:a},e.uri);case l.p.AUDIOBOOK:return(0,o.jsx)(s.c,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:a},e.uri);case l.p.PLAYLIST:return(0,o.jsx)(t.Z,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:a},e.uri);default:return null}}},3305:(e,a,i)=>{i.r(a),i.d(a,{default:()=>h});var n=i(94184),r=i.n(n),s=i(96206),t=i(99737),u=i(19480),l=i(42922),c=i(73743);const o="GIPNS6CX3VGw43hv6CQv";var d=i(85893);function m(){const{hasError:e,items:a}=(0,c.G)();return e?null:(0,d.jsx)("div",{className:r()(o,"contentSpacing"),children:(0,d.jsx)(l.JL,{value:"headered-grid",children:(0,d.jsx)(u.P,{title:s.ag.get("music_downloads"),total:a.length,seeAllUri:"/collection/music-downloads",alwaysShowSeeAll:!0,children:a.map(((e,a)=>(0,d.jsx)(l.JL,{value:"card",index:a,children:(0,t.z)(e,a)},e.uri)))})})})}const h=m},73743:(e,a,i)=>{i.d(a,{G:()=>s});var n=i(67294),r=i(41825);function s(){const e=(0,r.t)(),[a,i]=(0,n.useState)(!0),[s,t]=(0,n.useState)(!1),[u,l]=(0,n.useState)([]);return(0,n.useEffect)((()=>{(async()=>{try{const a=await e.getDownloads();l(a)}catch(e){t(!0)}finally{i(!1)}})()}),[e]),{isLoading:a,hasError:s,items:u}}}}]);
//# sourceMappingURL=xpui-routes-offline-browse.js.map