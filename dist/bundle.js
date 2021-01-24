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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n\r\n\r\nvar managerModel = new _models__WEBPACK_IMPORTED_MODULE_0__.AlarmManagerModel();\r\n\r\nconsole.log(managerModel.getStandardTime());\r\n\r\nmanagerModel.setStandardTime(new Date('1997-12-17T03:24:00'));\r\n\n\n//# sourceURL=webpack://alarm_web/./src/index.js?");

/***/ }),

/***/ "./src/models/AlarmManagerModel/index.js":
/*!***********************************************!*\
  !*** ./src/models/AlarmManagerModel/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlarmManagerModel; }\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./src/models/index.js\");\n\r\n\r\nfunction AlarmManagerModel() {\r\n  var standardTime = new Date();\r\n  var alarmArray = [];\r\n  var _timer = null;\r\n  var that = this;\r\n\r\n  setTimer();\r\n\r\n  function setTimer() {\r\n    that._timer = setInterval(function () {\r\n      that.passStandardTime();\r\n    }, 1000);\r\n  }\r\n\r\n  this.passStandardTime = function () {\r\n    standardTime.setMilliseconds(standardTime.getMilliseconds() + 1000);\r\n\r\n    console.log(standardTime);\r\n    return standardTime;\r\n  };\r\n\r\n  this.getStandardTime = function () {\r\n    return standardTime;\r\n  };\r\n\r\n  this.setStandardTime = function (time) {\r\n    clearInterval(that._timer);\r\n    standardTime = time;\r\n    setTimer();\r\n\r\n    return standardTime;\r\n  };\r\n\r\n  this.getAlarmArray = function () {\r\n    return alarmArray;\r\n  };\r\n\r\n  this.setAlarmArray = function (array) {\r\n    alarmArray = array;\r\n\r\n    return alarmArray;\r\n  };\r\n\r\n  this.addAlarmToAlarmArray = function (alarmObj) {\r\n    alarmArray.push(new _models__WEBPACK_IMPORTED_MODULE_0__.Alarm(alarmObj));\r\n\r\n    return alarmArray;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/AlarmManagerModel/index.js?");

/***/ }),

/***/ "./src/models/Alarm/index.js":
/*!***********************************!*\
  !*** ./src/models/Alarm/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Alarm; }\n/* harmony export */ });\nfunction Alarm(alarmObj) {\r\n  var alarmTime = alarmObj.alarmTime;\r\n  var clockMode = alarmObj.clockMode;\r\n  var alarmMode = alarmObj.alarmMode;\r\n  var alarmContent = alarmObj.alarmContent;\r\n  var alarmOnOffState = alarmObj.alarmOnOffState;\r\n  // var that = this;\r\n\r\n  this.setAlarmTime = function (time) {\r\n    alarmTime = time;\r\n\r\n    return alarmTime;\r\n  };\r\n\r\n  this.getAlarmTime = function () {\r\n    return alarmTime;\r\n  };\r\n\r\n  this.setClockMode = function (mode) {\r\n    clockMode = mode;\r\n\r\n    return clockMode;\r\n  };\r\n\r\n  this.getClockMode = function (mode) {\r\n    return clockMode;\r\n  };\r\n\r\n  this.setAlarmMode = function (mode) {\r\n    alarmMode = mode;\r\n\r\n    return alarmMode;\r\n  };\r\n\r\n  this.getAlarmMode = function (mode) {\r\n    return alarmMode;\r\n  };\r\n\r\n  this.setAlarmContent = function (content) {\r\n    alarmContent = content;\r\n\r\n    return alarmContent;\r\n  };\r\n\r\n  this.getAlarmContent = function () {\r\n    return alarmContent;\r\n  };\r\n\r\n  this.setAlarmOnOffState = function (onOffState) {\r\n    alarmOnOffState = onOffState;\r\n\r\n    return alarmOnOffState;\r\n  };\r\n\r\n  this.getAlarmOnOffState = function () {\r\n    return alarmOnOffState;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/Alarm/index.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlarmManagerModel\": function() { return /* reexport safe */ _AlarmManagerModel__WEBPACK_IMPORTED_MODULE_0__.default; },\n/* harmony export */   \"Alarm\": function() { return /* reexport safe */ _Alarm__WEBPACK_IMPORTED_MODULE_1__.default; }\n/* harmony export */ });\n/* harmony import */ var _AlarmManagerModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlarmManagerModel */ \"./src/models/AlarmManagerModel/index.js\");\n/* harmony import */ var _Alarm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alarm */ \"./src/models/Alarm/index.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/index.js?");

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