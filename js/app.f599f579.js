(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a=[];function o(e){return u.p+"js/"+({about:"about",config:"config"}[e]||e)+"."+{about:"29e01938",config:"df6bfc9b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}c[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3dfd":function(e,t,n){"use strict";var r=n("93e2"),c=n("42d8");n("9825");c["default"].render=r["a"],c["default"].__scopeId="data-v-9d4d438a",t["default"]=c["default"]},"42d8":function(e,t,n){"use strict";var r=n("527a"),c=n.n(r);n.d(t,"default",(function(){return c.a}))},"523f":function(e,t,n){},"527a":function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("3dfd"),a=(n("d3b7"),n("6c02"));function o(e,t,n,c,a,o){var u=Object(r["w"])("widget");return null!=a.selected?(Object(r["p"])(),Object(r["d"])(u,{key:0,objectId:a.selected},null,8,["objectId"])):Object(r["e"])("",!0)}var u=Object(r["F"])("data-v-3c0068db");Object(r["s"])("data-v-3c0068db");var i={class:"widget"},s={class:"cases"},d=Object(r["g"])("p",null,[Object(r["g"])("small",null,"Fälle der letzten 7 Tage pro 100.000 Einwohner")],-1);Object(r["q"])();var l=u((function(e,t,n,c,a,o){return Object(r["p"])(),Object(r["d"])("div",i,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.data,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{class:o.color(e.attributes.cases7_per_100k),key:e.attributes.OBJECTID,name:t,"object-id":e.attributes.OBJECTID},[Object(r["g"])("h3",null,Object(r["y"])(e.attributes.BEZ)+" "+Object(r["y"])(e.attributes.GEN),1),Object(r["g"])("p",s,Object(r["y"])(o.rounded(e.attributes.cases7_per_100k)),1),d,Object(r["g"])("p",null,[Object(r["g"])("small",null,"Aktualisiert: "+Object(r["y"])(e.attributes.last_update),1)])],10,["name","object-id"])})),128))])})),f=(n("a9e3"),n("b680"),n("96cf"),n("1da1")),b=n("bc3a"),p=n.n(b),j={name:"Widget",props:{objectId:{type:String,required:!0}},data:function(){return{data:null}},created:function(){var e=this;this.getData().then((function(t){e.data=t}))},methods:{getData:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in ("+e.objectId+")&outFields=objectId,death_rate,cases,deaths,cases_per_100k,cases_per_population,last_update,cases7_per_100k,EWZ,BEZ,GEN&returnGeometry=false&f=json",r=p.a.create({baseURL:n,timeout:1e4,headers:{"Content-Type":"application/json"}}),t.next=4,r.get();case 4:return c=t.sent,c.error&&console.error(c.error),t.abrupt("return",c.data.features);case 7:case"end":return t.stop()}}),t)})))()},color:function(e){var t="";return e<35?t="widget-green":e>=35&&e<50?t="widget-yellow":e>=50&&e<100?t="widget-red":e>=100&&(t="widget-darkred"),t},rounded:function(e){return Number(e.toFixed(1))}}};n("d01c");j.render=l,j.__scopeId="data-v-3c0068db";var O=j,v={name:"Home",components:{Widget:O},data:function(){return{selected:null}},created:function(){this.selected=localStorage.getItem("landkreis"),console.log(this.selected),null==this.selected&&this.$router.push("/config")}};v.render=o;var g=v,h=[{path:"/",name:"Home",component:g},{path:"/config",name:"Config",component:function(){return n.e("config").then(n.bind(null,"1071"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/imprint",name:"Imprint",component:function(){return n.e("about").then(n.bind(null,"5a7f"))}},{path:"/privacy",name:"Privacy",component:function(){return n.e("about").then(n.bind(null,"6f9f"))}}],m=Object(a["a"])({history:Object(a["b"])(),routes:h}),y=m,w=Object(r["c"])(c["default"]);w.use(y),w.mount("#app")},"93e2":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("7a23"),c=Object(r["F"])("data-v-9d4d438a");Object(r["s"])("data-v-9d4d438a");var a=Object(r["f"])("🚦"),o=Object(r["f"])(" | "),u=Object(r["f"])("Impressum"),i=Object(r["f"])(" | "),s=Object(r["f"])("Datenschutz"),d=Object(r["f"])(" | "),l=Object(r["f"])("Über"),f=Object(r["f"])(" | "),b=Object(r["f"])("⚙");Object(r["q"])();var p=c((function(e,t,n,p,j,O){var v=Object(r["w"])("router-view"),g=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])(v),Object(r["g"])("nav",null,[Object(r["g"])(g,{to:"/"},{default:c((function(){return[a]})),_:1}),o,Object(r["g"])(g,{to:"/imprint"},{default:c((function(){return[u]})),_:1}),i,Object(r["g"])(g,{to:"/privacy"},{default:c((function(){return[s]})),_:1}),d,Object(r["g"])(g,{to:"/about"},{default:c((function(){return[l]})),_:1}),f,Object(r["g"])(g,{to:"/config"},{default:c((function(){return[b]})),_:1})])])}))},9825:function(e,t,n){"use strict";n("fc26")},d01c:function(e,t,n){"use strict";n("523f")},fc26:function(e,t,n){}});
//# sourceMappingURL=app.f599f579.js.map