(this["webpackJsonppath-finding-visualizer"]=this["webpackJsonppath-finding-visualizer"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o,l=n(2),u=n.n(l),b=n(12),d=n.n(b),g=(n(17),n(0)),j=n(4),O=n(3),f=n(6),h=n(5),p=n.n(h),v=n(8),w=n(7),x=function(e,t,n,a){var r=parseInt(e.split(":")[0]),c=parseInt(e.split(":")[1]),i=[];return r-1>=0&&a["".concat(r-1,":").concat(c)][0][0]!==Y.wall&&i.push("".concat(r-1,":").concat(c)),c+1<n&&a["".concat(r,":").concat(c+1)][0][0]!==Y.wall&&i.push("".concat(r,":").concat(c+1)),r+1<t&&a["".concat(r+1,":").concat(c)][0][0]!==Y.wall&&i.push("".concat(r+1,":").concat(c)),c-1>=0&&a["".concat(r,":").concat(c-1)][0][0]!==Y.wall&&i.push("".concat(r,":").concat(c-1)),i},S=function(e,t,n){for(var a=t,r=[];(a=n[a])!==e;)r.push(a);return r},m=function(e){var t=Math.min.apply(Math,Object(f.a)(Object.values(e)));for(var n in e)if(e[n]===t)return n},k=function(e){return _.includes(e)},A=function(e){return new Promise((function(t){return setTimeout(t,e)}))},C=function(){var e=Object(w.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,l,u,b,d,g,j,O,h,w,k,C;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o={},l={},u={},(s={})[t]=0,l[t]=0,b=0;b<r;b++)for(d=0;d<c;d++)(g="".concat(b,":").concat(d))!==t&&(s[g]=1/0);case 7:if(!(Object.keys(l).length>0)){e.next=42;break}if(j=m(l),delete l[j],u[j]=1,j===t||j===n){e.next=16;break}(0,a[j][1])((function(e){return[Y.visited].concat(Object(f.a)(e.slice(1)))})),e.next=18;break;case 16:if(j!==n){e.next=18;break}return e.abrupt("return",S(t,n,o));case 18:O=x(j,r,c,a),h=Object(v.a)(O),e.prev=20,h.s();case 22:if((w=h.n()).done){e.next=30;break}if(k=w.value,C=s[j]+K[a[k][0][0]],!(k in u)){e.next=27;break}return e.abrupt("continue",28);case 27:(k in l&&C<s[k]||!(k in l))&&(s[k]=C,o[k]=j,l[k]=C,k!==n&&(0,a[k][1])((function(e){return[Y.visiting].concat(Object(f.a)(e))})));case 28:e.next=22;break;case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(20),h.e(e.t0);case 35:return e.prev=35,h.f(),e.finish(35);case 38:return e.next=40,A(i);case 40:e.next=7;break;case 42:return e.abrupt("return",[]);case 43:case"end":return e.stop()}}),e,null,[[20,32,35,38]])})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,l,u,b,d,j,O,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[t],o=[],l=Object(g.a)({},t,1);case 3:if(!(s.length>0)){e.next=38;break}if((u=s[0])!==n&&u!==t&&(0,a[u][1])((function(e){return[Y.visiting,Y.none]})),u!==n){e.next=10;break}return s.pop(),s.shift(),e.abrupt("return",s);case 10:u!==t&&(o.unshift(u),l[u]=1,(0,a[u][1])((function(e){return[Y.visited,Y.none]}))),b=x(u,r,c,a),d=!1,j=Object(v.a)(b),e.prev=14,j.s();case 16:if((O=j.n()).done){e.next=25;break}if(!((f=O.value)in l)){e.next=20;break}return e.abrupt("continue",23);case 20:return s.unshift(f),d=!0,e.abrupt("break",25);case 23:e.next=16;break;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(14),j.e(e.t0);case 30:return e.prev=30,j.f(),e.finish(30);case 33:return d||s.splice(0,1),e.next=36,A(i);case 36:e.next=3;break;case 38:return e.abrupt("return",[]);case 39:case"end":return e.stop()}}),e,null,[[14,27,30,33]])})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),R=function(){var e=Object(w.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,l,u,b,d,j,O;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[t],o=Object(g.a)({},t,1),l={};case 3:if(!(s.length>0)){e.next=35;break}(u=s.pop())!==t&&u!==n&&(0,a[u][1])((function(e){return[Y.visited,Y.none]})),b=x(u,r,c,a),d=Object(v.a)(b),e.prev=8,d.s();case 10:if((j=d.n()).done){e.next=23;break}if(!((O=j.value)in o)){e.next=14;break}return e.abrupt("continue",21);case 14:if(l[O]=u,s.unshift(O),o[O]=1,O!==n){e.next=19;break}return e.abrupt("return",S(t,n,l));case 19:(0,a[O][1])((function(e){return[Y.visiting,Y.none]}));case 21:e.next=10;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(8),d.e(e.t0);case 28:return e.prev=28,d.f(),e.finish(28);case 31:return e.next=33,A(i);case 33:e.next=3;break;case 35:return e.abrupt("return",[]);case 36:case"end":return e.stop()}}),e,null,[[8,25,28,31]])})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),y=function(){var e=Object(w.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,l,u,b,d,j,O,h,w,k,C,I,R,y;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s=Object(g.a)({},t,0),o=Object(g.a)({},t,0),l=Object(g.a)({},t,0),u=Object(g.a)({},t,0),b={},d={},j=0;j<r;j++)for(O=0;O<c;O++)(h="".concat(j,":").concat(O))!==t&&(u[h]=o[h]=l[h]=1/0);case 7:if(!(Object.keys(s).length>0)){e.next=24;break}if(w=m(s),delete s[w],w===t||w===n){e.next=15;break}(0,a[w][1])((function(e){return[Y.visited].concat(Object(f.a)(e.slice(1)))})),e.next=17;break;case 15:if(w!==n){e.next=17;break}return e.abrupt("return",S(t,n,d));case 17:k=x(w,r,c,a),C=Object(v.a)(k);try{for(C.s();!(I=C.n()).done;)R=I.value,(y=o[w]+K[a[R][0][0]])<o[R]&&(R===t||R===n||R in b||(0,a[R][1])((function(e){return[Y.visiting].concat(Object(f.a)(e))})),b[R]=1,o[R]=y,l[R]=N(R,n),u[R]=o[R]+l[R],d[R]=w,s[R]=u[R])}catch(p){C.e(p)}finally{C.f()}return e.next=22,A(i);case 22:e.next=7;break;case 24:return e.abrupt("return",[]);case 25:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),N=function(e,t){if(e===t)return 0;var n=parseInt(e.split(":")[0]),a=parseInt(e.split(":")[1]),r=parseInt(t.split(":")[0]),c=parseInt(t.split(":")[1]);return Math.abs(n-r)+Math.abs(a-c)},D=function(){var e=Object(w.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,l,u,b,d,j,O,h,w,k,C,I;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s=Object(g.a)({},t,0),o=Object(g.a)({},t,0),l=Object(g.a)({},t,0),u={},b={},d=0;d<r;d++)for(j=0;j<c;j++)(O="".concat(d,":").concat(j))!==t&&(l[O]=o[O]=1/0);case 6:if(!(Object.keys(s).length>0)){e.next=24;break}if(h=m(s),delete s[h],h===t||h===n){e.next=14;break}(0,a[h][1])((function(e){return[Y.visited].concat(Object(f.a)(e.slice(1)))})),e.next=17;break;case 14:if(h!==n){e.next=17;break}return console.log("DONNEE"),e.abrupt("return",S(t,n,u));case 17:w=x(h,r,c,a),k=Object(v.a)(w);try{for(k.s();!(C=k.n()).done;)(I=C.value)in b||(b[I]=1,I!==t&&I!==n&&(0,a[I][1])((function(e){return[Y.visiting].concat(Object(f.a)(e))})),o[I]=G(I,n)+K[a[I][0][0]],l[I]=o[I],u[I]=h,s[I]=l[I])}catch(p){k.e(p)}finally{k.f()}return e.next=22,A(i);case 22:e.next=6;break;case 24:return e.abrupt("return",[]);case 25:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),G=function(e,t){if(e===t)return 0;var n=parseInt(e.split(":")[0]),a=parseInt(e.split(":")[1]),r=parseInt(t.split(":")[0]),c=parseInt(t.split(":")[1]);return Math.abs(n-r)+Math.abs(a-c)},M=n(1),z="Dijkstra's",W="A* (A-Star)",B="Breadth-first Search",E="Depth-first Search",F="Best-first Search",T=(a={},Object(g.a)(a,z,C),Object(g.a)(a,W,y),Object(g.a)(a,B,R),Object(g.a)(a,E,I),Object(g.a)(a,F,D),a);Object.freeze(T);var P=(r={},Object(g.a)(r,z,1),Object(g.a)(r,W,4),Object(g.a)(r,B,5),Object(g.a)(r,E,10),Object(g.a)(r,F,11),r);Object.freeze(P);var L=[z,W,B,E,F];Object.freeze(L);var _=[E,B];Object.freeze(_);var H=[z,W,B];Object.freeze(H);var J=["ALGO 1","ALGO 2"];Object.freeze(J);var U=Object(g.a)({},z,{description:Object(M.jsxs)("p",{children:["Dijkstra's algorithm to find the shortest path between a and b. It picks the unvisited vertex with the ",Object(M.jsx)("strong",{children:"lowest distance"}),", calculates the distance through it to each unvisited neighbor, and updates the neighbor's distance if smaller. Mark visited (set to red) when done with neighbors."]}),optimality:Object(M.jsx)("p",{children:"Dijkstra's is guranteed to find the shortest path."})});Object.freeze(U);var Y={path:0,visited:1,visiting:2,none:3,target:4,start:5,remObstacle:6,wall:7,weighted100:8,weighted80:9,weighted60:10,weighted40:11,weighted20:12};Object.freeze(Y);var X=(c={},Object(g.a)(c,Y.none,"none"),Object(g.a)(c,Y.target,"target"),Object(g.a)(c,Y.wall,"wall"),Object(g.a)(c,Y.visiting,"visiting"),Object(g.a)(c,Y.start,"start"),Object(g.a)(c,Y.visited,"visited"),Object(g.a)(c,Y.path,"path"),Object(g.a)(c,Y.weighted100,"weighted100"),Object(g.a)(c,Y.weighted80,"weighted80"),Object(g.a)(c,Y.weighted60,"weighted60"),Object(g.a)(c,Y.weighted40,"weighted40"),Object(g.a)(c,Y.weighted20,"weighted20"),c);Object.freeze(X);var q=(i={},Object(g.a)(i,Y.none,"transparent"),Object(g.a)(i,Y.target,"#f14846"),Object(g.a)(i,Y.wall,"#18191c"),Object(g.a)(i,Y.visiting,"#4988dc"),Object(g.a)(i,Y.start,"#43b581"),Object(g.a)(i,Y.visited,"#3f70dd"),Object(g.a)(i,Y.path,"#f9a719"),Object(g.a)(i,Y.weighted100,"#1b1c1e"),Object(g.a)(i,Y.weighted80,"#1c1e21"),Object(g.a)(i,Y.weighted60,"#222327"),Object(g.a)(i,Y.weighted40,"#26272b"),Object(g.a)(i,Y.weighted20,"#2b2c31"),i);Object.freeze(q);var K=(s={},Object(g.a)(s,Y.none,1),Object(g.a)(s,Y.target,1),Object(g.a)(s,Y.wall,1/0),Object(g.a)(s,Y.start,1),Object(g.a)(s,Y.weighted100,100),Object(g.a)(s,Y.weighted80,80),Object(g.a)(s,Y.weighted60,60),Object(g.a)(s,Y.weighted40,40),Object(g.a)(s,Y.weighted20,20),s);Object.freeze(K);var Q=["Wall (\u221e)","Weighted (100)","Weighted (80)","Weighted (60)","Weighted (40)","Weighted (20)"],V=(o={},Object(g.a)(o,Q[0],X[Y.wall]),Object(g.a)(o,Q[1],X[Y.weighted100]),Object(g.a)(o,Q[2],X[Y.weighted80]),Object(g.a)(o,Q[3],X[Y.weighted60]),Object(g.a)(o,Q[4],X[Y.weighted40]),Object(g.a)(o,Q[5],X[Y.weighted20]),o);Object.freeze(V);var Z=function(e){var t=e.nodeId,n=e.size,a=e.setGridState,r=e.draggingSelection,c=e.setDraggingSelection,i=e.setStartCord,s=e.setTargetCord,o=e.runningAlgo,u=e.selectedObstacle,b=e.startingState,d=Object(l.useState)(b),h=Object(O.a)(d,2),p=h[0],v=h[1];Object(l.useEffect)((function(){a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[b,v]))}))}),[]);var w=function(e){if((e[0]===Y.visited||e[0]===Y.visiting)&&e[1]>Y.wall){var t=q[e[0]],n=q[e[1]],a=.78;e[0]===Y.visiting&&(t=q[Y.visited]);var r=t.match(/\w\w/g).map((function(e){return parseInt(e,16)})),c=Object(O.a)(r,3),i=c[0],s=c[1],o=c[2],l=n.match(/\w\w/g).map((function(e){return parseInt(e,16)})),u=Object(O.a)(l,3),b=u[0],d=u[1],g=u[2];return"#"+Math.round(i+(b-i)*a).toString(16).padStart(2,"0")+Math.round(s+(d-s)*a).toString(16).padStart(2,"0")+Math.round(o+(g-o)*a).toString(16).padStart(2,"0")}return q[e[0]]}(p),x={width:n,height:n,backgroundColor:w,border:"1px solid ".concat(p[0]===Y.none?"#3C4046":w)};o||(r===Y.start||r===Y.target?x.cursor="grabbing":r!==Y.none||p[0]!==Y.start&&p[0]!==Y.target||(x.cursor="grab"));return Object(M.jsx)("div",{style:x,className:"node ".concat(r===Y.remObstacle&&"erasing"),onMouseDown:o?null:function(){return p[0]<=Y.none?(c(Y[u]),v((function(e){return[Y[u],Y.none]})),void a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[[Y[u],Y.none],v]))}))):p[0]>=Y.wall?(v((function(e){return e.slice(1)})),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[p.slice(1),v]))})),void c(Y.remObstacle)):(p[0]!==Y.start&&p[0]!==Y.target||a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[p.slice(1),v]))})),void c(p[0]))},onMouseUp:o?null:function(){r===Y.start?(i(t),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[p,v]))}))):r===Y.target&&(s(t),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[p,v]))}))),r!==Y.none&&c(Y.none)},onMouseEnter:o?null:function(){r===Y.remObstacle&&p[0]>=Y.wall?(v((function(e){return e.slice(1)})),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[p.slice(1),v]))}))):r===Y[u]&&p[0]<=Y.none?(v((function(e){return[Y[u],Y.none]})),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},t,[[Y[u],Y.none],v]))}))):(r===Y.start||r===Y.target)&&v((function(e){return[r].concat(Object(f.a)(e))}))},onMouseLeave:o?null:function(){r!==Y.start&&r!==Y.target||v((function(e){return e.slice(1)}))}})},$=u.a.memo((function(e){var t=e.rows,n=e.cols,a=e.padding,r=e.nodeSize,c=e.setGridState,i=e.selectedObstacle,s=e.setStartCord,o=e.setTargetCord,u=e.runningAlgo,b=Object(l.useState)(Y.none),d=Object(O.a)(b,2),g=d[0],j=d[1];console.log("RERENDERING GRID");for(var f=[],h=0;h<t;h++)for(var p=0;p<n;p++){var v="".concat(h,":").concat(p),w=[Y.none];0===h&&0===p?w.unshift(Y.start):h===t-1&&p===n-1&&w.unshift(Y.target),f.push(Object(M.jsx)(Z,{nodeId:v,size:r,setGridState:c,draggingSelection:g,setDraggingSelection:j,setStartCord:s,setTargetCord:o,runningAlgo:u,selectedObstacle:i,startingState:w},v))}var x={width:n*r+n,height:t*r+t},S={paddingLeft:a,paddingRight:a};return Object(M.jsx)("div",{style:S,children:Object(M.jsx)("div",{className:"grid",style:x,children:f})})})),ee=function(e){var t=e.clearObstacles,n=e.runningAlgo;return Object(M.jsx)("div",{className:"button ".concat(n?"disabled":"red"),onClick:n?null:t,children:"Clear Obstacles"})},te=function(e){var t=e.clearPath,n=e.runningAlgo;return Object(M.jsx)("div",{className:"button ".concat(n?"disabled":"orange"),onClick:n?null:t,children:"Clear Path"})},ne=function(e){var t=e.rows,n=e.cols,a=e.selectedAlgo,r=e.gridState,c=(e.setGridState,e.startCord),i=e.targetCord,s=e.clearForReRun,o=e.runningAlgo,l=e.setRunningAlgo,u=function(){var e=Object(w.a)(p.a.mark((function e(){var o,u,b;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c!==i){e.next=2;break}return e.abrupt("return");case 2:return s(),l(!0),console.log("STARTING: ",a),o=[],e.next=8,T[a](c,i,r,t,n,P[a]);case 8:o=e.sent,console.log("ENDED: ",a),u=p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(7);case 2:(0,r[o[t]][1])((function(e){return[Y.path].concat(Object(f.a)(r[o[t]][0]))}));case 4:case"end":return e.stop()}}),e)})),b=o.length-1;case 12:if(!(b>=0)){e.next=17;break}return e.delegateYield(u(b),"t0",14);case 14:b--,e.next=12;break;case 17:l(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)("div",{className:"button ".concat(o?"disabled":"green"),onClick:o?null:u,children:"Run"})},ae=n.p+"static/media/down_arrow.8fed4a28.svg",re=n.p+"static/media/weight.e51e9729.svg",ce=n.p+"static/media/weight_unfilled.cc3c5f2f.svg",ie=n.p+"static/media/optimal.5649a19a.svg",se=n.p+"static/media/optimal_unfilled.e461ee2c.svg",oe=function(e){var t=e.setSelection,n=e.items,a=e.disabled,r=e.dropDownWidth,c=e.isAlgoSelector,i=e.isObstacleSelector,s=Object(l.useState)(!1),o=Object(O.a)(s,2),u=o[0],b=o[1],d=Object(l.useState)(n[0]),g=Object(O.a)(d,2),j=g[0],f=g[1],h=Object(l.useState)(0),p=Object(O.a)(h,2),v=p[0],w=p[1];Object(l.useEffect)((function(){a&&(f(n[0]),w(0),b(!1),t(n[0]))}),[a]);for(var x={width:r},S=[],m=function(e){var a;S.push(Object(M.jsxs)("div",{style:x,className:"dropdown-list-item ".concat(e===v&&"selected"," ").concat(e===n.length-1&&"last"),onClick:function(){var a;a=e,b((function(e){return!e})),f(n[a]),w(a),t(n[a])},children:[n[e],c&&(k(n[e])?Object(M.jsx)("img",{className:"algo-property-badge",src:ce,title:"".concat(n[e]," is not a weighted path-finding algorithm."),alt:"".concat(n[e]," is not a weighted path-finding algorithm.")}):Object(M.jsx)("img",{className:"algo-property-badge",src:re,title:"".concat(n[e]," is a weighted path-finding algorithm."),alt:"".concat(n[e]," is a weighted path-finding algorithm.")})),c&&(a=n[e],H.includes(a)?Object(M.jsx)("img",{className:"algo-property-badge",src:ie,title:"".concat(n[e]," guarantees shortest path."),alt:"".concat(n[e]," guarantees shortest path.")}):Object(M.jsx)("img",{className:"algo-property-badge",src:se,title:"".concat(n[e]," does not guarantee shortest path."),alt:"".concat(n[e]," does not guarantee shortest path.")})),i&&Object(M.jsx)("div",{style:{backgroundColor:q[Y[V[n[e]]]]},className:"obstacle-preview",children:" "})]},e))},A=0;A<n.length;A++)m(A);return Object(M.jsxs)("div",{className:"dropdown",children:[Object(M.jsxs)("div",{style:x,className:"dropdown-header ".concat(u&&"open"," ").concat(a&&"disabled"),onClick:a?null:function(){b((function(e){return!e}))},children:[j,!a&&Object(M.jsx)("img",{className:"down-arrow",src:ae,alt:""})]}),Object(M.jsx)("div",{style:{display:u?"flex":"none"},className:"dropdown-list",children:S})]})},le=function(e){var t=e.toggleInfoBox;return Object(M.jsx)("div",{className:"button blue",onClick:t,children:"Info"})},ue=function(e){var t=e.rows,n=e.cols,a=e.gridState,r=e.setGridState,c=e.startCord,i=e.targetCord,s=e.clearForReRun,o=e.runningAlgo,l=e.setRunningAlgo,u=e.dropDownWidth,b=e.toggleInfoBox,d=e.selectedAlgo,g=e.setSelectedAlgo;return Object(M.jsxs)("div",{className:"choose-algo",children:[Object(M.jsx)(oe,{setSelection:g,items:L,disabled:!1,dropDownWidth:u,isAlgoSelector:!0,isObstacleSelector:!1}),Object(M.jsx)(le,{toggleInfoBox:b}),Object(M.jsx)(ne,{rows:t,cols:n,selectedAlgo:d,gridState:a,setGridState:r,startCord:c,targetCord:i,clearForReRun:s,runningAlgo:o,setRunningAlgo:l})]})},be=function(e){var t=e.rows,n=e.cols,a=e.setGridState,r=e.startCord,c=e.targetCord,i=e.clearForReRun,s=e.runningAlgo,o=e.setRunningAlgo,u=e.dropDownWidth,b=Object(l.useState)(J[0]),d=Object(O.a)(b,2),g=d[0],j=d[1];return Object(M.jsxs)("div",{className:"choose-terrain",children:[Object(M.jsx)(oe,{setSelection:j,items:J,disabled:!1,dropDownWidth:u,isAlgoSelector:!1,isObstacleSelector:!1}),Object(M.jsx)(ne,{rows:t,cols:n,selectedAlgo:g,setGridState:a,startCord:r,targetCord:c,clearForReRun:i,runningAlgo:s,setRunningAlgo:o})]})},de=function(e){var t=e.setSelectedObstacle,n=e.weightedObsDisabled,a=e.dropDownWidth;return Object(M.jsx)("div",{className:"choose-obstacle",children:Object(M.jsx)(oe,{setSelection:function(e){console.log("selected obs: ",V[e]),t(V[e])},items:Q,disabled:n,dropDownWidth:a,isAlgoSelector:!1,isObstacleSelector:!0})})},ge=function(e){var t=e.rows,n=e.cols,a=e.runningAlgo,r=e.setRunningAlgo,c=e.padding,i=e.height,s=e.gridState,o=e.setGridState,l=e.startCord,u=e.targetCord,b=e.clearObstacles,d=e.clearPath,g=e.setSelectedObstacle,j=e.weightedObsDisabled,O=e.toggleInfoBox,f=e.selectedAlgo,h=e.setSelectedAlgo,p={padding:c,paddingBottom:c/2,height:i};return Object(M.jsxs)("div",{style:p,className:"header",children:[Object(M.jsx)(ee,{clearObstacles:b,runningAlgo:a}),Object(M.jsx)(te,{clearPath:d,runningAlgo:a}),Object(M.jsx)(ue,{rows:t,cols:n,gridState:s,setGridState:o,startCord:l,targetCord:u,clearForReRun:d,runningAlgo:a,setRunningAlgo:r,dropDownWidth:250,toggleInfoBox:O,selectedAlgo:f,setSelectedAlgo:h}),Object(M.jsx)(de,{setSelectedObstacle:g,weightedObsDisabled:j,dropDownWidth:190}),Object(M.jsx)(be,{rows:t,cols:n,setGridState:o,startCord:l,targetCord:u,clearForReRun:d,runningAlgo:a,setRunningAlgo:r,dropDownWidth:150})]})},je=n.p+"static/media/close.494fd48f.svg",Oe=function(e){var t=e.infoBoxOpen,n=e.toggleInfoBox,a=e.selectedAlgo,r=Object(l.useState)(!1),c=Object(O.a)(r,2),i=c[0],s=c[1],o=Object(l.useState)([300,0]),u=Object(O.a)(o,2),b=u[0],d=u[1],g=function(e){s(!1)};return Object(M.jsxs)("div",{style:{left:"".concat(b[0],"px"),top:"".concat(b[1],"px")},className:"info-box ".concat(t?"visible":"hidden"),onMouseMove:function(e){i&&d((function(t){return[t[0]+e.movementX,t[1]+e.movementY]}))},onMouseUp:g,onMouseLeave:g,children:[Object(M.jsx)("img",{className:"close-info-icon",src:je,onClick:n,alt:"Close info box"}),Object(M.jsx)("h1",{onMouseDown:function(e){s(!0)},children:a}),U[a]&&U[a].description||Object(M.jsx)("p",{children:"No information."}),U[a]&&U[a].optimality]})};var fe=function(){var e=Object(l.useState)({}),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)("wall"),c=Object(O.a)(r,2),i=c[0],s=c[1],o=Object(l.useState)(!1),u=Object(O.a)(o,2),b=u[0],d=u[1],f=Object(l.useState)(L[0]),h=Object(O.a)(f,2),p=h[0],v=h[1],w=Object(l.useState)(0),x=Object(O.a)(w,2),S=x[0],m=x[1],A=Object(l.useState)(0),C=Object(O.a)(A,2),I=C[0],R=C[1],y=Object(l.useState)("0:0"),N=Object(O.a)(y,2),D=N[0],G=N[1],z=Object(l.useState)("0:0"),W=Object(O.a)(z,2),B=W[0],E=W[1],F=Object(l.useState)(!1),T=Object(O.a)(F,2),P=T[0],_=T[1],H=Object(l.useState)(!1),J=Object(O.a)(H,2),U=J[0],X=J[1];Object(l.useEffect)((function(){console.log("RESETTING BOARD"),q()}),[]);var q=function(){var e=window.innerHeight-180,t=window.innerWidth-60,n=parseInt(e/29),a=parseInt(t/29);_(!1),m(n),R(a),G("0:0"),E("".concat(n-1,":").concat(a-1))},K=function(){console.log("CLEARING PATH");for(var e=0;e<S;e++)for(var t=function(t){var a="".concat(e,":").concat(t),r=n[a][0],c=n[a][1],i=r[0];(i===Y.start||i===Y.target)&&r[1]<=Y.visiting?r.splice(1,1):i<=Y.visiting&&r.splice(0,1),c((function(e){return r}))},a=0;a<I;a++)t(a)},Q=function(){d((function(e){return!e}))};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ge,{rows:S,cols:I,runningAlgo:P,setRunningAlgo:_,padding:30,height:90,gridState:n,setGridState:a,startCord:D,targetCord:B,clearObstacles:function(){for(var e=0;e<S;e++)for(var t=function(t){var r="".concat(e,":").concat(t),c=n[r][0],i=n[r][1],s=c[0];if((s===Y.start||s===Y.target)&&c[1]>=Y.wall)return c.splice(1,1),i((function(e){return c})),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},r,[c,e[r][1]]))})),"continue";s<=Y.visiting&&(s=c[1]),s>=Y.wall&&(i((function(e){return[Y.none]})),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},r,[[Y.none],e[r][1]]))})))},r=0;r<I;r++)t(r)},clearPath:K,setSelectedObstacle:s,weightedObsDisabled:U,toggleInfoBox:Q,selectedAlgo:p,setSelectedAlgo:function(e){var t=k(e);X(t),v(e),t&&(K(),function(){for(var e=0;e<S;e++)for(var t=function(t){var r="".concat(e,":").concat(t),c=n[r][0],i=n[r][1],s=c[0];if((s===Y.start||s===Y.target)&&c[1]>Y.wall)return c.splice(1,1),i((function(e){return c})),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},r,[c,e[r][1]]))})),"continue";s<=Y.visiting&&(s=c[1]),s>Y.wall&&(i((function(e){return[Y.none]})),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(g.a)({},r,[[Y.none],e[r][1]]))})))},r=0;r<I;r++)t(r)}())}}),Object(M.jsx)($,{rows:S,cols:I,padding:30,nodeSize:28,setGridState:a,selectedObstacle:i,setStartCord:G,setTargetCord:E,runningAlgo:P}),Object(M.jsx)(Oe,{infoBoxOpen:b,toggleInfoBox:Q,selectedAlgo:p})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};d.a.render(Object(M.jsx)(u.a.StrictMode,{children:Object(M.jsx)(fe,{})}),document.getElementById("root")),he()}},[[20,1,2]]]);
//# sourceMappingURL=main.b1edde0a.chunk.js.map