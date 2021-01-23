/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n\r\n\r\nconst managerModel = new _models__WEBPACK_IMPORTED_MODULE_0__.AlarmManagerModel();\r\n\r\nfunction test() {\r\n  console.log('call');\r\n}\r\n\r\nlet timer = setInterval(test, 1000);\r\n\n\n//# sourceURL=webpack://alarm_web/./src/index.js?");

/***/ }),

/***/ "./src/models/AlarmManagerModel/index.js":
/*!***********************************************!*\
  !*** ./src/models/AlarmManagerModel/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlarmManagerModel; }\n/* harmony export */ });\nfunction AlarmManagerModel() {\r\n  let standardTime = new Date();\r\n  let alarmArray = [];\r\n  let that = this;\r\n  // let timer = setInterval(function () {\r\n  //   that.passStandardTime();\r\n  // }, 1000);\r\n\r\n  this.passStandardTime = function () {\r\n    standardTime = new Date();\r\n    console.log(standardTime);\r\n  };\r\n\r\n  this.getStandardTime = function () {\r\n    return standardTime;\r\n  };\r\n\r\n  this.setStandardTime = function (time) {\r\n    standardTime = time;\r\n\r\n    return standardTime;\r\n  };\r\n\r\n  this.getAlarmArray = function () {\r\n    return alarmArray;\r\n  };\r\n\r\n  this.setAlarmArray = function (array) {\r\n    alarmArray = array;\r\n\r\n    return alarmArray;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/AlarmManagerModel/index.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlarmManagerModel\": function() { return /* reexport safe */ _AlarmManagerModel__WEBPACK_IMPORTED_MODULE_0__.default; }\n/* harmony export */ });\n/* harmony import */ var _AlarmManagerModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlarmManagerModel */ \"./src/models/AlarmManagerModel/index.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;