(function(t){function e(e){for(var n,r,u=e[0],s=e[1],i=e[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(l.length)l.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,r=1;r<o.length;r++){var u=o[r];0!==a[u]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a={app:0},c=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-65259e4c":"3ac74e4a","chunk-cfcb308e":"6cb6b452"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o={"chunk-65259e4c":1,"chunk-cfcb308e":1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-65259e4c":"f49d74df","chunk-cfcb308e":"f49d74df"}[t]+".css",a=s.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===n||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],f.parentNode.removeChild(f),o(c)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(f);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=d;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"007a":function(t,e,o){"use strict";var n=o("bc3a"),r=o.n(n),a=r.a.create({baseURL:"https://librarymanagementtt.herokuapp.com"});e["a"]={getBooks:function(){return a.get("/books")},getBook:function(t){return a.get("/books/".concat(t))},addBook:function(t){return a.post("/books",t)},updateBook:function(t,e){return a.put("/books/".concat(t),e)},removeBook:function(t){return a.delete("/books/".concat(t))}}},"0c1b":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("0cdd");var n=o("2b0e"),r=o("5f5b"),a=o("b1e0");o("ab8b"),o("2dd8");n["default"].use(r["a"]),n["default"].use(a["a"]);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}}),o("router-view")],1)},u=[],s=o("2877"),i={},d=Object(s["a"])(i,c,u,!1,null,null,null),l=d.exports,f=(o("d3b7"),o("8c4f")),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home container"},[o("div",{staticClass:"mx-auto mb-3",staticStyle:{width:"200px"}},[o("router-link",{attrs:{to:{name:"AddBook"}}},[o("b-button",{staticClass:"add",attrs:{variant:"info"}},[o("b-icon-book"),o("span",{staticClass:"ml-2"},[t._v("Add Book")])],1)],1)],1),o("b-table-simple",{staticClass:"text-center",attrs:{hover:"",small:"","caption-top":"",responsive:"",bordered:"",striped:""}},[o("b-thead",{attrs:{"head-variant":"primary"}},[o("b-tr",[o("b-th",[t._v("Id")]),o("b-th",[t._v("Book Name")]),o("b-th",[t._v("Author")]),o("b-th",[t._v("Page Count")]),o("b-th",[t._v("Published Status")]),o("b-th",[t._v("Published Date")]),o("b-th",[t._v("UUID Number")]),o("b-th",[t._v("Created At")]),o("b-th",[t._v("Edit")]),o("b-th",[t._v("Delete")])],1)],1),o("b-tbody",t._l(t.allBooks,(function(e){return o("b-tr",{key:e.id},[o("b-td",[t._v(t._s(e.id))]),o("b-td",[t._v(t._s(e.name))]),o("b-td",[t._v(t._s(e.author))]),o("b-td",[t._v(t._s(e.pageCount))]),o("b-td",[t._v(t._s(e.published))]),o("b-td",[t._v(t._s(e.publishedAt))]),o("b-td",[t._v(t._s(e.userUuid))]),o("b-td",[t._v(t._s(e.createdAt))]),o("b-td",[o("router-link",{attrs:{to:{name:"EditBook",params:{id:e.id}}}},[o("b-icon-pencil")],1)],1),o("b-td",[o("b-icon-trash",{staticClass:"delete",on:{click:function(o){return t.deleteBook(e.id)}}})],1)],1)})),1)],1)],1)},p=[],h=o("2f62"),v={name:"Home",computed:Object(h["c"])(["allBooks"]),methods:Object(h["b"])(["fetchBooks","deleteBook"]),created:function(){this.fetchBooks()}},m=v,k=(o("dd9f"),Object(s["a"])(m,b,p,!1,null,"7c6bacde",null)),g=k.exports;n["default"].use(f["a"]);var _=[{path:"/",name:"Home",component:g},{path:"/book",name:"AddBook",component:function(){return o.e("chunk-cfcb308e").then(o.bind(null,"927c"))}},{path:"/book/:id",name:"EditBook",component:function(){return o.e("chunk-65259e4c").then(o.bind(null,"447c"))}}],y=new f["a"]({mode:"history",base:"/",routes:_}),B=y,w=(o("4de4"),o("4160"),o("159b"),o("007a")),O=o("b166"),j={books:[]},C={allBooks:function(t){return t.books}},A={fetchBooks:function(t){var e=t.commit;w["a"].getBooks().then((function(t){t.data.content.forEach((function(t){var e=new Date(t.publishedAt);t.publishedAt=Object(O["a"])(e,"dd/MM/yyyy")})),e("setBooks",t.data.content)})).catch((function(t){return console.log(t)}))},deleteBook:function(t,e){var o=t.commit;w["a"].removeBook(e).then((function(){var t=j.books.filter((function(t){return t.id!==e}));o("setBooks",t)})).catch((function(t){console.log(t)}))}},E={setBooks:function(t,e){t.books=e},setBook:function(t,e){t.book=e}},P={state:j,getters:C,actions:A,mutations:E};n["default"].use(h["a"]);var x=new h["a"].Store({modules:{books:P}});n["default"].config.productionTip=!1,new n["default"]({router:B,store:x,render:function(t){return t(l)}}).$mount("#app")},dd9f:function(t,e,o){"use strict";var n=o("0c1b"),r=o.n(n);r.a}});
//# sourceMappingURL=app.2fb29889.js.map