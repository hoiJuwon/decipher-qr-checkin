(this["webpackJsonpdecipher-qr-front"]=this["webpackJsonpdecipher-qr-front"]||[]).push([[0],{66:function(n,e,t){},67:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,s=t(0),l=t.n(s),d=t(24),u=t.n(d),h=t(6),j=t(8),b=t(15),p=t(5),x=t(25),g=t.n(x),f=t(69),O=t(7),m=t(2),w=function(){return window.localStorage.getItem("userName")},v=function(){return window.localStorage.getItem("id")},y=O.a.div(r||(r=Object(h.a)(["\n  margin: 0 auto;\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),F=O.a.div(i||(i=Object(h.a)(["\n  margin-top: 100px;\n  margin-bottom: 30px;\n  width: 85%;\n  h1 {\n    font-size: 28px;\n    font-weight: bold;\n    color: white;\n    text-align: left;\n  }\n  h2 {\n    font-size: 18px;\n    font-weight: 400;\n    opacity: 0.7;\n    color: white;\n    text-align: left;\n  }\n  p {\n    font-size: 12px;\n    opacity: 0.7;\n    color: white;\n    text-align: left;\n  }\n"]))),k=O.a.div(c||(c=Object(h.a)(["\n  margin-top: 100px;\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  input {\n    outline: none;\n    color: white;\n    border: 1px solid white;\n    border-radius: 3px;\n    background: transparent;\n    width: 95%;\n    padding-left: 10px;\n    height: 47px;\n    font-size: 18px;\n    margin-bottom: 40px;\n  }\n  ::placeholder {\n    opacity: 0.7;\n    padding-left: 10px;\n    font-size: 18px;\n  }\n\n  button {\n    border: none;\n    border-radius: 3px;\n    color: white;\n    background-color: #00244e;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: 23px;\n    width: 100%;\n    height: 63px;\n  }\n"]))),S=O.a.div(o||(o=Object(h.a)(["\n  border-radius: 10px;\n  background-color: #00244e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  width: 300px;\n  height: 300px;\n  padding: 10px;\n  margin-bottom: 30px;\n"]))),C=O.a.button(a||(a=Object(h.a)(["\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  width: 180px;\n  height: 45px;\n  border-radius: 35px;\n  background-color: #00244e;\n  border: none;\n"])));var z=function(){var n=Object(s.useState)(!1),e=Object(p.a)(n,2),t=e[0],r=e[1],i=Object(s.useState)({userName:""}),c=Object(p.a)(i,2),o=c[0],a=c[1],l=Object(s.useState)(!1),d=Object(p.a)(l,2),u=d[0],h=d[1],x=Object(s.useState)(""),O=Object(p.a)(x,2),z=O[0],N=O[1],I=o.userName;Object(s.useEffect)((function(){var n=w(),e=v();e&&0!==e.length||function(){var n=Object(f.a)();window.localStorage.setItem("id",n)}(),n&&0!==n.length&&e&&0!==e.length&&(r((function(){return!0})),q())}),[]);var q=function(){var n=w(),e={id:v(),userName:n};N((function(){return JSON.stringify(e)})),h((function(){return!0}))};return Object(m.jsxs)(y,{children:[Object(m.jsxs)(F,{children:[Object(m.jsx)("h1",{children:"\ub514\uc0ac\uc774\ud37c QR \uccb4\ud06c\uc778"}),Object(m.jsx)("h2",{children:"1. \uc774\ub984\ub4f1\ub85d"}),Object(m.jsx)("h2",{children:"2. \ud604\uc7a5\uc5d0\uc11c \uc6b4\uc601\uc9c4\uc5d0\uac8c QR \uccb4\ud06c\uc778"}),Object(m.jsx)("p",{children:"* \ube0c\ub77c\uc6b0\uc800 \uce90\uc2dc \uc0ad\uc81c \uc2dc \uc774\ub984\uc744 \uc7ac\ub4f1\ub85d \ud574\uc57c\ud569\ub2c8\ub2e4."})]}),!t&&Object(m.jsxs)(k,{children:[Object(m.jsx)("input",{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(n){var e=n.target,t=e.value,r=e.name;a(Object(b.a)(Object(b.a)({},o),{},Object(j.a)({},r,t)))},value:I,name:"userName"}),Object(m.jsx)("button",{type:"submit",onClick:function(){!function(n){window.localStorage.setItem("userName",n)}(I),r((function(){return!0})),q()},children:"\ub4f1\ub85d\ud558\uae30"})]}),u&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{children:Object(m.jsx)(g.a,{value:z,fgColor:"#FFFFFF",bgColor:"transparent"})}),Object(m.jsx)(C,{type:"submit",children:"\uc774\ub984 \uc7ac\ub4f1\ub85d\ud558\uae30"})]})]})},N=t(10),I=t.n(N),q=t(29),J=t(30);var M,B=function(){var n=function(){var n=Object(q.a)(I.a.mark((function n(){var e,t,r,i,c;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={video:!0},navigator.permissions.query({name:"camera"}).then((function(n){console.log(n.state)})).catch((function(n){console.log("Got error :",n)})),n.prev=2,n.next=5,navigator.mediaDevices.getUserMedia(e);case 5:t=n.sent,console.log(t),r=new J.a("reader"),i=function(n,e){console.log(n,e),alert("\ucd9c\uc11d!")},c={fps:900,qrbox:{width:250,height:250}},r.start({facingMode:"environment"},c,i),n.next=15;break;case 13:n.prev=13,n.t0=n.catch(2);case 15:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(){return n.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:"admin page"}),Object(m.jsx)("button",{onClick:n,children:"scan"}),Object(m.jsx)("div",{id:"reader",width:"600px"})]})},D=t(31),E=t(1),L=(t(66),O.a.div(M||(M=Object(h.a)(["\n  margin: 0 auto;\n  height: 100vh;\n  width: 100%;\n  background-color: #001731;\n"]))));var P=function(){return Object(m.jsx)(L,{children:Object(m.jsx)(D.a,{children:Object(m.jsxs)(E.c,{children:[Object(m.jsx)(E.a,{path:"/",element:Object(m.jsx)(z,{})}),Object(m.jsx)(E.a,{path:"admin",element:Object(m.jsx)(B,{})})]})})})},Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))};u.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),Q()}},[[67,1,2]]]);
//# sourceMappingURL=main.49b87a24.chunk.js.map