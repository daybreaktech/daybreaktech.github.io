(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e8dcd4e"],{2801:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return s}));n("d3b7");function c(t){return fetch("https://api.xrpscan.com/api/v1/account/"+t)}function o(t){return"https://data.ripple.com/v2/accounts/"+t+"/balances"}function a(t){return"https://data.ripple.com/v2/exchange_rates/"+t}function s(){return fetch("https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd")}},"7ca9":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMainCont,expression:"showMainCont"}],staticClass:"app-container"},[n("el-progress",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"account-progress",attrs:{"show-text":!1,color:"#1f2d3d",percentage:t.perc}}),n("el-row",{staticClass:"account-main-cont"},[n("el-col",{staticClass:"account-cont",attrs:{xs:24,sm:10,md:8,lg:8}},[n("el-col",{staticClass:"xrp-logo",attrs:{xs:12,sm:12,md:12,lg:12}}),n("el-col",{staticStyle:{"font-size":"35px","font-weight":"bolder"},attrs:{xs:12,sm:12,md:12,lg:12}},[t._v(" "+t._s(t.totalXrp)+" ")]),n("el-col",{staticStyle:{"font-size":"20px"},attrs:{xs:12,sm:12,md:12,lg:12}},[t._v(" = "+t._s(t.totalInUsd)+" ")])],1)],1),n("el-row",{staticClass:"account-main-cont",staticStyle:{"margin-top":"10px"}},[n("el-col",{attrs:{xs:12,sm:6,md:4,lg:4}},[n("el-button",{staticClass:"refresh-button",staticStyle:{width:"98%"},attrs:{type:"primary"},on:{click:function(e){return t.reloadBalance()}}},[t._v("RELOAD BALANCE")])],1),n("el-col",{attrs:{xs:12,sm:6,md:4,lg:4}})],1),n("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.addNewAccountLoading,expression:"addNewAccountLoading"}],staticClass:"account-cont account-main-cont"},[n("el-col",{staticClass:"el-comp",attrs:{xs:24,sm:8,md:6}},[n("el-input",{attrs:{placeholder:"Account Name"},model:{value:t.accountNameField,callback:function(e){t.accountNameField=e},expression:"accountNameField"}})],1),n("el-col",{staticClass:"el-comp",attrs:{xs:24,sm:8,md:6}},[n("el-input",{attrs:{placeholder:"Address"},model:{value:t.addressField,callback:function(e){t.addressField=e},expression:"addressField"}})],1),n("el-col",{staticClass:"el-comp",attrs:{xs:24,sm:4,md:2}},[n("el-button",{staticClass:"account-button",attrs:{type:"primary",xs:24,sm:12},on:{click:function(e){return t.addNewAccount()}}},[t._v("ADD")])],1)],1),n("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loadAccountsLoading,expression:"loadAccountsLoading"}],staticClass:"account-cont",staticStyle:{width:"100%",border:"0 !important"}},[n("el-collapse",{attrs:{accordion:""}},t._l(t.accountsList,(function(e){return n("el-collapse-item",{key:e.address,attrs:{title:e.accountName,name:e.accountName}},[n("el-row",{staticClass:"account-item"},[n("label",[t._v("ADDRESS:")]),t._v(" "+t._s(e.address)+" ")]),n("el-row",{staticClass:"account-item"},[n("label",[t._v("BALANCE:")]),t._v(" "+t._s(t.toCurrency(e.totalBalance))+" XRP ("+t._s(t.toCurrency(e.totalBalanceUsd))+" USD) ")]),n("el-row",{staticClass:"account-item"},[n("label",[t._v("TOKENS")])]),n("el-row",{staticClass:"account-item"},[n("div",{staticClass:"tag-cont"},t._l(e.balances,(function(c){return n("el-tag",{key:c.currency,staticClass:"trustline-items",attrs:{name:c.currency}},[n("el-popover",{key:c.currency,attrs:{placement:"top-start",trigger:"click",width:"200"}},[n("span",{attrs:{slot:"reference"},slot:"reference"},[n("span",{staticClass:"currency-label"},[t._v(t._s(t.decodeCurrency(c.currency)))]),t._v(" : "+t._s(t.toCurrency(c.value))+" "+t._s("XRP"===c.currency?"":"("+t.toCurrency(c.balanceInXrp)+" XRP)"))]),n("div",[n("el-button",{staticClass:"popover-lookup",attrs:{type:"primary"},on:{click:function(n){t.goToLookup(t.decodeCurrency(c.currency),e.address,c.counterparty)}}},[t._v("LOOK-UP")]),n("el-button",{staticClass:"popover-dex",attrs:{type:"primary"},on:{click:function(e){t.goToDex(t.decodeCurrency(c.currency),c.counterparty,c.currency)}}},[t._v("DEX")])],1)])],1)})),1)]),n("el-row",{staticStyle:{"martin-top":"10px"}},[n("el-col",{staticStyle:{float:"right"},attrs:{xs:24,sm:4,md:2,lg:2}},[n("el-button",{staticClass:"remove-account-button",staticStyle:{width:"100%"},attrs:{type:"danger"},on:{click:function(n){return t.removeAccount(e.address)}}},[t._v("REMOVE ACCOUNT")])],1)],1)],1)})),1)],1)],1)},o=[],a=(n("4de4"),n("d3b7"),n("25f0"),n("d81d"),n("c35a"),n("a9e3"),n("2801")),s=n("bc3a"),r=n.n(s),i=!1,l={data:function(){return{accountNameField:null,addressField:null,accountsList:[],tokens:[],tokenRates:[],soloTokenFetched:[],totalXrp:"Fetching...",totalInUsd:"Fetching...",perc:0,progressIncrement:0,showProgress:!1,addNewAccountLoading:!1,loadAccountsLoading:!1,showMainCont:!0,disableReloadButton:!1}},created:function(){this.eventViewPage(),this.axiosIntercept(),this.loadAccounts()},mounted:function(){},methods:{goToDex:function(t,e,n){this.eventClickDex(t),window.open("https://sologenic.org/trade?market="+n+"%2B"+e+"%2FXRP&network=mainnet","_blank")},goToLookup:function(t,e,n){this.eventClickLookup(t),this.$router.push({name:"lookup",params:{issuer:n,address:e}})},removeAccount:function(t){var e=this;this.$confirm("Do you really want to remove this account?").then((function(){e.excludeAccount(t)})).catch((function(){}))},excludeAccount:function(t){var e=JSON.parse(localStorage.getItem("accounts")),n=e.filter((function(e){if(e.address!==t)return!0}));localStorage.setItem("accounts",JSON.stringify(n)),this.$message.success("Account successfully removed"),this.eventRemoveAccount(),this.loadAccounts()},scrollToEl:function(){console.log("awww")},reloadUsdRate:function(){var t=this;Object(a["d"])().then((function(t){return t.json()})).then((function(e){t.totalInUsd=t.toCurrency(t.totalXrp*e.ripple.usd)+" USD"}))},initProgressParam:function(){var t=JSON.parse(localStorage.getItem("accounts"));t&&t.length>0&&(this.progressIncrement=100/t.length),this.perc=0,this.showProgress=!0},axiosIntercept:function(){var t=this;r.a.interceptors.response.use((function(t){return t}),(function(e){t.blockScreenfromError(e)})),r.a.interceptors.request.use((function(t){return t.url&&t.url.indexOf("balances")>0&&setTimeout((function(){}),1e3),t}),(function(t){console.log(t)}))},reloadBalance:function(){this.eventReloadClick(),this.loadAccounts()},toCurrency:function(t){return(Math.round(100*t)/100).toLocaleString()},convertHexToText:function(t){for(var e=t.toString(),n="",c=0;c<e.length;c+=2)n+=String.fromCharCode(parseInt(e.substr(c,2),16));return n.substring(0,n.indexOf("\0"))},decodeCurrency:function(t){return t.length>3?this.convertHexToText(t):t},validateNewAccountInput:function(t){var e=this;if(null==this.accountNameField||!this.ifStringNotWhitespace(this.accountNameField)||null==this.addressField||!this.ifStringNotWhitespace(this.addressField))return e.$message.error("INVALID INPUT"),t(!1),!1;e.addNewAccountLoading=!0,Object(a["a"])(this.addressField).then((function(t){return t.json()})).then((function(n){if(!n.account)return e.$message.error("ADDRESS NOT FOUND"),t(!1),!1;if(null!=localStorage.getItem("accounts")){var c=JSON.parse(localStorage.getItem("accounts")),o=c.filter((function(t){return t.address==e.addressField})),a=c.filter((function(t){return t.accountName.toLowerCase()==e.accountNameField.toLowerCase()}));o.length>0?(e.$message.error("ADDRESS EXISTS"),t(!1)):a.length>0?(e.$message.error("ACCOUNT NAME EXISTS"),t(!1)):t(!0)}else t(!0)}))},ifStringNotWhitespace:function(t){return/\S/.test(t)},blockScreenfromError:function(t){if(t.response&&t.response.data&&t.response.data.error){var e=t.response.data.error;e.indexOf("exceeded")>0&&0==i&&(i=!0,this.$alert("XRPL Error: exceeded request threshold! Please try again after a minute."),this.showMainCont=!1)}},addNewAccount:function(){var t=this,e={accountName:this.accountNameField,address:this.addressField};this.validateNewAccountInput((function(n){if(1==n){console.log("AWWW");var c=JSON.stringify(e);if(null==localStorage.getItem("accounts"))localStorage.setItem("accounts","["+c+"]"),console.log("Initiated accounts");else{var o=JSON.parse(localStorage.getItem("accounts"));o.push(e),localStorage.setItem("accounts",JSON.stringify(o))}t.$message.success("Account added!"),t.eventAddedNewAccount(),t.loadAccounts(),t.accountNameField=null,t.addressField=null,t.addNewAccountLoading=!1}else t.addNewAccountLoading=!1}))},addToTokens:function(t,e){this.tokens.push({currencyCode:t,issuerAddress:e})},loadAccounts:function(){this.totalXrp="Fetching...",this.totalInUsd="Fetching...";var t=this,e=JSON.parse(localStorage.getItem("accounts")),n=[],c=0,o=0;if(this.initProgressParam(),Object(a["d"])().then((function(t){return t.json()})).then((function(t){o=t.ripple.usd})),null!=e){this.loadAccountsLoading=!0,this.accountsList=e;var s=this.accountsList.map((function(t){return r.a.get(Object(a["c"])(t.address))}));r.a.all(s,{headers:{mehnigga:"true"}}).then(r.a.spread((function(){for(var e=arguments.length,c=new Array(e),o=0;o<e;o++)c[o]=arguments[o];var a=c.map((function(e,n){return{accountName:t.accountsList[n].accountName,address:t.accountsList[n].address,balances:e.data.balances}}));n=a}))).catch((function(e){console.log(e),t.blockScreenfromError(e)})).finally((function(){n.map((function(e){var n=0;return e.balances.map((function(e){var c=e.currency,o=e.counterparty;"XRP"===c?n=e.value:t.addToTokens(c,o)})),e.xrpBalance=n,e}));var e=t.tokens.map((function(t){return r.a.get(Object(a["b"])(t.currencyCode+"+"+t.issuerAddress+"/XRP"))}));r.a.all(e).then(r.a.spread((function(){for(var e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];a.map((function(e,n){t.tokens[n].rate=e.data.rate,t.tokenRates[t.tokens[n].currencyCode]=t.tokens[n]}));var r=n.map((function(e){var n=0;e.balances.map((function(e){var c=e.currency,o=Number.parseFloat(e.value);if("XRP"===c)n+=o;else{var a=Number.parseFloat(t.tokenRates[c].rate),s=e.value*a;e.balanceInXrp=s,n+=s}return e}));return e.totalBalance=n,e.totalBalanceUsd=n*o,t.perc=t.perc+t.progressIncrement,e}));r.map((function(t){c+=t.totalBalance}))}))).catch((function(e){console.log("DAMN ERROR"),t.blockScreenfromError(e)})).finally((function(){t.totalXrp=t.toCurrency(c)+" XRP",t.totalInUsd=t.toCurrency(c*o)+" USD",t.accountsList=n,t.showProgress=!1,t.loadAccountsLoading=!1}))}))}else localStorage.setItem("accounts",JSON.stringify([]))},eventViewPage:function(){this.triggerEvent("accounts","page-view","Page View","")},eventReloadClick:function(){this.triggerEvent("accounts","reload-click","Pressed Overall Currency Reload","")},eventClickLookup:function(t){this.triggerEvent("accounts","token-lookup-click","Pressed Lookup Key for Token",t)},eventClickDex:function(t){this.triggerEvent("accounts","token-dex-click","Pressed Dex Key for Token",t)},eventAddedNewAccount:function(){this.triggerEvent("accounts","added-new-account","Added New Account","")},eventRemoveAccount:function(){this.triggerEvent("accounts","added-remove-account","Removed Account","")},triggerEvent:function(t,e,n,c){this.$gtag.event(e,{event_category:t,event_label:n,value:c})}}},u=l,d=(n("d425"),n("2877")),p=Object(d["a"])(u,c,o,!1,null,null,null);e["default"]=p.exports},af2e:function(t,e,n){},d425:function(t,e,n){"use strict";n("af2e")}}]);