(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(24),s=n.n(c),r=(n(56),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))}),i=(n(57),n(35)),o=n(23),l=n(29);i.a.use(o.e).init({resources:{en:{translations:{"Sign Up":"Sign Up","Password mismatch":"Password mismatch",Username:"Username","Display Name":"Display Name",Password:"Password","Password Repeat":"Password Repeat",Login:"Login",Logout:"Logout",Users:"Users",Next:"next >",Previous:"< previous","Load Failure":"Load Failure","User Not Found":"User Not Found",Edit:"Edit",Save:"Save",Cancel:"Cancel","My Profile":"My Profile","There are no hoaxes":"There are no hoaxes","Load old hoaxes":"Load old hoaxes","There are new hoaxes":"There are new hoaxes","Delete Hoax":"Delete Hoax","Are you sure to delete hoax?":"Are you sure to delete hoax?","Delete My Account":"Delete My Account","Are you sure to delete your account?":"Are you sure to delete your account?"}},tr:{translations:{"Sign Up":"Kay\u0131t Ol","Password mismatch":" Ayn\u0131 \u015eifreyi Giriniz",Username:"Kullan\u0131c\u0131 Ad\u0131","Display Name":"Tercih Edilen \u0130sim",Password:"\u015eifre","Password Repeat":"\u015eifre Tekrar\u0131",Login:"Sisteme Gir",Logout:"\xc7\u0131k",Users:"Kullan\u0131c\u0131lar",Next:"sonraki >",Previous:"< \xf6nceki","Load Failure":"Liste Al\u0131namad\u0131","User Not Found":"Kullan\u0131c\u0131 Bulunamad\u0131",Edit:"D\xfczenle",Save:"Kaydey",Cancel:"\u0130ptal Et","My Profile":"Hesabim","There are no hoaxes":"Hoax bulunamad\u0131","Load old hoaxes":"Gecmis hoaxlari getir","There are new hoaxes":"Yeni hoax'lar var","Delete Hoax":"Hoax'i sil","Are you sure to delete hoax?":"Hoax'u silmek istediginizden emin misiniz ","Delete My Account":"Hesab\u0131m\u0131 Sil","Are you sure to delete your account?":"Hesab\u0131n\u0131z\u0131 Silmek \u0130stedi\u011finizden emin misiniz"}}},fallbackLng:"en",ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});Object(l.b)("tr",(function(e,t){return[["az \xf6nce","\u015fimdi"],["%s saniye \xf6nce","%s saniye i\xe7inde"],["1 dakika \xf6nce","1 dakika i\xe7inde"],["%s dakika \xf6nce","%s dakika i\xe7inde"],["1 saat \xf6nce","1 saat i\xe7inde"],["%s saat \xf6nce","%s saat i\xe7inde"],["1 g\xfcn \xf6nce","1 g\xfcn i\xe7inde"],["%s g\xfcn \xf6nce","%s g\xfcn i\xe7inde"],["1 hafta \xf6nce","1 hafta i\xe7inde"],["%s hafta \xf6nce","%s hafta i\xe7inde"],["1 ay \xf6nce","1 ay i\xe7inde"],["%s ay \xf6nce","%s ay i\xe7inde"],["1 y\u0131l \xf6nce","1 y\u0131l i\xe7inde"],["%s y\u0131l \xf6nce","%s y\u0131l i\xe7inde"]][t]}));i.a;var u=n(97),d=n(8),j=n.n(d),b=function(e,t){return"/api/1.0/users?page=".concat(e,"&size=").concat(t)},p=function(e){return"/api/1.0/users/".concat(e)},m=function(e){return e?"/api/1.0/users/".concat(e,"/hoaxes?page="):"/api/1.0/hoaxes?page="},f=function(e,t){return t?"/api/1.0/users/".concat(t,"/hoaxes/").concat(e):"/api/1.0/hoaxes/".concat(e)},O=function(e,t){return t?"/api/1.0/users/".concat(t,"/hoaxes/").concat(e,"?direction=after"):"/api/1.0/hoaxes/".concat(e,"?direction=after")},h=function(e){return"/api/1.0/hoaxes/".concat(e)},x="/api/1.0/hoax-attachments",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return j.a.get(b(e,t))},g=function(e){var t=e.isLoggedIn,n=e.token;if(t){var a="Bearer ".concat(n);j.a.defaults.headers.Authorization=a}else delete j.a.defaults.headers.Authorization},N=function(e){return j.a.get(p(e))},y=function(e,t){return j.a.put(function(e){return"/api/1.0/users/".concat(e)}(e),t)},w=function(e){return j.a.post("/api/1.0/hoaxes",e)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return j.a.get(m(e)+t)},C=function(e,t){return j.a.get(f(e,t))},S=function(e,t){return j.a.get(function(e,t){return t?"/api/1.0/users/".concat(t,"/hoaxes/").concat(e,"?count=true"):"/api/1.0/hoaxes/".concat(e,"?count=true")}(e,t))},L=function(e,t){return j.a.get(O(e,t))},E=function(e){return j.a.post(x,e)},A=function(e){return j.a.delete(h(e))},D=function(e){return j.a.delete(p(e))},P=n(0),F=function(e){var t=Object(u.a)().i18n,n=function(e){t.changeLanguage(e),function(e){j.a.defaults.headers["accept-language"]=e}(e)};return Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("img",{src:"https://www.countryflags.io/tr/flat/24.png",onClick:function(){return n("tr")},alt:"Turkish Flag",style:{cursor:"pointer"}}),Object(P.jsx)("img",{src:"https://www.countryflags.io/us/flat/24.png",onClick:function(){return n("en")},style:{cursor:"pointer"},alt:"USA Flag"})]})},U=n(2),I=n.n(U),H=n(6),T=n(20),z=n(4),M=n(3),R=function(e){var t=e.label,n=e.error,a=e.name,c=e.onChange,s=e.type,r=e.defaultValue,i="form-control";return"file"===s&&(i+="-file"),void 0!==n&&(i+=" is-invalid"),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{children:t}),Object(P.jsx)("input",{className:i,name:a,onChange:c,type:s,defaultValue:r}),Object(P.jsx)("div",{className:"invalid-feedback",children:n})]})},_=function(e){var t=e.onClick,n=e.pendingApiCall,a=e.disabled,c=e.text,s=e.className;return Object(P.jsxs)("button",{disabled:a,className:s||"btn btn-primary",onClick:t,children:[n&&Object(P.jsx)("span",{className:"spinner-border spinner-border-sm"}),c]})},B=function(e,t,n){var c=Object(a.useState)(!1),s=Object(M.a)(c,2),r=s[0],i=s[1],o=function(a,c,s){a===e&&(n&&c===t||!n&&c.startsWith(t))&&i(s)};return Object(a.useEffect)((function(){var e,t;return e=j.a.interceptors.request.use((function(e){var t=e.url,n=e.method;return o(n,t,!0),e})),t=j.a.interceptors.response.use((function(e){var t=e.config,n=t.url,a=t.method;return o(a,n,!1),e}),(function(e){var t=e.config,n=t.url,a=t.method;throw o(a,n,!1),e})),function(){j.a.interceptors.request.eject(e),j.a.interceptors.response.eject(t)}}),[t,e,n]),r},K=n(9),V="logout-success",G="login-success",W="update-success",q=function(){return function(){var e=Object(H.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("/api/1.0/logout");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:t({type:V});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},J=function(e){return{type:G,payload:e}},X=function(e){var t=e.displayName,n=e.image;return{type:W,payload:{displayName:t,image:n}}},Y=function(e){return function(){var t=Object(H.a)(I.a.mark((function t(n){var a,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s=e,j.a.post("/api/1.0/auth",s);case 2:return a=t.sent,c=Object(z.a)(Object(z.a)({},a.data.user),{},{password:e.password,token:a.data.token}),n(J(c)),t.abrupt("return",a);case 6:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(H.a)(I.a.mark((function t(n){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c=e,j.a.post("/api/1.0/users",c);case 2:return a=t.sent,t.next=5,n(Y(e));case 5:return t.abrupt("return",a);case 6:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=function(e){var t,n=Object(a.useState)({username:null,displayName:null,password:null,passwordRepeat:null}),c=Object(M.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)({}),o=Object(M.a)(i,2),l=o[0],d=o[1],j=Object(K.b)(),b=function(e){var t=e.target,n=t.name,a=t.value;d((function(e){return Object(z.a)(Object(z.a)({},e),{},Object(T.a)({},n,void 0))})),r((function(e){return Object(z.a)(Object(z.a)({},e),{},Object(T.a)({},n,a))}))},p=function(){var t=Object(H.a)(I.a.mark((function t(n){var a,c,r,i,o,l;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.history,c=a.push,r=s.username,i=s.displayName,o=s.password,l={username:r,displayName:i,password:o},t.prev=5,t.next=8,j(Q(l));case 8:c("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),t.t0.response.data.validationErrors&&d(t.t0.response.data.validationErrors);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),m=Object(u.a)().t,f=l.username,O=l.displayName,h=l.password,x=B("post","/api/1.0/users"),v=B("/api/1.0/auth"),g=x||v;return s.password!==s.passwordRepeat&&(t=m("Password mismatch")),Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("form",{children:[Object(P.jsx)("h1",{className:"text-center",children:m("Sign Up")}),Object(P.jsx)(R,{name:"username",label:m("Username"),error:f,onChange:b}),Object(P.jsx)(R,{name:"displayName",label:m("Display Name"),error:O,onChange:b}),Object(P.jsx)(R,{name:"password",label:m("Password"),error:h,onChange:b,type:"password"}),Object(P.jsx)(R,{name:"passwordRepeat",label:m("Password Repeat"),error:t,onChange:b,type:"password"}),Object(P.jsx)("div",{className:"text-center",children:Object(P.jsx)(_,{disabled:g||void 0!==t,onClick:p,pendingApiCall:g,text:m("Sign Up")})}),Object(P.jsx)("div",{})]})})},$=function(e){var t=Object(a.useState)(),n=Object(M.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(),i=Object(M.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(),j=Object(M.a)(d,2),b=j[0],p=j[1],m=Object(K.b)();Object(a.useEffect)((function(){p(void 0)}),[c,o]);var f=function(){var t=Object(H.a)(I.a.mark((function t(n){var a,s,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={username:c,password:o},s=e.history,r=s.push,p(void 0),t.prev=5,t.next=8,m(Y(a));case 8:r("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),p(t.t0.response.data.message);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),O=Object(u.a)().t,h=B("post","/api/1.0/auth"),x=c&&o;return Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("form",{children:[Object(P.jsx)("h1",{className:"text-center",children:O("Login")}),Object(P.jsx)(R,{label:O("Username"),onChange:function(e){s(e.target.value)}}),Object(P.jsx)(R,{label:O("Password"),type:"password",onChange:function(e){return l(e.target.value)}}),b&&Object(P.jsx)("div",{className:"alert  alert-danger",children:b}),Object(P.jsx)("div",{className:"text-center",children:Object(P.jsx)(_,{onClick:f,disabled:!x||h,pendingApiCall:h,text:O("Login")})})]})})},ee=n(18),te=n(7),ne=n.p+"static/media/profile.06c30927.png",ae=function(e){var t=e.image,n=e.tempimage,a=ne;return t&&(a="images/profile/"+t),Object(P.jsx)("img",Object(z.a)(Object(z.a)({alt:"Profile",src:n||a},e),{},{onError:function(e){e.target.src=ne}}))},ce=n(13),se=function(e){var t=e.visible,n=e.onClickCancel,a=e.message,c=e.onClickOk,s=e.pendingApiCall,r=e.titleMessage,i=e.okButton,o=Object(u.a)().t,l="modal fade";return t&&(l+=" show d-block"),Object(P.jsx)("div",{className:l,style:{backgroundColor:"#000000b0"},children:Object(P.jsx)("div",{className:"modal-dialog",children:Object(P.jsxs)("div",{className:"modal-content",children:[Object(P.jsx)("div",{className:"modal-header",children:Object(P.jsx)("h5",{className:"modal-title",children:r})}),Object(P.jsx)("div",{className:"modal-body",children:a}),Object(P.jsxs)("div",{className:"modal-footer",children:[Object(P.jsx)("button",{className:"btn btn-secondary",onClick:n,disabled:s,children:o("Cancel")}),Object(P.jsx)(_,{className:"btn btn-danger",onClick:c,disabled:s,pendingApiCall:s,text:i})]})]})})})},re=function(e){var t=Object(K.c)((function(e){return e.username})),n=e.hoax,c=e.onDeleteHoax,s=n.user,r=n.content,i=n.timestamp,o=n.fileAttachment,d=n.id,j=s.username,b=s.displayName,p=s.image,m=Object(a.useState)(!1),f=Object(M.a)(m,2),O=f[0],x=f[1],v=B("delete",h(d),!0),g=Object(u.a)(),N=g.t,y=g.i18n,w=function(){var e=Object(H.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(d);case 2:c(d);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=Object(l.a)(i,y.language),C=t===j;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:"card p-1",children:[Object(P.jsxs)("div",{className:"d-flex",children:[Object(P.jsx)(ae,{image:p,width:"32",height:"32",className:"rounded-circle m-1"}),Object(P.jsx)("div",{className:"flex-fill m-auto pl-2",children:Object(P.jsxs)(ce.b,{to:"/user/".concat(j),className:"text-dark",children:[Object(P.jsxs)("h6",{className:"d-inline",children:[b,"@",j]}),Object(P.jsx)("span",{children:" - "}),Object(P.jsx)("span",{children:k})]})}),C&&Object(P.jsx)("button",{className:"btn btn-delete-link btn-sm",onClick:function(){return x(!0)},children:Object(P.jsx)("i",{className:"material-icons",children:"delete_outline"})})]}),Object(P.jsx)("div",{className:"pl-5",children:r}),o&&Object(P.jsxs)("div",{className:"pl-5",children:[o.fileType.startsWith("image")&&Object(P.jsx)("img",{className:"img-fluid",src:"images/attachments/"+o.name,alt:r}),!o.fileType.startsWith("image")&&Object(P.jsx)("strong",{children:"Hoax has unknown attachment"})]})]}),Object(P.jsx)(se,{visible:O,onClickCancel:function(){x(!1)},onClickOk:w,okButton:N("Delete Hoax"),titleMessage:N("Delete Hoax"),message:Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{children:Object(P.jsx)("strong",{children:N("Are you sure to delete hoax?")})}),Object(P.jsx)("span",{children:r})]}),pendingApiCall:v})]})},ie=n(49),oe=n.n(ie),le=function(){return Object(P.jsx)("div",{className:"d-flex justify-content-center",children:Object(P.jsx)(oe.a,{color:"#35C2A8"})})},ue=function(){var e=Object(a.useState)({content:[],last:!0,number:0}),t=Object(M.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(M.a)(s,2),i=r[0],o=r[1],l=Object(u.a)().t,d=Object(te.h)().username,j=B("get",m(d)),b=0,p=0;if(n.content.length>0){p=n.content[0].id;var h=n.content.length-1;b=n.content[h].id}var x=B("get",f(b,d),!0),v=B("get",O(p,d),!0);Object(a.useEffect)((function(){var e=setInterval(function(){var e=Object(H.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(p,d);case 2:t=e.sent,o(t.data.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),5e3);return function(){clearInterval(e)}}),[p,d]),Object(a.useEffect)((function(){(function(){var e=Object(H.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(d,t);case 3:n=e.sent,c((function(e){return Object(z.a)(Object(z.a)({},n.data),{},{content:[].concat(Object(ee.a)(e.content),Object(ee.a)(n.data.content))})})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}})()()}),[d]);var g=function(){var e=Object(H.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(b,d);case 2:t=e.sent,c((function(e){return Object(z.a)(Object(z.a)({},t.data),{},{content:[].concat(Object(ee.a)(e.content),Object(ee.a)(t.data.content))})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(H.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(p,d);case 2:t=e.sent,c((function(e){return Object(z.a)(Object(z.a)({},e),{},{content:[].concat(Object(ee.a)(t.data),Object(ee.a)(e.content))})})),o(0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){c((function(t){return Object(z.a)(Object(z.a)({},t),{},{content:t.content.filter((function(t){return t.id!==e}))})}))},w=n.content,E=n.last;return 0===w.length?Object(P.jsx)("div",{className:"alert alert-secondary text-center",children:j?Object(P.jsx)(le,{}):l("There are no hoaxes")}):Object(P.jsxs)("div",{children:[i>0&&Object(P.jsx)("div",{className:"alert alert-secondary text-center mb-1",style:{cursor:v?"not-allowed":"pointer"},onClick:v?function(){}:N,children:v?Object(P.jsx)(le,{}):l("There are new hoaxes")}),w.map((function(e){return Object(P.jsx)(re,{hoax:e,onDeleteHoax:y},e.id)})),!E&&Object(P.jsx)("div",{className:"alert alert-secondary text-center",style:{cursor:x?"not-allowed":"pointer"},onClick:x?function(){}:g,children:x?Object(P.jsx)(le,{}):l("Load old hoaxes")})]})},de=(n(94),function(e){var t=e.image,n=e.uploading;return Object(P.jsxs)("div",{style:{position:"relative"},children:[Object(P.jsx)("img",{className:"img-thumbnail",src:t,alt:"hoax-attachment"}),Object(P.jsx)("div",{className:"overlay",style:{opacity:n?1:0},children:Object(P.jsx)("div",{className:"d-flex justify-content-center h-100",children:Object(P.jsx)("div",{className:"spinner-border text-light m-auto",children:Object(P.jsx)("spinner",{className:"sr-only",children:"Loading..."})})})})]})}),je=function(){var e=Object(K.c)((function(e){return{image:e.image}})).image,t=Object(a.useState)(!1),n=Object(M.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(M.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)({}),j=Object(M.a)(d,2),b=j[0],p=j[1],m=Object(a.useState)(),f=Object(M.a)(m,2),O=f[0],h=f[1],v=Object(a.useState)(),g=Object(M.a)(v,2),N=g[0],y=g[1],k=Object(u.a)().t;Object(a.useEffect)((function(){c||(l(""),p({}),h(),y())}),[c]),Object(a.useEffect)((function(){p({})}),[o]);var C=B("post","/api/1.0/hoaxes",!0),S=B("post",x,!0),L=function(){var e=Object(H.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={content:o,attachmentId:N},e.prev=1,e.next=4,w(t);case 4:s(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response.data.validationErrors&&p(e.t0.response.data.validationErrors);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(H.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.next=4,E(n);case 4:a=e.sent,y(a.data.id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D="form-control";return b.content&&(D+=" is-invalid"),Object(P.jsxs)("div",{className:"card p-1 flex-row",children:[Object(P.jsx)(ae,{image:e,width:"32",height:"32",className:"rounded-circle mr-1"}),Object(P.jsxs)("div",{className:"flex-fill",children:[Object(P.jsx)("textarea",{className:D,rows:c?"3":"1",onFocus:function(){return s(!0)},onChange:function(e){l(e.target.value)},value:o}),Object(P.jsx)("div",{className:"invalid-feedback",children:b.content}),c&&Object(P.jsxs)(P.Fragment,{children:[!O&&Object(P.jsx)(R,{type:"file",onChange:function(e){if(!(e.target.files.length<1)){var t=e.target.files[0],n=new FileReader;n.onloadend=function(){h(n.result),A(t)},n.readAsDataURL(t)}}}),O&&Object(P.jsx)(de,{image:O,uploading:S}),Object(P.jsxs)("div",{className:"text-right mt-2",children:[Object(P.jsx)(_,{onClick:L,pendingApiCall:C,disabled:C||S,text:"Hoaxify"}),Object(P.jsxs)("button",{disabled:C||S,className:"btn btn-light d-inline-flex ml-3",onClick:function(){s(!1)},children:[Object(P.jsx)("i",{className:"material-icons",children:"close"}),k("Cancel")]})]})]})]})]})},be=function(e){var t=e.user,n=t.username,a=t.displayName,c=t.image;return Object(P.jsxs)(ce.b,{to:"/user/".concat(n),className:"list-group-item list-group-item-action",children:[Object(P.jsx)(ae,{className:"rounded-circle",width:"32",height:"32",alt:"".concat(n," profile"),image:c}),Object(P.jsxs)("span",{className:"pl-2",children:[a,"@",n]})]})},pe=function(){var e=Object(a.useState)({content:[],size:3,number:0}),t=Object(M.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(M.a)(s,2),i=r[0],o=r[1],l=B("get","/api/1.0/users?page");Object(a.useEffect)((function(){d()}),[]);var d=function(){var e=Object(H.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!1),e.prev=1,e.next=4,v(t);case 4:n=e.sent,c(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o(!0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),j=Object(u.a)().t,b=n.content,p=n.last,m=n.first,f=Object(P.jsxs)("div",{children:[!1===m&&Object(P.jsx)("button",{className:"btn btn-sm btn-light",onClick:function(){var e=n.number-1;d(e)},children:j("Previous")}),!1===p&&Object(P.jsx)("button",{className:"btn btn-sm btn-light float-right",onClick:function(){var e=n.number+1;d(e)},children:j("Next")})]});return l&&(f=Object(P.jsx)(le,{})),Object(P.jsxs)("div",{className:"card",children:[Object(P.jsx)("h3",{className:"card-header text-center",children:j("Users")}),Object(P.jsx)("div",{className:"list-group-flush",children:b.map((function(e,t){return Object(P.jsx)(be,{user:e},e.username)}))}),f,i&&Object(P.jsx)("div",{className:"text-center text-danger",children:j("Load Failure")})]})},me=function(){var e=Object(K.c)((function(e){return{isLoggedIn:e.isLoggedIn}})).isLoggedIn;return Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"row",children:[Object(P.jsxs)("div",{className:"col",children:[e&&Object(P.jsx)("div",{className:"mb-1",children:Object(P.jsx)(je,{})}),Object(P.jsx)(ue,{})]}),Object(P.jsx)("div",{className:"col",children:Object(P.jsx)(pe,{})})]})})},fe=function(e){var t=Object(a.useState)(!1),n=Object(M.a)(t,2),c=n[0],s=n[1],r=Object(K.c)((function(e){return{username:e.username}})).username,i=Object(a.useState)(),o=Object(M.a)(i,2),l=o[0],d=o[1],j=Object(te.h)().username,b=Object(a.useState)({}),m=Object(M.a)(b,2),f=m[0],O=m[1],h=Object(a.useState)(!1),x=Object(M.a)(h,2),v=x[0],g=x[1],N=Object(a.useState)(),w=Object(M.a)(N,2),k=w[0],C=w[1],S=Object(a.useState)({}),L=Object(M.a)(S,2),E=L[0],A=L[1],F=Object(a.useState)(!1),U=Object(M.a)(F,2),T=U[0],V=U[1],G=Object(te.g)(),W=Object(K.b)();Object(a.useEffect)((function(){O(e.user)}),[e.user]),Object(a.useEffect)((function(){g(j===r)}),[j,r]),Object(a.useEffect)((function(){A((function(e){return Object(z.a)(Object(z.a)({},e),{},{displayName:void 0})}))}),[l]),Object(a.useEffect)((function(){A((function(e){return Object(z.a)(Object(z.a)({},e),{},{image:void 0})}))}),[k]);var J=f.username,Y=f.displayName,Q=f.image,Z=B("delete",p(J),!0),$=Object(u.a)().t;Object(a.useEffect)((function(){c?d(Y):(d(!1),C(void 0))}),[c,Y]);var ee=function(){var e=Object(H.a)(I.a.mark((function e(){var t,n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k&&(t=k.split(",")[1]),n={displayName:l,image:t},e.prev=2,e.next=5,y(J,n);case 5:a=e.sent,s(!1),O(a.data),W(X(a.data)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),A(e.t0.response.data.validationErrors);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(H.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(J);case 2:V(!1),W(q()),G.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=B("put","/api/1.0/users"+J),re=E.displayName,ie=E.image;return Object(P.jsxs)("div",{className:"card text-center",children:[Object(P.jsx)("div",{className:"card-header",children:Object(P.jsx)(ae,{className:"rounded-circle shadow",width:"200",height:"200",alt:"".concat(J," profile"),image:Q,tempimage:k})}),Object(P.jsxs)("div",{className:"card-body",children:[!c&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("h3",{children:[Y,"@",J]}),v&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("button",{className:"btn btn-success d-inline-flex",onClick:function(){s(!0)},children:[Object(P.jsx)("i",{className:"material-icons",children:"edit"}),$("Edit")]}),Object(P.jsx)("div",{className:"pt-2",children:Object(P.jsxs)("button",{className:"btn btn-danger d-inline-flex",onClick:function(){return V(!0)},children:[Object(P.jsx)("span",{class:"material-icons",children:"directions_run"}),$("Delete My Account")]})})]})]}),c&&Object(P.jsxs)("div",{children:[Object(P.jsx)(R,{label:"Change Display Name",defaultValue:Y,onChange:function(e){d(e.target.value)},error:re}),Object(P.jsx)(R,{type:"file",onChange:function(e){if(!(e.target.files.length<1)){var t=e.target.files[0],n=new FileReader;n.onloadend=function(){C(n.result)},n.readAsDataURL(t)}},error:ie}),Object(P.jsxs)("div",{children:[Object(P.jsx)(_,{className:"btn btn-success d-inline-flex mt-2",onClick:ee,disabled:ce,pendingApiCall:ce,text:Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("i",{className:"material-icons",children:"save"}),$("Save")]})}),Object(P.jsxs)("button",{className:"btn btn-light d-inline-flex ml-3",onClick:function(){s(!1)},disabled:ce,children:[Object(P.jsx)("i",{className:"material-icons",children:"close"}),$("Cancel")]})]})]})]}),Object(P.jsx)(se,{visible:T,onClickCancel:function(){V(!1)},onClickOk:ne,titleMessage:$("Delete My Account"),okButton:$("Delete My Account"),message:Object(P.jsxs)("div",{className:"text-center",children:[Object(P.jsx)("div",{children:Object(P.jsx)("strong",{style:{fontSize:"20px"},children:$("Are you sure to delete your account?")})}),Object(P.jsx)("div",{className:"mt-2",style:{fontSize:"18px"},children:Object(P.jsxs)("span",{children:[$("Your user name is:")," ",J]})})]}),pendingApiCall:Z})]})},Oe=function(e){var t=Object(a.useState)({}),n=Object(M.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),i=Object(M.a)(r,2),o=i[0],l=i[1],d=Object(te.h)().username,j=Object(u.a)().t,b=B("get","/api/1.0/users/"+d,!0);return Object(a.useEffect)((function(){l(!1)}),[c]),Object(a.useEffect)((function(){(function(){var e=Object(H.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(d);case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),o?Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"alert alert-danger text-center",children:[Object(P.jsx)("div",{children:Object(P.jsx)("i",{className:"material-icons",style:{fontSize:"48px"},children:"error"})}),j("User Not Found")]})}):b||c.username!==d?Object(P.jsx)(le,{}):Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"row",children:[Object(P.jsx)("div",{className:"col",children:Object(P.jsx)(fe,{user:c})}),Object(P.jsx)("div",{className:"col",children:Object(P.jsx)(ue,{})})]})})},he=n.p+"static/media/hoaxify.e76cb420.png",xe=function(e){var t=Object(u.a)().t,n=Object(K.c)((function(e){return{isLoggedIn:e.isLoggedIn,username:e.username,displayName:e.displayName,image:e.image}})),c=n.username,s=n.isLoggedIn,r=n.displayName,i=n.image,o=Object(a.useRef)(null),l=Object(a.useState)(!1),d=Object(M.a)(l,2),j=d[0],b=d[1];Object(a.useEffect)((function(){return document.addEventListener("click",p),function(){document.removeEventListener("click",p)}}),[s]);var p=function(e){null!==o.current&&o.current.contains(e.target)||b(!1)},m=Object(K.b)(),f=Object(P.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(P.jsx)("li",{children:Object(P.jsx)(ce.b,{className:"nav-link",to:"/login",children:t("Login")})}),Object(P.jsx)("li",{children:Object(P.jsx)(ce.b,{className:"nav-link",to:"/signup",children:t("Sign Up")})})]});if(s){var O="dropdown-menu p-0 shadow";j&&(O+=" show"),f=Object(P.jsx)("ul",{className:"navbar-nav ml-auto",ref:o,children:Object(P.jsxs)("li",{className:"nav-item dropdown",children:[Object(P.jsxs)("div",{className:"d-flex",style:{cursor:"pointer"},onClick:function(){return b(!0)},children:[Object(P.jsx)(ae,{image:i,width:"32",height:"32",className:"rounded-circle m-auto"}),Object(P.jsx)("span",{className:"nav-link dropdown-toggle",children:r})]}),Object(P.jsxs)("div",{className:O,children:[Object(P.jsxs)(ce.b,{className:"dropdown-item d-flex p-2",to:"/user/".concat(c),onClick:function(){return b(!1)},children:[Object(P.jsx)("i",{className:"material-icons text-info mr-2",children:"person"}),t("My Profile")]}),Object(P.jsxs)("span",{className:"dropdown-item d-flex p-2",style:{cursor:"pointer"},onClick:function(){m(q())},children:[Object(P.jsx)("i",{className:"material-icons text-danger mr-2",children:"power_settings_new"}),t("Logout")]})]})]})})}return Object(P.jsx)("div",{className:"shadow-sm bg-light mb-2",children:Object(P.jsxs)("nav",{className:"navbar navbar-light  container navbar-expand",children:[Object(P.jsxs)(ce.b,{className:"navbar-brand",to:"/",children:[Object(P.jsx)("img",{src:he,width:"55",alt:"Hoaxify Logo"}),"Hoaxify"]}),f]})})},ve=function(){var e=Object(K.c)((function(e){return{isLoggedIn:e.isLoggedIn}})).isLoggedIn;return Object(P.jsxs)("div",{children:[Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(xe,{}),Object(P.jsxs)(te.d,{children:[Object(P.jsx)(te.b,{exact:!0,path:"/",component:me}),!e&&Object(P.jsx)(te.b,{path:"/login",component:$}),Object(P.jsx)(te.b,{path:"/signup",component:Z}),Object(P.jsx)(te.b,{path:"/user/:username",component:Oe}),Object(P.jsx)(te.a,{to:"/"})]})]}),Object(P.jsx)(F,{})]})},ge=n(17),Ne={isLoggedIn:!1,username:void 0,displayName:void 0,image:void 0,password:void 0},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(z.a)({},Ne),t=arguments.length>1?arguments[1]:void 0;return t.type===V?Ne:t.type===G?Object(z.a)(Object(z.a)({},t.payload),{},{isLoggedIn:!0}):t.type===W?Object(z.a)(Object(z.a)({},e),{},{displayName:t.payload.displayName,image:t.payload.image}):e},we=n(50),ke=n.n(we),Ce=n(51),Se=new ke.a,Le=function(){var e=Se.get("hoax-auth")||{isLoggedIn:!1,username:void 0,displayName:void 0,image:void 0,password:void 0};g(e);var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.c,n=Object(ge.d)(ye,e,t(Object(ge.a)(Ce.a)));return n.subscribe((function(){var e;e=n.getState(),Se.set("hoax-auth",e),g(n.getState())})),n}();s.a.render(Object(P.jsx)(K.a,{store:Le,children:Object(P.jsx)(ve,{})}),document.getElementById("root")),r()}},[[95,1,2]]]);
//# sourceMappingURL=main.c6e8b80a.chunk.js.map