webpackJsonp([2],{"8qfT":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("aqwI"),o=e("onq0"),a=e("VU/8")(n.a,o.a,!1,null,null,null);a.options.__file="resources/nuxt/layouts/default.vue",i.default=a.exports},aqwI:function(t,i,e){"use strict";i.a={data:function(){return{drawer:!0}},props:{source:String},methods:{onClick:function(){this.$store.commit("increment")},onNavigate:function(t){this.$router.push({path:t})}}}},onq0:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire",dark:""}},[e("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},[e("v-list-tile",{on:{click:function(t){}}},[e("v-list-tile-action",[e("v-icon",[t._v("dashboard")])],1),e("v-list-tile-content",[e("v-list-tile-title",{on:{click:function(i){t.onNavigate("/")}}},[t._v("\n                            Home\n                        ")])],1)],1),e("v-list-tile",{on:{click:function(t){}}},[e("v-list-tile-action",[e("v-icon",[t._v("settings")])],1),e("v-list-tile-content",{on:{click:function(i){t.onNavigate("/about")}}},[e("v-list-tile-title",[t._v("About us")])],1)],1)],1)],1),e("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[e("v-toolbar-side-icon",{on:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Application")])],1),e("v-content",[e("nuxt")],1),e("v-footer",{attrs:{app:"",fixed:""}},[e("span",[t._v("© 2018")])])],1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};i.a=o}});