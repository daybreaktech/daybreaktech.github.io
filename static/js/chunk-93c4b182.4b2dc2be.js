(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93c4b182"],{"25f0":function(t,e,o){"use strict";var i=o("6eeb"),n=o("825a"),s=o("d039"),r=o("ad6d"),a="toString",l=RegExp.prototype,c=l[a],p=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=a;(p||d)&&i(RegExp.prototype,a,(function(){var t=n(this),e=String(t.source),o=t.flags,i=String(void 0===o&&t instanceof RegExp&&!("flags"in l)?r.call(t):o);return"/"+e+"/"+i}),{unsafe:!0})},2801:function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"b",(function(){return s})),o.d(e,"d",(function(){return r}));o("d3b7");function i(t){return fetch("https://api.xrpscan.com/api/v1/account/"+t)}function n(t){return"https://data.ripple.com/v2/accounts/"+t+"/balances"}function s(t){return"https://data.ripple.com/v2/exchange_rates/"+t}function r(){return fetch("https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd")}},9406:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"chart-container",style:t.showChart?"opacity: 0.9;":"opacity: 0;"},[o("apexchart",{ref:"chart",attrs:{type:"area",height:t.showDashboardMenu?"120":"250",options:t.composedOptions,series:t.series}})],1),o("div",[o("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.showDashboardMenu,expression:"!showDashboardMenu"}],staticClass:"scroll-container",attrs:{md:24,lg:24}},t._l(t.menuItems,(function(e){return o("div",{key:e.name,staticClass:"scroll-item",on:{click:function(o){return t.routeTo(e.route)}}},[o("div",{staticClass:"scroll-item-image",style:"background-image: url("+e.iconUrl+");"}),o("div",{staticClass:"scroll-item-text"},[t._v(t._s(e.name))])])})),0)],1),o("div",[o("el-col",{staticStyle:{"margin-top":"20px"}},[o("el-col",{attrs:{xs:24,sm:24,md:24,lg:6}},[o("div",{staticClass:"list-group"},[o("div",{staticClass:"list-group-item list-group-header"},[t._v(" Top Markets in XRPL ")]),t._l(t.topMarketTokens,(function(e,i){return o("div",{key:e.order,staticClass:"list-group-item"},[o("el-col",{staticClass:"token-item-order-div",attrs:{xs:2,sm:2,md:2,lg:2}},[o("div",{staticClass:"token-item-order"},[t._v(t._s(i+1))])]),o("el-col",{staticClass:"token-image",style:"background-image: url("+e.imageUrl+");",attrs:{xs:4,sm:4,md:4,lg:4}}),o("el-col",{staticClass:"token-info",attrs:{xs:13,sm:18,md:19,lg:14}},[o("el-row",[o("span",{staticClass:"token-name"},[t._v(" "+t._s(e.decodedCurrency)+" ")])]),o("el-row",{staticClass:"token-atv"},[o("label",[t._v("ATV:")]),t._v(" "+t._s(t.toCurrency(e.atv))+" "),o("el-tooltip",{attrs:{content:"Average Trading Volume"}},[o("a",{attrs:{href:"javascript:void(0);"}},[t._v("(?)")])])],1),o("el-row",{staticClass:"token-atc"},[o("label",[t._v("ATC:")]),t._v(" "+t._s(Math.ceil(e.atc))+" "),o("el-tooltip",{attrs:{content:"Average Trading Count"}},[o("a",{attrs:{href:"javascript:void(0);"}},[t._v("(?)")])])],1)],1),o("el-col",{staticStyle:{"margin-bottom":"5px"},attrs:{xs:4,sm:2,md:2,lg:4,sstyle:"float: right;"}},[o("el-row",{staticClass:"token-item-select token-item-select-dex"},[o("div",{on:{click:function(o){return t.openModal(e)}}},[t._v("MORE >>")])])],1)],1)}))],2)])],1),o("div",[o("v-modal",{attrs:{name:"token-more",width:t.modalSize.width,height:t.modalSize.height,adaptive:!0}},[o("el-row",[o("el-col",{attrs:{xs:24,sm:24,md:24,lg:24},nativeOn:{click:function(e){return t.closeModal()}}},[o("span",{staticClass:"modal-close-button",staticStyle:{float:"right","margin-right":"10px","margin-top":"10px"}},[t._v("close")])])],1),o("el-row",{staticClass:"token-modal-card-main-cont"},[o("el-col",{staticClass:"token-image token-image-modal",style:"background-image: url("+t.selectedCoin.imageUrl+");",attrs:{xs:4,sm:4,md:4,lg:4}}),o("el-col",{staticClass:"token-modal-card-cont",attrs:{xs:15,sm:15,md:15,lg:15}},[o("el-row",{staticClass:"token-modal-card-token-name"},[o("label",[t._v(t._s(t.selectedCoin.decodedCurrency))])]),o("el-row",{staticClass:"token-modal-card-token-website"},[o("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.goToLink(t.staticJsonProp[t.selectedCoin.name].website)}}},[t._v("Go to official website >>")])])],1)],1),o("el-row",{staticStyle:{"margin-top":"20px","font-family":"'Dongle'","font-size":"15px"}},[t._v(" Other sites for "+t._s(t.selectedCoin.decodedCurrency)+": ")]),o("el-row",[o("div",{staticStyle:{"margin-top":"10px"}},[o("el-col",{staticClass:"token-mini-banner",style:"background-image: url("+t.staticJsonSiteProps["solo"].iconUrl+")",attrs:{xs:11,sm:11,md:11,lg:11},nativeOn:{click:function(e){return t.goToSolo(t.selectedCoin.name,t.selectedCoin.currencyCode,t.selectedCoin.address)}}})],1),o("div",{staticStyle:{"margin-top":"10px"}},t._l(t.selectedLinks,(function(e){return o("el-col",{key:e.prop,staticClass:"token-mini-banner",style:"background-image: url("+t.staticJsonSiteProps[e.prop].iconUrl+")",attrs:{xs:11,sm:11,md:11,lg:11},nativeOn:{click:function(o){return t.goToLink(e.linkUrl)}}})})),1)]),o("el-row",{staticClass:"modal-contact-dev"},[t._v(" For issuer's information, please contact dev "),o("a",{staticStyle:{color:"blue"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.goToDev()}}},[t._v("here")])])],1)],1)],1)])},n=[];o("b0c0"),o("d81d"),o("4de4"),o("caad"),o("2532"),o("d3b7"),o("25f0");function s(){return fetch("https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=30&interval=daily")}function r(){return fetch("https://data.ripple.com/v2/network/top_markets?limit=15")}var a=o("2801"),l=o("c93d"),c=o("e016"),p={data:function(){return{selectedCoin:{},staticJsonProp:l,staticJsonSiteProps:c,selectedLinks:[],modalSize:{height:0,width:0},topMarketTokens:[],showDashboardMenu:!0,showChart:!1,chartData:[],series:[],composedOptions:{},chartOptions:{title:{text:"(XRP in last 30 days)",align:"left"},chart:{id:"area",type:"area",height:120,sparkline:{enabled:!0},toolbar:{show:!1}},subtitle:{text:"awww yess",align:"right",margin:10,offsetX:0,offsetY:0,floating:!0,style:{fontSize:"20px",fontWeight:"normal",fontFamily:"Dongle",color:"#9699a2"}},fill:{type:"solid",colors:["white"],opacity:.1},colors:["#1f2d3d"],annotations:{},dataLabels:{enabled:!1},markers:{},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:2,dashArray:0},yaxis:{labels:{show:!1}}},selection:"one_year",carouselItems:[{url:"https://hosting.photobucket.com/images/i/xrpltools/timeline_xrp_1.jpg"},{url:"https://hosting.photobucket.com/images/i/xrpltools/timeline_xrdoge_1.jpg"},{url:"https://hosting.photobucket.com/images/i/xrpltools/timeline_xrp_2.jpg"},{url:"https://hosting.photobucket.com/images/i/xrpltools/timeline_els.PNG"},{url:"https://hosting.photobucket.com/images/i/xrpltools/timeline_xrdoge_2.jpg"}],menuItems:[{name:"ACCOUNTS",iconUrl:"https://hosting.photobucket.com/images/i/xrpltools/dashboard_account.png",route:"accounts",disabled:!1},{name:"TRUSTLINE LOOK-UP",iconUrl:"https://hosting.photobucket.com/images/i/xrpltools/dashboard_trustline_lookup.png",route:"lookup",disabled:!1},{name:"(COMING SOON)",iconUrl:"https://hosting.photobucket.com/images/i/xrpltools/dashboard_aidrops.png",route:"home",disabled:!0},{name:"ABOUT DEVS",iconUrl:"https://hosting.photobucket.com/images/i/xrpltools/dashboard_about.png",route:"about",disabled:!1}]}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize(),this.eventPageView()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},mounted:function(){this.loadChartValues()},methods:{goToDev:function(){this.$router.push({name:"about"})},goToLink:function(t){this.eventGoToLink(t),window.open(t,"_blank")},goToSolo:function(t,e,o){this.eventSoloDexView(t),window.open("https://sologenic.org/trade?market="+e+"%2B"+o+"%2FXRP&network=mainnet","_blank")},closeModal:function(){this.$modal.hide("token-more")},openModal:function(t){this.eventMarketView(t.name),this.selectedCoin=t,void 0!==this.staticJsonProp[t.name]?this.selectedLinks=this.staticJsonProp[t.name].links:this.selectedLinks=[],this.$modal.show("token-more")},goToTwitter:function(){this.$message.error("Not available for at this moment")},loadChartValues:function(){var t=this;Object(a["d"])().then((function(t){return t.json()})).then((function(e){t.chartOptions.subtitle.text="1 XRP ~ "+e.ripple.usd+" USD",s().then((function(t){return t.json()})).then((function(e){t.series=[{data:t.chartData=e.prices}],t.composedOptions=t.chartOptions,t.showChart=!0}))})),r().then((function(t){return t.json()})).then((function(e){var o=e.markets.map((function(e,o){var i=t.decodeCurrency(e.base_currency),n="https://hosting.photobucket.com/images/i/xrpltools/token_"+i.toLowerCase()+".jpg",s={name:i.toLowerCase(),address:e.base_issuer,currencyCode:e.base_currency,decodedCurrency:i,imageUrl:n,atv:e.avg_volume,atc:e.avg_exchange_count};return s}));o.filter((function(e){return 0==t.findListDupicate(e.currencyCode)&&!t.getTokenException().includes(e.decodedCurrency)&&(t.topMarketTokens.push(e),!0)}))}))},findListDupicate:function(t){var e=this,o=e.topMarketTokens.filter((function(e){return t==e.currencyCode}));return o.length>0},handleResize:function(){this.showDashboardMenu=window.innerWidth>=1e3,this.handleModalSize(window.innerWidth,window.innerHeight)},handleModalSize:function(t,e){t>=1e3?(this.modalSize.height=450,this.modalSize.width=500):(this.modalSize.height=400,this.modalSize.width=400)},toCurrency:function(t){return(Math.round(100*t)/100).toLocaleString()},convertHexToText:function(t){for(var e=t.toString(),o="",i=0;i<e.length;i+=2)o+=String.fromCharCode(parseInt(e.substr(i,2),16));return o.substring(0,o.indexOf("\0"))},decodeCurrency:function(t){return t.length>10?this.convertHexToText(t):t},getTokenException:function(){return["USD"]},routeTo:function(t){this.eventDashboardNav(t),this.$router.push({name:t})},eventPageView:function(){this.$gtag.event("dashboard-page-view",{event_category:"dashboard",event_label:"Dashboard View"})},eventDashboardNav:function(t){this.$gtag.event("dashboard-click-navi",{event_category:"dashboard",event_label:"Dashboard Click Navigation",value:t})},eventMarketView:function(t){this.$gtag.event("dashboard-market-view",{event_category:"dashboard",event_label:"Dashboard Market View",value:t})},eventSoloDexView:function(t){this.$gtag.event("dashboard-market-solodex-view",{event_category:"dashboard",event_label:"Dashboard Token Solodex View",value:t})},eventGoToLink:function(t){this.$gtag.event("dashboard-market-links-view",{event_category:"dashboard",event_label:"Dashboard Token Link View",value:t})}}},d=p,u=(o("f8a7"),o("2877")),h=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=h.exports},ad6d:function(t,e,o){"use strict";var i=o("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c93d:function(t){t.exports=JSON.parse('{"solo":{"website":"https://sologenic.org/","links":[{"prop":"twit","linkUrl":"https://twitter.com/realSologenic"},{"prop":"lcw","linkUrl":"https://www.livecoinwatch.com/price/Sologenic-SOLO"},{"prop":"bitrue","linkUrl":"https://www.bitrue.com/trade/solo_usdt"}]},"els":{"website":"https://www.aesthetes.art/","links":[{"prop":"twit","linkUrl":"https://twitter.com/Elysianers"},{"prop":"lcw","linkUrl":"https://www.livecoinwatch.com/price/Elysian-ELS"},{"prop":"bitrue","linkUrl":"https://www.bitrue.com/trade/els_usdt"}]},"xrdoge":{"website":"https://xrdoge.com/","links":[{"prop":"twit","linkUrl":"https://mobile.twitter.com/xrdoge"},{"prop":"bitrue","linkUrl":"https://www.bitrue.com/trade/xrdoge_usdt"},{"prop":"cmc","linkUrl":"https://coinmarketcap.com/currencies/xrdoge/"},{"prop":"coingecko","linkUrl":"https://www.coingecko.com/en/coins/xrdoge/usd"},{"prop":"lcw","linkUrl":"https://www.livecoinwatch.com/price/XRDOGE-XRDOGE"}]},"equilibrium":{"website":"https://equilibrium-games.com","links":[{"prop":"twit","linkUrl":"https://twitter.com/Equilibrium_G"},{"prop":"bitrue","linkUrl":"https://www.bitrue.com/trade/eq_usdt"},{"prop":"lcw","linkUrl":"https://www.livecoinwatch.com/price/Equilibrium-EQ"}]},"csc":{"website":"https://casinocoin.im/","links":[{"prop":"twit","linkUrl":"https://twitter.com/CasinoCoin"},{"prop":"bitrue","linkUrl":"https://www.bitrue.com/trade/cscxrpl_usdt"},{"prop":"lcw","linkUrl":"https://www.livecoinwatch.com/price/CasinoCoin-CSC"}]},"xfloki":{"website":"https://www.xflokicoin.com/","links":[{"prop":"twit","linkUrl":"https://twitter.com/XFLOKICOIN"}]},"xwsb":{"website":"https://linktr.ee/xwallstreetbets","links":[{"prop":"twit","linkUrl":"https://twitter.com/xwallstreetbets"}]},"xpunk":{"website":"https://lnk.bio/xpunks.official","links":[{"prop":"twit","linkUrl":"https://twitter.com/XRPLPUNKS"},{"prop":"bitrue","linkUrl":"https://www.bitrue.com/trade/xpunk_usdt"}]},"xshibanu":{"website":"https://linktr.ee/XShibanu","links":[{"prop":"twit","linkUrl":"https://twitter.com/XShibanu"}]},"bay":{"website":"https://linktr.ee/BoredApesXRP","links":[{"prop":"twit","linkUrl":"https://twitter.com/BoredApesXRP"}]},"xrpitbull":{"website":"https://www.realxrpitbull.com/","links":[{"prop":"twit","linkUrl":"https://twitter.com/realXRPitbull"},{"prop":"lcw","linkUrl":"https://www.livecoinwatch.com/price/XRPitbull-XRPITBULL"}]},"cx1":{"website":"https://chorusx.com/","links":[{"prop":"twit","linkUrl":"https://twitter.com/ChorusXapp"},{"prop":"bitrue","linkUrl":"https://www.bitrue.com/trade/cx1_usdt"}]}}')},ca2b:function(t,e,o){},e016:function(t){t.exports=JSON.parse('{"twit":{"label":"Twitter","iconUrl":"https://hosting.photobucket.com/images/i/xrpltools/banner_twitter.png"},"bitrue":{"label":"Bitrue","iconUrl":"https://hosting.photobucket.com/images/i/xrpltools/banner_bitrue.png"},"cmc":{"label":"CoinMarketCap","iconUrl":"https://hosting.photobucket.com/images/i/xrpltools/banner_cmc.png"},"solo":{"label":"Sologenic","iconUrl":"https://hosting.photobucket.com/images/i/xrpltools/banner_solo.png"},"coingecko":{"label":"Coin Gecko","iconUrl":"https://hosting.photobucket.com/images/i/xrpltools/banner_coingecko.png"},"lcw":{"label":"LiveCoinWatch","iconUrl":"https://hosting.photobucket.com/images/i/xrpltools/banner_lcw.png"}}')},f8a7:function(t,e,o){"use strict";o("ca2b")}}]);