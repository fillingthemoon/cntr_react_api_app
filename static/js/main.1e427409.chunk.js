(this.webpackJsonpcntr_react_api_app=this.webpackJsonpcntr_react_api_app||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),u=(n(11),n(1)),i=n.n(u),s=n(5),o=n(2);var p=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(null),u=Object(o.a)(l,2),p=u[0],m=u[1],h="0xaedd8bc2c9abc2f7887ff4bbb33ca00874db05a5";return Object(a.useState)(Object(s.a)(i.a.mark((function e(){var t,n,a,c,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.blockcypher.com/v1/eth/main/addrs/"+h+"/balance");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.balance,r(a),e.next=10,fetch("https://api.blockcypher.com/v1/eth/main");case 10:return c=e.sent,e.next=13,c.json();case 13:l=e.sent,u=l.height,m(u);case 16:case"end":return e.stop()}}),e)}))),[]),c.a.createElement("div",{id:"home-container"},c.a.createElement("h1",null," Centaur React API App "),c.a.createElement("div",{id:"container"},c.a.createElement("h3",null," Ethereum Address: "),c.a.createElement("p",null," ",h," ")),c.a.createElement("div",{id:"container"},c.a.createElement("h3",null," Current Ethereum block height: "),c.a.createElement("p",null," ",p," ")),c.a.createElement("div",{id:"container"},c.a.createElement("h3",null," Ethereum balance of address (wei): "),c.a.createElement("p",null," ",n," ")))};var m=function(){return c.a.createElement("div",null,c.a.createElement(p,null))};l.a.render(c.a.createElement(m,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.1e427409.chunk.js.map