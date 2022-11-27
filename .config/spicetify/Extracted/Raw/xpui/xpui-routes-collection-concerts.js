"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5835],{40771:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67892),o=n(85893);const i=({href:e,children:t,...n})=>(0,o.jsx)(a.Z,{to:e,...n,children:t})},22578:(e,t,n)=>{n.d(t,{$:()=>u});var a=n(64593),o=n(96206),i=n(69691),r=n(8341),s=n(89952),c=n(67294),l=n(51615),d=n(24183);var h=n(85893);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const u=({children:e,usePlayingItem:t})=>{let n=m(e);(e=>{const{mainLandmarkRef:t}=(0,d.Oh)(),n=(0,l.k6)(),a=n.location?.state?.preventMoveFocus,o=(0,c.useRef)(n.length<2);o.current=n.length<2,(0,c.useEffect)((()=>{const n=t.current;!a&&!o.current&&n&&e&&(n.setAttribute("aria-label",e),n.focus())}),[e,t,a])})(e);const{isPlaying:u}=(0,i.IK)(),g=(0,r.Y)((e=>e?.item));return g&&(u||t)&&((0,s.G_)(g)?n=[g.name,g.artists.map((e=>e.name)).join(o.ag.getSeparator())].join(" • "):(0,s.iw)(g)?n=[g.name,g.show.name].join(" • "):(0,s.k6)(g)&&(n=m(o.ag.get("ad-formats.advertisement")))),(0,h.jsx)(a.q,{defaultTitle:"Spotify",defer:!1,children:(0,h.jsx)("title",{children:n})})}},70369:(e,t,n)=>{n.d(t,{$:()=>a.$});var a=n(22578)},30731:(e,t,n)=>{n.d(t,{u:()=>v});var a=n(67294),o=n(94184),i=n.n(o),r=n(32667),s=n(34011),c=n(6330),l=n(40771);const d="FvfvGU3jvHRskUU9v9_8",h="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",u="GXxVAveNFStY3pBI_NO4",g="eHcXC2s97InYP7rMNT0H";var p=n(85893);const v=(0,a.memo)((function(e){const{children:t,message:n,title:a,linkTitle:o,linkTo:v,onClick:x,renderInline:j=!1}=e,{isXSOnly:f,isSMOnly:y}=(0,c.e)(),_=f||y;return(0,p.jsxs)("section",{className:i()(d,{[h]:j}),children:[t,(0,p.jsx)(r.D,{as:"h1",variant:_?"cello":"alto",className:u,children:a}),(0,p.jsx)(r.D,{variant:_?"mesto":"ballad",className:g,children:n}),o&&(v||x)&&(0,p.jsx)(s.D,{colorSet:"invertedLight",className:m,href:v,onClick:x,component:l.Z,children:o})]})}))},51915:(e,t,n)=>{n.d(t,{Z:()=>U});var a=n(67294),o=n(94184),i=n.n(o),r=n(73727),s=n(44295),c=n(39714),l=n(32667),d=n(21317),h=n(96206),m=n(87961),u=n(71518),g=n(15852);const p="mVOFnq7zSPRV_LEgGpDs",v="C27SqjLS1_s0rqa7OD7c",x="hdK8yppl_sXZMSQmtZtV",j="r81fr26QaEERPXCPrPVm",f="zwc2XkLWpR92crAJXL21",y="eIoX7T2txqK2JqzJ7cli",_="gTFbh_EVVEzUrviFjNKF",S="xVCe2YqliS5UBuqjBTDK",N="aZ5OJAP9JwXgm4pJq7UH",b="H1g1Ro1PNCH7OgfgaHkN",D="SjJTvKcJyhdrzQP74cfK",k="KsT9JzIhvL6lWg8uKQf5",C="VrqtBC4aYTinEAL4iLO7";var w=n(85893);const I="location_no_results",L="location_fetch_error",F={[I]:()=>h.ag.get("concert.error.no_locations_found_subtitle"),[L]:()=>h.ag.get("concert.error.general_error_title")},O=e=>{const t=(0,a.useRef)(null),n=(0,a.useRef)(null),[o,p]=(0,a.useState)(""),[v,O]=(0,a.useState)(-1),[U,E]=(0,a.useState)([]),[H,M]=(0,a.useState)(),{placeholder:T,onSelectLocation:Z,hideLocationSelector:G,spec:B}=e,{resultsSpec:P,inputSpec:K,clearSpec:R}=(0,a.useMemo)((()=>{if(!B)return{};const e=B.changeLocationFormFactory();return{resultsSpec:B.locationsResponseFactory(),inputSpec:e.changeLocationInputFactory(),clearSpec:e.changeLocationClearFactory()}}),[B]),$=(0,g.$P)(),A=o.trim();(0,a.useEffect)((()=>{if(O(-1),M(void 0),A.length<=1)return E([]),void(K&&$.logInteraction(K.keyStrokeUiHide()));K&&$.logInteraction(K.keyStrokeTextEdit({fieldToBeChanged:"loction"}));let e=!0;return u.LH.fetchLocationQuery(m.b.getInstance(),A).then((t=>{if(!e)return;const n=t.body.results||[];E(n),n.length?M(void 0):M(I)}),(()=>{e&&(E([]),M(L))})),()=>{e=!1}}),[K,$,A]);const z=(e,t)=>{if(Z(e),!P)return;const n=P.locationResultFactory({identifier:e.location||e.geonameId?.toString(10)||"",position:t}).hitUiHide();$.logInteraction(n)};let Q=i()(x,j);return(U&&U.length||H===I)&&(Q=x),(0,w.jsx)("div",{className:f,"data-interaction-context":"location-selector",children:(0,w.jsxs)("div",{className:y,onKeyDown:e=>{const a="ArrowUp",o="ArrowDown",i="Escape",r="Tab",s=e.key;let c=v;switch([i,o,a,r].indexOf(s)>-1&&e.preventDefault(),s){default:return;case i:return void Z(void 0);case a:c=Math.max(v-1,-1);break;case o:case r:c=Math.min(v+1,U.length-1);break;case"Enter":z(U[v],v)}if(c<0)t.current?.focus();else{const e=n.current?.childNodes[c];e&&e.focus()}O(c)},role:"searchbox",onBlur:e=>{e.relatedTarget||(p(""),G())},children:[(0,w.jsx)("div",{children:(0,w.jsxs)("div",{className:S,children:[(0,w.jsx)(s.j,{className:N,iconSize:16}),(0,w.jsx)("input",{className:_,type:"search",id:"change-location-input",placeholder:T,value:o,onChange:e=>p(e.target.value),ref:t,"aria-label":T,autoFocus:!0}),(0,w.jsx)("button",{className:Q,"aria-label":h.ag.get("search.a11y.clear-input"),onClick:()=>{p(""),R&&$.logInteraction(R.hitTextClear())},children:(0,w.jsx)(c.k,{iconSize:16})})]})}),(0,w.jsxs)("ol",{className:b,ref:n,children:[H&&(0,w.jsxs)(l.D,{as:"li",variant:"ballad",className:D,children:[(0,w.jsx)(d.l,{iconSize:16}),F[H]()]}),U&&U.length&&U.map(((e,t)=>(0,w.jsx)(l.D,{as:"li",variant:"ballad",weight:"book",className:C,tabIndex:t+1,children:(0,w.jsx)(r.rU,{to:"#",className:k,onClick:()=>z(e,t),role:"button",children:e.location})},t)))||null]})]})})},U=e=>{const{handleLocationChange:t,locationStr:n,headerSpec:o}=e,[i,r]=(0,a.useState)(!1),s=(0,a.useMemo)((()=>o?.changeLocationButtonFactory()),[o]),c=(0,a.useMemo)((()=>o?.changeLocationUiFactory({identifier:n})),[o,n]),d=(0,g.$P)();return(0,w.jsxs)("div",{className:p,children:[(0,w.jsx)(l.D,{as:"h1",variant:"alto",children:h.ag.get("concerts_shows_in")}),(0,w.jsxs)("span",{children:[i&&(0,w.jsx)(O,{placeholder:h.ag.get("concerts.input.search_placeholder"),onSelectLocation:e=>{t(e),r(!1)},hideLocationSelector:()=>r(!1),spec:c}),!i&&(0,w.jsx)(l.D,{as:"h2",variant:"alto",className:v,dir:"auto",onClick:()=>{r(!0),s&&d.logImpression(s.hitUiReveal())},role:"button",children:n})]})]})}},18170:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});n(57658);var a=n(67294),o=n(86706),i=n(51615),r=n(73012),s=n(32667),c=n(67983),l=n(96206),d=n(95888),h=n(70369),m=n(60289),u=n(59482),g=n(72907),p=(n(65732),n(26492)),v=n(29255),x=n(15852),j=n(51915),f=n(71893),y=n(25879),_=n(39714),S=n(92877),N=n(86025),b=n(84465),D=n(67892),k=n(42095);const C=e=>!!e.title&&(e.festival||!e.artists.length),w=e=>e.artists.map((e=>e.name)),I=e=>{if(C(e))return e.title;const t=w(e);return 1===t.length?l.ag.get("concert.header.upcoming_concert_title_1",...t):2===t.length?l.ag.get("concert.header.upcoming_concert_title_2",...t):3===t.length?l.ag.get("concert.header.upcoming_concert_title_3",...t):4===t.length?l.ag.get("concert.header.upcoming_concert_title_4",...t):t.length>4?l.ag.get("concert.header.upcoming_concert_title_more",...t):""},L=e=>{if(C(e))return e.title;const t=w(e);return 1===t.length?l.ag.get("concert.header.entity_title_1",...t):2===t.length?l.ag.get("concert.header.entity_title_2",...t):3===t.length?l.ag.get("concert.header.entity_title_3",...t):4===t.length?l.ag.get("concert.header.entity_title_4",...t):t.length>4?l.ag.get("concert.header.entity_title_more",...t):""},F="cELOd04or4B6BbTbNWA7",O="CHJYbX33oDik9u4n4ohH",U="woQ0wEe6FL4lsGW05bsb",E="KTDREr8pDWjrmnzXzZ2z",H="UUTvdEOH2v_rejoXdl9Z",M="cBbTozR921ppaoNZP0Uh",T="SNyyQ0t_VvlWzzB9li7v",Z="lwO4iko6mhCUgZN1s9AW",G="akvZI06vqHOow1pOL29J",B="WWZp3WM0maWJzl2qWEHE",P="YdkAHxbDekz9SiAxHG6M",K="AK37djOBJ2BuJOGuG1kQ",R="JfYURQbEA_ntMsMZV6tK",$="du0mOGaZfHg3hsHwRMIu",A="Rvzy4ltiiHIp9mvlxf0c";var z=n(85893);const Q=(0,a.memo)((e=>{const{concert:t,position:n,modalSpec:o}=e,{id:i,venue:r,location:c}=t,d=t.startDate.localDate,h=(0,k.CH)(d),m="ONLINE"===t.category,u=(0,a.useMemo)((()=>o?.eventRowFactory({position:n,uri:`spotify:concert:${t.id}`})),[o,n,t]),g=(0,x.$P)();return(0,z.jsxs)(D.r,{to:`/concert/${t.id}`,className:Z,onClick:()=>{u&&g.logInteraction(u.hitUiNavigate({destination:`/concert/${i}`}))},children:[(0,z.jsxs)("div",{className:G,"aria-hidden":!0,children:[(0,z.jsx)(s.D,{as:"h5",variant:"minuetBold",className:B,children:(0,k.jw)(h)}),(0,z.jsx)(s.D,{as:"h1",variant:"cello",className:P,children:(0,k.wf)(h)})]}),(0,z.jsxs)("div",{className:K,children:[(0,z.jsx)(s.D,{as:"div",variant:"violaBold",className:R,"data-testid":"event-title",children:L(t)}),(0,z.jsx)(y.T,{children:(0,k.jx)(h)}),(0,z.jsxs)(s.D,{as:"div",variant:"viola",className:$,children:[(0,k.FO)(h)," • ",(0,k.hK)(h)]}),(0,z.jsx)(s.D,{as:"div",variant:"viola",className:A,"data-testid":"event-venue",children:m?r:[r,c].join(l.ag.getSeparator())})]})]},t.id)})),W=(0,a.memo)((e=>{const{event:t,locationName:n,onClose:o,feedSpec:i}=e,r=t?.concerts[0]?.concert,c=r?.artists[0],d=(0,a.useMemo)((()=>i?.groupedEventModalFactory({uri:c?.uri||""})),[i,c]),h=(0,x.$P)(),m=(0,x.Wi)(d);if(!t||!r||!c)return null;const u=()=>{d&&h.logInteraction(d.closeButtonFactory().hitUiHide()),o()};return(0,z.jsx)(b.Z,{contentLabel:l.ag.get("live_events.label"),isOpen:!0,className:F,onRequestClose:u,children:(0,z.jsxs)("section",{className:O,ref:m,children:[(0,z.jsx)("div",{className:U,children:(0,z.jsx)(X,{"aria-label":l.ag.get("close"),iconOnly:_.k,buttonSize:"sm",onClick:u})}),(0,z.jsxs)("div",{className:E,children:[(0,z.jsx)(S.E,{height:"48",width:"48",className:H,src:c.imageUri}),(0,z.jsxs)("div",{className:M,children:[(0,z.jsx)(s.D,{as:"h3",variant:"cello",className:T,"data-testid":"event-venue",children:c.name}),(0,z.jsx)(s.D,{as:"h3",variant:"mesto","data-testid":"event-venue",children:`${l.ag.get("concerts.count_near_location",t.concerts.length,n)}`})]})]}),t.concerts.map(((e,t)=>(0,z.jsx)(Q,{concert:e.concert,position:t,modalSpec:d},e.concert.id)))]})})}));var X=(0,f.ZP)(N.o).withConfig({displayName:"ConcertFeedGroupedModal___StyledButtonTertiary",componentId:"sc-1o845wh-0"})({color:"#FFFFFF",backgroundColor:"#000000",cursor:"pointer"}),q=n(30731),J=n(6158),Y=n(19480),V=n(42922),ee=n(65953),te=n(40169),ne=n(43315),ae=n(74568);const oe=(0,a.memo)((e=>{const{event:t,onClick:n}=e,a=t.concerts[0].concert,o=a.artists[0],i=(0,k.CH)(a.startDate.localDate),r="online"===t.source,{venue:c,location:d}=a;return(0,z.jsxs)(D.r,{to:`/concert/${a.id}`,className:ae.Z.ConcertCard,onClick:n,children:[o.imageUri&&(0,z.jsx)(te.Z,{children:(0,z.jsx)("div",{role:"img",className:ae.Z.image,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${o.imageUri})`}})}),(0,z.jsx)("time",{className:ae.Z.date,dateTime:a.startDate.localDate,children:(0,z.jsx)(s.D,{as:"h5",variant:"minuetBold",className:ae.Z.dateMonth,children:(0,k.jx)(i)})}),(0,z.jsxs)("div",{className:ae.Z.metadata,dir:"auto",children:[(0,z.jsxs)(s.D,{as:"h2",className:ae.Z.fullDate,variant:"minuetBold",children:[(0,ne.FO)(i)," • ",(0,k.hK)(i)]}),(0,z.jsx)(s.D,{as:"h2",variant:"cello",weight:"bold",className:ae.Z.title,children:I(a)}),(0,z.jsx)("div",{className:ae.Z.locationData,children:(0,z.jsx)(s.D,{as:"h2",className:ae.Z.location,variant:"mesto","data-testid":"location-name",children:r?c:[c,d].join(l.ag.getSeparator())})})]})]})})),ie="pU4WoqT8T6PmtjPbFtK0",re="FC5Y_KFJ9rJyTpydqtOW",se="i8t3LDEorB6m_oFOBEux",ce="AAYLcavkBdCuebn9AQxT",le="lYHCmxpdReachiOORWGo",de="JtKEdtTtcK7s6EpGecaC",he="myHDa69cI5CHC8fhIhkG",me=(0,a.memo)((e=>{const{event:t,onClick:n}=e,o=(0,a.useCallback)((()=>n(t)),[t,n]),i=(0,k.CH)(t.openingDate),r=(0,k.CH)(t.closingDate),c=t.concerts[0].concert,d=c.artists[0];return(0,z.jsxs)(N.o,{onClick:o,className:ie,component:"div",role:"button",children:[d.imageUri&&(0,z.jsx)(te.Z,{children:(0,z.jsx)("div",{role:"img",className:he,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${d.imageUri})`}})}),(0,z.jsx)("time",{className:re,dateTime:i.toISOString(),children:(0,z.jsx)(s.D,{as:"h5",variant:"minuetBold",className:se,children:(0,k.Bc)(i,r)})}),(0,z.jsxs)("div",{className:ce,dir:"auto",children:[(0,z.jsx)(s.D,{as:"h2",variant:"cello",weight:"bold",className:le,children:I(c)}),(0,z.jsx)("div",{className:de,children:(0,z.jsx)(s.D,{as:"h2",variant:"mesto","data-testid":"concerts-count",children:l.ag.get("concerts.count",t.concerts.length)})})]})]})})),ue=(0,a.memo)((e=>{const{event:t,position:n,sectionSpec:o,onOpenGroupedEvent:i}=e,r=t.concerts[0]?.concert,s=r?.id,c=r&&(0,ee.g3)(r.id).toURI(),l=(0,a.useMemo)((()=>o?.eventCardFactory({identifier:s??"",position:n,uri:c??""})),[o,s,c,n]),d=(0,x.$P)(),h=e=>{i(e),l&&d.logInteraction(l.hitUiReveal())};if(t.concerts.length>1)return(0,z.jsx)(me,{event:t,onClick:h});return(0,z.jsx)(oe,{event:t,onClick:()=>{l&&d.logInteraction(l.hitUiNavigate({destination:c}))}})})),ge="MVPegsivznZB6gdkcnkH",pe="MlK79hskRbFrN2OBjMkl",ve="VxaXFH9Uq1NU0LtsVhIu",xe="UDVDNa40iTSPS9uHCG7Q",je=(0,a.memo)((e=>{const{title:t,identifier:n,position:o,events:i,feedSpec:r,onOpenGroupedEvent:s}=e,c=(0,a.useMemo)((()=>r?.eventSectionFactory({identifier:n,position:o})),[r,n,o]),l=(0,x.Wi)(c);return 0===i.length?null:(0,z.jsx)("div",{className:ge,ref:l,children:(0,z.jsx)(V.ZP,{value:"headered-grid",index:o,children:(0,z.jsx)(Y.P,{total:i.length,title:t,showAll:!0,children:i.map(((e,t)=>{const n=e.concerts[0]?.concert;return(0,z.jsx)(ue,{event:e,position:t,sectionSpec:c,onOpenGroupedEvent:s},n.id)}))})})})})),fe=(0,a.memo)((e=>{const{isLoading:t,events:n,locationName:a,spec:o,onOpenGroupedEvent:i}=e;if(t)return(0,z.jsx)(J.h,{hasError:!1,errorMessage:""});if(0===n.length)return(0,z.jsx)(q.u,{title:l.ag.get("concerts.error.no_concerts_found_title"),message:l.ag.get("concerts.error.no_concerts_found_message",a),renderInline:!0});const r=(e=>{const t={popular:[],recommended:[],online:[]};return e.forEach((e=>{switch(e.source){case"recommendation":t.recommended.push(e);break;case"popular":t.popular.push(e);break;case"online":t.online.push(e)}})),t})(n);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(je,{title:l.ag.get("concerts_upcoming_virtual_events"),identifier:"online",position:0,events:r.online,onOpenGroupedEvent:i,feedSpec:o}),(0,z.jsx)(je,{title:l.ag.get("concerts_recommended_for_you"),identifier:"recommended",position:1,events:r.recommended,onOpenGroupedEvent:i,feedSpec:o}),(0,z.jsx)(je,{title:l.ag.get("concerts_popular_near_you"),identifier:"popular",position:2,events:r.popular,onOpenGroupedEvent:i,feedSpec:o})]})}));var ye=n(88767),_e=n(87961),Se=n(42881);const Ne=e=>{const[t,{isAnonymous:n,geonameId:a}]=e.queryKey;return(async(e,t)=>{const n=e?(0,Se.getConcertsHub)(_e.b.getInstance(),void 0,t):(0,Se.getConcertsForUser)(_e.b.getInstance(),t);return(await n).body})(n,a)},be=/^(\d+)/,De=r.vI0,ke={url:"https://tickets.spotifycdn.com/partner-assets/Hub%20header%20image/Desktop%20header%20IMG.png",width:2736,height:720},Ce=(e,t)=>{if(!e)return"/concerts";const n=t?.normalize().replaceAll(/\W+/g,"-");return n?`/concerts/location/${e}-${n}`:`/concerts/location/${e}`},we=(0,a.memo)((()=>{const e=(0,i.k6)(),{isAnonymous:t}=(0,o.v9)(v.Gg),n=(()=>{const{location:e}=(0,i.UO)(),[,t]=e?.match(be)||[];if(t)try{return parseInt(t,10)}catch(e){return}})(),{data:r,isLoading:f}=(e=>{const t=(0,ye.useQueryClient)();return(0,ye.useQuery)(["concerts",e],Ne,{staleTime:6e5,keepPreviousData:!0,onSuccess(n){if(e.geonameId||!n.userLocationGeonameId)return;const a=parseInt(n.userLocationGeonameId,10),o=["concerts",{...e,geonameId:a}];t.setQueryData(o,(()=>n))}})})({isAnonymous:t,geonameId:n}),{spec:y}=(0,x.fU)(c.createDesktopLiveeventsFeedEventFactory,{}),_=(0,a.useMemo)((()=>y.headerFactory()),[y]),S=(0,p.o)(),[N,b]=(0,a.useState)();const D=r?.userLocation||l.ag.get("concerts.default_location");return(0,z.jsxs)("section",{className:pe,children:[(0,z.jsx)(h.$,{children:`${l.ag.get("concerts_shows_in")} ${D}`}),(0,z.jsxs)(m.gF,{size:m.fR.SMALL,backgroundColor:De,backgroundImages:[ke],children:[(0,z.jsx)(m.sP,{children:(0,z.jsx)(m.xd,{children:l.ag.get("live_events.label")})}),(0,z.jsx)(u.W,{children:(0,z.jsx)(g.i,{text:l.ag.get("live_events.label")})})]}),(0,z.jsxs)("div",{className:ve,children:[(0,z.jsx)(d.I,{backgroundColor:De}),(0,z.jsxs)("div",{className:xe,children:[(0,z.jsx)("div",{className:ge,"data-testid":"location-selector",children:(0,z.jsx)(j.Z,{handleLocationChange:t=>{S({type:"click",intent:"change-live-events-location"}),t?.geonameId&&e.push(Ce(t.geonameId,t.location))},locationStr:D,headerSpec:_})}),(0,z.jsx)(fe,{isLoading:f,events:r?.events||[],locationName:D,spec:y,onOpenGroupedEvent:e=>{b(e);const t=e.concerts[0]?.concert.artistUris[0];S({type:"click",intent:"open-grouped-live-event",targetUri:t})}}),(0,z.jsx)(s.D,{variant:"finale",semanticColor:"textSubdued",children:l.ag.get("live_events.disclaimer")}),(0,z.jsx)(W,{event:N,locationName:D,feedSpec:y,onClose:()=>b(void 0)})]})]})]})}))},42095:(e,t,n)=>{n.d(t,{Bc:()=>m,CH:()=>o,FO:()=>c,dC:()=>d,hK:()=>h,jw:()=>r,jx:()=>l,wf:()=>s,xE:()=>i});var a=n(96206);const o=e=>24===e.length?new Date(e.substring(0,19)):22===e.length?new Date(e.substring(0,16)):new Date(e),i=e=>a.ag.formatDate(e,{weekday:"short",month:"short",day:"numeric"}),r=e=>a.ag.formatDate(e,{month:"short"}),s=e=>a.ag.formatDate(e,{day:"numeric"}),c=e=>a.ag.formatDate(e,{weekday:"short"}),l=e=>a.ag.formatDate(e,{month:"short",day:"numeric"}),d=e=>a.ag.formatDate(e,{weekday:"short",hour:"numeric",minute:"numeric"}),h=e=>a.ag.formatDate(e,{hour:"numeric",minute:"numeric"}),m=(e,t)=>{if(e.toDateString()===t.toDateString())return i(e);if(e.getMonth()===t.getMonth()){return`${a.ag.formatDate(e,{day:"numeric",month:"short"})}–${a.ag.formatDate(t,{day:"numeric"})}`}return`${a.ag.formatDate(e,{day:"numeric",month:"short"})}–${a.ag.formatDate(t,{day:"numeric",month:"short"})}`}},6330:(e,t,n)=>{n.d(t,{e:()=>u});var a=n(62142);const o="(min-width: 0px)",i="(min-width: 0px) and (max-width: 767px)",r="(min-width: 768px)",s="(min-width: 768px) and (max-width: 1023px)",c="(min-width: 1024px)",l="(min-width: 1024px) and (max-width: 1279px)",d="(min-width: 1280px)",h="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)",u=()=>({isXS:(0,a.a)(o),isXSOnly:(0,a.a)(i),isSM:(0,a.a)(r),isSMOnly:(0,a.a)(s),isMD:(0,a.a)(c),isMDOnly:(0,a.a)(l),isLG:(0,a.a)(d),isLGOnly:(0,a.a)(h),isXL:(0,a.a)(m)})},74568:(e,t,n)=>{n.d(t,{Z:()=>a});const a={ConcertCard:"wedRUk4eiBo9n9vqXLhU",date:"HYVIJaYYiCTgSCHie70L",dateMonth:"InXSbaoh8emJn09fWs3U",metadata:"SPbe_Q1wtiZQCmo0QKUy",title:"TRp4tgG7_cymGIXDevIP",locationData:"tC1Y_nwyyly7cpIGqF5K",icon:"gY_xUHOSpAn6TPdU23t7",location:"l93AfoV_qHnMQSQBB5GK",fullDate:"MTTf1Lotynwu3QKhr9uY",image:"EkGb0ZzhswreSvpZoioY"}}}]);
//# sourceMappingURL=xpui-routes-collection-concerts.js.map