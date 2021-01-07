(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{545:function(t,e,n){"use strict";n.r(e);n(562);var c=n(4),component=Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"description"},[this._t("default")],2)}),[],!1,null,"15588f72",null);e.default=component.exports},546:function(t,e,n){},547:function(t,e,n){"use strict";n.r(e);n(20);var c=n(569),l={components:{KinesisContainer:c.a,KinesisElement:c.b},props:{parallax:{type:String,default:null,validator:function(t){return["info","about","benefits","premium","default"].includes(t)}},active:{type:Boolean,default:!1}},methods:{getImageUrl:function(t){return n(549)("./parallax-".concat(t,".png"))}}},o=(n(555),n(4)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kinesis-container",{staticClass:"screen",attrs:{tag:"section",active:t.active}},[null!==t.parallax?n("kinesis-element",{class:["screen__parallax","screen__parallax_section_"+t.parallax],attrs:{tag:"img",strength:40,src:t.getImageUrl(t.parallax),alt:t.parallax+" parallax"}}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"7b05e611",null);e.default=component.exports},549:function(t,e,n){var map={"./parallax-about.png":550,"./parallax-benefits.png":551,"./parallax-default.png":552,"./parallax-info.png":553,"./parallax-premium.png":554};function c(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=l,t.exports=c,c.id=549},550:function(t,e,n){t.exports=n.p+"img/parallax-about.8a2d392.png"},551:function(t,e,n){t.exports=n.p+"img/parallax-benefits.abbdc2d.png"},552:function(t,e,n){t.exports=n.p+"img/parallax-default.eb2320b.png"},553:function(t,e,n){t.exports=n.p+"img/parallax-info.608fd83.png"},554:function(t,e,n){t.exports=n.p+"img/parallax-premium.2e40ce5.png"},555:function(t,e,n){"use strict";n(546)},556:function(t,e,n){},557:function(t,e,n){},558:function(t,e,n){},559:function(t,e,n){"use strict";n.r(e);var c=n(113),l=n(111),o=n(545),r={components:{VTitleOverlap:c.default,VContainer:l.default,VDescription:o.default},props:{mainText:{type:String,required:!0},backgroundText:{type:String,required:!0},description:{type:String,default:null}}},_=(n(570),n(4)),component=Object(_.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("v-container",{staticClass:"head__container",attrs:{width:"wide"}},[n("v-title-overlap",{staticClass:"head__title-overlap",attrs:{"main-text":t.mainText,"background-text":t.backgroundText,centered:!1}}),t._v(" "),null!==t.description?n("v-description",{staticClass:"head__description"},[t._v(t._s(t.description))]):t._e()],1)],1)}),[],!1,null,"666623c6",null);e.default=component.exports;installComponents(component,{VTitleOverlap:n(113).default,VDescription:n(545).default,VContainer:n(111).default})},560:function(t,e,n){"use strict";n.r(e);n(37),n(36),n(38);var c={data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t){this.tabs.forEach((function(e){e.isActive=e.name===t.name}))},handleClick:function(t){return null!==t.redirectTo?this.$emit("click",t):this.selectTab(t)},getImgUrl:function(t){return n(571)("./".concat(t,".svg"))}}},l=(n(572),n(4)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("ul",{staticClass:"tabs__list"},t._l(t.tabs,(function(e,c){return n("li",{key:c,staticClass:"tabs__title"},[n("button",{class:["tabs__link",{tabs__link_active:e.isActive}],on:{click:function(n){return t.handleClick(e)}}},[null!==e.icon?n("img",{class:["tabs__icon",{tabs__icon_active:e.isActive}],attrs:{src:t.getImgUrl(e.icon),alt:"Tab icon"}}):t._e(),t._v(" "),n("span",{staticClass:"tabs__text"},[t._v(t._s(e.name))])])])})),0),t._v(" "),n("div",{staticClass:"tabs__details"},[t._t("default")],2)])}),[],!1,null,"f4f6e9d2",null);e.default=component.exports},561:function(t,e,n){"use strict";n.r(e);n(20),n(36),n(16),n(23);var c={props:{name:{type:String,required:!0},selected:{type:Boolean,default:!1},icon:{type:String,default:null,validator:function(t){return["account","history","buy","logout"].includes(t)}},redirectTo:{type:String,default:null}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},l=n(4),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],staticClass:"tab"},[this._t("default")],2)}),[],!1,null,"67627276",null);e.default=component.exports},562:function(t,e,n){"use strict";n(556)},563:function(t,e,n){t.exports=n.p+"img/account.d3804ee.svg"},564:function(t,e,n){t.exports=n.p+"img/buy.eb81be4.svg"},565:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEyQzAgNS4zNzI1OCA1LjM3MjU4IDAgMTIgMEMxNS4xODI2IDAgMTguMjM0OCAxLjI2NDI4IDIwLjQ4NTMgMy41MTQ3MkMyMi43MzU3IDUuNzY1MTYgMjQgOC44MTc0IDI0IDEyQzI0IDE4LjYyNzQgMTguNjI3NCAyNCAxMiAyNEM1LjM3MjU4IDI0IDAgMTguNjI3NCAwIDEyWk0yLjE4MTgyIDEyQzIuMTgxODIgMTcuNDIyNCA2LjU3NzU3IDIxLjgxODIgMTIgMjEuODE4MkMxNy40MjI0IDIxLjgxODIgMjEuODE4MiAxNy40MjI0IDIxLjgxODIgMTJDMjEuODE4MiA2LjU3NzU3IDE3LjQyMjQgMi4xODE4MiAxMiAyLjE4MTgyQzYuNTc3NTcgMi4xODE4MiAyLjE4MTgyIDYuNTc3NTcgMi4xODE4MiAxMloiIGZpbGw9IiMwMDAiLz4KPHBhdGggZD0iTTE2LjM2MzcgMTEuMDYxN0gxMy4wOTFWNS40NTQ0M0MxMy4wOTEgNC44NTE5NCAxMi42MDI2IDQuMzYzNTMgMTIuMDAwMSA0LjM2MzUzQzExLjM5NzYgNC4zNjM1MyAxMC45MDkyIDQuODUxOTQgMTAuOTA5MiA1LjQ1NDQzVjExLjk5OTlDMTAuOTA5MiAxMS45OTk5IDEwLjkwOTIgMTIuMDU0NCAxMC45MDkyIDEyLjA3NjNDMTAuOTA5MiAxMi4wOTgxIDEwLjkwOTIgMTIuMDc2MyAxMC45MDkyIDEyLjE1MjZDMTAuOTA5MiAxMi43NTUxIDExLjM5NzYgMTMuMjQzNSAxMi4wMDAxIDEzLjI0MzVIMTYuMzYzN0MxNi45NjYyIDEzLjI0MzUgMTcuNDU0NiAxMi43NTUxIDE3LjQ1NDYgMTIuMTUyNkMxNy40NTQ2IDExLjU1MDEgMTYuOTY2MiAxMS4wNjE3IDE2LjM2MzcgMTEuMDYxN1oiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg=="},566:function(t,e,n){t.exports=n.p+"img/logout.c324532.svg"},570:function(t,e,n){"use strict";n(557)},571:function(t,e,n){var map={"./account.svg":563,"./buy.svg":564,"./history.svg":565,"./logout.svg":566};function c(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=l,t.exports=c,c.id=571},572:function(t,e,n){"use strict";n(558)},573:function(t,e,n){},577:function(t,e,n){"use strict";n.r(e);var c={components:{VTitle:n(112).default},props:{src:{type:String,default:null}}},l=(n(581),n(4)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("article",{class:["content",{content_narrow:t.src}]},[t.src?c("div",{staticClass:"content__picure"},[c("img",{staticClass:"content__image",attrs:{src:n(579)("./"+t.src+".png"),alt:""}})]):t._e(),t._v(" "),c("div",{class:["content__container",{content__container_shifted:t.src}]},[c("v-title",{class:["content__title",{content__title_shifted:t.src}],attrs:{tag:"h3","font-size":"normal","font-weight":"extra-bold",underline:"dotted","underline-color":"blue","underline-centered":!1}},[t._t("title")],2),t._v(" "),t._t("default")],2)])}),[],!1,null,"876cc7ba",null);e.default=component.exports;installComponents(component,{VTitle:n(112).default})},579:function(t,e,n){var map={"./gun.png":580};function c(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=l,t.exports=c,c.id=579},580:function(t,e,n){t.exports=n.p+"img/gun.53b00a6.png"},581:function(t,e,n){"use strict";n(573)},582:function(t,e,n){t.exports=n.p+"img/yandex-money.2a54eae.svg"},598:function(t,e,n){},599:function(t,e,n){},600:function(t,e,n){},633:function(t,e,n){"use strict";n.r(e);var c=n(92),l=n(560),o=n(561),r=n(577),_=n(545),d=n(35),f=n(644),m={components:{TabsList:l.default,TabsItem:o.default,AccountContent:r.default,VDescription:_.default,VLinkBlank:d.default,VTable:f.default},mixins:[c.a],data:function(){return{payments:[{id:1,number:"#376578",date:"22.09.2020 11:34",amount:"+500 руб.",method:{id:1,name:"Яндекс.Деньги"},state:{status:"success",text:"Успешно"}},{id:2,number:"#376578",date:"22.09.2020 11:34",amount:"+500 руб.",method:{id:1,name:"Яндекс.Деньги"},state:{status:"canceled",text:"Отменён"}},{id:3,number:"#376578",date:"22.09.2020 11:34",amount:"+500 руб.",method:{id:1,name:"Яндекс.Деньги"},state:{status:"pending",text:"Ожидание"}},{id:4,number:"#376578",date:"22.09.2020 11:34",amount:"+500 руб.",method:{id:1,name:"Яндекс.Деньги"},state:{status:"success",text:"Успешно"}},{id:5,number:"#376578",date:"22.09.2020 11:34",amount:"+500 руб.",method:{id:1,name:"Яндекс.Деньги"},state:{status:"canceled",text:"Отменён"}},{id:6,number:"#376578",date:"22.09.2020 11:34",amount:"+500 руб.",method:{id:1,name:"Яндекс.Деньги"},state:{status:"pending",text:"Ожидание"}}]}},methods:{clickHandler:function(t){"/premium"===t.redirectTo&&this.redirectTo(t.redirectTo),"/"===t.redirectTo&&(this.sendSuccess(this.$t("notifications.logout.success")),this.redirectTo(t.redirectTo))},redirectTo:function(path){var t=this.localePath(path);this.$router.push({path:t})}}},v=(n(660),n(4)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account"},[n("tabs-list",{staticClass:"account__tabs",on:{click:t.clickHandler}},[n("tabs-item",{staticClass:"account__item",attrs:{name:t.$t("pages.account.linkedAccount.name"),selected:!0,icon:"account"}},[n("AccountContent",{staticClass:"account__content",scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                    "+t._s(t.$t("pages.account.linkedAccount.yourId"))+" 295972\n                ")]},proxy:!0}])},[t._v(" "),n("v-description",{staticClass:"account__description account__description_type_id"},[t._v("\n                    "+t._s(t.$t("pages.account.linkedAccount.changeAccount"))+"\n                ")])],1),t._v(" "),n("AccountContent",{staticClass:"account__content",scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                    "+t._s(t.$t("pages.account.linkedAccount.lostAccount"))+"\n                ")]},proxy:!0}])},[t._v(" "),n("v-description",{staticClass:"account__description account__description_type_lost"},[n("i18n",{attrs:{path:"pages.account.linkedAccount.lostAccountActions",tag:!1},scopedSlots:t._u([{key:"span",fn:function(){return[n("span",{staticClass:"account__accent"},[t._v("\n                                "+t._s(t.$t("pages.account.linkedAccount.adminEmail"))+"\n                            ")])]},proxy:!0},{key:"break",fn:function(){return[n("br",{staticClass:"account__margin"})]},proxy:!0},{key:"action",fn:function(){return[n("v-link-blank",{staticClass:"account__link",attrs:{href:"mailto:"+t.$t("pages.account.linkedAccount.supportMail")}},[t._v("\n                                "+t._s(t.$t("pages.account.linkedAccount.supportMail"))+"\n                            ")])]},proxy:!0}])})],1)],1)],1),t._v(" "),n("tabs-item",{staticClass:"account__item",attrs:{name:t.$t("pages.account.history.name"),selected:!1,icon:"history"}},[n("AccountContent",{staticClass:"account__content",scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                    "+t._s(t.$t("pages.account.history.title"))+"\n                ")]},proxy:!0}])},[t._v(" "),n("v-description",{staticClass:"account__description account__description_type_table"},[t._v("\n                    "+t._s(t.$t("pages.account.history.description"))+"\n                ")]),t._v(" "),n("v-table",{staticClass:"account__table",attrs:{payments:t.payments}})],1)],1),t._v(" "),n("tabs-item",{staticClass:"account__item",attrs:{name:t.$t("pages.account.getPremium"),selected:!1,icon:"buy","redirect-to":"/premium"}}),t._v(" "),n("tabs-item",{staticClass:"account__item",attrs:{name:t.$t("pages.account.logout"),selected:!1,icon:"logout","redirect-to":"/"}})],1)],1)}),[],!1,null,"2fdef0a9",null);e.default=component.exports;installComponents(component,{VDescription:n(545).default,AccountContent:n(577).default,VLinkBlank:n(35).default,TabsItem:n(561).default,VTable:n(644).default,TabsList:n(560).default})},644:function(t,e,n){"use strict";n.r(e);var c={props:{payments:{type:Array,required:!0}},methods:{localizedStatus:function(t){var path="pages.account.table.statuses.".concat(t);return this.$t(path)}}},l=(n(659),n(4)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"table"},[c("div",{staticClass:"table__row table__row_position_head"},[c("p",{staticClass:"table__cell"},[t._v("\n            "+t._s(t.$t("pages.account.table.order"))+"\n        ")]),t._v(" "),c("p",{staticClass:"table__cell"},[t._v("\n            "+t._s(t.$t("pages.account.table.date"))+"\n        ")]),t._v(" "),c("p",{staticClass:"table__cell"},[t._v("\n            "+t._s(t.$t("pages.account.table.amount"))+"\n        ")]),t._v(" "),c("p",{staticClass:"table__cell"},[t._v("\n            "+t._s(t.$t("pages.account.table.method"))+"\n        ")]),t._v(" "),c("p",{staticClass:"table__cell"},[t._v("\n            "+t._s(t.$t("pages.account.table.status"))+"\n        ")])]),t._v(" "),t._l(t.payments,(function(e){return c("div",{key:e.id,staticClass:"table__row table__row_position_body"},[c("p",{staticClass:"table__cell"},[c("span",{staticClass:"table__description"},[t._v("\n                "+t._s(t.$t("pages.account.table.order"))+"\n            ")]),t._v(" "),c("span",{staticClass:"table__data"},[t._v(t._s(e.number))])]),t._v(" "),c("p",{staticClass:"table__cell"},[c("span",{staticClass:"table__description"},[t._v("\n                "+t._s(t.$t("pages.account.table.date"))+"\n            ")]),t._v(" "),c("span",{staticClass:"table__data"},[t._v(t._s(e.date))])]),t._v(" "),c("p",{staticClass:"table__cell table__cell_type_amount"},[c("span",{staticClass:"table__description"},[t._v("\n                "+t._s(t.$t("pages.account.table.amount"))+"\n            ")]),t._v(" "),c("span",{staticClass:"table__data"},[t._v(t._s(e.amount))])]),t._v(" "),c("p",{staticClass:"table__cell"},[c("img",{staticClass:"table__payment-icon",attrs:{src:n(582),alt:"Payment icon"}}),t._v(" "),c("span",{staticClass:"table__data"},[t._v(t._s(e.method.name))])]),t._v(" "),c("p",{class:["table__cell","table__cell_type_status","table__cell_color_"+e.state.status]},[c("span",{staticClass:"table__status-text"},[t._v("\n                "+t._s(t.localizedStatus(e.state.status))+"\n            ")])])])}))],2)}),[],!1,null,"537d5b0e",null);e.default=component.exports},659:function(t,e,n){"use strict";n(598)},660:function(t,e,n){"use strict";n(599)},661:function(t,e,n){"use strict";n(600)},735:function(t,e,n){"use strict";n.r(e);var c=n(547),l=n(559),o=n(111),r=n(633),_={middleware:"auth-user",name:"Index",components:{VScreen:c.default,VHead:l.default,VContainer:o.default,Account:r.default}},d=(n(661),n(4)),component=Object(d.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[e("v-screen",{staticClass:"main__screen",attrs:{parallax:"default",active:!0}},[e("v-head",{staticClass:"main__head",attrs:{"main-text":this.$t("pages.account.title"),"background-text":"LC",description:this.$t("pages.account.description")}}),this._v(" "),e("v-container",{staticClass:"main__container",attrs:{width:"wide"}},[e("Account",{staticClass:"main__tabs"})],1)],1)],1)}),[],!1,null,"681e1b7b",null);e.default=component.exports;installComponents(component,{VHead:n(559).default,Account:n(633).default,VContainer:n(111).default,VScreen:n(547).default})}}]);