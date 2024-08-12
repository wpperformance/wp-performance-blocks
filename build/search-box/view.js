import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ }),

/***/ "./node_modules/throttle-debounce/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
    _ref$noTrailing = _ref.noTrailing,
    noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
    _ref$noLeading = _ref.noLeading,
    noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
    _ref$debounceMode = _ref.debounceMode,
    debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false;

  // Keep track of the last time `callback` was executed.
  var lastExec = 0;

  // Function to clear existing timeout
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }

  // Function to cancel next exec
  function cancel(options) {
    var _ref2 = options || {},
      _ref2$upcomingOnly = _ref2.upcomingOnly,
      upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }

  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }

    // Execute `callback` and update the `lastExec` timestamp.
    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }

    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */
    function clear() {
      timeoutID = undefined;
    }
    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;

  // Return the wrapper function.
  return wrapper;
}

/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */
function debounce (delay, callback, options) {
  var _ref = options || {},
    _ref$atBegin = _ref.atBegin,
    atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}


//# sourceMappingURL=index.js.map


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
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
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
/*!********************************!*\
  !*** ./src/search-box/view.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/esm/index.js");



/** create new directive for html */
const {
  directive
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.privateApis)("I acknowledge that using private APIs means my theme or plugin will inevitably break in the next version of WordPress.");
directive("html", ({
  directives: {
    html
  },
  element,
  evaluate
}) => {
  const entry = html.find(({
    suffix
  }) => suffix === "default");
  if (!entry) {
    element.props.children = null;
    return;
  }
  try {
    const result = evaluate(entry);
    element.props.dangerouslySetInnerHTML = typeof result === "object" ? null : {
      __html: result
    };
  } catch (e) {
    element.props.children = null;
  }
});

/**
 * Search call function
 */
const search = async ({
  url,
  index,
  token,
  query,
  filters
}) => {
  if (!url || !token || !index) {
    throw new Error("Missing required parameters");
  }
  let data = null;

  // init body
  const body = {
    q: query,
    limit: 10,
    facets: ["categories"],
    matchingStrategy: "frequency",
    attributesToHighlight: ["title", "excerpt"]
  };
  try {
    // add filters if any
    if (filters.length > 0) {
      body.filter = [filters.map(f => `${f.key}='${f.value}'`)];
    }
    const response = await fetch(`${url}/indexes/${index}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
    data = await response.json();
  } catch (e) {
    throw e;
  }
  return data;
};
const {
  state,
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("wp-performance/search", {
  state: {
    // open or close search
    open: false,
    // search query
    q: "",
    // item selected for keyboard navigation
    selected: -1,
    // search results
    hasSearch: false,
    results: [],
    facets: [],
    filters: [],
    // for display no results message
    get hasResults() {
      return !state.hasSearch || state.hasSearch && state.results.length > 0;
    },
    // facet checkbox label value
    get facetValue() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return `${context.facet.key} (${context.facet.value})`;
    },
    // define if item is checked
    get isChecked() {
      const {
        attributes
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const cat = attributes["data-cat"];
      const value = attributes.value;
      return state.filters.some(f => f.key === cat && f.value === value);
    }
  },
  actions: {
    /**
     * Open or close
     */
    openSearch() {
      state.open = !state.open;
      if (state.open) {
        actions.setFocus();
      }
    },
    /**
     * Set focus on search input
     * @returns {void}
     */
    setFocus() {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      setTimeout(() => {
        ref.parentNode.querySelector(".wpref-input-search").focus();
      }, 200);
    },
    /**
     * Handle key down events
     * @param {KeyboardEvent} e
     * @returns {void}
     */
    handlerKeyDown(e) {
      // key command + k
      if (e.metaKey && e.key === "k") {
        state.open = true;
        actions.setFocus();
      }

      // key esc
      if (e.key === "Escape") {
        state.open = false;
      }
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
        actions.selectItem(e);
      }
    },
    /**
     * Select item from search results
     * @param {KeyboardEvent} e
     * @returns {void}
     */
    selectItem(e) {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const input = ref.parentNode.querySelector(".wpref-input-search");
      const searchResults = ref.parentNode.querySelector(".wpref-search-results");
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (state.selected <= 0) {
          return input.focus();
        }
        state.selected--;
        searchResults.children[state.selected].focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (state.selected < searchResults.children.length - 1) {
          state.selected++;
        }
        searchResults.children[state.selected].focus();
      } else if (e.key === "Enter") {
        e.preventDefault();
        searchResults.children[state.selected].click();
      }
    },
    addFilter() {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const cat = ref.dataset.cat;
      const value = ref.value;
      if (ref.checked) {
        state.filters.push({
          key: cat,
          value
        });
      } else {
        state.filters = state.filters.filter((f, k) => {
          return f.key !== cat && f.value !== value;
        });
      }
      actions.query();
    },
    /**
     * Handle search input change
     */
    search: (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_1__.throttle)(700, e => {
      state.q = e.target.value;
      actions.query();
    }),
    /**
     * Query search
     */
    async query() {
      state.facets = [];
      if (state.q === "") {
        state.results = [];
        state.filters = [];
        state.hasSearch = false;
        return;
      }
      const data = await search(state.search_url, state.index_name, state.search_key, state.q, state.filters);
      state.index = -1;
      state.hasSearch = true;
      state.results = data.hits;
      // format object to array
      state.facets = Object.keys(data.facetDistribution).map(key => ({
        key,
        value: Object.keys(data.facetDistribution[key]).map(k => ({
          parentKey: key,
          key: k,
          value: data.facetDistribution[key][k]
        }))
      }));
    }
  }
},
// lock store to avoid communication with other blocks
{
  lock: true
});

//# sourceMappingURL=view.js.map