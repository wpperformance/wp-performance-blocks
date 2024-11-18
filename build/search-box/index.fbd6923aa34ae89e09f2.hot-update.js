"use strict";
self["webpackHotUpdatewp_performance_blocks"]("search-box/index",{

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/search-box/edit.js":
/*!********************************!*\
  !*** ./src/search-box/edit.js ***!
  \********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

var _Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

var _s = __webpack_require__.$Refresh$.signature();



function Edit() {
  _s();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Search Box", "search-box"));
}
_s(Edit, "+/BArhCg1S/0sGrstlq5AtwfUrk=", false, function () {
  return [_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps];
});
_c = Edit;
var _c;
__webpack_require__.$Refresh$.register(_c, "Edit");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			__webpack_module__.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/search-box/index.js":
/*!*********************************!*\
  !*** ./src/search-box/index.js ***!
  \*********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

var _Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/search-box/style.scss");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.js */ "./src/search-box/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/search-box/block.json");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");

__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_patrickfaramaz_WP_DDEV_wp_performance_wp_content_plugins_wp_performance_blocks_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));




/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			__webpack_module__.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("206489362365be8c406f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.fbd6923aa34ae89e09f2.hot-update.js.map