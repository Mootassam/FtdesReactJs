"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2432],{54065:function(n,e,t){t.d(e,{Z:function(){return h}});var i=t(74165),r=t(15861),a=t(15671),o=t(43144),s=t(27415),c=t(56856),l=t(72426),d=t.n(l),h=function(){function n(){(0,a.Z)(this,n)}return(0,o.Z)(n,null,[{key:"getLatestMediatheques",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,s.Z.get("/tenant/".concat(e,"/mediatique/"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMediathequesBasedOnType",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,s.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,s.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){var e=n.split("T")[0];return d()(e).format("LL")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},69752:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var i=t(72791),r=t(65650),a=t(80184);function o(){return(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"contentContainer",children:(0,a.jsxs)("section",{className:"wideContent",children:[(0,a.jsx)("h1",{children:"M\xe9diath\xe8ques"}),(0,a.jsx)(r.Z,{view:"M\xe9diath\xe8ques"})]})})})}var s,c,l,d=t(29439),h=t(54065),p=t(30168),u=t(86538),m=u.ZP.section(s||(s=(0,p.Z)(["\n  color: #fff;\n  height: auto;\n\n  .bottomGrid {\n    height: 704px;\n    width: 100%;\n    padding-top: calc(704px - 450px);\n    border-top: 5px solid red;\n    background-color: var(--violet-dark);\n    position: relative;\n    top: -200px;\n\n    .loaderPlaceholder {\n      width: var(--cerntered-content);\n      margin: auto;\n      height: 330px;\n\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n\n      .customLoader {\n        width: 350px;\n      }\n    }\n  }\n\n  .splideContent {\n    width: var(--cerntered-content);\n    height: 507px;\n    margin: auto;\n    background-color: transparent;\n    position: relative;\n    z-index: 4;\n  }\n\n  @media (max-width: 767px){\n    height: auto;\n    .bottomGrid{\n      padding-top: 1rem;\n      height: auto;\n    }\n\n    .splideContent{\n      width: 100%;\n      height: 210px;\n      /* overflow: hidden; */\n    }\n  }\n"]))),x=u.ZP.section(c||(c=(0,p.Z)(["\n    header{\n        margin-bottom: 3rem;\n\n        h1{\n            width: 100%;\n            font-size: 2rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: flex-end;\n            color: #fff;\n            line-height: .7;\n\n            &:after{\n                content: '';\n                display: inline-block;\n                flex-grow: 1;\n                height: 1px;\n                background-color: red;\n            }\n        }\n    }\n\n    main{\n        width: 100%;\n        position: relative;\n\n        /* STYLING THE SPLIDE ARROWS ! */\n        .splide__arrow{\n            height: 35px;\n            width: 35px;\n            position: absolute;\n            top: -80px;\n\n            background-color: transparent;\n            border: 1px solid var(--gray3);\n            border-radius: .2rem;\n\n            svg{\n                fill: #fff;\n            }\n        }\n        button{\n            &:nth-child(1){\n                position: relative;\n                float: right;\n                margin-right: 1rem;\n            }\n        }\n        \n        .VerticlPlayer{\n            width: 270px !important;\n            height: 330px !important;\n            overflow: hidden;\n\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n\n            .cardThumbnail{\n                width: 100%;\n                height: 200px;\n                background-size: cover;\n                background-position: center;\n            }\n            .hasNoThumbnail{\n                background-image: url('https://imgur.com/N1ZiTM4.jpeg');\n            }\n\n            .dateAndType{\n                height: 30px;\n                color: #fff;\n\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n\n                span{\n                    color: #fff;\n                }\n\n                .contentType{\n                    width: 100px;\n                    border: 1px solid red;\n                    border-radius: .5rem;\n                    height: 30px;\n\n                    font-family: 'Proxima Nova';\n                    font-style: normal;\n                    font-weight: 400;\n                    font-size: 1rem;\n                    line-height: 15px;\n                    color: red;\n                    padding: .3rem .5rem;\n                    \n                    display: flex;\n                    align-items: center;\n                    justify-content: space-evenly;\n\n                    .icon{\n                        margin-right: 5px;\n                    }\n                }\n\n                .contentDate{\n                    color: rgba(255, 255, 255, 1);\n                    font-size: 1.2rem;\n                }\n            }\n\n            .verticalPlayerTitle{\n                height: 70px;\n\n                span{\n                    width: 100%;\n\n                    font-family: 'Proxima Nova';\n                    text-transform: capitalize !important;\n                    line-height: 1.5;\n                    font-weight: 700;\n                    font-size: 1rem;\n                    color: #fff !important;\n                }\n            }\n        }\n    }\n\n\n    @media (max-width: 767px){\n        padding: 1rem .5rem;\n        header{\n            h1{\n                font-size: 1.6rem;\n            }\n        }\n        main{\n            padding: 0;\n            .splide__arrow{\n                display: none;\n            }\n        }\n    }\n"]))),f=t(82535),g=t(48282),v=(t(78677),t(76053)),j=t(40071),y=t(39126),b=t(7692);function w(n){var e,t=n.data;return(0,a.jsx)(x,{children:(0,a.jsxs)("section",{className:"wideContent",children:[(0,a.jsx)("header",{children:(0,a.jsx)("h1",{children:"A LA UNE"})}),(0,a.jsx)("main",{children:(0,a.jsx)(g.tv,{options:{gap:".5rem",perPage:1,pagination:!1,wheel:!0},children:null===(e=t.rows)||void 0===e?void 0:e.map((function(n){var e;return(0,a.jsxs)(g.jw,{className:"VerticlPlayer",children:[null!==(e=n.photos)&&void 0!==e&&e.length?(0,a.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+n.photos[0].downloadUrl+")"},children:(0,a.jsx)(f.Z,{data:n,entity:""})}):(0,a.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,a.jsx)(f.Z,{data:n,entity:""})}),(0,a.jsxs)("div",{className:"dateAndType",children:[(0,a.jsxs)("div",{className:"contentType",children:[{documentaire:(0,a.jsx)(v.hIq,{className:"icon"}),podcast:(0,a.jsx)(b.dxk,{className:"icon"}),videos:(0,a.jsx)(j._DQ,{className:"icon"}),autres:(0,a.jsx)(y.BB5,{className:"icon"})}[n.type],"autres"===n.type?"photos":n.type]}),(0,a.jsx)("span",{className:"contentDate",children:h.Z.pipeDate(n.updatedAt)})]}),(0,a.jsx)("div",{className:"verticalPlayerTitle",children:(0,a.jsx)("span",{children:n.titleFR})})]},n._id)}))})})]})})}var Z=u.ZP.section(l||(l=(0,p.Z)(["\n    /* color: #fff; */\n    width: var(--cerntered-content);\n    height: 507px;\n    background-color: #000;\n    \n    .splide{\n        /* position: relative; */\n        /* background-color: yellow; */\n\n        .splide__pagination__page{\n            height: 7px;\n            width: 7px;\n            border-radius: 0;\n        }\n\n        .splide__arrow{\n            height: 35px;\n            width: 35px;\n            position: absolute;\n            bottom: 0;\n\n            background-color: rgba(255, 255, 255, .3);\n            border: 1px solid var(--gray3);\n            border-radius: .2rem;\n\n            svg{\n                fill: #fff;\n            }\n        }\n    }\n\n    .horizontalPlayer{\n        width: 100% !important;\n        height: 507px;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        background-size: cover;\n        background-position: center;\n\n        section{\n            display: flex;\n            align-items: center;\n\n            .cardThumbnail{\n                width: 500px !important;\n                height: 350px;\n                background-size: cover;\n                background-position: center;\n                margin-right: 2rem;\n                filter: drop-shadow(0px 9px 14px rgba(0, 0, 0, 0.1));\n            }\n            .hasNoThumbnail{\n                background-image: url('https://imgur.com/N1ZiTM4.jpeg');\n            }\n\n            .textContent{\n                width: 450px;\n                font-family: 'Bebas Neue Pro';\n                line-height: 1.2;\n                text-align: left;\n                color: #fff;\n\n                .horizontalPlayerTitle{\n                    font-size: 3rem;\n                }\n            }\n\n            .dateAndType{\n                display: block;\n                margin-bottom: 2rem;\n\n                span{\n                    color: #fff;\n                }\n\n                .contentType{\n                    width: 100px;\n                    height: 30px;\n                    border: 1px solid red;\n                    border-radius: .5rem;\n                    margin-bottom: 1rem;\n                    font-family: 'Proxima Nova';\n                    font-style: normal;\n                    font-weight: 400;\n                    font-size: 1rem;\n                    line-height: 15px;\n                    color: red;\n                    padding: .3rem .5rem;\n                    \n                    display: flex;\n                    align-items: center;\n                    justify-content: space-evenly;\n\n                    .icon{\n                        margin-right: 5px;\n                    }\n                }\n\n                .contentDate{\n                    display: block;\n                    color: rgba(255, 255, 255, 1) !important;\n                    font-size: 1.2rem;\n                }\n            }\n        }\n    }\n\n\n    @media (max-width: 767px){\n        display: none;\n    }\n"]))),N=t(85880),T=t(78820),k=t(14651),P=t(72426),z=t.n(P);function L(n){var e=n.data,t=function(n){var e=n.split("T")[0];return z()(e).format("LL")};return(0,a.jsx)(Z,{children:(0,a.jsx)(g.tv,{options:{perPage:1,pagination:!0,wheel:!1},className:"splide",children:null===e||void 0===e?void 0:e.map((function(n){var e,i;return(0,a.jsx)(g.jw,{className:"horizontalPlayer",style:{background:"linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url("+(null===(e=n.photos[0])||void 0===e?void 0:e.downloadUrl)+")"},children:(0,a.jsxs)("section",{children:[null!==(i=n.photos)&&void 0!==i&&i.length?(0,a.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+n.photos[0].downloadUrl+")"},children:(0,a.jsx)(f.Z,{data:n,entity:"main"})}):(0,a.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,a.jsx)(f.Z,{data:n,entity:"main"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"dateAndType",children:[(0,a.jsxs)("div",{className:"contentType",children:[{Texte:(0,a.jsx)(v.hIq,{className:"icon"}),audio:(0,a.jsx)(b.dxk,{className:"icon"}),videos:(0,a.jsx)(j._DQ,{className:"icon"}),"lien web":(0,a.jsx)(N.cU6,{className:"icon"}),photo:(0,a.jsx)(y.BB5,{className:"icon"}),infographie:(0,a.jsx)(k.mMd,{className:"icon"}),statistiques:(0,a.jsx)(b.s2C,{className:"icon"}),autres:(0,a.jsx)(T.KEm,{className:"icon"})}[n.type],n.type]}),(0,a.jsx)("span",{className:"contentDate",children:t(n.updatedAt)})]}),(0,a.jsxs)("div",{className:"textContent",children:[(0,a.jsx)("div",{className:"horizontalPlayerTitle",children:n.titleFR}),(0,a.jsx)("div",{className:"horizontalPlayerDescription",children:n.descriptionFR})]})]})]})},n._id)}))})})}var C,S=t(2579);t(85862);function _(){var n=(0,i.useState)([]),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,i.useState)([]),s=(0,d.Z)(o,2),c=s[0],l=s[1],p=(0,i.useState)(!0),u=(0,d.Z)(p,2),x=u[0],f=u[1],g=function(){h.Z.getLatestMediatheques().then((function(n){r(n),function(n,e,t){var i;null===(i=n.rows)||void 0===i||i.map((function(n,i){i<e&&"hot"===t&&l((function(e){return e.concat(n)}))}))}(n,3,"hot"),f(!1)}))};return(0,i.useEffect)((function(){g()}),[]),(0,a.jsxs)(m,{children:[(0,a.jsx)("section",{className:"splideContent",children:x?(0,a.jsx)(S.Z,{height:507}):(0,a.jsx)("section",{children:c.length>0?(0,a.jsx)(L,{data:c}):(0,a.jsx)("h2",{children:"No data"})})}),(0,a.jsx)("section",{className:"bottomGrid",children:x?(0,a.jsxs)("div",{className:"loaderPlaceholder",children:[(0,a.jsx)(S.Z,{height:350,className:"customLoader"}),(0,a.jsx)(S.Z,{height:350,className:"customLoader"}),(0,a.jsx)(S.Z,{height:350,className:"customLoader"})]}):(0,a.jsx)("section",{children:c.length>0?(0,a.jsx)(w,{data:t}):(0,a.jsx)("h2",{style:{textAlign:"center",color:"#fff"},children:"No data"})})})]})}var A,q=u.ZP.section(C||(C=(0,p.Z)(["\n    width: 100%;\n    \n    .grid{\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(270px, 1rem));\n        grid-gap: 1rem;\n    }\n"]))),D=t(12860),M=t(33594);function R(n){var e=n.videosList;return(0,a.jsxs)(q,{children:[(0,a.jsx)(D.Z,{title:"vid\xe9os"}),(0,a.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,a.jsx)(M.Z,{dataSource:n},n._id)}))})]})}function E(n){var e=n.photosList;return(0,a.jsxs)(q,{children:[(0,a.jsx)(D.Z,{title:"photos"}),(0,a.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,a.jsx)(M.Z,{dataSource:n},n._id)}))})]})}function U(n){var e=n.dataSource;return(0,a.jsxs)(B,{className:"videoCardVertical",children:[(0,a.jsxs)("div",{className:"dateAndType",children:[(0,a.jsxs)("div",{className:"contentType",children:[(0,a.jsx)(b.dxk,{className:"icon"}),e.type]}),(0,a.jsx)("span",{className:"contentDate",children:function(n){var e=n.split("T")[0];return z()(e).format("LL")}(e.updatedAt)})]}),(0,a.jsx)("div",{className:"verticalPlayerTitle",children:(0,a.jsx)("span",{style:{textTransform:"lowercase"},children:e.titleFR})})]},e._id)}var I,B=u.ZP.div(A||(A=(0,p.Z)(["\n    position: relative;\n    height: auto;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    .dateAndType{\n        height: 30px;\n        color: #fff;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        span{\n            color: #fff;\n        }\n\n        .contentType{\n            width: 100px;\n            border: 1px solid red;\n            border-radius: .5rem;\n            height: 30px;\n\n            font-family: 'Proxima Nova';\n            font-style: normal;\n            font-weight: 400;\n            font-size: 1rem;\n            text-transform: capitalize;\n            line-height: 15px;\n            color: red;\n            padding: .3rem .5rem;\n            \n            display: flex;\n            align-items: center;\n            justify-content: space-evenly;\n\n            .icon{\n                margin-right: 5px;\n            }\n        }\n\n        .contentDate{\n            color: rgba(122, 122, 122, 1);\n            font-size: 12px;\n            font-family: 'Proxima Nova';\n        }\n    }\n\n    .verticalPlayerTitle{\n        margin-top: 1rem;\n        height: 70px;\n\n        span{\n            width: 100%;\n            font-family: 'Proxima Nova';\n            text-transform: capitalize !important;\n            line-height: 1.5;\n            font-weight: bold;\n            font-size: 16px;\n            color: var(--violet);\n\n            overflow:hidden;\n            display:inline-block;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n    }\n"])));function F(n){var e=n.podcastList;return(0,a.jsxs)(q,{children:[(0,a.jsx)(D.Z,{title:"podcasts"}),(0,a.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,a.jsx)(U,{dataSource:n},n._id)}))})]})}function G(n){var e,t=n.dataSource;return(0,a.jsx)(V,{children:(null===(e=t.photos)||void 0===e?void 0:e.length)>0?(0,a.jsx)("div",{className:"cardThumbnail",style:{background:"linear-gradient(180deg, rgba(43, 40, 64, 0) 30.73%, rgba(43, 40, 64, 0.7) 100%), url("+t.photos[0].downloadUrl+")",backgroundSize:"cover",backgroundPosition:"center"},children:(0,a.jsx)("div",{className:"cardTitle",children:(0,a.jsx)("span",{style:{textTransform:"lowercase"},children:t.titleFR})})}):(0,a.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,a.jsx)("div",{className:"cardTitle",children:(0,a.jsx)("span",{style:{textTransform:"lowercase"},children:t.titleFR})})})})}var V=u.ZP.div(I||(I=(0,p.Z)(["\n    height: 200px !important;\n    \n    .cardThumbnail{\n        width: 100%;\n        height: 200px;\n        padding: 1rem;\n        display: flex;\n        align-items: flex-end;\n    }\n    .hasNoThumbnail{\n        background: linear-gradient(180deg, rgba(43, 40, 64, 0) 30.73%, rgba(43, 40, 64, 0.7) 100%), url('https://imgur.com/N1ZiTM4.jpeg');\n        background-size: cover;\n        background-position: center;\n    }\n\n\n    .cardTitle{\n        span{\n            width: 100%;\n            font-family: 'Proxima Nova';\n            text-transform: capitalize !important;\n            line-height: 1.5;\n            font-weight: 400;\n            font-size: 1.2rem;\n            color: #E7E3FF;\n\n            /* overflow:hidden;\n            display:inline-block;\n            text-overflow: ellipsis;\n            white-space: nowrap; */\n        }\n    }\n"])));function O(n){var e=n.docstList;return(0,a.jsxs)(q,{children:[(0,a.jsx)(D.Z,{title:"documentaire"}),(0,a.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,a.jsx)(G,{dataSource:n},n._id)}))})]})}var Q,H=t(91523);function K(n){var e=n.contentType;return(0,a.jsx)(Y,{children:(0,a.jsx)(H.rU,{to:"/Mediatheque/type/"+e,children:(0,a.jsxs)("span",{children:["voir plus de ",e]})})})}var W,Y=u.ZP.div(Q||(Q=(0,p.Z)(["\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n    width: 100%;\n    text-align: center;\n    span{\n        font-family: 'Proxima Nova';\n        font-size: 1rem;\n        font-weight: thin;\n        text-decoration-line: underline;\n        text-transform: uppercase;\n        color: #E1011A !important;\n    }\n"])));function J(){var n=(0,i.useState)([]),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,i.useState)(!0),s=(0,d.Z)(o,2),c=s[0],l=s[1],p=(0,i.useState)([]),u=(0,d.Z)(p,2),m=u[0],x=u[1],f=(0,i.useState)(!0),g=(0,d.Z)(f,2),v=g[0],j=g[1],y=(0,i.useState)([]),b=(0,d.Z)(y,2),w=b[0],Z=b[1],N=(0,i.useState)(!0),T=(0,d.Z)(N,2),k=T[0],P=T[1],z=(0,i.useState)([]),L=(0,d.Z)(z,2),C=L[0],_=L[1],A=(0,i.useState)(!0),q=(0,d.Z)(A,2),D=q[0],M=q[1];return(0,i.useEffect)((function(){!function(){var n=0,e=0,t=0,i=0;h.Z.getLatestMediatheques().then((function(a){var o;null===(o=a.rows)||void 0===o||o.map((function(a,o){"videos"===a.type&&n<8&&(r((function(n){return n.concat(a)})),n+=1),"autres"===a.type&&t<8&&(x((function(n){return n.concat(a)})),t+=1),"podcast"===a.type&&e<2&&(Z((function(n){return n.concat(a)})),e+=1),"documentaire"===a.type&&i<2&&(_((function(n){return n.concat(a)})),i+=1)})),l(!1),j(!1),P(!1),M(!1)}))}()}),[]),(0,a.jsxs)(X,{children:[(0,a.jsxs)("section",{className:"mainContentLeftSection",children:[c?(0,a.jsx)(S.Z,{height:300}):(0,a.jsx)("section",{children:t.length>0?(0,a.jsxs)("section",{children:[(0,a.jsx)(R,{videosList:t}),(0,a.jsx)(K,{contentType:"videos"})]}):(0,a.jsx)("h2",{children:"No videos were found"})}),v?(0,a.jsx)(S.Z,{height:300}):(0,a.jsx)("section",{children:m.length>0?(0,a.jsxs)("section",{children:[(0,a.jsx)(E,{photosList:m}),(0,a.jsx)(K,{contentType:"photos"})]}):(0,a.jsx)("h2",{children:"No photos were found"})})]}),(0,a.jsxs)("section",{className:"mainContentRightSection",children:[D?(0,a.jsx)(S.Z,{height:300}):(0,a.jsx)("section",{children:C.length>0?(0,a.jsxs)("section",{children:[(0,a.jsx)(O,{docstList:C}),(0,a.jsx)(K,{contentType:"documentaires"})]}):(0,a.jsx)("h2",{children:"No Docs were found"})}),k?(0,a.jsx)(S.Z,{height:300}):(0,a.jsx)("section",{children:w.length>0?(0,a.jsxs)("section",{children:[(0,a.jsx)(F,{podcastList:w}),(0,a.jsx)(K,{contentType:"podcasts"})]}):(0,a.jsx)("h2",{children:"No podcasts were found"})})]})]})}var X=u.ZP.section(W||(W=(0,p.Z)(["\n    margin: 1rem auto;\n    width: var(--cerntered-content);\n    min-height: 200px;\n    position: relative;\n    top: -180px;\n\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n\n    .mainContentRightSection{\n        width: 350px !important;\n        margin-left: 2rem;\n    }\n    \n    .mainContentLeftSection{\n        width: 100%;\n    }\n\n    @media (max-width: 767px){\n        display: block;\n        width: 100%;\n        padding: 0 .5rem;\n\n        .mainContentRightSection{\n            width: 100% !important;\n            padding: 0;\n            margin: 0;\n        }\n        .mainContentLeftSection{\n            width: 100%;\n            display: grid;\n            grid-gap: 1rem;\n        }\n    }\n"])));var $=function(){return(0,a.jsxs)("section",{children:[(0,a.jsx)(o,{}),(0,a.jsx)(_,{}),(0,a.jsx)(J,{})]})}},12860:function(n,e,t){t.d(e,{Z:function(){return s}});var i,r=t(30168),a=(t(72791),t(86538)),o=t(80184);function s(n){var e=n.title;return(0,o.jsx)(c,{children:(0,o.jsx)("header",{children:(0,o.jsx)("span",{children:e})})})}var c=a.ZP.div(i||(i=(0,r.Z)(["\n    header{\n        width: 100%;\n        margin-bottom: 1rem;\n\n        span{\n            font-size: 2.5rem;\n            text-transform: uppercase;\n            font-family: 'Bebas Neue Pro';\n            line-height: .5;\n            padding: 0;\n\n            display: flex;\n            flex-direction: row;\n            align-items: flex-end;\n            justify-content: space-between;\n\n            &:after{\n                content: '';\n                display: inline-block;\n                height: 1px;\n                flex-grow: 1;\n                background-color: red;\n            }\n        }\n    }\n\n"])))},33594:function(n,e,t){t.d(e,{Z:function(){return h}});var i,r=t(30168),a=(t(72791),t(86538)),o=t(82535),s=t(72426),c=t.n(s),l=t(40071),d=t(80184);function h(n){var e,t=n.dataSource;return(0,d.jsxs)(p,{className:"videoCardVertical",children:[(null===(e=t.photos)||void 0===e?void 0:e.length)>0?(0,d.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+t.photos[0].downloadUrl+")"},children:(0,d.jsx)(o.Z,{data:t,entity:"mainGridPlayer"})}):(0,d.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,d.jsx)(o.Z,{data:t,entity:"mainGridPlayer"})}),(0,d.jsxs)("div",{className:"dateAndType",children:[(0,d.jsxs)("div",{className:"contentType",children:[(0,d.jsx)(l._DQ,{className:"icon"}),t.type]}),(0,d.jsx)("span",{className:"contentDate",children:function(n){var e=n.split("T")[0];return c()(e).format("LL")}(t.updatedAt)})]}),(0,d.jsx)("div",{className:"verticalPlayerTitle",children:(0,d.jsx)("span",{children:t.titleFR})})]},t._id)}var p=a.ZP.div(i||(i=(0,r.Z)(["\n    position: relative;\n    height: 330px !important;\n    overflow: hidden;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    .cardThumbnail{\n        width: 100%;\n        height: 200px;\n        background-size: cover;\n        background-position: center;\n        position: relative;\n    }\n    .hasNoThumbnail{\n        background-image: url('https://imgur.com/N1ZiTM4.jpeg');\n    }\n\n    .dateAndType{\n        height: 30px;\n        color: #fff;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        span{\n            color: #fff;\n        }\n\n        .contentType{\n            width: 100px;\n            border: 1px solid red;\n            border-radius: .5rem;\n            height: 30px;\n\n            font-family: 'Proxima Nova';\n            font-style: normal;\n            font-weight: 400;\n            font-size: 1rem;\n            line-height: 15px;\n            color: red;\n            padding: .3rem .5rem;\n            \n            display: flex;\n            align-items: center;\n            justify-content: space-evenly;\n\n            .icon{\n                margin-right: 5px;\n            }\n        }\n\n        .contentDate{\n            color: rgba(122, 122, 122, 1);\n            font-size: 12px;\n            font-family: 'Proxima Nova';\n        }\n    }\n\n    .verticalPlayerTitle{\n        height: 50px;\n\n        span{\n            width: 100%;\n            font-family: 'Proxima Nova';\n            text-transform: capitalize !important;\n            line-height: 1.5;\n            font-weight: 700;\n            font-size: 1rem;\n            color: var(--violet);\n        }\n    }\n"])))},82535:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r,a,o=t(30168),s=(t(72791),t(86538)),c=t(91523),l=t(39126),d=t(78820),h=t(80184);function p(n){var e=n.data,t=n.entity;return(0,h.jsxs)("div",{children:["main"===t&&(0,h.jsx)(c.rU,{to:"/Mediatheque/entity/"+e._id,children:(0,h.jsx)(m,{children:{videos:(0,h.jsx)(l.mz0,{}),autres:(0,h.jsx)(d.Zju,{}),documentaire:(0,h.jsx)(d.Zju,{}),photos:(0,h.jsx)(d.Zju,{}),podcast:(0,h.jsx)(d.Zju,{})}[e.type]})}),""===t&&(0,h.jsx)(c.rU,{to:"/Mediatheque/entity/"+e._id,children:(0,h.jsx)(u,{children:{videos:(0,h.jsx)(l.mz0,{}),autres:(0,h.jsx)(d.Zju,{}),documentaire:(0,h.jsx)(d.Zju,{}),photos:(0,h.jsx)(d.Zju,{}),podcast:(0,h.jsx)(d.Zju,{})}[e.type]})}),"mainGridPlayer"===t&&(0,h.jsx)(c.rU,{to:"/Mediatheque/entity/"+e._id,children:(0,h.jsx)(x,{children:{videos:(0,h.jsx)(l.mz0,{}),autres:(0,h.jsx)(d.Zju,{}),documentaire:(0,h.jsx)(d.Zju,{}),photos:(0,h.jsx)(d.Zju,{}),podcast:(0,h.jsx)(d.Zju,{})}[e.type]})})]})}var u=s.ZP.div(i||(i=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 140px;\n    left: 10px;\n"]))),m=s.ZP.div(r||(r=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 290px;\n    left: 10px;\n"]))),x=s.ZP.div(a||(a=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 140px;\n    left: 10px;\n"])))},65650:function(n,e,t){t.d(e,{Z:function(){return c}});var i,r=t(30168),a=(t(72791),t(86538)),o=t(91523),s=t(80184);function c(n){var e,t=n.view;return(0,s.jsx)("div",{children:(0,s.jsxs)(l,{children:[(0,s.jsx)(o.rU,{to:"/",className:"homeLinkInBC",children:"Accueil"})," ",(0,s.jsxs)("span",{className:"currentView",children:["/ ",(e=t,e.charAt(0).toUpperCase()+e.slice(1))]})]})})}var l=a.ZP.div(i||(i=(0,r.Z)(['\n  margin: 0.7rem 0;\n  font-size: "1rem";\n  font-family: "Proxima Nova";\n\n  .currentView {\n    color: var(--gray3);\n  }\n\n  .homeLinkInBC {\n    text-decoration: none;\n    color: var(--gray2);\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n'])))},85862:function(){},2579:function(n,e,t){t.d(e,{Z:function(){return l}});var i=t(29439),r=t(1413),a=t(45987),o=t(72791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],c=o.createContext({});function l(n){for(var e,t,l,d=n.count,h=void 0===d?1:d,p=n.wrapper,u=n.className,m=n.containerClassName,x=n.containerTestId,f=n.circle,g=void 0!==f&&f,v=n.style,j=(0,a.Z)(n,s),y=o.useContext(c),b=(0,r.Z)({},j),w=0,Z=Object.entries(j);w<Z.length;w++){var N=(0,i.Z)(Z[w],2),T=N[0];"undefined"===typeof N[1]&&delete b[T]}var k=(0,r.Z)((0,r.Z)((0,r.Z)({},y),b),{},{circle:g}),P=(0,r.Z)((0,r.Z)({},v),function(n){var e=n.baseColor,t=n.highlightColor,i=n.width,r=n.height,a=n.borderRadius,o=n.circle,s=n.direction,c=n.duration,l=n.enableAnimation,d=void 0===l||l,h={};return"rtl"===s&&(h["--animation-direction"]="reverse"),"number"===typeof c&&(h["--animation-duration"]="".concat(c,"s")),d||(h["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(h.width=i),"string"!==typeof r&&"number"!==typeof r||(h.height=r),"string"!==typeof a&&"number"!==typeof a||(h.borderRadius=a),o&&(h.borderRadius="50%"),"undefined"!==typeof e&&(h["--base-color"]=e),"undefined"!==typeof t&&(h["--highlight-color"]=t),h}(k)),z="react-loading-skeleton";u&&(z+=" ".concat(u));for(var L=null!==(e=k.inline)&&void 0!==e&&e,C=[],S=Math.ceil(h),_=0;_<S;_++){var A=P;if(S>h&&_===S-1){var q=null!==(t=A.width)&&void 0!==t?t:"100%",D=h%1,M="number"===typeof q?q*D:"calc(".concat(q," * ").concat(D,")");A=(0,r.Z)((0,r.Z)({},A),{},{width:M})}var R=o.createElement("span",{className:z,style:A,key:_},"\u200c");L?C.push(R):C.push(o.createElement(o.Fragment,{key:_},R,o.createElement("br",null)))}return o.createElement("span",{className:m,"data-testid":x,"aria-live":"polite","aria-busy":null===(l=k.enableAnimation)||void 0===l||l},p?C.map((function(n,e){return o.createElement(p,{key:e},n)})):C)}}}]);
//# sourceMappingURL=2432.4a7bbb0c.chunk.js.map