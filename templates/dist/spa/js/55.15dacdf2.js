(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{2874:function(t,e){},daf3:function(t,e,a){"use strict";var s=a("2874"),i=a.n(s);e["default"]=i.a},df27:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{staticStyle:{display:"none"},model:{value:t.scaneddata.request_time,callback:function(e){t.$set(t.scaneddata,"request_time",e)},expression:"scaneddata.request_time"}}),a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],style:{width:t.width,height:t.height},attrs:{flat:""}},[a("q-card-section",[a("q-bar",{staticClass:"bg-white shadow-1 "},[a("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("warehouse.view_binset.bin_name"))+": "+t._s(t.bin_scan))])])],1),a("q-scroll-area",{style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(t._s(t.bin_name_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.goods_code_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.goods_desc_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.goods_qty_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.pick_qty_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.picked_qty_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.bin_size_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.bin_property_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.create_time_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.update_time_label))])])]),a("tbody",[t._l(t.table_list,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-center"},[t._v(t._s(e.bin_name))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.goods_code))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.goods_desc))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.goods_qty))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.pick_qty))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.picked_qty))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.bin_size))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.bin_property))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.create_time))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.update_time))])])}))],2)])],1),a("q-separator",{attrs:{dark:""}})],1)],1)},i=[],n=a("3004"),c=a("18d6"),o=a("09f9"),_={name:"Pagezebra_locationquery",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/bin/",width:"",height:"",scroll_height:"",table_list:[],bin_name_label:this.$t("warehouse.view_binset.bin_name"),goods_code_label:this.$t("stock.view_stocklist.goods_code"),goods_desc_label:this.$t("stock.view_stocklist.goods_desc"),goods_qty_label:this.$t("stock.view_stocklist.onhand_stock"),pick_qty_label:this.$t("stock.view_stocklist.pick_stock"),picked_qty_label:this.$t("stock.view_stocklist.picked_stock"),bin_size_label:this.$t("warehouse.view_binset.bin_size"),bin_property_label:this.$t("warehouse.view_binset.bin_property"),create_time_label:this.$t("createtime"),update_time_label:this.$t("updatetime"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},bar_scanned:"",bin_scan:""}},methods:{getBinSetList(t){var e=this;Object(n["e"])(e.pathname+"?bin_name="+t,{}).then((t=>{0===t.results.length?(navigator.vibrate(100),e.$q.notify({message:"No Bin Query Data",position:"top",icon:"close",color:"negative"})):e.tabl_list=t.results})).catch((t=>{navigator.vibrate(100),e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))}},computed:{fab:{get(){return this.$store.state.fabchange.fab}},scaneddata:{get(){return this.$store.state.scanedsolve.scaneddata}}},created(){var t=this;c["a"].has("openid")?t.openid=c["a"].getItem("openid"):(t.openid="",c["a"].set("openid","")),c["a"].has("login_name")?t.login_name=c["a"].getItem("login_name"):(t.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;t.width=1*o["a"].width+"px",t.height=o["a"].height-50+"px",t.scroll_height=o["a"].height-175+"px"},updated(){var t=this;""!==t.scaneddata&&t.bar_scanned!==t.scaneddata.request_time&&("BINSET"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.getBinSetList(t.scaneddata.code)):t.$q.notify({message:"No Bin Query Data",position:"top",icon:"close",color:"negative"}))},beforeDestroy(){}},l=_,r=a("42e1"),d=a("daf3"),h=a("27f9"),b=a("f09f"),p=a("a370"),u=a("d847"),v=a("4983"),g=a("2bb1"),m=a("eb85"),y=a("eebe"),w=a.n(y),x=Object(r["a"])(l,s,i,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(x);e["default"]=x.exports;w()(x,"components",{QInput:h["a"],QCard:b["a"],QCardSection:p["a"],QBar:u["a"],QScrollArea:v["a"],QMarkupTable:g["a"],QSeparator:m["a"]})}}]);