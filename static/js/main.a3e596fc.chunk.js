(this["webpackJsonpdecipher-qr-front"]=this["webpackJsonpdecipher-qr-front"]||[]).push([[0],{63:function(n,t,e){},64:function(n,t,e){"use strict";e.r(t);var i,r,o,c,a,l=e(0),d=e.n(l),s=e(21),u=e.n(s),b=e(3),h=e(6),j=e(12),p=e(5),g=e(22),x=e.n(g),f=e(67),O=e(4),m=e(1),w=function(){return window.localStorage.getItem("userName")},v=function(){return window.localStorage.getItem("id")},y=O.a.div(i||(i=Object(b.a)(["\n  margin: 0 auto;\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),F=O.a.div(r||(r=Object(b.a)(["\n  margin-top: 100px;\n  margin-bottom: 30px;\n  width: 85%;\n  h1 {\n    font-size: 28px;\n    font-weight: bold;\n    color: white;\n    text-align: left;\n  }\n  h2 {\n    font-size: 18px;\n    font-weight: 400;\n    opacity: 0.7;\n    color: white;\n    text-align: left;\n  }\n  p {\n    font-size: 12px;\n    opacity: 0.7;\n    color: white;\n    text-align: left;\n  }\n"]))),S=O.a.div(o||(o=Object(b.a)(["\n  margin-top: 100px;\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  input {\n    outline: none;\n    color: white;\n    border: 1px solid white;\n    border-radius: 3px;\n    background: transparent;\n    width: 95%;\n    padding-left: 10px;\n    height: 47px;\n    font-size: 18px;\n    margin-bottom: 40px;\n  }\n  ::placeholder {\n    opacity: 0.7;\n    padding-left: 10px;\n    font-size: 18px;\n  }\n\n  button {\n    border: none;\n    border-radius: 3px;\n    color: white;\n    background-color: #00244e;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: 23px;\n    width: 100%;\n    height: 63px;\n  }\n"]))),k=O.a.div(c||(c=Object(b.a)(["\n  border-radius: 10px;\n  background-color: #00244e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  width: 300px;\n  height: 300px;\n  padding: 10px;\n  margin-bottom: 30px;\n"]))),z=O.a.button(a||(a=Object(b.a)(["\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  width: 180px;\n  height: 45px;\n  border-radius: 35px;\n  background-color: #00244e;\n  border: none;\n"])));var C=function(){var n=Object(l.useState)(!1),t=Object(p.a)(n,2),e=t[0],i=t[1],r=Object(l.useState)({userName:""}),o=Object(p.a)(r,2),c=o[0],a=o[1],d=Object(l.useState)(!1),s=Object(p.a)(d,2),u=s[0],b=s[1],g=Object(l.useState)(""),O=Object(p.a)(g,2),C=O[0],N=O[1],I=c.userName;Object(l.useEffect)((function(){var n=w(),t=v();t&&0!==t.length||function(){var n=Object(f.a)();window.localStorage.setItem("id",n)}(),n&&0!==n.length&&t&&0!==t.length&&(i((function(){return!0})),J())}),[]);var J=function(){var n=w(),t={id:v(),userName:n};N((function(){return JSON.stringify(t)})),b((function(){return!0}))};return Object(m.jsxs)(y,{children:[Object(m.jsxs)(F,{children:[Object(m.jsx)("h1",{children:"\ub514\uc0ac\uc774\ud37c QR \uccb4\ud06c\uc778"}),Object(m.jsx)("h2",{children:"1. \uc774\ub984\ub4f1\ub85d"}),Object(m.jsx)("h2",{children:"2. \ud604\uc7a5\uc5d0\uc11c \uc6b4\uc601\uc9c4\uc5d0\uac8c QR \uccb4\ud06c\uc778"}),Object(m.jsx)("p",{children:"* \ube0c\ub77c\uc6b0\uc800 \uce90\uc2dc \uc0ad\uc81c \uc2dc \uc774\ub984\uc744 \uc7ac\ub4f1\ub85d \ud574\uc57c\ud569\ub2c8\ub2e4."})]}),!e&&Object(m.jsxs)(S,{children:[Object(m.jsx)("input",{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(n){var t=n.target,e=t.value,i=t.name;a(Object(j.a)(Object(j.a)({},c),{},Object(h.a)({},i,e)))},value:I,name:"userName"}),Object(m.jsx)("button",{type:"submit",onClick:function(){!function(n){window.localStorage.setItem("userName",n)}(I),i((function(){return!0})),J()},children:"\ub4f1\ub85d\ud558\uae30"})]}),u&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{children:Object(m.jsx)(x.a,{value:C,fgColor:"#FFFFFF",bgColor:"transparent"})}),Object(m.jsx)(z,{type:"submit",children:"\uc774\ub984 \uc7ac\ub4f1\ub85d\ud558\uae30"})]})]})};e(8),e(26),e(27);e(63);var N,I=O.a.div(N||(N=Object(b.a)(["\n  margin: 0 auto;\n  height: 100vh;\n  width: 100%;\n  background-color: #001731;\n"])));var J=function(){return Object(m.jsx)(I,{children:Object(m.jsx)(C,{})})},q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,68)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),i(n),r(n),o(n),c(n)}))};u.a.render(Object(m.jsx)(d.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root")),q()}},[[64,1,2]]]);
//# sourceMappingURL=main.a3e596fc.chunk.js.map