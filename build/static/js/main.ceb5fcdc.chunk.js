(this["webpackJsonppathfinding-algorithms-visualizer"]=this["webpackJsonppathfinding-algorithms-visualizer"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o,u=n(2),l=n.n(u),b=n(12),d=n.n(b),g=(n(17),n(4)),f=n(7),j=n(0),O=n(5),h=n(3),p=n.n(h),v=n(8),x=n(6),w=function(e,t,n,a){var r=parseInt(e.split(":")[0]),c=parseInt(e.split(":")[1]),i=[];return r-1>=0&&a["".concat(r-1,":").concat(c)][0][0]!==Z.wall&&i.push("".concat(r-1,":").concat(c)),c+1<n&&a["".concat(r,":").concat(c+1)][0][0]!==Z.wall&&i.push("".concat(r,":").concat(c+1)),r+1<t&&a["".concat(r+1,":").concat(c)][0][0]!==Z.wall&&i.push("".concat(r+1,":").concat(c)),c-1>=0&&a["".concat(r,":").concat(c-1)][0][0]!==Z.wall&&i.push("".concat(r,":").concat(c-1)),i},k=function(e,t,n){for(var a=t,r=[];(a=n[a])!==e;)r.push(a);return r},m=function(e){var t=Math.min.apply(Math,Object(f.a)(Object.values(e)));for(var n in e)if(e[n]===t)return n},S=function(e){return U.includes(e)},A=function(e){return new Promise((function(t){return setTimeout(t,e)}))},C=function(e,t){if(e===t)return e;var n=Math.min(e,t),a=Math.max(e,t);return Math.floor(Math.random()*(a-n+1)+n)},y=function(){var e=Object(x.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,u,l,b,d,g,j,O,h,x,S,C;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o={},u={},l={},(s={})[t]=0,u[t]=0,b=0;b<r;b++)for(d=0;d<c;d++)(g="".concat(b,":").concat(d))!==t&&(s[g]=1/0);case 7:if(!(Object.keys(u).length>0)){e.next=42;break}if(j=m(u),delete u[j],l[j]=1,j===t||j===n){e.next=16;break}(0,a[j][1])((function(e){return[Z.visited].concat(Object(f.a)(e.slice(1)))})),e.next=18;break;case 16:if(j!==n){e.next=18;break}return e.abrupt("return",k(t,n,o));case 18:O=w(j,r,c,a),h=Object(v.a)(O),e.prev=20,h.s();case 22:if((x=h.n()).done){e.next=30;break}if(S=x.value,C=s[j]+te[a[S][0][0]],!(S in l)){e.next=27;break}return e.abrupt("continue",28);case 27:(S in u&&C<s[S]||!(S in u))&&(s[S]=C,o[S]=j,u[S]=C,S!==n&&(0,a[S][1])((function(e){return[Z.visiting].concat(Object(f.a)(e))})));case 28:e.next=22;break;case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(20),h.e(e.t0);case 35:return e.prev=35,h.f(),e.finish(35);case 38:return e.next=40,A(i);case 40:e.next=7;break;case 42:return e.abrupt("return",[]);case 43:case"end":return e.stop()}}),e,null,[[20,32,35,38]])})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,u,l,b,d,g,f,O;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[t],o=[],u=Object(j.a)({},t,1);case 3:if(!(s.length>0)){e.next=38;break}if((l=s[0])!==n&&l!==t&&(0,a[l][1])((function(e){return[Z.visiting,Z.none]})),l!==n){e.next=10;break}return s.pop(),s.shift(),e.abrupt("return",s);case 10:l!==t&&(o.unshift(l),u[l]=1,(0,a[l][1])((function(e){return[Z.visited,Z.none]}))),b=w(l,r,c,a),d=!1,g=Object(v.a)(b),e.prev=14,g.s();case 16:if((f=g.n()).done){e.next=25;break}if(!((O=f.value)in u)){e.next=20;break}return e.abrupt("continue",23);case 20:return s.unshift(O),d=!0,e.abrupt("break",25);case 23:e.next=16;break;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(14),g.e(e.t0);case 30:return e.prev=30,g.f(),e.finish(30);case 33:return d||s.splice(0,1),e.next=36,A(i);case 36:e.next=3;break;case 38:return e.abrupt("return",[]);case 39:case"end":return e.stop()}}),e,null,[[14,27,30,33]])})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,u,l,b,d,g,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[t],o=Object(j.a)({},t,1),u={};case 3:if(!(s.length>0)){e.next=35;break}(l=s.pop())!==t&&l!==n&&(0,a[l][1])((function(e){return[Z.visited,Z.none]})),b=w(l,r,c,a),d=Object(v.a)(b),e.prev=8,d.s();case 10:if((g=d.n()).done){e.next=23;break}if(!((f=g.value)in o)){e.next=14;break}return e.abrupt("continue",21);case 14:if(u[f]=l,s.unshift(f),o[f]=1,f!==n){e.next=19;break}return e.abrupt("return",k(t,n,u));case 19:(0,a[f][1])((function(e){return[Z.visiting,Z.none]}));case 21:e.next=10;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(8),d.e(e.t0);case 28:return e.prev=28,d.f(),e.finish(28);case 31:return e.next=33,A(i);case 33:e.next=3;break;case 35:return e.abrupt("return",[]);case 36:case"end":return e.stop()}}),e,null,[[8,25,28,31]])})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),D=function(){var e=Object(x.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,u,l,b,d,g,O,h,x,S,C,y,I,N;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s=Object(j.a)({},t,0),o=Object(j.a)({},t,0),u=Object(j.a)({},t,0),l=Object(j.a)({},t,0),b={},d={},g=0;g<r;g++)for(O=0;O<c;O++)(h="".concat(g,":").concat(O))!==t&&(l[h]=o[h]=u[h]=1/0);case 7:if(!(Object.keys(s).length>0)){e.next=24;break}if(x=m(s),delete s[x],x===t||x===n){e.next=15;break}(0,a[x][1])((function(e){return[Z.visited].concat(Object(f.a)(e.slice(1)))})),e.next=17;break;case 15:if(x!==n){e.next=17;break}return e.abrupt("return",k(t,n,d));case 17:S=w(x,r,c,a),C=Object(v.a)(S);try{for(C.s();!(y=C.n()).done;)I=y.value,(N=o[x]+te[a[I][0][0]])<o[I]&&(I===t||I===n||I in b||(0,a[I][1])((function(e){return[Z.visiting].concat(Object(f.a)(e))})),b[I]=1,o[I]=N,u[I]=R(I,n),l[I]=o[I]+u[I],d[I]=x,s[I]=l[I])}catch(p){C.e(p)}finally{C.f()}return e.next=22,A(i);case 22:e.next=7;break;case 24:return e.abrupt("return",[]);case 25:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),R=function(e,t){if(e===t)return 0;var n=parseInt(e.split(":")[0]),a=parseInt(e.split(":")[1]),r=parseInt(t.split(":")[0]),c=parseInt(t.split(":")[1]);return Math.abs(n-r)+Math.abs(a-c)},M=function(){var e=Object(x.a)(p.a.mark((function e(t,n,a,r,c,i){var s,o,u,l,b,d,g,O,h,x,S,C,y;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s=Object(j.a)({},t,0),o=Object(j.a)({},t,0),u=Object(j.a)({},t,0),l={},b={},d=0;d<r;d++)for(g=0;g<c;g++)(O="".concat(d,":").concat(g))!==t&&(u[O]=o[O]=1/0);case 6:if(!(Object.keys(s).length>0)){e.next=24;break}if(h=m(s),delete s[h],h===t||h===n){e.next=14;break}(0,a[h][1])((function(e){return[Z.visited].concat(Object(f.a)(e.slice(1)))})),e.next=17;break;case 14:if(h!==n){e.next=17;break}return console.log("DONNEE"),e.abrupt("return",k(t,n,l));case 17:x=w(h,r,c,a),S=Object(v.a)(x);try{for(S.s();!(C=S.n()).done;)(y=C.value)in b||(b[y]=1,y!==t&&y!==n&&(0,a[y][1])((function(e){return[Z.visiting].concat(Object(f.a)(e))})),o[y]=G(y,n)+te[a[y][0][0]],u[y]=o[y],l[y]=h,s[y]=u[y])}catch(p){S.e(p)}finally{S.f()}return e.next=22,A(i);case 22:e.next=6;break;case 24:return e.abrupt("return",[]);case 25:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,i){return e.apply(this,arguments)}}(),G=function(e,t){if(e===t)return 0;var n=parseInt(e.split(":")[0]),a=parseInt(e.split(":")[1]),r=parseInt(t.split(":")[0]),c=parseInt(t.split(":")[1]);return Math.abs(n-r)+Math.abs(a-c)},z=function(){var e=Object(x.a)(p.a.mark((function e(t,n,a,r,c,i,s){var o,u,l,b,d,g,f,j;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0;case 1:if(!(o<i)){e.next=9;break}return u="".concat(0,":",o),W(u,t,n,a,r),e.next=6,A(s);case 6:o++,e.next=1;break;case 9:l=1;case 10:if(!(l<c)){e.next=18;break}return b="".concat(l,":").concat(i-1),W(b,t,n,a,r),e.next=15,A(s);case 15:l++,e.next=10;break;case 18:d=i-2;case 19:if(!(d>=0)){e.next=27;break}return g="".concat(c-1,":").concat(d),W(g,t,n,a,r),e.next=24,A(s);case 24:d--,e.next=19;break;case 27:f=c-2;case 28:if(!(f>0)){e.next=36;break}return j="".concat(f,":",0),W(j,t,n,a,r),e.next=33,A(s);case 33:f--,e.next=28;break;case 36:return e.next=38,E(t,n,a,r,1,c-2,1,i-2,s,c,i);case 38:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,i,s){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(p.a.mark((function e(t,n,a,r,c,i,s,o,u,l,b){var d,g,f,h,v,x,w,k,m,S,y,I,N,D,R;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=0,0!==(f=(d=o-s+1)<(g=i-c+1)?0:g<d?1:C(0,1))){e.next=30;break}if(!(g<3||c%2===1&&3===g)){e.next=7;break}return e.abrupt("return");case 7:h=s,s%2===1&&(h+=1),v=c+2,c%2===0&&(v=c+1),x=2*Math.floor(C(h,o)/2),w=C(v,i-2),w=2*Math.floor(w/2)+1,k=p.a.mark((function e(c){var i,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c!==x){e.next=2;break}return e.abrupt("return","continue");case 2:return i="".concat(w,":").concat(c),s=a[i][1],o=[Z.wall,Z.none],i===t?o=[Z.start,Z.wall,Z.none]:i===n&&(o=[Z.target,Z.wall,Z.none]),s((function(e){return o})),r((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},i,[o,e[i][1]]))})),e.next=10,A(u);case 10:case"end":return e.stop()}}),e)})),m=s;case 16:if(!(m<=o)){e.next=24;break}return e.delegateYield(k(m),"t0",18);case 18:if("continue"!==e.t0){e.next=21;break}return e.abrupt("continue",21);case 21:m++,e.next=16;break;case 24:return e.next=26,E(t,n,a,r,c,w-1,s,o,u,l,b);case 26:return e.next=28,E(t,n,a,r,w+1,i,s,o,u,l,b);case 28:e.next=54;break;case 30:if(1!==f){e.next=54;break}if(!(d<3||s%2===1&&3===d)){e.next=33;break}return e.abrupt("return");case 33:S=c,c%2===1&&(S+=1),y=s+2,s%2===0&&(y=s+1),I=2*Math.floor(C(S,i)/2),N=C(y,o-2),N=2*Math.floor(N/2)+1,D=p.a.mark((function e(c){var i,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c!==I){e.next=2;break}return e.abrupt("return","continue");case 2:return i="".concat(c,":").concat(N),s=a[i][1],o=[Z.wall,Z.none],i===t?o=[Z.start,Z.wall,Z.none]:i===n&&(o=[Z.target,Z.wall,Z.none]),s((function(e){return o})),r((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},i,[o,e[i][1]]))})),e.next=10,A(u);case 10:case"end":return e.stop()}}),e)})),R=c;case 42:if(!(R<=i)){e.next=50;break}return e.delegateYield(D(R),"t1",44);case 44:if("continue"!==e.t1){e.next=47;break}return e.abrupt("continue",47);case 47:R++,e.next=42;break;case 50:return e.next=52,E(t,n,a,r,c,i,s,N-1,u,l,b);case 52:return e.next=54,E(t,n,a,r,c,i,N+1,o,u,l,b);case 54:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,i,s,o,u,l,b){return e.apply(this,arguments)}}(),W=function(e,t,n,a,r){var c=a[e][1],i=[Z.wall,Z.none];e===t?i=[Z.start,Z.wall,Z.none]:e===n&&(i=[Z.target,Z.wall,Z.none]),c((function(e){return i})),r((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(j.a)({},e,[i,t[e][1]]))}))},B=n(1),T="Dijkstra's",F="A* (A-Star)",P="Breadth-first Search",L="Depth-first Search",Y="Best-first Search",_=(a={},Object(j.a)(a,T,y),Object(j.a)(a,F,D),Object(j.a)(a,P,N),Object(j.a)(a,L,I),Object(j.a)(a,Y,M),a);Object.freeze(_);var H=(r={},Object(j.a)(r,T,1),Object(j.a)(r,F,4),Object(j.a)(r,P,5),Object(j.a)(r,L,10),Object(j.a)(r,Y,11),r);Object.freeze(H);var J=[T,F,P,L,Y];Object.freeze(J);var U=[L,P];Object.freeze(U);var X=[T,F,P];Object.freeze(X);var q="Recursive Division",K=[q,"ALGO 2"];Object.freeze(K);var Q=Object(j.a)({},q,z);Object.freeze(Q);var V=Object(j.a)({},T,{description:Object(B.jsxs)("p",{children:["Dijkstra's algorithm to find the shortest path between a and b. It picks the unvisited vertex with the ",Object(B.jsx)("strong",{children:"lowest distance"}),", calculates the distance through it to each unvisited neighbor, and updates the neighbor's distance if smaller. Mark visited (set to red) when done with neighbors."]}),optimality:Object(B.jsx)("p",{children:"Dijkstra's is guranteed to find the shortest path."})});Object.freeze(V);var Z={path:0,visited:1,visiting:2,none:3,target:4,start:5,remObstacle:6,wall:7,weighted100:8,weighted80:9,weighted60:10,weighted40:11,weighted20:12};Object.freeze(Z);var $=(c={},Object(j.a)(c,Z.none,"none"),Object(j.a)(c,Z.target,"target"),Object(j.a)(c,Z.wall,"wall"),Object(j.a)(c,Z.visiting,"visiting"),Object(j.a)(c,Z.start,"start"),Object(j.a)(c,Z.visited,"visited"),Object(j.a)(c,Z.path,"path"),Object(j.a)(c,Z.weighted100,"weighted100"),Object(j.a)(c,Z.weighted80,"weighted80"),Object(j.a)(c,Z.weighted60,"weighted60"),Object(j.a)(c,Z.weighted40,"weighted40"),Object(j.a)(c,Z.weighted20,"weighted20"),c);Object.freeze($);var ee=(i={},Object(j.a)(i,Z.none,"transparent"),Object(j.a)(i,Z.target,"#f14846"),Object(j.a)(i,Z.wall,"#18191c"),Object(j.a)(i,Z.visiting,"#4988dc"),Object(j.a)(i,Z.start,"#43b581"),Object(j.a)(i,Z.visited,"#3f70dd"),Object(j.a)(i,Z.path,"#f9a719"),Object(j.a)(i,Z.weighted100,"#1b1c1e"),Object(j.a)(i,Z.weighted80,"#1c1e21"),Object(j.a)(i,Z.weighted60,"#222327"),Object(j.a)(i,Z.weighted40,"#26272b"),Object(j.a)(i,Z.weighted20,"#2b2c31"),i);Object.freeze(ee);var te=(s={},Object(j.a)(s,Z.none,1),Object(j.a)(s,Z.target,1),Object(j.a)(s,Z.wall,1/0),Object(j.a)(s,Z.start,1),Object(j.a)(s,Z.weighted100,100),Object(j.a)(s,Z.weighted80,80),Object(j.a)(s,Z.weighted60,60),Object(j.a)(s,Z.weighted40,40),Object(j.a)(s,Z.weighted20,20),s);Object.freeze(te);var ne=["Wall (\u221e)","Weighted (100)","Weighted (80)","Weighted (60)","Weighted (40)","Weighted (20)"],ae=(o={},Object(j.a)(o,ne[0],$[Z.wall]),Object(j.a)(o,ne[1],$[Z.weighted100]),Object(j.a)(o,ne[2],$[Z.weighted80]),Object(j.a)(o,ne[3],$[Z.weighted60]),Object(j.a)(o,ne[4],$[Z.weighted40]),Object(j.a)(o,ne[5],$[Z.weighted20]),o);Object.freeze(ae);var re=function(e){var t=e.nodeId,n=e.size,a=e.setGridState,r=e.draggingSelection,c=e.setDraggingSelection,i=e.setStartCord,s=e.setTargetCord,o=e.runningAlgo,l=e.selectedObstacle,b=e.startingState,d=Object(u.useState)(b),h=Object(g.a)(d,2),p=h[0],v=h[1];Object(u.useEffect)((function(){a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[b,v]))}))}),[]);var x=function(e){if((e[0]===Z.visited||e[0]===Z.visiting)&&e[1]>Z.wall){var t=ee[e[0]],n=ee[e[1]],a=.78;e[0]===Z.visiting&&(t=ee[Z.visited]);var r=t.match(/\w\w/g).map((function(e){return parseInt(e,16)})),c=Object(g.a)(r,3),i=c[0],s=c[1],o=c[2],u=n.match(/\w\w/g).map((function(e){return parseInt(e,16)})),l=Object(g.a)(u,3),b=l[0],d=l[1],f=l[2];return"#"+Math.round(i+(b-i)*a).toString(16).padStart(2,"0")+Math.round(s+(d-s)*a).toString(16).padStart(2,"0")+Math.round(o+(f-o)*a).toString(16).padStart(2,"0")}return ee[e[0]]}(p),w={width:n,height:n,backgroundColor:x,border:"1px solid ".concat(p[0]===Z.none?"#3C4046":x)};o||(r===Z.start||r===Z.target?w.cursor="grabbing":r!==Z.none||p[0]!==Z.start&&p[0]!==Z.target||(w.cursor="grab"));return Object(B.jsx)("div",{style:w,className:"node ".concat(r===Z.remObstacle&&"erasing"),onMouseDown:o?null:function(){return p[0]<=Z.none?(c(Z[l]),v((function(e){return[Z[l],Z.none]})),void a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[[Z[l],Z.none],v]))}))):p[0]>=Z.wall?(v((function(e){return e.slice(1)})),a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[p.slice(1),v]))})),void c(Z.remObstacle)):(p[0]!==Z.start&&p[0]!==Z.target||a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[p.slice(1),v]))})),void c(p[0]))},onMouseUp:o?null:function(){r===Z.start?(i(t),a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[p,v]))}))):r===Z.target&&(s(t),a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[p,v]))}))),r!==Z.none&&c(Z.none)},onMouseEnter:o?null:function(){r===Z.remObstacle&&p[0]>=Z.wall?(v((function(e){return e.slice(1)})),a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[p.slice(1),v]))}))):r===Z[l]&&p[0]<=Z.none?(v((function(e){return[Z[l],Z.none]})),a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,[[Z[l],Z.none],v]))}))):(r===Z.start||r===Z.target)&&v((function(e){return[r].concat(Object(f.a)(e))}))},onMouseLeave:o?null:function(){r!==Z.start&&r!==Z.target||v((function(e){return e.slice(1)}))}})},ce=l.a.memo((function(e){var t=e.rows,n=e.cols,a=e.padding,r=e.nodeSize,c=e.setGridState,i=e.selectedObstacle,s=e.setStartCord,o=e.setTargetCord,l=e.runningAlgo,b=Object(u.useState)(Z.none),d=Object(g.a)(b,2),f=d[0],j=d[1];console.log("RERENDERING GRID");for(var O=[],h=0;h<t;h++)for(var p=0;p<n;p++){var v="".concat(h,":").concat(p),x=[Z.none];1===h&&1===p?x.unshift(Z.start):h===t-2&&p===n-2&&x.unshift(Z.target),O.push(Object(B.jsx)(re,{nodeId:v,size:r,setGridState:c,draggingSelection:f,setDraggingSelection:j,setStartCord:s,setTargetCord:o,runningAlgo:l,selectedObstacle:i,startingState:x},v))}var w={width:n*r+n,height:t*r+t},k={paddingLeft:a,paddingRight:a};return Object(B.jsx)("div",{style:k,children:Object(B.jsx)("div",{className:"grid",style:w,children:O})})})),ie=function(e){var t=e.clearObstacles,n=e.runningAlgo;return Object(B.jsx)("div",{className:"button ".concat(n?"disabled":"red"),onClick:n?null:t,children:"Clear Obstacles"})},se=function(e){var t=e.clearPath,n=e.runningAlgo;return Object(B.jsx)("div",{className:"button ".concat(n?"disabled":"orange"),onClick:n?null:t,children:"Clear Path"})},oe=function(e){var t=e.rows,n=e.cols,a=e.selectedAlgo,r=e.gridState,c=(e.setGridState,e.startCord),i=e.targetCord,s=e.clearForReRun,o=e.runningAlgo,u=e.setRunningAlgo,l=function(){var e=Object(x.a)(p.a.mark((function e(){var o,l,b;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c!==i){e.next=2;break}return e.abrupt("return");case 2:return s(),u(!0),console.log("STARTING: ",a),o=[],e.next=8,_[a](c,i,r,t,n,H[a]);case 8:o=e.sent,console.log("ENDED: ",a),l=p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(7);case 2:(0,r[o[t]][1])((function(e){return[Z.path].concat(Object(f.a)(r[o[t]][0]))}));case 4:case"end":return e.stop()}}),e)})),b=o.length-1;case 12:if(!(b>=0)){e.next=17;break}return e.delegateYield(l(b),"t0",14);case 14:b--,e.next=12;break;case 17:u(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{className:"button ".concat(o?"disabled":"green"),onClick:o?null:l,children:"Run"})},ue=n.p+"static/media/down_arrow.8fed4a28.svg",le=n.p+"static/media/weight.e51e9729.svg",be=n.p+"static/media/weight_unfilled.cc3c5f2f.svg",de=n.p+"static/media/optimal.5649a19a.svg",ge=n.p+"static/media/optimal_unfilled.e461ee2c.svg",fe=function(e){var t=e.setSelection,n=e.items,a=e.disabled,r=e.dropDownWidth,c=e.isAlgoSelector,i=e.isObstacleSelector,s=Object(u.useState)(!1),o=Object(g.a)(s,2),l=o[0],b=o[1],d=Object(u.useState)(n[0]),f=Object(g.a)(d,2),j=f[0],O=f[1],h=Object(u.useState)(0),p=Object(g.a)(h,2),v=p[0],x=p[1];Object(u.useEffect)((function(){a&&(O(n[0]),x(0),b(!1),t(n[0]))}),[a]);for(var w={width:r},k=[],m=function(e){var a;k.push(Object(B.jsxs)("div",{style:w,className:"dropdown-list-item ".concat(e===v&&"selected"," ").concat(e===n.length-1&&"last"),onClick:function(){var a;a=e,b((function(e){return!e})),O(n[a]),x(a),t(n[a])},children:[n[e],c&&(S(n[e])?Object(B.jsx)("img",{className:"algo-property-badge",src:be,title:"".concat(n[e]," is not a weighted path-finding algorithm."),alt:"".concat(n[e]," is not a weighted path-finding algorithm.")}):Object(B.jsx)("img",{className:"algo-property-badge",src:le,title:"".concat(n[e]," is a weighted path-finding algorithm."),alt:"".concat(n[e]," is a weighted path-finding algorithm.")})),c&&(a=n[e],X.includes(a)?Object(B.jsx)("img",{className:"algo-property-badge",src:de,title:"".concat(n[e]," guarantees shortest path."),alt:"".concat(n[e]," guarantees shortest path.")}):Object(B.jsx)("img",{className:"algo-property-badge",src:ge,title:"".concat(n[e]," does not guarantee shortest path."),alt:"".concat(n[e]," does not guarantee shortest path.")})),i&&Object(B.jsx)("div",{style:{backgroundColor:ee[Z[ae[n[e]]]]},className:"obstacle-preview",children:" "})]},e))},A=0;A<n.length;A++)m(A);return Object(B.jsxs)("div",{className:"dropdown",children:[Object(B.jsxs)("div",{style:w,className:"dropdown-header ".concat(l&&"open"," ").concat(a&&"disabled"),onClick:a?null:function(){b((function(e){return!e}))},children:[j,!a&&Object(B.jsx)("img",{className:"down-arrow",src:ue,alt:""})]}),Object(B.jsx)("div",{style:{display:l?"flex":"none"},className:"dropdown-list",children:k})]})},je=function(e){var t=e.toggleInfoBox;return Object(B.jsx)("div",{className:"button blue",onClick:t,children:"Info"})},Oe=function(e){var t=e.rows,n=e.cols,a=e.gridState,r=e.setGridState,c=e.startCord,i=e.targetCord,s=e.clearForReRun,o=e.runningAlgo,u=e.setRunningAlgo,l=e.dropDownWidth,b=e.toggleInfoBox,d=e.selectedAlgo,g=e.setSelectedAlgo;return Object(B.jsxs)("div",{className:"choose-algo",children:[Object(B.jsx)(fe,{setSelection:g,items:J,disabled:!1,dropDownWidth:l,isAlgoSelector:!0,isObstacleSelector:!1}),Object(B.jsx)(je,{toggleInfoBox:b}),Object(B.jsx)(oe,{rows:t,cols:n,selectedAlgo:d,gridState:a,setGridState:r,startCord:c,targetCord:i,clearForReRun:s,runningAlgo:o,setRunningAlgo:u})]})},he=function(e){var t=e.rows,n=e.cols,a=e.selectedTerrainAlgo,r=e.gridState,c=e.setGridState,i=e.startCord,s=e.targetCord,o=e.runningAlgo,u=e.setRunningAlgo,l=e.resetGrid,b=function(){var e=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(),u(!0),console.log("STARTING: ",a),e.next=5,Q[a](i,s,r,c,t,n,5);case 5:console.log("ENDED: ",a),u(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{className:"button ".concat(o?"disabled":"green"),onClick:o?null:b,children:"Run"})},pe=function(e){var t=e.rows,n=e.cols,a=e.gridState,r=e.setGridState,c=e.startCord,i=e.targetCord,s=e.runningAlgo,o=e.setRunningAlgo,l=e.dropDownWidth,b=e.resetGrid,d=Object(u.useState)(K[0]),f=Object(g.a)(d,2),j=f[0],O=f[1];return Object(B.jsxs)("div",{className:"choose-terrain",children:[Object(B.jsx)(fe,{setSelection:O,items:K,disabled:!1,dropDownWidth:l,isAlgoSelector:!1,isObstacleSelector:!1}),Object(B.jsx)(he,{rows:t,cols:n,selectedTerrainAlgo:j,gridState:a,setGridState:r,startCord:c,targetCord:i,runningAlgo:s,setRunningAlgo:o,resetGrid:b})]})},ve=function(e){var t=e.setSelectedObstacle,n=e.weightedObsDisabled,a=e.dropDownWidth;return Object(B.jsx)("div",{className:"choose-obstacle",children:Object(B.jsx)(fe,{setSelection:function(e){console.log("selected obs: ",ae[e]),t(ae[e])},items:ne,disabled:n,dropDownWidth:a,isAlgoSelector:!1,isObstacleSelector:!0})})},xe=function(e){var t=e.rows,n=e.cols,a=e.runningAlgo,r=e.setRunningAlgo,c=e.padding,i=e.height,s=e.gridState,o=e.setGridState,u=e.startCord,l=e.targetCord,b=e.clearObstacles,d=e.clearPath,g=e.setSelectedObstacle,f=e.weightedObsDisabled,j=e.toggleInfoBox,O=e.selectedAlgo,h=e.setSelectedAlgo,p=e.resetGrid,v={padding:c,paddingBottom:c/2,height:i};return Object(B.jsxs)("div",{style:v,className:"header",children:[Object(B.jsx)(ie,{clearObstacles:b,runningAlgo:a}),Object(B.jsx)(se,{clearPath:d,runningAlgo:a}),Object(B.jsx)(Oe,{rows:t,cols:n,gridState:s,setGridState:o,startCord:u,targetCord:l,clearForReRun:d,runningAlgo:a,setRunningAlgo:r,dropDownWidth:220,toggleInfoBox:j,selectedAlgo:O,setSelectedAlgo:h}),Object(B.jsx)(ve,{setSelectedObstacle:g,weightedObsDisabled:f,dropDownWidth:190}),Object(B.jsx)(pe,{rows:t,cols:n,gridState:s,setGridState:o,startCord:u,targetCord:l,runningAlgo:a,setRunningAlgo:r,resetGrid:p,dropDownWidth:200})]})},we=n.p+"static/media/close.494fd48f.svg",ke=function(e){var t=e.infoBoxOpen,n=e.toggleInfoBox,a=e.selectedAlgo,r=Object(u.useState)(!1),c=Object(g.a)(r,2),i=c[0],s=c[1],o=Object(u.useState)([300,0]),l=Object(g.a)(o,2),b=l[0],d=l[1],f=function(e){s(!1)};return Object(B.jsxs)("div",{style:{left:"".concat(b[0],"px"),top:"".concat(b[1],"px")},className:"info-box ".concat(t?"visible":"hidden"),onMouseMove:function(e){i&&d((function(t){return[t[0]+e.movementX,t[1]+e.movementY]}))},onMouseUp:f,onMouseLeave:f,children:[Object(B.jsx)("img",{className:"close-info-icon",src:we,onClick:n,alt:"Close info box"}),Object(B.jsx)("h1",{onMouseDown:function(e){s(!0)},children:a}),V[a]&&V[a].description||Object(B.jsx)("p",{children:"No information."}),V[a]&&V[a].optimality]})};var me=function(){var e=Object(u.useState)({}),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(u.useState)("wall"),c=Object(g.a)(r,2),i=c[0],s=c[1],o=Object(u.useState)(!1),l=Object(g.a)(o,2),b=l[0],d=l[1],f=Object(u.useState)(J[0]),j=Object(g.a)(f,2),O=j[0],h=j[1],p=Object(u.useState)(0),v=Object(g.a)(p,2),x=v[0],w=v[1],k=Object(u.useState)(0),m=Object(g.a)(k,2),A=m[0],C=m[1],y=Object(u.useState)("0:0"),I=Object(g.a)(y,2),N=I[0],D=I[1],R=Object(u.useState)("0:0"),M=Object(g.a)(R,2),G=M[0],z=M[1],E=Object(u.useState)(!1),W=Object(g.a)(E,2),T=W[0],F=W[1],P=Object(u.useState)(!1),L=Object(g.a)(P,2),Y=L[0],_=L[1];Object(u.useEffect)((function(){console.log("RESETTING BOARD"),H()}),[]);var H=function(){var e=window.innerHeight-180,t=window.innerWidth-60,n=parseInt(e/29),a=parseInt(t/29);F(!1),w(n),C(a),D("1:1"),z("".concat(n-2,":").concat(a-2))},U=function(){console.log("CLEARING PATH");for(var e=0;e<x;e++)for(var t=function(t){var a="".concat(e,":").concat(t),r=n[a][0],c=n[a][1],i=r[0];(i===Z.start||i===Z.target)&&r[1]<=Z.visiting?r.splice(1,1):i<=Z.visiting&&r.splice(0,1),c((function(e){return r}))},a=0;a<A;a++)t(a)},X=function(){d((function(e){return!e}))};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(xe,{rows:x,cols:A,runningAlgo:T,setRunningAlgo:F,padding:30,height:90,gridState:n,setGridState:a,startCord:N,targetCord:G,clearObstacles:function(){for(var e={},t=!1,r=0;r<x;r++)for(var c=function(a){var c="".concat(r,":").concat(a),i=n[c][0],s=n[c][1],o=i[0];if(e[c]=[i,s],(o===Z.start||o===Z.target)&&i[1]>=Z.wall)return t=!0,i.splice(1,1),s((function(e){return i})),e[c]=[i,s],"continue";o<=Z.visiting&&(o=i[1]),o>=Z.wall&&(t=!0,s((function(e){return[Z.none]})),e[c]=[[Z.none],s])},i=0;i<A;i++)c(i);t&&a((function(t){return e}))},clearPath:U,setSelectedObstacle:s,weightedObsDisabled:Y,toggleInfoBox:X,selectedAlgo:O,setSelectedAlgo:function(e){var t=S(e);_(t),h(e),t&&(U(),function(){for(var e={},t=!1,r=0;r<x;r++)for(var c=function(a){var c="".concat(r,":").concat(a),i=n[c][0],s=n[c][1],o=i[0];if(e[c]=[i,s],(o===Z.start||o===Z.target)&&i[1]>Z.wall)return t=!0,i.splice(1,1),s((function(e){return i})),e[c]=[i,s],"continue";o<=Z.visiting&&(o=i[1]),o>Z.wall&&(t=!0,s((function(e){return[Z.none]})),e[c]=[[Z.none],s])},i=0;i<A;i++)c(i);t&&a((function(t){return e}))}())},resetGrid:function(){for(var e={},t=0;t<x;t++)for(var r=function(a){var r="".concat(t,":").concat(a),c=n[r][0],i=n[r][1],s=c[0],o=[Z.none];s!==Z.start&&s!==Z.target||o.unshift(s),i((function(e){return o})),e[r]=[o,i]},c=0;c<A;c++)r(c);a((function(t){return e}))}}),Object(B.jsx)(ce,{rows:x,cols:A,padding:30,nodeSize:28,setGridState:a,selectedObstacle:i,setStartCord:D,setTargetCord:z,runningAlgo:T}),Object(B.jsx)(ke,{infoBoxOpen:b,toggleInfoBox:X,selectedAlgo:O})]})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};d.a.render(Object(B.jsx)(l.a.StrictMode,{children:Object(B.jsx)(me,{})}),document.getElementById("root")),Se()}},[[20,1,2]]]);
//# sourceMappingURL=main.ceb5fcdc.chunk.js.map