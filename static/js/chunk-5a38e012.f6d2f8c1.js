(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a38e012"],{"0303":function(t,e,o){},1299:function(t,e,o){},2188:function(t,e,o){},"26c5":function(t,e,o){},"2f12":function(t,e,o){"use strict";o("5117")},"4c60":function(t,e,o){"use strict";o("fe61")},"4c9b":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"layout-container"},[n("el-col",{staticClass:"schedule-cont",attrs:{xs:24,sm:24,md:14,lg:14}},[n("div",{staticClass:"schedule-back",on:{click:function(e){return t.goBack()}}},[n("ReturnLogo",{attrs:{size:25}})],1),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("el-row",{staticClass:"schedule-card"},[n("el-row",{staticClass:"schedule-card-trustline-cont"},[n("el-row",{staticClass:"schedule-card-image-cont",style:"background-image: url("+t.airdropInfo.imageUrl+"),url("+o("bd21")+")"}),n("el-row",{staticClass:"schedule-card-token"},[n("span",{staticClass:"schedule-card-token-name"},[t._v(" "+t._s(t.airdropInfo.tokenName?t.airdropInfo.tokenName:"[No-Token]")+" ")]),t.airdropInfo.tokenName?t._e():n("span",[n("el-tooltip",{attrs:{content:"Issuer's token/trustline to be announced"}},[n("span",{staticClass:"schedule-card-token-tooltip"},[t._v("(?)")])])],1)]),t.airdropInfo.twitterUrl&&null!=t.airdropInfo.twitterUrl&&""!=t.airdropInfo.twitterUrl?n("el-row",{staticClass:"schedule-card-twitter-handle"},[n("span",{on:{click:function(e){return t.goToLink(t.airdropInfo.twitterUrl)}}},[t._v(t._s(t.getTwitterHandle(t.airdropInfo.twitterUrl)))])]):t._e()],1),n("el-row",{staticClass:"schedule-card-airdrop-title"},[n("span",{staticClass:"schedule-card-airdrop-title-text"},[t._v(t._s(t.airdropInfo.shortDesc))])]),n("el-row",{staticClass:"schedule-card-airdrop-dates"},[n("el-row",[n("el-col",{attrs:{xs:12,sm:12,md:12,lg:12}},[n("span",{staticClass:"schedule-card-airdrop-label"},[t._v("Snapshot Date/Time")])]),n("el-col",{attrs:{xs:12,sm:12,md:12,lg:12}},[n("span",{staticClass:"schedule-card-airdrop-label"},[t._v("Airdrop Date/Time")])])],1),n("el-row",[n("el-col",{attrs:{xs:12,sm:12,md:12,lg:12}},[n("span",{staticClass:"schedule-card-airdrop-val"},[t._v(" "+t._s(t.airdropInfo.snapshotDate?t.moment(String(t.airdropInfo.snapshotDate)).format("MMM DD[,] YYYY ha [CST]"):"N/A")+" ")])]),n("el-col",{attrs:{xs:12,sm:12,md:12,lg:12}},[n("span",{staticClass:"schedule-card-airdrop-val"},[t._v(" "+t._s(t.airdropInfo.airdropDate?t.moment(String(t.airdropInfo.airdropDate)).format("MMM DD[,] YYYY ha [CST]"):"N/A")+" ")])])],1)],1)],1),n("el-row",{staticClass:"schedule-details",staticStyle:{"margin-top":"15px"}},[n("el-row",{staticClass:"schedule-details-header"},[t._v(" Airdrop Details ")]),n("el-row",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"schedule-details-body"},[t._v(" "+t._s(t.airdropInfo.longDesc.trim())+" ")]),t.airdropInfo.refsUrl?n("el-row",{staticClass:"schedule-reference",staticStyle:{"margin-top":"5px"}},[n("span",{staticClass:"schedule-details-ref"},[t._v("⁍ Source Reference "),n("a",{attrs:{href:t.airdropInfo.refsUrl,target:"_blank"}},[t._v("here")])])]):t._e()],1),n("el-row",{staticClass:"schedule-buttons",staticStyle:{"margin-top":"5px"}},[n("el-col",{attrs:{xs:8,sm:8,md:8,lg:8}},[n("SoloIcon",{attrs:{"airdrop-info":t.airdropInfo}})],1),n("el-col",{attrs:{xs:8,sm:8,md:8,lg:8}},[n("XummIcon",{attrs:{"airdrop-info":t.airdropInfo}})],1),n("el-col",{attrs:{xs:8,sm:8,md:8,lg:8}},[n("ShareIcon")],1)],1)],1)])],1)])},r=[],s=o("c1df"),a=o.n(s),i=o("e1fd"),c=o("be6e"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{width:t.size,height:1.633*t.size,viewBox:"0 0 19 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[o("g",{attrs:{id:"Icons",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[o("g",{attrs:{id:"Rounded",transform:"translate(-884.000000, -2464.000000)"}},[o("g",{attrs:{id:"Hardware",transform:"translate(100.000000, 2404.000000)"}},[o("g",{attrs:{id:"-Round-/-Hardware-/-keyboard_return",transform:"translate(782.000000, 54.000000)"}},[o("g",[o("rect",{attrs:{id:"Rectangle-Copy-110",x:"0",y:"0",width:"24",height:"24"}}),o("path",{attrs:{d:"M19,8 L19,11 L5.83,11 L8.71,8.12 C9.1,7.73 9.1,7.1 8.71,6.71 C8.32,6.32 7.69,6.32 7.3,6.71 L2.71,11.3 C2.32,11.69 2.32,12.32 2.71,12.71 L7.3,17.3 C7.69,17.69 8.32,17.69 8.71,17.3 C9.1,16.91 9.1,16.28 8.71,15.89 L5.83,13 L20,13 C20.55,13 21,12.55 21,12 L21,8 C21,7.45 20.55,7 20,7 C19.45,7 19,7.45 19,8 Z",id:"🔹-Icon-Color",fill:"#1D1D1D"}})])])])])])])},u=[],d={props:["size"],components:{},data:function(){return{moment:a.a}},created:function(){},mounted:function(){},methods:{}},f=d,p=(o("ecf0"),o("2877")),m=Object(p["a"])(f,l,u,!1,null,null,null),h=m.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"xumm-icon-cont"},[o("div",{staticClass:"xumm-icon-logo",on:{click:function(e){return t.goToTrustline()}}},[o("el-tooltip",{attrs:{content:t.airdropInfo.tokenName?"Set your trustline":"This airdrop does not have assigned token yet"}},[o("XummLogo",{attrs:{size:50,color:t.airdropInfo.tokenName?"#343434":"#acabab"}})],1)],1)])},C=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{width:t.size,height:.45*t.size,viewBox:"0 0 152 67",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M47.2432 34.5858L60.6829 47.976C63.5888 50.8454 65.0416 53.3162 65.0416 55.3885C65.0416 57.3811 63.5888 59.8121 60.6829 62.6814C57.7769 65.471 55.3151 66.8658 53.2971 66.8658C51.2791 66.8658 48.8172 65.4312 45.9113 62.5619L32.5927 49.2912L19.153 62.5619C16.2472 65.4312 13.7853 66.8658 11.7673 66.8658C9.83004 66.8658 7.36811 65.471 4.38151 62.6814C1.47564 59.8121 0.0227051 57.3811 0.0227051 55.3885C0.0227051 53.3162 1.47564 50.8454 4.38151 47.976L17.8212 34.5858L4.38151 21.1957C1.47564 18.3263 0.0227051 15.8953 0.0227051 13.9028C0.0227051 11.8305 1.47564 9.35961 4.38151 6.49029C7.36811 3.62095 9.83004 2.18628 11.7673 2.18628C13.7853 2.18628 16.2472 3.62095 19.153 6.49029L32.5927 19.8805L45.9113 6.49029C48.8172 3.62095 51.2791 2.18628 53.2971 2.18628C55.3151 2.18628 57.7769 3.62095 60.6829 6.49029C63.5888 9.35961 65.0416 11.8305 65.0416 13.9028C65.0416 15.8953 63.5888 18.3263 60.6829 21.1957L47.2432 34.5858Z",fill:t.color}}),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M147.228 3.10671C151.963 7.35476 152.315 14.589 148.012 19.2647L108.784 61.8994C106.621 64.251 103.564 65.6079 100.347 65.6453C97.129 65.6827 94.0408 64.397 91.8218 62.0963L70.7591 40.2589C66.3469 35.6843 66.5257 28.444 71.1586 24.0872C75.7913 19.7303 83.124 19.9069 87.5363 24.4815L100.01 37.4145L130.865 3.88111C135.166 -0.794649 142.493 -1.14136 147.228 3.10671Z",fill:t.color}})])},v=[],k={props:["size","color"],components:{},data:function(){return{moment:a.a}},created:function(){},mounted:function(){},methods:{}},b=k,I=(o("2f12"),Object(p["a"])(b,w,v,!1,null,null,null)),x=I.exports,_={props:["airdropInfo"],components:{XummLogo:x},data:function(){return{moment:a.a}},created:function(){},mounted:function(){},methods:{goToTrustline:function(){this.airdropInfo&&this.airdropInfo.tokenName&&window.open("https://xrpl.services/?issuer="+this.airdropInfo.issuerAddress+"&currency="+this.airdropInfo.tokenName+"&limit="+this.airdropInfo.limit,"_blank")}}},L=_,S=(o("ffb1"),Object(p["a"])(L,g,C,!1,null,null,null)),z=S.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"solo-icon-cont"},[o("div",{staticClass:"solo-icon-logo",on:{click:function(e){return t.goToDex()}}},[o("el-tooltip",{attrs:{content:t.airdropInfo.tokenName?"View token on Sologenic Dex":"This airdrop does not have assigned token yet"}},[o("SoloLogo",{attrs:{size:40,color:t.airdropInfo.tokenName?"#343434":"#acabab"}})],1)],1)])},T=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 175.000000 177.000000"}},[o("g",{attrs:{transform:"translate(0.000000,177.000000) scale(0.100000,-0.100000)",fill:t.color,stroke:"none"}},[o("path",{attrs:{d:"M650 1739 c-301 -79 -541 -322 -621 -629 -18 -73 -20 -103 -17 -254\n    4 -167 5 -173 40 -269 104 -281 326 -486 603 -557 121 -31 333 -29 449 5 251\n    73 444 239 556 478 58 122 80 227 80 373 0 245 -80 443 -249 617 -110 115\n    -265 205 -412 241 -97 24 -330 21 -429 -5z m397 -419 c60 -26 119 -82 144\n    -135 28 -60 26 -157 -5 -210 -43 -72 -115 -107 -346 -167 -106 -27 -140 -56\n    -140 -118 0 -83 88 -133 204 -116 58 9 119 54 142 105 l19 40 93 1 c105 0 104\n    2 71 -84 -37 -99 -134 -177 -258 -206 -78 -18 -223 -9 -286 19 -59 26 -118 80\n    -148 136 -29 53 -30 173 -3 227 26 53 88 95 184 123 45 14 120 36 166 50 104\n    31 146 63 146 111 0 44 -33 79 -91 94 -87 24 -179 -11 -207 -80 l-17 -40 -87\n    0 c-49 0 -88 4 -88 8 0 5 7 31 15 59 29 98 105 169 214 200 68 19 217 10 278\n    -17z"}})])])},N=[],$={props:["size","color"],components:{},data:function(){return{moment:a.a}},created:function(){},mounted:function(){},methods:{}},B=$,M=(o("4fbd"),Object(p["a"])(B,y,N,!1,null,null,null)),j=M.exports,E={props:["airdropInfo"],components:{SoloLogo:j},data:function(){return{moment:a.a}},created:function(){},mounted:function(){},methods:{goToDex:function(){this.airdropInfo&&this.airdropInfo.tokenName&&window.open("https://sologenic.org/trade?market="+this.airdropInfo.currencyCode+"%2B"+this.airdropInfo.issuerAddress+"%2FXRP&network=mainnet","_blank")}}},O=E,A=(o("65bc"),Object(p["a"])(O,D,T,!1,null,null,null)),R=A.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"share-icon-cont"},[o("div",{staticClass:"share-icon-logo"},[o("el-tooltip",{attrs:{content:"Share this airdrop information"}},[o("ShareLogo",{attrs:{size:45}})],1)],1)])},Y=[],P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{width:t.size,height:t.size,version:"1.1",viewBox:"0 0 24 24","xml:space":"preserve"}},[o("g",{attrs:{id:"info"}}),o("g",{attrs:{id:"icons"}},[o("path",{attrs:{d:"M21.7,10.2l-6.6-6C14.6,3.7,14,4.2,14,5v3c-4.7,0-8.7,2.9-10.6,6.8c-0.7,1.3-1.1,2.7-1.4,4.1   c-0.2,1,1.3,1.5,1.9,0.6C6.1,16,9.8,13.7,14,13.7V17c0,0.8,0.6,1.3,1.1,0.8l6.6-6C22.1,11.4,22.1,10.6,21.7,10.2z",fill:"#343434"}})])])},X=[],F={props:["size"],components:{},data:function(){return{moment:a.a}},created:function(){},mounted:function(){},methods:{}},H=F,Z=(o("e00c"),Object(p["a"])(H,P,X,!1,null,null,null)),q=Z.exports,G={props:[],components:{ShareLogo:q},data:function(){return{moment:a.a}},created:function(){},mounted:function(){},methods:{}},J=G,V=(o("4c60"),Object(p["a"])(J,U,Y,!1,null,null,null)),K=V.exports,Q={components:{AirdropFooter:c["a"],ReturnLogo:h,XummIcon:z,SoloIcon:R,ShareIcon:K},data:function(){return{airdropInfo:null,routeBack:null,moment:a.a,loading:!1,sourceList:[],sourcePosition:null}},created:function(){this.applySourceList(),this.getAirdropScheduleFromCode(),this.setRouteBack()},mounted:function(){},methods:{applySourceList:function(){this.$route.params&&this.$route.params.sourceList&&(this.sourceList=this.$route.params.sourceList,this.sourcePosition=this.$route.params.position)},goToLink:function(t){window.open(t,"_blank")},goBack:function(){this.$router.push({name:this.routeBack,params:{sourceList:this.sourceList,sourcePosition:this.sourcePosition}})},getTwitterHandle:function(t){return"@"+t.substring(t.lastIndexOf("/")+1)},setRouteBack:function(){var t=this.$route.query.route;this.routeBack=t&&null!=t&&""!=t?t:"home"},getAirdropScheduleFromCode:function(){var t=this,e=this.$route.query.code;t.loading=!0,Object(i["a"])(e).then((function(t){return t.json()})).then((function(e){t.airdropInfo=e,t.loading=!1}))}}},W=Q,tt=(o("aa01"),Object(p["a"])(W,n,r,!1,null,null,null));e["default"]=tt.exports},"4fbd":function(t,e,o){"use strict";o("0303")},5117:function(t,e,o){},5811:function(t,e,o){},"65bc":function(t,e,o){"use strict";o("b981")},aa01:function(t,e,o){"use strict";o("5811")},b981:function(t,e,o){},bd21:function(t,e,o){t.exports=o.p+"static/img/no-image.37b0cad3.png"},e00c:function(t,e,o){"use strict";o("26c5")},e1fd:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return s}));o("d3b7");var n="https://xrpltools-api.azurewebsites.net/api/v1";function r(){return fetch(n+"/airdrop/publisher/",{method:"GET"})}function s(t){return fetch(n+"/airdrop/publisher/"+t,{method:"GET"})}},ecf0:function(t,e,o){"use strict";o("2188")},fe61:function(t,e,o){},ffb1:function(t,e,o){"use strict";o("1299")}}]);