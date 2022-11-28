"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[874],{50874:function(e,a,n){n.r(a),n.d(a,{default:function(){return A}});var r=n(29439),s=n(72791),t=n(69025),o=n(91523),i=n(1413),l=n(77942),u=n(28646),c=n(68835),d=n(87705),m={type:["Legal","logistique"],etat:["En_ligne","physique"],gouvernorat:["tunis","ariana","gafsa","kasserine","monastir","sousse","beja"],importance:["Haute","modere","normale"]},p=n(25930),f=n(45003),h=n(16931),v=n(44825),x=n(81657),g=n(2107),b=n(80184),j=l.Ry().shape({gouvernorat:u.Z.enumerator((0,p.ag)("entities.demandeAppui.fields.gouvernorat"),{options:m.gouvernorat}),phoneNumber:u.Z.string((0,p.ag)("user.fields.phoneNumber"),{matches:/^[0-9]/,max:8,required:!0}),descriptionFR:u.Z.string((0,p.ag)("entities.demandeAppui.fields.description"),{required:!0}),supports:u.Z.files((0,p.ag)("entities.demandeAppui.fields.supports"),{})});var N=function(e){var a=(0,s.useState)("physique"),n=(0,r.Z)(a,2),t=n[0],o=n[1],l=(0,s.useState)((function(){var a=e.record||{};return o(a.personne),{email:a.email,personne:a.personne,phoneNumber:a.phoneNumber,descriptionFR:a.descriptionFR,supports:a.supports||[]}})),u=(0,r.Z)(l,1)[0],m=(0,d.cI)({resolver:(0,c.X)(j),mode:"all",defaultValues:u}),N=function(a){var n;a.personne=t,e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,a)},_=e.saveLoading;return(0,b.jsx)(d.RV,(0,i.Z)((0,i.Z)({},m),{},{children:(0,b.jsx)("form",{onSubmit:m.handleSubmit(N),children:(0,b.jsxs)("div",{className:"container__form",children:[(0,b.jsxs)("div",{className:"form__importance",children:[(0,b.jsx)("label",{htmlFor:"Importance",children:"Personne"}),(0,b.jsxs)("div",{className:"importance__status",children:[(0,b.jsx)("div",{className:"physique"===t?"status__active":"",onClick:function(){o("physique")},children:"physique"}),(0,b.jsx)("div",{className:"Organisation"===t?"status__active":"",onClick:function(){o("Organisation")},children:"Organisation"})]})]}),(0,b.jsx)(g.Z,{name:"email",label:(0,p.ag)("user.fields.email"),autoComplete:"email"}),(0,b.jsx)(g.Z,{name:"phoneNumber",label:(0,p.ag)("user.fields.phoneNumber"),autoComplete:"phoneNumber"}),(0,b.jsx)(v.Z,{name:"supports",label:(0,p.ag)("entities.demandeAppui.fields.supports"),required:!1,storage:x.Z.values.demandeAppuiSupports,max:void 0,formats:void 0}),(0,b.jsx)(f.Z,{name:"descriptionFR",label:(0,p.ag)("entities.demandeAppui.fields.description"),required:!1}),(0,b.jsxs)("div",{className:"item__button",children:[(0,b.jsx)("button",{className:"cancel__button",onClick:function(){Object.keys(u).forEach((function(e){m.setValue(e,u[e])}))},type:"button",disabled:_,children:(0,p.ag)("common.reset")}),(0,b.jsxs)("button",{className:"form__button",onClick:m.handleSubmit(N),disabled:_,children:[(0,b.jsx)(h.Z,{loading:_}),(0,p.ag)("common.save")]})]})]})})}))},_=n(55478),Z=n(94233),C=n(50873),q=function(e){return e.demandeAppui.form},y=(0,C.P1)([q],(function(e){return e.record})),k={selectInitLoading:(0,C.P1)([q],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,C.P1)([q],(function(e){return Boolean(e.saveLoading)})),selectRecord:y,selectRaw:q},S=n(38014),B=n(79271),w=n(75992);var A=function(e){var a=(0,s.useState)(!1),n=(0,r.Z)(a,2),i=n[0],l=n[1],u=(0,Z.I0)(),c=(0,B.$B)(),d=(0,Z.v9)(k.selectInitLoading),m=(0,Z.v9)(k.selectSaveLoading),f=(0,Z.v9)(k.selectRecord),h=Boolean(c.params.id),v=h?"entities.demandeAppui.edit.title":"entities.demandeAppui.new.title";return(0,s.useEffect)((function(){u(_.Z.doInit(c.params.id)),l(!0)}),[u,c.params.id]),(0,b.jsxs)("div",{className:"app__contenu",children:[(0,b.jsx)(o.rU,{to:"/profile",children:(0,b.jsxs)("div",{className:"retour",children:[(0,b.jsx)("i",{className:"fa-solid fa-arrow-left"})," Retour"]})}),(0,b.jsxs)("div",{className:"contenu",children:[(0,b.jsxs)("div",{className:"archieve__header",children:[(0,b.jsx)("h2",{children:(0,p.ag)("menu.demande_appui")}),(0,b.jsx)("div",{className:"communiquer__bar"})]}),(0,b.jsx)("div",{className:"contenu__description",children:"Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus eros metus, sit amet scelerisque odio posuere eu. Sed vitae pharetra lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra"}),(0,b.jsx)(t.Z,{children:(0,b.jsxs)("div",{className:"Login__container",children:[d&&(0,b.jsx)(w.C,{}),i&&!d&&(0,b.jsx)(N,{title:v,saveLoading:m,record:f,isEditing:h,onSubmit:function(e,a){u(h?_.Z.doUpdate(e,a):_.Z.doCreate(a))},onCancel:function(){return(0,S.s1)().push("/demande-appui")}})]})})]})]})}},44825:function(e,a,n){n.d(a,{Z:function(){return v}});var r=n(72791),s=n(74165),t=n(93433),o=n(15861),i=n(29439),l=n(38658),u=n(68561),c=n(16931),d=n(80184);var m=function(e){var a=(0,r.useState)(!1),n=(0,i.Z)(a,2),m=n[0],p=n[1],f=(0,r.useRef)(),h=function(){var a=e.value;return a?Array.isArray(a)?a:[a]:[]},v=function(){var a=(0,o.Z)((0,s.Z)().mark((function a(n){var r,o;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,(r=n.target.files)&&r.length){a.next=4;break}return a.abrupt("return");case 4:return o=r[0],l.Z.validate(o,{storage:e.storage,formats:e.formats}),p(!0),a.next=9,l.Z.upload(o,{storage:e.storage,formats:e.formats});case 9:o=a.sent,f.current.value="",p(!1),e.onChange([].concat((0,t.Z)(h()),[o])),a.next=21;break;case 15:a.prev=15,a.t0=a.catch(0),f.current.value="",console.error(a.t0),p(!1),u.Z.showMessage(a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}(),x=e.max,g=e.readonly,b=(0,d.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,d.jsxs)("div",{className:"upload__file",children:["upload"," \xa0"," ",(0,d.jsx)(c.Z,{loading:m,iconClass:"fas fa-plus"})]}),(0,d.jsx)("input",{style:{display:"none"},disabled:m||g,accept:function(){var a=e.schema;if(a&&a.formats)return a.formats.map((function(e){return".".concat(e)})).join(",")}(),type:"file",onChange:v,ref:f})]});return(0,d.jsxs)("div",{children:[g||x&&h().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=x?null:b,h()&&h().length?(0,d.jsx)("div",{children:h().map((function(a){return(0,d.jsxs)("div",{className:"file__show",children:[(0,d.jsx)("i",{className:"fas fa-link text-muted mr-2"}),(0,d.jsx)("a",{href:a.downloadUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:a.name}),!g&&(0,d.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return n=a.id,void e.onChange(h().filter((function(e){return e.id!==n})));var n},children:(0,d.jsx)("i",{className:"fas fa-times"})})]},a.id)}))}):null]})},p=n(87705),f=n(34141);function h(e){var a=e.label,n=e.name,s=e.hint,t=e.storage,o=e.formats,i=e.max,l=e.required,u=e.externalErrorMessage,c=(0,p.Gc)(),h=c.register,v=c.errors,x=c.formState,g=x.touched,b=x.isSubmitted,j=c.setValue,N=c.watch;(0,r.useEffect)((function(){h({name:n})}),[h,n]);var _=f.Z.errorMessage(n,v,g,b,u);return(0,d.jsxs)("div",{className:"form-group",children:[Boolean(a)&&(0,d.jsx)("label",{className:"col-form-label ".concat(l?"required":null),htmlFor:n,children:a}),(0,d.jsx)("br",{}),(0,d.jsx)(m,{storage:t,formats:o,value:N(n),onChange:function(a){j(n,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},max:i}),(0,d.jsx)("div",{className:"invalid-feedback",children:_}),Boolean(s)&&(0,d.jsx)("small",{className:"form-text text-muted",children:s})]})}h.defaultProps={max:void 0,required:!1};var v=h},2107:function(e,a,n){n(72791);var r=n(87705),s=n(34141),t=n(80184);function o(e){var a=e.label,n=e.description,o=e.name,i=e.hint,l=e.type,u=(e.placeholder,e.autoFocus),c=e.autoComplete,d=e.required,m=e.externalErrorMessage,p=e.disabled,f=e.endAdornment,h=(0,r.Gc)(),v=h.register,x=h.errors,g=h.formState,b=g.touched,j=g.isSubmitted,N=s.Z.errorMessage(o,x,b,j,m);return(0,t.jsxs)("div",{className:"form__group",children:[(0,t.jsxs)("div",{className:f?"input-group":"",children:[Boolean(a)&&(0,t.jsx)("label",{className:"".concat(d?"required":null),htmlFor:o,children:a}),n,(0,t.jsx)("input",{id:o,name:o,type:l,ref:v,onChange:function(a){e.onChange&&e.onChange(a.target.value)},onBlur:function(a){e.onBlur&&e.onBlur(a)},autoFocus:u||void 0,autoComplete:c||void 0,disabled:p,className:"form-control ".concat(N?"is-invalid":"")}),f&&(0,t.jsx)("div",{className:"input-group-append",children:(0,t.jsx)("span",{className:"input-group-text",children:f})})]}),(0,t.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(i)&&(0,t.jsx)("small",{className:"form-text text-muted",children:i})]})}o.defaultProps={type:"text",required:!1},a.Z=o},45003:function(e,a,n){n(72791);var r=n(87705),s=n(34141),t=n(80184);function o(e){var a=e.label,n=e.name,o=e.hint,i=e.size,l=e.placeholder,u=e.autoFocus,c=e.autoComplete,d=e.externalErrorMessage,m=e.required,p={small:"col-form-label-sm",large:"col-form-label-lg"}[i]||"",f={small:"form-control-sm",large:"form-control-lg"}[i]||"",h=(0,r.Gc)(),v=h.register,x=h.errors,g=h.formState,b=g.touched,j=g.isSubmitted,N=s.Z.errorMessage(n,x,b,j,d);return(0,t.jsxs)("div",{className:"form_textarea",children:[Boolean(a)&&(0,t.jsx)("label",{className:"col-form-label ".concat(m?"required":null," ").concat(p),htmlFor:n,children:a}),(0,t.jsx)("textarea",{id:n,name:n,ref:v,onChange:function(a){e.onChange&&e.onChange(a.target.value)},onBlur:function(a){e.onBlur&&e.onBlur(a)},placeholder:l||void 0,autoFocus:u||void 0,autoComplete:c||void 0,className:"form-control ".concat(f," ").concat(N?"is-invalid":"")}),(0,t.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(o)&&(0,t.jsx)("small",{className:"form-text text-muted",children:o})]})}o.defaultProps={required:!1},a.Z=o}}]);
//# sourceMappingURL=874.e3405073.chunk.js.map