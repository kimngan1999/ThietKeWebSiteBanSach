/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/search/header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placeholder: {
      required: false,
      type: String,
      default: 'Search for Products, Tips, Videos...'
    }
  },
  data: function data() {
    return {
      query: ''
    };
  },
  mounted: function mounted() {
    this.$bus.$on('SearchTermChanged', function (s) {
      this.query = s;
    }.bind(this));
  },
  methods: {
    openFullScreenSearch: function openFullScreenSearch() {
      this.$bus.$emit('OpenFullScreenSearch');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/screen.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/search/screen.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    minLength: {
      required: false,
      type: Number,
      default: 3
    },
    delay: {
      required: false,
      type: Number,
      default: 1000
    },
    placeholder: {
      required: false,
      type: String,
      default: 'Search for Products, Tips, Videos...'
    }
  },
  data: function data() {
    return {
      status: false,
      queries: [],
      query: '',
      productResults: [],
      contentResults: []
    };
  },
  mounted: function mounted() {
    var queries = [{
      indexName: 'shopify_products',
      query: '',
      params: {
        hitsPerPage: 8,
        distinct: true
      }
    }, {
      indexName: 'wp_searchable_posts',
      query: '',
      params: {
        hitsPerPage: 8,
        distinct: true
      }
    }];
    Vue.set(this, 'queries', queries);

    document.onkeydown = function (kd) {
      if (kd.keyCode == 27) {
        this.close();
      }
    }.bind(this);

    this.$bus.$on('OpenFullScreenSearch', function () {
      this.open();
    }.bind(this));
  },
  watch: {
    query: function query(to, from) {
      this.$bus.$emit('SearchTermChanged', to);

      if (to.length > this.minLength) {
        this.assignQuery(to);
        setTimeout(this.runQuery, this.delay);
      }
    }
  },
  methods: {
    onEnter: function onEnter(e) {
      e.preventDefault();
    },
    open: function open() {
      this.status = true;
      setTimeout(function () {
        this.$refs['SearchField'].focus();
      }.bind(this), 200);
    },
    close: function close() {
      this.status = false;
    },
    assignQuery: function assignQuery(q) {
      console.log(q);

      for (var i = 0; i < this.queries.length; i++) {
        this.queries[i].query = q;
      }
    },
    runQuery: function runQuery() {
      this.$bpi.SearchClient.search(this.queries, this.handleResults);
    },
    handleResults: function handleResults(error, contents) {
      Vue.set(this, 'productResults', contents.results[0].hits);
      Vue.set(this, 'contentResults', contents.results[1].hits);
      console.log(this.productResults);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/header.vue?vue&type=template&id=6ce1e806&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/search/header.vue?vue&type=template&id=6ce1e806& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    { attrs: { name: "search", method: "post", action: "/search" } },
    [
      _c("input", {
        attrs: { type: "text", name: "q", placeholder: _vm.placeholder },
        domProps: { value: _vm.query },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.openFullScreenSearch($event)
          }
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/screen.vue?vue&type=template&id=3acfe25c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/search/screen.vue?vue&type=template&id=3acfe25c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ScreenSearch",
      class: { "ScreenSearch--active": _vm.status }
    },
    [
      _c("div", { staticClass: "Container" }, [
        _c(
          "form",
          {
            attrs: { name: "search", method: "post", action: "/search" },
            on: {
              keypress: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.onEnter($event)
              }
            }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.query,
                  expression: "query"
                }
              ],
              ref: "SearchField",
              attrs: { type: "text", name: "q", placeholder: _vm.placeholder },
              domProps: { value: _vm.query },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.query = $event.target.value
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm.productResults.length > 0
          ? _c(
              "div",
              { staticClass: "search-results" },
              _vm._l(_vm.productResults, function(result) {
                return _c("div", [
                  _c(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://store.bpisports.com/products/" +
                          result.handle
                      }
                    },
                    [
                      _c("img", { attrs: { src: result.product_image } }),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(result.title))])
                    ]
                  )
                ])
              }),
              0
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_search_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue/search/header */ "./resources/js/vue/search/header.vue");
/* harmony import */ var _vue_search_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue/search/screen */ "./resources/js/vue/search/screen.vue");
(function (App) {
  App.SearchClient = algoliasearch(algoliaShopify.config.app_id, algoliaShopify.config.search_api_key);
})(window.$bpi);


Vue.component('search-header', _vue_search_header__WEBPACK_IMPORTED_MODULE_0__["default"]);

Vue.component('full-screen-search', _vue_search_screen__WEBPACK_IMPORTED_MODULE_1__["default"]);

(function () {
  var links = document.getElementById('LayoutHeader').querySelectorAll('.TopMenuLink');

  var _loop = function _loop() {
    var node = links[i];
    var p = node.parentElement;

    if (p.querySelectorAll('.HeaderMegamenu').length > 0) {
      console.log(node.nextSibling);
      node.addEventListener('click', function (e) {
        e.preventDefault();

        if (p.classList.contains('TopMenuLinkWrapper--active')) {
          p.classList.remove('TopMenuLinkWrapper--active');
        } else {
          p.classList.add('TopMenuLinkWrapper--active');
        }

        return false;
      });
    }
  };

  for (var i = 0; i < links.length; i++) {
    _loop();
  }
})(); // mobile nav toggle


(function () {
  var mobileSearchToggle = document.getElementById('mobileNavToggle');
  var mobileMenu = document.getElementById('HeaderNav');
  var body = document.body;
  mobileSearchToggle.addEventListener('click', function (event) {
    mobileMenu.classList.toggle('nav-active');
    body.classList.toggle('nav-active');
    this.classList.toggle('nav-active');
  });
})();

(function (App) {
  var miniCart = document.getElementById('HeaderMinicart');
  console.log(miniCart);
  App.Bus.$on('cart.update', function () {});
  var vueify = document.querySelectorAll('.Vueify');

  if (vueify.length > 0) {
    for (var i = 0; i < vueify.length; i++) {
      vueify[i].classList.remove('Vueify');
      vueify[i].classList.add('Vmod');
      new Vue({
        el: vueify[i]
      });
    }
  }
})(window.$bpi);

window.getCartData = function (JSCart) {
  window.$bpi.Cart = JSCart;
};

(function () {
  var script = document.createElement('script');
  var head = document.head || document.getElementsByTagName('head')[0];
  script.src = 'https://bpisports.com/cart.json?callback=getCartData';
  head.insertBefore(script, head.firstChild);
})();

/***/ }),

/***/ "./resources/js/vue/search/header.vue":
/*!********************************************!*\
  !*** ./resources/js/vue/search/header.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_6ce1e806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=6ce1e806& */ "./resources/js/vue/search/header.vue?vue&type=template&id=6ce1e806&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/vue/search/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_6ce1e806___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_6ce1e806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/search/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/search/header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/vue/search/header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/search/header.vue?vue&type=template&id=6ce1e806&":
/*!***************************************************************************!*\
  !*** ./resources/js/vue/search/header.vue?vue&type=template&id=6ce1e806& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_6ce1e806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=6ce1e806& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/header.vue?vue&type=template&id=6ce1e806&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_6ce1e806___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_6ce1e806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue/search/screen.vue":
/*!********************************************!*\
  !*** ./resources/js/vue/search/screen.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screen_vue_vue_type_template_id_3acfe25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen.vue?vue&type=template&id=3acfe25c& */ "./resources/js/vue/search/screen.vue?vue&type=template&id=3acfe25c&");
/* harmony import */ var _screen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen.vue?vue&type=script&lang=js& */ "./resources/js/vue/search/screen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _screen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _screen_vue_vue_type_template_id_3acfe25c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _screen_vue_vue_type_template_id_3acfe25c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/search/screen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/search/screen.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/vue/search/screen.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_screen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./screen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/screen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_screen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/search/screen.vue?vue&type=template&id=3acfe25c&":
/*!***************************************************************************!*\
  !*** ./resources/js/vue/search/screen.vue?vue&type=template&id=3acfe25c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_screen_vue_vue_type_template_id_3acfe25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./screen.vue?vue&type=template&id=3acfe25c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/search/screen.vue?vue&type=template&id=3acfe25c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_screen_vue_vue_type_template_id_3acfe25c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_screen_vue_vue_type_template_id_3acfe25c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/build.scss":
/*!***********************************!*\
  !*** ./resources/sass/build.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/build.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/oliverharoun/Sites/bpisports/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /Users/oliverharoun/Sites/bpisports/resources/sass/app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! /Users/oliverharoun/Sites/bpisports/resources/sass/build.scss */"./resources/sass/build.scss");


/***/ })

/******/ });