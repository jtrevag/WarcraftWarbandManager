(this["webpackJsonpwarcraft-warband-manager"]=this["webpackJsonpwarcraft-warband-manager"]||[]).push([[0],{127:function(e,t){},128:function(e,t){},155:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),i=a.n(r),s=(a(53),a(9)),l=a(3),o=a(4),d=a(5),j=a(48),m=(a(54),a(55),a(1));function b(e){var t=e.setView;return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"homeButton btn btn-primary",type:"button",onClick:function(){return t("Booster")},children:"Booster Generator"}),Object(m.jsx)("button",{className:"homeButton btn btn-primary",type:"button",onClick:function(){return t("Manager")},children:"Warband Manager"})]})}var u=a(2);function h(e){var t=e.character;console.log(t.fields);var a=t.get("Character Card")[0].url,c=t.get("Item Card (from Card 1)")[0].url,n=t.get("Item Card (from Card 2)")[0].url;return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-5 d-print-inline",children:Object(m.jsx)("img",{className:"img-fluid",src:a,alt:"Character Card"})}),Object(m.jsx)("div",{className:"col-3 d-print-inline",children:Object(m.jsx)("img",{className:"img-fluid",src:c,alt:"Item Card 1"})}),Object(m.jsx)("div",{className:"col-3 d-print-inline",children:Object(m.jsx)("img",{className:"img-fluid",src:n,alt:"Item Card 2"})})]},t.get("Id"))}var O=a(19);a(57);function v(e){var t=e.setView,a=e.miniatures,n=Object(c.useState)([]),r=Object(u.a)(n,2),i=r[0],s=r[1],l=Object(c.useState)(""),o=Object(u.a)(l,2),d=o[0],j=o[1],b=[{value:"Horde",label:"Horde"},{value:"Alliance",label:"Alliance"},{value:"Monster",label:"Monster"}];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"mb-3 row d-print-none",children:[Object(m.jsx)("h3",{children:"Random Booster Generator"}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){t("Home")},children:"Go Back"})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)(O.a,{onChange:function(e){j(e?e.value:"")},isClearable:!0,options:b})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){!function(){var e=d;function t(e){return Math.floor(Math.random()*e)}e||(e=b[t(3)].value);var c=a.filter((function(t){return t.get("Faction")===e}));console.log(c);var n=c.filter((function(e){return"Common"!==e.get("Rarity")})),r=c.filter((function(e){return"Rare"===e.get("Rarity")})),i=c.filter((function(e){return"Common"===e.get("Rarity")})),l=t(i.length),o=n[t(n.length)],j=null,m=i[l];if("Epic"===o.get("Rarity"))j=r[t(r.length)];else do{j=i[t(i.length)]}while(m.get("Character Name")===j.get("Character Name"));s([o,j,m])}()},children:"Generate Booster"})})]}),Object(m.jsx)("div",{className:"d-grid gap-2",children:i.map((function(e){return e?Object(m.jsx)(h,{character:e}):null}))})]})}function x(e){e.character;return Object(m.jsxs)("div",{className:"card-group",children:[Object(m.jsxs)("div",{className:"card",Style:"width: 18rem;",children:[Object(m.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("h5",{className:"card-title",children:"Hero Name"})})]}),Object(m.jsxs)("div",{className:"card",Style:"width: 18rem;",children:[Object(m.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("h5",{className:"card-title",children:"Item Name 1"})})]}),Object(m.jsxs)("div",{className:"card",Style:"width: 18rem;",children:[Object(m.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("h5",{className:"card-title",children:"Item Name 2"})})]}),Object(m.jsxs)("div",{className:"card",Style:"width: 18rem;",children:[Object(m.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("h5",{className:"card-title",children:"Item Name 3"})})]}),Object(m.jsx)("div",{className:"card",Style:"width: 18rem;",children:Object(m.jsx)("div",{className:"my-auto",children:Object(m.jsx)("button",{className:"btn btn-primary",children:"Edit Character"})})})]})}function f(e){var t=e.setView,a=Object(c.useState)(""),n=Object(u.a)(a,2),r=n[0],i=n[1],s=Object(c.useState)(Array.apply(null,Array(3)).map((function(){}))),l=Object(u.a)(s,2),o=l[0];l[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Warband Manager"}),Object(m.jsxs)("div",{className:"mb-3 row d-print-none",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){t("Home")},children:"Go Back"})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)(O.a,{onChange:function(e){i(e?e.value:"")},isClearable:!0,options:[{value:"Horde",label:"Horde"},{value:"Alliance",label:"Alliance"},{value:"Monster",label:"Monster"}]})})]}),Object(m.jsx)("div",{children:r?o.map((function(e,t){return Object(m.jsx)(x,{character:e},t)})):""})]})}var g=a(47),N=a.n(g),p=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={count:0,view:"Home",miniatures:[]},c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;new N.a({apiKey:"keycAAcHBy1WJJYyl"}).base("appi27ynSRiwJ0WEQ")("Miniatures").select({view:"Grid view"}).eachPage((function(t,a){e.setState({miniatures:[].concat(Object(s.a)(e.state.miniatures),Object(s.a)(t))}),a()}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"App container",children:[Object(m.jsx)("h1",{className:"d-print-none",children:"Warcraft Army Manager"}),"Home"===this.state.view?Object(m.jsx)(b,{setView:function(t){e.setState({view:t})}}):"Booster"===this.state.view?Object(m.jsx)(v,{miniatures:this.state.miniatures,setView:function(t){e.setState({view:t})}}):"Manager"===this.state.view?Object(m.jsx)(f,{miniatures:this.state.miniatures,setView:function(t){e.setState({view:t})}}):""]})}}]),a}(c.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};a(141),a(142);i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),w()},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){}},[[155,1,2]]]);
//# sourceMappingURL=main.7d519a53.chunk.js.map