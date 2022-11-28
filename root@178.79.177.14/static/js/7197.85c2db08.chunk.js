"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[7197],{54065:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(74165),i=t(15861),a=t(15671),s=t(43144),o=t(27415),c=t(56856),d=t(72426),l=t.n(d),u=function(){function n(){(0,a.Z)(this,n)}return(0,s.Z)(n,null,[{key:"getLatestMediatheques",value:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,o.Z.get("/tenant/".concat(e,"/mediatique/"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMediathequesBasedOnType",value:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,o.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,o.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){var e=n.split("T")[0];return l()(e).format("LL")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},12860:function(n,e,t){t.d(e,{Z:function(){return o}});var r,i=t(30168),a=(t(72791),t(86538)),s=t(80184);function o(n){var e=n.title;return(0,s.jsx)(c,{children:(0,s.jsx)("header",{children:(0,s.jsx)("span",{children:e})})})}var c=a.ZP.div(r||(r=(0,i.Z)(["\n    header{\n        width: 100%;\n        margin-bottom: 1rem;\n\n        span{\n            font-size: 2.5rem;\n            text-transform: uppercase;\n            font-family: 'Bebas Neue Pro';\n            line-height: .5;\n            padding: 0;\n\n            display: flex;\n            flex-direction: row;\n            align-items: flex-end;\n            justify-content: space-between;\n\n            &:after{\n                content: '';\n                display: inline-block;\n                height: 1px;\n                flex-grow: 1;\n                background-color: red;\n            }\n        }\n    }\n\n"])))},23314:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i=t(30168),a=t(1413),s=t(29439),o=t(72791),c=t(79271),d=t(86538),l=t(54065),u=t(74165),h=t(15861),p=t(15671),m=t(43144),x=t(27415),f=t(56856),g=function(){function n(){(0,p.Z)(this,n)}return(0,m.Z)(n,null,[{key:"getTenant",value:function(){var n=(0,h.Z)((0,u.Z)().mark((function n(e){var t,r;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=f.Z.get(),n.next=3,x.Z.get("/tenant/".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),n}(),v=t(2579),j=(t(85862),t(65650)),Z=t(39126),y=t(80184);function w(n){var e=n.entity,t=n.user,r=n.userIsLoading;return(0,y.jsxs)(P,{children:[(0,y.jsx)("span",{className:"categoryBadge",children:e.type}),(0,y.jsx)("h1",{children:e.titleFR}),(0,y.jsxs)("div",{className:"data",children:[(0,y.jsxs)("div",{className:"dateAndOwner",children:[(0,y.jsxs)("span",{children:["Publi\xe9 le ",l.Z.getDate(e.createdAt)," \xe0 ",l.Z.getTime(e.createdAt)]}),(0,y.jsxs)("span",{children:["Par\xa0",r?(0,y.jsx)("span",{children:"loading..."}):(0,y.jsx)("strong",{children:t.name})]})]}),(0,y.jsxs)("div",{className:"socials",children:[(0,y.jsx)("span",{children:"Partager :"}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.k1O,{})}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.meP,{})}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.Vs6,{})}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.NQh,{})})]})]})]})}var b,N,k,P=d.ZP.section(r||(r=(0,i.Z)(["\n    .categoryBadge{\n        background: #f8d7da;\n        border-radius: 3px;\n        color: var(--dark--red);\n        padding: .4rem .5rem;\n        font-size: 12px;\n        font-family: 'Proxima Nova';\n    }\n\n    h1{\n        font-family: 'Bebas Neue Pro';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 40px;\n        line-height: 43px;\n        text-transform: uppercase;\n        color: var(--violet);\n        margin: 1rem 0;\n    }\n\n    @media (max-width: 767px){\n        width: 100%;\n        padding: 0 .5rem;\n    }\n"]))),T=t(24112),L=t(1648);function S(n){var e,t,r=n.entity,i=n.data;return(0,y.jsxs)(q,{children:[(null===(e=r.videos)||void 0===e?void 0:e.length)>0&&(0,y.jsx)(z,{children:r.videos.map((function(n){return(0,y.jsx)(T.Z,{url:n.downloadUrl,loop:!0,controls:!0,className:"hiThereMotherFucker"},n._id)}))}),(0,y.jsx)("p",{children:r.descriptionFR}),(null===(t=r.photos)||void 0===t?void 0:t.length)>0&&(0,y.jsx)(B,{children:(0,y.jsx)("section",{className:"gridSection",children:(0,y.jsx)(L.Z,{images:i,maxWidth:"100%"},0)})})]})}var I,q=d.ZP.section(b||(b=(0,i.Z)(["\n    margin: 2rem 0;\n    p{\n        text-align: justify;\n        color: var(--gray2);\n        font-family: 'Proxima Nova';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 16px;\n        line-height: 25px;\n    }\n\n    @media (max-width: 767px){\n        width: 100%;\n        padding: 0 .5rem;\n    }\n"]))),z=d.ZP.section(N||(N=(0,i.Z)(["\n    margin: 3rem 0;\n    audio{\n        height: 70px !important;\n    }\n\n    @media (max-width: 767px){\n        video{\n            width: 90% !important;\n        }\n    }\n"]))),B=d.ZP.section(k||(k=(0,i.Z)(["\n    margin-top: 1rem;\n\n    .gridSection{\n        width: 100%;\n        display: block;\n        &:before{\n            content: '( Double click to open a photo )';\n            display: block;\n            font-family: 'Proxima Nova';\n            font-style: normal;\n            font-size: 1rem;\n            margin-bottom: 1rem;\n        }\n    }\n\n    img{\n        width: 100%;\n    }\n"])));function C(n){n.userIsLoading,n.user;return(0,y.jsx)(U,{children:(0,y.jsx)("div",{className:"data",children:(0,y.jsxs)("div",{className:"socials",children:[(0,y.jsx)("span",{children:"Partager :"}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.k1O,{})}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.meP,{})}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.Vs6,{})}),(0,y.jsx)("button",{children:(0,y.jsx)(Z.NQh,{})})]})})})}var O,M,U=d.ZP.section(I||(I=(0,i.Z)(["\n    margin-top: 5rem;\n\n    @media (max-width: 767px){\n        width: 100%;\n        padding: 0 .5rem;\n    }\n"]))),A=t(91523),E=t(12860);function F(n){var e=n.type,t=(0,o.useState)([]),r=(0,s.Z)(t,2),i=r[0],a=r[1],c=(0,o.useState)(!0),d=(0,s.Z)(c,2),u=d[0],h=d[1];return(0,o.useEffect)((function(){!function(n){var e="?filter[type]=".concat(n);l.Z.getMediathequesBasedOnType(e).then((function(n){var e;null===(e=n.rows)||void 0===e||e.map((function(n){a((function(e){return e.concat(n)}))})),h(!1)}))}(e)}),[e]),(0,y.jsxs)(D,{children:[(0,y.jsx)(E.Z,{title:"publications qui peuvent vous int\xe9resser"}),u?(0,y.jsx)("section",{children:(0,y.jsx)("h4",{children:"Loading related content..."})}):(0,y.jsx)("div",{className:"gridLayout",children:null===i||void 0===i?void 0:i.map((function(n){return(0,y.jsxs)(V,{children:[n.photos.length>0?(0,y.jsx)("div",{className:"cardImage cardThumbnail",style:{backgroundImage:"url("+n.photos[0].downloadUrl+")"}}):(0,y.jsx)("div",{className:"cardImage cardThumbnail hasNoThumbnail"}),(0,y.jsxs)("div",{className:"cardContent",children:[(0,y.jsxs)("div",{className:"cardHeader",children:[(0,y.jsx)("span",{className:"categoryBadge",children:n.type}),(0,y.jsx)("span",{children:l.Z.pipeDate(n.createdAt)})]}),(0,y.jsx)(A.rU,{to:"/Mediatheque/entity/"+n._id,className:"title",children:(0,y.jsx)("span",{children:n.titleFR})})]})]},n._id)}))})]})}var _,D=d.ZP.section(O||(O=(0,i.Z)(["\n    margin: 5rem 0;\n    width: 100%;\n\n    .gridLayout{\n        margin-top: 2rem;\n        width: 100%;\n        display: grid;\n        grid-gap: 1rem;\n        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    }\n\n\n    @media (max-width: 767px){\n        width: 100%;\n        padding: 0 .5rem;\n    }\n"]))),V=d.ZP.div(M||(M=(0,i.Z)(["\n    height: 200px;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n\n    /* LEFT SECTION */\n    .cardThumbnail{\n        width: 100%;\n        height: 200px;\n        background-size: cover;\n        background-position: center;\n        position: relative;\n    }\n    .hasNoThumbnail{\n        background-image: url('https://imgur.com/N1ZiTM4.jpeg');\n    }\n    .cardImage{\n        width: 200px;\n        min-width: 200px !important;\n        height: 100%;\n        overflow: hidden;\n    }\n\n    /* LEFT SECTION */\n    .cardContent{\n        flex-grow: 1;\n        height: 100%;\n        padding-left: 1rem;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n\n        .cardHeader{\n            width: 100%;\n            display: flex;\n            justify-content: space-between;\n            font-size: 12px;\n            font-family: 'Proxima Nova';\n\n            .categoryBadge{\n                background: #f8d7da;\n                border-radius: 3px;\n                color: var(--dark--red);\n                padding: .4rem .5rem;\n                font-size: 12px;\n                font-family: 'Proxima Nova';\n            }\n        }\n\n        .title{\n            margin-top: 1.5rem;\n            color: var(--violet);\n\n            span{\n                font-family: 'Bebas Neue Pro';\n                font-style: normal;\n                font-weight: 700;\n                font-size: 23px;\n                line-height: 24px;\n            }\n        }\n    }\n"])));function R(){var n=(0,c.UO)().entity_id,e=(0,o.useState)({}),t=(0,s.Z)(e,2),r=t[0],i=t[1],d=(0,o.useState)(!0),u=(0,s.Z)(d,2),h=u[0],p=u[1],m=(0,o.useState)([]),x=(0,s.Z)(m,2),f=x[0],Z=x[1],b=(0,o.useState)({}),N=(0,s.Z)(b,2),k=N[0],P=N[1],T=(0,o.useState)(!0),L=(0,s.Z)(T,2),I=L[0],q=L[1];return(0,o.useEffect)((function(){!function(n){l.Z.getOneMediatheque(n).then((function(n){var e;i((function(e){return(0,a.Z)((0,a.Z)({},e),n)})),p(!1),null===(e=n.photos)||void 0===e||e.map((function(n){Z((function(e){return e.concat(n.downloadUrl)}))})),g.getTenant(n.tenant).then((function(n){P((function(e){return(0,a.Z)((0,a.Z)({},e),n)})),q(!1)}))}))}(n)}),[]),(0,y.jsx)("section",{children:(0,y.jsxs)("section",{className:"wideContent",children:[(0,y.jsx)(j.Z,{view:"M\xe9diath\xe9que"}),(0,y.jsx)(H,{children:(0,y.jsxs)("section",{className:"rightSection",children:[(0,y.jsx)(w,{entity:r,user:k,userIsLoading:I}),h?(0,y.jsx)(v.Z,{height:500}):(0,y.jsx)(S,{entity:r,data:f}),(0,y.jsx)(C,{userIsLoading:I,user:k})]})}),(0,y.jsx)(F,{type:r.type})]})})}var H=d.ZP.section(_||(_=(0,i.Z)(["\n  width: var(--cerntered-content);\n  height: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin: 1rem auto;\n\n    .rightSection{\n        width: 100%;\n        /* margin-right: 2.5rem; */\n\n        .socials{\n            width: 250px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n\n      button {\n        background-color: transparent;\n        border-radius: 50%;\n        color: var(--violet);\n        font-size: 1.8rem;\n      }\n    }\n\n    @media (max-width: 767px){\n        width: 100%; \n    }\n"])))},65650:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(30168),a=(t(72791),t(86538)),s=t(91523),o=t(80184);function c(n){var e,t=n.view;return(0,o.jsx)("div",{children:(0,o.jsxs)(d,{children:[(0,o.jsx)(s.rU,{to:"/",className:"homeLinkInBC",children:"Accueil"})," ",(0,o.jsxs)("span",{className:"currentView",children:["/ ",(e=t,e.charAt(0).toUpperCase()+e.slice(1))]})]})})}var d=a.ZP.div(r||(r=(0,i.Z)(['\n  margin: 0.7rem 0;\n  font-size: "1rem";\n  font-family: "Proxima Nova";\n\n  .currentView {\n    color: var(--gray3);\n  }\n\n  .homeLinkInBC {\n    text-decoration: none;\n    color: var(--gray2);\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n'])))}}]);
//# sourceMappingURL=7197.85c2db08.chunk.js.map