(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(44)},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),l=n(3),u=n.n(l),i=n(4),s=n(14),m=n(2),d=function(e){var t=e.note,n=e.toggleImportance,a=e.removeNote,o=t.important?"imp-btn makeUnimportant":"imp-btn makeImportant";return r.a.createElement("li",{className:t.day},r.a.createElement("button",{onClick:a,className:"remove-btn"}),r.a.createElement("button",{onClick:n,className:o}),t.time," ",t.content)},f=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},p=r.a.forwardRef(function(e,t){var n=Object(a.useState)(!1),o=Object(m.a)(n,2),c=o[0],l=o[1],u={display:c?"none":""},i={display:c?"":"none"},s=function(){l(!c)};return Object(a.useImperativeHandle)(t,function(){return{toggleVisibility:s}}),r.a.createElement("div",null,r.a.createElement("div",{style:u},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"cancel")))}),v=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,o=e.username,c=e.password;return r.a.createElement("div",{className:"loginForm"},r.a.createElement("h2",null,"Kirjaudu"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"Username",r.a.createElement("input",{value:o,onChange:n})),r.a.createElement("div",null,"Password",r.a.createElement("input",{type:"password",value:c,onChange:a})),r.a.createElement("button",{type:"submit"},"Log in")))},b=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","TODO"],E=function(e){var t=e.onSubmit,n=e.handleDayChange,a=e.handleTimeChange,o=e.handleContentChange,c=e.day,l=e.time,u=e.content;return r.a.createElement("div",{className:"createNew"},r.a.createElement("h2",null,"Create new note"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"note-container"},r.a.createElement("label",null,"Day"),r.a.createElement("select",{value:c,onChange:n},b.map(function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement("div",{className:"note-container"},r.a.createElement("label",null,"Time"),r.a.createElement("select",{value:l,onChange:a},r.a.createElement("option",{value:"8:00"},"8:00"),r.a.createElement("option",{value:"9:00"},"9:00"),r.a.createElement("option",{value:"10:00"},"10:00"),r.a.createElement("option",{value:"11:00"},"11:00"),r.a.createElement("option",{value:"12:00"},"12:00"),r.a.createElement("option",{value:"13:00"},"13:00"),r.a.createElement("option",{value:"14:00"},"14:00"),r.a.createElement("option",{value:"15:00"},"15:00"),r.a.createElement("option",{value:"16:00"},"16:00"),r.a.createElement("option",{value:"17:00"},"17:00"),r.a.createElement("option",{value:"18:00"},"18:00"),r.a.createElement("option",{value:"19:00"},"19:00"),r.a.createElement("option",{value:"20:00"},"20:00"),r.a.createElement("option",{value:"21:00"},"21:00"))),r.a.createElement("div",{className:"note-container"},r.a.createElement("label",null,"Content"),r.a.createElement("input",{value:u,onChange:o})),r.a.createElement("button",{type:"submit",className:"submit-btn"})))},h=n(5),g=n.n(h),y=null,w={getAll:function(){return g.a.get("/api/notes").then(function(e){return e.data})},create:function(){var e=Object(i.a)(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:y}},e.next=3,g.a.post("/api/notes",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e){return g.a.put("".concat("/api/notes","/").concat(e.id),e).then(function(e){return e.data})},setToken:function(e){y="bearer ".concat(e)},remove:function(e){return console.log("deleted"),g.a.delete("".concat("/api/notes","/").concat(e.id)).then(function(e){return e.data})}},O={login:function(){var e=Object(i.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},j=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","TODO"],S=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!0),l=Object(m.a)(c,2),b=l[0],h=l[1],g=Object(a.useState)(null),y=Object(m.a)(g,2),S=y[0],C=y[1],k=Object(a.useState)(""),N=Object(m.a)(k,2),D=N[0],T=N[1],x=Object(a.useState)(""),I=Object(m.a)(x,2),A=I[0],L=I[1],U=Object(a.useState)(""),F=Object(m.a)(U,2),J=F[0],M=F[1],P=Object(a.useState)(""),B=Object(m.a)(P,2),R=B[0],W=B[1],z=Object(a.useState)(""),H=Object(m.a)(z,2),K=H[0],V=H[1],Y=Object(a.useState)(null),q=Object(m.a)(Y,2),G=q[0],Q=q[1];Object(a.useEffect)(function(){w.getAll().then(function(e){o(e)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedAppUser");if(e){var t=JSON.parse(e);Q(t),w.setToken(t.token)}},[]);var X=b?n:n.filter(function(e){return e.important}),Z=function(e){e.preventDefault();var t={time:J,day:R,content:K,date:(new Date).toISOString(),important:Math.random()>.5};console.log(t),w.create(t).then(function(e){o(n.concat(e))})},$=function(e){W(""),M(""),V("")},_=function(e){return X.map(function(t){return e===t.day?r.a.createElement(d,{key:t.id,note:t,toggleImportance:function(){return function(e){var t=n.find(function(t){return t.id===e}),a=Object(s.a)({},t,{important:!t.important});w.update(a).then(function(t){o(n.map(function(n){return n.id!==e?n:t}))}).catch(function(a){alert("note: '".concat(t.content,"' has already been removed from the database")),o(n.filter(function(t){return t.id!==e}))})}(t.id)},removeNote:function(){return function(e){var t=n.find(function(t){return t.id===e});w.remove(t).then(function(t){o(n.filter(function(t){return t.id!==e}))}).catch(function(a){alert("note: '".concat(t.content,"' has already been removed from the database")),o(n.filter(function(t){return t.id!==e}))})}(t.id)}}):console.log(e)})},ee=function(e){var t=(new Date).getDay()-1;return e===j[t]?"today":""},te=function(){var e=Object(i.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.login({username:D,password:A});case 4:n=e.sent,window.localStorage.setItem("loggedAppUser",JSON.stringify(n)),w.setToken(n.token),Q(n),T(""),L(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),C("k\xe4ytt\xe4j\xe4tunnus tai salasana virheellinen"),setTimeout(function(){C(null)},5e3);case 16:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),ne=r.a.createRef(),ae=function(){var e=Object(i.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.localStorage.clear(),window.location.reload();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Bullet journal week ",function(){var e=new Date,t=new Date(e.getFullYear(),0,1),n=(e-t)/864e5;return Math.ceil((n+t.getDay()+1)/7)}()),r.a.createElement(f,{message:S}),null===G?r.a.createElement("div",{className:"login-container"},r.a.createElement(p,{buttonLabel:"Log in"},r.a.createElement(v,{username:D,password:A,handleUsernameChange:function(e){var t=e.target;return T(t.value)},handlePasswordChange:function(e){var t=e.target;return L(t.value)},handleSubmit:te}))):r.a.createElement("div",null,r.a.createElement("div",{className:"menu"},r.a.createElement("p",null,G.name," is logged in"),r.a.createElement("button",{onClick:ae},"Log Out")),r.a.createElement(p,{buttonLabel:"Add note",ref:ne},r.a.createElement(E,{onSubmit:Z,time:J,day:R,content:K,handleTimeChange:function(e){var t=e.target;return M(t.value)},handleDayChange:function(e){var t=e.target;return W(t.value)},handleContentChange:function(e){var t=e.target;return V(t.value)},handleSubmit:$})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return h(!b)}},"Show ",b?"only events":"all")),r.a.createElement("div",{className:"days-container"},j.map(function(e){return r.a.createElement("div",{className:"day-container",key:e},r.a.createElement("h2",{className:ee(e)},e),r.a.createElement("ul",null,_(e)))}))))};n(42);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.a133fc27.chunk.js.map