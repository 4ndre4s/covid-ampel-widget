(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config"],{1071:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={id:"config-view"},c={class:"container"};function i(e,t,n,i,o,u){var s=Object(r["C"])("van-nav-bar"),l=Object(r["C"])("van-sticky"),f=Object(r["C"])("config");return Object(r["u"])(),Object(r["d"])("div",a,[Object(r["h"])(l,null,{default:Object(r["J"])((function(){return[Object(r["h"])(s,{title:"Einstellungen","left-text":"Zurück","left-arrow":"",onClickLeft:u.onClickLeft},null,8,["onClickLeft"])]})),_:1}),Object(r["h"])("div",c,[Object(r["h"])(f)])])}var o={id:"config"},u=Object(r["h"])("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1),s=Object(r["h"])("p",null," Diese Einstellung wird nur lokal im Browser gespeichert. ",-1);function l(e,t,n,a,c,i){var l=Object(r["C"])("landkreise");return Object(r["u"])(),Object(r["d"])("div",o,[u,s,Object(r["h"])(l)])}var f=Object(r["g"])(" Lade Daten ... ");function d(e,t,n,a,c,i){var o=Object(r["C"])("van-loading"),u=Object(r["C"])("van-index-anchor"),s=Object(r["C"])("van-cell"),l=Object(r["C"])("van-index-bar");return Object(r["u"])(),Object(r["d"])("div",null,[c.isLoading?(Object(r["u"])(),Object(r["d"])(o,{key:0,size:"24px",color:"#1989fa",vertical:""},{default:Object(r["J"])((function(){return[f]})),_:1})):Object(r["e"])("",!0),Object(r["h"])(l,{class:"landkreise"},{default:Object(r["J"])((function(){return[(Object(r["u"])(!0),Object(r["d"])(r["a"],null,Object(r["A"])(c.data,(function(e){return Object(r["u"])(),Object(r["d"])("span",{key:e.OBJECTID},[e.index?(Object(r["u"])(),Object(r["d"])(u,{key:0,index:e.label},null,8,["index"])):(Object(r["u"])(),Object(r["d"])(s,{key:1,clickable:"","is-link":"",icon:"location-o",onClick:function(t){return i.onClick(e.OBJECTID)}},{default:Object(r["J"])((function(){return[Object(r["h"])("h4",null,Object(r["F"])(e.GEN),1),Object(r["h"])("p",null,Object(r["F"])(e.BEZ),1)]})),_:2},1032,["onClick"]))])})),128))]})),_:1})])}n("4160"),n("159b"),n("96cf");var b=n("1da1"),O=n("bc3a"),h=n.n(O),j={name:"Landkreise",data:function(){return{isLoading:!1,data:[]}},created:function(){var e=this;this.getData().then((function(t){e.data=[];var n=null;t.forEach((function(t){t.attributes.GEN.charAt(0)!==n&&(n=t.attributes.GEN.charAt(0),e.data.push({OBJECTID:n,index:!0,label:n})),e.data.push(t.attributes)})),e.selectedValue=localStorage.getItem("landkreis")}))},methods:{getData:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,n="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson",r=h.a.create({baseURL:n,timeout:1e4,headers:{"Content-Type":"application/json"}}),t.next=5,r.get();case 5:return a=t.sent,a.error&&console.error(a.error),e.isLoading=!1,t.abrupt("return",a.data.features);case 9:case"end":return t.stop()}}),t)})))()},onClick:function(e){localStorage.setItem("landkreis",e),this.$router.push("/lkr/".concat(e))}}};n("a6a6");j.render=d;var p=j,v={name:"Config",components:{Landkreise:p}};v.render=l;var g=v,k={name:"ConfigView",metaInfo:{title:"Einstellungen"},components:{Config:g},methods:{onClickLeft:function(){this.$router.push("/")}}};k.render=i;t["default"]=k},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),c=n("17c2"),i=n("9112");for(var o in a){var u=r[o],s=u&&u.prototype;if(s&&s.forEach!==c)try{i(s,"forEach",c)}catch(l){s.forEach=c}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),c=n("ae40"),i=a("forEach"),o=c("forEach");e.exports=i&&o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a6a6:function(e,t,n){"use strict";n("ae81")},ae81:function(e,t,n){}}]);
//# sourceMappingURL=config.c202c97d.js.map