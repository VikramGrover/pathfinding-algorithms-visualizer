(this["webpackJsonppathfinding-algorithms-visualizer"]=this["webpackJsonppathfinding-algorithms-visualizer"]||[]).push([[0],{21:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(14),i=n.n(c),o=(n(21),n(4)),s=n(7),u=n(1),l=n(5),d=n(3),b=n.n(d),g=n(8),f=n(6),h=function(e,t,n,r){var a=parseInt(e.split(":")[0]),c=parseInt(e.split(":")[1]),i=[];return a-1>=0&&r["".concat(a-1,":").concat(c)][0][0]!==xe.wall&&i.push("".concat(a-1,":").concat(c)),c+1<n&&r["".concat(a,":").concat(c+1)][0][0]!==xe.wall&&i.push("".concat(a,":").concat(c+1)),a+1<t&&r["".concat(a+1,":").concat(c)][0][0]!==xe.wall&&i.push("".concat(a+1,":").concat(c)),c-1>=0&&r["".concat(a,":").concat(c-1)][0][0]!==xe.wall&&i.push("".concat(a,":").concat(c-1)),i},j=function(e,t,n){for(var r=t,a=[];(r=n[r])!==e;)a.push(r);return a},O=function(e){var t=Math.min.apply(Math,Object(s.a)(Object.values(e)));for(var n in e)if(e[n]===t)return n},p=function(e){return le.includes(e)},v=function(e){return Oe.includes(e)},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))},w=function(e,t){if(e===t)return e;var n=Math.min(e,t),r=Math.max(e,t);return Math.floor(Math.random()*(r-n+1)+n)},m=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i){var o,u,l,d,f,p,v,w,m,S,k,y,A;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(u={},l={},d={},(o={})[t]=0,l[t]=0,f=0;f<a;f++)for(p=0;p<c;p++)(v="".concat(f,":").concat(p))!==t&&(o[v]=1/0);case 7:if(!(Object.keys(l).length>0)){e.next=42;break}if(w=O(l),delete l[w],d[w]=1,w===t||w===n){e.next=16;break}(0,r[w][1])((function(e){return[xe.visited].concat(Object(s.a)(e.slice(1)))})),e.next=18;break;case 16:if(w!==n){e.next=18;break}return e.abrupt("return",j(t,n,u));case 18:m=h(w,a,c,r),S=Object(g.a)(m),e.prev=20,S.s();case 22:if((k=S.n()).done){e.next=30;break}if(y=k.value,A=o[w]+Se[r[y][0][0]],!(y in d)){e.next=27;break}return e.abrupt("continue",28);case 27:(y in l&&A<o[y]||!(y in l))&&(o[y]=A,u[y]=w,l[y]=A,y!==n&&(0,r[y][1])((function(e){return[xe.visiting].concat(Object(s.a)(e))})));case 28:e.next=22;break;case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(20),S.e(e.t0);case 35:return e.prev=35,S.f(),e.finish(35);case 38:return e.next=40,x(i);case 40:e.next=7;break;case 42:return e.abrupt("return",[]);case 43:case"end":return e.stop()}}),e,null,[[20,32,35,38]])})));return function(t,n,r,a,c,i){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i){var o,s,l,d,f,j,O,p,v;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[t],s=[],l=Object(u.a)({},t,1);case 3:if(!(o.length>0)){e.next=38;break}if((d=o[0])!==n&&d!==t&&(0,r[d][1])((function(e){return[xe.visiting,xe.none]})),d!==n){e.next=10;break}return o.pop(),o.shift(),e.abrupt("return",o);case 10:d!==t&&(s.unshift(d),l[d]=1,(0,r[d][1])((function(e){return[xe.visited,xe.none]}))),f=h(d,a,c,r),j=!1,O=Object(g.a)(f),e.prev=14,O.s();case 16:if((p=O.n()).done){e.next=25;break}if(!((v=p.value)in l)){e.next=20;break}return e.abrupt("continue",23);case 20:return o.unshift(v),j=!0,e.abrupt("break",25);case 23:e.next=16;break;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(14),O.e(e.t0);case 30:return e.prev=30,O.f(),e.finish(30);case 33:return j||o.splice(0,1),e.next=36,x(i);case 36:e.next=3;break;case 38:return e.abrupt("return",[]);case 39:case"end":return e.stop()}}),e,null,[[14,27,30,33]])})));return function(t,n,r,a,c,i){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i){var o,s,l,d,f,O,p,v;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[t],s=Object(u.a)({},t,1),l={};case 3:if(!(o.length>0)){e.next=35;break}(d=o.pop())!==t&&d!==n&&(0,r[d][1])((function(e){return[xe.visited,xe.none]})),f=h(d,a,c,r),O=Object(g.a)(f),e.prev=8,O.s();case 10:if((p=O.n()).done){e.next=23;break}if(!((v=p.value)in s)){e.next=14;break}return e.abrupt("continue",21);case 14:if(l[v]=d,o.unshift(v),s[v]=1,v!==n){e.next=19;break}return e.abrupt("return",j(t,n,l));case 19:(0,r[v][1])((function(e){return[xe.visiting,xe.none]}));case 21:e.next=10;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(8),O.e(e.t0);case 28:return e.prev=28,O.f(),e.finish(28);case 31:return e.next=33,x(i);case 33:e.next=3;break;case 35:return e.abrupt("return",[]);case 36:case"end":return e.stop()}}),e,null,[[8,25,28,31]])})));return function(t,n,r,a,c,i){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i){var o,l,d,f,p,v,w,m,S,k,y,_,C,N,I;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=Object(u.a)({},t,0),l=Object(u.a)({},t,0),d=Object(u.a)({},t,0),f=Object(u.a)({},t,0),p={},v={},w=0;w<a;w++)for(m=0;m<c;m++)(S="".concat(w,":").concat(m))!==t&&(f[S]=l[S]=d[S]=1/0);case 7:if(!(Object.keys(o).length>0)){e.next=24;break}if(k=O(o),delete o[k],k===t||k===n){e.next=15;break}(0,r[k][1])((function(e){return[xe.visited].concat(Object(s.a)(e.slice(1)))})),e.next=17;break;case 15:if(k!==n){e.next=17;break}return e.abrupt("return",j(t,n,v));case 17:y=h(k,a,c,r),_=Object(g.a)(y);try{for(_.s();!(C=_.n()).done;)N=C.value,(I=l[k]+Se[r[N][0][0]])<l[N]&&(N===t||N===n||N in p||(0,r[N][1])((function(e){return[xe.visiting].concat(Object(s.a)(e))})),p[N]=1,l[N]=I,d[N]=A(N,n),f[N]=l[N]+d[N],v[N]=k,o[N]=f[N])}catch(b){_.e(b)}finally{_.f()}return e.next=22,x(i);case 22:e.next=7;break;case 24:return e.abrupt("return",[]);case 25:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i){return e.apply(this,arguments)}}(),A=function(e,t){if(e===t)return 0;var n=parseInt(e.split(":")[0]),r=parseInt(e.split(":")[1]),a=parseInt(t.split(":")[0]),c=parseInt(t.split(":")[1]);return Math.sqrt(Math.pow(n-a,2)+Math.pow(r-c,2))},_=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i){var o,l,d,f,p,v,w,m,S,k,y,A,_;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=Object(u.a)({},t,0),l=Object(u.a)({},t,0),d=Object(u.a)({},t,0),f={},p={},v=0;v<a;v++)for(w=0;w<c;w++)(m="".concat(v,":").concat(w))!==t&&(d[m]=l[m]=1/0);case 6:if(!(Object.keys(o).length>0)){e.next=24;break}if(S=O(o),delete o[S],S===t||S===n){e.next=14;break}(0,r[S][1])((function(e){return[xe.visited].concat(Object(s.a)(e.slice(1)))})),e.next=17;break;case 14:if(S!==n){e.next=17;break}return console.log("DONNEE"),e.abrupt("return",j(t,n,f));case 17:k=h(S,a,c,r),y=Object(g.a)(k);try{for(y.s();!(A=y.n()).done;)(_=A.value)in p||(p[_]=1,_!==t&&_!==n&&(0,r[_][1])((function(e){return[xe.visiting].concat(Object(s.a)(e))})),l[_]=C(_,n),d[_]=l[_],f[_]=S,o[_]=d[_])}catch(b){y.e(b)}finally{y.f()}return e.next=22,x(i);case 22:e.next=6;break;case 24:return e.abrupt("return",[]);case 25:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i){return e.apply(this,arguments)}}(),C=function(e,t){if(e===t)return 0;var n=parseInt(e.split(":")[0]),r=parseInt(e.split(":")[1]),a=parseInt(t.split(":")[0]),c=parseInt(t.split(":")[1]);return Math.sqrt(Math.pow(n-a,2)+Math.pow(r-c,2))},N=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i,o){var s,u,l,d,g,f,h,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=0;case 1:if(!(s<i)){e.next=9;break}return u="".concat(0,":",s),M(u,t,n,r,a),e.next=6,x(o);case 6:s++,e.next=1;break;case 9:l=1;case 10:if(!(l<c)){e.next=18;break}return d="".concat(l,":").concat(i-1),M(d,t,n,r,a),e.next=15,x(o);case 15:l++,e.next=10;break;case 18:g=i-2;case 19:if(!(g>=0)){e.next=27;break}return f="".concat(c-1,":").concat(g),M(f,t,n,r,a),e.next=24,x(o);case 24:g--,e.next=19;break;case 27:h=c-2;case 28:if(!(h>0)){e.next=36;break}return j="".concat(h,":",0),M(j,t,n,r,a),e.next=33,x(o);case 33:h--,e.next=28;break;case 36:return e.next=38,I(t,n,r,a,1,c-2,1,i-2,o,c,i);case 38:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i,o){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i,o,s,u,l,d){var g,f,h,j,O,p,v,m,S,k,y,A,_,C,N;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=0,0!==(h=(g=s-o+1)<(f=i-c+1)?0:f<g?1:w(0,1))){e.next=31;break}if(!(f<3||c%2===1&&3===f)){e.next=7;break}return e.abrupt("return");case 7:j=o,o%2===1&&(j+=1),O=c+2,c%2===0&&(O=c+1),p=2*Math.floor(w(j,s)/2),v=w(O,i-2),v=2*Math.floor(v/2)+1,m=o;case 15:if(!(m<=s)){e.next=25;break}if(m!==p){e.next=18;break}return e.abrupt("continue",22);case 18:return S="".concat(v,":").concat(m),M(S,t,n,r,a),e.next=22,x(u);case 22:m++,e.next=15;break;case 25:return e.next=27,I(t,n,r,a,c,v-1,o,s,u,l,d);case 27:return e.next=29,I(t,n,r,a,v+1,i,o,s,u,l,d);case 29:e.next=56;break;case 31:if(1!==h){e.next=56;break}if(!(g<3||o%2===1&&3===g)){e.next=34;break}return e.abrupt("return");case 34:k=c,c%2===1&&(k+=1),y=o+2,o%2===0&&(y=o+1),A=2*Math.floor(w(k,i)/2),_=w(y,s-2),_=2*Math.floor(_/2)+1,C=c;case 42:if(!(C<=i)){e.next=52;break}if(C!==A){e.next=45;break}return e.abrupt("continue",49);case 45:return N="".concat(C,":").concat(_),M(N,t,n,r,a),e.next=49,x(u);case 49:C++,e.next=42;break;case 52:return e.next=54,I(t,n,r,a,c,i,o,_-1,u,l,d);case 54:return e.next=56,I(t,n,r,a,c,i,_+1,s,u,l,d);case 56:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i,o,s,u,l,d){return e.apply(this,arguments)}}(),M=function(e,t,n,r,a){var c=r[e][1],i=[xe.wall,xe.none];e===t?i=[xe.start,xe.wall,xe.none]:e===n&&(i=[xe.target,xe.wall,xe.none]),c((function(e){return i})),a((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(u.a)({},e,[i,t[e][1]]))}))};function R(e,t,n){this.x=e,this.y=t,this.z=n}R.prototype.dot2=function(e,t){return this.x*e+this.y*t},R.prototype.dot3=function(e,t,n){return this.x*e+this.y*t+this.z*n};var D,z,G,T,W,E,B,q,P,L=[new R(1,1,0),new R(-1,1,0),new R(1,-1,0),new R(-1,-1,0),new R(1,0,1),new R(-1,0,1),new R(1,0,-1),new R(-1,0,-1),new R(0,1,1),new R(0,-1,1),new R(0,1,-1),new R(0,-1,-1)],F=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],H=new Array(512),J=new Array(512),U=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t=0;t<256;t++){var n;n=1&t?F[t]^255&e:F[t]^e>>8&255,H[t]=H[t+256]=n,J[t]=J[t+256]=L[n%12]}},Y=.5*(Math.sqrt(3)-1),X=(3-Math.sqrt(3))/6,K=function(e,t){var n,r,a=(e+t)*Y,c=Math.floor(e+a),i=Math.floor(t+a),o=(c+i)*X,s=e-c+o,u=t-i+o;s>u?(n=1,r=0):(n=0,r=1);var l=s-n+X,d=u-r+X,b=s-1+2*X,g=u-1+2*X,f=J[(c&=255)+H[i&=255]],h=J[c+n+H[i+r]],j=J[c+1+H[i+1]],O=.5-s*s-u*u,p=.5-l*l-d*d,v=.5-b*b-g*g;return 70*((O<0?0:(O*=O)*O*f.dot2(s,u))+(p<0?0:(p*=p)*p*h.dot2(l,d))+(v<0?0:(v*=v)*v*j.dot2(b,g)))},Q=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i,o){var s,u,l,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(U(Math.random()),s={},u=0;u<i;u++)for(l=function(e){var a="".concat(e,":").concat(u),c=r[a][1],i=K(u/12,e/12),o=[xe.none];i>=-1&&i<=-.5?o.unshift(xe.wall):i>-.5&&i<=-.2?o.unshift(xe.weighted100):i>-.2&&i<=.1?o.unshift(xe.weighted80):i>.1&&i<=.4?o.unshift(xe.weighted60):i>.4&&i<=.7?o.unshift(xe.weighted40):i>.7&&i<=1&&o.unshift(xe.weighted20),a===t?o.unshift(xe.start):a===n&&o.unshift(xe.target),c((function(e){return o})),s[a]=[o,c]},d=0;d<c;d++)l(d);a((function(e){return s}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i,o){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i,o){var s,u,l,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={},u=0;case 2:if(!(u<c)){e.next=15;break}l=function(e){var a="".concat(u,":").concat(e),c=r[a][1];if(w(1,10)>=4){var i=[xe.none];return a===t?i.unshift(xe.start):a===n&&i.unshift(xe.target),s[a]=[i,c],"continue"}var o=[xe.wall,xe.none];a===t?o.unshift(xe.start):a===n&&o.unshift(xe.target),c((function(e){return o})),s[a]=[o,c]},d=0;case 5:if(!(d<i)){e.next=12;break}if("continue"!==l(d)){e.next=9;break}return e.abrupt("continue",9);case 9:d++,e.next=5;break;case 12:u++,e.next=2;break;case 15:a((function(e){return s}));case 16:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i,o){return e.apply(this,arguments)}}(),Z=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r,a,c,i,o){var s,u,l,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={},u=0;case 2:if(!(u<c)){e.next=15;break}l=function(e){var a="".concat(u,":").concat(e),c=r[a][1];if(w(1,10)>=5){var i=[xe.none];return a===t?i.unshift(xe.start):a===n&&i.unshift(xe.target),s[a]=[i,c],"continue"}var o=[w(xe.wall,xe.weighted20),xe.none];a===t?o.unshift(xe.start):a===n&&o.unshift(xe.target),c((function(e){return o})),s[a]=[o,c]},d=0;case 5:if(!(d<i)){e.next=12;break}if("continue"!==l(d)){e.next=9;break}return e.abrupt("continue",9);case 9:d++,e.next=5;break;case 12:u++,e.next=2;break;case 15:a((function(e){return s}));case 16:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i,o){return e.apply(this,arguments)}}(),$=n(219),ee=n(218),te=n(0),ne="Dijkstra's",re="A* (A-Star)",ae="Breadth-first Search",ce="Depth-first Search",ie="Best-first Search",oe=(D={},Object(u.a)(D,ne,m),Object(u.a)(D,re,y),Object(u.a)(D,ae,k),Object(u.a)(D,ce,S),Object(u.a)(D,ie,_),D);Object.freeze(oe);var se=(z={},Object(u.a)(z,ne,1),Object(u.a)(z,re,4),Object(u.a)(z,ae,5),Object(u.a)(z,ce,10),Object(u.a)(z,ie,11),z);Object.freeze(se);var ue=[ne,re,ae,ce,ie];Object.freeze(ue);var le=[ce,ae,ie];Object.freeze(le);var de=[ne,re,ae];Object.freeze(de);var be="Recursive Division",ge="Perlin Noise",fe="Random",he="Random (Weighted)",je=[be,ge,fe,he];Object.freeze(je);var Oe=[be,fe];Object.freeze(Oe);var pe=(G={},Object(u.a)(G,be,N),Object(u.a)(G,ge,Q),Object(u.a)(G,fe,V),Object(u.a)(G,he,Z),G);Object.freeze(pe);var ve=(T={},Object(u.a)(T,be,5),Object(u.a)(T,ge,1),Object(u.a)(T,fe,1),Object(u.a)(T,he,1),T);Object.freeze(ve);var xe={path:0,visited:1,visiting:2,none:3,target:4,start:5,remObstacle:6,wall:7,weighted100:8,weighted80:9,weighted60:10,weighted40:11,weighted20:12};Object.freeze(xe);var we=(W={},Object(u.a)(W,xe.none,"none"),Object(u.a)(W,xe.target,"target"),Object(u.a)(W,xe.wall,"wall"),Object(u.a)(W,xe.visiting,"visiting"),Object(u.a)(W,xe.start,"start"),Object(u.a)(W,xe.visited,"visited"),Object(u.a)(W,xe.path,"path"),Object(u.a)(W,xe.weighted100,"weighted100"),Object(u.a)(W,xe.weighted80,"weighted80"),Object(u.a)(W,xe.weighted60,"weighted60"),Object(u.a)(W,xe.weighted40,"weighted40"),Object(u.a)(W,xe.weighted20,"weighted20"),W);Object.freeze(we);var me=(E={},Object(u.a)(E,xe.none,"transparent"),Object(u.a)(E,xe.target,"#f14846"),Object(u.a)(E,xe.wall,"#18191c"),Object(u.a)(E,xe.visiting,"#4988dc"),Object(u.a)(E,xe.start,"#43b581"),Object(u.a)(E,xe.visited,"#3f70dd"),Object(u.a)(E,xe.path,"#f9a719"),Object(u.a)(E,xe.weighted100,"#1b1c1e"),Object(u.a)(E,xe.weighted80,"#1c1e21"),Object(u.a)(E,xe.weighted60,"#222327"),Object(u.a)(E,xe.weighted40,"#26272b"),Object(u.a)(E,xe.weighted20,"#2b2c31"),E);Object.freeze(me);var Se=(B={},Object(u.a)(B,xe.none,1),Object(u.a)(B,xe.target,1),Object(u.a)(B,xe.wall,1/0),Object(u.a)(B,xe.start,1),Object(u.a)(B,xe.weighted100,100),Object(u.a)(B,xe.weighted80,80),Object(u.a)(B,xe.weighted60,60),Object(u.a)(B,xe.weighted40,40),Object(u.a)(B,xe.weighted20,20),B);Object.freeze(Se);var ke=["Wall (\u221e)","Weighted (100)","Weighted (80)","Weighted (60)","Weighted (40)","Weighted (20)"],ye=(q={},Object(u.a)(q,ke[0],we[xe.wall]),Object(u.a)(q,ke[1],we[xe.weighted100]),Object(u.a)(q,ke[2],we[xe.weighted80]),Object(u.a)(q,ke[3],we[xe.weighted60]),Object(u.a)(q,ke[4],we[xe.weighted40]),Object(u.a)(q,ke[5],we[xe.weighted20]),q);Object.freeze(ye);var Ae={fontSize:13,backgroundColor:"#18191c",borderRadius:4,padding:20,lineHeight:1.5,maxHeight:250,marginTop:7},_e={fontSize:12,backgroundColor:"#18191c",borderRadius:4,padding:4,display:"inline",color:"white"},Ce=(P={},Object(u.a)(P,ne,{summary:Object(te.jsxs)("h4",{children:[ne," is a ",Object(te.jsx)("strong",{children:"greedy"})," pathfinding algorithm that is able find ",Object(te.jsx)("strong",{children:"optimal (shortest)"})," paths, even in ",Object(te.jsx)("strong",{children:"weighted"})," graphs"]}),description:null,pseudocode:Object(te.jsx)($.a,{language:"python",style:ee.a,showLineNumbers:!0,wrapLines:!0,customStyle:Ae,children:"min_pq = min_heap(start_node: 0)\ndist = { start_node: 0 }\nprev = {}\n\nfor node in nodes:\n    if node != start_node:\n        dist[node] = Infinity\n        min_pq[node] = Infinity\n            \nwhile min_pq.len:\n    curr_node = min_pq.delete_min()\n    \n    if curr_node == target_node:\n        return create_path(prev) # found path to target\n        \n    for neighbour in curr_node.neighbours:\n        new_cost = distance[curr_node] + \n                   edge(curr_node, neighbour).weight\n\n        if new_cost < dist[neighbour]:\n            # found better path, update the distance\n            dist[neighbour] = new_cost\n            min_pq[neighbour] = new_cost\n            prev[neighbour] = curr_node\n\n# no path found\nreturn"})}),Object(u.a)(P,re,{summary:Object(te.jsxs)("h4",{children:[re," is an ",Object(te.jsx)("strong",{children:"informed"})," pathfinding algorithm that combines ideas from ",ne," and ",ie," to guarantee ",Object(te.jsx)("strong",{children:"optimal (shortest)"})," paths, even in ",Object(te.jsx)("strong",{children:"weighted"})," graphs"]}),description:Object(te.jsxs)("p",{children:["The algorithm explores paths that minimize the function ",Object(te.jsx)($.a,{language:"text",style:ee.a,customStyle:_e,children:"f(node) = g(node) + h(node)"})," where ",Object(te.jsx)($.a,{language:"text",style:ee.a,customStyle:_e,children:"g(node)"})," is the cost of the path from ",Object(te.jsx)($.a,{language:"text",style:ee.a,customStyle:Object(l.a)(Object(l.a)({},_e),{},{color:me[xe.start]}),children:"start_node"})," to ",Object(te.jsx)($.a,{language:"text",style:ee.a,customStyle:_e,children:"node"})," and ",Object(te.jsx)($.a,{language:"text",style:ee.a,customStyle:_e,children:"h(node)"})," is the ",Object(te.jsx)("strong",{children:"heuristic function"})," which estimates the cost of the path from ",Object(te.jsx)($.a,{language:"text",style:ee.a,customStyle:_e,children:"node"})," to ",Object(te.jsx)($.a,{language:"text",style:ee.a,customStyle:Object(l.a)(Object(l.a)({},_e),{},{color:me[xe.target]}),children:"target_node"}),"."]}),pseudocode:Object(te.jsx)($.a,{language:"python",style:ee.a,showLineNumbers:!0,wrapLines:!0,customStyle:Ae,children:"min_pq = min_heap(start_node: 0)\ndist = { start_node: 0 }\nprev = {}\n\nfor node in nodes:\nif node != start_node:\n    dist[node] = Infinity\n    min_pq[node] = Infinity\n        \nwhile min_pq.len:\ncurr_node = min_pq.delete_min()\n\nif curr_node == target_node:\n    return create_path(prev) # found path to target\n    \nfor neighbour in curr_node.neighbours:\n    new_cost = distance[curr_node] + \n               edge(curr_node, neighbour).weight\n\n    if new_cost < dist[neighbour]:\n        # found better path, update the distance\n        dist[neighbour] = new_cost\n        min_pq[neighbour] = new_cost\n        prev[neighbour] = curr_node\n\n# no path found\nreturn"})}),Object(u.a)(P,ae,{summary:Object(te.jsxs)("h4",{children:[ae," is an ",Object(te.jsx)("strong",{children:"uninformed"})," search algorithm that is ",Object(te.jsx)("strong",{children:"optimal"})," in finding the shortest path only in ",Object(te.jsx)("strong",{children:"unweighted"})," graphs"]})}),Object(u.a)(P,ce,{summary:Object(te.jsxs)("h4",{children:[ce," is an ",Object(te.jsx)("strong",{children:"uninformed"})," search algorithm that is ",Object(te.jsx)("strong",{children:"unoptimal"})," in finding the shortest path, even in ",Object(te.jsx)("strong",{children:"unweighted"})," graphs"]})}),P);Object.freeze(Ce);var Ne=function(e){var t=e.nodeId,n=e.size,a=e.setGridState,c=e.draggingSelection,i=e.setDraggingSelection,d=e.setStartCord,b=e.setTargetCord,g=e.runningAlgo,f=e.selectedObstacle,h=e.startingState,j=Object(r.useState)(h),O=Object(o.a)(j,2),p=O[0],v=O[1];Object(r.useEffect)((function(){a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[h,v]))}))}),[]);var x=function(e){if((e[0]===xe.visited||e[0]===xe.visiting)&&e[1]>xe.wall){var t=me[e[0]],n=me[e[1]],r=.78;e[0]===xe.visiting&&(t=me[xe.visited]);var a=t.match(/\w\w/g).map((function(e){return parseInt(e,16)})),c=Object(o.a)(a,3),i=c[0],s=c[1],u=c[2],l=n.match(/\w\w/g).map((function(e){return parseInt(e,16)})),d=Object(o.a)(l,3),b=d[0],g=d[1],f=d[2];return"#"+Math.round(i+(b-i)*r).toString(16).padStart(2,"0")+Math.round(s+(g-s)*r).toString(16).padStart(2,"0")+Math.round(u+(f-u)*r).toString(16).padStart(2,"0")}return me[e[0]]}(p),w={width:n,height:n,backgroundColor:x,border:"1px solid ".concat(p[0]===xe.none?"#3C4046":x)};g||(c===xe.start||c===xe.target?w.cursor="grabbing":c!==xe.none||p[0]!==xe.start&&p[0]!==xe.target||(w.cursor="grab"));return Object(te.jsx)("div",{style:w,className:"node ".concat((p[0]>=xe.wall&&c===xe.none||c===xe.remObstacle)&&"erasing","\n        ").concat(c!==xe.remObstacle&&(p[0]<=xe.none||c>=xe.wall)&&!g&&"ready-to-draw"),onMouseDown:g?null:function(){return p[0]<=xe.none?(i(xe[f]),v((function(e){return[xe[f],xe.none]})),void a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[[xe[f],xe.none],v]))}))):p[0]>=xe.wall?(v((function(e){return e.slice(1)})),a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[p.slice(1),v]))})),void i(xe.remObstacle)):(p[0]!==xe.start&&p[0]!==xe.target||a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[p.slice(1),v]))})),void i(p[0]))},onMouseUp:g?null:function(){c===xe.start?(d(t),a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[p,v]))}))):c===xe.target&&(b(t),a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[p,v]))}))),c!==xe.none&&i(xe.none)},onMouseEnter:g?null:function(){c===xe.remObstacle&&p[0]>=xe.wall?(v((function(e){return e.slice(1)})),a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[p.slice(1),v]))}))):c===xe[f]&&p[0]<=xe.none?(v((function(e){return[xe[f],xe.none]})),a((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,[[xe[f],xe.none],v]))}))):(c===xe.start||c===xe.target)&&v((function(e){return[c].concat(Object(s.a)(e))}))},onMouseLeave:g?null:function(){c!==xe.start&&c!==xe.target||v((function(e){return e.slice(1)}))}})},Ie=a.a.memo((function(e){var t=e.rows,n=e.cols,a=e.padding,c=e.nodeSize,i=e.setGridState,s=e.selectedObstacle,u=e.setStartCord,l=e.setTargetCord,d=e.runningAlgo,b=Object(r.useState)(xe.none),g=Object(o.a)(b,2),f=g[0],h=g[1];console.log("RERENDERING GRID");for(var j=[],O=0;O<t;O++)for(var p=0;p<n;p++){var v="".concat(O,":").concat(p),x=[xe.none];1===O&&1===p?x.unshift(xe.start):O===t-2&&p===n-2&&x.unshift(xe.target),j.push(Object(te.jsx)(Ne,{nodeId:v,size:c,setGridState:i,draggingSelection:f,setDraggingSelection:h,setStartCord:u,setTargetCord:l,runningAlgo:d,selectedObstacle:s,startingState:x},v))}var w={width:n*c+n,height:t*c+t},m={paddingLeft:a,paddingRight:a};return Object(te.jsx)("div",{style:m,children:Object(te.jsx)("div",{className:"grid",style:w,children:j})})})),Me=function(e){var t=e.clearObstacles,n=e.runningAlgo;return Object(te.jsx)("div",{className:"button ".concat(n?"disabled":"red"),onClick:n?null:t,children:"Clear Obstacles"})},Re=function(e){var t=e.clearPath,n=e.runningAlgo;return Object(te.jsx)("div",{className:"button ".concat(n?"disabled":"orange"),onClick:n?null:t,children:"Clear Path"})},De=function(e){var t=e.rows,n=e.cols,r=e.selectedAlgo,a=e.gridState,c=(e.setGridState,e.startCord),i=e.targetCord,o=e.clearForReRun,u=e.runningAlgo,l=e.setRunningAlgo,d=function(){var e=Object(f.a)(b.a.mark((function e(){var u,d,g;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c!==i){e.next=2;break}return e.abrupt("return");case 2:return o(),l(!0),console.log("STARTING: ",r),u=[],e.next=8,oe[r](c,i,a,t,n,se[r]);case 8:u=e.sent,console.log("ENDED: ",r),d=b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(7);case 2:(0,a[u[t]][1])((function(e){return[xe.path].concat(Object(s.a)(a[u[t]][0]))}));case 4:case"end":return e.stop()}}),e)})),g=u.length-1;case 12:if(!(g>=0)){e.next=17;break}return e.delegateYield(d(g),"t0",14);case 14:g--,e.next=12;break;case 17:l(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(te.jsx)("div",{className:"button ".concat(u?"disabled":"green"),onClick:u?null:d,children:"Run"})},ze=n.p+"static/media/down_arrow.8fed4a28.svg",Ge=n.p+"static/media/weight.e51e9729.svg",Te=n.p+"static/media/weight_unfilled.cc3c5f2f.svg",We=n.p+"static/media/optimal.5649a19a.svg",Ee=n.p+"static/media/optimal_unfilled.e461ee2c.svg",Be=function(e){var t=e.setSelection,n=e.items,a=e.disabled,c=e.dropDownWidth,i=e.isAlgoSelector,s=e.isObstacleSelector,u=e.isTerrainSelector,l=Object(r.useState)(!1),d=Object(o.a)(l,2),b=d[0],g=d[1],f=Object(r.useState)(n[0]),h=Object(o.a)(f,2),j=h[0],O=h[1],x=Object(r.useState)(0),w=Object(o.a)(x,2),m=w[0],S=w[1];Object(r.useEffect)((function(){a&&s&&(O(n[0]),S(0),g(!1),t(n[0]))}),[a]),Object(r.useEffect)((function(){O(n[0]),S(0),g(!1),t(n[0])}),[n]);for(var k={width:c},y=[],A=function(e){var r;y.push(Object(te.jsxs)("div",{style:k,className:"dropdown-list-item ".concat(e===m&&"selected"," ").concat(e===n.length-1&&"last"),onClick:function(){var r;r=e,g((function(e){return!e})),O(n[r]),S(r),t(n[r])},children:[n[e],i&&(p(n[e])?Object(te.jsx)("img",{className:"algo-property-badge",src:Te,title:"".concat(n[e]," is not a weighted path-finding algorithm."),alt:"".concat(n[e]," is not a weighted path-finding algorithm.")}):Object(te.jsx)("img",{className:"algo-property-badge",src:Ge,title:"".concat(n[e]," is a weighted path-finding algorithm."),alt:"".concat(n[e]," is a weighted path-finding algorithm.")})),i&&(r=n[e],de.includes(r)?Object(te.jsx)("img",{className:"algo-property-badge",src:We,title:"".concat(n[e]," guarantees shortest path."),alt:"".concat(n[e]," guarantees shortest path.")}):Object(te.jsx)("img",{className:"algo-property-badge",src:Ee,title:"".concat(n[e]," does not guarantee shortest path."),alt:"".concat(n[e]," does not guarantee shortest path.")})),s&&Object(te.jsx)("div",{style:{backgroundColor:me[xe[ye[n[e]]]]},className:"obstacle-preview",children:" "}),u&&(v(n[e])?Object(te.jsx)("img",{className:"algo-property-badge",src:Te,title:"".concat(n[e]," does not use weighted obstacles."),alt:"".concat(n[e]," does not use weighted obstacles.")}):Object(te.jsx)("img",{className:"algo-property-badge",src:Ge,title:"".concat(n[e]," makes use of weighted obstacles."),alt:"".concat(n[e]," makes use of weighted obstacles.")}))]},e))},_=0;_<n.length;_++)A(_);return Object(te.jsxs)("div",{className:"dropdown",children:[Object(te.jsxs)("div",{style:k,className:"dropdown-header ".concat(b&&"open"," ").concat(a&&"disabled"),onClick:a?null:function(){g((function(e){return!e}))},children:[j,!a&&Object(te.jsx)("img",{className:"down-arrow",src:ze,alt:""})]}),Object(te.jsx)("div",{style:{display:b?"flex":"none"},className:"dropdown-list",children:y})]})},qe=function(e){var t=e.toggleInfoBox;return Object(te.jsx)("div",{className:"button blue",onClick:t,children:"Info"})},Pe=function(e){var t=e.rows,n=e.cols,r=e.gridState,a=e.setGridState,c=e.startCord,i=e.targetCord,o=e.clearForReRun,s=e.runningAlgo,u=e.setRunningAlgo,l=e.dropDownWidth,d=e.toggleInfoBox,b=e.selectedAlgo,g=e.setSelectedAlgo;return Object(te.jsxs)("div",{className:"choose-algo",children:[Object(te.jsx)(Be,{setSelection:g,items:ue,disabled:s,dropDownWidth:l,isAlgoSelector:!0,isObstacleSelector:!1}),Object(te.jsx)(qe,{toggleInfoBox:d}),Object(te.jsx)(De,{rows:t,cols:n,selectedAlgo:b,gridState:r,setGridState:a,startCord:c,targetCord:i,clearForReRun:o,runningAlgo:s,setRunningAlgo:u})]})},Le=function(e){var t=e.rows,n=e.cols,r=e.selectedTerrainAlgo,a=e.gridState,c=e.setGridState,i=e.startCord,o=e.targetCord,s=e.runningAlgo,u=e.setRunningAlgo,l=e.resetGrid,d=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return u(!0),console.log("STARTING: ",r),e.next=6,pe[r](i,o,a,c,t,n,ve[r]);case 6:console.log("ENDED: ",r),u(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(te.jsx)("div",{className:"button ".concat(s?"disabled":"green"),onClick:s?null:d,children:"Run"})},Fe=function(e){var t=e.rows,n=e.cols,a=e.gridState,c=e.setGridState,i=e.startCord,s=e.targetCord,u=e.runningAlgo,l=e.setRunningAlgo,d=e.dropDownWidth,b=e.resetGrid,g=e.selectedAlgo,f=Object(r.useState)(je[0]),h=Object(o.a)(f,2),j=h[0],O=h[1];return Object(te.jsxs)("div",{className:"choose-terrain",children:[Object(te.jsx)(Be,{setSelection:O,items:p(g)?Oe:je,disabled:!1,dropDownWidth:d,isAlgoSelector:!1,isObstacleSelector:!1,isTerrainSelector:!0}),Object(te.jsx)(Le,{rows:t,cols:n,selectedTerrainAlgo:j,gridState:a,setGridState:c,startCord:i,targetCord:s,runningAlgo:u,setRunningAlgo:l,resetGrid:b})]})},He=function(e){var t=e.setSelectedObstacle,n=e.weightedObsDisabled,r=e.dropDownWidth;return Object(te.jsx)("div",{className:"choose-obstacle",children:Object(te.jsx)(Be,{setSelection:function(e){console.log("selected obs: ",ye[e]),t(ye[e])},items:ke,disabled:n,dropDownWidth:r,isAlgoSelector:!1,isObstacleSelector:!0})})},Je=function(e){var t=e.rows,n=e.cols,r=e.runningAlgo,a=e.setRunningAlgo,c=e.padding,i=e.height,o=e.gridState,s=e.setGridState,u=e.startCord,l=e.targetCord,d=e.clearObstacles,b=e.clearPath,g=e.setSelectedObstacle,f=e.weightedObsDisabled,h=e.toggleInfoBox,j=e.selectedAlgo,O=e.setSelectedAlgo,p=e.resetGrid,v={padding:c,paddingBottom:c/2,height:i};return Object(te.jsxs)("div",{style:v,className:"header",children:[Object(te.jsx)(Me,{clearObstacles:d,runningAlgo:r}),Object(te.jsx)(Re,{clearPath:b,runningAlgo:r}),Object(te.jsx)(Pe,{rows:t,cols:n,gridState:o,setGridState:s,startCord:u,targetCord:l,clearForReRun:b,runningAlgo:r,setRunningAlgo:a,dropDownWidth:220,toggleInfoBox:h,selectedAlgo:j,setSelectedAlgo:O}),Object(te.jsx)(He,{setSelectedObstacle:g,weightedObsDisabled:f,dropDownWidth:190}),Object(te.jsx)(Fe,{rows:t,cols:n,gridState:o,setGridState:s,startCord:u,targetCord:l,runningAlgo:r,setRunningAlgo:a,resetGrid:p,selectedAlgo:j,dropDownWidth:200})]})},Ue=n.p+"static/media/close.494fd48f.svg",Ye=function(e){var t=e.infoBoxOpen,n=e.toggleInfoBox,a=e.selectedAlgo,c=e.startingPos,i=Object(r.useState)(!1),s=Object(o.a)(i,2),u=s[0],l=s[1],d=Object(r.useState)(c),b=Object(o.a)(d,2),g=b[0],f=b[1],h=function(e){l(!1)};return Object(te.jsxs)("div",{style:{left:"".concat(g[0],"px"),top:"".concat(g[1],"px")},className:"info-box ".concat(t?"visible":"hidden"),onMouseMove:function(e){u&&f((function(t){return[t[0]+e.movementX,t[1]+e.movementY]}))},onMouseUp:h,onMouseLeave:h,children:[Object(te.jsx)("img",{className:"close-info-icon",src:Ue,onClick:n,alt:"Close info box"}),Object(te.jsx)("h1",{onMouseDown:function(e){l(!0)},children:a}),Ce[a]&&Ce[a].summary||Object(te.jsx)("p",{children:"No information."}),Ce[a]&&Ce[a].description,Ce[a]&&Ce[a].pseudocode&&Object(te.jsx)("p",{className:"identifier",children:"Pseudocode:"}),Ce[a]&&Ce[a].pseudocode]})};var Xe=function(){var e=Object(r.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("wall"),i=Object(o.a)(c,2),s=i[0],u=i[1],l=Object(r.useState)(!1),d=Object(o.a)(l,2),b=d[0],g=d[1],f=Object(r.useState)(ue[0]),h=Object(o.a)(f,2),j=h[0],O=h[1],v=Object(r.useState)(0),x=Object(o.a)(v,2),w=x[0],m=x[1],S=Object(r.useState)(0),k=Object(o.a)(S,2),y=k[0],A=k[1],_=Object(r.useState)("0:0"),C=Object(o.a)(_,2),N=C[0],I=C[1],M=Object(r.useState)("0:0"),R=Object(o.a)(M,2),D=R[0],z=R[1],G=Object(r.useState)(!1),T=Object(o.a)(G,2),W=T[0],E=T[1],B=Object(r.useState)(!1),q=Object(o.a)(B,2),P=q[0],L=q[1];Object(r.useEffect)((function(){console.log("RESETTING BOARD"),F()}),[]);var F=function(){var e=window.innerHeight-180,t=window.innerWidth-60,n=parseInt(e/29),r=parseInt(t/29);E(!1),m(n),A(r),I("1:1"),z("".concat(n-2,":").concat(r-2))},H=function(){console.log("CLEARING PATH");for(var e=0;e<w;e++)for(var t=function(t){var r="".concat(e,":").concat(t),a=n[r][0],c=n[r][1],i=a[0];(i===xe.start||i===xe.target)&&a[1]<=xe.visiting?a.splice(1,1):i<=xe.visiting&&a.splice(0,1),c((function(e){return a}))},r=0;r<y;r++)t(r)},J=function(){g((function(e){return!e}))};return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Je,{rows:w,cols:y,runningAlgo:W,setRunningAlgo:E,padding:30,height:90,gridState:n,setGridState:a,startCord:N,targetCord:D,clearObstacles:function(){for(var e={},t=!1,r=0;r<w;r++)for(var c=function(a){var c="".concat(r,":").concat(a),i=n[c][0],o=n[c][1],s=i[0];if(e[c]=[i,o],(s===xe.start||s===xe.target)&&i[1]>=xe.wall)return t=!0,i.splice(1,1),o((function(e){return i})),e[c]=[i,o],"continue";s<=xe.visiting&&(s=i[1]),s>=xe.wall&&(t=!0,o((function(e){return[xe.none]})),e[c]=[[xe.none],o])},i=0;i<y;i++)c(i);t&&a((function(t){return e}))},clearPath:H,setSelectedObstacle:u,weightedObsDisabled:P,toggleInfoBox:J,selectedAlgo:j,setSelectedAlgo:function(e){var t=p(e);L(t),O(e),t&&(H(),function(){for(var e={},t=!1,r=0;r<w;r++)for(var c=function(a){var c="".concat(r,":").concat(a),i=n[c][0],o=n[c][1],s=i[0];if(e[c]=[i,o],(s===xe.start||s===xe.target)&&i[1]>xe.wall)return t=!0,i.splice(1,1),o((function(e){return i})),e[c]=[i,o],"continue";s<=xe.visiting&&(s=i[1]),s>xe.wall&&(t=!0,o((function(e){return[xe.none]})),e[c]=[[xe.none],o])},i=0;i<y;i++)c(i);t&&a((function(t){return e}))}())},resetGrid:function(){for(var e={},t=0;t<w;t++)for(var r=function(r){var a="".concat(t,":").concat(r),c=n[a][0],i=n[a][1],o=c[0],s=[xe.none];o!==xe.start&&o!==xe.target||s.unshift(o),i((function(e){return s})),e[a]=[s,i]},c=0;c<y;c++)r(c);a((function(t){return e}))}}),Object(te.jsx)(Ie,{rows:w,cols:y,padding:30,nodeSize:28,setGridState:a,selectedObstacle:s,setStartCord:I,setTargetCord:z,runningAlgo:W}),Object(te.jsx)(Ye,{infoBoxOpen:b,toggleInfoBox:J,selectedAlgo:j,startingPos:[window.innerWidth/2-285,150]})]})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(te.jsx)(a.a.StrictMode,{children:Object(te.jsx)(Xe,{})}),document.getElementById("root")),Ke()}},[[215,1,2]]]);
//# sourceMappingURL=main.fa854402.chunk.js.map