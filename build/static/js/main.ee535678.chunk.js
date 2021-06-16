(this["webpackJsonpstart-page"]=this["webpackJsonpstart-page"]||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(16),c=n.n(a),l=(n(25),n(5)),i=n(3),s=n(4),u=n(7),d=n(8),b=n(6),j=n(1);var m=function(e){var t=e.backgroundColor,n=e.setBackgroundColor,o=function(e){n(e),localStorage.setItem("start-page-background",e)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"backgroundColorInput",children:"Background Color"}),Object(j.jsx)(b.b,{color:t,onChange:function(e){o(e)}}),Object(j.jsx)(b.a,{id:"backgroundColorInput",color:t,onChange:function(e){o(e)}})]})};var g=function(e){var t=e.textColor,n=e.setTextColor,o=function(e){n(e),localStorage.setItem("start-page-text-color",e)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"textColorInput",children:"Text Color"}),Object(j.jsx)(b.b,{color:t,onChange:function(e){o(e)}}),Object(j.jsx)(b.a,{id:"textColorInput",color:t,onChange:function(e){o(e)}})]})};var h,p,x,O=function(e){var t=e.linkColor,n=e.setLinkColor,o=function(e){n(e),localStorage.setItem("start-page-text-color",e)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"linkColorInput",children:"Link Color"}),Object(j.jsx)(b.b,{color:t,onChange:function(e){o(e)}}),Object(j.jsx)(b.a,{id:"linkColorInput",color:t,onChange:function(e){o(e)}})]})},f=s.a.button(h||(h=Object(i.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(0, 0, 0, 0);\n  border: 1px solid;\n  color: ",";\n  border-radius: 3px;\n  padding: 0.3rem 0.5rem;\n"])),(function(e){return e.linkColor?e.linkColor:"#2aa198"})),C=s.a.div(p||(p=Object(i.a)(["\n  max-width: 880px;\n  margin: 0 auto;\n"]))),k=s.a.div(x||(x=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem auto;\n  & label {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0 auto 0.5rem;\n  }\n  & input {\n    width: calc(200px - 15px);\n    background: none;\n    border: 1px solid;\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n    margin: -5px 0 0;\n    display: block;\n    padding: 10px 6px 6px;\n    color: ",";\n    text-align: center;\n  }\n"])),(function(e){return e.textColor?e.textColor:"#93a1a1"}));var v,w,S,F,I=function(e){var t=e.backgroundColor,n=e.setBackgroundColor,r=e.textColor,a=e.setTextColor,c=e.linkColor,i=e.setLinkColor,s=e.username,b=e.setUsername,h=Object(o.useState)(!1),p=Object(l.a)(h,2),x=p[0],v=p[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{linkColor:c,onClick:function(){return v(!x)},children:Object(j.jsx)(u.a,{icon:d.a})}),x?Object(j.jsxs)(C,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"usernameInput",children:"Name: "}),Object(j.jsx)("input",{type:"text",id:"usernameInput",placeholder:"Name",value:s,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsxs)(k,{textColor:r,children:[Object(j.jsx)(m,{backgroundColor:t,setBackgroundColor:n}),Object(j.jsx)(g,{textColor:r,setTextColor:a}),Object(j.jsx)(O,{linkColor:c,setLinkColor:i})]})]}):null]})},y=s.a.button(v||(v=Object(i.a)(["\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: rgba(0, 0, 0, 0);\n  border: 1px solid;\n  color: ",";\n  border-radius: 3px;\n  padding: 0.3rem 0.5rem;\n"])),(function(e){return e.linkColor?e.linkColor:"#2aa198"})),A=s.a.div(w||(w=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 750px;\n  margin: 0.5rem auto;\n"]))),z=s.a.label(S||(S=Object(i.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n"]))),D=s.a.input(F||(F=Object(i.a)(["\n  margin: 0.5em auto;\n  width: 100%;\n  color: ",";\n  background: none;\n  border: none;\n  border-bottom: 1px solid;\n  padding: 0.25rem 0;\n"])),(function(e){return e.textColor?e.textColor:"#93a1a1"}));var L,T=function(e){var t=e.textColor,n=Object(o.useState)(!1),r=Object(l.a)(n,2),a=r[0],c=r[1],i=Object(o.useState)(""),s=Object(l.a)(i,2),b=s[0],m=s[1];return Object(j.jsx)(j.Fragment,{children:a?Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{onClick:function(){c(!a)},children:Object(j.jsx)(u.a,{icon:d.c})}),Object(j.jsxs)(A,{children:[Object(j.jsx)(z,{htmlFor:"searchInput",children:"Search"}),Object(j.jsx)(D,{type:"text",id:"searchInput",value:b,onChange:function(e){return m(e.target.value)},placeholder:"What knowledge do you seek young padawan?",textColor:t}),b&&Object(j.jsx)("button",{onClick:function(){window.location.href="https://www.google.com/search?q=".concat(b)},children:"Search"})]})]}):Object(j.jsx)(y,{onClick:function(){c(!a)},children:Object(j.jsx)(u.a,{icon:d.b})})})},G=s.a.p(L||(L=Object(i.a)(["\n  text-align: center;\n  font-size: 3rem;\n"])));var M,B=function(e){var t=e.username,n=["Suh","Hello","Welcome"],o=n[Math.floor(Math.random()*n.length)];return Object(j.jsxs)(G,{children:[o," ",t]})},_=s.a.p(M||(M=Object(i.a)(["\n  text-align: center;\n  font-size: 1.75rem;\n  margin: 0.5rem;\n"])));var H,W=function(){var e=Object(o.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(null),c=Object(l.a)(a,2),i=c[0],s=c[1];return Object(o.useEffect)((function(){!function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,o=e.getFullYear();t<10&&(t="0"+t),n<10&&(n="0"+n),s(n+"-"+t+"-"+o)}();var e=setInterval((function(){!function(){var e=new Date,t=e.getMinutes(),n=e.getSeconds(),o=e.getHours();r((o<10?"0"+o:o)+":"+(t<10?"0"+t:t)+":"+(n<10?"0"+n:n))}()}),1e3);return function(){return clearInterval(e)}})),Object(j.jsxs)(j.Fragment,{children:[n?Object(j.jsx)(_,{children:n}):Object(j.jsx)(_,{children:"Calculating time..."}),Object(j.jsx)(_,{children:i})]})},E=s.a.p(H||(H=Object(i.a)(["\n  text-align: center;\n  font-size: 1.75rem;\n  margin: 0.5rem;\n  & span{\n    text-transform: capitalize;\n  }\n"])));var J,N,R,U,q,K=function(){var e=Object(o.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(null),c=Object(l.a)(a,2),i=c[0],s=c[1];return Object(o.useEffect)((function(){!function(){var e=new XMLHttpRequest;e.open("GET","https://api.openweathermap.org/data/2.5/weather?id=5729080&units=imperial&appid=e5b292ae2f9dae5f29e11499c2d82ece"),e.onload=function(){if(4===e.readyState)if(200===e.status){var t=JSON.parse(e.responseText);s(t.main.temp.toFixed(0)+"\xb0F"),r(t.weather[0].description)}else console.log("error msg: "+e.status)},e.send()}()})),Object(j.jsx)(j.Fragment,{children:n&&i?Object(j.jsxs)(E,{children:[Object(j.jsx)("span",{children:n})," and ",i]}):Object(j.jsx)(E,{children:"Fetching Weather..."})})},Z=n(20),V={dutchie:[{url:"https://id.dutchie.com/app/UserHome#",name:"OKTA"},{url:"https://dutchie.atlassian.net/wiki/home",name:"Wiki"},{url:"https://github.com/GetDutchie",name:"Github"},{url:"https://dev.azure.com/leaflogix/Leaf%20Logix%20Apps",name:"LeafLogix Apps"},{url:"https://dutchie.atlassian.net/jira/projects",name:"Jira"},{url:"https://app.gusto.com/login",name:"Gusto"},{url:"https://secure.zenefits.com/accounts/login/?next=/dashboard/#/",name:"Zenefits"},{url:"https://rollbar.com/Dutchie/",name:"Rollbar"},{url:"https://dutchie.app.opsgenie.com/auth/login?targetUri=%2Falert%2Flist",name:"Opsgenie"},{url:"https://www.figma.com/login",name:"Figma"},{url:"https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-2.console.aws.amazon.com%2Fconsole%2Fhome%3Ffromtb%3Dtrue%26hashArgs%3D%2523%26isauthcode%3Dtrue%26region%3Dus-east-2%26state%3DhashArgsFromTB_us-east-2_6cabd1e5c9bb6592&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=zGHn4hKzVeoRmf4JuWN09TAMiI9dcvFFGZqIzGk8Ah4&code_challenge_method=SHA-256",name:"AWS"}],localhost:[{url:"http://localhost:3000",name:"3000"},{url:"http://localhost:5000",name:"5000"},{url:"http://localhost:8000",name:"8000"},{url:"http://localhost:8888",name:"8888"}],google:[{url:"https://mail.google.com",name:"Gmail"},{url:"https://drive.google.com",name:"Drive"},{url:"https://calendar.google.com",name:"Calendar"},{url:"https://admin.google.com",name:"Admin"}],stuff:[{url:"https://github.com/",name:"Github"},{url:"https://old.reddit.com/r/all",name:"Reddit"}]},X=s.a.div(J||(J=Object(i.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]))),Y=s.a.ul(N||(N=Object(i.a)(["\n  border: 1px solid;\n  list-style: none;\n  width: 100%;\n  max-width: 200px;\n  min-width: 150px;\n  margin: 0.5rem auto;\n  border-radius: 3px;\n  padding: 0;\n"]))),P=s.a.p(R||(R=Object(i.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n  font-size: 1.25rem;\n  background-color: ",";\n  padding: 0.5rem;\n  border-radius: 3px 3px 0 0;\n"])),(function(e){return e.backgroundColor?Object(Z.a)(.05,e.backgroundColor):"#073642"})),Q=s.a.li(U||(U=Object(i.a)(["\n  margin: 0.5rem 1rem;\n"]))),$=s.a.a(q||(q=Object(i.a)(["\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));var ee,te=function(e){var t=e.linkColor,n=e.backgroundColor;return Object(j.jsx)(X,{children:Object.keys(V).map((function(e){return Object(j.jsxs)(Y,{children:[Object(j.jsx)(P,{backgroundColor:n,children:e}),V[e].map((function(e){return Object(j.jsx)(Q,{children:Object(j.jsx)($,{href:e.url,style:{color:t},children:e.name})},e.name)}))]},e)}))})},ne=s.a.div(ee||(ee=Object(i.a)(["\n  height: 100%;\n  overflow: scroll;\n  padding: 3rem;\n"])));var oe=function(){var e=Object(o.useState)("#073642"),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)("#93a1a1"),c=Object(l.a)(a,2),i=c[0],s=c[1],u=Object(o.useState)("#2aa198"),d=Object(l.a)(u,2),b=d[0],m=d[1],g=Object(o.useState)(""),h=Object(l.a)(g,2),p=h[0],x=h[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("start-page-background"),t=localStorage.getItem("start-page-text-color"),n=localStorage.getItem("start-page-link-color"),o=localStorage.getItem("start-page-username");e&&r(e),t&&s(t),n&&m(n),o&&x(o)}),[]),Object(j.jsxs)(ne,{style:{backgroundColor:n,color:i},children:[Object(j.jsx)(I,{backgroundColor:n,setBackgroundColor:r,textColor:i,setTextColor:s,linkColor:b,setLinkColor:m,username:p,setUsername:x}),Object(j.jsx)(T,{textColor:i}),Object(j.jsx)(B,{username:p}),Object(j.jsx)(W,{}),Object(j.jsx)(K,{}),Object(j.jsx)(te,{linkColor:b,backgroundColor:n})]})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(oe,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ee535678.chunk.js.map