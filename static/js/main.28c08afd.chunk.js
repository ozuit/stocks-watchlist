(this["webpackJsonpstock-watch"]=this["webpackJsonpstock-watch"]||[]).push([[0],{190:function(e,t,a){e.exports=a(333)},195:function(e,t,a){},196:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),c=a.n(r),l=(a(195),a(57)),i=a(182),u=a(52),s=a(338),d=a(37),m=a(341),b=a(340),g=a(342),f=a(345),y=(a(196),a(187)),h=a(339),p=a(343),v=a(344),w=a(337),E=a(178),O=a(180),k=a(152),j=a.n(k),S=a(153),C={delayTouchStart:500},T="DragableBodyRow",x=function(e){var t=e.index,a=e.moveRow,n=e.className,r=e.style,c=Object(y.a)(e,["index","moveRow","className","style"]),i=o.a.useRef(),s=Object(p.a)({accept:T,collect:function(e){var a=(e.getItem()||{}).index;return a===t?{}:{isOver:e.isOver(),dropClassName:a<t?" drop-over-downward":" drop-over-upward"}},drop:function(e){a(e.index,t)}}),d=Object(u.a)(s,2),m=d[0],b=m.isOver,g=m.dropClassName,f=d[1],h=Object(v.a)({item:{type:T,index:t},collect:function(e){return{isDragging:e.isDragging()}}});return f((0,Object(u.a)(h,2)[1])(i)),o.a.createElement("tr",Object.assign({ref:i,className:"".concat(n).concat(b?g:""),style:Object(l.a)({cursor:"move"},r)},c))},I=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),s=i[0],d=i[1],m={body:{row:x}},b=Object(n.useCallback)((function(e,t){var a=r[e],n=j()(r,{$splice:[[e,1],[t,0,a]]});c(n),localStorage.setItem("data",JSON.stringify(n))}),[r]);return Object(n.useEffect)((function(){c(e.dataSource),d(e.columns)}),[e.dataSource,e.columns]),o.a.createElement(w.a,{backend:S.isMobile?O.a:E.a,options:C},o.a.createElement(h.a,{scroll:{x:650},pagination:!1,columns:s,dataSource:r,components:m,onRow:function(e,t){return{index:t,moveRow:b}}}))},_=a(346),N=a(347),R=a(348),F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var o=e<0?"-":"",r=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),c=r.length>3?r.length%3:0;return o+(c?r.substr(0,c)+n:"")+r.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?a+Math.abs(e-r).toFixed(t).slice(2):"")}catch(l){console.log(l)}},W=function(e,t){return[{title:"M\xe3",dataIndex:"code",key:"code",fixed:"left",width:80},{title:"Cut loss",dataIndex:"cut_loss",key:"cut_loss"},{title:"Kho\u1ea3ng mua",dataIndex:"range_buy",key:"range_buy",render:function(e,t){return o.a.createElement("span",null,t.buyFrom," - ",t.buyTo)}},{title:"S\u1ed1 l\u01b0\u1ee3ng mua",dataIndex:"buy_number",key:"buy_number"},{title:"Target",dataIndex:"target",key:"target"},{title:"L\u1ee3i nhu\u1eadn",dataIndex:"profit",key:"profit",render:function(e,t){return t.target&&t.buyTo?(100*(t.target-t.buyTo)/t.buyTo).toFixed(2)+"%":""}},{title:"Ti\u1ec1n l\u1eddi",dataIndex:"revenue",key:"revenue",render:function(e,t){return t.target&&t.buyTo&&t.buy_number&&F(t.buyTo*t.buy_number*(100*(t.target-t.buyTo)/t.buyTo)*10,0)}},{title:"H\xe0nh \u0111\u1ed9ng",dataIndex:"action",key:"action",fixed:"right",width:120,render:function(a,n){return o.a.createElement("div",null,o.a.createElement(N.a,{style:{paddingRight:10},onClick:function(){return e(n)}}),o.a.createElement(_.a,{placement:"topRight",title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 m\xe3 n\xe0y kh\xf4ng?",onConfirm:function(){return t(n)}},o.a.createElement(R.a,{style:{paddingLeft:10}})))}}]},J=s.a.Header,L=s.a.Content,M={labelCol:{span:6},wrapperCol:{span:18}},A=function(){var e,t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],y=Object(n.useState)(!1),h=Object(u.a)(y,2),p=h[0],v=h[1],w=Object(n.useState)([]),E=Object(u.a)(w,2),O=E[0],k=E[1],j=Object(n.useState)({}),S=Object(u.a)(j,2),C=S[0],T=S[1],x=function(){c(!1)};return Object(n.useEffect)((function(){var e=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[];k(e)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:"App"},o.a.createElement(J,null,o.a.createElement("div",null,o.a.createElement("p",{className:"title"},"Stocks Watchlist ","(v".concat("1.1",")")),o.a.createElement("p",{className:"sub-title"},"C\xf4ng c\u1ee5 qu\u1ea3n l\xfd danh m\u1ee5c \u0111\u1ea7u t\u01b0")),o.a.createElement("div",null,o.a.createElement(d.a,{type:"primary",onClick:function(){T({}),v(!1),c(!0)}},"Th\xeam"))),o.a.createElement(L,null,o.a.createElement(I,{dataSource:O,columns:W((function(e){T(e),v(!0),c(!0)}),(function(e){var t=O.filter((function(t){return t.code!==e.code}));k(t),localStorage.setItem("data",JSON.stringify(t))}))}))),o.a.createElement(m.a,{visible:r,title:p?"Ch\u1ec9nh s\u1eeda m\xe3":"Th\xeam m\xe3 m\u1edbi",onCancel:x,footer:[o.a.createElement(d.a,{key:"back",onClick:x},"H\u1ee7y b\u1ecf"),o.a.createElement(d.a,{key:"submit",type:"primary",onClick:function(){if(p){var e=O.map((function(e){return e.code===C.code.toUpperCase()&&(e.cut_loss=C.cut_loss,e.buyFrom=C.buyFrom,e.buyTo=C.buyTo,e.target=C.target,e.buy_number=C.buy_number),e}));localStorage.setItem("data",JSON.stringify(e)),k(e)}else{C.code=C.code.toUpperCase();var t=[].concat(Object(i.a)(O),[C]);localStorage.setItem("data",JSON.stringify(t)),k(t)}c(!1)}},"L\u01b0u")]},o.a.createElement(b.a,Object.assign({},M,{name:"basic",layout:"horizontal"}),o.a.createElement(b.a.Item,{label:"M\xe3 CK"},o.a.createElement(g.a,{disabled:p,value:C.code,onChange:function(e){return T(Object(l.a)({},C,{code:e.target.value}))}})),o.a.createElement(b.a.Item,{label:"Cut loss"},o.a.createElement(f.a,{min:0,step:.1,style:{width:"100%"},value:C.cut_loss,onChange:function(e){return T(Object(l.a)({},C,{cut_loss:e}))}})),o.a.createElement(b.a.Item,{label:"Kho\u1ea3ng mua"},o.a.createElement(f.a,{min:0,step:.1,value:C.buyFrom,onChange:function(e){return T(Object(l.a)({},C,{buyFrom:e}))}}),o.a.createElement("span",{style:{marginLeft:10,marginRight:10}},"-"),o.a.createElement(f.a,{min:0,step:.1,value:C.buyTo,onChange:function(e){return T(Object(l.a)({},C,{buyTo:e}))}})),o.a.createElement(b.a.Item,{label:"S\u1ed1 l\u01b0\u1ee3ng"},o.a.createElement(f.a,{min:0,style:{width:"100%"},value:C.buy_number&&(e=C.buy_number,e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),onChange:function(e){return T(Object(l.a)({},C,{buy_number:e}))}})),o.a.createElement(b.a.Item,{label:"Target"},o.a.createElement(f.a,{min:0,step:.1,style:{width:"100%"},value:C.target,onChange:function(e){return T(Object(l.a)({},C,{target:e}))}})),o.a.createElement(b.a.Item,{label:"L\u1ee3i nhu\u1eadn"},o.a.createElement(g.a.Group,null,o.a.createElement(g.a,{disabled:!0,placeholder:"%",style:{width:"25%"},value:C.target&&C.buyTo?(100*(C.target-C.buyTo)/C.buyTo).toFixed(2)+"%":""}),o.a.createElement(g.a,{placeholder:"\u01af\u1edbc t\xednh theo gi\xe1 mua l\u1edbn nh\u1ea5t",style:{width:"75%"},value:C.target&&C.buyTo&&C.buy_number&&F(C.buyTo*C.buy_number*(100*(C.target-C.buyTo)/C.buyTo)*10,0)}))))))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/stocks-watchlist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/stocks-watchlist","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[190,1,2]]]);
//# sourceMappingURL=main.28c08afd.chunk.js.map