"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[4584],{76361:function(e,i,a){a.r(i),a.d(i,{default:function(){return b}});var n=a(72791),t=a(8765),s=a(78967),l=a(25930),r=a(94233),c=a(26189),d=a(57688),o=a(91523),h=a(80184);var u=function(e){var i=e.rows,a=e.index;return(0,h.jsx)("div",{children:(0,h.jsx)(o.rU,{to:"/detaill/category/".concat(i._id),style:{color:"#000"},children:i.titleFR})},a)},m=a(15671),x=a(43144),v=a(72426),_=a.n(v),p=function(){function e(){(0,m.Z)(this,e)}return(0,x.Z)(e,null,[{key:"HourMinute",value:function(e){return _()(e).format("HH:mm")}}]),e}();var j=function(e){var i=e.data;return(0,h.jsx)("div",{className:"__detaills",children:(0,h.jsxs)("div",{className:"list__detaill",children:[(0,h.jsxs)("div",{className:"detaill__header",children:[(0,h.jsx)("div",{className:"__left",children:(0,h.jsx)("p",{children:i.thematique.titleFR})}),(0,h.jsx)("div",{className:"__right",children:p.HourMinute(i.updatedAt)})]}),(0,h.jsx)("div",{className:"__content",children:i.title}),(0,h.jsx)("div",{className:"sub__content",children:i.thematique.descriptionFR})]})})},g=a(32771);var f=function(e){var i=e.data,a=e.index,n=e.thematique;return(0,h.jsxs)("div",{className:"pub__migration",children:[(0,h.jsxs)("div",{className:"archieve__header",children:[(0,h.jsx)("h2",{children:n.titleFR}),(0,h.jsx)("div",{className:"satestique__bar"})]}),(0,h.jsx)("div",{className:"migration__images",children:i.map((function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)(g.Z,{src:"https://placehold.jp/370x300.png",width:"370",height:"300",alt:"Image publication image "}),(0,h.jsxs)("div",{className:"list__detaill",children:[(0,h.jsxs)("div",{className:"detaill__header",children:[(0,h.jsx)("div",{className:"header__left",children:(0,h.jsx)("p",{children:"Migration "})}),(0,h.jsx)("div",{className:"header__right",children:"10h32"})]}),(0,h.jsx)("div",{className:"detaill__content",children:"Immigration clandestine : Le FTDS critique l'approche de l'Etat"})]})]})}))}),(0,h.jsx)(o.rU,{to:"/detaill/".concat(n._id),children:(0,h.jsx)("div",{className:"plus__button",children:"Voir plus"})})]},a)};var N=function(e){var i=e.data,a=e.category;return e.index,(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"archieve__header",children:[(0,h.jsx)("h2",{children:a.titleFR}),(0,h.jsx)("div",{className:"satestique__bar"})]}),(0,h.jsx)("div",{className:"manification__images",children:i.map((function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)(g.Z,{src:"https://placehold.jp/120x78.png",width:120,height:78,alt:"Image"}),(0,h.jsxs)("div",{className:"list__detaill",children:[(0,h.jsxs)("div",{className:"detaill__header",children:[(0,h.jsx)("div",{className:"header__left",children:(0,h.jsx)("p",{children:"Migration "})}),(0,h.jsx)("div",{className:"header__right",children:"10h32"})]}),(0,h.jsx)("div",{className:"detaill__content text__wrap",style:{width:233},children:"Karba\xef: Les conditions de vie des migrants \xe0 Lampedusa inhumaines inhumaines inhumaines"})]})]})}))}),(0,h.jsx)(o.rU,{to:"/detaill/category/".concat(a._id),children:(0,h.jsx)("div",{className:"plus__button",children:"Voir plus"})})]})};var b=function(){var e=(0,r.I0)();(0,n.useEffect)((function(){e(c.Z.allpublicationbythematique()),e(c.Z.allpublicationbyCategory()),e(c.Z.doFetch())}),[]);var i=(0,r.v9)(d.Z.selectPublicationByThematiqueRows),a=(0,r.v9)(d.Z.selectloadingpublicationbythematique),o=(0,r.v9)(d.Z.selectRows),m=(0,r.v9)(d.Z.selectLoading),x=(0,r.v9)(d.Z.loadingByCategory),v=(0,r.v9)(d.Z.slectByCategory),_=x||a||m;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"publication__page",children:[(0,h.jsx)("div",{className:"app__calendar",children:(0,h.jsx)("img",{src:s.zX,alt:""})}),(0,h.jsx)(t.Z,{title:(0,l.ag)("entities.publication.label"),items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("entities.publication.label")]]}),_&&(0,h.jsx)("h3",{className:"detaill__sketlon",children:"Loading ... "}),!_&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"app__category",children:[(0,h.jsx)("div",{className:"category__title",children:"Cat\xe9gorie"}),(0,h.jsx)("div",{className:"category__list",children:!x&&v.map((function(e,i){return(0,h.jsx)(u,{rows:null===e||void 0===e?void 0:e.cat[0],index:i})}))})]}),(0,h.jsxs)("div",{className:"app__pub",children:[(0,h.jsx)("div",{className:"publication__header",children:(0,h.jsx)("div",{className:"image__pub",children:o.map((function(e,i){var a;return(0,h.jsxs)("div",{className:"pub__relative",children:[(0,h.jsx)("img",{src:null===e||void 0===e||null===(a=e.supports[0])||void 0===a?void 0:a.downloadUrl,alt:"header"}),(0,h.jsx)(j,{data:e})]},i)}))})}),a&&(0,h.jsx)("h3",{children:"Loading ... "}),i.map((function(e,i){return(0,h.jsx)(f,{data:null===e||void 0===e?void 0:e.data,thematique:null===e||void 0===e?void 0:e.cat[0],index:i})})),(0,h.jsx)("div",{className:"app__articles",children:(0,h.jsx)("div",{className:"articles__top",children:(0,h.jsx)("div",{className:"__top",children:v.map((function(e,i){return(0,h.jsx)(N,{data:null===e||void 0===e?void 0:e.data,category:null===e||void 0===e?void 0:e.cat[0],index:i})}))})})})]})]})]})})}},8765:function(e,i,a){var n,t=a(30168),s=(a(72791),a(91523)),l=a(86538),r=a(80184),c=l.ZP.div(n||(n=(0,t.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));i.Z=function(e){var i=function(e){return e.length>1};return(0,r.jsx)(c,{children:(0,r.jsxs)("div",{className:"breadcrump__nav",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:e.title})}),(0,r.jsx)("div",{children:(0,r.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(a,n){return(0,r.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===n?"active":""),children:i(a)?(0,r.jsxs)(s.rU,{to:a[1],children:[" ",a[0]," ",a[1]]}):a[0]},a[0])}))})})]})})}},32771:function(e,i,a){a(72791);var n=a(87087),t=(a(19713),a(80184));i.Z=function(e){var i=e.src,a=e.width,s=e.height,l=e.alt,r=e.caption,c=e.key,d=i||"https://placehold.jp/".concat(a,"x").concat(s,".png");return(0,t.jsx)(n.LazyLoadImage,{alt:l,height:s,src:d,width:a,effect:"blur",caption:r},c)}}}]);
//# sourceMappingURL=4584.dbc9c328.chunk.js.map