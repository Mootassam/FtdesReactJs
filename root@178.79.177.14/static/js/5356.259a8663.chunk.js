"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5356],{35356:function(n,e,i){i.r(e),i.d(e,{default:function(){return A}});var a,t=i(29439),r=i(72791),o=i(94233),s=i(30589),c=i(45243),l=i(86931),d=i(75992),p=i(70697),g=i(30168),u=i(86538).ZP.div(a||(a=(0,g.Z)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 54px;\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 40px;\n\n  .rc-pagination {\n    display: flex;\n    aling-items: center;\n    justify-content: center;\n    column-gap: 5px;\n    font-size: 12px;\n    font-family: "Arial";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    padding: 0;\n    margin-bottom: 0;\n    width: 100%;\n  }\n\n  .rc-pagination > li {\n    list-style: none;\n  }\n  .rc-pagination-total-text {\n    float: left;\n    height: 30px;\n    line-height: 30px;\n    list-style: none;\n    padding: 0;\n    margin: 0 8px 0 0;\n  }\n  .rc-pagination:after {\n    content: " ";\n    display: block;\n    height: 0;\n    clear: both;\n    overflow: hidden;\n    visibility: hidden;\n  }\n  .rc-pagination-item {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    cursor: pointer;\n    padding: 0 15px;\n    height: 35px;\n    display: grid;\n    place-items: center;\n    color: var(--violet);\n    border: 1px solid #a3a3a9;\n    background-color: var(--white);\n  }\n  .rc-pagination-item a {\n    text-decoration: none;\n    color: var(--violet);\n  }\n  .rc-pagination-item:hover {\n    border-color: var(--primary);\n  }\n  .rc-pagination-item:hover a {\n    color: var(--primary);\n  }\n  .rc-pagination-item-disabled {\n    cursor: not-allowed;\n    color: var(--gray4);\n    background-color: var(--background);\n  }\n  .rc-pagination-item-disabled:hover {\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-item-disabled:hover a {\n    color: #d9d9d9;\n  }\n  .rc-pagination-item-active {\n    background-color: var(--violet);\n    border-color: #a3a3a9;\n  }\n  .rc-pagination-item-active a {\n    color: var(--white);\n  }\n  .rc-pagination-item-active:hover a {\n    color: #fff !important;\n  }\n  .rc-pagination-jump-prev:after,\n  .rc-pagination-jump-next:after {\n    content: "\u2022\u2022\u2022";\n    display: block;\n    letter-spacing: 2px;\n    color: #ccc;\n    font-size: 12px;\n    margin-top: 1px;\n  }\n  .rc-pagination-jump-prev:hover:after,\n  .rc-pagination-jump-next:hover:after {\n    color: var(--primary);\n  }\n  .rc-pagination-jump-prev:hover:after {\n    content: "\xab";\n  }\n  .rc-pagination-jump-next:hover:after {\n    content: "\xbb";\n  }\n  .rc-pagination-jump-prev-adherent-icon,\n  .rc-pagination-jump-next-adherent-icon {\n    position: relative;\n  }\n  .rc-pagination-jump-prev-adherent-icon:after,\n  .rc-pagination-jump-next-adherent-icon:after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    transition: all 0.2s;\n    content: "\u2022\u2022\u2022";\n    opacity: 1;\n    display: block;\n    letter-spacing: 2px;\n    color: #ccc;\n    font-size: 12px;\n    margin-top: 1px;\n  }\n  .rc-pagination-jump-prev-adherent-icon .adherent-icon-jump-prev,\n  .rc-pagination-jump-next-adherent-icon .adherent-icon-jump-prev,\n  .rc-pagination-jump-prev-adherent-icon .adherent-icon-jump-next,\n  .rc-pagination-jump-next-adherent-icon .adherent-icon-jump-next {\n    opacity: 0;\n    transition: all 0.2s;\n  }\n  .rc-pagination-jump-prev-adherent-icon:hover:after,\n  .rc-pagination-jump-next-adherent-icon:hover:after {\n    opacity: 0;\n    color: #ccc;\n  }\n  .rc-pagination-jump-prev-adherent-icon:hover .adherent-icon-jump-prev,\n  .rc-pagination-jump-next-adherent-icon:hover .adherent-icon-jump-prev,\n  .rc-pagination-jump-prev-adherent-icon:hover .adherent-icon-jump-next,\n  .rc-pagination-jump-next-adherent-icon:hover .adherent-icon-jump-next {\n    opacity: 1;\n    color: var(--primary);\n  }\n  .rc-pagination-prev,\n  .rc-pagination-jump-prev,\n  .rc-pagination-jump-next {\n    margin-right: 8px;\n  }\n  .rc-pagination-prev,\n  .rc-pagination-next,\n  .rc-pagination-jump-prev,\n  .rc-pagination-jump-next {\n    cursor: pointer;\n    color: #666;\n    font-size: 10px;\n    border-radius: 6px;\n    list-style: none;\n    min-width: 31px;\n    height: 31px;\n    line-height: 31px;\n    float: left;\n    text-align: center;\n  }\n  .rc-pagination-prev a:after {\n    content: " \u2039 Precedent";\n    display: block;\n    font-size: 14px;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    color: var(--violet);\n  }\n  .rc-pagination-next a:after {\n    content: " Suivant \u203a";\n    display: block;\n    font-size: 14px;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    color: var(--violet);\n    padding: 140px;\n  }\n  .rc-pagination-prev,\n  .rc-pagination-next {\n    border: 1px solid #a3a3a9;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    cursor: pointer;\n    padding: 0 15px;\n    height: 35px;\n    display: grid;\n    place-items: center;\n    color: var(--violet);\n  }\n  .rc-pagination-prev a,\n  .rc-pagination-next a {\n    color: #666;\n  }\n  .rc-pagination-prev a:after,\n  .rc-pagination-next a:after {\n    margin-top: -1px;\n  }\n  .rc-pagination-disabled {\n    cursor: not-allowed;\n  }\n  .rc-pagination-disabled a {\n    color: var(--gray4);\n    background-color: var(--background);\n  }\n  .rc-pagination-disabled .rc-pagination-item,\n  .rc-pagination-disabled .rc-pagination-prev,\n  .rc-pagination-disabled .rc-pagination-next {\n    cursor: not-allowed;\n  }\n  .rc-pagination-disabled .rc-pagination-item:hover,\n  .rc-pagination-disabled .rc-pagination-prev:hover,\n  .rc-pagination-disabled .rc-pagination-next:hover {\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-disabled .rc-pagination-item:hover a,\n  .rc-pagination-disabled .rc-pagination-prev:hover a,\n  .rc-pagination-disabled .rc-pagination-next:hover a {\n    color: #d9d9d9;\n  }\n  .rc-pagination-disabled .rc-pagination-jump-prev,\n  .rc-pagination-disabled .rc-pagination-jump-next {\n    pointer-events: none;\n  }\n  .rc-pagination-options {\n    float: left;\n    margin-left: 15px;\n  }\n  .rc-pagination-options-size-changer {\n    float: left;\n    width: 80px;\n  }\n  .rc-pagination-options-quick-jumper {\n    float: left;\n    margin-left: 16px;\n    height: 31px;\n    line-height: 31px;\n  }\n  .rc-pagination-options-quick-jumper input {\n    margin: 0 8px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border-radius: 6px;\n    border: 1px solid #d9d9d9;\n    outline: none;\n    padding: 3px 12px;\n    width: 50px;\n    height: 31px;\n  }\n  .rc-pagination-options-quick-jumper input:hover {\n    border-color: var(--primary);\n  }\n\n  .rc-pagination-options-quick-jumper button {\n    display: inline-block;\n    margin: 0 8px;\n    font-weight: 500;\n    text-align: center;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 0 15px;\n    font-size: 12px;\n    border-radius: 6px;\n    height: 31px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    position: relative;\n    color: rgba(0, 0, 0, 0.65);\n    background-color: #fff;\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-options-quick-jumper button:hover,\n  .rc-pagination-options-quick-jumper button:active,\n  .rc-pagination-options-quick-jumper button:focus {\n    color: var(--primary);\n    background-color: #fff;\n    border-color: var(--primary);\n  }\n  .rc-pagination-simple .rc-pagination-prev,\n  .rc-pagination-simple .rc-pagination-next {\n    border: none;\n    height: 24px;\n    line-height: 24px;\n    margin: 0;\n    font-size: 18px;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager {\n    float: left;\n    margin-right: 8px;\n    list-style: none;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager .rc-pagination-slash {\n    margin: 0 10px;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager input {\n    margin: 0 8px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border-radius: 6px;\n    border: 1px solid #d9d9d9;\n    outline: none;\n    padding: 5px 8px;\n    min-height: 20px;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager input:hover {\n    border-color: var(--primary);\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager button {\n    display: inline-block;\n    margin: 0 8px;\n    font-weight: 500;\n    text-align: center;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 0 8px;\n    font-size: 12px;\n    border-radius: 6px;\n    height: 26px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    position: relative;\n    color: rgba(0, 0, 0, 0.65);\n    background-color: #fff;\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager button:hover,\n  .rc-pagination-simple .rc-pagination-simple-pager button:active,\n  .rc-pagination-simple .rc-pagination-simple-pager button:focus {\n    color: var(--primary);\n    background-color: #fff;\n    border-color: var(--primary);\n  }\n  @media only screen and (max-width: 1024px) {\n    .rc-pagination-item-after-jump-prev,\n    .rc-pagination-item-before-jump-next {\n      display: none;\n    }\n  }\n']))),h=i(25930),m=i(80184),x=function(n){(0,r.useEffect)((function(){document.querySelector('[aria-label="next page"]').innerHTML="".concat((0,h.ag)("table.suivant")),document.querySelector('[aria-label="prev page"]').innerHTML="".concat((0,h.ag)("table.precedent"))}),[]);var e=n.pagination,i=(n.disabled,n.showTotal),a=e.current,t=e.pageSize,o=e.total;return(0,m.jsx)(u,{children:(0,m.jsx)(p.Z,{pageSize:Number(t),current:a,onChange:function(e,i){n.onChange({current:Number(e),pageSize:Number(i)})},total:o,showTotal:i||void 0})})},v=i(91523),f=i(39126);var j=function(n){var e=(0,o.I0)();(0,r.useEffect)((function(){e(c.Z.doFetch())}),[]);var i=(0,o.v9)(l.Z.selectLoading),a=(0,o.v9)(l.Z.selectRows),t=(0,o.v9)(l.Z.selectHasRows),s=(0,o.v9)(l.Z.selectPagination),p=(0,o.v9)(l.Z.selectCount),g={fontSize:"1.2rem",color:"#ffff"};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"list__button",children:[(0,m.jsx)("div",{className:"list__title",children:(0,m.jsx)("h2",{children:(0,h.ag)("menu.contenu_recent")})}),(0,m.jsx)(v.rU,{to:"/appui/new",children:(0,m.jsx)("div",{className:"button__contenue",children:(0,h.ag)("menu.demande_appui")})})]}),(0,m.jsxs)("div",{className:"list__search",children:[(0,m.jsxs)("div",{className:"search__left",children:[p," ",(0,h.ag)("menu.contenus")]}),(0,m.jsxs)("div",{className:"search__right",children:[(0,m.jsxs)("div",{className:"search__result",children:[(0,m.jsx)("i",{className:"fas fa-search"}),(0,h.ag)("buttons.chercher")]}),(0,m.jsxs)("div",{className:"filter",children:[(0,m.jsx)("i",{className:"fas fa-sliders-h"}),(0,h.ag)("buttons.filtrer")]})]})]}),(0,m.jsxs)("div",{className:"list__items",children:[(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsxs)("td",{children:[" ",(0,h.ag)("entities.demandeAppui.fields.personne")]}),(0,m.jsxs)("td",{children:[" ",(0,h.ag)("entities.demandeAppui.fields.email")]}),(0,m.jsx)("td",{children:(0,h.ag)("entities.demandeAppui.fields.phoneNumber")}),(0,m.jsxs)("td",{children:[" ",(0,h.ag)("entities.demandeAppui.fields.description")]}),(0,m.jsx)("td",{})]})}),(0,m.jsxs)("tbody",{children:[i&&(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:100,children:(0,m.jsx)(d.C,{})})}),!i&&!t&&(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:100,children:(0,m.jsx)("div",{className:"d-flex justify-content-center",children:(0,h.ag)("table.noData")})})}),!i&&a.map((function(n){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:n.personne}),(0,m.jsx)("td",{children:n.email}),(0,m.jsx)("td",{children:n.phoneNumber}),(0,m.jsx)("td",{children:n.descriptionFR}),(0,m.jsx)("td",{style:g,children:(0,m.jsx)(v.rU,{to:"/appui/".concat(n.id,"/edit"),children:(0,m.jsx)(f.jox,{className:"icon",color:"#a3a3a9"})})})]},n.id)}))]})]}),(0,m.jsx)(x,{onChange:function(n){e(c.Z.doChangePaginationAndSort(n,{}))},disabled:i,pagination:s})]})]})},b=i(57688),y=i(26189),_=i(78967);var N=function(n){var e=n.currentUser,i=n.countAppui,a=n.countPublication,t=n.Image;return(0,m.jsxs)("div",{className:"profile__header",children:[(0,m.jsxs)("div",{className:"profile__avatar",children:[(0,m.jsx)("img",{src:t||_.PM,alt:"",width:"130",height:"130",style:{borderRadius:"50%",objectFit:"cover"},className:"lazyload"}),(0,m.jsx)("div",{className:"avatar__camera",children:(0,m.jsx)("i",{className:"fa-solid fa-camera"})})]}),(0,m.jsxs)("div",{className:"profile__description",children:[(0,m.jsxs)("div",{className:"description__top",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"title__profile",children:e.fullName}),(0,m.jsxs)("div",{className:"title__description",children:[(0,h.ag)("user.enumerators.occupation.".concat(e.occupation)),",",(0,h.ag)("user.enumerators.pays.".concat(e.pays))]})]}),(0,m.jsx)(v.rU,{to:"/profile/update",children:(0,m.jsx)("div",{className:"modify",children:(0,h.ag)("common.edit")})})]}),(0,m.jsxs)("div",{className:"description__bottom",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"description__number",children:a}),(0,h.ag)("entities.publication.label")]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"description__number",children:"0"})," Discussions"]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"description__number",children:i}),(0,h.ag)("entities.demandeAppui.label")]})]})]})]})},k=i(76053),w=i(40071),z=i(85880),Z=i(7692),S=i(78820),C=i(14651);var P=function(n){var e=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]};return e().length?(0,m.jsx)(m.Fragment,{children:e().map((function(n){return e=n,(0,m.jsx)("div",{children:e.titleFR},e.id);var e}))}):null};var q=function(n){var e=(0,o.I0)();(0,r.useEffect)((function(){e(y.Z.doFetch())}),[]);var i=(0,o.v9)(b.Z.selectLoading),a=(0,o.v9)(b.Z.selectRows),t=(0,o.v9)(b.Z.selectHasRows),s=(0,o.v9)(b.Z.selectCount),c=(0,o.v9)(b.Z.selectPagination),l={width:"70px",display:"flex",alignItems:"center",justifyContent:"space-between"},p={fontSize:"1.2rem",color:"#ffff"};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"list__button",children:[(0,m.jsx)("div",{className:"list__title",children:(0,m.jsx)("h2",{children:(0,h.ag)("menu.contenu_recent")})}),(0,m.jsx)(v.rU,{to:"/publication/new",children:(0,m.jsx)("div",{className:"button__contenue",children:(0,h.ag)("menu.suggerer_de_contenu")})})]}),(0,m.jsxs)("div",{className:"list__search",children:[(0,m.jsxs)("div",{className:"search__left",children:[s," ",(0,h.ag)("menu.contenus")]}),(0,m.jsxs)("div",{className:"search__right",children:[(0,m.jsxs)("div",{className:"search__result",children:[(0,m.jsx)("i",{className:"fas fa-search"}),(0,h.ag)("buttons.chercher")]}),(0,m.jsxs)("div",{className:"filter",children:[(0,m.jsx)("i",{className:"fas fa-sliders-h"}),(0,h.ag)("buttons.filtrer")]})]})]}),(0,m.jsxs)("div",{className:"list__items",children:[(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:(0,h.ag)("entities.publication.fields.thematique")}),(0,m.jsx)("td",{children:(0,h.ag)("entities.publication.fields.categorie")}),(0,m.jsx)("td",{children:(0,h.ag)("entities.publication.fields.type")}),(0,m.jsx)("td",{children:(0,h.ag)("entities.publication.fields.statut")}),(0,m.jsx)("td",{children:(0,h.ag)("entities.publication.fields.date")}),(0,m.jsx)("td",{})]})}),(0,m.jsxs)("tbody",{children:[i&&(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:100,children:(0,m.jsx)(d.C,{})})}),!i&&!t&&(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:100,children:(0,m.jsx)("div",{className:"d-flex justify-content-center",children:(0,h.ag)("table.noData")})})}),!i&&a.map((function(n){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:(0,m.jsx)(P,{value:n.thematique})}),(0,m.jsx)("td",{children:(0,m.jsx)(P,{value:n.category})}),(0,m.jsx)("td",{children:(0,m.jsxs)("div",{style:l,children:[{Texte:(0,m.jsx)(k.hIq,{className:"icon",fontSize:20}),audio:(0,m.jsx)(Z.dxk,{className:"icon",fontSize:20}),"vid\xe9o":(0,m.jsx)(w._DQ,{className:"icon",fontSize:20}),"lien web":(0,m.jsx)(z.cU6,{className:"icon",fontSize:20}),photo:(0,m.jsx)(f.BB5,{className:"icon",fontSize:20}),infographie:(0,m.jsx)(C.mMd,{className:"icon",fontSize:20}),statistiques:(0,m.jsx)(Z.s2C,{className:"icon",fontSize:20}),autre:(0,m.jsx)(S.KEm,{className:"icon",fontSize:20})}[n.type],n.type]})}),(0,m.jsx)("td",{children:(0,m.jsx)("span",{className:n.statut,children:(0,h.ag)("entities.publication.enumerators.statut.".concat(n.statut))})}),(0,m.jsxs)("td",{children:[" ",n.date]}),(0,m.jsx)("td",{style:p,children:(0,m.jsx)(v.rU,{to:"/publication/".concat(n.id,"/edit"),children:(0,m.jsx)(f.jox,{className:"icon",color:"#a3a3a9"})})})]},n.id)}))]})]}),(0,m.jsx)(x,{onChange:function(n){e(y.Z.doChangePaginationAndSort(n,{}))},disabled:i,pagination:c})]})]})};var A=function(){var n=(0,o.I0)(),e=(0,o.v9)(s.Z.selectCurrentUser),i=(0,o.v9)(s.Z.selectCurrentUserAvatar),a=(0,r.useState)("tab1"),p=(0,t.Z)(a,2),g=p[0],u=p[1],x=(0,o.v9)(l.Z.selectCount),v=(0,o.v9)(b.Z.selectCount),f=(0,o.v9)(b.Z.selectLoading),_=(0,o.v9)(l.Z.selectLoading)||f;return(0,r.useEffect)((function(){Promise.all([n(y.Z.doFetch()),n(c.Z.doFetch())]).then((function(n){})).catch((function(n){}))}),[]),(0,m.jsx)("div",{className:"app__updateprofile",children:(0,m.jsxs)("div",{className:"updateprofile",children:[_&&(0,m.jsx)(d.C,{styles:134.545}),!_&&(0,m.jsx)(N,{currentUser:e,countAppui:x,countPublication:v,Image:i}),(0,m.jsxs)("div",{className:"profile__list",children:[(0,m.jsx)("div",{className:"tabs",children:(0,m.jsxs)("ul",{className:"nav",children:[(0,m.jsx)("li",{className:"tab1"===g?"active__li__tabs":"",onClick:function(){u("tab1")},children:(0,h.ag)("menu.contenu")}),(0,m.jsx)("li",{className:"tab2"===g?"active__li__tabs":"",onClick:function(){u("tab2")},children:(0,h.ag)("menu.demande_appui")})]})}),(0,m.jsxs)(r.Fragment,{children:["tab1"===g&&(0,m.jsx)(q,{}),"tab2"===g&&(0,m.jsx)(j,{})]})]})]})})}},75992:function(n,e,i){var a,t=i(30168),r=(i(72791),i(86538)),o=i(80184),s=r.ZP.div(a||(a=(0,t.Z)(["\n  margin: 0 12px;\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 15px;\n    height: 15px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: var(--violet) transparent transparent transparent;\n  }\n  .lds-ring div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])));e.C=function(n){var e=n.styles;return(0,o.jsx)(s,{children:(0,o.jsx)("div",{style:{height:e},children:(0,o.jsxs)("div",{className:"lds-ring",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})})})}}}]);
//# sourceMappingURL=5356.259a8663.chunk.js.map