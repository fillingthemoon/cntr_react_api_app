(this.webpackJsonpcntr_react_api_app=this.webpackJsonpcntr_react_api_app||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=(a(11),a(1)),u=a.n(i),h=a(5),o=a(2);var p=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(o.a)(l,2),p=i[0],s=i[1],m="0xaedd8bc2c9abc2f7887ff4bbb33ca00874db05a5";return Object(n.useState)(Object(h.a)(u.a.mark((function e(){var t,a,n,r,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.blockcypher.com/v1/eth/main/addrs/"+m+"/balance");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.balance,c(n),e.next=10,fetch("https://api.blockcypher.com/v1/eth/main");case 10:return r=e.sent,e.next=13,r.json();case 13:l=e.sent,i=l.height,s(i);case 16:case"end":return e.stop()}}),e)}))),[]),r.a.createElement("div",{id:"home-container"},r.a.createElement("h1",null," Ethereum ReactJS API App "),r.a.createElement("div",{id:"api-website"},r.a.createElement("p",null," using the ",r.a.createElement("a",{href:"https://www.blockcypher.com/dev/ethereum/#introduction",target:"_blank"},"BlockCypher Ethereum API")," ")),r.a.createElement("div",{id:"container"},r.a.createElement("h3",null," Ethereum address: "),r.a.createElement("p",null," ",m," ")),r.a.createElement("div",{id:"container"},r.a.createElement("h3",null," Current Ethereum block height: "),r.a.createElement("p",null," ",p," ")),r.a.createElement("div",{id:"container"},r.a.createElement("h3",null," Ether balance of address (wei): "),r.a.createElement("p",null," ",a," ")),r.a.createElement("div",{id:"github-link"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/fillingthemoon/cntr_react_api_app",target:"_blank"}," GitHub repo here "))),'"')};var s=function(){return r.a.createElement("div",null,r.a.createElement(p,null))};l.a.render(r.a.createElement(s,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.c51be5a0.chunk.js.map