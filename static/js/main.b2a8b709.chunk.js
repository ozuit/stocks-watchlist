(this["webpackJsonpstock-watch"]=this["webpackJsonpstock-watch"]||[]).push([[0],{190:function(e,t,n){e.exports=n(333)},195:function(e,t,n){},196:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(32),c=n.n(r),i=(n(195),n(57)),l=n(182),u=n(52),s=n(338),m=n(37),d=n(341),b=n(340),g=n(342),h=n(345),f=(n(196),n(187)),y=n(339),v=n(343),p=n(344),w=n(337),E=n(178),O=n(180),k=n(152),S=n.n(k),j=n(153),I={delayTouchStart:500},C="DragableBodyRow",T=function(e){var t=e.index,n=e.moveRow,a=e.className,r=e.style,c=Object(f.a)(e,["index","moveRow","className","style"]),l=o.a.useRef(),s=Object(v.a)({accept:C,collect:function(e){var n=(e.getItem()||{}).index;return n===t?{}:{isOver:e.isOver(),dropClassName:n<t?" drop-over-downward":" drop-over-upward"}},drop:function(e){n(e.index,t)}}),m=Object(u.a)(s,2),d=m[0],b=d.isOver,g=d.dropClassName,h=m[1],y=Object(p.a)({item:{type:C,index:t},collect:function(e){return{isDragging:e.isDragging()}}});return h((0,Object(u.a)(y,2)[1])(l)),o.a.createElement("tr",Object.assign({ref:l,className:"".concat(a).concat(b?g:""),style:Object(i.a)({cursor:"move"},r)},c))},x=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),l=Object(u.a)(i,2),s=l[0],m=l[1],d={body:{row:T}},b=Object(a.useCallback)((function(e,t){var n=r[e],a=S()(r,{$splice:[[e,1],[t,0,n]]});c(a),localStorage.setItem("data",JSON.stringify(a))}),[r]);return Object(a.useEffect)((function(){c(e.dataSource),m(e.columns)}),[e.dataSource,e.columns]),o.a.createElement(w.a,{backend:j.isMobile?O.a:E.a,options:I},o.a.createElement(y.a,{scroll:{x:650},pagination:!1,columns:s,dataSource:r,components:d,onRow:function(e,t){return{index:t,moveRow:b}}}))},_=n(346),N=n(347),R=n(348),F=d.a.confirm;function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var o=e<0?"-":"",r=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),c=r.length>3?r.length%3:0;return o+(c?r.substr(0,c)+a:"")+r.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+a)+(t?n+Math.abs(e-r).toFixed(t).slice(2):"")}catch(i){console.log(i)}}function J(){fetch("/index.html",{cache:"no-cache"}).then((function(e){return e.text()})).then((function(e){var t=e.match(/main.(\w+).(\w+).js/gm);if(t){var n=t[0].split(".")[1],a=localStorage.getItem("hash_version");a?n!==a&&(localStorage.setItem("checking_version",!0),F({title:"C\xf3 phi\xean b\u1ea3n m\u1edbi c\u1eadp nh\u1eadt",content:"Nh\u1ea5n v\xe0o n\xfat OK \u0111\u1ec3 c\u1eadp nh\u1eadt, nh\u1ea5n cancel \u0111\u1ec3 b\u1ecf qua!",onOk:function(){localStorage.removeItem("checking_version"),localStorage.setItem("hash_version",n),window.location.reload()},onCancel:function(){localStorage.removeItem("checking_version")}})):localStorage.setItem("hash_version",n)}}))}var L=function(e,t){return[{title:"M\xe3",dataIndex:"code",key:"code",fixed:"left",width:80},{title:"Cut loss",dataIndex:"cut_loss",key:"cut_loss"},{title:"Kho\u1ea3ng mua",dataIndex:"range_buy",key:"range_buy",render:function(e,t){return o.a.createElement("span",null,t.buyFrom," - ",t.buyTo)}},{title:"S\u1ed1 l\u01b0\u1ee3ng mua",dataIndex:"buy_number",key:"buy_number"},{title:"Target",dataIndex:"target",key:"target"},{title:"L\u1ee3i nhu\u1eadn",dataIndex:"profit",key:"profit",render:function(e,t){return t.target&&t.buyTo?(100*(t.target-t.buyTo)/t.buyTo).toFixed(2)+"%":""}},{title:"Ti\u1ec1n l\u1eddi",dataIndex:"revenue",key:"revenue",render:function(e,t){return t.target&&t.buyTo&&t.buy_number&&W(t.buyTo*t.buy_number*(100*(t.target-t.buyTo)/t.buyTo)*10,0)}},{title:"H\xe0nh \u0111\u1ed9ng",dataIndex:"action",key:"action",fixed:"right",width:120,render:function(n,a){return o.a.createElement("div",null,o.a.createElement(N.a,{style:{paddingRight:10},onClick:function(){return e(a)}}),o.a.createElement(_.a,{placement:"topRight",title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 m\xe3 n\xe0y kh\xf4ng?",onConfirm:function(){return t(a)}},o.a.createElement(R.a,{style:{paddingLeft:10}})))}}]},M=s.a.Header,A=s.a.Content,U={labelCol:{span:6},wrapperCol:{span:18}},B=function(){var e,t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1],f=Object(a.useState)(!1),y=Object(u.a)(f,2),v=y[0],p=y[1],w=Object(a.useState)([]),E=Object(u.a)(w,2),O=E[0],k=E[1],S=Object(a.useState)({}),j=Object(u.a)(S,2),I=j[0],C=j[1],T=function(){c(!1)};return Object(a.useEffect)((function(){var e=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[];k(e),setTimeout((function(){J(),setInterval((function(){localStorage.getItem("checking_version")||J()}),6e4)}),5e3)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:"App"},o.a.createElement(M,null,o.a.createElement("div",null,o.a.createElement("p",{className:"title"},"Stocks Watchlist ","(v".concat("1.1",")")),o.a.createElement("p",{className:"sub-title"},"C\xf4ng c\u1ee5 qu\u1ea3n l\xfd danh m\u1ee5c \u0111\u1ea7u t\u01b0")),o.a.createElement("div",null,o.a.createElement(m.a,{type:"primary",onClick:function(){C({}),p(!1),c(!0)}},"Th\xeam"))),o.a.createElement(A,null,o.a.createElement(x,{dataSource:O,columns:L((function(e){C(e),p(!0),c(!0)}),(function(e){var t=O.filter((function(t){return t.code!==e.code}));k(t),localStorage.setItem("data",JSON.stringify(t))}))}))),o.a.createElement(d.a,{visible:r,title:v?"Ch\u1ec9nh s\u1eeda m\xe3":"Th\xeam m\xe3 m\u1edbi",onCancel:T,footer:[o.a.createElement(m.a,{key:"back",onClick:T},"H\u1ee7y b\u1ecf"),o.a.createElement(m.a,{key:"submit",type:"primary",onClick:function(){if(v){var e=O.map((function(e){return e.code===I.code.toUpperCase()&&(e.cut_loss=I.cut_loss,e.buyFrom=I.buyFrom,e.buyTo=I.buyTo,e.target=I.target,e.buy_number=I.buy_number),e}));localStorage.setItem("data",JSON.stringify(e)),k(e)}else{I.code=I.code.toUpperCase();var t=[].concat(Object(l.a)(O),[I]);localStorage.setItem("data",JSON.stringify(t)),k(t)}c(!1)}},"L\u01b0u")]},o.a.createElement(b.a,Object.assign({},U,{name:"basic",layout:"horizontal"}),o.a.createElement(b.a.Item,{label:"M\xe3 CK"},o.a.createElement(g.a,{disabled:v,value:I.code,onChange:function(e){return C(Object(i.a)({},I,{code:e.target.value}))}})),o.a.createElement(b.a.Item,{label:"Cut loss"},o.a.createElement(h.a,{min:0,step:.1,style:{width:"100%"},value:I.cut_loss,onChange:function(e){return C(Object(i.a)({},I,{cut_loss:e}))}})),o.a.createElement(b.a.Item,{label:"Kho\u1ea3ng mua"},o.a.createElement(h.a,{min:0,step:.1,value:I.buyFrom,onChange:function(e){return C(Object(i.a)({},I,{buyFrom:e}))}}),o.a.createElement("span",{style:{marginLeft:10,marginRight:10}},"-"),o.a.createElement(h.a,{min:0,step:.1,value:I.buyTo,onChange:function(e){return C(Object(i.a)({},I,{buyTo:e}))}})),o.a.createElement(b.a.Item,{label:"S\u1ed1 l\u01b0\u1ee3ng"},o.a.createElement(h.a,{min:0,style:{width:"100%"},value:I.buy_number&&(e=I.buy_number,e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),onChange:function(e){return C(Object(i.a)({},I,{buy_number:e}))}})),o.a.createElement(b.a.Item,{label:"Target"},o.a.createElement(h.a,{min:0,step:.1,style:{width:"100%"},value:I.target,onChange:function(e){return C(Object(i.a)({},I,{target:e}))}})),o.a.createElement(b.a.Item,{label:"L\u1ee3i nhu\u1eadn"},o.a.createElement(g.a.Group,null,o.a.createElement(g.a,{disabled:!0,placeholder:"%",style:{width:"25%"},value:I.target&&I.buyTo?(100*(I.target-I.buyTo)/I.buyTo).toFixed(2)+"%":""}),o.a.createElement(g.a,{placeholder:"\u01af\u1edbc t\xednh theo gi\xe1 mua l\u1edbn nh\u1ea5t",style:{width:"75%"},value:I.target&&I.buyTo&&I.buy_number&&W(I.buyTo*I.buy_number*(100*(I.target-I.buyTo)/I.buyTo)*10,0)}))))))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/stocks-watchlist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/stocks-watchlist","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()}},[[190,1,2]]]);
//# sourceMappingURL=main.b2a8b709.chunk.js.map