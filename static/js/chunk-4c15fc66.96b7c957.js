(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c15fc66"],{"25f0":function(t,e,r){"use strict";var o=r("6eeb"),n=r("825a"),i=r("d039"),a=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&o(RegExp.prototype,s,(function(){var t=n(this),e=String(t.source),r=t.flags,o=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r);return"/"+e+"/"+o}),{unsafe:!0})},"4df4":function(t,e,r){"use strict";var o=r("0366"),n=r("7b0b"),i=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,d,f,p,v=n(t),y="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,b=void 0!==g,m=u(v),A=0;if(b&&(g=o(g,h>2?arguments[2]:void 0,2)),void 0==m||y==Array&&a(m))for(e=s(v.length),r=new y(e);e>A;A++)p=b?g(v[A],A):v[A],c(r,A,p);else for(d=m.call(v),f=d.next,r=new y;!(l=f.call(d)).done;A++)p=b?i(d,g,[l.value,A],!0):l.value,c(r,A,p);return r.length=A,r}},"72a8":function(t,e,r){},"7d86":function(t,e,r){"use strict";r("72a8")},a630:function(t,e,r){var o=r("23e7"),n=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:a},{from:n})},ad6d:function(t,e,r){"use strict";var o=r("825a");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d28b:function(t,e,r){var o=r("746f");o("iterator")},d436:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("div",{staticStyle:{"margin-bottom":"10px"}},[r("el-input",{attrs:{placeholder:"Issuer's Address"},model:{value:t.issuerAddress,callback:function(e){t.issuerAddress=e},expression:"issuerAddress"}})],1),r("div",{staticStyle:{"margin-bottom":"10px"}},[r("el-input",{attrs:{type:"password",placeholder:"Your Address"},model:{value:t.yourAddress,callback:function(e){t.yourAddress=e},expression:"yourAddress"}})],1),r("div",[r("el-button",{staticStyle:{width:"100%","font-weight":"bold"},attrs:{type:"primary"},on:{click:function(e){return t.clickLookup()}}},[t._v(" "+t._s(t.buttonLoad?"LOOK IT UP":"LOADING..")+" ")])],1),r("div",{class:t.isLoaded?"div-show":"div-hide",attrs:{loading:"lazy"},on:{load:t.loadDivMethod}},t._l(t.trustlines,(function(e){return r("div",{key:e.currencyCode},[r("el-row",{staticStyle:{"margin-top":"30px"}},[r("el-col",{staticClass:"card-header",attrs:{span:24}},[t._v("TOKEN NAME")])],1),r("el-row",{staticStyle:{"margin-top":"10px"}},[r("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.currencyCode))])]),r("el-row",{staticStyle:{"margin-top":"30px"}},[r("el-col",{staticClass:"card-header",attrs:{span:12}},[t._v("NO OF TRUSTLINES")]),r("el-col",{staticClass:"card-header",staticStyle:{"text-align":"center"},attrs:{span:12}},[t._v("YOUR PLACE")])],1),r("el-row",{staticStyle:{"margin-top":"10px"}},[r("el-col",{staticClass:"card-body",attrs:{span:12}},[t._v(t._s(e.count))]),r("el-col",{staticClass:"card-body",attrs:{span:12}},[t._v(t._s(e.yourPlace))])],1),r("el-row",{staticStyle:{"margin-top":"10px"}},[r("el-button",{staticStyle:{width:"100%","font-weight":"bold"},attrs:{type:"danger"},on:{click:function(r){return t.copyTrustline(e)}}},[t._v("Click here to copy results!")])],1)],1)})),0)])},n=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||s(t)||c(t)||u()}var d=r("ade3");r("25f0"),r("d81d"),r("99af"),r("4de4");function f(t){return fetch("https://api.xrpscan.com/api/v1/account/"+t+"/trustlines")}function p(t){return fetch("https://api.xrpscan.com/api/v1/account/"+t+"/obligations")}var v={data:function(){var t;return t={trustlines:null,issuerAddress:"",yourAddress:"",issuerAddressResult:null,buttonLoad:!0,yourPlaceResult:null,isLoaded:!1},Object(d["a"])(t,"trustlines",[]),Object(d["a"])(t,"trust",{currencyCode:"",count:"",yourPlace:""}),t},created:function(){this.autoLoadFromParams(),this.eventPageView()},mounted:function(){},methods:{clickLookup:function(){this.eventClickedLookup(),this.lookUp()},autoLoadFromParams:function(){var t=this.$route.params;t&&t.issuer&&t.address&&(this.issuerAddress=t.issuer,this.yourAddress=t.address,this.eventLookupFromAccounts(),this.lookUp())},loadDivMethod:function(){this.isLoaded=!this.isLoaded},copyTrustline:function(t){var e=document.createElement("textarea"),r="------——————-—Trustline Lookup-----————————\n",o=r+"Token "+t.currencyCode+" has "+t.count+" trustlines";t&&""!=t&&(o+="\n",o+="My order is at "+t.yourPlace+"\n"),o+="--------------------------———————————————————\n",e.value=o,e.setAttribute("readonly",""),e.style={position:"absolute",left:"-9999px"},document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$message("Results copied to clipboard!")},convertHexToText:function(t){for(var e=t.toString(),r="",o=0;o<e.length;o+=2)r+=String.fromCharCode(parseInt(e.substr(o,2),16));return r.substring(0,r.indexOf("\0"))},lookUp:function(){var t=this;t.trustlines=[],t.isLoaded=!1,t.buttonLoad=!1,f(t.issuerAddress).then((function(t){return t.json()})).then((function(e){p(t.issuerAddress).then((function(t){return t.json()})).then((function(r){r.map((function(r,o){var n=r.currency.length>3?t.convertHexToText(r.currency):r.currency;t.calculate(e,r.currency,(function(e){var r={};r.currencyCode=n,r.count=e.total,r.yourPlace=e.yourPlace,t.trustlines=[].concat(l(t.trustlines),[r]),t.isLoaded=!0,t.buttonLoad=!0}))}))}))}))},calculate:function(t,e,r){var o=this,n={};this.getTrustlineCount(t,e,(function(e){n.total=e.length,o.getPosition(t,(function(t){n.yourPlace=t,r(n)}))}))},getTrustlineCount:function(t,e,r){var o=t.filter((function(t){var r=t.specification;return r.currency==e}));r(o)},getPosition:function(t,e){var r=this,o=0;t.filter((function(t,e){if(t.specification.counterparty==r.yourAddress)return o=e,t}));e(o)},eventPageView:function(){this.triggerEvent("lookup","page-view","Lookup Page View","")},eventClickedLookup:function(){this.triggerEvent("lookup","lookup-button-click","Clicked Lookup Button","")},eventLookupFromAccounts:function(){this.triggerEvent("lookup","lookup-from-accounts","Lookup from Accounts Page","")},triggerEvent:function(t,e,r,o){this.$gtag.event(e,{event_category:t,event_label:r,value:o})}}},y=v,h=(r("7d86"),r("2877")),g=Object(h["a"])(y,o,n,!1,null,"364dae94",null);e["default"]=g.exports},e01a:function(t,e,r){"use strict";var o=r("23e7"),n=r("83ab"),i=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),l=i.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var v=p.toString,y="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(a(d,t))return"";var r=y?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),o({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,r){"use strict";var o=r("23e7"),n=r("861d"),i=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),l=r("b622"),d=r("1dde"),f=r("ae40"),p=d("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),y=l("species"),h=[].slice,g=Math.max;o({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var r,o,l,d=c(this),f=s(d.length),p=a(t,f),v=a(void 0===e?f:e,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[y],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(d,p,v);for(o=new(void 0===r?Array:r)(g(v-p,0)),l=0;p<v;p++,l++)p in d&&u(o,l,d[p]);return o.length=l,o}})}}]);