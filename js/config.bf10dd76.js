(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config"],{"015d":function(t,e,n){},1071:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),c={id:"config-view"},a={class:"container"},r=Object(i["i"])("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1),o=Object(i["i"])("p",null," Diese Einstellung wird nur lokal im Browser gespeichert. ",-1);function l(t,e,n,l,u,s){var f=Object(i["D"])("doc-head"),d=Object(i["D"])("van-nav-bar"),b=Object(i["D"])("van-sticky"),O=Object(i["D"])("landkreise");return Object(i["v"])(),Object(i["e"])("div",c,[Object(i["i"])(f,{"meta-info":u.metaInfo},null,8,["meta-info"]),Object(i["i"])(b,null,{default:Object(i["L"])((function(){return[Object(i["i"])(d,{title:"Einstellungen","left-text":"Zurück","left-arrow":"",onClickLeft:s.onClickLeft},null,8,["onClickLeft"])]})),_:1}),Object(i["i"])("div",a,[r,o,Object(i["i"])(O)])])}var u=n("f01e"),s=Object(i["h"])(" Lade Daten ... ");function f(t,e,n,c,a,r){var o=Object(i["D"])("van-loading"),l=Object(i["D"])("van-index-anchor"),u=Object(i["D"])("van-cell"),f=Object(i["D"])("van-index-bar");return Object(i["v"])(),Object(i["e"])("div",null,[a.isLoading?(Object(i["v"])(),Object(i["e"])(o,{key:0,size:"24px",color:"#1989fa",vertical:""},{default:Object(i["L"])((function(){return[s]})),_:1})):Object(i["f"])("",!0),Object(i["i"])(f,{class:"landkreise"},{default:Object(i["L"])((function(){return[(Object(i["v"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(a.data,(function(t){return Object(i["v"])(),Object(i["e"])("span",{key:t.OBJECTID},[t.index?(Object(i["v"])(),Object(i["e"])(l,{key:0,index:t.label},null,8,["index"])):(Object(i["v"])(),Object(i["e"])(u,{key:1,clickable:"","is-link":"",icon:"location-o",onClick:function(e){return r.onClick(t.OBJECTID)}},{default:Object(i["L"])((function(){return[Object(i["i"])("h4",null,Object(i["G"])(t.GEN),1),Object(i["i"])("p",null,Object(i["G"])(t.BEZ),1)]})),_:2},1032,["onClick"]))])})),128))]})),_:1})])}n("4160"),n("d3b7"),n("159b");var d=n("7957"),b={name:"Landkreise",data:function(){return{isLoading:!1,data:[],selectedValue:null}},mounted:function(){var t=this;this.isLoading=!0,d["a"].getAreas().then((function(e){t.data=[];var n=null;e.forEach((function(e){e.attributes.GEN.charAt(0)!==n&&(n=e.attributes.GEN.charAt(0),t.data.push({OBJECTID:n,index:!0,label:n})),t.data.push(e.attributes)}))})).finally((function(){t.track(),t.isLoading=!1})),this.selectedValue=localStorage.getItem("landkreis")},methods:{onClick:function(t){localStorage.setItem("landkreis",t),this.trackSelection(t),this.$router.push("/lkr/".concat(t))},trackSelection:function(t){this.$gtag.event("api_request",{event_category:"lkr_select",event_label:"".concat(t)})},track:function(){this.$gtag.event("api_request",{event_category:"lkr_load",event_label:"lkr_load"})}}};n("f3cc");b.render=f;var O=b,v={name:"ConfigView",components:{DocHead:u["a"],Landkreise:O},data:function(){return{metaInfo:{title:"Einstellungen | Covid-19 Ampel-Widget"}}},methods:{onClickLeft:function(){this.$router.push("/")}}};v.render=l;e["default"]=v},"159b":function(t,e,n){var i=n("da84"),c=n("fdbc"),a=n("17c2"),r=n("9112");for(var o in c){var l=i[o],u=l&&l.prototype;if(u&&u.forEach!==a)try{r(u,"forEach",a)}catch(s){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,c=n("a640"),a=n("ae40"),r=c("forEach"),o=a("forEach");t.exports=r&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var i=n("23e7"),c=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=c},{forEach:c})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var i=n("83ab"),c=n("d039"),a=n("5135"),r=Object.defineProperty,o={},l=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var n=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,s=a(e,0)?e[0]:l,f=a(e,1)?e[1]:void 0;return o[t]=!!n&&!c((function(){if(u&&!i)return!0;var t={length:-1};u?r(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,s,f)}))}},f3cc:function(t,e,n){"use strict";n("015d")},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=config.bf10dd76.js.map