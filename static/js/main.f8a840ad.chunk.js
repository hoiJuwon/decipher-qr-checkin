(this["webpackJsonpdecipher-qr-front"]=this["webpackJsonpdecipher-qr-front"]||[]).push([[0],{95:function(n,t,e){},96:function(n,t,e){"use strict";e.r(t);var i,r,o,c,a,l=e(0),u=e.n(l),d=e(29),s=e.n(d),b=e(3),h=e(9),g=e(7),j=e(8),f=(e(40),e(99)),p=e(4),x=e(1),m=function(){var n=Object(f.a)();window.localStorage.setItem("id",n)},O=function(){return window.localStorage.getItem("userName")},w=function(){return window.localStorage.getItem("id")},v=p.a.div(i||(i=Object(b.a)(["\n  margin: 0 auto;\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),y=p.a.div(r||(r=Object(b.a)(["\n  margin-top: 100px;\n  margin-bottom: 30px;\n  width: 85%;\n  h1 {\n    font-size: 28px;\n    font-weight: bold;\n    color: white;\n    text-align: left;\n  }\n  h2 {\n    font-size: 18px;\n    font-weight: 400;\n    opacity: 0.7;\n    color: white;\n    text-align: left;\n  }\n  p {\n    font-size: 12px;\n    opacity: 0.7;\n    color: white;\n    text-align: left;\n  }\n"]))),S=p.a.div(o||(o=Object(b.a)(["\n  margin-top: 100px;\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  input {\n    outline: none;\n    color: white;\n    border: 1px solid white;\n    border-radius: 3px;\n    background: transparent;\n    width: 95%;\n    padding-left: 10px;\n    height: 47px;\n    font-size: 18px;\n    margin-bottom: 40px;\n  }\n  ::placeholder {\n    opacity: 0.7;\n    padding-left: 10px;\n    font-size: 18px;\n  }\n\n  button {\n    border: none;\n    border-radius: 3px;\n    color: white;\n    background-color: #00244e;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: 23px;\n    width: 100%;\n    height: 63px;\n  }\n"]))),F=(p.a.div(c||(c=Object(b.a)(["\n  border-radius: 10px;\n  background-color: #00244e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  width: 300px;\n  height: 300px;\n  padding: 10px;\n  margin-bottom: 30px;\n"]))),p.a.button(a||(a=Object(b.a)(["\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  width: 180px;\n  height: 45px;\n  border-radius: 35px;\n  background-color: #00244e;\n  border: none;\n"]))));var k=function(){var n=Object(l.useState)(!1),t=Object(j.a)(n,2),i=t[0],r=t[1],o=Object(l.useState)({userName:""}),c=Object(j.a)(o,2),a=c[0],u=c[1],d=Object(l.useState)(!1),s=Object(j.a)(d,2),b=s[0],f=s[1],p=Object(l.useState)(""),k=Object(j.a)(p,2),C=k[0],N=k[1],z=a.userName;Object(l.useEffect)((function(){var n=O(),t=w();t&&0!==t.length||m(),n&&0!==n.length&&t&&0!==t.length&&(r((function(){return!0})),I())}),[]);var I=function(){var n=O(),t=w();t&&0!==t.length||m();var i={id:t=w(),userName:n};f((function(){return!0}));var r=e(53),o=e(75),c=e(77).encode(JSON.stringify(i)),a=o.encode(c);r.toDataURL(a,{errorCorrectionLevel:"H"},(function(n,t){N((function(){return t}))}))};return Object(x.jsxs)(v,{children:[Object(x.jsxs)(y,{children:[Object(x.jsx)("h1",{children:"\ub514\uc0ac\uc774\ud37c QR \uccb4\ud06c\uc778"}),Object(x.jsx)("h2",{children:"1. \uc774\ub984\ub4f1\ub85d"}),Object(x.jsx)("h2",{children:"2. \ud604\uc7a5\uc5d0\uc11c \uc6b4\uc601\uc9c4\uc5d0\uac8c QR \uccb4\ud06c\uc778"}),Object(x.jsx)("p",{children:"* \ube0c\ub77c\uc6b0\uc800 \uce90\uc2dc \uc0ad\uc81c \uc2dc \uc774\ub984\uc744 \uc7ac\ub4f1\ub85d \ud574\uc57c\ud569\ub2c8\ub2e4."})]}),!i&&Object(x.jsxs)(S,{children:[Object(x.jsx)("input",{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(n){var t=n.target,e=t.value,i=t.name;u(Object(g.a)(Object(g.a)({},a),{},Object(h.a)({},i,e)))},value:z,name:"userName"}),Object(x.jsx)("button",{type:"submit",onClick:function(){u(Object(g.a)(Object(g.a)({},a),{},{userName:""})),function(n){window.localStorage.setItem("userName",n)}(z),r((function(){return!0})),I()},children:"\ub4f1\ub85d\ud558\uae30"})]}),b&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{src:C,style:{fgColor:"#FFFFFF",bgColor:"transparent",marginBottom:30}}),Object(x.jsx)(F,{onClick:function(){window.localStorage.clear(),r((function(){return!1})),f((function(){return!1})),N((function(){return""}))},type:"submit",children:"\uc774\ub984 \uc7ac\ub4f1\ub85d\ud558\uae30"})]})]})};e(11),e(33),e(34);e(95);var C,N=p.a.div(C||(C=Object(b.a)(["\n  margin: 0 auto;\n  height: 100vh;\n  width: 100%;\n  background-color: #001731;\n"])));var z=function(){return Object(x.jsx)(N,{children:Object(x.jsx)(k,{})})},I=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,100)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),i(n),r(n),o(n),c(n)}))};s.a.render(Object(x.jsx)(u.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),I()}},[[96,1,2]]]);
//# sourceMappingURL=main.f8a840ad.chunk.js.map