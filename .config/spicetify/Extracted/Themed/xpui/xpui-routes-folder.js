"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9124],{40771:(e,i,r)=>{r.d(i,{Z:()=>a});var n=r(67892),s=r(85893);const a=({href:e,children:i,...r})=>(0,s.jsx)(n.Z,{to:e,...r,children:i})},56170:(e,i,r)=>{r.d(i,{P:()=>l});var n=r(67294),s=r(36590),a=r(8498),t=r(85893);const l=(0,n.memo)((function({index:e}){return(0,t.jsx)(s.C,{index:e,headerText:"",uri:"",renderCardImage:()=>(0,t.jsx)(a.x,{images:[]}),featureIdentifier:"unknown"})}))},22578:(e,i,r)=>{r.d(i,{$:()=>h});var n=r(64593),s=r(96206),a=r(69691),t=r(8341),l=r(89952),d=r(67294),o=r(51615),c=r(24183);var m=r(85893);function x(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const h=({children:e,usePlayingItem:i})=>{let r=x(e);(e=>{const{mainLandmarkRef:i}=(0,c.Oh)(),r=(0,o.k6)(),n=r.location?.state?.preventMoveFocus,s=(0,d.useRef)(r.length<2);s.current=r.length<2,(0,d.useEffect)((()=>{const r=i.current;!n&&!s.current&&r&&e&&(r.setAttribute("aria-label",e),r.focus())}),[e,i,n])})(e);const{isPlaying:h}=(0,a.IK)(),f=(0,t.Y)((e=>e?.item));return f&&(h||i)&&((0,l.G_)(f)?r=[f.name,f.artists.map((e=>e.name)).join(s.ag.getSeparator())].join(" • "):(0,l.iw)(f)?r=[f.name,f.show.name].join(" • "):(0,l.k6)(f)&&(r=x(s.ag.get("ad-formats.advertisement")))),(0,m.jsx)(n.q,{defaultTitle:"Spotify",defer:!1,children:(0,m.jsx)("title",{children:r})})}},70369:(e,i,r)=>{r.d(i,{$:()=>n.$});var n=r(22578)},30731:(e,i,r)=>{r.d(i,{u:()=>p});var n=r(67294),s=r(94184),a=r.n(s),t=r(32667),l=r(34011),d=r(6330),o=r(40771);const c="FvfvGU3jvHRskUU9v9_8",m="Q9AlbZn2EGzy3MTWXa8X",x="mxmxS0y8LiwSs5nueKPT",h="GXxVAveNFStY3pBI_NO4",f="eHcXC2s97InYP7rMNT0H";var u=r(85893);const p=(0,n.memo)((function(e){const{children:i,message:r,title:n,linkTitle:s,linkTo:p,onClick:g,renderInline:j=!1}=e,{isXSOnly:y,isSMOnly:v}=(0,d.e)(),P=y||v;return(0,u.jsxs)("section",{className:a()(c,{[m]:j}),children:[i,(0,u.jsx)(t.D,{as:"h1",variant:P?"cello":"alto",className:h,children:n}),(0,u.jsx)(t.D,{variant:P?"mesto":"ballad",className:f,children:r}),s&&(p||g)&&(0,u.jsx)(l.D,{colorSet:"invertedLight",className:x,href:p,onClick:g,component:o.Z,children:s})]})}))},7819:(e,i,r)=>{r.r(i),r.d(i,{default:()=>R});var n=r(67294),s=r(86706),a=r(51615),t=r(69518),l=r.n(t),d=r(96206),o=r(46309),c=r(70369),m=r(30731),x=r(6158),h=r(56170),f=r(32667),u=r(68378),p=r(36590),g=r(8498),j=r(42781),y=r(85893);const v=({folder:e,index:i})=>{const r=e.items.filter((e=>e.type===j.p.PLAYLIST)).length,n=e.items.filter((e=>"folder"===e.type)).length;return(0,y.jsx)(p.C,{uri:e.uri,index:i,featureIdentifier:"folder",headerText:e.name,renderSubHeaderContent:()=>(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(f.D,{variant:"mesto",children:[d.ag.get("web-player.folder.playlists",r),","," ",d.ag.get("web-player.folder.folders",n)]})}),renderCardImage:()=>(0,y.jsx)(g.x,{FallbackComponent:e=>(0,y.jsx)(u.P,{iconSize:64,...e})}),isPlayable:!1})};var P=r(67892);const w="YJMECPbMHWgMUs8RFdcV",b="rbLspqGazxdY3fuaxvkM",k="_odE2h85itP7mBz2_vUR",N="x49I_IPmWNCLnUJSw28O",S=({folderName:e,folderUri:i})=>(0,y.jsxs)("div",{className:k,children:[(0,y.jsx)(u.P,{className:N}),(0,y.jsx)(P.Z,{to:i,children:(0,y.jsx)(f.D,{variant:"canon",children:e})})]});var I=r(48817),U=r(42922);const C=({folder:e,isFolder:i,isPlaylist:r})=>{const n=(e,n)=>i(e)?(0,y.jsx)(v,{folder:e,index:n}):r(e)?(0,y.jsx)(o.Z,{index:n,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner.displayName,isPlayable:e.totalLength>0}):(0,y.jsx)(h.P,{index:n});return(0,y.jsxs)("div",{children:[(0,y.jsx)(S,{folderName:e.name,folderUri:e.uri}),(0,y.jsx)(I.T,{render:()=>e.items.map(((e,i)=>(0,y.jsx)(U.ZP,{value:"card",index:i,children:n(e,i)},e.uri)))})]})};var L=r(84242),M=r(99013),F=r(18270),T=r(55120);const O=({folderUri:e,hasPlaylists:i,onClick:r,playing:n,supportsFolderPlayback:s})=>(0,y.jsx)(F.o,{children:(0,y.jsx)(F.F,{children:s&&(0,y.jsx)(T.$,{onClick:r,isPlaying:n,size:"lg",disabled:!i,uri:e})})});var Z=r(60289),D=r(59482),G=r(72907);const X=({folderName:e,folderUri:i})=>(0,y.jsxs)(Z.gF,{children:[(0,y.jsx)(D.W,{children:(0,y.jsx)(G.i,{text:e,dragUri:i,dragLabel:e})}),(0,y.jsxs)(Z.sP,{children:[(0,y.jsx)(Z.dy,{small:!0,uppercase:!0,children:d.ag.get("folder.title")}),(0,y.jsx)(Z.xd,{dragUri:i,dragLabel:e,children:e})]})]}),_=e=>{const{id:i}=e,r=(0,s.v9)((({session:e})=>e?.user?.id))||null,a=l().folderURI(r,i).toURI(),t=(0,M.C)({folderUri:a,decorateImagesAndOwner:!0}),h=(0,s.v9)((e=>e.platform.isDesktop)),{isPlaying:f,togglePlay:u}=(0,L.n)({uri:a},{featureIdentifier:"folder"}),p=e=>e.type===j.p.PLAYLIST,g=e=>"folder"===e.type,v=(0,n.useMemo)((()=>t?t.items.filter(p):[]),[t]),P=(0,n.useMemo)((()=>t?t.items.filter(g):[]),[t]),k=v.length>0||P.length>0;return t?(0,y.jsxs)("section",{className:w,children:[(0,y.jsx)(c.$,{children:d.ag.get("playlist.page-title",t.name)}),(0,y.jsx)(X,{folderName:t.name,folderUri:a}),(0,y.jsx)(O,{supportsFolderPlayback:h,onClick:()=>u(),playing:f,hasPlaylists:k,folderUri:a}),(0,y.jsx)("div",{className:"contentSpacing",children:k?(0,y.jsx)(U.ZP,{value:"EntitiesGrid",children:(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)(I.T,{render:()=>v.map(((e,i)=>(0,y.jsx)(U.ZP,{value:"card",index:i,children:(0,y.jsx)(o.Z,{index:i,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner.displayName,isPlayable:e.totalLength>0})},e.uri)))}),P.map((e=>(0,y.jsx)(C,{folder:e,isPlaylist:p,isFolder:g},e.uri)))]})}):(0,y.jsx)(m.u,{title:d.ag.get("folder.empty.title"),message:d.ag.get("folder.empty.subtitle"),renderInline:!0})})]}):(0,y.jsx)(x.h,{hasError:!1,errorMessage:d.ag.get("error.generic")})},R=(0,n.memo)((function(){const{folderId:e}=(0,a.UO)();return(0,y.jsx)(_,{id:e})}))},6330:(e,i,r)=>{r.d(i,{e:()=>h});var n=r(62142);const s="(min-width: 0px)",a="(min-width: 0px) and (max-width: 767px)",t="(min-width: 768px)",l="(min-width: 768px) and (max-width: 1023px)",d="(min-width: 1024px)",o="(min-width: 1024px) and (max-width: 1279px)",c="(min-width: 1280px)",m="(min-width: 1280px) and (max-width: 1919px)",x="(min-width: 1920px)",h=()=>({isXS:(0,n.a)(s),isXSOnly:(0,n.a)(a),isSM:(0,n.a)(t),isSMOnly:(0,n.a)(l),isMD:(0,n.a)(d),isMDOnly:(0,n.a)(o),isLG:(0,n.a)(c),isLGOnly:(0,n.a)(m),isXL:(0,n.a)(x)})}}]);
//# sourceMappingURL=xpui-routes-folder.js.map