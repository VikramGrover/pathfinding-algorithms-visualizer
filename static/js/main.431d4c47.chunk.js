(this["webpackJsonppath-finding-visualizer"]=this["webpackJsonppath-finding-visualizer"]||[]).push([[0],{17:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a,c,r=n(2),o=n.n(r),i=n(10),s=n.n(i),l=(n(17),n(4)),d=n(5),u=n(1),g=n(3),j={none:0,target:1,path:2,start:3,remObstacle:4,visited:5,wall:6,"weighted-100":7,"weighted-80":8,"weighted-60":9,"weighted-40":10,"weighted-20":11};Object.freeze(j);var b=(a={},Object(u.a)(a,j.none,"empty"),Object(u.a)(a,j.target,"target"),Object(u.a)(a,j.wall,"wall"),Object(u.a)(a,j.start,"start"),Object(u.a)(a,j.visited,"visited"),Object(u.a)(a,j.path,"path"),Object(u.a)(a,j["weighted-100"],"weighted-100"),Object(u.a)(a,j["weighted-80"],"weighted-80"),Object(u.a)(a,j["weighted-60"],"weighted-60"),Object(u.a)(a,j["weighted-40"],"weighted-40"),Object(u.a)(a,j["weighted-20"],"weighted-20"),a);Object.freeze(b);var O=(c={},Object(u.a)(c,j.none,1),Object(u.a)(c,j.target,1),Object(u.a)(c,j.wall,1/0),Object(u.a)(c,j.start,1),Object(u.a)(c,j["weighted-100"],100),Object(u.a)(c,j["weighted-80"],80),Object(u.a)(c,j["weighted-60"],60),Object(u.a)(c,j["weighted-40"],40),Object(u.a)(c,j["weighted-20"],20),c);Object.freeze(O);var h=["Dijkstra's","A-Star","BFS","DFS"],f=["Algo 1","Algo 2"],v=["Wall (\u221e)","Weighted (100)","Weighted (80)","Weighted (60)","Weighted (40)","Weighted (20)"],w={"Wall (\u221e)":"wall","Weighted (100)":"weighted-100","Weighted (80)":"weighted-80","Weighted (60)":"weighted-60","Weighted (40)":"weighted-40","Weighted (20)":"weighted-20"},S=function(t){return j[t]},p=function(){return h},R=n(0),C=o.a.memo((function(t){var e,n=t.nodeId,a=t.size,c=t.nodeState,r=t.setGridState,o=t.draggingSelection,i=t.setDraggingSelection,s=t.setStartCord,l=t.setTargetCord,j=t.runningAlgo,O=t.selectedObstacle,h={width:a,height:a};return Object(R.jsx)("div",{style:Object(g.a)({},h),className:"node ".concat((e=c[0],b[e])),onMouseDown:j?null:function(){return c[0]===S("none")||c[0]===S("path")||c[0]===S("visited")?(i(S(O)),void r((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},n,[S(O),S("none")]))}))):c[0]>=S("wall")?(r((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},n,t[n].slice(1)))})),void i(S("remObstacle"))):void i(c[0])},onMouseUp:j?null:function(){o!==S("none")&&i(S("none"))},onMouseEnter:j?null:function(){o===S("remObstacle")&&c[0]>=S("wall")?r((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},n,t[n].slice(1)))})):o!==S(O)||c[0]!==S("path")&&c[0]!==S("visited")&&c[0]!==S("none")?o===S("start")?(r((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},n,[S("start")].concat(Object(d.a)(t[n]))))})),s(n)):o===S("target")&&(r((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},n,[S("target")].concat(Object(d.a)(t[n]))))})),l(n)):r((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},n,[S(O),S("none")]))}))},onMouseLeave:j?null:function(){o!==S("start")&&o!==S("target")||r((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},n,t[n].slice(1)))}))}})})),m=function(t){for(var e=t.rows,n=t.cols,a=t.padding,c=t.nodeSize,o=t.gridState,i=t.setGridState,s=t.selectedObstacle,d=t.setStartCord,u=t.setTargetCord,g=t.runningAlgo,j=Object(r.useState)(S("none")),b=Object(l.a)(j,2),O=b[0],h=b[1],f=[],v=0;v<e;v++)for(var w=0;w<n;w++){var p="".concat(v,":").concat(w);f.push(Object(R.jsx)(C,{nodeId:p,size:c,nodeState:o[p],setGridState:i,draggingSelection:O,setDraggingSelection:h,setStartCord:d,setTargetCord:u,runningAlgo:g,selectedObstacle:s},p))}var m={width:n*c+n,height:e*c+e},A={paddingLeft:a,paddingRight:a};return Object(R.jsx)("div",{style:A,children:Object(R.jsx)("div",{className:"grid",style:m,children:f})})},A=function(t){var e=t.resetBoard,n=t.runningAlgo;return Object(R.jsx)("div",{className:"button ".concat(n?"disabled":"red"),onClick:n?null:e,children:"Reset Grid"})},x=function(t){var e=t.clearObstacles,n=t.runningAlgo;return Object(R.jsx)("div",{className:"button ".concat(n?"disabled":"orange"),onClick:n?null:e,children:"Clear Obstacles"})},N=n(9),F=n.n(N),G=n(11),k=n(12),W=function(t,e,n,a,c,r){if(t===e)return[];var o={},i={},s={},l={};o[t]=0,s[t]=0;for(var j=0;j<c;j++)for(var b=0;b<r;b++){var h="".concat(j,":").concat(b);h!==t&&(o[h]=1/0)}for(var f=function(){var j=D(s);if(delete s[j],l[j]=1,j!==t&&j!==e)setTimeout((function(){a((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(u.a)({},j,[S("visited")].concat(Object(d.a)(t[j]))))}))}),1);else if(j===e)return{v:y(t,e,i)};var b,h,f=I(j,c,r,n),v=Object(k.a)(f);try{for(v.s();!(b=v.n()).done;){var w=b.value,p=o[j]+(h=n[w][0],O[h]);w in l||(w in s&&p<o[w]||!(w in s))&&(o[w]=p,i[w]=j,s[w]=p)}}catch(R){v.e(R)}finally{v.f()}};Object.keys(s).length>0;){var v=f();if("object"===typeof v)return v.v}return[]},y=function(t,e,n){for(var a=e,c=[];(a=n[a])!==t;)c.push(a);return c},I=function(t,e,n,a){var c=parseInt(t.split(":")[0]),r=parseInt(t.split(":")[1]),o=[];return r+1<n&&a["".concat(c,":").concat(r+1)][0]!==S("wall")&&o.push("".concat(c,":").concat(r+1)),c-1>=0&&a["".concat(c-1,":").concat(r)][0]!==S("wall")&&o.push("".concat(c-1,":").concat(r)),c+1<e&&a["".concat(c+1,":").concat(r)][0]!==S("wall")&&o.push("".concat(c+1,":").concat(r)),r-1>=0&&a["".concat(c,":").concat(r-1)][0]!==S("wall")&&o.push("".concat(c,":").concat(r-1)),function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=t[e];t[e]=t[n],t[n]=a}}(o),o},D=function(t){var e=Math.min.apply(Math,Object(d.a)(Object.values(t)));for(var n in t)if(t[n]===e)return n},E=function(t){var e=t.rows,n=t.cols,a=t.selectedAlgo,c=t.setGridState,r=t.startCord,o=t.targetCord,i=t.clearForReRun,s=t.runningAlgo,l=t.setRunningAlgo,j=function(){var t=Object(G.a)(F.a.mark((function t(){var s,j,b,O;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=i(),console.log("STARTING: ",a),j=[],t.t0=a,t.next="Dijkstra's"===t.t0?6:8;break;case 6:return j=W(r,o,s,c,e,n),t.abrupt("break",8);case 8:for(console.log("ENDED: ",a),b=function(t){setTimeout((function(){c((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(u.a)({},j[t],[S("path")].concat(Object(d.a)(s[j[t]]))))}))}),1)},O=j.length-1;O>=0;O--)b(O);setTimeout((function(){l(!1)}),1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(R.jsx)("div",{className:"button ".concat(s?"disabled":"green"),onClick:s?null:j,children:"Run"})},T=n.p+"static/media/down_arrow.8fed4a28.svg",z=function(t){for(var e=t.setSelection,n=t.items,a=Object(r.useState)(!1),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(r.useState)(n[0]),d=Object(l.a)(s,2),u=d[0],g=d[1],j=Object(r.useState)(0),b=Object(l.a)(j,2),O=b[0],h=b[1],f=[],v=function(t){f.push(Object(R.jsx)("div",{className:"dropdown-list-item ".concat(t===O&&"selected"," ").concat(t===n.length-1&&"last"),onClick:function(){var a;a=t,i((function(t){return!t})),g(n[a]),h(a),e(n[a])},children:n[t]},t))},w=0;w<n.length;w++)v(w);return Object(R.jsxs)("div",{className:"dropdown",children:[Object(R.jsxs)("div",{className:"dropdown-header ".concat(o&&"open"),onClick:function(){i((function(t){return!t}))},children:[u,Object(R.jsx)("img",{className:"down-arrow",src:T})]}),o&&Object(R.jsx)("div",{className:"dropdown-list",children:f})]})},M=function(t){var e=t.rows,n=t.cols,a=t.setGridState,c=t.startCord,o=t.targetCord,i=t.clearForReRun,s=t.runningAlgo,d=t.setRunningAlgo,u=Object(r.useState)(p()[0]),g=Object(l.a)(u,2),j=g[0],b=g[1];return Object(R.jsxs)("div",{className:"choose-algo",children:[Object(R.jsx)(z,{setSelection:b,items:p()}),Object(R.jsx)(E,{rows:e,cols:n,selectedAlgo:j,setGridState:a,startCord:c,targetCord:o,clearForReRun:i,runningAlgo:s,setRunningAlgo:d})]})},B=function(t){var e=t.rows,n=t.cols,a=t.setGridState,c=t.startCord,o=t.targetCord,i=t.clearForReRun,s=t.runningAlgo,d=t.setRunningAlgo,u=Object(r.useState)(p()[0]),g=Object(l.a)(u,2),j=g[0],b=g[1];return Object(R.jsxs)("div",{className:"choose-terrain",children:[Object(R.jsx)(z,{setSelection:b,items:f}),Object(R.jsx)(E,{rows:e,cols:n,selectedAlgo:j,setGridState:a,startCord:c,targetCord:o,clearForReRun:i,runningAlgo:s,setRunningAlgo:d})]})},L=function(t){var e=t.setSelectedObstacle;return Object(R.jsx)("div",{className:"choose-obstacle",children:Object(R.jsx)(z,{setSelection:function(t){e(w[t])},items:v})})},U=function(t){var e=t.rows,n=t.cols,a=t.runningAlgo,c=t.setRunningAlgo,r=t.padding,o=t.height,i=t.setGridState,s=t.startCord,l=t.targetCord,d=t.resetBoard,u=t.clearObstacles,g=t.clearForReRun,j=t.setSelectedObstacle,b={padding:r,height:o};return Object(R.jsxs)("div",{style:b,className:"header",children:[Object(R.jsx)(A,{resetBoard:d,runningAlgo:a}),Object(R.jsx)(x,{clearObstacles:u,runningAlgo:a}),Object(R.jsx)(M,{rows:e,cols:n,setGridState:i,startCord:s,targetCord:l,clearForReRun:g,runningAlgo:a,setRunningAlgo:c}),Object(R.jsx)(B,{rows:e,cols:n,setGridState:i,startCord:s,targetCord:l,clearForReRun:g,runningAlgo:a,setRunningAlgo:c}),Object(R.jsx)(L,{setSelectedObstacle:j})]})};var J=function(){var t=Object(r.useState)({}),e=Object(l.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)("wall"),o=Object(l.a)(c,2),i=o[0],s=o[1],d=Object(r.useState)(0),u=Object(l.a)(d,2),g=u[0],j=u[1],b=Object(r.useState)(0),O=Object(l.a)(b,2),h=O[0],f=O[1],v=Object(r.useState)("0:0"),w=Object(l.a)(v,2),p=w[0],C=w[1],A=Object(r.useState)("0:0"),x=Object(l.a)(A,2),N=x[0],F=x[1],G=Object(r.useState)(!1),k=Object(l.a)(G,2),W=k[0],y=k[1];Object(r.useEffect)((function(){I()}),[]);var I=function(){var t=window.innerHeight-180,e=window.innerWidth-60,n=parseInt(t/29),c=parseInt(e/29);y(!1),j(n),f(c),C("0:0"),F("".concat(n-1,":").concat(c-1));for(var r={},o=0;o<n;o++)for(var i=0;i<c;i++){var s=[S("none")];0===o&&0===i?s.unshift(S("start")):o===n-1&&i===c-1&&s.unshift(S("target")),r["".concat(o,":").concat(i)]=s}a(r)};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(U,{rows:g,cols:h,runningAlgo:W,setRunningAlgo:y,padding:30,height:90,setGridState:a,startCord:p,targetCord:N,resetBoard:I,clearObstacles:function(){for(var t={},e=!1,c=0;c<g;c++)for(var r=0;r<h;r++){var o="".concat(c,":").concat(r);t[o]=n[o];var i=n[o][0];i!==S("path")&&i!==S("visited")||(i=n[o][1]),i>=S("wall")&&(t[o]=[S("none")],e=!0)}e&&a((function(e){return t}))},clearForReRun:function(){console.log("CLEARING GRID FOR RE RERUN");for(var t={},e=!1,c=0;c<g;c++)for(var r=0;r<h;r++){var o="".concat(c,":").concat(r);t[o]=n[o];var i=n[o][0];i!==S("visited")&&i!==S("path")||(t[o]=t[o].slice(1),e=!0)}return e&&(console.log("DONE CLEARING FOR RE RUN"),a((function(e){return t}))),y(!0),t},setSelectedObstacle:s}),Object(R.jsx)(m,{rows:g,cols:h,padding:30,nodeSize:28,gridState:n,setGridState:a,selectedObstacle:i,setStartCord:C,setTargetCord:F,runningAlgo:W})]})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};s.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(J,{})}),document.getElementById("root")),P()}},[[20,1,2]]]);
//# sourceMappingURL=main.431d4c47.chunk.js.map