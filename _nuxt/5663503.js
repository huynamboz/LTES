(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("18111b0b",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n(380)},405:function(t,e,n){var c=n(30)((function(i){return i[1]}));c.push([t.i,".container[data-v-3e59ed11]{min-width:250px}.tabLeft-main[data-v-3e59ed11]{padding:20px;padding-top:0}.filter-title[data-v-3e59ed11]{font-size:20px;font-weight:600;color:#333}.filter-category[data-v-3e59ed11]{margin-top:20px}.item-cate-name[data-v-3e59ed11]{display:flex;gap:12px}.filter-cate-title[data-v-3e59ed11]{font-size:16px;font-weight:400;color:#333;margin-bottom:10px}.filter-city[data-v-3e59ed11]{margin-top:12px}.line[data-v-3e59ed11]{border-bottom:1px solid #e5e5e5;margin-top:20px}",""]),c.locals={},t.exports=c},455:function(t,e,n){"use strict";n.r(e);n(51);var c=n(9),o=(n(52),{data:function(){return{listCate:[]}},mounted:function(){this.fetchFilter()},methods:{fetchFilter:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://635d4fb7cb6cf98e56b20ae8.mockapi.io/api/listpost/product").then((function(e){t.listCate=e.data})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),r=(n(404),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"tabLeft-main"},[t._m(0),t._v(" "),e("div",{staticClass:"filter-category"},[e("h2",{staticClass:"filter-cate-title"},[t._v("Theo danh mục")]),t._v(" "),e("div",{staticClass:"list-cate"},t._l(t.listCate,(function(n){return e("div",{key:n.id,staticClass:"item-cate"},[e("div",{staticClass:"item-cate-name"},[e("input",{attrs:{type:"checkbox",name:"choose",id:""},domProps:{value:n.id}}),t._v(" "),e("label",{attrs:{for:"choose"}},[t._v(t._s(n.name))])])])})),0)]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"filter-city"},[e("h2",{staticClass:"filter-cate-title"},[t._v("Theo danh mục")]),t._v(" "),e("div",{staticClass:"list-cate"},t._l(t.listCate,(function(n){return e("div",{key:n.id,staticClass:"item-cate"},[e("div",{staticClass:"item-cate-name"},[e("input",{attrs:{type:"checkbox",name:"choose",id:""},domProps:{value:n.id}}),t._v(" "),e("label",{attrs:{for:"choose"}},[t._v(t._s(n.name))])])])})),0)])])])}),[function(){var t=this._self._c;return t("h1",{staticClass:"filter-title"},[t("i",{staticClass:"fi fi-rr-filter"}),this._v(" Bộ lọc tìm kiếm\n\t\t")])}],!1,null,"3e59ed11",null);e.default=component.exports}}]);