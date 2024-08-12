import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/github-infos/view.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");

const $fetch = async url => {
  let data = null;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (e) {
    throw e;
  }
  return data;
};
const {
  state,
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('wp-performance/global', {
  state: {
    // github block infos
    // githubData: {},
    // githubZip: {},
    get stargazer() {
      return state.githubData.stargazers_count ? `${state.githubData.stargazers_count} Stars` : '';
    },
    get zipText() {
      return state.githubZip.name ? `Télécharger la dernière version (${state.githubZip.name})` : '';
    },
    get repoUrl() {
      return state.githubData.html_url ? state.githubData.html_url : '';
    },
    get zipUrl() {
      return state.githubZip.zipball_url ? state.githubZip.zipball_url : '';
    }
  },
  actions: {
    // initGithub: async () => {
    // 	const data = await $fetch('https://api.github.com/repos/WP-Performance/press-wind');
    // 	if (data) {
    // 		state.githubData = data;
    // 	}
    // 	const dataZip = await $fetch(
    // 		'https://api.github.com/repos/WP-Performance/press-wind/tags',
    // 	)
    // 	if (dataZip && dataZip.length > 0) {
    // 		const [d] = dataZip
    // 		state.githubZip = d;
    // 	}
    // }
  }
});

//# sourceMappingURL=view.js.map