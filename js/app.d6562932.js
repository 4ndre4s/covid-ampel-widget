(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({about:"about",config:"config"}[e]||e)+"."+{about:"87c0a724",config:"df9199c1"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",config:"config"}[e]||e)+"."+{about:"1a774888",config:"31d6cfe0"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],b.parentNode.removeChild(b),r(o)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}c[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/covid-ampel-widget/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"view"},c=Object(n["h"])("🚦"),o=Object(n["h"])(" | "),i=Object(n["h"])("Impressum"),s=Object(n["h"])(" | "),u=Object(n["h"])("Datenschutz"),l=Object(n["h"])(" | "),d=Object(n["h"])("Über"),b=Object(n["h"])(" | "),f=Object(n["h"])("Einstellungen");function p(e,t,r,p,O,j){var h=Object(n["y"])("router-view"),m=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("div",a,[Object(n["i"])(h),Object(n["i"])(n["b"],{name:"fade"},{default:Object(n["F"])((function(){return[Object(n["i"])("nav",null,[Object(n["i"])(m,{to:j.home},{default:Object(n["F"])((function(){return[c]})),_:1},8,["to"]),o,Object(n["i"])(m,{to:"/imprint"},{default:Object(n["F"])((function(){return[i]})),_:1}),s,Object(n["i"])(m,{to:"/privacy"},{default:Object(n["F"])((function(){return[u]})),_:1}),l,Object(n["i"])(m,{to:"/about"},{default:Object(n["F"])((function(){return[d]})),_:1}),b,Object(n["i"])(m,{to:"/config"},{default:Object(n["F"])((function(){return[f]})),_:1})])]})),_:1})])}var O={data:function(){return{showIntro:!1}},computed:{home:function(){var e="/",t=localStorage.getItem("landkreis");return e=null===t?"/config":"/lkr/"+t,e}}};r("64be");O.render=p;var j=O,h=(r("d3b7"),r("6c02"));function m(e,t,r,a,c,o){var i=Object(n["y"])("widget"),s=Object(n["y"])("config");return null!=c.selected?(Object(n["r"])(),Object(n["e"])(i,{key:0,objectId:c.selected},null,8,["objectId"])):(Object(n["r"])(),Object(n["e"])(s,{key:1}))}var g=r("6131"),v=r.n(g),y=Object(n["H"])("data-v-24007be2");Object(n["u"])("data-v-24007be2");var k={class:"widget"},w={key:0},_={key:1},I={class:"bez"},E={class:"ort"},C={class:"cases"},S=Object(n["i"])("img",{src:v.a,class:"ampel"},null,-1),x={class:"info"},A=Object(n["i"])("small",null,[Object(n["i"])("span",{class:"inzidenz-short"},"Inzidenz"),Object(n["i"])("span",{class:"inzidenz-detailled"}," Fälle der letzten 7 Tage pro 100.000 Einwohner ")],-1),B=Object(n["i"])("br",null,null,-1),D={class:"time"},F=Object(n["i"])("span",{class:"label"},"Stand: ",-1),T={class:"data"},R={class:"source"},L=Object(n["h"])(", "),P=Object(n["i"])("span",{class:"label"},"Datenquelle: ",-1),z={class:"data"};Object(n["s"])();var G=y((function(e,t,r,a,c,o){return Object(n["r"])(),Object(n["e"])("div",k,[c.loading?(Object(n["r"])(),Object(n["e"])("div",w,"Daten werden geladen ...")):Object(n["f"])("",!0),c.error?(Object(n["r"])(),Object(n["e"])("div",_,Object(n["A"])(this.error))):Object(n["f"])("",!0),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.data,(function(e,t){return Object(n["r"])(),Object(n["e"])("div",{class:o.color(e.attributes.cases7_per_100k),key:e.attributes.OBJECTID,name:t,"object-id":e.attributes.OBJECTID},[Object(n["i"])("h3",null,[Object(n["i"])("span",I,Object(n["A"])(e.attributes.BEZ)+" ",1),Object(n["i"])("span",E,Object(n["A"])(e.attributes.GEN),1)]),Object(n["i"])("p",C,[S,Object(n["h"])(" "+Object(n["A"])(o.rounded(e.attributes.cases7_per_100k)),1)]),Object(n["i"])("div",x,[A,B,Object(n["i"])("small",null,[Object(n["i"])("span",D,[F,Object(n["i"])("span",T,Object(n["A"])(e.attributes.last_update),1)]),Object(n["i"])("span",R,[L,P,Object(n["i"])("span",z,[Object(n["i"])("a",{class:o.color(e.attributes.cases7_per_100k),target:"_blank",href:"https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/"},"RKI",2)])])])])],10,["name","object-id"])})),128))])})),N=(r("a9e3"),r("b680"),r("96cf"),r("1da1")),q=r("bc3a"),Z=r.n(q),J={name:"Widget",props:{objectId:{type:String,required:!0}},data:function(){return{loading:!0,error:!1,data:null}},created:function(){var e=this;this.getData().then((function(t){e.data=t,e.loaded=!0}))},methods:{getData:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in ("+e.objectId+")&outFields=objectId,death_rate,cases,deaths,cases_per_100k,cases_per_population,last_update,cases7_per_100k,EWZ,BEZ,GEN&returnGeometry=false&f=json",n=Z.a.create({baseURL:r,timeout:1e4,headers:{"Content-Type":"application/json"}}),t.next=4,n.get();case 4:return a=t.sent,a.error?(console.error(a.error),e.error="Fehler beim Laden der Daten vom RKI-Server"):e.loading=!1,t.abrupt("return",a.data.features);case 7:case"end":return t.stop()}}),t)})))()},color:function(e){var t="";return e<35?t="widget-green":e>=35&&e<50?t="widget-yellow":e>=50&&e<100?t="widget-red":e>=100&&(t="widget-darkred"),t},rounded:function(e){return Number(e.toFixed(1))}}};r("6bef");J.render=G,J.__scopeId="data-v-24007be2";var K=J,M=r("57e3"),V={name:"Home",metaInfo:{title:"Covid-19 Ampel-Widget",meta:[{vmid:"description",name:"description",content:"Das Covid-19 Ampel-Widget für iOS und Android. Behalte den Inzidenzwert deines Landkreises im Blick."}]},props:["id"],components:{Widget:K,Config:M["a"]},data:function(){return{selected:null}},mounted:function(){this.id?(this.selected=this.id,localStorage.setItem("landkreis",this.selected)):this.selected=localStorage.getItem("landkreis"),this.selected&&this.$router.push("/lkr/"+this.selected)}};V.render=m;var U=V,W=[{path:"/",component:U},{path:"/lkr/:id",component:U,props:!0},{path:"/config",component:function(){return r.e("config").then(r.bind(null,"1071"))}},{path:"/about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/imprint",component:function(){return r.e("about").then(r.bind(null,"5a7f"))}},{path:"/privacy",component:function(){return r.e("about").then(r.bind(null,"6f9f"))}},{path:"/:pathMatch(.*)",component:U}],H="/covid-ampel-widget/",$=Object(h["a"])({history:Object(h["b"])(H),routes:W}),Q=$,X=Object(n["d"])(j);X.use(Q),X.mount("#app")},"57e3":function(e,t,r){"use strict";var n=r("7a23"),a={id:"config"},c=Object(n["i"])("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1),o=Object(n["i"])("p",null," Diese Einstellung wird nur lokal im Browser gespeichert. ",-1);function i(e,t,r,i,s,u){var l=Object(n["y"])("landkreise");return Object(n["r"])(),Object(n["e"])("div",a,[c,Object(n["i"])("p",null,[Object(n["i"])(l)]),o])}var s=Object(n["H"])("data-v-6d87fe67"),u=s((function(e,t,r,a,c,o){return Object(n["r"])(),Object(n["e"])("div",null,[Object(n["i"])("form",null,[Object(n["G"])(Object(n["i"])("select",{class:"select-lkr","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.selectedValue=e}),onChange:t[2]||(t[2]=function(e){return o.onChange(e)})},[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.data,(function(e){return Object(n["r"])(),Object(n["e"])("option",{key:e.attributes.OBJECTID,value:e.attributes.OBJECTID},Object(n["A"])(e.attributes.GEN)+" ("+Object(n["A"])(e.attributes.BEZ)+") ",9,["value"])})),128))],544),[[n["C"],c.selectedValue]])])])})),l=(r("96cf"),r("1da1")),d=r("bc3a"),b=r.n(d),f={name:"Landkreise",data:function(){return{selectedValue:null,data:[]}},created:function(){var e=this;this.getData().then((function(t){e.data=t,e.selectedValue=localStorage.getItem("landkreis")}))},methods:{getData:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson",r=b.a.create({baseURL:t,timeout:1e4,headers:{"Content-Type":"application/json"}}),e.next=4,r.get();case 4:return n=e.sent,n.error&&console.error(n.error),e.abrupt("return",n.data.features);case 7:case"end":return e.stop()}}),e)})))()},onChange:function(e){localStorage.setItem("landkreis",e.target.value),this.$router.go(0)}}};r("8536");f.render=u,f.__scopeId="data-v-6d87fe67";var p=f,O={name:"Config",components:{Landkreise:p}};O.render=i;t["a"]=O},6131:function(e,t,r){e.exports=r.p+"img/coronaampel.3fd2db0c.png"},"64be":function(e,t,r){"use strict";r("c894")},"6bef":function(e,t,r){"use strict";r("cd92")},8536:function(e,t,r){"use strict";r("f963")},c894:function(e,t,r){},cd92:function(e,t,r){},f963:function(e,t,r){}});
//# sourceMappingURL=app.d6562932.js.map