(this["webpackJsonpcamera-test"]=this["webpackJsonpcamera-test"]||[]).push([[0],{23:function(e,n,t){},27:function(e,n,t){e.exports=t.p+"static/media/loading.5780b10b.gif"},29:function(e,n,t){e.exports=t(57)},34:function(e,n,t){},40:function(e,n){},41:function(e,n){},42:function(e,n){},44:function(e,n){},45:function(e,n){},46:function(e,n){},47:function(e,n){},48:function(e,n){},49:function(e,n){},57:function(e,n,t){"use strict";t.r(n);var a,r=t(2),c=t.n(r),i=t(26),o=t.n(i),s=(t(34),t(8)),u=t(5),d=t.n(u),h=t(9),l=(t(23),t(7)),m=t(21),f=t.n(m),b=t(10),g=function(){var e=Object(h.a)(d.a.mark((function e(n){var t,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:if(t=n.getBoundingClientRect(),0!==(a={width:t.width,height:t.height}).height){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,l.b(n,new l.a({inputSize:320}));case 8:return r=e.sent,e.abrupt("return",l.f(r,a));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(d.a.mark((function e(n,t,r,c,i,o,s){var u,h,m,g,p,v,w,x,j,O,k;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&t&&r)){e.next=10;break}if(u=n.getBoundingClientRect(),h={width:u.width,height:u.height},l.d(t,h),t.getContext("2d").clearRect(0,0,t.width,t.height),0===h.width){e.next=10;break}return(m=l.f(r,h))[0]&&(f.a.read(i).then((function(e){e.crop(m[0].box.x,m[0].box.y,m[0].box.width,m[0].box.height),e.resize(48,48),e=e.bitmap.data,e=(e=(e=(e=(e=b.b(e,[48,48,4])).mean(2)).expandDims(2)).div(255)).reshape([1,48,48,1]);var n=s.predict(e);n=n.dataSync(),a=n})),void 0!==a&&(p=["gi\u1eadn d\u1eef","ch\xe1n gh\xe9t","s\u1ee3 h\xe3i","h\u1ea1nh ph\xfac","s\u1ea7u \u0111\u1eddi","ng\u1ea1c nhi\xean","b\xecnh th\u01b0\u1eddng","khinh th\u01b0\u1eddng"],v=a.reduce((function(e,n){return Math.max(e,n)})),w=a.indexOf(v),g=String(p[w])+" "+String(Math.round(100*v))+"%"),x=m[0].box,j={lineWidth:2,label:g},new l.c.DrawBox(x,j).draw(t)),m[1]&&(f.a.read(i).then((function(e){e.crop(m[0].box.x,m[0].box.y,m[0].box.width,m[0].box.height),e.resize(48,48),e=e.bitmap.data,e=(e=(e=(e=(e=b.b(e,[48,48,4])).mean(2)).expandDims(2)).div(255)).reshape([1,48,48,1]);var n=s.predict(e);n=n.dataSync(),a=n})),void 0!==a&&(p=["gi\u1eadn d\u1eef","ch\xe1n gh\xe9t","s\u1ee3 h\xe3i","h\u1ea1nh ph\xfac","s\u1ea7u \u0111\u1eddi","ng\u1ea1c nhi\xean","b\xecnh th\u01b0\u1eddng","khinh th\u01b0\u1eddng"],v=a.reduce((function(e,n){return Math.max(e,n)})),w=a.indexOf(v),g=String(p[w])+" "+String(Math.round(100*v))+"%"),O=m[0].box,k={lineWidth:2,label:g},new l.c.DrawBox(O,k).draw(t)),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(n,t,a,r,c,i,o){return e.apply(this,arguments)}}(),v=t(27),w=t.n(v),x=t(28),j=t.n(x);var O=function(e){var n=window.innerWidth/window.innerHeight;return c.a.createElement("div",{className:"camera__wrapper",style:{width:n>1?"80%":"33vh"}},c.a.createElement(j.a,{screenshotFormat:"image/jpeg",audio:!1,ref:e.camera,width:"100%",height:"auto",className:"camera"}),c.a.createElement("canvas",{className:"webcam-overlay",ref:e.cameraCanvas}))},k=(t(52),t(54),t(11)),E=t(4);t(55);!function(){var e="".concat("","/models");Promise.all([l.e.tinyFaceDetector.loadFromUri(e)]).then((function(){console.log("loaded")}))}(),k.b.add(E.m,E.b,E.j,E.a,E.f,E.d,E.e,E.h,E.i,E.k,E.g,E.c,E.l);var y=function(){Object(r.useEffect)((function(){o().then((function(){y(!1),n()}))}),[]);var e=function(e){e.current.getContext("2d").clearRect(0,0,e.width,e.height)},n=function(){if(null!==u){var n=setInterval(Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)}))),200);return function(){e(l),clearInterval(n)}}return e(l)},t=function(){var e=Object(h.a)(d.a.mark((function e(){var n,t,r,c,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===u.current){e.next=11;break}return e.next=3,g(u.current.video);case 3:return n=e.sent,t=u.current.getScreenshot(),e.next=7,p(u.current.video,l.current,n,"boxLandmarks",t,m,a);case 7:r=e.sent,c=["gi\u1eadn d\u1eef","ch\xe1n gh\xe9t","s\u1ee3 h\xe3i","h\u1ea1nh ph\xfac","s\u1ea7u \u0111\u1eddi","ng\u1ea1c nhi\xean","b\xecnh th\u01b0\u1eddng","khinh th\u01b0\u1eddng"],void 0!==r&&(i=r.reduce((function(e,n){return Math.max(e,n)})),o=r.indexOf(i),W(c[o])),x(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=null,i=window.innerWidth/window.innerHeight,o=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(window.innerWidth,"innnnnnnner"),!("indexedDB"in window)){e.next=18;break}return e.prev=2,e.next=5,b.a("indexeddb://web-model");case 5:a=e.sent,e.next=16;break;case 8:return e.prev=8,e.t0=e.catch(2),console.log(e.t0),e.next=13,b.a("./modelsjs2/model.json");case 13:a=e.sent,console.log("???"),a.save("indexeddb://web-model");case 16:e.next=22;break;case 18:return console.warn("IndexedDB not supported."),e.next=21,b.a("./modelsjs2/model.json");case 21:a=e.sent;case 22:D(!0),console.log("model loaded");case 24:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),u=Object(r.useRef)(),l=Object(r.useRef)(),m=Object(r.useRef)(),f=Object(r.useState)([]),v=Object(s.a)(f,2),x=(v[0],v[1]),j=Object(r.useState)(!0),k=Object(s.a)(j,2),E=k[0],y=k[1],S=Object(r.useState)(!1),B=Object(s.a)(S,2),D=(B[0],B[1]),N=Object(r.useState)(""),R=Object(s.a)(N,2),W=(R[0],R[1]),C=Object(r.useState)(""),M=Object(s.a)(C,2),z=(M[0],M[1],Object(r.useState)(null)),I=Object(s.a)(z,2),F=I[0],L=(I[1],Object(r.useState)(!0)),_=Object(s.a)(L,2),H=_[0],J=(_[1],Object(r.useState)(!1)),T=Object(s.a)(J,2);return T[0],T[1],c.a.createElement("div",null,E&&c.a.createElement("div",{style:{textAlign:"center",marginTop:"30vh"}},c.a.createElement("img",{src:w.a})),!E&&c.a.createElement("div",null,c.a.createElement("div",{className:"titleDiv"},c.a.createElement("div",{style:{marginLeft:"10px",marginTop:"1vh"}},c.a.createElement("h4",{style:{fontSize:"4vh"}},"Nh\u1eadn di\u1ec7n c\u1ea3m x\xfac con ng\u01b0\u1eddi"),c.a.createElement("br",null),c.a.createElement("div",{style:{marginLeft:i>1?"92vw":"80vw"}}))),c.a.createElement("div",{className:"camera",align:"center"},c.a.createElement("div",{id:"cam_input"},c.a.createElement("div",{style:{display:H?"block":"none"}},c.a.createElement(O,{camera:u,cameraCanvas:l})),!H&&c.a.createElement("img",{className:"camera",src:F}))),c.a.createElement("div",{className:"footer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.9bfb053c.chunk.js.map