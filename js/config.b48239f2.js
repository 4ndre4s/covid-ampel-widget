(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config"],{1071:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={id:"config-view"},u=Object(r["g"])("h3",null,"Einstellungen",-1);function c(e,t,n,c,i,o){var s=Object(r["w"])("config");return Object(r["p"])(),Object(r["d"])("div",a,[u,Object(r["g"])(s)])}var i={id:"config"},o=Object(r["g"])("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1),s=Object(r["g"])("button",null," OK ",-1);function l(e,t,n,a,u,c){var l=Object(r["w"])("landkreise"),d=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",i,[o,Object(r["g"])(l),Object(r["g"])("p",null,[Object(r["g"])(d,{to:"/"},{default:Object(r["D"])((function(){return[s]})),_:1})])])}function d(e,t,n,a,u,c){return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("form",null,[Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.selectedValue=e}),onChange:t[2]||(t[2]=function(e){return c.onChange(e)})},[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(u.data,(function(e){return Object(r["p"])(),Object(r["d"])("option",{key:e.attributes.OBJECTID,value:e.attributes.OBJECTID},Object(r["y"])(e.attributes.GEN)+" ("+Object(r["y"])(e.attributes.BEZ)+") ",9,["value"])})),128))],544),[[r["A"],u.selectedValue]])])])}n("96cf");var f=n("1da1"),b=n("bc3a"),O=n.n(b),p={name:"Landkreise",data:function(){return{selectedValue:null,data:[]}},created:function(){var e=this;this.getData().then((function(t){e.data=t,e.selectedValue=localStorage.getItem("landkreis")}))},methods:{getData:function(){return Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson",n=O.a.create({baseURL:t,timeout:1e4,headers:{"Content-Type":"application/json"}}),e.next=4,n.get();case 4:return r=e.sent,r.error&&console.error(r.error),e.abrupt("return",r.data.features);case 7:case"end":return e.stop()}}),e)})))()},onChange:function(e){localStorage.setItem("landkreis",e.target.value)}}};p.render=d;var g=p,j={name:"Config",components:{Landkreise:g}};j.render=l;var m=j,v={components:{Config:m}};v.render=c;t["default"]=v}}]);
//# sourceMappingURL=config.b48239f2.js.map