(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{113:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t),n.d(t,"apiAddress",(function(){return nt}));var a=n(0),r=n.n(a),s=n(12),c=n.n(s),i=(n(113),n(74)),o=n.n(i),u=n(17),d=n(8),l=n(16),j=n.n(l),b=n(11),p=n(14),O=n.n(p),h=n(23),m=n(7),x=n(39),g=n.n(x),f=g.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),_=function(e){return f.post("auth/login",e)},v=function(){return f.delete("auth/me",{})},C={status:"idle",error:null,isInitialized:!1},k=function(e){return{type:"APP/SET-ERROR",error:e}},w=function(e){return{type:"APP/SET-STATUS",status:e}},S={_id:"",email:"",name:"",avatar:"",publicCardPacksCount:0,created:"",updated:"",isAdmin:!1,verified:!1,rememberMe:!1,error:""},N=function(e){return{type:"SET-USER",data:e}},P={isLoggedIn:!1},y=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},I=n(2),T=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.login.isLoggedIn})),n=Object(b.c)((function(e){return e.app.status})),r=Object(a.useState)("nya-admin@nya.nya"),s=Object(d.a)(r,2),c=s[0],i=s[1],o=Object(a.useState)("1qazxcvBG"),l=Object(d.a)(o,2),p=l[0],m=l[1],x=Object(a.useState)(!1),g=Object(d.a)(x,2),f=g[0],v=g[1],C=Object(a.useState)(!1),S=Object(d.a)(C,2),P=S[0],T=S[1],E=Object(a.useState)(!1),L=Object(d.a)(E,2),D=L[0],R=L[1],F=Object(a.useState)(!1),A=Object(d.a)(F,2);A[0],A[1];return t?Object(I.jsx)(u.a,{to:"/profile"}):Object(I.jsx)("div",{className:j.a.mainContainer,children:Object(I.jsxs)("form",{className:j.a.loginForm,children:[Object(I.jsxs)("div",{className:j.a.spanDiv,children:[Object(I.jsx)("div",{className:j.a.loginSpan,children:Object(I.jsx)("span",{children:"Login"})}),Object(I.jsx)("div",{className:j.a.signupSpan,children:Object(I.jsx)("span",{children:"Sign Up"})})]}),Object(I.jsxs)("div",{className:j.a.dataContainer,children:[Object(I.jsxs)("div",{className:j.a.emailContainer,children:[Object(I.jsx)("label",{className:j.a.emailLabel,children:"Email"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"text",placeholder:"Email",className:j.a.emailInput,value:c,onChange:function(e){i(e.currentTarget.value)},onBlur:function(){v(0===c.length)}}),f&&Object(I.jsx)("div",{className:j.a.errorCheckStyle,children:"Email is required"})]})]}),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{className:j.a.passwordContainer,children:[Object(I.jsx)("label",{className:j.a.passwordLabel,children:"Password"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"text",placeholder:"Password",className:j.a.passwordInput,value:p,onChange:function(e){m(e.currentTarget.value)},onBlur:function(){T(0===p.length)}}),P&&Object(I.jsx)("div",{className:j.a.errorCheckStyle,children:"Password is required"})]})]})}),Object(I.jsxs)("div",{className:j.a.rememberMeContainer,children:[Object(I.jsx)("label",{className:j.a.rememberMeLabel,children:"Remember me"}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{type:"checkbox",className:j.a.rememberMeInput,checked:D,onChange:function(){R(!D)}})})]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:j.a.loadingStatus,children:"loading"===n?Object(I.jsx)("div",{children:"Loading..."}):""}),Object(I.jsx)("div",{className:j.a.failedStatus,children:"failed"===n?Object(I.jsx)("div",{children:"Not valid email or password"}):""})]}),Object(I.jsx)("div",{className:j.a.buttonContainer,children:Object(I.jsx)("button",{disabled:"loading"===n,className:j.a.buttonLogin,onClick:function(){var t;e((t={email:c,password:p,rememberMe:D},function(){var e=Object(h.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w("loading")),e.next=3,_(t).then((function(e){n(y(!0)),n(w("succeeded")),n(N(e.data))})).catch((function(e){var t=e.response?e.response.data.error:e.message+" more details in the console";n(w("failed")),n(k(t.message)),console.log(t.error)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:" Log In"})})]})})},E=g.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),L=function(e,t){return Object(h.a)(O.a.mark((function n(){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.post("auth/register",{email:e,password:t});case 3:if(200!==(a=n.sent).status){n.next=6;break}return n.abrupt("return",alert(a.data.addedUser));case 6:n.next=11;break;case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",alert(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},D="SIGNUP_DATA",R=function(e,t){return{type:D,email:e,password:t}},F=n(21),A=n.n(F),U=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(d.a)(s,2),i=c[0],o=c[1],l=Object(a.useState)(""),j=Object(d.a)(l,2),p=j[0],m=j[1],x=Object(a.useState)(!1),g=Object(d.a)(x,2),f=g[0],_=g[1],v=Object(b.b)(),C=Object(u.g)(),k=function(e,t){v(function(e,t){return function(){var n=Object(h.a)(O.a.mark((function n(a){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:L(e,t),a(R(e,t));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,t)),C.push("/login")};return Object(I.jsx)("div",{className:A.a.mainSignupContainer,children:Object(I.jsxs)("form",{className:A.a.signupForm,children:[Object(I.jsxs)("div",{className:A.a.spanDiv,children:[Object(I.jsx)("span",{className:A.a.loginSpan,children:"Login"}),Object(I.jsx)("span",{className:A.a.signupSpan,children:"Sign Up"})]}),Object(I.jsxs)("div",{className:A.a.signupContainer,children:[Object(I.jsxs)("div",{className:A.a.emailContainer,children:[Object(I.jsx)("label",{className:A.a.emailLabel,children:"Email"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"text",placeholder:"Enter",className:A.a.emailInput,value:n,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(){return o(0===n.length)}}),i&&Object(I.jsx)("div",{className:A.a.errorCheckStyle,children:"Email is required"})]})]}),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{className:A.a.passwordContainer,children:[Object(I.jsx)("label",{className:A.a.passwordLabel,children:"Password"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"password",placeholder:"Enter",className:A.a.passwordInput,value:p,onChange:function(e){return m(e.currentTarget.value)},onBlur:function(){return _(0===p.length)}}),f&&Object(I.jsx)("div",{className:A.a.errorCheckStyle,children:"Password is required"})]})]})})]}),Object(I.jsx)("div",{className:A.a.buttonContainer,children:Object(I.jsx)("button",{className:A.a.buttonSignup,onClick:function(){return k(n,p)},children:" Sign Up"})})]})})},B=function(){var e=Object(b.c)((function(e){return e.profile})),t=e.email,n=e.name,a=e.avatar,r=e.publicCardPacksCount;return Object(b.c)((function(e){return e.login.isLoggedIn}))?Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{children:["Email: ",t]}),Object(I.jsxs)("div",{children:[" Name: ",n]}),Object(I.jsxs)("div",{children:["Avatar: ",a]}),Object(I.jsxs)("div",{children:["PublicCardPacksCount: ",r]})]}):Object(I.jsx)(u.a,{to:"/login"})},M=n(70),z=n.n(M),G=function(){return Object(I.jsxs)("div",{className:z.a.container,children:[Object(I.jsx)("span",{className:z.a.getLostSpan,children:"Oops... You get lost"}),Object(I.jsx)("div",{className:z.a.mainDiv})]})},X=g.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),q=function(e,t,n){return Object(h.a)(O.a.mark((function a(){var r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,X.post("auth/forgot",{email:e,from:t,message:n});case 3:if(200!==(r=a.sent).status){a.next=6;break}return a.abrupt("return",console.log(r.data.info));case 6:a.next=11;break;case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",alert(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},K=function(e,t){return Object(h.a)(O.a.mark((function n(){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X.post("auth/set-new-password/",{password:e,resetPasswordToken:t});case 3:if(200!==(a=n.sent).status){n.next=6;break}return n.abrupt("return",console.log(a.data.info));case 6:n.next=11;break;case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",console.log(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},W={email:"",newPassword:""},Y="friday-project/forgot-password-reducer/SEND_EMAIL",H="friday-project/forgot-password-reducer/RESET_PASSWORD",Z=function(e){return function(t){q(e,"test-front-admin <alyena.fatianova@gmail.com>","<div style=\"background-color: lime; padding: 15px\">\n    password recovery link: \n    <a href='http://localhost:3000/#/resetPassword/$token$'>link</a> </div>"),t(function(e){return{type:Y,email:e}}(e))}},J=function(e,t){return function(n){K(e,t),n(function(e){return{type:H,newPassword:e}}(e))}},V=n(30),Q=n.n(V),$=r.a.memo((function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(d.a)(s,2),i=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(d.a)(u,2),j=l[0],p=l[1],O=Object(b.b)();return Object(I.jsx)("div",{className:Q.a.mainContainer,children:Object(I.jsxs)("form",{className:Q.a.recoverForm,children:[Object(I.jsx)("div",{className:Q.a.recoverSpan,children:j?Object(I.jsx)("div",{children:"Loading..."}):Object(I.jsx)("span",{children:"Forgot password?"})}),Object(I.jsx)("div",{className:Q.a.dataContainer,children:Object(I.jsxs)("div",{className:Q.a.recoverPasswordContainer,children:[Object(I.jsx)("span",{className:Q.a.enterEmailSpan,children:"Enter you email to receive password"}),Object(I.jsxs)("div",{className:Q.a.inputStyle,children:[Object(I.jsx)("input",{type:"email",placeholder:"Your email address",className:Q.a.recoverInput,value:n,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(){return o(0===n.length)}}),i&&Object(I.jsx)("div",{className:Q.a.errorCheckStyle,children:"Required"})]})]})}),Object(I.jsx)("div",{className:Q.a.buttonContainer,children:Object(I.jsx)("button",{className:Q.a.buttonReset,disabled:!n,onClick:function(){return O(Z(n)),void p(!0)},children:" Send"})})]})})})),ee=n(32),te=n.n(ee),ne=r.a.memo((function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(d.a)(s,2),i=c[0],o=c[1],l=Object(a.useState)(!1),j=Object(d.a)(l,2),p=(j[0],j[1]),O=Object(b.b)(),h=Object(u.h)().resetPasswordToken;console.log(h);var m=Object(a.useCallback)((function(e,t){O(J(e,t)),p(!0)}),[]);return Object(I.jsx)("div",{className:te.a.mainContainer,children:Object(I.jsxs)("form",{className:te.a.resetForm,children:[Object(I.jsx)("div",{className:te.a.resetSpan,children:Object(I.jsx)("span",{children:"Reset Password"})}),Object(I.jsx)("div",{className:te.a.dataContainer,children:Object(I.jsxs)("div",{className:te.a.newPasswordContainer,children:[Object(I.jsx)("label",{className:te.a.newPasswordLabel,children:"Reset Password"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"password",placeholder:"Enter new password",className:te.a.newPasswordInput,value:n,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(){return o(0===n.length)}}),i&&Object(I.jsx)("div",{className:te.a.errorCheckStyle,children:"Required"})]})]})}),Object(I.jsx)("div",{className:te.a.buttonContainer,children:Object(I.jsx)("button",{className:te.a.buttonReset,disabled:!n,onClick:function(){return m(n,h)},children:" Reset"})})]})})})),ae=n(50),re=n(24),se=n.n(re),ce=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,s=e.error,c=(e.className,e.spanClassName),i=Object(ae.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(se.a.error," ").concat(c||""),u="".concat(s?se.a.errorInput:se.a.superInput);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("input",Object(m.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&r&&r()},className:u},i)),s&&Object(I.jsx)("span",{className:o,children:s})]})},ie=function(e){var t=e.red,n=e.className,a=Object(ae.a)(e,["red","className"]),r="".concat(t?se.a.red:se.a.default," ").concat(n);return Object(I.jsx)("button",Object(m.a)({className:r},a))},oe=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),r=Object(ae.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(se.a.checkbox," ").concat(n||"");return Object(I.jsxs)("label",{children:[Object(I.jsx)("div",{className:se.a.checkboxStyle,children:Object(I.jsx)("input",Object(m.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:s},r))}),a&&Object(I.jsx)("span",{className:se.a.spanClassName,children:a})]})},ue=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(d.a)(s,2),i=c[0],o=c[1],u=n?"":"error",l=function(){u?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)};return Object(I.jsxs)("div",{className:se.a.mainDivTest,children:[Object(I.jsx)(ce,{value:n,onChangeText:r,onEnter:l,error:u,className:se.a.superInput}),Object(I.jsx)(ie,{red:!0,onClick:l,children:"Delete"}),Object(I.jsx)(oe,{checked:i,onChangeChecked:o,children:" Some text... "}),Object(I.jsx)(oe,{checked:i,onChange:function(e){return o(e.currentTarget.checked)},children:" Is it working? "})]})},de=n(19),le=n(57),je=n.n(le),be=function(){var e=Object(b.c)((function(e){return e.login.isLoggedIn})),t=Object(b.c)((function(e){return e.app.status})),n=Object(b.b)();return Object(I.jsx)("div",{className:je.a.mainDiv,children:Object(I.jsxs)("div",{className:je.a.linksContainer,children:[Object(I.jsxs)("div",{className:je.a.login,children:["loading"===t?Object(I.jsx)("div",{children:"Loading..."}):"",e?Object(I.jsx)("button",{disabled:"loading"===t,onClick:function(){n((function(e){e(w("loading")),v().then((function(t){e(y(!1)),e(w("succeeded"))})).catch((function(t){var n=t.response?t.response.data.error:t.message+" more details in the console";e(w("failed")),e(k(n.message))}))}))},className:je.a.logoutButton,children:"Log Out"}):Object(I.jsx)(de.b,{to:"/login",children:" Login "})]}),Object(I.jsx)("div",{className:je.a.signup,children:Object(I.jsx)(de.b,{to:"/signup",children:"Sign Up"})})]})})},pe=n(91),Oe=n.n(pe),he=function(){return Object(I.jsxs)("div",{className:Oe.a.mainDiv,children:[Object(I.jsx)("div",{children:Object(I.jsx)(de.b,{to:"/profile",children:"Profile"})}),Object(I.jsx)("div",{children:Object(I.jsx)(de.b,{to:"/cards",children:"Cards "})}),Object(I.jsxs)("div",{children:[" ",Object(I.jsx)(de.b,{to:"/packs",children:" Packs "})," "]}),Object(I.jsx)("div",{children:Object(I.jsx)(de.b,{to:"/forgotPassword",children:"Forgot Password"})}),Object(I.jsxs)("div",{children:[" ",Object(I.jsx)(de.b,{to:"/resetPassword",children:"Reset Password"})]}),Object(I.jsx)(de.b,{to:"/test",children:"Test"})]})},me=function(){return Object(b.c)((function(e){return e.login.isLoggedIn}))?Object(I.jsx)("div",{children:"this is cards"}):Object(I.jsx)(u.a,{to:"/login"})},xe=n(53),ge=n.n(xe),fe=n(187),_e=n(192),ve=n(190),Ce=n(194),ke=n(196),we=n(193),Se=n(195),Ne=n(204),Pe=n(197),ye=n(207),Ie=g.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Te=function(){return Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie.get("cards/pack");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data.cardPacks);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",alert(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},Ee=function(e){return Object(h.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ie.post("cards/packs",{cardsPack:e});case 3:if(200!==(n=t.sent).status){t.next=6;break}return t.abrupt("return",alert(n.data.newCardsPack));case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",alert(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},Le=function(){Object(b.b)();Object(a.useEffect)((function(){Te()}),[]);var e=Object(a.useState)([{name:"first one",cardsCount:25,updated:"2020-05-20",url:""},{name:"second one",cardsCount:5,updated:"2020-06-20",url:""},{name:"third one",cardsCount:2,updated:"2020-03-23",url:""},{name:"no name",cardsCount:3,updated:"2020-05-16",url:""},{name:"no name",cardsCount:3,updated:"2020-05-16",url:""},{name:"no name",cardsCount:3,updated:"2020-05-16",url:""},{name:"no name",cardsCount:3,updated:"2020-05-16",url:""},{name:"no name",cardsCount:3,updated:"2020-05-16",url:""},{name:"no name",cardsCount:3,updated:"2020-05-16",url:""}]),t=Object(d.a)(e,2),n=t[0],r=(t[1],Object(a.useState)([{id:"name",label:"Name",disableSorting:!0},{id:"cardsCount",label:"Cards Count"},{id:"updated",label:"Updated",disableSorting:!0},{id:"url",label:"URL",disableSorting:!0},{id:"actions",label:"Actions",disableSorting:!0}])),s=Object(d.a)(r,2),c=s[0],i=(s[1],Object(a.useState)(0)),o=Object(d.a)(i,2),u=o[0],l=o[1],j=[5,10,25],p=Object(a.useState)(j[u]),O=Object(d.a)(p,2),h=O[0],m=O[1],x=Object(a.useState)(),g=Object(d.a)(x,2),f=g[0],_=g[1],v=Object(a.useState)(),C=Object(d.a)(v,2),k=C[0],w=C[1],S=Object(fe.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}))(),N=function(e,t){l(t)};function P(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}return Object(I.jsxs)("div",{children:[Object(I.jsx)(ve.a,{children:Object(I.jsxs)(_e.a,{className:S.table,children:[Object(I.jsx)(we.a,{children:Object(I.jsxs)(Ce.a,{children:[c.map((function(e){return Object(I.jsx)(Se.a,{sortDirection:k===e.id&&f,children:e.disableSorting?e.label:Object(I.jsx)(ye.a,{active:k===e.id,direction:k===e.id?f:"asc",onClick:function(){return t=e.id,_(k===t&&"asc"===f?"desc":"asc"),void w(t);var t},children:e.label})},e.id)})),Object(I.jsx)(Se.a,{})]})}),Object(I.jsx)(ke.a,{children:function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}(n,function(e,t){return"desc"===e?function(e,n){return P(e,n,t)}:function(e,n){return-P(e,n,t)}}(f,k)).slice(u*h,(u+1)*h).map((function(e){return Object(I.jsxs)(Ce.a,{children:[Object(I.jsx)(Se.a,{children:e.name},"name"),Object(I.jsx)(Se.a,{children:e.cardsCount},"cards-count"),Object(I.jsx)(Se.a,{children:e.updated},"updated"),Object(I.jsx)(Se.a,{children:e.url},"updated"),Object(I.jsx)(Se.a,{children:Object(I.jsx)("button",{children:"Update"})}),Object(I.jsx)(Se.a,{children:Object(I.jsx)("button",{children:"Delete"})})]})}))})]})}),Object(I.jsx)(Pe.a,{children:Object(I.jsx)(Ce.a,{children:Object(I.jsx)(Ne.a,{component:"div",rowsPerPageOptions:j,rowsPerPage:h,page:u,count:n.length,onChangePage:function(){return N},onChangeRowsPerPage:function(e){m(parseInt(e.target.value,10)),l(0)}})})})]})},De=n(198),Re=n(206),Fe=n(97),Ae={packs:[],cardsPackTotalCount:14,maxCardsCount:4,minCardsCount:0,page:0,pageCount:4},Ue="friday-project/packs-reducer/GET_PACKS",Be="friday-project/packs-reducer/ADD_PACK",Me="friday-project/packs-reducer/CHANGE_PACK",ze="friday-project/packs-reducer/DELETE_PACK",Ge=function(){return{type:Ue}},Xe=function(e){return function(t){Ee(e),t(function(e){return{type:Be,cardsPack:e}}(e)),t(Ge())}},qe=n(201),Ke=n(202),We=n(95),Ye=n.n(We),He=function(){var e=Object(b.b)(),t=function(t){e(Xe(t))};Object(fe.a)((function(e){}));return Object(I.jsx)("div",{children:Object(I.jsxs)(De.a,{children:[Object(I.jsx)(qe.a,{children:Object(I.jsx)(Re.a,{id:"searchingInput",label:"Search for the pack",InputProps:{startAdornment:Object(I.jsx)(Ke.a,{position:"start",children:Object(I.jsx)(Ye.a,{})})}})}),Object(I.jsx)("button",{className:ge.a.packsAddButton,onClick:function(){return t},children:"Add"})]})})},Ze=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2);t[0],t[1];return Object(I.jsx)("div",{className:ge.a.packsMainDiv,children:Object(I.jsxs)("div",{className:ge.a.tableContainer,children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{className:ge.a.packsCheckbox,type:"checkbox"})," My Packs "]}),Object(I.jsx)(He,{}),Object(I.jsx)(Le,{})]})})},Je=function(){Object(b.c)((function(e){return e.app.isInitialized})),Object(b.b)();return Object(I.jsxs)("div",{className:o.a.appStyles,children:[Object(I.jsx)("div",{children:Object(I.jsx)(be,{})}),Object(I.jsx)(he,{}),Object(I.jsx)("div",{className:o.a.navlinkStyle,children:Object(I.jsxs)(u.d,{children:[Object(I.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(I.jsx)(u.a,{from:"/",to:"/profile"})}}),Object(I.jsx)(u.b,{exact:!0,path:"/login",render:function(){return Object(I.jsx)(T,{})}}),Object(I.jsx)(u.b,{exact:!0,path:"/signup",render:function(){return Object(I.jsx)(U,{})}}),Object(I.jsx)(u.b,{exact:!0,path:"/profile",render:function(){return Object(I.jsx)(B,{})}}),Object(I.jsx)(u.b,{exact:!0,path:"/cards",render:function(){return Object(I.jsx)(me,{})}}),Object(I.jsx)(u.b,{exact:!0,path:"/packs",render:function(){return Object(I.jsx)(Ze,{})}}),Object(I.jsx)(u.b,{exact:!0,path:"/forgotPassword",render:function(){return Object(I.jsx)($,{})}}),Object(I.jsx)(u.b,{exact:!0,path:"/resetPassword/:resetPasswordToken",render:function(){return Object(I.jsx)(ne,{})}}),Object(I.jsx)(u.b,{exact:!0,path:"/test",component:ue}),Object(I.jsx)(u.b,{render:function(){return Object(I.jsx)(G,{})}})]})})]})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},Qe=n(52),$e=n(96),et=Object(Qe.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(m.a)(Object(m.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.error});case"APP/SET-INITIALIZED":return Object(m.a)(Object(m.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(m.a)({},e)}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:t.value});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER":return Object(m.a)(Object(m.a)({},e),t.data);default:return Object(m.a)({},e)}},forgotPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(m.a)(Object(m.a)({},e),{},{email:t.email});case H:return Object(m.a)(Object(m.a)({},e),{},{newPassword:t.newPassword});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(m.a)({},e.packs);case Be:return Object(m.a)(Object(m.a)({},e),{},{packs:[].concat(Object(Fe.a)(e.packs),[t.cardsPack])});case Me:return Object(m.a)(Object(m.a)({},e),{},{packs:e.packs.map((function(e){return e._id===t._id?Object(m.a)(Object(m.a)({},e),{},{name:t.name}):e}))});case ze:return Object(m.a)(Object(m.a)({},e),{},{packs:e.packs.filter((function(e){return e._id!=t._id}))});default:return e}}}),tt=Object(Qe.d)(et,Object(Qe.a)($e.a));c.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(b.a,{store:tt,children:Object(I.jsx)(de.a,{children:Object(I.jsx)(Je,{})})})}),document.getElementById("root")),Ve();var nt="https://neko-back.herokuapp.com/2.0"},16:function(e,t,n){e.exports={mainContainer:"login_mainContainer__1yXrH",loginForm:"login_loginForm__X-YfN",dataContainer:"login_dataContainer__3UeUz",emailInput:"login_emailInput__7bhux",passwordInput:"login_passwordInput__1VXsF",emailContainer:"login_emailContainer__9Qs1Z",passwordContainer:"login_passwordContainer__3C1re",rememberMeContainer:"login_rememberMeContainer__2H6cG",spanDiv:"login_spanDiv__1T6cl",loginSpan:"login_loginSpan__2WeRs",buttonContainer:"login_buttonContainer__1VFh7",loadingStatus:"login_loadingStatus__jmXPr",failedStatus:"login_failedStatus__3ebY0",buttonLogin:"login_buttonLogin__1UrB0",errorCheckStyle:"login_errorCheckStyle__3LB_X"}},21:function(e,t,n){e.exports={mainSignupContainer:"signup_mainSignupContainer__3nRwz",signupForm:"signup_signupForm__2vqMS",signupContainer:"signup_signupContainer__3bgZK",emailContainer:"signup_emailContainer__gc2cC",passwordContainer:"signup_passwordContainer__201wf",emailInput:"signup_emailInput__kD3sG",passwordInput:"signup_passwordInput__WpWms",spanDiv:"signup_spanDiv__1d7tB",signupSpan:"signup_signupSpan__2L6S8",nameInput:"signup_nameInput__3kU1C",surnameInput:"signup_surnameInput__201dW",nameInputs:"signup_nameInputs__1dnGG",firstNameContainer:"signup_firstNameContainer__27kzg",secondNameContainer:"signup_secondNameContainer__36Lb2",buttonContainer:"signup_buttonContainer__3O9iO",buttonSignup:"signup_buttonSignup__3Vbom",errorCheckStyle:"signup_errorCheckStyle__2n7Jt"}},24:function(e,t,n){e.exports={mainDivTest:"superInput_mainDivTest__-fU4J",superInput:"superInput_superInput__1lAzC",errorInput:"superInput_errorInput__3yxDK",error:"superInput_error__3TQxO",checkbox:"superInput_checkbox__2aX1I",checkboxStyle:"superInput_checkboxStyle__3U3yE",default:"superInput_default__1vHFr",red:"superInput_red__3XSHw"}},30:function(e,t,n){e.exports={mainContainer:"forgotPassword_mainContainer__3nYOT",recoverForm:"forgotPassword_recoverForm__10KO6",dataContainer:"forgotPassword_dataContainer__1Oy6L",recoverInput:"forgotPassword_recoverInput__1vQ4X",recoverPasswordContainer:"forgotPassword_recoverPasswordContainer__3eXoj",recoverSpan:"forgotPassword_recoverSpan__1F1fe",enterEmailSpan:"forgotPassword_enterEmailSpan__f0pvr",buttonContainer:"forgotPassword_buttonContainer__2GGB3",buttonReset:"forgotPassword_buttonReset__1S5s-",errorCheckStyle:"forgotPassword_errorCheckStyle__1LIaI",loadingText:"forgotPassword_loadingText__3Uh08"}},32:function(e,t,n){e.exports={mainContainer:"resetPassword_mainContainer__2SdOP",resetForm:"resetPassword_resetForm__8FN92",dataContainer:"resetPassword_dataContainer__Fc64z",newPasswordInput:"resetPassword_newPasswordInput__2Ecdl",confirmPasswordInput:"resetPassword_confirmPasswordInput__3FirR",newPasswordContainer:"resetPassword_newPasswordContainer__3EYNR",confirmPasswordContainer:"resetPassword_confirmPasswordContainer__2bfZi",resetSpan:"resetPassword_resetSpan__gf0zL",buttonContainer:"resetPassword_buttonContainer__1T8sM",buttonReset:"resetPassword_buttonReset__25oxW",errorCheckStyle:"resetPassword_errorCheckStyle__1Xpt2"}},53:function(e,t,n){e.exports={packsMainDiv:"Packs_packsMainDiv__2gPzP",packsCheckbox:"Packs_packsCheckbox__3SI1O",packsTitle:"Packs_packsTitle__1mnq5",packsAddButton:"Packs_packsAddButton__1TvNM"}},57:function(e,t,n){e.exports={mainDiv:"header_mainDiv__3_Stn",linksContainer:"header_linksContainer__2yqN-",login:"header_login__YsxWo",signup:"header_signup__3pOhg",logoutButton:"header_logoutButton__3z_vm"}},70:function(e,t,n){e.exports={container:"notFoundPage_container__3HphT",getLostSpan:"notFoundPage_getLostSpan__1MyZx",mainDiv:"notFoundPage_mainDiv__1zoVL"}},74:function(e,t,n){},91:function(e,t,n){e.exports={mainDiv:"navlink_mainDiv__3vrzX"}}},[[144,1,2]]]);
//# sourceMappingURL=main.bcda654a.chunk.js.map