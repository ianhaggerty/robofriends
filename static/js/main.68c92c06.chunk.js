(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(13),n(4)),i=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.id,n=e.name,c=e.email;return Object(b.jsxs)("div",{className:"card bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5 tc",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(t),alt:"robots"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"f3",children:n}),Object(b.jsx)("p",{className:"f5",children:c})]})]})},u=(n(15),function(e){var t=e.robots;return Object(b.jsx)("div",{className:"cardlist",children:t.map((function(e){return Object(b.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}))})}),j=(n(16),function(e){var t=e.children;return Object(b.jsx)("div",{className:"scroll",children:t})}),f=function(e){var t=e.onSearchChange;return Object(b.jsx)("div",{className:"pas2 ma3",children:Object(b.jsx)("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"search robots",onChange:t})})},m=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).componentDidMount=function(){fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){c.setState({robots:e})}))},c.onSearchChange=function(e){c.setState({searchField:e.target.value})},c.state={robots:[],searchField:""},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(b.jsxs)("div",{className:"app tc courier",children:[Object(b.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(b.jsx)(f,{onSearchChange:this.onSearchChange}),Object(b.jsx)(j,{children:Object(b.jsx)(u,{robots:n})})]})}}]),n}(r.a.Component));a.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.68c92c06.chunk.js.map