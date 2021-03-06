/*! react-redux-firebase.js v3.1.2 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactReduxFirebase"] = factory(require("prop-types"), require("react"));
	else
		root["ReactReduxFirebase"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */\nvar ReactIs = __webpack_require__(/*! react-is */ \"./node_modules/hoist-non-react-statics/node_modules/react-is/index.js\");\nvar REACT_STATICS = {\n    childContextTypes: true,\n    contextType: true,\n    contextTypes: true,\n    defaultProps: true,\n    displayName: true,\n    getDefaultProps: true,\n    getDerivedStateFromError: true,\n    getDerivedStateFromProps: true,\n    mixins: true,\n    propTypes: true,\n    type: true\n};\n\nvar KNOWN_STATICS = {\n    name: true,\n    length: true,\n    prototype: true,\n    caller: true,\n    callee: true,\n    arguments: true,\n    arity: true\n};\n\nvar FORWARD_REF_STATICS = {\n    '$$typeof': true,\n    render: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true\n};\n\nvar MEMO_STATICS = {\n    '$$typeof': true,\n    compare: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true,\n    type: true\n};\n\nvar TYPE_STATICS = {};\nTYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;\n\nfunction getStatics(component) {\n    if (ReactIs.isMemo(component)) {\n        return MEMO_STATICS;\n    }\n    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;\n}\n\nvar defineProperty = Object.defineProperty;\nvar getOwnPropertyNames = Object.getOwnPropertyNames;\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar getPrototypeOf = Object.getPrototypeOf;\nvar objectPrototype = Object.prototype;\n\nfunction hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {\n    if (typeof sourceComponent !== 'string') {\n        // don't hoist over string (html) components\n\n        if (objectPrototype) {\n            var inheritedComponent = getPrototypeOf(sourceComponent);\n            if (inheritedComponent && inheritedComponent !== objectPrototype) {\n                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);\n            }\n        }\n\n        var keys = getOwnPropertyNames(sourceComponent);\n\n        if (getOwnPropertySymbols) {\n            keys = keys.concat(getOwnPropertySymbols(sourceComponent));\n        }\n\n        var targetStatics = getStatics(targetComponent);\n        var sourceStatics = getStatics(sourceComponent);\n\n        for (var i = 0; i < keys.length; ++i) {\n            var key = keys[i];\n            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {\n                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);\n                try {\n                    // Avoid failures from read-only properties\n                    defineProperty(targetComponent, key, descriptor);\n                } catch (e) {}\n            }\n        }\n\n        return targetComponent;\n    }\n\n    return targetComponent;\n}\n\nmodule.exports = hoistNonReactStatics;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js?");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/** @license React v16.9.0\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar hasSymbol = typeof Symbol === 'function' && Symbol.for;\n\nvar REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\nvar REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\nvar REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\nvar REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\nvar REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\nvar REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\nvar REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;\n// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n// (unstable) APIs that have been removed. Can we remove the symbols?\nvar REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;\nvar REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;\nvar REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\nvar REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;\nvar REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;\nvar REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;\nvar REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;\nvar REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;\n\nfunction isValidElementType(type) {\n  return typeof type === 'string' || typeof type === 'function' ||\n  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);\n}\n\n/**\n * Forked from fbjs/warning:\n * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js\n *\n * Only change is we use console.warn instead of console.error,\n * and do nothing when 'console' is not supported.\n * This really simplifies the code.\n * ---\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar lowPriorityWarning = function () {};\n\n{\n  var printWarning = function (format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n    if (typeof console !== 'undefined') {\n      console.warn(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  lowPriorityWarning = function (condition, format) {\n    if (format === undefined) {\n      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nvar lowPriorityWarning$1 = lowPriorityWarning;\n\nfunction typeOf(object) {\n  if (typeof object === 'object' && object !== null) {\n    var $$typeof = object.$$typeof;\n    switch ($$typeof) {\n      case REACT_ELEMENT_TYPE:\n        var type = object.type;\n\n        switch (type) {\n          case REACT_ASYNC_MODE_TYPE:\n          case REACT_CONCURRENT_MODE_TYPE:\n          case REACT_FRAGMENT_TYPE:\n          case REACT_PROFILER_TYPE:\n          case REACT_STRICT_MODE_TYPE:\n          case REACT_SUSPENSE_TYPE:\n            return type;\n          default:\n            var $$typeofType = type && type.$$typeof;\n\n            switch ($$typeofType) {\n              case REACT_CONTEXT_TYPE:\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_PROVIDER_TYPE:\n                return $$typeofType;\n              default:\n                return $$typeof;\n            }\n        }\n      case REACT_LAZY_TYPE:\n      case REACT_MEMO_TYPE:\n      case REACT_PORTAL_TYPE:\n        return $$typeof;\n    }\n  }\n\n  return undefined;\n}\n\n// AsyncMode is deprecated along with isAsyncMode\nvar AsyncMode = REACT_ASYNC_MODE_TYPE;\nvar ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\nvar ContextConsumer = REACT_CONTEXT_TYPE;\nvar ContextProvider = REACT_PROVIDER_TYPE;\nvar Element = REACT_ELEMENT_TYPE;\nvar ForwardRef = REACT_FORWARD_REF_TYPE;\nvar Fragment = REACT_FRAGMENT_TYPE;\nvar Lazy = REACT_LAZY_TYPE;\nvar Memo = REACT_MEMO_TYPE;\nvar Portal = REACT_PORTAL_TYPE;\nvar Profiler = REACT_PROFILER_TYPE;\nvar StrictMode = REACT_STRICT_MODE_TYPE;\nvar Suspense = REACT_SUSPENSE_TYPE;\n\nvar hasWarnedAboutDeprecatedIsAsyncMode = false;\n\n// AsyncMode should be deprecated\nfunction isAsyncMode(object) {\n  {\n    if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n      hasWarnedAboutDeprecatedIsAsyncMode = true;\n      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');\n    }\n  }\n  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n}\nfunction isConcurrentMode(object) {\n  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n}\nfunction isContextConsumer(object) {\n  return typeOf(object) === REACT_CONTEXT_TYPE;\n}\nfunction isContextProvider(object) {\n  return typeOf(object) === REACT_PROVIDER_TYPE;\n}\nfunction isElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\nfunction isForwardRef(object) {\n  return typeOf(object) === REACT_FORWARD_REF_TYPE;\n}\nfunction isFragment(object) {\n  return typeOf(object) === REACT_FRAGMENT_TYPE;\n}\nfunction isLazy(object) {\n  return typeOf(object) === REACT_LAZY_TYPE;\n}\nfunction isMemo(object) {\n  return typeOf(object) === REACT_MEMO_TYPE;\n}\nfunction isPortal(object) {\n  return typeOf(object) === REACT_PORTAL_TYPE;\n}\nfunction isProfiler(object) {\n  return typeOf(object) === REACT_PROFILER_TYPE;\n}\nfunction isStrictMode(object) {\n  return typeOf(object) === REACT_STRICT_MODE_TYPE;\n}\nfunction isSuspense(object) {\n  return typeOf(object) === REACT_SUSPENSE_TYPE;\n}\n\nexports.typeOf = typeOf;\nexports.AsyncMode = AsyncMode;\nexports.ConcurrentMode = ConcurrentMode;\nexports.ContextConsumer = ContextConsumer;\nexports.ContextProvider = ContextProvider;\nexports.Element = Element;\nexports.ForwardRef = ForwardRef;\nexports.Fragment = Fragment;\nexports.Lazy = Lazy;\nexports.Memo = Memo;\nexports.Portal = Portal;\nexports.Profiler = Profiler;\nexports.StrictMode = StrictMode;\nexports.Suspense = Suspense;\nexports.isValidElementType = isValidElementType;\nexports.isAsyncMode = isAsyncMode;\nexports.isConcurrentMode = isConcurrentMode;\nexports.isContextConsumer = isContextConsumer;\nexports.isContextProvider = isContextProvider;\nexports.isElement = isElement;\nexports.isForwardRef = isForwardRef;\nexports.isFragment = isFragment;\nexports.isLazy = isLazy;\nexports.isMemo = isMemo;\nexports.isPortal = isPortal;\nexports.isProfiler = isProfiler;\nexports.isStrictMode = isStrictMode;\nexports.isSuspense = isSuspense;\n  })();\n}\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js?");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js\");\n}\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/hoist-non-react-statics/node_modules/react-is/index.js?");

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Casts `value` as an array if it's not one.\n *\n * @static\n * @memberOf _\n * @since 4.4.0\n * @category Lang\n * @param {*} value The value to inspect.\n * @returns {Array} Returns the cast array.\n * @example\n *\n * _.castArray(1);\n * // => [1]\n *\n * _.castArray({ 'a': 1 });\n * // => [{ 'a': 1 }]\n *\n * _.castArray('abc');\n * // => ['abc']\n *\n * _.castArray(null);\n * // => [null]\n *\n * _.castArray(undefined);\n * // => [undefined]\n *\n * _.castArray();\n * // => []\n *\n * var array = [1, 2, 3];\n * console.log(_.castArray(array) === array);\n * // => true\n */\nfunction castArray() {\n  if (!arguments.length) {\n    return [];\n  }\n  var value = arguments[0];\n  return isArray(value) ? value : [value];\n}\n\nmodule.exports = castArray;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_SetCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\nmodule.exports = apply;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_apply.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_arrayEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n\n/**\n * A specialized version of `_.includes` for arrays without support for\n * specifying an index to search from.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludes(array, value) {\n  var length = array == null ? 0 : array.length;\n  return !!length && baseIndexOf(array, value, 0) > -1;\n}\n\nmodule.exports = arrayIncludes;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_arrayIncludes.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like `arrayIncludes` except that it accepts a comparator.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @param {Function} comparator The comparator invoked per element.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludesWith(array, value, comparator) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (comparator(value, array[index])) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arrayIncludesWith;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_arrayIncludesWith.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_arraySome.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseProperty = __webpack_require__(/*! ./_baseProperty */ \"./node_modules/lodash/_baseProperty.js\");\n\n/**\n * Gets the size of an ASCII `string`.\n *\n * @private\n * @param {string} string The string inspect.\n * @returns {number} Returns the string size.\n */\nvar asciiSize = baseProperty('length');\n\nmodule.exports = asciiSize;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_asciiSize.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts an ASCII `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction asciiToArray(string) {\n  return string.split('');\n}\n\nmodule.exports = asciiToArray;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_asciiToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * This function is like `assignValue` except that it doesn't assign\n * `undefined` values.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignMergeValue(object, key, value) {\n  if ((value !== undefined && !eq(object[key], value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignMergeValue;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_assignMergeValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignValue;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_assignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.assign` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return object && copyObject(source, keys(source), object);\n}\n\nmodule.exports = baseAssign;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseAssign.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\");\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\nmodule.exports = baseAssignValue;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseAssignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseClone.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Built-in value references. */\nvar objectCreate = Object.create;\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} proto The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(proto) {\n    if (!isObject(proto)) {\n      return {};\n    }\n    if (objectCreate) {\n      return objectCreate(proto);\n    }\n    object.prototype = proto;\n    var result = new object;\n    object.prototype = undefined;\n    return result;\n  };\n}());\n\nmodule.exports = baseCreate;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseDifference.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ \"./node_modules/lodash/_arrayIncludes.js\"),\n    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ \"./node_modules/lodash/_arrayIncludesWith.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * The base implementation of methods like `_.difference` without support\n * for excluding multiple arrays or iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Array} values The values to exclude.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of filtered values.\n */\nfunction baseDifference(array, values, iteratee, comparator) {\n  var index = -1,\n      includes = arrayIncludes,\n      isCommon = true,\n      length = array.length,\n      result = [],\n      valuesLength = values.length;\n\n  if (!length) {\n    return result;\n  }\n  if (iteratee) {\n    values = arrayMap(values, baseUnary(iteratee));\n  }\n  if (comparator) {\n    includes = arrayIncludesWith;\n    isCommon = false;\n  }\n  else if (values.length >= LARGE_ARRAY_SIZE) {\n    includes = cacheHas;\n    isCommon = false;\n    values = new SetCache(values);\n  }\n  outer:\n  while (++index < length) {\n    var value = array[index],\n        computed = iteratee == null ? value : iteratee(value);\n\n    value = (comparator || value !== 0) ? value : 0;\n    if (isCommon && computed === computed) {\n      var valuesIndex = valuesLength;\n      while (valuesIndex--) {\n        if (values[valuesIndex] === computed) {\n          continue outer;\n        }\n      }\n      result.push(value);\n    }\n    else if (!includes(values, computed, comparator)) {\n      result.push(value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseDifference;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseDifference.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ \"./node_modules/lodash/_isFlattenable.js\");\n\n/**\n * The base implementation of `_.flatten` with support for restricting flattening.\n *\n * @private\n * @param {Array} array The array to flatten.\n * @param {number} depth The maximum recursion depth.\n * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.\n * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.\n * @param {Array} [result=[]] The initial result value.\n * @returns {Array} Returns the new flattened array.\n */\nfunction baseFlatten(array, depth, predicate, isStrict, result) {\n  var index = -1,\n      length = array.length;\n\n  predicate || (predicate = isFlattenable);\n  result || (result = []);\n\n  while (++index < length) {\n    var value = array[index];\n    if (depth > 0 && predicate(value)) {\n      if (depth > 1) {\n        // Recursively flatten arrays (susceptible to call stack limits).\n        baseFlatten(value, depth - 1, predicate, isStrict, result);\n      } else {\n        arrayPush(result, value);\n      }\n    } else if (!isStrict) {\n      result[result.length] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseFlatten;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseFlatten.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ \"./node_modules/lodash/_createBaseFor.js\");\n\n/**\n * The base implementation of `baseForOwn` which iterates over `object`\n * properties returned by `keysFunc` and invokes `iteratee` for each property.\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.forOwn` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForOwn(object, iteratee) {\n  return object && baseFor(object, iteratee, keys);\n}\n\nmodule.exports = baseForOwn;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseForOwn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.hasIn` without support for deep paths.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {Array|string} key The key to check.\n * @returns {boolean} Returns `true` if `key` exists, else `false`.\n */\nfunction baseHasIn(object, key) {\n  return object != null && key in Object(object);\n}\n\nmodule.exports = baseHasIn;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseHasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.indexOf` which performs strict equality\n * comparisons of values, i.e. `===`.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction strictIndexOf(array, value, fromIndex) {\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = strictIndexOf;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ \"./node_modules/lodash/_baseIsEqualDeep.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * The base implementation of `_.isEqual` which supports partial comparisons\n * and tracks traversed objects.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Unordered comparison\n *  2 - Partial comparison\n * @param {Function} [customizer] The function to customize comparisons.\n * @param {Object} [stack] Tracks traversed `value` and `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, bitmask, customizer, stack) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);\n}\n\nmodule.exports = baseIsEqual;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseIsEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    equalByTag = __webpack_require__(/*! ./_equalByTag */ \"./node_modules/lodash/_equalByTag.js\"),\n    equalObjects = __webpack_require__(/*! ./_equalObjects */ \"./node_modules/lodash/_equalObjects.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} [stack] Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = objIsArr ? arrayTag : getTag(object),\n      othTag = othIsArr ? arrayTag : getTag(other);\n\n  objTag = objTag == argsTag ? objectTag : objTag;\n  othTag = othTag == argsTag ? objectTag : othTag;\n\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && isBuffer(object)) {\n    if (!isBuffer(other)) {\n      return false;\n    }\n    objIsArr = true;\n    objIsObj = false;\n  }\n  if (isSameTag && !objIsObj) {\n    stack || (stack = new Stack);\n    return (objIsArr || isTypedArray(object))\n      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)\n      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);\n  }\n  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      var objUnwrapped = objIsWrapped ? object.value() : object,\n          othUnwrapped = othIsWrapped ? other.value() : other;\n\n      stack || (stack = new Stack);\n      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  stack || (stack = new Stack);\n  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);\n}\n\nmodule.exports = baseIsEqualDeep;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseIsEqualDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseIteratee.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"./node_modules/lodash/_assignMergeValue.js\"),\n    baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ \"./node_modules/lodash/_baseMergeDeep.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"./node_modules/lodash/_safeGet.js\");\n\n/**\n * The base implementation of `_.merge` without support for multiple sources.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} [customizer] The function to customize merged values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMerge(object, source, srcIndex, customizer, stack) {\n  if (object === source) {\n    return;\n  }\n  baseFor(source, function(srcValue, key) {\n    stack || (stack = new Stack);\n    if (isObject(srcValue)) {\n      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);\n    }\n    else {\n      var newValue = customizer\n        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)\n        : undefined;\n\n      if (newValue === undefined) {\n        newValue = srcValue;\n      }\n      assignMergeValue(object, key, newValue);\n    }\n  }, keysIn);\n}\n\nmodule.exports = baseMerge;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseMerge.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"./node_modules/lodash/_assignMergeValue.js\"),\n    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ \"./node_modules/lodash/_cloneBuffer.js\"),\n    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ \"./node_modules/lodash/_cloneTypedArray.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ \"./node_modules/lodash/_initCloneObject.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/lodash/isPlainObject.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"./node_modules/lodash/_safeGet.js\"),\n    toPlainObject = __webpack_require__(/*! ./toPlainObject */ \"./node_modules/lodash/toPlainObject.js\");\n\n/**\n * A specialized version of `baseMerge` for arrays and objects which performs\n * deep merges and tracks traversed objects enabling objects with circular\n * references to be merged.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {string} key The key of the value to merge.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} mergeFunc The function to merge values.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {\n  var objValue = safeGet(object, key),\n      srcValue = safeGet(source, key),\n      stacked = stack.get(srcValue);\n\n  if (stacked) {\n    assignMergeValue(object, key, stacked);\n    return;\n  }\n  var newValue = customizer\n    ? customizer(objValue, srcValue, (key + ''), object, source, stack)\n    : undefined;\n\n  var isCommon = newValue === undefined;\n\n  if (isCommon) {\n    var isArr = isArray(srcValue),\n        isBuff = !isArr && isBuffer(srcValue),\n        isTyped = !isArr && !isBuff && isTypedArray(srcValue);\n\n    newValue = srcValue;\n    if (isArr || isBuff || isTyped) {\n      if (isArray(objValue)) {\n        newValue = objValue;\n      }\n      else if (isArrayLikeObject(objValue)) {\n        newValue = copyArray(objValue);\n      }\n      else if (isBuff) {\n        isCommon = false;\n        newValue = cloneBuffer(srcValue, true);\n      }\n      else if (isTyped) {\n        isCommon = false;\n        newValue = cloneTypedArray(srcValue, true);\n      }\n      else {\n        newValue = [];\n      }\n    }\n    else if (isPlainObject(srcValue) || isArguments(srcValue)) {\n      newValue = objValue;\n      if (isArguments(objValue)) {\n        newValue = toPlainObject(objValue);\n      }\n      else if (!isObject(objValue) || isFunction(objValue)) {\n        newValue = initCloneObject(srcValue);\n      }\n    }\n    else {\n      isCommon = false;\n    }\n  }\n  if (isCommon) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    stack.set(srcValue, newValue);\n    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);\n    stack['delete'](srcValue);\n  }\n  assignMergeValue(object, key, newValue);\n}\n\nmodule.exports = baseMergeDeep;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseMergeDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePickBy = __webpack_require__(/*! ./_basePickBy */ \"./node_modules/lodash/_basePickBy.js\"),\n    hasIn = __webpack_require__(/*! ./hasIn */ \"./node_modules/lodash/hasIn.js\");\n\n/**\n * The base implementation of `_.pick` without support for individual\n * property identifiers.\n *\n * @private\n * @param {Object} object The source object.\n * @param {string[]} paths The property paths to pick.\n * @returns {Object} Returns the new object.\n */\nfunction basePick(object, paths) {\n  return basePickBy(object, paths, function(value, path) {\n    return hasIn(object, path);\n  });\n}\n\nmodule.exports = basePick;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_basePick.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\"),\n    baseSet = __webpack_require__(/*! ./_baseSet */ \"./node_modules/lodash/_baseSet.js\"),\n    castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\");\n\n/**\n * The base implementation of  `_.pickBy` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The source object.\n * @param {string[]} paths The property paths to pick.\n * @param {Function} predicate The function invoked per property.\n * @returns {Object} Returns the new object.\n */\nfunction basePickBy(object, paths, predicate) {\n  var index = -1,\n      length = paths.length,\n      result = {};\n\n  while (++index < length) {\n    var path = paths[index],\n        value = baseGet(object, path);\n\n    if (predicate(value, path)) {\n      baseSet(result, castPath(path, object), value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = basePickBy;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_basePickBy.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = baseProperty;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePullAt.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePullAt.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseUnset = __webpack_require__(/*! ./_baseUnset */ \"./node_modules/lodash/_baseUnset.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * The base implementation of `_.pullAt` without support for individual\n * indexes or capturing the removed elements.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {number[]} indexes The indexes of elements to remove.\n * @returns {Array} Returns `array`.\n */\nfunction basePullAt(array, indexes) {\n  var length = array ? indexes.length : 0,\n      lastIndex = length - 1;\n\n  while (length--) {\n    var index = indexes[length];\n    if (length == lastIndex || index !== previous) {\n      var previous = index;\n      if (isIndex(index)) {\n        splice.call(array, index, 1);\n      } else {\n        baseUnset(array, index);\n      }\n    }\n  }\n  return array;\n}\n\nmodule.exports = basePullAt;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_basePullAt.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    overRest = __webpack_require__(/*! ./_overRest */ \"./node_modules/lodash/_overRest.js\"),\n    setToString = __webpack_require__(/*! ./_setToString */ \"./node_modules/lodash/_setToString.js\");\n\n/**\n * The base implementation of `_.rest` which doesn't validate or coerce arguments.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n */\nfunction baseRest(func, start) {\n  return setToString(overRest(func, start, identity), func + '');\n}\n\nmodule.exports = baseRest;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.set`.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @param {Function} [customizer] The function to customize path creation.\n * @returns {Object} Returns `object`.\n */\nfunction baseSet(object, path, value, customizer) {\n  if (!isObject(object)) {\n    return object;\n  }\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      lastIndex = length - 1,\n      nested = object;\n\n  while (nested != null && ++index < length) {\n    var key = toKey(path[index]),\n        newValue = value;\n\n    if (index != lastIndex) {\n      var objValue = nested[key];\n      newValue = customizer ? customizer(objValue, key, nested) : undefined;\n      if (newValue === undefined) {\n        newValue = isObject(objValue)\n          ? objValue\n          : (isIndex(path[index + 1]) ? [] : {});\n      }\n    }\n    assignValue(nested, key, newValue);\n    nested = nested[key];\n  }\n  return object;\n}\n\nmodule.exports = baseSet;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.slice` without an iteratee call guard.\n *\n * @private\n * @param {Array} array The array to slice.\n * @param {number} [start=0] The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the slice of `array`.\n */\nfunction baseSlice(array, start, end) {\n  var index = -1,\n      length = array.length;\n\n  if (start < 0) {\n    start = -start > length ? 0 : (length + start);\n  }\n  end = end > length ? length : end;\n  if (end < 0) {\n    end += length;\n  }\n  length = start > end ? 0 : ((end - start) >>> 0);\n  start >>>= 0;\n\n  var result = Array(length);\n  while (++index < length) {\n    result[index] = array[index + start];\n  }\n  return result;\n}\n\nmodule.exports = baseSlice;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    last = __webpack_require__(/*! ./last */ \"./node_modules/lodash/last.js\"),\n    parent = __webpack_require__(/*! ./_parent */ \"./node_modules/lodash/_parent.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.unset`.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {Array|string} path The property path to unset.\n * @returns {boolean} Returns `true` if the property is deleted, else `false`.\n */\nfunction baseUnset(object, path) {\n  path = castPath(path, object);\n  object = parent(object, path);\n  return object == null || delete object[toKey(last(path))];\n}\n\nmodule.exports = baseUnset;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_baseUnset.js?");

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n\n/**\n * A specialized version of `_.includes` for arrays without support for\n * specifying an index to search from.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludes(array, value) {\n  var length = array == null ? 0 : array.length;\n  return !!length && baseIndexOf(array, value, 0) > -1;\n}\n\nmodule.exports = arrayIncludes;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_cacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSlice = __webpack_require__(/*! ./_baseSlice */ \"./node_modules/lodash/_baseSlice.js\");\n\n/**\n * Casts `array` to a slice if it's needed.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {number} start The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the cast slice.\n */\nfunction castSlice(array, start, end) {\n  var length = array.length;\n  end = end === undefined ? length : end;\n  return (!start && end >= length) ? array : baseSlice(array, start, end);\n}\n\nmodule.exports = castSlice;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_castSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\");\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\nmodule.exports = cloneArrayBuffer;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_cloneArrayBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var length = buffer.length,\n      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);\n\n  buffer.copy(result);\n  return result;\n}\n\nmodule.exports = cloneBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_cloneBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\nmodule.exports = cloneTypedArray;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_cloneTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = copyArray;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_copyArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\");\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  var isNew = !object;\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    if (newValue === undefined) {\n      newValue = source[key];\n    }\n    if (isNew) {\n      baseAssignValue(object, key, newValue);\n    } else {\n      assignValue(object, key, newValue);\n    }\n  }\n  return object;\n}\n\nmodule.exports = copyObject;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_copyObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ \"./node_modules/lodash/_isIterateeCall.js\");\n\n/**\n * Creates a function like `_.assign`.\n *\n * @private\n * @param {Function} assigner The function to assign values.\n * @returns {Function} Returns the new assigner function.\n */\nfunction createAssigner(assigner) {\n  return baseRest(function(object, sources) {\n    var index = -1,\n        length = sources.length,\n        customizer = length > 1 ? sources[length - 1] : undefined,\n        guard = length > 2 ? sources[2] : undefined;\n\n    customizer = (assigner.length > 3 && typeof customizer == 'function')\n      ? (length--, customizer)\n      : undefined;\n\n    if (guard && isIterateeCall(sources[0], sources[1], guard)) {\n      customizer = length < 3 ? undefined : customizer;\n      length = 1;\n    }\n    object = Object(object);\n    while (++index < length) {\n      var source = sources[index];\n      if (source) {\n        assigner(object, source, index, customizer);\n      }\n    }\n    return object;\n  });\n}\n\nmodule.exports = createAssigner;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_createAssigner.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a base function for methods like `_.forIn` and `_.forOwn`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var index = -1,\n        iterable = Object(object),\n        props = keysFunc(object),\n        length = props.length;\n\n    while (length--) {\n      var key = props[fromRight ? length : ++index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_createBaseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castSlice = __webpack_require__(/*! ./_castSlice */ \"./node_modules/lodash/_castSlice.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    stringToArray = __webpack_require__(/*! ./_stringToArray */ \"./node_modules/lodash/_stringToArray.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Creates a function like `_.lowerFirst`.\n *\n * @private\n * @param {string} methodName The name of the `String` case method to use.\n * @returns {Function} Returns the new case function.\n */\nfunction createCaseFirst(methodName) {\n  return function(string) {\n    string = toString(string);\n\n    var strSymbols = hasUnicode(string)\n      ? stringToArray(string)\n      : undefined;\n\n    var chr = strSymbols\n      ? strSymbols[0]\n      : string.charAt(0);\n\n    var trailing = strSymbols\n      ? castSlice(strSymbols, 1).join('')\n      : string.slice(1);\n\n    return chr[methodName]() + trailing;\n  };\n}\n\nmodule.exports = createCaseFirst;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_createCaseFirst.js?");

/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseCreate = __webpack_require__(/*! ./_baseCreate */ \"./node_modules/lodash/_baseCreate.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Creates a function that produces an instance of `Ctor` regardless of\n * whether it was invoked as part of a `new` expression or by `call` or `apply`.\n *\n * @private\n * @param {Function} Ctor The constructor to wrap.\n * @returns {Function} Returns the new wrapped function.\n */\nfunction createCtor(Ctor) {\n  return function() {\n    // Use a `switch` statement to work with class constructors. See\n    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist\n    // for more details.\n    var args = arguments;\n    switch (args.length) {\n      case 0: return new Ctor;\n      case 1: return new Ctor(args[0]);\n      case 2: return new Ctor(args[0], args[1]);\n      case 3: return new Ctor(args[0], args[1], args[2]);\n      case 4: return new Ctor(args[0], args[1], args[2], args[3]);\n      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);\n      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);\n      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);\n    }\n    var thisBinding = baseCreate(Ctor.prototype),\n        result = Ctor.apply(thisBinding, args);\n\n    // Mimic the constructor's `return` behavior.\n    // See https://es5.github.io/#x13.2.2 for more details.\n    return isObject(result) ? result : thisBinding;\n  };\n}\n\nmodule.exports = createCtor;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_createCtor.js?");

/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\"),\n    createCtor = __webpack_require__(/*! ./_createCtor */ \"./node_modules/lodash/_createCtor.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to compose bitmasks for function metadata. */\nvar WRAP_BIND_FLAG = 1;\n\n/**\n * Creates a function that wraps `func` to invoke it with the `this` binding\n * of `thisArg` and `partials` prepended to the arguments it receives.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {number} bitmask The bitmask flags. See `createWrap` for more details.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} partials The arguments to prepend to those provided to\n *  the new function.\n * @returns {Function} Returns the new wrapped function.\n */\nfunction createPartial(func, bitmask, thisArg, partials) {\n  var isBind = bitmask & WRAP_BIND_FLAG,\n      Ctor = createCtor(func);\n\n  function wrapper() {\n    var argsIndex = -1,\n        argsLength = arguments.length,\n        leftIndex = -1,\n        leftLength = partials.length,\n        args = Array(leftLength + argsLength),\n        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;\n\n    while (++leftIndex < leftLength) {\n      args[leftIndex] = partials[leftIndex];\n    }\n    while (argsLength--) {\n      args[leftIndex++] = arguments[++argsIndex];\n    }\n    return apply(fn, isBind ? thisArg : this, args);\n  }\n  return wrapper;\n}\n\nmodule.exports = createPartial;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_createWrap.js?");

/***/ }),

/***/ "./node_modules/lodash/_customDefaultsMerge.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_customDefaultsMerge.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"./node_modules/lodash/_baseMerge.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source\n * objects into destination objects that are passed thru.\n *\n * @private\n * @param {*} objValue The destination value.\n * @param {*} srcValue The source value.\n * @param {string} key The key of the property to merge.\n * @param {Object} object The parent object of `objValue`.\n * @param {Object} source The parent object of `srcValue`.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n * @returns {*} Returns the value to assign.\n */\nfunction customDefaultsMerge(objValue, srcValue, key, object, source, stack) {\n  if (isObject(objValue) && isObject(srcValue)) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    stack.set(srcValue, objValue);\n    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);\n    stack['delete'](srcValue);\n  }\n  return objValue;\n}\n\nmodule.exports = customDefaultsMerge;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_customDefaultsMerge.js?");

/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\n\n/**\n * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain\n * objects.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {string} key The key of the property to inspect.\n * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.\n */\nfunction customOmitClone(value) {\n  return isPlainObject(value) ? undefined : value;\n}\n\nmodule.exports = customOmitClone;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_customOmitClone.js?");

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arraySome = __webpack_require__(/*! ./_arraySome */ \"./node_modules/lodash/_arraySome.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `array` and `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {\n    return false;\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(array);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var index = -1,\n      result = true,\n      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;\n\n  stack.set(array, other);\n  stack.set(other, array);\n\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, arrValue, index, other, array, stack)\n        : customizer(arrValue, othValue, index, array, other, stack);\n    }\n    if (compared !== undefined) {\n      if (compared) {\n        continue;\n      }\n      result = false;\n      break;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (seen) {\n      if (!arraySome(other, function(othValue, othIndex) {\n            if (!cacheHas(seen, othIndex) &&\n                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {\n              return seen.push(othIndex);\n            }\n          })) {\n        result = false;\n        break;\n      }\n    } else if (!(\n          arrValue === othValue ||\n            equalFunc(arrValue, othValue, bitmask, customizer, stack)\n        )) {\n      result = false;\n      break;\n    }\n  }\n  stack['delete'](array);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalArrays;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_equalArrays.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_equalByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      objProps = getAllKeys(object),\n      objLength = objProps.length,\n      othProps = getAllKeys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isPartial) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(object);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var result = true;\n  stack.set(object, other);\n  stack.set(other, object);\n\n  var skipCtor = isPartial;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, objValue, key, other, object, stack)\n        : customizer(objValue, othValue, key, object, other, stack);\n    }\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(compared === undefined\n          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))\n          : compared\n        )) {\n      result = false;\n      break;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (result && !skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      result = false;\n    }\n  }\n  stack['delete'](object);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalObjects;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_equalObjects.js?");

/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var flatten = __webpack_require__(/*! ./flatten */ \"./node_modules/lodash/flatten.js\"),\n    overRest = __webpack_require__(/*! ./_overRest */ \"./node_modules/lodash/_overRest.js\"),\n    setToString = __webpack_require__(/*! ./_setToString */ \"./node_modules/lodash/_setToString.js\");\n\n/**\n * A specialized version of `baseRest` which flattens the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @returns {Function} Returns the new function.\n */\nfunction flatRest(func) {\n  return setToString(overRest(func, undefined, flatten), func + '');\n}\n\nmodule.exports = flatRest;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_flatRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_getAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = nativeKeysIn;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_getAllKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Checks if `path` exists on `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @param {Function} hasFunc The function to check properties.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n */\nfunction hasPath(object, path, hasFunc) {\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      result = false;\n\n  while (++index < length) {\n    var key = toKey(path[index]);\n    if (!(result = object != null && hasFunc(object, key))) {\n      break;\n    }\n    object = object[key];\n  }\n  if (result || ++index != length) {\n    return result;\n  }\n  length = object == null ? 0 : object.length;\n  return !!length && isLength(length) && isIndex(key, length) &&\n    (isArray(object) || isArguments(object));\n}\n\nmodule.exports = hasPath;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_hasPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_hasUnicode.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseCreate = __webpack_require__(/*! ./_baseCreate */ \"./node_modules/lodash/_baseCreate.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\");\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\nmodule.exports = initCloneObject;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_initCloneObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/** Built-in value references. */\nvar spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;\n\n/**\n * Checks if `value` is a flattenable `arguments` object or array.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.\n */\nfunction isFlattenable(value) {\n  return isArray(value) || isArguments(value) ||\n    !!(spreadableSymbol && value && value[spreadableSymbol]);\n}\n\nmodule.exports = isFlattenable;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_isFlattenable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_isIterateeCall.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * A specialized version of `baseRest` which transforms the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @param {Function} transform The rest array transform.\n * @returns {Function} Returns the new function.\n */\nfunction overRest(func, start, transform) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = transform(array);\n    return apply(func, this, otherArgs);\n  };\n}\n\nmodule.exports = overRest;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_overRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\"),\n    baseSlice = __webpack_require__(/*! ./_baseSlice */ \"./node_modules/lodash/_baseSlice.js\");\n\n/**\n * Gets the parent value at `path` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array} path The path to get the parent value of.\n * @returns {*} Returns the parent value.\n */\nfunction parent(object, path) {\n  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));\n}\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_parent.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key`, unless `key` is \"__proto__\" or \"constructor\".\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction safeGet(object, key) {\n  if (key === 'constructor' && typeof object[key] === 'function') {\n    return;\n  }\n\n  if (key == '__proto__') {\n    return;\n  }\n\n  return object[key];\n}\n\nmodule.exports = safeGet;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_safeGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_setToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiSize = __webpack_require__(/*! ./_asciiSize */ \"./node_modules/lodash/_asciiSize.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ \"./node_modules/lodash/_unicodeSize.js\");\n\n/**\n * Gets the number of symbols in `string`.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {number} Returns the string size.\n */\nfunction stringSize(string) {\n  return hasUnicode(string)\n    ? unicodeSize(string)\n    : asciiSize(string);\n}\n\nmodule.exports = stringSize;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_stringSize.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ \"./node_modules/lodash/_asciiToArray.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ \"./node_modules/lodash/_unicodeToArray.js\");\n\n/**\n * Converts `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction stringToArray(string) {\n  return hasUnicode(string)\n    ? unicodeToArray(string)\n    : asciiToArray(string);\n}\n\nmodule.exports = stringToArray;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_stringToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseProperty = __webpack_require__(/*! ./_baseProperty */ \"./node_modules/lodash/_baseProperty.js\");\n\n/**\n * Gets the size of an ASCII `string`.\n *\n * @private\n * @param {string} string The string inspect.\n * @returns {number} Returns the string size.\n */\nvar asciiSize = baseProperty('length');\n\nmodule.exports = asciiSize;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_unicodeSize.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts an ASCII `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction asciiToArray(string) {\n  return string.split('');\n}\n\nmodule.exports = asciiToArray;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/_unicodeToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/ary.js":
/*!************************************!*\
  !*** ./node_modules/lodash/ary.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createWrap = __webpack_require__(/*! ./_createWrap */ \"./node_modules/lodash/_createWrap.js\");\n\n/** Used to compose bitmasks for function metadata. */\nvar WRAP_ARY_FLAG = 128;\n\n/**\n * Creates a function that invokes `func`, with up to `n` arguments,\n * ignoring any additional arguments.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Function\n * @param {Function} func The function to cap arguments for.\n * @param {number} [n=func.length] The arity cap.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {Function} Returns the new capped function.\n * @example\n *\n * _.map(['6', '8', '10'], _.ary(parseInt, 1));\n * // => [6, 8, 10]\n */\nfunction ary(func, n, guard) {\n  n = guard ? undefined : n;\n  n = (func && n == null) ? func.length : n;\n  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);\n}\n\nmodule.exports = ary;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/ary.js?");

/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"./node_modules/lodash/_createAssigner.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns own enumerable string keyed properties of source objects to the\n * destination object. Source objects are applied from left to right.\n * Subsequent sources overwrite property assignments of previous sources.\n *\n * **Note:** This method mutates `object` and is loosely based on\n * [`Object.assign`](https://mdn.io/Object/assign).\n *\n * @static\n * @memberOf _\n * @since 0.10.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @see _.assignIn\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * function Bar() {\n *   this.c = 3;\n * }\n *\n * Foo.prototype.b = 2;\n * Bar.prototype.d = 4;\n *\n * _.assign({ 'a': 0 }, new Foo, new Bar);\n * // => { 'a': 1, 'c': 3 }\n */\nvar assign = createAssigner(function(object, source) {\n  if (isPrototype(source) || isArrayLike(source)) {\n    copyObject(source, keys(source), object);\n    return;\n  }\n  for (var key in source) {\n    if (hasOwnProperty.call(source, key)) {\n      assignValue(object, key, source[key]);\n    }\n  }\n});\n\nmodule.exports = assign;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/assign.js?");

/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\"),\n    upperFirst = __webpack_require__(/*! ./upperFirst */ \"./node_modules/lodash/upperFirst.js\");\n\n/**\n * Converts the first character of `string` to upper case and the remaining\n * to lower case.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to capitalize.\n * @returns {string} Returns the capitalized string.\n * @example\n *\n * _.capitalize('FRED');\n * // => 'Fred'\n */\nfunction capitalize(string) {\n  return upperFirst(toString(string).toLowerCase());\n}\n\nmodule.exports = capitalize;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/capitalize.js?");

/***/ }),

/***/ "./node_modules/lodash/clone.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClone = __webpack_require__(/*! ./_baseClone */ \"./node_modules/lodash/_baseClone.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_SYMBOLS_FLAG = 4;\n\n/**\n * Creates a shallow clone of `value`.\n *\n * **Note:** This method is loosely based on the\n * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)\n * and supports cloning arrays, array buffers, booleans, date objects, maps,\n * numbers, `Object` objects, regexes, sets, strings, symbols, and typed\n * arrays. The own enumerable properties of `arguments` objects are cloned\n * as plain objects. An empty object is returned for uncloneable values such\n * as error objects, functions, DOM nodes, and WeakMaps.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to clone.\n * @returns {*} Returns the cloned value.\n * @see _.cloneDeep\n * @example\n *\n * var objects = [{ 'a': 1 }, { 'b': 2 }];\n *\n * var shallow = _.clone(objects);\n * console.log(shallow[0] === objects[0]);\n * // => true\n */\nfunction clone(value) {\n  return baseClone(value, CLONE_SYMBOLS_FLAG);\n}\n\nmodule.exports = clone;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/clone.js?");

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a function that returns `value`.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {*} value The value to return from the new function.\n * @returns {Function} Returns the new constant function.\n * @example\n *\n * var objects = _.times(2, _.constant({ 'a': 1 }));\n *\n * console.log(objects);\n * // => [{ 'a': 1 }, { 'a': 1 }]\n *\n * console.log(objects[0] === objects[1]);\n * // => true\n */\nfunction constant(value) {\n  return function() {\n    return value;\n  };\n}\n\nmodule.exports = constant;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/constant.js?");

/***/ }),

/***/ "./node_modules/lodash/curry.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/curry.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createWrap = __webpack_require__(/*! ./_createWrap */ \"./node_modules/lodash/_createWrap.js\");\n\n/** Used to compose bitmasks for function metadata. */\nvar WRAP_CURRY_FLAG = 8;\n\n/**\n * Creates a function that accepts arguments of `func` and either invokes\n * `func` returning its result, if at least `arity` number of arguments have\n * been provided, or returns a function that accepts the remaining `func`\n * arguments, and so on. The arity of `func` may be specified if `func.length`\n * is not sufficient.\n *\n * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,\n * may be used as a placeholder for provided arguments.\n *\n * **Note:** This method doesn't set the \"length\" property of curried functions.\n *\n * @static\n * @memberOf _\n * @since 2.0.0\n * @category Function\n * @param {Function} func The function to curry.\n * @param {number} [arity=func.length] The arity of `func`.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {Function} Returns the new curried function.\n * @example\n *\n * var abc = function(a, b, c) {\n *   return [a, b, c];\n * };\n *\n * var curried = _.curry(abc);\n *\n * curried(1)(2)(3);\n * // => [1, 2, 3]\n *\n * curried(1, 2)(3);\n * // => [1, 2, 3]\n *\n * curried(1, 2, 3);\n * // => [1, 2, 3]\n *\n * // Curried with placeholders.\n * curried(1)(_, 3)(2);\n * // => [1, 2, 3]\n */\nfunction curry(func, arity, guard) {\n  arity = guard ? undefined : arity;\n  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);\n  result.placeholder = curry.placeholder;\n  return result;\n}\n\n// Assign default placeholders.\ncurry.placeholder = {};\n\nmodule.exports = curry;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/curry.js?");

/***/ }),

/***/ "./node_modules/lodash/defaultsDeep.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/defaultsDeep.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    customDefaultsMerge = __webpack_require__(/*! ./_customDefaultsMerge */ \"./node_modules/lodash/_customDefaultsMerge.js\"),\n    mergeWith = __webpack_require__(/*! ./mergeWith */ \"./node_modules/lodash/mergeWith.js\");\n\n/**\n * This method is like `_.defaults` except that it recursively assigns\n * default properties.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 3.10.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @see _.defaults\n * @example\n *\n * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });\n * // => { 'a': { 'b': 2, 'c': 3 } }\n */\nvar defaultsDeep = baseRest(function(args) {\n  args.push(undefined, customDefaultsMerge);\n  return apply(mergeWith, undefined, args);\n});\n\nmodule.exports = defaultsDeep;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/defaultsDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/differenceWith.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/differenceWith.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseDifference = __webpack_require__(/*! ./_baseDifference */ \"./node_modules/lodash/_baseDifference.js\"),\n    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\"),\n    last = __webpack_require__(/*! ./last */ \"./node_modules/lodash/last.js\");\n\n/**\n * This method is like `_.difference` except that it accepts `comparator`\n * which is invoked to compare elements of `array` to `values`. The order and\n * references of result values are determined by the first array. The comparator\n * is invoked with two arguments: (arrVal, othVal).\n *\n * **Note:** Unlike `_.pullAllWith`, this method returns a new array.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Array\n * @param {Array} array The array to inspect.\n * @param {...Array} [values] The values to exclude.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of filtered values.\n * @example\n *\n * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\n *\n * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);\n * // => [{ 'x': 2, 'y': 1 }]\n */\nvar differenceWith = baseRest(function(array, values) {\n  var comparator = last(values);\n  if (isArrayLikeObject(comparator)) {\n    comparator = undefined;\n  }\n  return isArrayLikeObject(array)\n    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)\n    : [];\n});\n\nmodule.exports = differenceWith;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/differenceWith.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/filter.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/filter.js?");

/***/ }),

/***/ "./node_modules/lodash/flatMap.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatMap.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\"),\n    map = __webpack_require__(/*! ./map */ \"./node_modules/lodash/map.js\");\n\n/**\n * Creates a flattened array of values by running each element in `collection`\n * thru `iteratee` and flattening the mapped results. The iteratee is invoked\n * with three arguments: (value, index|key, collection).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the new flattened array.\n * @example\n *\n * function duplicate(n) {\n *   return [n, n];\n * }\n *\n * _.flatMap([1, 2], duplicate);\n * // => [1, 1, 2, 2]\n */\nfunction flatMap(collection, iteratee) {\n  return baseFlatten(map(collection, iteratee), 1);\n}\n\nmodule.exports = flatMap;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/flatMap.js?");

/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\");\n\n/**\n * Flattens `array` a single level deep.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {Array} array The array to flatten.\n * @returns {Array} Returns the new flattened array.\n * @example\n *\n * _.flatten([1, [2, [3, [4]], 5]]);\n * // => [1, 2, [3, [4]], 5]\n */\nfunction flatten(array) {\n  var length = array == null ? 0 : array.length;\n  return length ? baseFlatten(array, 1) : [];\n}\n\nmodule.exports = flatten;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/flatten.js?");

/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/forEach.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/_baseConvert.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/fp/_baseConvert.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapping = __webpack_require__(/*! ./_mapping */ \"./node_modules/lodash/fp/_mapping.js\"),\n    fallbackHolder = __webpack_require__(/*! ./placeholder */ \"./node_modules/lodash/fp/placeholder.js\");\n\n/** Built-in value reference. */\nvar push = Array.prototype.push;\n\n/**\n * Creates a function, with an arity of `n`, that invokes `func` with the\n * arguments it receives.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {number} n The arity of the new function.\n * @returns {Function} Returns the new function.\n */\nfunction baseArity(func, n) {\n  return n == 2\n    ? function(a, b) { return func.apply(undefined, arguments); }\n    : function(a) { return func.apply(undefined, arguments); };\n}\n\n/**\n * Creates a function that invokes `func`, with up to `n` arguments, ignoring\n * any additional arguments.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @param {number} n The arity cap.\n * @returns {Function} Returns the new function.\n */\nfunction baseAry(func, n) {\n  return n == 2\n    ? function(a, b) { return func(a, b); }\n    : function(a) { return func(a); };\n}\n\n/**\n * Creates a clone of `array`.\n *\n * @private\n * @param {Array} array The array to clone.\n * @returns {Array} Returns the cloned array.\n */\nfunction cloneArray(array) {\n  var length = array ? array.length : 0,\n      result = Array(length);\n\n  while (length--) {\n    result[length] = array[length];\n  }\n  return result;\n}\n\n/**\n * Creates a function that clones a given object using the assignment `func`.\n *\n * @private\n * @param {Function} func The assignment function.\n * @returns {Function} Returns the new cloner function.\n */\nfunction createCloner(func) {\n  return function(object) {\n    return func({}, object);\n  };\n}\n\n/**\n * A specialized version of `_.spread` which flattens the spread array into\n * the arguments of the invoked `func`.\n *\n * @private\n * @param {Function} func The function to spread arguments over.\n * @param {number} start The start position of the spread.\n * @returns {Function} Returns the new function.\n */\nfunction flatSpread(func, start) {\n  return function() {\n    var length = arguments.length,\n        lastIndex = length - 1,\n        args = Array(length);\n\n    while (length--) {\n      args[length] = arguments[length];\n    }\n    var array = args[start],\n        otherArgs = args.slice(0, start);\n\n    if (array) {\n      push.apply(otherArgs, array);\n    }\n    if (start != lastIndex) {\n      push.apply(otherArgs, args.slice(start + 1));\n    }\n    return func.apply(this, otherArgs);\n  };\n}\n\n/**\n * Creates a function that wraps `func` and uses `cloner` to clone the first\n * argument it receives.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} cloner The function to clone arguments.\n * @returns {Function} Returns the new immutable function.\n */\nfunction wrapImmutable(func, cloner) {\n  return function() {\n    var length = arguments.length;\n    if (!length) {\n      return;\n    }\n    var args = Array(length);\n    while (length--) {\n      args[length] = arguments[length];\n    }\n    var result = args[0] = cloner.apply(undefined, args);\n    func.apply(undefined, args);\n    return result;\n  };\n}\n\n/**\n * The base implementation of `convert` which accepts a `util` object of methods\n * required to perform conversions.\n *\n * @param {Object} util The util object.\n * @param {string} name The name of the function to convert.\n * @param {Function} func The function to convert.\n * @param {Object} [options] The options object.\n * @param {boolean} [options.cap=true] Specify capping iteratee arguments.\n * @param {boolean} [options.curry=true] Specify currying.\n * @param {boolean} [options.fixed=true] Specify fixed arity.\n * @param {boolean} [options.immutable=true] Specify immutable operations.\n * @param {boolean} [options.rearg=true] Specify rearranging arguments.\n * @returns {Function|Object} Returns the converted function or object.\n */\nfunction baseConvert(util, name, func, options) {\n  var isLib = typeof name == 'function',\n      isObj = name === Object(name);\n\n  if (isObj) {\n    options = func;\n    func = name;\n    name = undefined;\n  }\n  if (func == null) {\n    throw new TypeError;\n  }\n  options || (options = {});\n\n  var config = {\n    'cap': 'cap' in options ? options.cap : true,\n    'curry': 'curry' in options ? options.curry : true,\n    'fixed': 'fixed' in options ? options.fixed : true,\n    'immutable': 'immutable' in options ? options.immutable : true,\n    'rearg': 'rearg' in options ? options.rearg : true\n  };\n\n  var defaultHolder = isLib ? func : fallbackHolder,\n      forceCurry = ('curry' in options) && options.curry,\n      forceFixed = ('fixed' in options) && options.fixed,\n      forceRearg = ('rearg' in options) && options.rearg,\n      pristine = isLib ? func.runInContext() : undefined;\n\n  var helpers = isLib ? func : {\n    'ary': util.ary,\n    'assign': util.assign,\n    'clone': util.clone,\n    'curry': util.curry,\n    'forEach': util.forEach,\n    'isArray': util.isArray,\n    'isError': util.isError,\n    'isFunction': util.isFunction,\n    'isWeakMap': util.isWeakMap,\n    'iteratee': util.iteratee,\n    'keys': util.keys,\n    'rearg': util.rearg,\n    'toInteger': util.toInteger,\n    'toPath': util.toPath\n  };\n\n  var ary = helpers.ary,\n      assign = helpers.assign,\n      clone = helpers.clone,\n      curry = helpers.curry,\n      each = helpers.forEach,\n      isArray = helpers.isArray,\n      isError = helpers.isError,\n      isFunction = helpers.isFunction,\n      isWeakMap = helpers.isWeakMap,\n      keys = helpers.keys,\n      rearg = helpers.rearg,\n      toInteger = helpers.toInteger,\n      toPath = helpers.toPath;\n\n  var aryMethodKeys = keys(mapping.aryMethod);\n\n  var wrappers = {\n    'castArray': function(castArray) {\n      return function() {\n        var value = arguments[0];\n        return isArray(value)\n          ? castArray(cloneArray(value))\n          : castArray.apply(undefined, arguments);\n      };\n    },\n    'iteratee': function(iteratee) {\n      return function() {\n        var func = arguments[0],\n            arity = arguments[1],\n            result = iteratee(func, arity),\n            length = result.length;\n\n        if (config.cap && typeof arity == 'number') {\n          arity = arity > 2 ? (arity - 2) : 1;\n          return (length && length <= arity) ? result : baseAry(result, arity);\n        }\n        return result;\n      };\n    },\n    'mixin': function(mixin) {\n      return function(source) {\n        var func = this;\n        if (!isFunction(func)) {\n          return mixin(func, Object(source));\n        }\n        var pairs = [];\n        each(keys(source), function(key) {\n          if (isFunction(source[key])) {\n            pairs.push([key, func.prototype[key]]);\n          }\n        });\n\n        mixin(func, Object(source));\n\n        each(pairs, function(pair) {\n          var value = pair[1];\n          if (isFunction(value)) {\n            func.prototype[pair[0]] = value;\n          } else {\n            delete func.prototype[pair[0]];\n          }\n        });\n        return func;\n      };\n    },\n    'nthArg': function(nthArg) {\n      return function(n) {\n        var arity = n < 0 ? 1 : (toInteger(n) + 1);\n        return curry(nthArg(n), arity);\n      };\n    },\n    'rearg': function(rearg) {\n      return function(func, indexes) {\n        var arity = indexes ? indexes.length : 0;\n        return curry(rearg(func, indexes), arity);\n      };\n    },\n    'runInContext': function(runInContext) {\n      return function(context) {\n        return baseConvert(util, runInContext(context), options);\n      };\n    }\n  };\n\n  /*--------------------------------------------------------------------------*/\n\n  /**\n   * Casts `func` to a function with an arity capped iteratee if needed.\n   *\n   * @private\n   * @param {string} name The name of the function to inspect.\n   * @param {Function} func The function to inspect.\n   * @returns {Function} Returns the cast function.\n   */\n  function castCap(name, func) {\n    if (config.cap) {\n      var indexes = mapping.iterateeRearg[name];\n      if (indexes) {\n        return iterateeRearg(func, indexes);\n      }\n      var n = !isLib && mapping.iterateeAry[name];\n      if (n) {\n        return iterateeAry(func, n);\n      }\n    }\n    return func;\n  }\n\n  /**\n   * Casts `func` to a curried function if needed.\n   *\n   * @private\n   * @param {string} name The name of the function to inspect.\n   * @param {Function} func The function to inspect.\n   * @param {number} n The arity of `func`.\n   * @returns {Function} Returns the cast function.\n   */\n  function castCurry(name, func, n) {\n    return (forceCurry || (config.curry && n > 1))\n      ? curry(func, n)\n      : func;\n  }\n\n  /**\n   * Casts `func` to a fixed arity function if needed.\n   *\n   * @private\n   * @param {string} name The name of the function to inspect.\n   * @param {Function} func The function to inspect.\n   * @param {number} n The arity cap.\n   * @returns {Function} Returns the cast function.\n   */\n  function castFixed(name, func, n) {\n    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {\n      var data = mapping.methodSpread[name],\n          start = data && data.start;\n\n      return start  === undefined ? ary(func, n) : flatSpread(func, start);\n    }\n    return func;\n  }\n\n  /**\n   * Casts `func` to an rearged function if needed.\n   *\n   * @private\n   * @param {string} name The name of the function to inspect.\n   * @param {Function} func The function to inspect.\n   * @param {number} n The arity of `func`.\n   * @returns {Function} Returns the cast function.\n   */\n  function castRearg(name, func, n) {\n    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))\n      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])\n      : func;\n  }\n\n  /**\n   * Creates a clone of `object` by `path`.\n   *\n   * @private\n   * @param {Object} object The object to clone.\n   * @param {Array|string} path The path to clone by.\n   * @returns {Object} Returns the cloned object.\n   */\n  function cloneByPath(object, path) {\n    path = toPath(path);\n\n    var index = -1,\n        length = path.length,\n        lastIndex = length - 1,\n        result = clone(Object(object)),\n        nested = result;\n\n    while (nested != null && ++index < length) {\n      var key = path[index],\n          value = nested[key];\n\n      if (value != null &&\n          !(isFunction(value) || isError(value) || isWeakMap(value))) {\n        nested[key] = clone(index == lastIndex ? value : Object(value));\n      }\n      nested = nested[key];\n    }\n    return result;\n  }\n\n  /**\n   * Converts `lodash` to an immutable auto-curried iteratee-first data-last\n   * version with conversion `options` applied.\n   *\n   * @param {Object} [options] The options object. See `baseConvert` for more details.\n   * @returns {Function} Returns the converted `lodash`.\n   */\n  function convertLib(options) {\n    return _.runInContext.convert(options)(undefined);\n  }\n\n  /**\n   * Create a converter function for `func` of `name`.\n   *\n   * @param {string} name The name of the function to convert.\n   * @param {Function} func The function to convert.\n   * @returns {Function} Returns the new converter function.\n   */\n  function createConverter(name, func) {\n    var realName = mapping.aliasToReal[name] || name,\n        methodName = mapping.remap[realName] || realName,\n        oldOptions = options;\n\n    return function(options) {\n      var newUtil = isLib ? pristine : helpers,\n          newFunc = isLib ? pristine[methodName] : func,\n          newOptions = assign(assign({}, oldOptions), options);\n\n      return baseConvert(newUtil, realName, newFunc, newOptions);\n    };\n  }\n\n  /**\n   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`\n   * arguments, ignoring any additional arguments.\n   *\n   * @private\n   * @param {Function} func The function to cap iteratee arguments for.\n   * @param {number} n The arity cap.\n   * @returns {Function} Returns the new function.\n   */\n  function iterateeAry(func, n) {\n    return overArg(func, function(func) {\n      return typeof func == 'function' ? baseAry(func, n) : func;\n    });\n  }\n\n  /**\n   * Creates a function that wraps `func` to invoke its iteratee with arguments\n   * arranged according to the specified `indexes` where the argument value at\n   * the first index is provided as the first argument, the argument value at\n   * the second index is provided as the second argument, and so on.\n   *\n   * @private\n   * @param {Function} func The function to rearrange iteratee arguments for.\n   * @param {number[]} indexes The arranged argument indexes.\n   * @returns {Function} Returns the new function.\n   */\n  function iterateeRearg(func, indexes) {\n    return overArg(func, function(func) {\n      var n = indexes.length;\n      return baseArity(rearg(baseAry(func, n), indexes), n);\n    });\n  }\n\n  /**\n   * Creates a function that invokes `func` with its first argument transformed.\n   *\n   * @private\n   * @param {Function} func The function to wrap.\n   * @param {Function} transform The argument transform.\n   * @returns {Function} Returns the new function.\n   */\n  function overArg(func, transform) {\n    return function() {\n      var length = arguments.length;\n      if (!length) {\n        return func();\n      }\n      var args = Array(length);\n      while (length--) {\n        args[length] = arguments[length];\n      }\n      var index = config.rearg ? 0 : (length - 1);\n      args[index] = transform(args[index]);\n      return func.apply(undefined, args);\n    };\n  }\n\n  /**\n   * Creates a function that wraps `func` and applys the conversions\n   * rules by `name`.\n   *\n   * @private\n   * @param {string} name The name of the function to wrap.\n   * @param {Function} func The function to wrap.\n   * @returns {Function} Returns the converted function.\n   */\n  function wrap(name, func, placeholder) {\n    var result,\n        realName = mapping.aliasToReal[name] || name,\n        wrapped = func,\n        wrapper = wrappers[realName];\n\n    if (wrapper) {\n      wrapped = wrapper(func);\n    }\n    else if (config.immutable) {\n      if (mapping.mutate.array[realName]) {\n        wrapped = wrapImmutable(func, cloneArray);\n      }\n      else if (mapping.mutate.object[realName]) {\n        wrapped = wrapImmutable(func, createCloner(func));\n      }\n      else if (mapping.mutate.set[realName]) {\n        wrapped = wrapImmutable(func, cloneByPath);\n      }\n    }\n    each(aryMethodKeys, function(aryKey) {\n      each(mapping.aryMethod[aryKey], function(otherName) {\n        if (realName == otherName) {\n          var data = mapping.methodSpread[realName],\n              afterRearg = data && data.afterRearg;\n\n          result = afterRearg\n            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)\n            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);\n\n          result = castCap(realName, result);\n          result = castCurry(realName, result, aryKey);\n          return false;\n        }\n      });\n      return !result;\n    });\n\n    result || (result = wrapped);\n    if (result == func) {\n      result = forceCurry ? curry(result, 1) : function() {\n        return func.apply(this, arguments);\n      };\n    }\n    result.convert = createConverter(realName, func);\n    result.placeholder = func.placeholder = placeholder;\n\n    return result;\n  }\n\n  /*--------------------------------------------------------------------------*/\n\n  if (!isObj) {\n    return wrap(name, func, defaultHolder);\n  }\n  var _ = func;\n\n  // Convert methods by ary cap.\n  var pairs = [];\n  each(aryMethodKeys, function(aryKey) {\n    each(mapping.aryMethod[aryKey], function(key) {\n      var func = _[mapping.remap[key] || key];\n      if (func) {\n        pairs.push([key, wrap(key, func, _)]);\n      }\n    });\n  });\n\n  // Convert remaining methods.\n  each(keys(_), function(key) {\n    var func = _[key];\n    if (typeof func == 'function') {\n      var length = pairs.length;\n      while (length--) {\n        if (pairs[length][0] == key) {\n          return;\n        }\n      }\n      func.convert = createConverter(key, func);\n      pairs.push([key, func]);\n    }\n  });\n\n  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.\n  each(pairs, function(pair) {\n    _[pair[0]] = pair[1];\n  });\n\n  _.convert = convertLib;\n  _.placeholder = _;\n\n  // Assign aliases.\n  each(keys(_), function(key) {\n    each(mapping.realToAlias[key] || [], function(alias) {\n      _[alias] = _[key];\n    });\n  });\n\n  return _;\n}\n\nmodule.exports = baseConvert;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/_baseConvert.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/_mapping.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/fp/_mapping.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to map aliases to their real names. */\nexports.aliasToReal = {\n\n  // Lodash aliases.\n  'each': 'forEach',\n  'eachRight': 'forEachRight',\n  'entries': 'toPairs',\n  'entriesIn': 'toPairsIn',\n  'extend': 'assignIn',\n  'extendAll': 'assignInAll',\n  'extendAllWith': 'assignInAllWith',\n  'extendWith': 'assignInWith',\n  'first': 'head',\n\n  // Methods that are curried variants of others.\n  'conforms': 'conformsTo',\n  'matches': 'isMatch',\n  'property': 'get',\n\n  // Ramda aliases.\n  '__': 'placeholder',\n  'F': 'stubFalse',\n  'T': 'stubTrue',\n  'all': 'every',\n  'allPass': 'overEvery',\n  'always': 'constant',\n  'any': 'some',\n  'anyPass': 'overSome',\n  'apply': 'spread',\n  'assoc': 'set',\n  'assocPath': 'set',\n  'complement': 'negate',\n  'compose': 'flowRight',\n  'contains': 'includes',\n  'dissoc': 'unset',\n  'dissocPath': 'unset',\n  'dropLast': 'dropRight',\n  'dropLastWhile': 'dropRightWhile',\n  'equals': 'isEqual',\n  'identical': 'eq',\n  'indexBy': 'keyBy',\n  'init': 'initial',\n  'invertObj': 'invert',\n  'juxt': 'over',\n  'omitAll': 'omit',\n  'nAry': 'ary',\n  'path': 'get',\n  'pathEq': 'matchesProperty',\n  'pathOr': 'getOr',\n  'paths': 'at',\n  'pickAll': 'pick',\n  'pipe': 'flow',\n  'pluck': 'map',\n  'prop': 'get',\n  'propEq': 'matchesProperty',\n  'propOr': 'getOr',\n  'props': 'at',\n  'symmetricDifference': 'xor',\n  'symmetricDifferenceBy': 'xorBy',\n  'symmetricDifferenceWith': 'xorWith',\n  'takeLast': 'takeRight',\n  'takeLastWhile': 'takeRightWhile',\n  'unapply': 'rest',\n  'unnest': 'flatten',\n  'useWith': 'overArgs',\n  'where': 'conformsTo',\n  'whereEq': 'isMatch',\n  'zipObj': 'zipObject'\n};\n\n/** Used to map ary to method names. */\nexports.aryMethod = {\n  '1': [\n    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',\n    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',\n    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',\n    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',\n    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',\n    'uniqueId', 'words', 'zipAll'\n  ],\n  '2': [\n    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',\n    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',\n    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',\n    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',\n    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',\n    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',\n    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',\n    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',\n    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',\n    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',\n    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',\n    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',\n    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',\n    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',\n    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',\n    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',\n    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',\n    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',\n    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',\n    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',\n    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',\n    'zipObjectDeep'\n  ],\n  '3': [\n    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',\n    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',\n    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',\n    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',\n    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',\n    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',\n    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',\n    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',\n    'xorWith', 'zipWith'\n  ],\n  '4': [\n    'fill', 'setWith', 'updateWith'\n  ]\n};\n\n/** Used to map ary to rearg configs. */\nexports.aryRearg = {\n  '2': [1, 0],\n  '3': [2, 0, 1],\n  '4': [3, 2, 0, 1]\n};\n\n/** Used to map method names to their iteratee ary. */\nexports.iterateeAry = {\n  'dropRightWhile': 1,\n  'dropWhile': 1,\n  'every': 1,\n  'filter': 1,\n  'find': 1,\n  'findFrom': 1,\n  'findIndex': 1,\n  'findIndexFrom': 1,\n  'findKey': 1,\n  'findLast': 1,\n  'findLastFrom': 1,\n  'findLastIndex': 1,\n  'findLastIndexFrom': 1,\n  'findLastKey': 1,\n  'flatMap': 1,\n  'flatMapDeep': 1,\n  'flatMapDepth': 1,\n  'forEach': 1,\n  'forEachRight': 1,\n  'forIn': 1,\n  'forInRight': 1,\n  'forOwn': 1,\n  'forOwnRight': 1,\n  'map': 1,\n  'mapKeys': 1,\n  'mapValues': 1,\n  'partition': 1,\n  'reduce': 2,\n  'reduceRight': 2,\n  'reject': 1,\n  'remove': 1,\n  'some': 1,\n  'takeRightWhile': 1,\n  'takeWhile': 1,\n  'times': 1,\n  'transform': 2\n};\n\n/** Used to map method names to iteratee rearg configs. */\nexports.iterateeRearg = {\n  'mapKeys': [1],\n  'reduceRight': [1, 0]\n};\n\n/** Used to map method names to rearg configs. */\nexports.methodRearg = {\n  'assignInAllWith': [1, 0],\n  'assignInWith': [1, 2, 0],\n  'assignAllWith': [1, 0],\n  'assignWith': [1, 2, 0],\n  'differenceBy': [1, 2, 0],\n  'differenceWith': [1, 2, 0],\n  'getOr': [2, 1, 0],\n  'intersectionBy': [1, 2, 0],\n  'intersectionWith': [1, 2, 0],\n  'isEqualWith': [1, 2, 0],\n  'isMatchWith': [2, 1, 0],\n  'mergeAllWith': [1, 0],\n  'mergeWith': [1, 2, 0],\n  'padChars': [2, 1, 0],\n  'padCharsEnd': [2, 1, 0],\n  'padCharsStart': [2, 1, 0],\n  'pullAllBy': [2, 1, 0],\n  'pullAllWith': [2, 1, 0],\n  'rangeStep': [1, 2, 0],\n  'rangeStepRight': [1, 2, 0],\n  'setWith': [3, 1, 2, 0],\n  'sortedIndexBy': [2, 1, 0],\n  'sortedLastIndexBy': [2, 1, 0],\n  'unionBy': [1, 2, 0],\n  'unionWith': [1, 2, 0],\n  'updateWith': [3, 1, 2, 0],\n  'xorBy': [1, 2, 0],\n  'xorWith': [1, 2, 0],\n  'zipWith': [1, 2, 0]\n};\n\n/** Used to map method names to spread configs. */\nexports.methodSpread = {\n  'assignAll': { 'start': 0 },\n  'assignAllWith': { 'start': 0 },\n  'assignInAll': { 'start': 0 },\n  'assignInAllWith': { 'start': 0 },\n  'defaultsAll': { 'start': 0 },\n  'defaultsDeepAll': { 'start': 0 },\n  'invokeArgs': { 'start': 2 },\n  'invokeArgsMap': { 'start': 2 },\n  'mergeAll': { 'start': 0 },\n  'mergeAllWith': { 'start': 0 },\n  'partial': { 'start': 1 },\n  'partialRight': { 'start': 1 },\n  'without': { 'start': 1 },\n  'zipAll': { 'start': 0 }\n};\n\n/** Used to identify methods which mutate arrays or objects. */\nexports.mutate = {\n  'array': {\n    'fill': true,\n    'pull': true,\n    'pullAll': true,\n    'pullAllBy': true,\n    'pullAllWith': true,\n    'pullAt': true,\n    'remove': true,\n    'reverse': true\n  },\n  'object': {\n    'assign': true,\n    'assignAll': true,\n    'assignAllWith': true,\n    'assignIn': true,\n    'assignInAll': true,\n    'assignInAllWith': true,\n    'assignInWith': true,\n    'assignWith': true,\n    'defaults': true,\n    'defaultsAll': true,\n    'defaultsDeep': true,\n    'defaultsDeepAll': true,\n    'merge': true,\n    'mergeAll': true,\n    'mergeAllWith': true,\n    'mergeWith': true,\n  },\n  'set': {\n    'set': true,\n    'setWith': true,\n    'unset': true,\n    'update': true,\n    'updateWith': true\n  }\n};\n\n/** Used to map real names to their aliases. */\nexports.realToAlias = (function() {\n  var hasOwnProperty = Object.prototype.hasOwnProperty,\n      object = exports.aliasToReal,\n      result = {};\n\n  for (var key in object) {\n    var value = object[key];\n    if (hasOwnProperty.call(result, value)) {\n      result[value].push(key);\n    } else {\n      result[value] = [key];\n    }\n  }\n  return result;\n}());\n\n/** Used to map method names to other names. */\nexports.remap = {\n  'assignAll': 'assign',\n  'assignAllWith': 'assignWith',\n  'assignInAll': 'assignIn',\n  'assignInAllWith': 'assignInWith',\n  'curryN': 'curry',\n  'curryRightN': 'curryRight',\n  'defaultsAll': 'defaults',\n  'defaultsDeepAll': 'defaultsDeep',\n  'findFrom': 'find',\n  'findIndexFrom': 'findIndex',\n  'findLastFrom': 'findLast',\n  'findLastIndexFrom': 'findLastIndex',\n  'getOr': 'get',\n  'includesFrom': 'includes',\n  'indexOfFrom': 'indexOf',\n  'invokeArgs': 'invoke',\n  'invokeArgsMap': 'invokeMap',\n  'lastIndexOfFrom': 'lastIndexOf',\n  'mergeAll': 'merge',\n  'mergeAllWith': 'mergeWith',\n  'padChars': 'pad',\n  'padCharsEnd': 'padEnd',\n  'padCharsStart': 'padStart',\n  'propertyOf': 'get',\n  'rangeStep': 'range',\n  'rangeStepRight': 'rangeRight',\n  'restFrom': 'rest',\n  'spreadFrom': 'spread',\n  'trimChars': 'trim',\n  'trimCharsEnd': 'trimEnd',\n  'trimCharsStart': 'trimStart',\n  'zipAll': 'zip'\n};\n\n/** Used to track methods that skip fixing their arity. */\nexports.skipFixed = {\n  'castArray': true,\n  'flow': true,\n  'flowRight': true,\n  'iteratee': true,\n  'mixin': true,\n  'rearg': true,\n  'runInContext': true\n};\n\n/** Used to track methods that skip rearranging arguments. */\nexports.skipRearg = {\n  'add': true,\n  'assign': true,\n  'assignIn': true,\n  'bind': true,\n  'bindKey': true,\n  'concat': true,\n  'difference': true,\n  'divide': true,\n  'eq': true,\n  'gt': true,\n  'gte': true,\n  'isEqual': true,\n  'lt': true,\n  'lte': true,\n  'matchesProperty': true,\n  'merge': true,\n  'multiply': true,\n  'overArgs': true,\n  'partial': true,\n  'partialRight': true,\n  'propertyOf': true,\n  'random': true,\n  'range': true,\n  'rangeRight': true,\n  'subtract': true,\n  'zip': true,\n  'zipObject': true,\n  'zipObjectDeep': true\n};\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/_mapping.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/_util.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/fp/_util.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  'ary': __webpack_require__(/*! ../ary */ \"./node_modules/lodash/ary.js\"),\n  'assign': __webpack_require__(/*! ../_baseAssign */ \"./node_modules/lodash/_baseAssign.js\"),\n  'clone': __webpack_require__(/*! ../clone */ \"./node_modules/lodash/clone.js\"),\n  'curry': __webpack_require__(/*! ../curry */ \"./node_modules/lodash/curry.js\"),\n  'forEach': __webpack_require__(/*! ../_arrayEach */ \"./node_modules/lodash/_arrayEach.js\"),\n  'isArray': __webpack_require__(/*! ../isArray */ \"./node_modules/lodash/isArray.js\"),\n  'isError': __webpack_require__(/*! ../isError */ \"./node_modules/lodash/isError.js\"),\n  'isFunction': __webpack_require__(/*! ../isFunction */ \"./node_modules/lodash/isFunction.js\"),\n  'isWeakMap': __webpack_require__(/*! ../isWeakMap */ \"./node_modules/lodash/isWeakMap.js\"),\n  'iteratee': __webpack_require__(/*! ../iteratee */ \"./node_modules/lodash/iteratee.js\"),\n  'keys': __webpack_require__(/*! ../_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n  'rearg': __webpack_require__(/*! ../rearg */ \"./node_modules/lodash/rearg.js\"),\n  'toInteger': __webpack_require__(/*! ../toInteger */ \"./node_modules/lodash/toInteger.js\"),\n  'toPath': __webpack_require__(/*! ../toPath */ \"./node_modules/lodash/toPath.js\")\n};\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/_util.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/assign.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/fp/assign.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var convert = __webpack_require__(/*! ./convert */ \"./node_modules/lodash/fp/convert.js\"),\n    func = convert('assign', __webpack_require__(/*! ../assign */ \"./node_modules/lodash/assign.js\"));\n\nfunc.placeholder = __webpack_require__(/*! ./placeholder */ \"./node_modules/lodash/fp/placeholder.js\");\nmodule.exports = func;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/assign.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/convert.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/fp/convert.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseConvert = __webpack_require__(/*! ./_baseConvert */ \"./node_modules/lodash/fp/_baseConvert.js\"),\n    util = __webpack_require__(/*! ./_util */ \"./node_modules/lodash/fp/_util.js\");\n\n/**\n * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last\n * version with conversion `options` applied. If `name` is an object its methods\n * will be converted.\n *\n * @param {string} name The name of the function to wrap.\n * @param {Function} [func] The function to wrap.\n * @param {Object} [options] The options object. See `baseConvert` for more details.\n * @returns {Function|Object} Returns the converted function or object.\n */\nfunction convert(name, func, options) {\n  return baseConvert(util, name, func, options);\n}\n\nmodule.exports = convert;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/convert.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/merge.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/fp/merge.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var convert = __webpack_require__(/*! ./convert */ \"./node_modules/lodash/fp/convert.js\"),\n    func = convert('merge', __webpack_require__(/*! ../merge */ \"./node_modules/lodash/merge.js\"));\n\nfunc.placeholder = __webpack_require__(/*! ./placeholder */ \"./node_modules/lodash/fp/placeholder.js\");\nmodule.exports = func;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/merge.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/placeholder.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/fp/placeholder.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The default argument placeholder value for methods.\n *\n * @type {Object}\n */\nmodule.exports = {};\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/placeholder.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/setWith.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/fp/setWith.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var convert = __webpack_require__(/*! ./convert */ \"./node_modules/lodash/fp/convert.js\"),\n    func = convert('setWith', __webpack_require__(/*! ../setWith */ \"./node_modules/lodash/setWith.js\"));\n\nfunc.placeholder = __webpack_require__(/*! ./placeholder */ \"./node_modules/lodash/fp/placeholder.js\");\nmodule.exports = func;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/setWith.js?");

/***/ }),

/***/ "./node_modules/lodash/fp/unset.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/fp/unset.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var convert = __webpack_require__(/*! ./convert */ \"./node_modules/lodash/fp/convert.js\"),\n    func = convert('unset', __webpack_require__(/*! ../unset */ \"./node_modules/lodash/unset.js\"));\n\nfunc.placeholder = __webpack_require__(/*! ./placeholder */ \"./node_modules/lodash/fp/placeholder.js\");\nmodule.exports = func;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/fp/unset.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!************************************!*\
  !*** ./node_modules/lodash/has.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.has` without support for deep paths.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {Array|string} key The key to check.\n * @returns {boolean} Returns `true` if `key` exists, else `false`.\n */\nfunction baseHas(object, key) {\n  return object != null && hasOwnProperty.call(object, key);\n}\n\nmodule.exports = baseHas;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/has.js?");

/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ \"./node_modules/lodash/_baseHasIn.js\"),\n    hasPath = __webpack_require__(/*! ./_hasPath */ \"./node_modules/lodash/_hasPath.js\");\n\n/**\n * Checks if `path` is a direct or inherited property of `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n * @example\n *\n * var object = _.create({ 'a': _.create({ 'b': 2 }) });\n *\n * _.hasIn(object, 'a');\n * // => true\n *\n * _.hasIn(object, 'a.b');\n * // => true\n *\n * _.hasIn(object, ['a', 'b']);\n * // => true\n *\n * _.hasIn(object, 'b');\n * // => false\n */\nfunction hasIn(object, path) {\n  return object != null && hasPath(object, path, baseHasIn);\n}\n\nmodule.exports = hasIn;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/hasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\nmodule.exports = isArrayLikeObject;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isArrayLikeObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\");\n\n/**\n * Performs a deep comparison between two values to determine if they are\n * equivalent.\n *\n * **Note:** This method supports comparing arrays, array buffers, booleans,\n * date objects, error objects, maps, numbers, `Object` objects, regexes,\n * sets, strings, symbols, and typed arrays. `Object` objects are compared\n * by their own, not inherited, enumerable properties. Functions and DOM\n * nodes are compared by strict equality, i.e. `===`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.isEqual(object, other);\n * // => true\n *\n * object === other;\n * // => false\n */\nfunction isEqual(value, other) {\n  return baseIsEqual(value, other);\n}\n\nmodule.exports = isEqual;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/isError.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isError.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\"),\n    isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\n\n/** `Object#toString` result references. */\nvar domExcTag = '[object DOMException]',\n    errorTag = '[object Error]';\n\n/**\n * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,\n * `SyntaxError`, `TypeError`, or `URIError` object.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an error object, else `false`.\n * @example\n *\n * _.isError(new Error);\n * // => true\n *\n * _.isError(Error);\n * // => false\n */\nfunction isError(value) {\n  if (!isObjectLike(value)) {\n    return false;\n  }\n  var tag = baseGetTag(value);\n  return tag == errorTag || tag == domExcTag ||\n    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));\n}\n\nmodule.exports = isError;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isError.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isNaN.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isNaN.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isNumber = __webpack_require__(/*! ./isNumber */ \"./node_modules/lodash/isNumber.js\");\n\n/**\n * Checks if `value` is `NaN`.\n *\n * **Note:** This method is based on\n * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as\n * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for\n * `undefined` and other non-number values.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n * @example\n *\n * _.isNaN(NaN);\n * // => true\n *\n * _.isNaN(new Number(NaN));\n * // => true\n *\n * isNaN(undefined);\n * // => true\n *\n * _.isNaN(undefined);\n * // => false\n */\nfunction isNaN(value) {\n  // An `NaN` primitive is the only value that is not equal to itself.\n  // Perform the `toStringTag` check first to avoid errors with some\n  // ActiveX objects in IE.\n  return isNumber(value) && value != +value;\n}\n\nmodule.exports = isNaN;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isNaN.js?");

/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar numberTag = '[object Number]';\n\n/**\n * Checks if `value` is classified as a `Number` primitive or object.\n *\n * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are\n * classified as numbers, use the `_.isFinite` method.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a number, else `false`.\n * @example\n *\n * _.isNumber(3);\n * // => true\n *\n * _.isNumber(Number.MIN_VALUE);\n * // => true\n *\n * _.isNumber(Infinity);\n * // => true\n *\n * _.isNumber('3');\n * // => false\n */\nfunction isNumber(value) {\n  return typeof value == 'number' ||\n    (isObjectLike(value) && baseGetTag(value) == numberTag);\n}\n\nmodule.exports = isNumber;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar stringTag = '[object String]';\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a string, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' ||\n    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);\n}\n\nmodule.exports = isString;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isString.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is `undefined`.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.\n * @example\n *\n * _.isUndefined(void 0);\n * // => true\n *\n * _.isUndefined(null);\n * // => false\n */\nfunction isUndefined(value) {\n  return value === undefined;\n}\n\nmodule.exports = isUndefined;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isUndefined.js?");

/***/ }),

/***/ "./node_modules/lodash/isWeakMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/isWeakMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar weakMapTag = '[object WeakMap]';\n\n/**\n * Checks if `value` is classified as a `WeakMap` object.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.\n * @example\n *\n * _.isWeakMap(new WeakMap);\n * // => true\n *\n * _.isWeakMap(new Map);\n * // => false\n */\nfunction isWeakMap(value) {\n  return isObjectLike(value) && getTag(value) == weakMapTag;\n}\n\nmodule.exports = isWeakMap;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/isWeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/iteratee.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/iteratee.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClone = __webpack_require__(/*! ./_baseClone */ \"./node_modules/lodash/_baseClone.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_DEEP_FLAG = 1;\n\n/**\n * Creates a function that invokes `func` with the arguments of the created\n * function. If `func` is a property name, the created function returns the\n * property value for a given element. If `func` is an array or object, the\n * created function returns `true` for elements that contain the equivalent\n * source properties, otherwise it returns `false`.\n *\n * @static\n * @since 4.0.0\n * @memberOf _\n * @category Util\n * @param {*} [func=_.identity] The value to convert to a callback.\n * @returns {Function} Returns the callback.\n * @example\n *\n * var users = [\n *   { 'user': 'barney', 'age': 36, 'active': true },\n *   { 'user': 'fred',   'age': 40, 'active': false }\n * ];\n *\n * // The `_.matches` iteratee shorthand.\n * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));\n * // => [{ 'user': 'barney', 'age': 36, 'active': true }]\n *\n * // The `_.matchesProperty` iteratee shorthand.\n * _.filter(users, _.iteratee(['user', 'fred']));\n * // => [{ 'user': 'fred', 'age': 40 }]\n *\n * // The `_.property` iteratee shorthand.\n * _.map(users, _.iteratee('user'));\n * // => ['barney', 'fred']\n *\n * // Create custom iteratee shorthands.\n * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {\n *   return !_.isRegExp(func) ? iteratee(func) : function(string) {\n *     return func.test(string);\n *   };\n * });\n *\n * _.filter(['abc', 'def'], /ef/);\n * // => ['def']\n */\nfunction iteratee(func) {\n  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));\n}\n\nmodule.exports = iteratee;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/iteratee.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = nativeKeysIn;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/keysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the last element of `array`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {Array} array The array to query.\n * @returns {*} Returns the last element of `array`.\n * @example\n *\n * _.last([1, 2, 3]);\n * // => 3\n */\nfunction last(array) {\n  var length = array == null ? 0 : array.length;\n  return length ? array[length - 1] : undefined;\n}\n\nmodule.exports = last;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/last.js?");

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/map.js?");

/***/ }),

/***/ "./node_modules/lodash/mapValues.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ \"./node_modules/lodash/_baseForOwn.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\");\n\n/**\n * Creates an object with the same keys as `object` and values generated\n * by running each own enumerable string keyed property of `object` thru\n * `iteratee`. The iteratee is invoked with three arguments:\n * (value, key, object).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Object\n * @param {Object} object The object to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Object} Returns the new mapped object.\n * @see _.mapKeys\n * @example\n *\n * var users = {\n *   'fred':    { 'user': 'fred',    'age': 40 },\n *   'pebbles': { 'user': 'pebbles', 'age': 1 }\n * };\n *\n * _.mapValues(users, function(o) { return o.age; });\n * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)\n *\n * // The `_.property` iteratee shorthand.\n * _.mapValues(users, 'age');\n * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)\n */\nfunction mapValues(object, iteratee) {\n  var result = {};\n  iteratee = baseIteratee(iteratee, 3);\n\n  baseForOwn(object, function(value, key, object) {\n    baseAssignValue(result, key, iteratee(value, key, object));\n  });\n  return result;\n}\n\nmodule.exports = mapValues;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/mapValues.js?");

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"./node_modules/lodash/_baseMerge.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"./node_modules/lodash/_createAssigner.js\");\n\n/**\n * This method is like `_.assign` except that it recursively merges own and\n * inherited enumerable string keyed properties of source objects into the\n * destination object. Source properties that resolve to `undefined` are\n * skipped if a destination value exists. Array and plain object properties\n * are merged recursively. Other objects and value types are overridden by\n * assignment. Source objects are applied from left to right. Subsequent\n * sources overwrite property assignments of previous sources.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 0.5.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = {\n *   'a': [{ 'b': 2 }, { 'd': 4 }]\n * };\n *\n * var other = {\n *   'a': [{ 'c': 3 }, { 'e': 5 }]\n * };\n *\n * _.merge(object, other);\n * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }\n */\nvar merge = createAssigner(function(object, source, srcIndex) {\n  baseMerge(object, source, srcIndex);\n});\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/merge.js?");

/***/ }),

/***/ "./node_modules/lodash/mergeWith.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mergeWith.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"./node_modules/lodash/_baseMerge.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"./node_modules/lodash/_createAssigner.js\");\n\n/**\n * This method is like `_.merge` except that it accepts `customizer` which\n * is invoked to produce the merged values of the destination and source\n * properties. If `customizer` returns `undefined`, merging is handled by the\n * method instead. The `customizer` is invoked with six arguments:\n * (objValue, srcValue, key, object, source, stack).\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} sources The source objects.\n * @param {Function} customizer The function to customize assigned values.\n * @returns {Object} Returns `object`.\n * @example\n *\n * function customizer(objValue, srcValue) {\n *   if (_.isArray(objValue)) {\n *     return objValue.concat(srcValue);\n *   }\n * }\n *\n * var object = { 'a': [1], 'b': [2] };\n * var other = { 'a': [3], 'b': [4] };\n *\n * _.mergeWith(object, other, customizer);\n * // => { 'a': [1, 3], 'b': [2, 4] }\n */\nvar mergeWith = createAssigner(function(object, source, srcIndex, customizer) {\n  baseMerge(object, source, srcIndex, customizer);\n});\n\nmodule.exports = mergeWith;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/mergeWith.js?");

/***/ }),

/***/ "./node_modules/lodash/negate.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/negate.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that negates the result of the predicate `func`. The\n * `func` predicate is invoked with the `this` binding and arguments of the\n * created function.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Function\n * @param {Function} predicate The predicate to negate.\n * @returns {Function} Returns the new negated function.\n * @example\n *\n * function isEven(n) {\n *   return n % 2 == 0;\n * }\n *\n * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));\n * // => [1, 3, 5]\n */\nfunction negate(predicate) {\n  if (typeof predicate != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  return function() {\n    var args = arguments;\n    switch (args.length) {\n      case 0: return !predicate.call(this);\n      case 1: return !predicate.call(this, args[0]);\n      case 2: return !predicate.call(this, args[0], args[1]);\n      case 3: return !predicate.call(this, args[0], args[1], args[2]);\n    }\n    return !predicate.apply(this, args);\n  };\n}\n\nmodule.exports = negate;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/negate.js?");

/***/ }),

/***/ "./node_modules/lodash/omit.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseClone = __webpack_require__(/*! ./_baseClone */ \"./node_modules/lodash/_baseClone.js\"),\n    baseUnset = __webpack_require__(/*! ./_baseUnset */ \"./node_modules/lodash/_baseUnset.js\"),\n    castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ \"./node_modules/lodash/_customOmitClone.js\"),\n    flatRest = __webpack_require__(/*! ./_flatRest */ \"./node_modules/lodash/_flatRest.js\"),\n    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ \"./node_modules/lodash/_getAllKeysIn.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_DEEP_FLAG = 1,\n    CLONE_FLAT_FLAG = 2,\n    CLONE_SYMBOLS_FLAG = 4;\n\n/**\n * The opposite of `_.pick`; this method creates an object composed of the\n * own and inherited enumerable property paths of `object` that are not omitted.\n *\n * **Note:** This method is considerably slower than `_.pick`.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The source object.\n * @param {...(string|string[])} [paths] The property paths to omit.\n * @returns {Object} Returns the new object.\n * @example\n *\n * var object = { 'a': 1, 'b': '2', 'c': 3 };\n *\n * _.omit(object, ['a', 'c']);\n * // => { 'b': '2' }\n */\nvar omit = flatRest(function(object, paths) {\n  var result = {};\n  if (object == null) {\n    return result;\n  }\n  var isDeep = false;\n  paths = arrayMap(paths, function(path) {\n    path = castPath(path, object);\n    isDeep || (isDeep = path.length > 1);\n    return path;\n  });\n  copyObject(object, getAllKeysIn(object), result);\n  if (isDeep) {\n    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);\n  }\n  var length = paths.length;\n  while (length--) {\n    baseUnset(result, paths[length]);\n  }\n  return result;\n});\n\nmodule.exports = omit;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/omit.js?");

/***/ }),

/***/ "./node_modules/lodash/omitBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/omitBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    negate = __webpack_require__(/*! ./negate */ \"./node_modules/lodash/negate.js\"),\n    pickBy = __webpack_require__(/*! ./pickBy */ \"./node_modules/lodash/pickBy.js\");\n\n/**\n * The opposite of `_.pickBy`; this method creates an object composed of\n * the own and inherited enumerable string keyed properties of `object` that\n * `predicate` doesn't return truthy for. The predicate is invoked with two\n * arguments: (value, key).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The source object.\n * @param {Function} [predicate=_.identity] The function invoked per property.\n * @returns {Object} Returns the new object.\n * @example\n *\n * var object = { 'a': 1, 'b': '2', 'c': 3 };\n *\n * _.omitBy(object, _.isNumber);\n * // => { 'b': '2' }\n */\nfunction omitBy(object, predicate) {\n  return pickBy(object, negate(baseIteratee(predicate)));\n}\n\nmodule.exports = omitBy;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/omitBy.js?");

/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePick = __webpack_require__(/*! ./_basePick */ \"./node_modules/lodash/_basePick.js\"),\n    flatRest = __webpack_require__(/*! ./_flatRest */ \"./node_modules/lodash/_flatRest.js\");\n\n/**\n * Creates an object composed of the picked `object` properties.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The source object.\n * @param {...(string|string[])} [paths] The property paths to pick.\n * @returns {Object} Returns the new object.\n * @example\n *\n * var object = { 'a': 1, 'b': '2', 'c': 3 };\n *\n * _.pick(object, ['a', 'c']);\n * // => { 'a': 1, 'c': 3 }\n */\nvar pick = flatRest(function(object, paths) {\n  return object == null ? {} : basePick(object, paths);\n});\n\nmodule.exports = pick;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/pick.js?");

/***/ }),

/***/ "./node_modules/lodash/pickBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/pickBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    basePickBy = __webpack_require__(/*! ./_basePickBy */ \"./node_modules/lodash/_basePickBy.js\"),\n    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ \"./node_modules/lodash/_getAllKeysIn.js\");\n\n/**\n * Creates an object composed of the `object` properties `predicate` returns\n * truthy for. The predicate is invoked with two arguments: (value, key).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The source object.\n * @param {Function} [predicate=_.identity] The function invoked per property.\n * @returns {Object} Returns the new object.\n * @example\n *\n * var object = { 'a': 1, 'b': '2', 'c': 3 };\n *\n * _.pickBy(object, _.isNumber);\n * // => { 'a': 1, 'c': 3 }\n */\nfunction pickBy(object, predicate) {\n  if (object == null) {\n    return {};\n  }\n  var props = arrayMap(getAllKeysIn(object), function(prop) {\n    return [prop];\n  });\n  predicate = baseIteratee(predicate);\n  return basePickBy(object, props, function(value, path) {\n    return predicate(value, path[0]);\n  });\n}\n\nmodule.exports = pickBy;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/pickBy.js?");

/***/ }),

/***/ "./node_modules/lodash/rearg.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/rearg.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createWrap = __webpack_require__(/*! ./_createWrap */ \"./node_modules/lodash/_createWrap.js\"),\n    flatRest = __webpack_require__(/*! ./_flatRest */ \"./node_modules/lodash/_flatRest.js\");\n\n/** Used to compose bitmasks for function metadata. */\nvar WRAP_REARG_FLAG = 256;\n\n/**\n * Creates a function that invokes `func` with arguments arranged according\n * to the specified `indexes` where the argument value at the first index is\n * provided as the first argument, the argument value at the second index is\n * provided as the second argument, and so on.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Function\n * @param {Function} func The function to rearrange arguments for.\n * @param {...(number|number[])} indexes The arranged argument indexes.\n * @returns {Function} Returns the new function.\n * @example\n *\n * var rearged = _.rearg(function(a, b, c) {\n *   return [a, b, c];\n * }, [2, 0, 1]);\n *\n * rearged('b', 'c', 'a')\n * // => ['a', 'b', 'c']\n */\nvar rearg = flatRest(function(func, indexes) {\n  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);\n});\n\nmodule.exports = rearg;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/rearg.js?");

/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.reduce` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @param {boolean} [initAccum] Specify using the first element of `array` as\n *  the initial value.\n * @returns {*} Returns the accumulated value.\n */\nfunction arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  if (initAccum && length) {\n    accumulator = array[++index];\n  }\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n  return accumulator;\n}\n\nmodule.exports = arrayReduce;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/reduce.js?");

/***/ }),

/***/ "./node_modules/lodash/remove.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/remove.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    basePullAt = __webpack_require__(/*! ./_basePullAt */ \"./node_modules/lodash/_basePullAt.js\");\n\n/**\n * Removes all elements from `array` that `predicate` returns truthy for\n * and returns an array of the removed elements. The predicate is invoked\n * with three arguments: (value, index, array).\n *\n * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`\n * to pull elements from an array by value.\n *\n * @static\n * @memberOf _\n * @since 2.0.0\n * @category Array\n * @param {Array} array The array to modify.\n * @param {Function} [predicate=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the new array of removed elements.\n * @example\n *\n * var array = [1, 2, 3, 4];\n * var evens = _.remove(array, function(n) {\n *   return n % 2 == 0;\n * });\n *\n * console.log(array);\n * // => [1, 3]\n *\n * console.log(evens);\n * // => [2, 4]\n */\nfunction remove(array, predicate) {\n  var result = [];\n  if (!(array && array.length)) {\n    return result;\n  }\n  var index = -1,\n      indexes = [],\n      length = array.length;\n\n  predicate = baseIteratee(predicate, 3);\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result.push(value);\n      indexes.push(index);\n    }\n  }\n  basePullAt(array, indexes);\n  return result;\n}\n\nmodule.exports = remove;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/remove.js?");

/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSet = __webpack_require__(/*! ./_baseSet */ \"./node_modules/lodash/_baseSet.js\");\n\n/**\n * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,\n * it's created. Arrays are created for missing index properties while objects\n * are created for all other missing properties. Use `_.setWith` to customize\n * `path` creation.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.set(object, 'a[0].b.c', 4);\n * console.log(object.a[0].b.c);\n * // => 4\n *\n * _.set(object, ['x', '0', 'y', 'z'], 5);\n * console.log(object.x[0].y.z);\n * // => 5\n */\nfunction set(object, path, value) {\n  return object == null ? object : baseSet(object, path, value);\n}\n\nmodule.exports = set;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/set.js?");

/***/ }),

/***/ "./node_modules/lodash/setWith.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/setWith.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSet = __webpack_require__(/*! ./_baseSet */ \"./node_modules/lodash/_baseSet.js\");\n\n/**\n * This method is like `_.set` except that it accepts `customizer` which is\n * invoked to produce the objects of `path`.  If `customizer` returns `undefined`\n * path creation is handled by the method instead. The `customizer` is invoked\n * with three arguments: (nsValue, key, nsObject).\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @param {Function} [customizer] The function to customize assigned values.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = {};\n *\n * _.setWith(object, '[0][1]', 'a', Object);\n * // => { '0': { '1': 'a' } }\n */\nfunction setWith(object, path, value, customizer) {\n  customizer = typeof customizer == 'function' ? customizer : undefined;\n  return object == null ? object : baseSet(object, path, value, customizer);\n}\n\nmodule.exports = setWith;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/setWith.js?");

/***/ }),

/***/ "./node_modules/lodash/size.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/size.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isString = __webpack_require__(/*! ./isString */ \"./node_modules/lodash/isString.js\"),\n    stringSize = __webpack_require__(/*! ./_stringSize */ \"./node_modules/lodash/_stringSize.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    setTag = '[object Set]';\n\n/**\n * Gets the size of `collection` by returning its length for array-like\n * values or the number of own enumerable string keyed properties for objects.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object|string} collection The collection to inspect.\n * @returns {number} Returns the collection size.\n * @example\n *\n * _.size([1, 2, 3]);\n * // => 3\n *\n * _.size({ 'a': 1, 'b': 2 });\n * // => 2\n *\n * _.size('pebbles');\n * // => 7\n */\nfunction size(collection) {\n  if (collection == null) {\n    return 0;\n  }\n  if (isArrayLike(collection)) {\n    return isString(collection) ? stringSize(collection) : collection.length;\n  }\n  var tag = getTag(collection);\n  if (tag == mapTag || tag == setTag) {\n    return collection.size;\n  }\n  return baseKeys(collection).length;\n}\n\nmodule.exports = size;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/size.js?");

/***/ }),

/***/ "./node_modules/lodash/some.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/some.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/some.js?");

/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/toInteger.js?");

/***/ }),

/***/ "./node_modules/lodash/toPath.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/toPath.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Converts `value` to a property path array.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Util\n * @param {*} value The value to convert.\n * @returns {Array} Returns the new property path array.\n * @example\n *\n * _.toPath('a.b.c');\n * // => ['a', 'b', 'c']\n *\n * _.toPath('a[0].b.c');\n * // => ['a', '0', 'b', 'c']\n */\nfunction toPath(value) {\n  if (isArray(value)) {\n    return arrayMap(value, toKey);\n  }\n  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));\n}\n\nmodule.exports = toPath;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/toPath.js?");

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * Converts `value` to a plain object flattening inherited enumerable string\n * keyed properties of `value` to own properties of the plain object.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {Object} Returns the converted plain object.\n * @example\n *\n * function Foo() {\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.assign({ 'a': 1 }, new Foo);\n * // => { 'a': 1, 'b': 2 }\n *\n * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));\n * // => { 'a': 1, 'b': 2, 'c': 3 }\n */\nfunction toPlainObject(value) {\n  return copyObject(value, keysIn(value));\n}\n\nmodule.exports = toPlainObject;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/toPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/unset.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/unset.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseUnset = __webpack_require__(/*! ./_baseUnset */ \"./node_modules/lodash/_baseUnset.js\");\n\n/**\n * Removes the property at `path` of `object`.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to unset.\n * @returns {boolean} Returns `true` if the property is deleted, else `false`.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 7 } }] };\n * _.unset(object, 'a[0].b.c');\n * // => true\n *\n * console.log(object);\n * // => { 'a': [{ 'b': {} }] };\n *\n * _.unset(object, ['a', '0', 'b', 'c']);\n * // => true\n *\n * console.log(object);\n * // => { 'a': [{ 'b': {} }] };\n */\nfunction unset(object, path) {\n  return object == null ? true : baseUnset(object, path);\n}\n\nmodule.exports = unset;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/unset.js?");

/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ \"./node_modules/lodash/_createCaseFirst.js\");\n\n/**\n * Converts the first character of `string` to upper case.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.upperFirst('fred');\n * // => 'Fred'\n *\n * _.upperFirst('FRED');\n * // => 'FRED'\n */\nvar upperFirst = createCaseFirst('toUpperCase');\n\nmodule.exports = upperFirst;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/./node_modules/lodash/upperFirst.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://ReactReduxFirebase/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://ReactReduxFirebase/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/ReactReduxFirebaseContext.js":
/*!******************************************!*\
  !*** ./src/ReactReduxFirebaseContext.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar ReactReduxFirebaseContext=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);/* harmony default export */ __webpack_exports__[\"default\"] = (ReactReduxFirebaseContext);\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/ReactReduxFirebaseContext.js?");

/***/ }),

/***/ "./src/ReactReduxFirebaseProvider.js":
/*!*******************************************!*\
  !*** ./src/ReactReduxFirebaseProvider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _createFirebaseInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFirebaseInstance */ \"./src/createFirebaseInstance.js\");\n/* harmony import */ var _ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactReduxFirebaseContext */ \"./src/ReactReduxFirebaseContext.js\");\n/* harmony import */ var _ReduxFirestoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReduxFirestoreProvider */ \"./src/ReduxFirestoreProvider.js\");\nfunction _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function ReactReduxFirebaseProvider(){var props=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},children=props.children,config=props.config,dispatch=props.dispatch,firebase=props.firebase,initializeAuth=props.initializeAuth,createFirestoreInstance=props.createFirestoreInstance,extendedFirebaseInstance=react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function(){var extendedFirebaseInstance=Object(_createFirebaseInstance__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(firebase,config,dispatch);return initializeAuth&&extendedFirebaseInstance.initializeAuth(),extendedFirebaseInstance},[firebase,config,dispatch]);return createFirestoreInstance?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider,{value:extendedFirebaseInstance},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReduxFirestoreProvider__WEBPACK_IMPORTED_MODULE_4__[\"default\"],_extends({},props,{initializeAuth:!1}),children)):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider,{value:extendedFirebaseInstance},children)}ReactReduxFirebaseProvider.defaultProps={initializeAuth:!0},ReactReduxFirebaseProvider.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,config:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,dispatch:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,firebase:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,initializeAuth:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,createFirestoreInstance:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};/* harmony default export */ __webpack_exports__[\"default\"] = (ReactReduxFirebaseProvider);\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/ReactReduxFirebaseProvider.js?");

/***/ }),

/***/ "./src/ReduxFirestoreContext.js":
/*!**************************************!*\
  !*** ./src/ReduxFirestoreContext.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar ReduxFirestoreContext=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);/* harmony default export */ __webpack_exports__[\"default\"] = (ReduxFirestoreContext);\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/ReduxFirestoreContext.js?");

/***/ }),

/***/ "./src/ReduxFirestoreProvider.js":
/*!***************************************!*\
  !*** ./src/ReduxFirestoreProvider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReduxFirestoreContext */ \"./src/ReduxFirestoreContext.js\");\n/* harmony import */ var _createFirebaseInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createFirebaseInstance */ \"./src/createFirebaseInstance.js\");\nfunction ReduxFirestoreProvider(){var props=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},children=props.children,config=props.config,dispatch=props.dispatch,firebase=props.firebase,createFirestoreInstance=props.createFirestoreInstance,initializeAuth=props.initializeAuth,extendedFirestoreInstance=react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function(){var extendedFirebaseInstance=firebase._reactReduxFirebaseExtended?firebase:Object(_createFirebaseInstance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firebase,config,dispatch),extendedFirestoreInstance=createFirestoreInstance(firebase,config,dispatch);return initializeAuth&&extendedFirebaseInstance.initializeAuth(),extendedFirestoreInstance},[firebase,config,dispatch,createFirestoreInstance,initializeAuth]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider,{value:extendedFirestoreInstance},children)}ReduxFirestoreProvider.defaultProps={initializeAuth:!0},ReduxFirestoreProvider.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,config:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,dispatch:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,createFirestoreInstance:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,initializeAuth:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,firebase:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired};/* harmony default export */ __webpack_exports__[\"default\"] = (ReduxFirestoreProvider);\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/ReduxFirestoreProvider.js?");

/***/ }),

/***/ "./src/actions/auth.js":
/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
/*! exports provided: unWatchUserProfile, handleProfileWatchResponse, watchUserProfile, createUserProfile, handleRedirectResult, init, login, reauthenticate, logout, createUser, resetPassword, confirmPasswordReset, verifyPasswordResetCode, updateProfile, updateAuth, updateEmail, reloadAuth, linkWithCredential, linkAndRetrieveDataWithCredential, linkWithPopup, linkWithRedirect, signInWithPhoneNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unWatchUserProfile\", function() { return unWatchUserProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleProfileWatchResponse\", function() { return handleProfileWatchResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchUserProfile\", function() { return watchUserProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUserProfile\", function() { return createUserProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleRedirectResult\", function() { return handleRedirectResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reauthenticate\", function() { return reauthenticate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetPassword\", function() { return resetPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmPasswordReset\", function() { return confirmPasswordReset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyPasswordResetCode\", function() { return verifyPasswordResetCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProfile\", function() { return updateProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateAuth\", function() { return updateAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateEmail\", function() { return updateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reloadAuth\", function() { return reloadAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkWithCredential\", function() { return linkWithCredential; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkAndRetrieveDataWithCredential\", function() { return linkAndRetrieveDataWithCredential; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkWithPopup\", function() { return linkWithPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkWithRedirect\", function() { return linkWithRedirect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signInWithPhoneNumber\", function() { return signInWithPhoneNumber; });\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/pick */ \"./node_modules/lodash/pick.js\");\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ \"./node_modules/lodash/omit.js\");\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _utils_populate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/populate */ \"./src/utils/populate.js\");\nfunction _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||\"[object Arguments]\"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function dispatchLoginError(dispatch,authError){var params=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return dispatch(_objectSpread({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].LOGIN_ERROR},params,{authError:authError}))}function unWatchUserProfile(firebase){var _firebase$_=firebase._,authUid=_firebase$_.authUid,_firebase$_$config=_firebase$_.config,userProfile=_firebase$_$config.userProfile,useFirestoreForProfile=_firebase$_$config.useFirestoreForProfile;firebase._.profileWatch&&(useFirestoreForProfile&&firebase.firestore?firebase._.profileWatch():firebase.database().ref().child(\"\".concat(userProfile,\"/\").concat(authUid)).off(\"value\",firebase._.profileWatch),firebase._.profileWatch=null)}function getProfileFromSnap(snap){return snap&&snap.val?snap.val():snap&&snap.data&&snap.exists?snap.data():null}function handleProfileWatchResponse(dispatch,firebase,userProfileSnap,token){var _firebase$_$config2=firebase._.config,profileParamsToPopulate=_firebase$_$config2.profileParamsToPopulate,autoPopulateProfile=_firebase$_$config2.autoPopulateProfile,useFirestoreForProfile=_firebase$_$config2.useFirestoreForProfile,logErrors=_firebase$_$config2.logErrors,profile=getProfileFromSnap(userProfileSnap);profileParamsToPopulate&&!useFirestoreForProfile&&(Array.isArray(profileParamsToPopulate)||Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"isString\"])(profileParamsToPopulate))?Object(_utils_populate__WEBPACK_IMPORTED_MODULE_7__[\"promisesForPopulate\"])(firebase,userProfileSnap.key,profile,profileParamsToPopulate).then(function(data){if(lodash_forEach__WEBPACK_IMPORTED_MODULE_2___default()(data,function(result,path){dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].SET,path:path,data:result,timestamp:Date.now(),requesting:!1,requested:!0})}),!autoPopulateProfile)dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].SET_PROFILE,profile:token?_objectSpread({},profile,{token:token}):profile});else{var populates=Object(_utils_populate__WEBPACK_IMPORTED_MODULE_7__[\"getPopulateObjs\"])(profileParamsToPopulate),_profile=userProfileSnap.val();dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].SET_PROFILE,profile:Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"populate\"])({profile:token?_objectSpread({},_profile,{token:token}):_profile,data:data},\"profile\",populates)})}}).catch(function(err){logErrors&&console.error(\"RRF: Error retrieving data for profile population. Firebase:\",err),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].UNAUTHORIZED_ERROR,authError:\"Error during profile population: \".concat(err.message)}),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].SET_PROFILE,profile:profile})}):(useFirestoreForProfile&&profileParamsToPopulate&&console.warn(\"Profile population is not yet supported for Firestore\"),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].SET_PROFILE,profile:token?_objectSpread({},profile,{token:token}):profile}))}function createProfileWatchErrorHandler(dispatch,firebase){var _firebase$_$config3=firebase._.config,onProfileListenerError=_firebase$_$config3.onProfileListenerError,logErrors=_firebase$_$config3.logErrors;return function(err){if(logErrors&&console.error(\"Error with profile listener: \".concat(err.message||\"\"),err),\"function\"==typeof onProfileListenerError){var factoryResult=onProfileListenerError(err,firebase);if(\"function\"==typeof factoryResult.then)return factoryResult}return Promise.reject(err)}}var watchUserProfile=function(dispatch,firebase){var _firebase$_2=firebase._,authUid=_firebase$_2.authUid,_firebase$_2$config=_firebase$_2.config,userProfile=_firebase$_2$config.userProfile,useFirestoreForProfile=_firebase$_2$config.useFirestoreForProfile,enableClaims=_firebase$_2$config.enableClaims;if(unWatchUserProfile(firebase),userProfile)if(useFirestoreForProfile&&firebase.firestore)firebase._.profileWatch=firebase.firestore().collection(userProfile).doc(authUid).onSnapshot(function(userProfileSnap){return enableClaims?firebase.auth().currentUser.getIdTokenResult(!0).then(function(token){return handleProfileWatchResponse(dispatch,firebase,userProfileSnap,token)}):handleProfileWatchResponse(dispatch,firebase,userProfileSnap,null)},createProfileWatchErrorHandler(dispatch,firebase));else if(firebase.database)firebase._.profileWatch=firebase.database().ref().child(\"\".concat(userProfile,\"/\").concat(authUid)).on(\"value\",function(userProfileSnap){enableClaims?firebase.auth().currentUser.getIdTokenResult(!0).then(function(token){return handleProfileWatchResponse(dispatch,firebase,userProfileSnap,token)}):handleProfileWatchResponse(dispatch,firebase,userProfileSnap,null)},createProfileWatchErrorHandler(dispatch,firebase));else throw new Error(\"Real Time Database or Firestore must be included to enable user profile\")};var createUserProfile=function(dispatch,firebase,userData,profile){var config=firebase._.config;if(!config.userProfile||!firebase.database&&!firebase.firestore)return Promise.resolve(userData);if(\"function\"==typeof config.profileFactory)try{profile=config.profileFactory(userData,profile,firebase)}catch(err){return console.error(\"Error occurred within profileFactory function:\",err.message||err),Promise.reject(err)}return config.useFirestoreForProfile?firebase.firestore().collection(config.userProfile).doc(userData.uid||userData.user.uid).get().then(function(profileSnap){if(!config.updateProfileOnLogin&&profileSnap.exists)return profileSnap.data();var newProfile=profile;if(!newProfile){var userDataObject=userData.uid?userData.toJSON?userData.toJSON():userData:userData.user.toJSON?userData.user.toJSON():userData.user;newProfile=_objectSpread({},lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(userDataObject,config.keysToRemoveFromAuth),{avatarUrl:userDataObject.photoURL})}return Array.isArray(newProfile.providerData)&&(newProfile.providerData=newProfile.providerData.map(function(providerDataItem){return lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(providerDataItem,config.keysToPreserveFromProviderData)})),profileSnap.ref.set(newProfile,{merge:!0}).then(function(){return newProfile})}).catch(function(err){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].UNAUTHORIZED_ERROR,authError:err}),Promise.reject(err)}):firebase.database().ref().child(\"\".concat(config.userProfile,\"/\").concat(userData.user?userData.user.uid:userData.uid)).once(\"value\").then(function(profileSnap){return config.updateProfileOnLogin||null===profileSnap.val()?profileSnap.ref.update(profile).then(function(){return profile}):profileSnap.val()}).catch(function(err){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].UNAUTHORIZED_ERROR,authError:err}),\"function\"==typeof config.onProfileWriteError&&config.onProfileWriteError(err,firebase),Promise.reject(err)})};var handleAuthStateChange=function(dispatch,firebase,authData){var config=firebase._.config;authData?(firebase._.authUid=authData.uid,config.presence&&Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"setupPresence\"])(dispatch,firebase),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].LOGIN,auth:authData,preserve:config.preserveOnLogin}),watchUserProfile(dispatch,firebase),\"function\"==typeof config.onAuthStateChanged&&config.onAuthStateChanged(authData,firebase,dispatch)):(\"function\"==typeof config.onAuthStateChanged&&firebase._.config.onAuthStateChanged(authData,firebase,dispatch),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_EMPTY_CHANGE,preserve:config.preserveOnEmptyAuthChange}),unWatchUserProfile(firebase))};var handleRedirectResult=function(dispatch,firebase,authData){if(\"function\"==typeof firebase._.config.onRedirectResult&&firebase._.config.onRedirectResult(authData,firebase,dispatch),authData&&authData.user){var user=authData.user;return firebase._.authUid=user.uid,watchUserProfile(dispatch,firebase),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].LOGIN,auth:user,preserve:firebase._.config.preserveOnLogin}),createUserProfile(dispatch,firebase,user,{email:user.email,displayName:user.providerData[0].displayName||user.email,avatarUrl:user.providerData[0].photoURL,providerData:user.providerData})}};var init=function(dispatch,firebase){firebase.auth&&(dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTHENTICATION_INIT_STARTED}),firebase.auth().onAuthStateChanged(function(authData){return handleAuthStateChange(dispatch,firebase,authData)}),firebase._.config.enableRedirectHandling&&\"function\"==typeof firebase.auth().getRedirectResult&&\"undefined\"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf(\"http\")&&firebase.auth().getRedirectResult().then(function(authData){return handleRedirectResult(dispatch,firebase,authData)}).catch(function(error){return dispatchLoginError(dispatch,error),Promise.reject(error)}),firebase.auth().currentUser,dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTHENTICATION_INIT_FINISHED}))};var login=function(dispatch,firebase,credentials){var _firebase$auth;firebase._.config.resetBeforeLogin&&dispatchLoginError(dispatch,null);var _getLoginMethodAndPar=Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"getLoginMethodAndParams\"])(firebase,credentials),method=_getLoginMethodAndPar.method,params=_getLoginMethodAndPar.params;return(_firebase$auth=firebase.auth())[method].apply(_firebase$auth,_toConsumableArray(params)).then(function(userData){if(!userData)return Promise.resolve(null);if([\"signInWithEmailAndPassword\",\"signInAndRetrieveDataWithEmailAndPassword\"].includes(method))return{user:userData};if([\"signInWithCustomToken\",\"signInAndRetrieveDataWithCustomToken\"].includes(method))return firebase._.config.updateProfileOnLogin?createUserProfile(dispatch,firebase,userData,credentials.profile):{user:userData};if(\"signInWithPhoneNumber\"===method)return _objectSpread({},userData,{confirm:function confirm(code){return userData.confirm(code).then(function(_ref){var user=_ref.user,additionalUserInfo=_ref.additionalUserInfo;return createUserProfile(dispatch,firebase,user,{phoneNumber:user.providerData[0].phoneNumber,providerData:user.providerData}).then(function(profile){return{profile:profile,user:user,additionalUserInfo:additionalUserInfo}})})}});var user=userData.user||userData;return createUserProfile(dispatch,firebase,user,credentials.profile||{email:user.email,displayName:user.providerData[0].displayName||user.email,avatarUrl:user.providerData[0].photoURL,providerData:user.providerData}).then(function(profile){return _objectSpread({profile:profile},userData)})}).catch(function(err){return dispatchLoginError(dispatch,err),Promise.reject(err)})};var reauthenticate=function(dispatch,firebase,credentials){var _firebase$auth$curren,_getReauthenticateMet=Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"getReauthenticateMethodAndParams\"])(firebase,credentials),method=_getReauthenticateMet.method,params=_getReauthenticateMet.params;return(_firebase$auth$curren=firebase.auth().currentUser)[method].apply(_firebase$auth$curren,_toConsumableArray(params)).then(function(userData){if(!userData)return Promise.resolve(null);if(\"reauthenticateWithPhoneNumber\"===method)return _objectSpread({},userData,{confirm:function confirm(code){return userData.confirm(code).then(function(_ref2){var user=_ref2.user,additionalUserInfo=_ref2.additionalUserInfo;return createUserProfile(dispatch,firebase,user,{phoneNumber:user.providerData[0].phoneNumber,providerData:user.providerData}).then(function(profile){return{profile:profile,user:user,additionalUserInfo:additionalUserInfo}})})}});var user=userData.user||userData;return createUserProfile(dispatch,firebase,user,credentials.profile||{email:user.email,displayName:user.providerData[0].displayName||user.email,avatarUrl:user.providerData[0].photoURL,providerData:user.providerData}).then(function(profile){return _objectSpread({profile:profile},userData)})}).catch(function(err){return dispatchLoginError(dispatch,err,{reauthenticate:!0}),Promise.reject(err)})};var logout=function(dispatch,firebase){return unWatchUserProfile(firebase),firebase.auth().signOut().then(function(){var action={type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].LOGOUT};return firebase._.config.preserveOnLogout&&(action.preserve=firebase._.config.preserveOnLogout),dispatch(action),firebase._.authUid=null,firebase})};var createUser=function(dispatch,firebase,_ref3,profile){var email=_ref3.email,password=_ref3.password;if(dispatchLoginError(dispatch,null),!email||!password){var error=new Error(\"Email and Password are required to create user\");return dispatchLoginError(dispatch,error),Promise.reject(error)}return firebase.auth().createUserWithEmailAndPassword(email,password).then(function(userData){return createUserProfile(dispatch,firebase,userData,profile||{email:email})}).catch(function(err){return dispatchLoginError(dispatch,err),Promise.reject(err)})};var resetPassword=function(dispatch,firebase,email){return dispatchLoginError(dispatch,null),firebase.auth().sendPasswordResetEmail(email).catch(function(err){if(err){switch(err.code){case\"auth/user-not-found\":dispatchLoginError(dispatch,new Error(\"The specified user account does not exist.\"));break;default:dispatchLoginError(dispatch,err);}return Promise.reject(err)}})};var confirmPasswordReset=function(dispatch,firebase,code,password){return dispatchLoginError(dispatch,null),firebase.auth().confirmPasswordReset(code,password).catch(function(err){if(err){switch(err.code){case\"auth/expired-action-code\":dispatchLoginError(dispatch,new Error(\"The action code has expired.\"));break;case\"auth/invalid-action-code\":dispatchLoginError(dispatch,new Error(\"The action code is invalid.\"));break;case\"auth/user-disabled\":dispatchLoginError(dispatch,new Error(\"The user is disabled.\"));break;case\"auth/user-not-found\":dispatchLoginError(dispatch,new Error(\"The user is not found.\"));break;case\"auth/weak-password\":dispatchLoginError(dispatch,new Error(\"The password is not strong enough.\"));break;default:dispatchLoginError(dispatch,err);}return Promise.reject(err)}})};var verifyPasswordResetCode=function(dispatch,firebase,code){return dispatchLoginError(dispatch,null),firebase.auth().verifyPasswordResetCode(code).catch(function(err){return err&&dispatchLoginError(dispatch,err),Promise.reject(err)})};var updateProfile=function(dispatch,firebase,profileUpdate,options){var config=firebase._.config;dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].PROFILE_UPDATE_START,payload:profileUpdate});var updatePromise=config.useFirestoreForProfile?_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"updateProfileOnFirestore\"]:_utils_auth__WEBPACK_IMPORTED_MODULE_6__[\"updateProfileOnRTDB\"];return updatePromise(firebase,profileUpdate,options).then(function(snap){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].PROFILE_UPDATE_SUCCESS,payload:config.useFirestoreForProfile?snap.data():snap.val()}),snap}).catch(function(error){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].PROFILE_UPDATE_ERROR,error:error}),Promise.reject(error)})};var updateAuth=function(dispatch,firebase,authUpdate,updateInProfile){if(dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_UPDATE_START,payload:authUpdate}),!firebase.auth().currentUser){var error=new Error(\"User must be logged in to update auth.\");return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_UPDATE_ERROR,payload:error}),Promise.reject(error)}return firebase.auth().currentUser.updateProfile(authUpdate).then(function(payload){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_UPDATE_SUCCESS,auth:firebase.auth().currentUser}),updateInProfile?updateProfile(dispatch,firebase,authUpdate):payload}).catch(function(error){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_UPDATE_ERROR,error:error}),Promise.reject(error)})};var updateEmail=function(dispatch,firebase,newEmail,updateInProfile){if(dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].EMAIL_UPDATE_START,payload:newEmail}),!firebase.auth().currentUser){var error=new Error(\"User must be logged in to update email.\");return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].EMAIL_UPDATE_ERROR,error:error}),Promise.reject(error)}return firebase.auth().currentUser.updateEmail(newEmail).then(function(payload){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].EMAIL_UPDATE_SUCCESS,payload:newEmail}),updateInProfile?updateProfile(dispatch,firebase,{email:newEmail}):payload}).catch(function(error){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].EMAIL_UPDATE_ERROR,error:error}),Promise.reject(error)})};var reloadAuth=function(dispatch,firebase){if(dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_RELOAD_START}),!firebase.auth().currentUser){var error=new Error(\"User must be logged in to reload auth.\");return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_RELOAD_ERROR,error:error}),Promise.reject(error)}return firebase.auth().currentUser.reload().then(function(){var auth=firebase.auth().currentUser;return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_RELOAD_SUCCESS,payload:auth}),auth}).catch(function(error){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_RELOAD_ERROR,error:error}),Promise.reject(error)})};var linkWithCredential=function(dispatch,firebase,credential){if(dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_START}),!firebase.auth().currentUser){var error=new Error(\"User must be logged in to link with credential.\");return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_ERROR,error:error}),Promise.reject(error)}return firebase.auth().currentUser.linkWithCredential(credential).then(function(auth){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_SUCCESS,payload:auth}),auth}).catch(function(error){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_ERROR,error:error}),Promise.reject(error)})};function linkWithAuthDispatch(promiseFunc,args,dispatch,firebase){if(dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_START}),!firebase.auth().currentUser){var error=new Error(\"User must be logged in to link with credential.\");return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_ERROR,error:error}),Promise.reject(error)}return promiseFunc.apply(void 0,_toConsumableArray(args)).then(function(auth){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_SUCCESS,payload:auth}),auth}).catch(function(error){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_3__[\"actionTypes\"].AUTH_LINK_ERROR,error:error}),Promise.reject(error)})}function linkAndRetrieveDataWithCredential(dispatch,firebase,credential){return linkWithAuthDispatch(firebase.auth().currentUser.linkAndRetrieveDataWithCredential,[credential],dispatch,firebase)}function linkWithPopup(dispatch,firebase,credential){return linkWithAuthDispatch(firebase.auth().currentUser.linkWithPopup,[credential],dispatch,firebase)}function linkWithRedirect(dispatch,firebase,provider){return linkWithAuthDispatch(firebase.auth().currentUser.linkWithRedirect,[provider],dispatch,firebase)}function signInWithPhoneNumber(firebase,dispatch,phoneNumber,applicationVerifier){var options=4<arguments.length&&arguments[4]!==void 0?arguments[4]:{};return login(dispatch,firebase,_objectSpread({phoneNumber:phoneNumber,applicationVerifier:applicationVerifier},options))}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/actions/auth.js?");

/***/ }),

/***/ "./src/actions/query.js":
/*!******************************!*\
  !*** ./src/actions/query.js ***!
  \******************************/
/*! exports provided: watchEvent, unWatchEvent, watchEvents, unWatchEvents, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchEvent\", function() { return watchEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unWatchEvent\", function() { return unWatchEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchEvents\", function() { return watchEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unWatchEvents\", function() { return unWatchEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/query */ \"./src/utils/query.js\");\nfunction watchEvent(firebase,dispatch,options){if(!firebase.database||\"function\"!=typeof firebase.database)throw new Error(\"Firebase database is required to create watchers\");var type=options.type,path=options.path,populates=options.populates,queryParams=options.queryParams,queryId=options.queryId,isQuery=options.isQuery,storeAs=options.storeAs,logErrors=firebase._.config.logErrors,watchPath=storeAs?\"\".concat(path,\"@\").concat(storeAs):path,id=queryId||Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"getQueryIdFromPath\"])(path),counter=Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"getWatcherCount\"])(firebase,type,watchPath,id);if(0<counter&&id&&Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"unsetWatcher\"])(firebase,dispatch,type,path,id),Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"setWatcher\"])(firebase,dispatch,type,watchPath,id),\"first_child\"===type)return firebase.database().ref().child(path).orderByKey().limitToFirst(1).once(\"value\").then(function(snapshot){return null===snapshot.val()&&dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].NO_VALUE,path:storeAs||path}),snapshot}).catch(function(err){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].ERROR,path:storeAs||path,payload:err}),Promise.reject(err)});var query=firebase.database().ref().child(path);return isQuery&&(query=Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"applyParamsToQuery\"])(queryParams,query)),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].START,path:storeAs||path}),\"once\"===type?query.once(\"value\").then(function(snapshot){return null===snapshot.val()?dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].NO_VALUE,path:storeAs||path}):populates?Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"populateAndDispatch\"])(firebase,dispatch,{path:path,storeAs:storeAs,snapshot:snapshot,data:snapshot.val(),populates:populates}):dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].SET,path:storeAs||path,data:snapshot.val(),ordered:Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"orderedFromSnapshot\"])(snapshot)})}).catch(function(err){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].UNAUTHORIZED_ERROR,payload:err}),Promise.reject(err)}):void query.on(type,function(snapshot){var data=\"child_removed\"===type?void 0:snapshot.val(),resultPath=storeAs||\"value\"===type?path:\"\".concat(path,\"/\").concat(snapshot.key);if(!populates){var ordered=\"child_added\"===type?[{key:snapshot.key,value:snapshot.val()}]:Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"orderedFromSnapshot\"])(snapshot);return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].SET,path:storeAs||resultPath,data:data,ordered:ordered})}return Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"populateAndDispatch\"])(firebase,dispatch,{path:path,storeAs:storeAs,snapshot:snapshot,data:snapshot.val(),populates:populates})},function(err){logErrors&&console.log(\"Error retrieving data for path: \".concat(path,\", storeAs: \").concat(storeAs,\". Firebase:\"),err),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].ERROR,storeAs:storeAs,path:path,payload:err})})}function unWatchEvent(firebase,dispatch,_ref){var type=_ref.type,path=_ref.path,storeAs=_ref.storeAs,queryId=_ref.queryId,watchPath=storeAs?\"\".concat(path,\"@\").concat(storeAs):path;Object(_utils_query__WEBPACK_IMPORTED_MODULE_1__[\"unsetWatcher\"])(firebase,dispatch,type,watchPath,queryId)}function watchEvents(firebase,dispatch,events){if(!Array.isArray(events))throw new Error(\"Events config must be an Array\");return events.map(function(event){return watchEvent(firebase,dispatch,event)})}function unWatchEvents(firebase,dispatch,events){events.forEach(function(event){return unWatchEvent(firebase,dispatch,event)})}function remove(firebase,dispatch,path){var options=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},_options$dispatchActi=options.dispatchAction,dispatchRemoveAction=firebase._.config.dispatchRemoveAction;return firebase.database().ref(path).remove().then(function(){return dispatchRemoveAction&&(!(void 0!==_options$dispatchActi)||_options$dispatchActi)&&dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].REMOVE,path:path}),path}).catch(function(err){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].ERROR,payload:err}),Promise.reject(err)})}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/actions/query.js?");

/***/ }),

/***/ "./src/actions/storage.js":
/*!********************************!*\
  !*** ./src/actions/storage.js ***!
  \********************************/
/*! exports provided: uploadFile, uploadFiles, deleteFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadFile\", function() { return uploadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadFiles\", function() { return uploadFiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFile\", function() { return deleteFile; });\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/actions */ \"./src/utils/actions.js\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.js\");\nfunction _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=_objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var FILE_UPLOAD_START=_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].FILE_UPLOAD_START,FILE_UPLOAD_ERROR=_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].FILE_UPLOAD_ERROR,FILE_UPLOAD_COMPLETE=_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].FILE_UPLOAD_COMPLETE,FILE_DELETE_START=_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].FILE_DELETE_START,FILE_DELETE_ERROR=_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].FILE_DELETE_ERROR,FILE_DELETE_COMPLETE=_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].FILE_DELETE_COMPLETE;function uploadFile(dispatch,firebase,config){if(!firebase.storage)throw new Error(\"Firebase storage is required to upload files\");var _ref=config||{},path=_ref.path,file=_ref.file,dbPath=_ref.dbPath,_ref$options=_ref.options,options=void 0===_ref$options?{progress:!1}:_ref$options,fileMetadata=(options||{}).metadata,logErrors=firebase._.config.logErrors,nameFromOptions=\"function\"==typeof options.name?options.name(file,firebase,config):options.name,filename=nameFromOptions||file.name,meta=_objectSpread({},config,{filename:filename});dispatch({type:FILE_UPLOAD_START,payload:_objectSpread({},config,{filename:filename})});return function uploadPromise(){return options.progress?Object(_utils_storage__WEBPACK_IMPORTED_MODULE_3__[\"uploadFileWithProgress\"])(dispatch,firebase,{path:path,file:file,filename:filename,meta:meta,fileMetadata:fileMetadata}):firebase.storage().ref(\"\".concat(path,\"/\").concat(filename)).put(file,fileMetadata)}().then(function(uploadTaskSnapshot){return dbPath&&(firebase.database||firebase.firestore)?Object(_utils_storage__WEBPACK_IMPORTED_MODULE_3__[\"writeMetadataToDb\"])({firebase:firebase,uploadTaskSnapshot:uploadTaskSnapshot,dbPath:dbPath,options:options}).then(function(payload){return dispatch({type:FILE_UPLOAD_COMPLETE,meta:_objectSpread({},config,{filename:filename}),payload:payload}),payload}):(dispatch({type:FILE_UPLOAD_COMPLETE,meta:_objectSpread({},config,{filename:filename}),payload:{uploadTaskSnapshot:uploadTaskSnapshot,uploadTaskSnaphot:uploadTaskSnapshot}}),{uploadTaskSnapshot:uploadTaskSnapshot,uploadTaskSnaphot:uploadTaskSnapshot})}).catch(function(err){return logErrors&&console.error&&console.error(\"RRF: Error uploading file: \".concat(err.message||err),err),dispatch({type:FILE_UPLOAD_ERROR,path:path,payload:err}),Promise.reject(err)})}function uploadFiles(dispatch,firebase,_ref3){var files=_ref3.files,other=_objectWithoutProperties(_ref3,[\"files\"]);return Promise.all(lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(files,function(file){return uploadFile(dispatch,firebase,_objectSpread({file:file},other))}))}function deleteFile(dispatch,firebase,_ref4){var path=_ref4.path,dbPath=_ref4.dbPath;return Object(_utils_actions__WEBPACK_IMPORTED_MODULE_2__[\"wrapInDispatch\"])(dispatch,{method:_utils_storage__WEBPACK_IMPORTED_MODULE_3__[\"deleteFile\"],args:[firebase,{path:path,dbPath:dbPath}],types:[FILE_DELETE_START,FILE_DELETE_COMPLETE,FILE_DELETE_ERROR]})}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/actions/storage.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: actionsPrefix, actionTypes, defaultConfig, supportedAuthProviders, topLevelPaths, v3ErrorMessage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionsPrefix\", function() { return actionsPrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionTypes\", function() { return actionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultConfig\", function() { return defaultConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"supportedAuthProviders\", function() { return supportedAuthProviders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"topLevelPaths\", function() { return topLevelPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"v3ErrorMessage\", function() { return v3ErrorMessage; });\nvar actionsPrefix=\"@@reactReduxFirebase\";var actionTypes={START:\"\".concat(\"@@reactReduxFirebase\",\"/START\"),SET:\"\".concat(\"@@reactReduxFirebase\",\"/SET\"),REMOVE:\"\".concat(\"@@reactReduxFirebase\",\"/REMOVE\"),MERGE:\"\".concat(\"@@reactReduxFirebase\",\"/MERGE\"),SET_PROFILE:\"\".concat(\"@@reactReduxFirebase\",\"/SET_PROFILE\"),LOGIN:\"\".concat(\"@@reactReduxFirebase\",\"/LOGIN\"),LOGOUT:\"\".concat(\"@@reactReduxFirebase\",\"/LOGOUT\"),LOGIN_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/LOGIN_ERROR\"),NO_VALUE:\"\".concat(\"@@reactReduxFirebase\",\"/NO_VALUE\"),UNAUTHORIZED_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/UNAUTHORIZED_ERROR\"),ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/ERROR\"),CLEAR_ERRORS:\"\".concat(\"@@reactReduxFirebase\",\"/CLEAR_ERRORS\"),SET_LISTENER:\"\".concat(\"@@reactReduxFirebase\",\"/SET_LISTENER\"),UNSET_LISTENER:\"\".concat(\"@@reactReduxFirebase\",\"/UNSET_LISTENER\"),AUTHENTICATION_INIT_STARTED:\"\".concat(\"@@reactReduxFirebase\",\"/AUTHENTICATION_INIT_STARTED\"),AUTHENTICATION_INIT_FINISHED:\"\".concat(\"@@reactReduxFirebase\",\"/AUTHENTICATION_INIT_FINISHED\"),SESSION_START:\"\".concat(\"@@reactReduxFirebase\",\"/SESSION_START\"),SESSION_END:\"\".concat(\"@@reactReduxFirebase\",\"/SESSION_END\"),FILE_UPLOAD_START:\"\".concat(\"@@reactReduxFirebase\",\"/FILE_UPLOAD_START\"),FILE_UPLOAD_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/FILE_UPLOAD_ERROR\"),FILE_UPLOAD_PROGRESS:\"\".concat(\"@@reactReduxFirebase\",\"/FILE_UPLOAD_PROGRESS\"),FILE_UPLOAD_COMPLETE:\"\".concat(\"@@reactReduxFirebase\",\"/FILE_UPLOAD_COMPLETE\"),FILE_DELETE_START:\"\".concat(\"@@reactReduxFirebase\",\"/FILE_DELETE_START\"),FILE_DELETE_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/FILE_DELETE_ERROR\"),FILE_DELETE_COMPLETE:\"\".concat(\"@@reactReduxFirebase\",\"/FILE_DELETE_COMPLETE\"),AUTH_UPDATE_START:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_UPDATE_START\"),AUTH_UPDATE_SUCCESS:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_UPDATE_SUCCESS\"),AUTH_UPDATE_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_UPDATE_ERROR\"),PROFILE_UPDATE_START:\"\".concat(\"@@reactReduxFirebase\",\"/PROFILE_UPDATE_START\"),PROFILE_UPDATE_SUCCESS:\"\".concat(\"@@reactReduxFirebase\",\"/PROFILE_UPDATE_SUCCESS\"),PROFILE_UPDATE_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/PROFILE_UPDATE_ERROR\"),EMAIL_UPDATE_START:\"\".concat(\"@@reactReduxFirebase\",\"/EMAIL_UPDATE_START\"),EMAIL_UPDATE_SUCCESS:\"\".concat(\"@@reactReduxFirebase\",\"/EMAIL_UPDATE_SUCCESS\"),EMAIL_UPDATE_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/EMAIL_UPDATE_ERROR\"),AUTH_RELOAD_START:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_RELOAD_START\"),AUTH_RELOAD_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_RELOAD_ERROR\"),AUTH_RELOAD_SUCCESS:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_RELOAD_SUCCESS\"),AUTH_LINK_START:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_LINK_START\"),AUTH_LINK_ERROR:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_LINK_ERROR\"),AUTH_LINK_SUCCESS:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_LINK_SUCCESS\"),AUTH_EMPTY_CHANGE:\"\".concat(\"@@reactReduxFirebase\",\"/AUTH_EMPTY_CHANGE\")};var defaultConfig={userProfile:null,presence:null,sessions:\"sessions\",enableLogging:!1,logErrors:!0,preserveOnLogout:null,preserveOnEmptyAuthChange:null,resetBeforeLogin:!0,updateProfileOnLogin:!0,enableRedirectHandling:!0,autoPopulateProfile:!1,setProfilePopulateResults:!1,dispatchOnUnsetListener:!0,dispatchRemoveAction:!1,enableEmptyAuthChanges:!0,firebaseStateName:\"firebase\",attachAuthIsReady:!1,keysToRemoveFromAuth:[\"appName\",\"apiKey\",\"authDomain\",\"redirectEventId\",\"stsTokenManager\",\"uid\"],keysToPreserveFromProviderData:[\"email\",\"phoneNumber\",\"photoURL\",\"providerId\",\"uid\"]};var supportedAuthProviders=[\"google\",\"github\",\"twitter\",\"facebook\",\"microsoft.com\"];var topLevelPaths=[\"auth\",\"profile\",\"ordered\",\"data\"];var v3ErrorMessage=\"Context from react-redux not found. If you are using react-redux v6 a v3.*.* version of react-redux-firebase is required. Please checkout the v3 migration guide: http://bit.ly/2SRNdiO\";/* harmony default export */ __webpack_exports__[\"default\"] = ({actionTypes:actionTypes,defaultConfig:defaultConfig});\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/constants.js?");

/***/ }),

/***/ "./src/createFirebaseInstance.js":
/*!***************************************!*\
  !*** ./src/createFirebaseInstance.js ***!
  \***************************************/
/*! exports provided: default, getFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createFirebaseInstance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFirebase\", function() { return getFirebase; });\n/* harmony import */ var lodash_fp_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp/merge */ \"./node_modules/lodash/fp/merge.js\");\n/* harmony import */ var lodash_fp_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_merge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/actions */ \"./src/utils/actions.js\");\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/auth */ \"./src/actions/auth.js\");\n/* harmony import */ var _actions_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/query */ \"./src/actions/query.js\");\n/* harmony import */ var _actions_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/storage */ \"./src/actions/storage.js\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var firebaseInstance;function createFirebaseInstance(firebase,configs,dispatch){configs.enableLogging&&firebase.database&&\"function\"==typeof firebase.database.enableLogging&&firebase.database.enableLogging(configs.enableLogging);firebase._=lodash_fp_merge__WEBPACK_IMPORTED_MODULE_0___default()({watchers:{},listeners:{},callbacks:{},queries:{},config:configs,authUid:null},firebase._);var withMeta=function(method,path,value,onComplete){if(lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(value)){var prefix=\"update\"===method?\"updated\":\"created\",dataWithMeta=_objectSpread({},value,_defineProperty({},\"\".concat(prefix,\"At\"),firebase.database.ServerValue.TIMESTAMP));return firebase.auth().currentUser&&(dataWithMeta[\"\".concat(prefix,\"By\")]=firebase.auth().currentUser.uid),firebase.database().ref(path)[method](dataWithMeta,onComplete)}return firebase.database().ref(path)[method](value,onComplete)},actionCreators=Object(_utils_actions__WEBPACK_IMPORTED_MODULE_3__[\"mapWithFirebaseAndDispatch\"])(firebase,dispatch,{signInWithPhoneNumber:_actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"signInWithPhoneNumber\"]},{initializeAuth:_actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"init\"]});return firebaseInstance=Object.assign(firebase,_objectSpread({_reactReduxFirebaseExtended:!0,ref:function ref(path){return firebase.database().ref(path)},set:function set(path,value,onComplete){return firebase.database().ref(path).set(value,onComplete)},setWithMeta:function setWithMeta(path,value,onComplete){return withMeta(\"set\",path,value,onComplete)},uniqueSet:function uniqueSet(path,value,onComplete){return firebase.database().ref(path).transaction(function(d){return null===d?value:void 0}).then(function(_ref){var committed=_ref.committed,snapshot=_ref.snapshot;if(!committed){var newError=new Error(\"Path already exists.\");return onComplete&&onComplete(newError),Promise.reject(newError)}return onComplete&&onComplete(snapshot),snapshot})},push:function push(path,value,onComplete){return firebase.database().ref(path).push(value,onComplete)},pushWithMeta:function pushWithMeta(path,value,onComplete){return withMeta(\"push\",path,value,onComplete)},remove:function remove(path,onComplete,options){return _actions_query__WEBPACK_IMPORTED_MODULE_5__[\"remove\"](firebase,dispatch,path,options).then(function(){return\"function\"==typeof onComplete&&onComplete(),path})},update:function update(path,value,onComplete){return firebase.database().ref(path).update(value,onComplete)},updateWithMeta:function updateWithMeta(path,value,onComplete){return withMeta(\"update\",path,value,onComplete)},login:function login(credentials){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"login\"](dispatch,firebase,credentials)},reauthenticate:function reauthenticate(credentials){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"reauthenticate\"](dispatch,firebase,credentials)},handleRedirectResult:function handleRedirectResult(authData){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"handleRedirectResult\"](dispatch,firebase,authData)},logout:function logout(){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"logout\"](dispatch,firebase)},updateAuth:function updateAuth(authUpdate,updateInProfile){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"updateAuth\"](dispatch,firebase,authUpdate,updateInProfile)},updateEmail:function updateEmail(newEmail,updateInProfile){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"updateEmail\"](dispatch,firebase,newEmail,updateInProfile)},updateProfile:function updateProfile(profileUpdate,options){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"updateProfile\"](dispatch,firebase,profileUpdate,options)},uploadFile:function uploadFile(path,file,dbPath,options){return _actions_storage__WEBPACK_IMPORTED_MODULE_6__[\"uploadFile\"](dispatch,firebase,{path:path,file:file,dbPath:dbPath,options:options})},uploadFiles:function uploadFiles(path,files,dbPath,options){return _actions_storage__WEBPACK_IMPORTED_MODULE_6__[\"uploadFiles\"](dispatch,firebase,{path:path,files:files,dbPath:dbPath,options:options})},deleteFile:function deleteFile(path,dbPath){return _actions_storage__WEBPACK_IMPORTED_MODULE_6__[\"deleteFile\"](dispatch,firebase,{path:path,dbPath:dbPath})},createUser:function createUser(credentials,profile){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"createUser\"](dispatch,firebase,credentials,profile)},resetPassword:function resetPassword(email){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"resetPassword\"](dispatch,firebase,email)},confirmPasswordReset:function confirmPasswordReset(code,password){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"confirmPasswordReset\"](dispatch,firebase,code,password)},verifyPasswordResetCode:function verifyPasswordResetCode(code){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"verifyPasswordResetCode\"](dispatch,firebase,code)},watchEvent:function watchEvent(type,path,storeAs){var options=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return _actions_query__WEBPACK_IMPORTED_MODULE_5__[\"watchEvent\"](firebase,dispatch,_objectSpread({type:type,path:path,storeAs:storeAs},options))},unWatchEvent:function unWatchEvent(type,path,queryId){var options=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return _actions_query__WEBPACK_IMPORTED_MODULE_5__[\"unWatchEvent\"](firebase,dispatch,_objectSpread({type:type,path:path,queryId:queryId},options))},reloadAuth:function reloadAuth(){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"reloadAuth\"](dispatch,firebase)},linkWithCredential:function linkWithCredential(credential){return _actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"linkWithCredential\"](dispatch,firebase,credential)},promiseEvents:function promiseEvents(watchArray,options){var inputAsFunc=Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"createCallable\"])(watchArray),prevData=inputAsFunc(options,firebase),queryConfigs=Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getEventsFromInput\"])(prevData);return Promise.all(queryConfigs.map(function(queryConfig){return _actions_query__WEBPACK_IMPORTED_MODULE_5__[\"watchEvent\"](firebase,dispatch,queryConfig)}))},dispatch:dispatch},actionCreators)),firebaseInstance}function getFirebase(){if(!firebaseInstance)throw new Error(\"Firebase instance does not yet exist. Check your compose function.\");return firebaseInstance}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/createFirebaseInstance.js?");

/***/ }),

/***/ "./src/firebaseConnect.js":
/*!********************************!*\
  !*** ./src/firebaseConnect.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return firebaseConnect; });\n/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/differenceWith */ \"./node_modules/lodash/differenceWith.js\");\n/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/query */ \"./src/actions/query.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReactReduxFirebaseContext */ \"./src/ReactReduxFirebaseContext.js\");\nfunction _typeof(obj){return _typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&\"function\"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj},_typeof(obj)}function _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,\"value\"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return call&&(\"object\"===_typeof(call)||\"function\"==typeof call)?call:_assertThisInitialized(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return self}function _inherits(subClass,superClass){if(\"function\"!=typeof superClass&&null!==superClass)throw new TypeError(\"Super expression must either be null or a function\");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function firebaseConnect(){var queriesConfig=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return function(WrappedComponent){function FirebaseConnectWithContext(props){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Consumer,null,function(_internalFirebase){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FirebaseConnectWrapped,_extends({},props,{dispatch:_internalFirebase.dispatch,firebase:_internalFirebase}))})}var FirebaseConnectWrapped=function(_Component){function FirebaseConnectWrapped(){var _getPrototypeOf2,_this;_classCallCheck(this,FirebaseConnectWrapped);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(FirebaseConnectWrapped)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),\"firebaseEvents\",[]),_defineProperty(_assertThisInitialized(_this),\"firebase\",null),_defineProperty(_assertThisInitialized(_this),\"prevData\",null),_this}return _inherits(FirebaseConnectWrapped,_Component),_createClass(FirebaseConnectWrapped,[{key:\"componentDidMount\",value:function componentDidMount(){var _this$props=this.props,firebase=_this$props.firebase,dispatch=_this$props.dispatch,inputAsFunc=Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"createCallable\"])(queriesConfig);this.prevData=inputAsFunc(this.props,this.props);var ref=firebase.ref,helpers=firebase.helpers,storage=firebase.storage,database=firebase.database,auth=firebase.auth;this.firebase=_objectSpread({ref:ref,storage:storage,database:database,auth:auth},helpers),this._firebaseEvents=Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getEventsFromInput\"])(this.prevData),Object(_actions_query__WEBPACK_IMPORTED_MODULE_5__[\"watchEvents\"])(firebase,dispatch,this._firebaseEvents)}},{key:\"componentWillUnmount\",value:function componentWillUnmount(){var _this$props2=this.props,firebase=_this$props2.firebase,dispatch=_this$props2.dispatch;Object(_actions_query__WEBPACK_IMPORTED_MODULE_5__[\"unWatchEvents\"])(firebase,dispatch,this._firebaseEvents)}},{key:\"UNSAFE_componentWillReceiveProps\",value:function UNSAFE_componentWillReceiveProps(np){var _this$props3=this.props,firebase=_this$props3.firebase,dispatch=_this$props3.dispatch,inputAsFunc=Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"createCallable\"])(queriesConfig),data=inputAsFunc(np,this.store);if(!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(data,this.prevData)){var itemsToSubscribe=lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0___default()(data,this.prevData,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default.a),itemsToUnsubscribe=lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0___default()(this.prevData,data,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default.a);this.prevData=data,Object(_actions_query__WEBPACK_IMPORTED_MODULE_5__[\"unWatchEvents\"])(firebase,dispatch,Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getEventsFromInput\"])(itemsToUnsubscribe)),this._firebaseEvents=Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getEventsFromInput\"])(data),Object(_actions_query__WEBPACK_IMPORTED_MODULE_5__[\"watchEvents\"])(firebase,dispatch,Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"getEventsFromInput\"])(itemsToSubscribe))}}},{key:\"render\",value:function render(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent,this.props)}}]),FirebaseConnectWrapped}(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]);return _defineProperty(FirebaseConnectWrapped,\"displayName\",Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"wrapDisplayName\"])(WrappedComponent,\"FirebaseConnectWrapped\")),_defineProperty(FirebaseConnectWrapped,\"wrappedComponent\",WrappedComponent),FirebaseConnectWrapped.propTypes={dispatch:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,firebase:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired},FirebaseConnectWithContext.displayName=Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"wrapDisplayName\"])(WrappedComponent,\"FirebaseConnect\"),FirebaseConnectWithContext.wrappedComponent=WrappedComponent,hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(FirebaseConnectWithContext,WrappedComponent)}}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/firebaseConnect.js?");

/***/ }),

/***/ "./src/firestoreConnect.js":
/*!*********************************!*\
  !*** ./src/firestoreConnect.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return firestoreConnect; });\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReduxFirestoreContext */ \"./src/ReduxFirestoreContext.js\");\n/* harmony import */ var _ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReactReduxFirebaseContext */ \"./src/ReactReduxFirebaseContext.js\");\nfunction _typeof(obj){return _typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&\"function\"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj},_typeof(obj)}function _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,\"value\"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return call&&(\"object\"===_typeof(call)||\"function\"==typeof call)?call:_assertThisInitialized(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return self}function _inherits(subClass,superClass){if(\"function\"!=typeof superClass&&null!==superClass)throw new TypeError(\"Super expression must either be null or a function\");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function firestoreConnect(){var queriesConfig=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return function(WrappedComponent){function FirestoreConnectWithContext(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Consumer,null,function(_internalFirebase){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Consumer,null,function(_internalFirestore){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirestoreConnectWrapped,_extends({},props,{dispatch:_internalFirebase.dispatch,firestore:_internalFirestore,firebase:_internalFirebase}))})})}var FirestoreConnectWrapped=function(_Component){function FirestoreConnectWrapped(){var _getPrototypeOf2,_this;_classCallCheck(this,FirestoreConnectWrapped);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(FirestoreConnectWrapped)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),\"prevData\",null),_this}return _inherits(FirestoreConnectWrapped,_Component),_createClass(FirestoreConnectWrapped,[{key:\"componentDidMount\",value:function componentDidMount(){if(this.firestoreIsEnabled){var inputAsFunc=Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"createCallable\"])(queriesConfig);this.prevData=inputAsFunc(this.props,this.props),this.props.firestore.setListeners(this.prevData)}}},{key:\"componentWillUnmount\",value:function componentWillUnmount(){this.firestoreIsEnabled&&this.prevData&&this.props.firestore.unsetListeners(this.prevData)}},{key:\"UNSAFE_componentWillReceiveProps\",value:function UNSAFE_componentWillReceiveProps(np){var firestore=this.props.firestore,inputAsFunc=Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"createCallable\"])(queriesConfig),data=inputAsFunc(np,this.props);if(this.firestoreIsEnabled&&!lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(data,this.prevData)){var changes=Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getChanges\"])(data,this.prevData);this.prevData=data,firestore.unsetListeners(changes.removed),firestore.setListeners(changes.added)}}},{key:\"render\",value:function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent,this.props)}},{key:\"firestoreIsEnabled\",get:function get(){return!!this.props.firestore}}]),FirestoreConnectWrapped}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);return _defineProperty(FirestoreConnectWrapped,\"wrappedComponent\",WrappedComponent),_defineProperty(FirestoreConnectWrapped,\"displayName\",Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"wrapDisplayName\"])(WrappedComponent,\"FirestoreConnectWrapped\")),FirestoreConnectWrapped.propTypes={dispatch:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,firebase:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,firestore:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object},FirestoreConnectWithContext.displayName=Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"wrapDisplayName\"])(WrappedComponent,\"FirestoreConnect\"),FirestoreConnectWithContext.wrappedComponent=WrappedComponent,hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(FirestoreConnectWithContext,WrappedComponent)}}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/firestoreConnect.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: getVal, isLoaded, isEmpty, fixPath, populate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getVal\", function() { return getVal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLoaded\", function() { return isLoaded; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fixPath\", function() { return fixPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populate\", function() { return populate; });\n/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/some */ \"./node_modules/lodash/some.js\");\n/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/defaultsDeep */ \"./node_modules/lodash/defaultsDeep.js\");\n/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/reduce */ \"./node_modules/lodash/reduce.js\");\n/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mapValues */ \"./node_modules/lodash/mapValues.js\");\n/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/has */ \"./node_modules/lodash/has.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/set */ \"./node_modules/lodash/set.js\");\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/size */ \"./node_modules/lodash/size.js\");\n/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _utils_populate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/populate */ \"./src/utils/populate.js\");\n/* harmony import */ var _utils_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/reducers */ \"./src/utils/reducers.js\");\nfunction _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||\"[object Arguments]\"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getVal(firebase,path,notSetValue){if(!firebase)return notSetValue;var dotPath=Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_11__[\"getDotStrPath\"])(path),valueAtPath=lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(firebase,dotPath,notSetValue);return valueAtPath}function isLoaded(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return!(args&&args.length)||args.every(function(arg){return arg!==void 0&&!1!==lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(arg,\"isLoaded\")})}function isEmpty(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return!(args&&args.length)||args.some(function(arg){return!(arg&&lodash_size__WEBPACK_IMPORTED_MODULE_8___default()(arg))||!0===arg.isEmpty})}function fixPath(path){return(\"/\"===path.substring(0,1)?\"\":\"/\")+path}function buildChildList(state,list,p){var mapFn=Array.isArray(list)?lodash_map__WEBPACK_IMPORTED_MODULE_4___default.a:lodash_mapValues__WEBPACK_IMPORTED_MODULE_3___default.a;return mapFn(list,function(val,key){var getKey=val;(!0===val||p.populateByKey)&&(getKey=key);var dotRoot=Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_11__[\"getDotStrPath\"])(p.root),pathArr=[dotRoot,getKey];p.childParam&&pathArr.push(p.childParam);var pathString=pathArr.join(\".\");return lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(state.data,pathString)?p.keyProp?_objectSpread(_defineProperty({},p.keyProp,getKey),lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(state.data,pathString)):lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(state.data,pathString):!0===val||p.populateByKey?val:getKey})}function populateChild(state,child,p){var childVal=lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(child,p.child);if(!child||!childVal)return null;if(\"string\"==typeof childVal||childVal instanceof String){var dotRoot=p.root.split(\"/\").filter(Boolean).join(\".\"),pathArr=[dotRoot,childVal];p.childParam&&pathArr.push(p.childParam);var pathString=pathArr.join(\".\"),populateVal=lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(state.data,pathString);return populateVal?lodash_set__WEBPACK_IMPORTED_MODULE_7___default()({},p.childAlias||p.child,p.keyProp?_objectSpread(_defineProperty({},p.keyProp,childVal),populateVal):populateVal):child}return lodash_set__WEBPACK_IMPORTED_MODULE_7___default()({},p.childAlias||p.child,buildChildList(state,childVal,p))}function populate(state,path,populates,notSetValue){var splitPath=path.split(\"/\").filter(Boolean),pathArr=-1===_constants__WEBPACK_IMPORTED_MODULE_9__[\"topLevelPaths\"].indexOf(splitPath[0])?[\"data\"].concat(_toConsumableArray(splitPath)):splitPath,dotPath=pathArr.join(\".\"),data=lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(state,dotPath,notSetValue);if(!state||data===notSetValue)return notSetValue;if(null===data)return null;var populatesForData=Object(_utils_populate__WEBPACK_IMPORTED_MODULE_10__[\"getPopulateObjs\"])(\"function\"==typeof populates?populates(pathArr.slice(-1)[0],data):populates);if(Array.isArray(data)){var someArrayItemHasKey=function(array){return function(key){return lodash_some__WEBPACK_IMPORTED_MODULE_0___default()(array,function(item){return lodash_has__WEBPACK_IMPORTED_MODULE_5___default()(item,key)})}},_dataHasPopulateChilds=lodash_some__WEBPACK_IMPORTED_MODULE_0___default()(populatesForData,function(populate){return someArrayItemHasKey(data)([\"value\",populate.child])});return _dataHasPopulateChilds?data.map(function(_ref){var key=_ref.key,dataValue=_ref.value,populatedValue=populatesForData.map(function(p){return populateChild(state,dataValue,p)}).reduce(function(acc,v){return lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1___default()(v,acc)},dataValue);return{key:key,value:populatedValue}}):data}var dataHasPopulateChilds=lodash_some__WEBPACK_IMPORTED_MODULE_0___default()(populatesForData,function(p){return lodash_has__WEBPACK_IMPORTED_MODULE_5___default()(data,p.child)});return dataHasPopulateChilds?populatesForData.map(function(p){return populateChild(state,data,p)}).reduce(function(acc,v){return lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1___default()(v,acc)},data):-1===pathArr.indexOf(\"profile\")?lodash_mapValues__WEBPACK_IMPORTED_MODULE_3___default()(data,function(child,childKey){var key=\"ordered\"===pathArr[0]?child.key:childKey,populatesForDataItem=Object(_utils_populate__WEBPACK_IMPORTED_MODULE_10__[\"getPopulateObjs\"])(\"function\"==typeof populates?populates(key,child):populates),dataHasPopulateChilds=lodash_some__WEBPACK_IMPORTED_MODULE_0___default()(populatesForDataItem,function(p){return lodash_has__WEBPACK_IMPORTED_MODULE_5___default()(child,p.child)});return dataHasPopulateChilds?lodash_reduce__WEBPACK_IMPORTED_MODULE_2___default()(lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(populatesForDataItem,function(p){return populateChild(state,child,p)}),function(obj,v){return lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1___default()(v,obj)},child):child}):data}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createFirebaseInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFirebaseInstance */ \"./src/createFirebaseInstance.js\");\n/* harmony import */ var _ReactReduxFirebaseProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactReduxFirebaseProvider */ \"./src/ReactReduxFirebaseProvider.js\");\n/* harmony import */ var _ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReactReduxFirebaseContext */ \"./src/ReactReduxFirebaseContext.js\");\n/* harmony import */ var _ReduxFirestoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReduxFirestoreProvider */ \"./src/ReduxFirestoreProvider.js\");\n/* harmony import */ var _ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReduxFirestoreContext */ \"./src/ReduxFirestoreContext.js\");\n/* harmony import */ var _firebaseConnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebaseConnect */ \"./src/firebaseConnect.js\");\n/* harmony import */ var _firestoreConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firestoreConnect */ \"./src/firestoreConnect.js\");\n/* harmony import */ var _withFirebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withFirebase */ \"./src/withFirebase.js\");\n/* harmony import */ var _withFirestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withFirestore */ \"./src/withFirestore.js\");\n/* harmony import */ var _useFirebaseConnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useFirebaseConnect */ \"./src/useFirebaseConnect.js\");\n/* harmony import */ var _useFirestoreConnect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useFirestoreConnect */ \"./src/useFirestoreConnect.js\");\n/* harmony import */ var _useFirebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useFirebase */ \"./src/useFirebase.js\");\n/* harmony import */ var _useFirestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useFirestore */ \"./src/useFirestore.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducer */ \"./src/reducer.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}/* harmony default export */ __webpack_exports__[\"default\"] = (_objectSpread({ReactReduxFirebaseProvider:_ReactReduxFirebaseProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"],ReactReduxFirebaseContext:_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"],ReduxFirestoreContext:_ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"],ReduxFirestoreProvider:_ReduxFirestoreProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"],createFirebaseInstance:_createFirebaseInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"],firebaseConnect:_firebaseConnect__WEBPACK_IMPORTED_MODULE_5__[\"default\"],firestoreConnect:_firestoreConnect__WEBPACK_IMPORTED_MODULE_6__[\"default\"],withFirebase:_withFirebase__WEBPACK_IMPORTED_MODULE_7__[\"default\"],withFirestore:_withFirestore__WEBPACK_IMPORTED_MODULE_8__[\"default\"],useFirebase:_useFirebase__WEBPACK_IMPORTED_MODULE_11__[\"default\"],useFirebaseConnect:_useFirebaseConnect__WEBPACK_IMPORTED_MODULE_9__[\"default\"],useFirestore:_useFirestore__WEBPACK_IMPORTED_MODULE_12__[\"default\"],useFirestoreConnect:_useFirestoreConnect__WEBPACK_IMPORTED_MODULE_10__[\"default\"],reducer:_reducer__WEBPACK_IMPORTED_MODULE_13__[\"default\"],firebaseReducer:_reducer__WEBPACK_IMPORTED_MODULE_13__[\"default\"],constants:_constants__WEBPACK_IMPORTED_MODULE_14__[\"default\"],actionTypes:_constants__WEBPACK_IMPORTED_MODULE_14__[\"actionTypes\"],getFirebase:_createFirebaseInstance__WEBPACK_IMPORTED_MODULE_0__[\"getFirebase\"],authIsReady:_utils_auth__WEBPACK_IMPORTED_MODULE_15__[\"authIsReady\"]},_helpers__WEBPACK_IMPORTED_MODULE_16__));\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/index.js?");

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/reducers */ \"./src/utils/reducers.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/reducers.js\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({requesting:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"requestingReducer\"],requested:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"requestedReducer\"],timestamps:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"timestampsReducer\"],data:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"dataReducer\"],ordered:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"orderedReducer\"],auth:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"authReducer\"],authError:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"authErrorReducer\"],profile:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"profileReducer\"],listeners:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"listenersReducer\"],isInitializing:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"isInitializingReducer\"],errors:_reducers__WEBPACK_IMPORTED_MODULE_1__[\"errorsReducer\"]}));\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/reducer.js?");

/***/ }),

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! exports provided: isInitializingReducer, requestingReducer, requestedReducer, timestampsReducer, authReducer, authErrorReducer, profileReducer, errorsReducer, listenersReducer, dataReducer, orderedReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isInitializingReducer\", function() { return isInitializingReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestingReducer\", function() { return requestingReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestedReducer\", function() { return requestedReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timestampsReducer\", function() { return timestampsReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authReducer\", function() { return authReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authErrorReducer\", function() { return authErrorReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profileReducer\", function() { return profileReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorsReducer\", function() { return errorsReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenersReducer\", function() { return listenersReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataReducer\", function() { return dataReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderedReducer\", function() { return orderedReducer; });\n/* harmony import */ var lodash_fp_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp/assign */ \"./node_modules/lodash/fp/assign.js\");\n/* harmony import */ var lodash_fp_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_fp_setWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp/setWith */ \"./node_modules/lodash/fp/setWith.js\");\n/* harmony import */ var lodash_fp_setWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_setWith__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/omit */ \"./node_modules/lodash/omit.js\");\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/pick */ \"./node_modules/lodash/pick.js\");\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _utils_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reducers */ \"./src/utils/reducers.js\");\nfunction _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||\"[object Arguments]\"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var START=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].START,SET=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].SET,SET_PROFILE=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].SET_PROFILE,MERGE=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].MERGE,LOGIN=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].LOGIN,LOGOUT=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].LOGOUT,LOGIN_ERROR=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].LOGIN_ERROR,CLEAR_ERRORS=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].CLEAR_ERRORS,REMOVE=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].REMOVE,NO_VALUE=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].NO_VALUE,SET_LISTENER=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].SET_LISTENER,UNSET_LISTENER=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].UNSET_LISTENER,AUTHENTICATION_INIT_STARTED=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].AUTHENTICATION_INIT_STARTED,AUTHENTICATION_INIT_FINISHED=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].AUTHENTICATION_INIT_FINISHED,AUTH_EMPTY_CHANGE=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].AUTH_EMPTY_CHANGE,AUTH_LINK_SUCCESS=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].AUTH_LINK_SUCCESS,UNAUTHORIZED_ERROR=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].UNAUTHORIZED_ERROR,AUTH_UPDATE_SUCCESS=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].AUTH_UPDATE_SUCCESS,AUTH_RELOAD_SUCCESS=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].AUTH_RELOAD_SUCCESS,PROFILE_UPDATE_SUCCESS=_constants__WEBPACK_IMPORTED_MODULE_6__[\"actionTypes\"].PROFILE_UPDATE_SUCCESS;function isInitializingReducer(){var state=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0],action=1<arguments.length?arguments[1]:void 0;switch(action.type){case AUTHENTICATION_INIT_STARTED:return!0;case AUTHENTICATION_INIT_FINISHED:return!1;default:return state;}}function requestingReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref=1<arguments.length?arguments[1]:void 0,type=_ref.type,path=_ref.path;return type===START?_objectSpread({},state,_defineProperty({},Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getSlashStrPath\"])(path),!0)):type===NO_VALUE||type===SET?_objectSpread({},state,_defineProperty({},Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getSlashStrPath\"])(path),!1)):state}function requestedReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref2=1<arguments.length?arguments[1]:void 0,type=_ref2.type,path=_ref2.path;return type===START?_objectSpread({},state,_defineProperty({},Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getSlashStrPath\"])(path),!1)):type===NO_VALUE||type===SET?_objectSpread({},state,_defineProperty({},Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getSlashStrPath\"])(path),!0)):state}function timestampsReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref3=1<arguments.length?arguments[1]:void 0,type=_ref3.type,path=_ref3.path;return type===START||type===NO_VALUE||type===SET?_objectSpread({},state,_defineProperty({},Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getSlashStrPath\"])(path),Date.now())):state}function createDataReducer(){var actionKey=0<arguments.length&&arguments[0]!==void 0?arguments[0]:\"data\";return function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SET:return lodash_fp_setWith__WEBPACK_IMPORTED_MODULE_1___default()(Object,Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getDotStrPath\"])(action.path),action[actionKey],state);case MERGE:var previousData=lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state,Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getDotStrPath\"])(action.path),{}),mergedData=lodash_fp_assign__WEBPACK_IMPORTED_MODULE_0___default()(previousData,action[actionKey]);return lodash_fp_setWith__WEBPACK_IMPORTED_MODULE_1___default()(Object,Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getDotStrPath\"])(action.path),mergedData,state);case NO_VALUE:return lodash_fp_setWith__WEBPACK_IMPORTED_MODULE_1___default()(Object,Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getDotStrPath\"])(action.path),null,state);case REMOVE:return\"data\"===actionKey?Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"recursiveUnset\"])(Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"getDotStrPath\"])(action.path),state):state;case LOGOUT:if(action.preserve){if(Array.isArray(action.preserve))return lodash_pick__WEBPACK_IMPORTED_MODULE_5___default()(state,action.preserve);if(lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(action.preserve))return action.preserve[actionKey]?Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"preserveValuesFromState\"])(state,action.preserve[actionKey],{}):{};throw new Error(\"Invalid preserve parameter. It must be an Object or an Array\")}return{};default:return state;}}}function authReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{isLoaded:!1,isEmpty:!0},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case LOGIN:case AUTH_UPDATE_SUCCESS:if(!action.auth)return{isEmpty:!0,isLoaded:!0};var auth=action.auth.toJSON?action.auth.toJSON():action.auth;return action.preserve&&action.preserve.auth?Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"preserveValuesFromState\"])(state,action.preserve.auth,_objectSpread({},auth,{isEmpty:!1,isLoaded:!0})):_objectSpread({},auth,{isEmpty:!1,isLoaded:!0});case AUTH_LINK_SUCCESS:case AUTH_RELOAD_SUCCESS:return action.payload?_objectSpread({},action.payload.toJSON?action.payload.toJSON():action.payload,{isEmpty:!1,isLoaded:!0}):{isEmpty:!0,isLoaded:!0};case LOGIN_ERROR:case AUTH_EMPTY_CHANGE:case LOGOUT:return action.reauthenticate?Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"preserveValuesFromState\"])(state,!0,{}):action.preserve&&action.preserve.auth?Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"preserveValuesFromState\"])(state,action.preserve.auth,{isLoaded:!0,isEmpty:!0}):{isLoaded:!0,isEmpty:!0};default:return state;}}function authErrorReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case LOGIN:case LOGOUT:return null;case LOGIN_ERROR:case UNAUTHORIZED_ERROR:return action.authError;default:return state;}}function profileReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{isLoaded:!1,isEmpty:!0},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case SET_PROFILE:return action.profile?_objectSpread({},action.profile,{isEmpty:!1,isLoaded:!0}):_objectSpread({},state,{isEmpty:!0,isLoaded:!0});case PROFILE_UPDATE_SUCCESS:return Object.assign({},state,action.payload);case LOGIN:return action.preserve&&action.preserve.profile?Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"preserveValuesFromState\"])(state,action.preserve.profile,{isLoaded:!0,isEmpty:!0}):{isEmpty:!0,isLoaded:!1};case LOGOUT:case AUTH_EMPTY_CHANGE:return action.preserve&&action.preserve.profile?Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"preserveValuesFromState\"])(state,action.preserve.profile,{isLoaded:!0,isEmpty:!0}):{isLoaded:!0,isEmpty:!0};default:return state;}}function errorsReducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[],action=1<arguments.length?arguments[1]:void 0;switch(action.type){case LOGIN_ERROR:case UNAUTHORIZED_ERROR:if(!Array.isArray(state))throw new Error(\"Errors state must be an array\");return[].concat(_toConsumableArray(state),[action.authError]);case LOGOUT:case CLEAR_ERRORS:if(action.preserve&&action.preserve.errors){if(\"function\"!=typeof action.preserve.errors)throw new Error(\"Preserve for the errors state currently only supports functions\");return state.filter(action.preserve.errors)}return[];default:return state;}}function listenersById(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref4=1<arguments.length?arguments[1]:void 0,type=_ref4.type,path=_ref4.path,payload=_ref4.payload;return type===SET_LISTENER?_objectSpread({},state,_defineProperty({},payload.id,{id:payload.id,path:path})):type===UNSET_LISTENER?lodash_omit__WEBPACK_IMPORTED_MODULE_4___default()(state,[payload.id]):state}function allListeners(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[],_ref5=1<arguments.length?arguments[1]:void 0,type=_ref5.type,path=_ref5.path,payload=_ref5.payload;return type===SET_LISTENER?[].concat(_toConsumableArray(state),[payload.id]):type===UNSET_LISTENER?state.filter(function(lId){return lId!==payload.id}):state}var listenersReducer=Object(_utils_reducers__WEBPACK_IMPORTED_MODULE_7__[\"combineReducers\"])({byId:listenersById,allIds:allListeners});var dataReducer=createDataReducer();var orderedReducer=createDataReducer(\"ordered\");\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/reducers.js?");

/***/ }),

/***/ "./src/useFirebase.js":
/*!****************************!*\
  !*** ./src/useFirebase.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useFirebase; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactReduxFirebaseContext */ \"./src/ReactReduxFirebaseContext.js\");\nfunction useFirebase(){return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"])}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/useFirebase.js?");

/***/ }),

/***/ "./src/useFirebaseConnect.js":
/*!***********************************!*\
  !*** ./src/useFirebaseConnect.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useFirebaseConnect; });\n/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/differenceWith */ \"./node_modules/lodash/differenceWith.js\");\n/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/query */ \"./src/actions/query.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _useFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useFirebase */ \"./src/useFirebase.js\");\nfunction useFirebaseConnect(queriesConfig){var firebase=Object(_useFirebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),eventRef=Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(),dataRef=Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(),data=Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function(){return Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"invokeArrayQuery\"])(queriesConfig)},[queriesConfig]);Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function(){if(null!==data&&!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(data,dataRef.current)){var itemsToSubscribe=lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0___default()(data,dataRef.current,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default.a),itemsToUnsubscribe=lodash_differenceWith__WEBPACK_IMPORTED_MODULE_0___default()(dataRef.current,data,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default.a);dataRef.current=data,Object(_actions_query__WEBPACK_IMPORTED_MODULE_3__[\"unWatchEvents\"])(firebase,firebase.dispatch,Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getEventsFromInput\"])(itemsToUnsubscribe)),eventRef.current=Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getEventsFromInput\"])(data),Object(_actions_query__WEBPACK_IMPORTED_MODULE_3__[\"watchEvents\"])(firebase,firebase.dispatch,Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getEventsFromInput\"])(itemsToSubscribe))}},[data]),Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function(){return function(){Object(_actions_query__WEBPACK_IMPORTED_MODULE_3__[\"unWatchEvents\"])(firebase,firebase.dispatch,eventRef.current)}},[])}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/useFirebaseConnect.js?");

/***/ }),

/***/ "./src/useFirestore.js":
/*!*****************************!*\
  !*** ./src/useFirestore.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useFirestore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReduxFirestoreContext */ \"./src/ReduxFirestoreContext.js\");\nfunction useFirestore(){return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"])}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/useFirestore.js?");

/***/ }),

/***/ "./src/useFirestoreConnect.js":
/*!************************************!*\
  !*** ./src/useFirestoreConnect.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useFirestoreConnect; });\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _useFirestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFirestore */ \"./src/useFirestore.js\");\nfunction useFirestoreConnect(queriesConfigs){var firestore=Object(_useFirestore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),firestoreIsEnabled=!!firestore,queryRef=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(),data=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function(){return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"invokeArrayQuery\"])(queriesConfigs)},[queriesConfigs]);Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function(){if(firestoreIsEnabled&&!lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(data,queryRef.current)){var changes=Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getChanges\"])(data,queryRef.current);queryRef.current=data,firestore.unsetListeners(changes.removed),firestore.setListeners(changes.added)}},[data]),Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function(){return function(){firestoreIsEnabled&&queryRef.current&&firestore.unsetListeners(queryRef.current)}},[])}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/useFirestoreConnect.js?");

/***/ }),

/***/ "./src/utils/actions.js":
/*!******************************!*\
  !*** ./src/utils/actions.js ***!
  \******************************/
/*! exports provided: wrapInDispatch, mapWithFirebaseAndDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapInDispatch\", function() { return wrapInDispatch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapWithFirebaseAndDispatch\", function() { return mapWithFirebaseAndDispatch; });\n/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/mapValues */ \"./node_modules/lodash/mapValues.js\");\n/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||\"[object Arguments]\"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}function _iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||\"[object Arguments]\"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i[\"return\"]||_i[\"return\"]()}finally{if(_d)throw _e}}return _arr}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function wrapInDispatch(dispatch,_ref){var ref=_ref.ref,meta=_ref.meta,method=_ref.method,_ref$args=_ref.args,args=void 0===_ref$args?[]:_ref$args,types=_ref.types,_types=_slicedToArray(types,3),requestingType=_types[0],successType=_types[1],errorType=_types[2];return dispatch({type:lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(requestingType)?requestingType.type:requestingType,meta:meta,payload:lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(requestingType)?requestingType.payload:{args:args}}),method.apply(void 0,_toConsumableArray(args)).then(function(payload){return dispatch({type:lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(successType)?successType.type:successType,meta:meta,payload:lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(successType)?successType.payload:payload}),payload}).catch(function(err){return dispatch({type:errorType,meta:meta,payload:err}),Promise.reject(err)})}function createWithFirebaseAndDispatch(firebase,dispatch,dispatchFirst){return function(func){return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return func.apply(firebase,dispatchFirst?[dispatch,firebase].concat(args):[firebase,dispatch].concat(args))}}}function mapWithFirebaseAndDispatch(firebase,dispatch,actions,reverseActions){var withFirebaseAndDispatch=createWithFirebaseAndDispatch(firebase,dispatch),withDispatchAndFirebase=createWithFirebaseAndDispatch(firebase,dispatch,!0);return _objectSpread({},lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(actions,withFirebaseAndDispatch),{},lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(reverseActions,withDispatchAndFirebase))}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/actions.js?");

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/*! exports provided: getLoginMethodAndParams, getReauthenticateMethodAndParams, authIsReady, createAuthIsReady, updateProfileOnRTDB, updateProfileOnFirestore, setupPresence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginMethodAndParams\", function() { return getLoginMethodAndParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getReauthenticateMethodAndParams\", function() { return getReauthenticateMethodAndParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authIsReady\", function() { return authIsReady; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAuthIsReady\", function() { return createAuthIsReady; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProfileOnRTDB\", function() { return updateProfileOnRTDB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProfileOnFirestore\", function() { return updateProfileOnFirestore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupPresence\", function() { return setupPresence; });\n/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ \"./node_modules/lodash/capitalize.js\");\n/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\nfunction createAuthProvider(firebase,providerName,scopes){if(\"microsoft.com\"===providerName.toLowerCase()){var _provider=new firebase.auth.OAuthProvider(\"microsoft.com\");return _provider}var capitalProviderName=\"\".concat(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(providerName),\"AuthProvider\");if(!firebase.auth[capitalProviderName])throw new Error(\"\".concat(providerName,\" is not a valid auth provider for your firebase instance. If using react-native, use a RN specific auth library.\"));var provider=new firebase.auth[capitalProviderName],customAuthParameters=firebase._.config.customAuthParameters;return(customAuthParameters&&customAuthParameters[providerName]&&provider.setCustomParameters(customAuthParameters[providerName]),\"twitter\"===providerName.toLowerCase()||\"function\"!=typeof provider.addScope)?provider:(provider.addScope(\"email\"),scopes&&(Array.isArray(scopes)&&scopes.forEach(function(scope){provider.addScope(scope)}),(\"string\"==typeof scopes||scopes instanceof String)&&provider.addScope(scopes)),provider)}function getLoginMethodAndParams(firebase,credentials){var email=credentials.email,password=credentials.password,provider=credentials.provider,type=credentials.type,token=credentials.token,scopes=credentials.scopes,phoneNumber=credentials.phoneNumber,applicationVerifier=credentials.applicationVerifier,credential=credentials.credential;if(credential){var credentialAuth=firebase.auth().signInAndRetrieveDataWithCredential;return credentialAuth?{method:\"signInAndRetrieveDataWithCredential\",params:[credential]}:{method:\"signInWithCredential\",params:[credential]}}if(provider){if(-1===_constants__WEBPACK_IMPORTED_MODULE_1__[\"supportedAuthProviders\"].indexOf(provider.toLowerCase()))throw new Error(\"\".concat(provider,\" is not a valid Auth Provider\"));if(token)throw new Error(\"provider with token no longer supported, use credential parameter instead\");var authProvider=createAuthProvider(firebase,provider,scopes);return\"popup\"===type?{method:\"signInWithPopup\",params:[authProvider]}:{method:\"signInWithRedirect\",params:[authProvider]}}if(token){var tokenAuth=firebase.auth().signInAndRetrieveDataWithCustomToken;return tokenAuth?{method:\"signInAndRetrieveDataWithCustomToken\",params:[token]}:{method:\"signInWithCustomToken\",params:[token]}}if(phoneNumber){if(!applicationVerifier)throw new Error(\"Application verifier is required for phone authentication\");return{method:\"signInWithPhoneNumber\",params:[phoneNumber,applicationVerifier]}}return firebase.auth().signInWithEmailAndPassword?{method:\"signInWithEmailAndPassword\",params:[email,password]}:{method:\"signInAndRetrieveDataWithEmailAndPassword\",params:[email,password]}}function getReauthenticateMethodAndParams(firebase,credentials){var provider=credentials.provider,type=credentials.type,scopes=credentials.scopes,phoneNumber=credentials.phoneNumber,applicationVerifier=credentials.applicationVerifier,credential=credentials.credential;if(credential){var credentialAuth=firebase.auth().reauthenticateAndRetrieveDataWithCredential;return credentialAuth?{method:\"reauthenticateAndRetrieveDataWithCredential\",params:[credential]}:{method:\"reauthenticateWithCredential\",params:[credential]}}if(provider){if(-1===_constants__WEBPACK_IMPORTED_MODULE_1__[\"supportedAuthProviders\"].indexOf(provider.toLowerCase()))throw new Error(\"\".concat(provider,\" is not a valid Auth Provider\"));var authProvider=createAuthProvider(firebase,provider,scopes);return\"popup\"===type?{method:\"reauthenticateWithPopup\",params:[authProvider]}:{method:\"reauthenticateWithRedirect\",params:[authProvider]}}if(!applicationVerifier)throw new Error(\"Application verifier is required for phone authentication\");return{method:\"reauthenticateWithPhoneNumber\",params:[phoneNumber,applicationVerifier]}}function isAuthReady(store,stateName){var state=store.getState(),firebaseState=stateName?state[stateName]:state,firebaseAuthState=firebaseState&&firebaseState.auth;if(!firebaseAuthState)throw new Error(\"The Firebase auth state could not be found in the store under the attribute '\".concat(stateName?\"\".concat(stateName,\".\"):\"\",\"auth'. Make sure your react-redux-firebase reducer is correctly set in the store\"));return firebaseState.auth.isLoaded}function authIsReady(store){var stateName=1<arguments.length&&arguments[1]!==void 0?arguments[1]:\"firebase\";return new Promise(function(resolve){if(isAuthReady(store,stateName))resolve();else var unsubscribe=store.subscribe(function(){isAuthReady(store,stateName)&&(unsubscribe(),resolve())})})}function createAuthIsReady(store,config){return\"function\"==typeof config.authIsReady?config.authIsReady(store,config):authIsReady(store,config.firebaseStateName)}function updateProfileOnRTDB(firebase,profileUpdate){var _firebase$_=firebase._,config=_firebase$_.config,authUid=_firebase$_.authUid,profileRef=firebase.database().ref(\"\".concat(config.userProfile,\"/\").concat(authUid));return profileRef.update(profileUpdate).then(function(){return profileRef.once(\"value\")})}function updateProfileOnFirestore(firebase,profileUpdate){var options=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},_options$useSet=options.useSet,_options$merge=options.merge,firestore=firebase.firestore,_firebase$_2=firebase._,config=_firebase$_2.config,authUid=_firebase$_2.authUid,profileRef=firestore().doc(\"\".concat(config.userProfile,\"/\").concat(authUid)),profileUpdatePromise=!(void 0!==_options$useSet)||_options$useSet?profileRef.set(profileUpdate,{merge:!(void 0!==_options$merge)||_options$merge}):profileRef.update(profileUpdate);return profileUpdatePromise.then(function(){return profileRef.get()})}function setupPresence(dispatch,firebase){if(firebase.database&&firebase.database.ServerValue){var ref=firebase.database().ref(),_firebase$_3=firebase._,_firebase$_3$config=_firebase$_3.config,presence=_firebase$_3$config.presence,sessions=_firebase$_3$config.sessions,authUid=_firebase$_3.authUid,amOnline=ref.child(\".info/connected\"),onlineRef=ref.child(\"function\"==typeof presence?presence(firebase.auth().currentUser,firebase):presence).child(authUid),sessionsRef=\"function\"==typeof sessions?sessions(firebase.auth().currentUser,firebase):sessions;sessionsRef&&(sessionsRef=ref.child(sessions)),amOnline.on(\"value\",function(snapShot){if(snapShot.val()){if(sessionsRef){dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].SESSION_START,payload:authUid});var session=sessionsRef.push({startedAt:firebase.database.ServerValue.TIMESTAMP,user:authUid});\"function\"==typeof session.setPriority&&session.setPriority(authUid),session.child(\"endedAt\").onDisconnect().set(firebase.database.ServerValue.TIMESTAMP,function(){dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_1__[\"actionTypes\"].SESSION_END})})}onlineRef.set(!0),onlineRef.onDisconnect().remove()}})}}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/auth.js?");

/***/ }),

/***/ "./src/utils/events.js":
/*!*****************************!*\
  !*** ./src/utils/events.js ***!
  \*****************************/
/*! exports provided: pathStrToObj, getEventsFromInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathStrToObj\", function() { return pathStrToObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventsFromInput\", function() { return getEventsFromInput; });\n/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/remove */ \"./node_modules/lodash/remove.js\");\n/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatMap */ \"./node_modules/lodash/flatMap.js\");\n/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populate */ \"./src/utils/populate.js\");\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query */ \"./src/utils/query.js\");\nfunction pathStrToObj(path){var pathObj={path:path,type:\"value\",isQuery:!1},queryId=Object(_query__WEBPACK_IMPORTED_MODULE_4__[\"getQueryIdFromPath\"])(path);if(queryId){var pathArray=path.split(\"#\");pathObj=Object.assign({},pathObj,{queryId:queryId,isQuery:!0,path:pathArray[0],queryParams:pathArray[1].split(\"&\")}),Object(_populate__WEBPACK_IMPORTED_MODULE_3__[\"getPopulates\"])(pathArray[1].split(\"&\"))&&(pathObj.populates=Object(_populate__WEBPACK_IMPORTED_MODULE_3__[\"getPopulates\"])(pathArray[1].split(\"&\")),pathObj.queryParams=lodash_remove__WEBPACK_IMPORTED_MODULE_0___default()(pathArray[1].split(\"&\"),function(p){return-1===p.indexOf(\"populate\")}))}return pathObj}function getEventsFromInput(paths){return lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default()(paths,function(path){if(\"string\"==typeof path||path instanceof String)return[pathStrToObj(path)];if(Array.isArray(path))return[{type:\"first_child\",path:path[0]},{type:\"child_added\",path:path[0]},{type:\"child_removed\",path:path[0]},{type:\"child_moved\",path:path[0]},{type:\"child_changed\",path:path[0]}];if(lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(path)){if(!path.path)throw new Error(\"Path is a required parameter within definition object\");var strPath=path.path;return path.storeAs&&(strPath+=\"@\".concat(path.storeAs)),path.queryParams&&(strPath+=\"#\".concat(path.queryParams.join(\"&\"))),path=Object.assign({},pathStrToObj(strPath),path),[path]}throw new Error(\"Invalid Path Definition: \".concat(path,\". Only strings, objects, and arrays accepted.\"))})}/* harmony default export */ __webpack_exports__[\"default\"] = ({getEventsFromInput:getEventsFromInput});\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/events.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getEventsFromInput, isString, createCallable, invokeArrayQuery, wrapDisplayName, getChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCallable\", function() { return createCallable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invokeArrayQuery\", function() { return invokeArrayQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapDisplayName\", function() { return wrapDisplayName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChanges\", function() { return getChanges; });\n/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/filter */ \"./node_modules/lodash/filter.js\");\n/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/some */ \"./node_modules/lodash/some.js\");\n/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/constant */ \"./node_modules/lodash/constant.js\");\n/* harmony import */ var lodash_constant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_constant__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ \"./src/utils/events.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getEventsFromInput\", function() { return _events__WEBPACK_IMPORTED_MODULE_4__[\"getEventsFromInput\"]; });\n\nfunction isString(varToCheck){return\"string\"==typeof varToCheck||varToCheck instanceof String}function createCallable(f){return\"function\"==typeof f?f:lodash_constant__WEBPACK_IMPORTED_MODULE_3___default()(f)}function invokeArrayQuery(f,props){var result=createCallable(f)(props);return Array.isArray(result)?result:result?[result]:null}function getDisplayName(Component){return\"string\"==typeof Component?Component:Component?Component.displayName||Component.name||\"Component\":void 0}function wrapDisplayName(BaseComponent,hocName){return\"\".concat(hocName,\"(\").concat(getDisplayName(BaseComponent),\")\")}function getChanges(){var data=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],prevData=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],result={};return result.added=lodash_filter__WEBPACK_IMPORTED_MODULE_0___default()(data,function(d){return!lodash_some__WEBPACK_IMPORTED_MODULE_1___default()(prevData,function(p){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(d,p)})}),result.removed=lodash_filter__WEBPACK_IMPORTED_MODULE_0___default()(prevData,function(p){return!lodash_some__WEBPACK_IMPORTED_MODULE_1___default()(data,function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(p,d)})}),result}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/populate.js":
/*!*******************************!*\
  !*** ./src/utils/populate.js ***!
  \*******************************/
/*! exports provided: getPopulateObj, getChildType, getPopulateObjs, getPopulates, getPopulateChild, populateList, promisesForPopulate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopulateObj\", function() { return getPopulateObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChildType\", function() { return getChildType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopulateObjs\", function() { return getPopulateObjs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopulates\", function() { return getPopulates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopulateChild\", function() { return getPopulateChild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateList\", function() { return populateList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"promisesForPopulate\", function() { return promisesForPopulate; });\n/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/some */ \"./node_modules/lodash/some.js\");\n/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/has */ \"./node_modules/lodash/has.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/set */ \"./node_modules/lodash/set.js\");\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/filter */ \"./node_modules/lodash/filter.js\");\n/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ \"./src/utils/index.js\");\nfunction getPopulateObj(str){if(!Object(_index__WEBPACK_IMPORTED_MODULE_8__[\"isString\"])(str))return str;var strArray=str.split(\":\");return{child:strArray[0],root:strArray[1]}}function getChildType(child){return Object(_index__WEBPACK_IMPORTED_MODULE_8__[\"isString\"])(child)?\"string\":Array.isArray(child)?\"array\":lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default()(child)?\"object\":\"other\"}function getPopulateObjs(arr){return Array.isArray(arr)?arr.map(function(o){return lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default()(o)?o:getPopulateObj(o)}):arr}function getPopulates(queryParams){var populates=lodash_filter__WEBPACK_IMPORTED_MODULE_7___default()(queryParams,function(param){return-1!==param.indexOf(\"populate\")||lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default()(param)&&param.populates}).map(function(p){return p.split(\"=\")[1]});return populates.length?populates.map(getPopulateObj):null}function getPopulateChild(firebase,populate,id){return firebase.database().ref().child(\"\".concat(populate.root,\"/\").concat(id)).once(\"value\").then(function(snap){return snap.val()})}function populateList(firebase,list,p,results){return results[p.root]||lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(results,p.root,{}),Promise.all(lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(list,function(id,childKey){var populateKey=!0===id||p.populateByKey?childKey:id;return getPopulateChild(firebase,p,populateKey).then(function(pc){return pc?lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(results,\"\".concat(p.root,\".\").concat(populateKey),pc):results})}))}function promisesForPopulate(firebase,dataKey,originalData,populatesIn){var promisesArray=[],results={},populatesForData=getPopulateObjs(\"function\"==typeof populatesIn?populatesIn(dataKey,originalData):populatesIn),dataHasPopulateChilds=lodash_some__WEBPACK_IMPORTED_MODULE_0___default()(populatesForData,function(populate){return lodash_has__WEBPACK_IMPORTED_MODULE_1___default()(originalData,populate.child)});return dataHasPopulateChilds?lodash_forEach__WEBPACK_IMPORTED_MODULE_3___default()(populatesForData,function(p){return Object(_index__WEBPACK_IMPORTED_MODULE_8__[\"isString\"])(lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(originalData,p.child))?promisesArray.push(getPopulateChild(firebase,p,lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(originalData,p.child)).then(function(v){v&&lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(results,\"\".concat(p.root,\".\").concat(lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(originalData,p.child)),v)})):promisesArray.push(populateList(firebase,lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(originalData,p.child),p,results))}):lodash_forEach__WEBPACK_IMPORTED_MODULE_3___default()(originalData,function(d,key){var populatesForDataItem=getPopulateObj(\"function\"==typeof populatesIn?populatesIn(key,d):populatesIn);lodash_forEach__WEBPACK_IMPORTED_MODULE_3___default()(populatesForDataItem,function(p){var idOrList=lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(d,p.child);return idOrList?Object(_index__WEBPACK_IMPORTED_MODULE_8__[\"isString\"])(idOrList)?promisesArray.push(getPopulateChild(firebase,p,idOrList).then(function(v){return v&&lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(results,\"\".concat(p.root,\".\").concat(idOrList),v),results})):Array.isArray(idOrList)||lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default()(idOrList)?promisesArray.push(populateList(firebase,idOrList,p,results)):void 0:void 0})}),Promise.all(promisesArray).then(function(){return results})}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/populate.js?");

/***/ }),

/***/ "./src/utils/query.js":
/*!****************************!*\
  !*** ./src/utils/query.js ***!
  \****************************/
/*! exports provided: getWatchPath, getQueryIdFromPath, setWatcher, getWatcherCount, unsetWatcher, applyParamsToQuery, orderedFromSnapshot, populateAndDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWatchPath\", function() { return getWatchPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryIdFromPath\", function() { return getQueryIdFromPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWatcher\", function() { return setWatcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWatcherCount\", function() { return getWatcherCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unsetWatcher\", function() { return unsetWatcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyParamsToQuery\", function() { return applyParamsToQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderedFromSnapshot\", function() { return orderedFromSnapshot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateAndDispatch\", function() { return populateAndDispatch; });\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNaN */ \"./node_modules/lodash/isNaN.js\");\n/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populate */ \"./src/utils/populate.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./src/utils/index.js\");\nfunction tryParseToNumber(value){var result=+value;return lodash_isNaN__WEBPACK_IMPORTED_MODULE_1___default()(result)?value:result}function getWatchPath(event,path){if(!event||\"\"===event||!path)throw new Error(\"Event and path are required\");return\"\".concat(event,\":\").concat(\"/\"===path.substring(0,1)?\"\":\"/\").concat(path)}function getQueryIdFromPath(path,event){if(!Object(_index__WEBPACK_IMPORTED_MODULE_4__[\"isString\"])(path))throw new Error(\"Query path must be a string\");var origPath=path,pathSplitted=path.split(\"#\");path=pathSplitted[0];var isQuery=1<pathSplitted.length,queryParams=isQuery?pathSplitted[1].split(\"&\"):[],queryId=isQuery?queryParams.map(function(param){var splittedParam=param.split(\"=\");if(\"queryId\"===splittedParam[0])return splittedParam[1]}).filter(function(q){return q}):void 0;return queryId&&0<queryId.length?event?\"\".concat(event,\":/\").concat(queryId):queryId[0]:isQuery?origPath:void 0}function setWatcher(firebase,dispatch,event,path,queryId){var id=queryId||getQueryIdFromPath(path,event)||getWatchPath(event,path);return firebase._.watchers[id]?firebase._.watchers[id]++:firebase._.watchers[id]=1,dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].SET_LISTENER,path:path,payload:{id:id}}),firebase._.watchers[id]}function getWatcherCount(firebase,event,path,queryId){var id=queryId||getQueryIdFromPath(path,event)||getWatchPath(event,path);return firebase._.watchers[id]}function unsetWatcher(firebase,dispatch,event,path,queryId){var id=queryId||getQueryIdFromPath(path,event)||getWatchPath(event,path);path=path.split(\"#\")[0];var watchers=firebase._.watchers;1>=watchers[id]?(delete watchers[id],\"first_child\"!==event&&\"once\"!==event&&firebase.database().ref().child(path).off(event)):watchers[id]&&watchers[id]--,dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].UNSET_LISTENER,path:path,payload:{id:id}})}function applyParamsToQuery(queryParams,query){var doNotParse=!1;return queryParams&&queryParams.forEach(function(param){switch(param=param.split(\"=\"),param[0]){case\"orderByValue\":query=query.orderByValue(),doNotParse=!0;break;case\"orderByPriority\":query=query.orderByPriority(),doNotParse=!0;break;case\"orderByKey\":query=query.orderByKey(),doNotParse=!0;break;case\"orderByChild\":query=query.orderByChild(param[1]);break;case\"limitToFirst\":query=query.limitToFirst(parseInt(param[1],10));break;case\"limitToLast\":query=query.limitToLast(parseInt(param[1],10));break;case\"notParsed\":doNotParse=!0;break;case\"parsed\":doNotParse=!1;break;case\"equalTo\":var equalToParam=doNotParse?param[1]:tryParseToNumber(param[1]);equalToParam=\"null\"===equalToParam?null:equalToParam,equalToParam=\"false\"!==equalToParam&&equalToParam,equalToParam=\"true\"===equalToParam||equalToParam,query=3===param.length?query.equalTo(equalToParam,param[2]):query.equalTo(equalToParam);break;case\"startAt\":var startAtParam=doNotParse?param[1]:tryParseToNumber(param[1]);startAtParam=\"null\"===startAtParam?null:startAtParam,query=3===param.length?query.startAt(startAtParam,param[2]):query.startAt(startAtParam);break;case\"endAt\":var endAtParam=doNotParse?param[1]:tryParseToNumber(param[1]);endAtParam=\"null\"===endAtParam?null:endAtParam,query=3===param.length?query.endAt(endAtParam,param[2]):query.endAt(endAtParam);}}),query}function orderedFromSnapshot(snap){if(snap.hasChildren&&!snap.hasChildren())return null;var ordered=[];return snap.forEach&&snap.forEach(function(child){ordered.push({key:child.key,value:child.val()})}),ordered.length?ordered:null}function populateAndDispatch(firebase,dispatch,config){var data=config.data,populates=config.populates,snapshot=config.snapshot,path=config.path,storeAs=config.storeAs;return Object(_populate__WEBPACK_IMPORTED_MODULE_3__[\"promisesForPopulate\"])(firebase,snapshot.key,data,populates).then(function(results){return lodash_forEach__WEBPACK_IMPORTED_MODULE_0___default()(results,function(result,path){dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].MERGE,path:path,data:result})}),dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].SET,path:storeAs||path,data:data,ordered:orderedFromSnapshot(snapshot)}),results}).catch(function(err){return dispatch({type:_constants__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].ERROR,payload:err}),Promise.reject(err)})}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/query.js?");

/***/ }),

/***/ "./src/utils/reducers.js":
/*!*******************************!*\
  !*** ./src/utils/reducers.js ***!
  \*******************************/
/*! exports provided: pathToArr, getSlashStrPath, getDotStrPath, combineReducers, preserveValuesFromState, recursiveUnset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathToArr\", function() { return pathToArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSlashStrPath\", function() { return getSlashStrPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDotStrPath\", function() { return getDotStrPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preserveValuesFromState\", function() { return preserveValuesFromState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recursiveUnset\", function() { return recursiveUnset; });\n/* harmony import */ var lodash_fp_unset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp/unset */ \"./node_modules/lodash/fp/unset.js\");\n/* harmony import */ var lodash_fp_unset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_unset__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pick */ \"./node_modules/lodash/pick.js\");\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/size */ \"./node_modules/lodash/size.js\");\n/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function pathToArr(path){return path?path.split(/\\//).filter(function(p){return!!p}):[]}function getSlashStrPath(path){return pathToArr(path).join(\"/\")}function getDotStrPath(path){return pathToArr(path).join(\".\")}function combineReducers(reducers){return function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},action=1<arguments.length?arguments[1]:void 0;return Object.keys(reducers).reduce(function(nextState,key){return nextState[key]=reducers[key](state[key],action),nextState},{})}}function preserveValuesFromState(state,preserveSetting,nextState){if(\"function\"==typeof preserveSetting)return preserveSetting(state,nextState);if(!0===preserveSetting)return nextState?_objectSpread({},state,{},nextState):state;if(Array.isArray(preserveSetting))return lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(state,preserveSetting);throw new Error(\"Invalid preserve parameter. It must be an Object or an Array\")}function recursiveUnset(path,obj){var isRecursiveCall=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2];if(!path)return obj;if(0<lodash_size__WEBPACK_IMPORTED_MODULE_2___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(obj,path))&&isRecursiveCall)return obj;var objectWithRemovedKey=lodash_fp_unset__WEBPACK_IMPORTED_MODULE_0___default()(path,obj),newPath=path.match(/\\./)?path.replace(/\\.[^.]*$/,\"\"):\"\";return recursiveUnset(newPath,objectWithRemovedKey,!0)}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/reducers.js?");

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/*! exports provided: deleteFile, writeMetadataToDb, uploadFileWithProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFile\", function() { return deleteFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writeMetadataToDb\", function() { return writeMetadataToDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadFileWithProgress\", function() { return uploadFileWithProgress; });\n/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ \"./node_modules/lodash/isUndefined.js\");\n/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omitBy */ \"./node_modules/lodash/omitBy.js\");\n/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\nvar FILE_UPLOAD_ERROR=_constants__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].FILE_UPLOAD_ERROR,FILE_UPLOAD_PROGRESS=_constants__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].FILE_UPLOAD_PROGRESS;function deleteFile(firebase,_ref){var path=_ref.path,dbPath=_ref.dbPath;return firebase.storage().ref(path).delete().then(function(){if(!dbPath||!firebase.database&&!firebase.firestore)return{path:path};return function metaDeletePromise(){return firebase._.config.useFirestoreForStorageMeta?firebase.firestore().doc(dbPath).delete():firebase.database().ref(dbPath).remove()}().then(function(){return{path:path,dbPath:dbPath}})})}function createUploadMetaResponseHandler(_ref2){var fileData=_ref2.fileData,firebase=_ref2.firebase,uploadTaskSnapshot=_ref2.uploadTaskSnapshot,downloadURL=_ref2.downloadURL;return function(metaDataSnapshot){var useFirestoreForStorageMeta=firebase._.config.useFirestoreForStorageMeta,result={snapshot:metaDataSnapshot,key:metaDataSnapshot.key||metaDataSnapshot.id,File:fileData,metaDataSnapshot:metaDataSnapshot,uploadTaskSnapshot:uploadTaskSnapshot,uploadTaskSnaphot:uploadTaskSnapshot,createdAt:useFirestoreForStorageMeta?firebase.firestore.FieldValue.serverTimestamp():firebase.database.ServerValue.TIMESTAMP};return metaDataSnapshot.id&&(result.id=metaDataSnapshot.id),downloadURL&&(result.downloadURL=downloadURL),result}}function getDownloadURLFromUploadTaskSnapshot(uploadTaskSnapshot){return uploadTaskSnapshot.ref&&\"function\"==typeof uploadTaskSnapshot.ref.getDownloadURL?uploadTaskSnapshot.ref.getDownloadURL():Promise.resolve(uploadTaskSnapshot.downloadURLs&&uploadTaskSnapshot.downloadURLs[0])}function writeMetadataToDb(_ref3){var firebase=_ref3.firebase,uploadTaskSnapshot=_ref3.uploadTaskSnapshot,dbPath=_ref3.dbPath,options=_ref3.options,_firebase$_$config=firebase._.config,fileMetadataFactory=_firebase$_$config.fileMetadataFactory,useFirestoreForStorageMeta=_firebase$_$config.useFirestoreForStorageMeta,metadataFactory=options.metadataFactory,metaFactoryFunction=metadataFactory||fileMetadataFactory;return getDownloadURLFromUploadTaskSnapshot(uploadTaskSnapshot).then(function(downloadURL){var fileData=\"function\"==typeof metaFactoryFunction?metaFactoryFunction(uploadTaskSnapshot,firebase,uploadTaskSnapshot.metadata,downloadURL):lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default()(uploadTaskSnapshot.metadata,lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default.a),resultFromSnap=createUploadMetaResponseHandler({fileData:fileData,firebase:firebase,uploadTaskSnapshot:uploadTaskSnapshot,downloadURL:downloadURL});return function metaSetPromise(fileData){if(useFirestoreForStorageMeta)return firebase.firestore().collection(dbPath).add(fileData);var newMetaRef=firebase.database().ref(dbPath).push();return newMetaRef.set(fileData).then(function(){return newMetaRef})}(fileData).then(resultFromSnap)})}function uploadFileWithProgress(dispatch,firebase,_ref4){var path=_ref4.path,file=_ref4.file,filename=_ref4.filename,meta=_ref4.meta,fileMetadata=_ref4.fileMetadata,uploadEvent=firebase.storage().ref(\"\".concat(path,\"/\").concat(filename)).put(file,fileMetadata),unListen=uploadEvent.on(firebase.storage.TaskEvent.STATE_CHANGED,{next:function next(snapshot){dispatch({type:FILE_UPLOAD_PROGRESS,meta:meta,payload:{snapshot:snapshot,percent:Math.floor(100*(snapshot.bytesTransferred/snapshot.totalBytes))}})},error:function error(err){dispatch({type:FILE_UPLOAD_ERROR,meta:meta,payload:err}),unListen()},complete:function complete(){unListen()}});return uploadEvent}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/utils/storage.js?");

/***/ }),

/***/ "./src/withFirebase.js":
/*!*****************************!*\
  !*** ./src/withFirebase.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return withFirebase; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactReduxFirebaseContext */ \"./src/ReactReduxFirebaseContext.js\");\nfunction _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function withFirebase(WrappedComponent){function WithFirebase(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Consumer,null,function(firebase){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent,_extends({firebase:firebase,dispatch:firebase&&firebase.dispatch},props))})}return WithFirebase.displayName=Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"wrapDisplayName\"])(WrappedComponent,\"withFirebase\"),WithFirebase.wrappedComponent=WrappedComponent,hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(WithFirebase,WrappedComponent)}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/withFirebase.js?");

/***/ }),

/***/ "./src/withFirestore.js":
/*!******************************!*\
  !*** ./src/withFirestore.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return withFirestore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n/* harmony import */ var _ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactReduxFirebaseContext */ \"./src/ReactReduxFirebaseContext.js\");\n/* harmony import */ var _ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReduxFirestoreContext */ \"./src/ReduxFirestoreContext.js\");\nfunction _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function withFirestore(WrappedComponent){function WithFirestore(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactReduxFirebaseContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Consumer,null,function(firebase){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReduxFirestoreContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Consumer,null,function(firestore){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent,_extends({firestore:firestore,firebase:firebase,dispatch:firebase.dispatch},props))})})}return WithFirestore.displayName=Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"wrapDisplayName\"])(WrappedComponent,\"withFirestore\"),WithFirestore.wrappedComponent=WrappedComponent,hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(WithFirestore,WrappedComponent)}\n\n//# sourceURL=webpack://ReactReduxFirebase/./src/withFirestore.js?");

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://ReactReduxFirebase/external_%7B%22commonjs%22:%22prop-types%22,%22commonjs2%22:%22prop-types%22,%22amd%22:%22prop-types%22,%22root%22:%22PropTypes%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactReduxFirebase/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22,%22root%22:%22React%22%7D?");

/***/ })

/******/ });
});