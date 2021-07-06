(this["webpackJsonpnp-problem"]=this["webpackJsonpnp-problem"]||[]).push([[0],{100:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),i=(a(99),a(100),a(86)),o=a(29),u=a(18),d=a(79),m=a(46),s=a(144),p=a(148),E=a(149),v=a(150),f=a(151),g=a(152),h=a(158),b=a(156),O=a(157),j=a(153),k=a(154),y=a(155),L=a(63),S=function(e,t){var a=null;for(var n in e){(null===a||e[n]<e[a])&&!t.includes(n)&&(a=n)}return a},H=function(e,t,a){var n={};n[a]="Infinity",n=Object.assign(n,e[t]);var l={endNode:null};for(var r in e[t])l[r]=t;for(var c=[],i=S(n,c);i;){var o=n[i],u=e[i];for(var d in u)if(String(d)!==String(t)){var m=o+u[d];(!n[d]||n[d]>m)&&(n[d]=m,l[d]=i)}c.push(i),i=S(n,c)}for(var s=[a],p=l[a];p;)s.push(p),p=l[p];return s.reverse(),{distance:n[a],path:s}},x=function(){var e=["R1","R2","R3"],t=["H1","H2","H3","H4","H5","H6"],a=Object(n.useState)([{name:"D1",startPosition:"H1"},{name:"D2",startPosition:"H3"}]),r=Object(m.a)(a,2),c=r[0],S=r[1],x=[{node1:"R1",node2:"H3",distance:3},{node1:"R1",node2:"H5",distance:7},{node1:"R2",node2:"H1",distance:5},{node1:"R2",node2:"H3",distance:6},{node1:"R2",node2:"H4",distance:10},{node1:"R3",node2:"H2",distance:8},{node1:"R3",node2:"H3",distance:6},{node1:"R1",node2:"H6",distance:3}],P=Object(n.useState)({}),R=Object(m.a)(P,2),D=R[0],C=R[1],w=Object(n.useState)(!1),F=Object(m.a)(w,2),N=F[0],z=F[1],A={freezeAllDragEvents:!0,nodeHighlightBehavior:!0,node:{color:"lightgreen",highlightStrokeColor:"blue",fontSize:16},link:{highlightColor:"lightblue",renderLabel:!0,labelProperty:"distance",fontSize:12},directed:!0,height:300,width:300},B=Object(n.useState)({}),I=Object(m.a)(B,2),M=I[0],T=I[1],G=function(e){T(Object(u.a)(Object(u.a)({},M),{},{pickupLocation:e.target.value}))},J=function(e){T(Object(u.a)(Object(u.a)({},M),{},{dropLocation:e.target.value}))},q=function(){z(!1);for(var e=function(){var e,t={},a=Object(d.a)(x);try{for(a.s();!(e=a.n()).done;){var n=e.value;t[n.node1]=Object.keys(t).includes(n.node1)?Object(u.a)(Object(u.a)({},t[n.node1]),{},Object(o.a)({},n.node2,n.distance)):Object(o.a)({},n.node2,n.distance),t[n.node2]=Object.keys(t).includes(n.node2)?Object(u.a)(Object(u.a)({},t[n.node2]),{},Object(o.a)({},n.node1,n.distance)):Object(o.a)({},n.node1,n.distance)}}catch(l){a.e(l)}finally{a.f()}return t}(),t=[],a=0;a<c.length;a++){var n=H(e,c[a].startPosition,M.pickupLocation);t.push(n.distance)}var l=t.indexOf(Math.min.apply(Math,t)),r=c[l],m=H(e,r.startPosition,M.pickupLocation),s=H(e,M.pickupLocation,M.dropLocation);C({deliveryExecutive:r.name,deliveryExecutiveStartingLocation:r.startPosition,pickup:{links:K(e,m.path),nodes:Q(m.path)},drop:{links:K(e,s.path),nodes:Q(s.path)}}),z(!0);var p=Object(i.a)(c);p[l].startPosition=M.dropLocation,S(p)},K=function(e,t){for(var a=[],n=1;n<t.length;n++){var l=e[t[n-1]][t[n]];a.push({source:t[n-1],target:t[n],distance:l})}return a},Q=function(e){return e.map((function(e){return{id:e}}))};return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{container:!0},l.a.createElement(j.a,{xs:12},l.a.createElement("h3",null,"Live Ordering System"))),l.a.createElement(j.a,{container:!0},l.a.createElement(j.a,{item:!0,xs:12,md:6},l.a.createElement("div",{className:"form"},l.a.createElement(s.a,{component:p.a,className:"table"},l.a.createElement(E.a,{"aria-label":"simple table"},l.a.createElement(v.a,null,l.a.createElement(f.a,null,l.a.createElement(g.a,{align:"center"},"Restaurants"),l.a.createElement(g.a,{align:"center"},"Houses"),l.a.createElement(g.a,{align:"center"},"Distance"))),l.a.createElement(y.a,null,x.map((function(e,t){return l.a.createElement(f.a,{key:t},l.a.createElement(g.a,{component:"th",align:"center",scope:"row"},e.node1),l.a.createElement(g.a,{align:"center"},e.node2),l.a.createElement(g.a,{align:"center"},e.distance))}))))))),l.a.createElement(j.a,{item:!0,xs:12,md:6},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null,"Orders"),l.a.createElement("h5",null,"Live Location"),l.a.createElement("div",null,c.map((function(e){return l.a.createElement("div",{key:e.name},"Delivery Executive ",e.name," is at Location ",e.startPosition)}))),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("p",null,"Steps to proceed :-"),l.a.createElement("ol",null,l.a.createElement("li",null,"Select the Pickup Location"),l.a.createElement("li",null,"Select the Drop Location"))))),l.a.createElement(s.a,{component:p.a,className:"table"},l.a.createElement(E.a,{"aria-label":"simple table"},l.a.createElement(v.a,null,l.a.createElement(f.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,"Select Pickup location"),l.a.createElement(b.a,{onChange:G},e.map((function(e){return l.a.createElement(O.a,{key:e,value:e},e)})))),l.a.createElement(g.a,null,l.a.createElement(h.a,null,"Select Delivery Location"),l.a.createElement(b.a,{onChange:J},t.map((function(e){return l.a.createElement(O.a,{key:e,value:e},e)})))))))),l.a.createElement(j.a,{container:!0,style:{marginTop:"40px"}},l.a.createElement(j.a,{xs:12},l.a.createElement(k.a,{variant:"contained",color:"primary",onClick:q},"Submit"))))),N?l.a.createElement(j.a,{item:!0,xs:12},l.a.createElement(j.a,{container:!0},l.a.createElement(j.a,{item:!0,xs:6,md:6},l.a.createElement("div",null,l.a.createElement("div",null,D.deliveryExecutive," will go from ",D.deliveryExecutiveStartingLocation," to ",M.pickupLocation," for Pickup"),l.a.createElement(L.Graph,{id:"graph-id-pickup",data:D.pickup,config:A}))),l.a.createElement(j.a,{item:!0,xs:6,md:6},l.a.createElement("div",null,l.a.createElement("div",null,D.deliveryExecutive," will go from ",M.pickupLocation," to ",M.dropLocation," for Delivery"),l.a.createElement(L.Graph,{id:"graph-id-drop",data:D.drop,config:A}))))):null)))};var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(x,null))},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,160)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),R()},99:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.e1ec798d.chunk.js.map