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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n\r\n\r\nvar managerModel = new _models__WEBPACK_IMPORTED_MODULE_0__.AlarmManagerModel();\r\n\r\n// console.log(managerModel.getStandardTime());\r\n\r\n// console.log(managerModel.setStandardTime(new Date('1997-12-17T03:24:00')));\r\n\r\nconsole.log(\r\n  managerModel.addAlarmToAlarmArray({\r\n    alarmTime: new Date(),\r\n    clockMode: 'test',\r\n    alarmMode: 'test',\r\n    alarmContent: 'test',\r\n    alarmOnOffState: true,\r\n  })\r\n);\r\n\r\nconsole.log(\r\n  managerModel.addAlarmToAlarmArray({\r\n    alarmTime: new Date('1997-12-17T03:24:00'),\r\n    clockMode: 'test',\r\n    alarmMode: 'test',\r\n    alarmContent: 'test',\r\n    alarmOnOffState: true,\r\n  })\r\n);\r\n\r\nconsole.log(\r\n  managerModel.addAlarmToAlarmArray({\r\n    alarmTime: new Date('1992-12-17T03:24:00'),\r\n    clockMode: 'test',\r\n    alarmMode: 'test',\r\n    alarmContent: 'test',\r\n    alarmOnOffState: true,\r\n  })\r\n);\r\n\r\nconsole.log(managerModel.setOnOffStateOfAlarm(1));\r\nconsole.log(managerModel.getAlarmArray());\r\n\n\n//# sourceURL=webpack://alarm_web/./src/index.js?");

/***/ }),

/***/ "./src/models/AlarmManagerModel/index.js":
/*!***********************************************!*\
  !*** ./src/models/AlarmManagerModel/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlarmManagerModel; }\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./src/models/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\nfunction AlarmManagerModel() {\r\n  this.standardTime = new Date();\r\n  this.alarmArray = [];\r\n  this.subscriber = [];\r\n  this._timer = null;\r\n  var that = this;\r\n\r\n  setTimer();\r\n\r\n  function setTimer() {\r\n    that._timer = setInterval(function () {\r\n      that.passStandardTime();\r\n    }, 1000);\r\n  }\r\n\r\n  this.passStandardTime = function () {\r\n    this.standardTime.setMilliseconds(\r\n      this.standardTime.getMilliseconds() + 1000\r\n    );\r\n\r\n    console.log(this.standardTime);\r\n    return this.standardTime;\r\n  };\r\n\r\n  this.getStandardTime = function () {\r\n    return this.standardTime;\r\n  };\r\n\r\n  this.setStandardTime = function (time) {\r\n    clearInterval(that._timer);\r\n    this.standardTime = time;\r\n    setTimer();\r\n\r\n    return this.standardTime;\r\n  };\r\n\r\n  this.getAlarmArray = function () {\r\n    return this.alarmArray;\r\n  };\r\n\r\n  this.setAlarmArray = function (array) {\r\n    this.alarmArray = array;\r\n\r\n    if (this.alarmArray.length >= 2) {\r\n      this.alarmArray.sort(_utils__WEBPACK_IMPORTED_MODULE_1__.compareWithTime);\r\n    }\r\n\r\n    return this.alarmArray;\r\n  };\r\n\r\n  this.addAlarmToAlarmArray = function (alarmObject) {\r\n    this.alarmArray.push(new _models__WEBPACK_IMPORTED_MODULE_0__.Alarm(alarmObject));\r\n\r\n    if (this.alarmArray.length >= 2) {\r\n      this.alarmArray.sort(_utils__WEBPACK_IMPORTED_MODULE_1__.compareWithTime);\r\n    }\r\n\r\n    return this.alarmArray;\r\n  };\r\n\r\n  this.removeAlarmFromAlarmArray = function (alarmIndex) {\r\n    this.alarmArray.splice(alarmIndex, 1);\r\n\r\n    return this.alarmArray;\r\n  };\r\n\r\n  this.setOnOffStateOfAlarm = function (alarmIndex) {\r\n    return this.alarmArray[alarmIndex].setAlarmOnOffState(\r\n      !this.alarmArray[alarmIndex].getAlarmOnOffState()\r\n    );\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/AlarmManagerModel/index.js?");

/***/ }),

/***/ "./src/models/Alarm/index.js":
/*!***********************************!*\
  !*** ./src/models/Alarm/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Alarm; }\n/* harmony export */ });\nfunction Alarm(alarmObject) {\r\n  this.alarmTime = alarmObject.alarmTime;\r\n  this.clockMode = alarmObject.clockMode;\r\n  this.alarmMode = alarmObject.alarmMode;\r\n  this.alarmContent = alarmObject.alarmContent;\r\n  this.alarmOnOffState = alarmObject.alarmOnOffState;\r\n  var that = this;\r\n\r\n  this.setAlarmTime = function (time) {\r\n    this.alarmTime = time;\r\n\r\n    return this.alarmTime;\r\n  };\r\n\r\n  this.getAlarmTime = function () {\r\n    return this.alarmTime;\r\n  };\r\n\r\n  this.setClockMode = function (mode) {\r\n    this.clockMode = mode;\r\n\r\n    return this.clockMode;\r\n  };\r\n\r\n  this.getClockMode = function () {\r\n    return this.clockMode;\r\n  };\r\n\r\n  this.setAlarmMode = function (mode) {\r\n    this.alarmMode = mode;\r\n\r\n    return this.alarmMode;\r\n  };\r\n\r\n  this.getAlarmMode = function () {\r\n    return this.alarmMode;\r\n  };\r\n\r\n  this.setAlarmContent = function (content) {\r\n    this.alarmContent = content;\r\n\r\n    return this.alarmContent;\r\n  };\r\n\r\n  this.getAlarmContent = function () {\r\n    return this.alarmContent;\r\n  };\r\n\r\n  this.setAlarmOnOffState = function (onOffState) {\r\n    this.alarmOnOffState = onOffState;\r\n\r\n    return this.alarmOnOffState;\r\n  };\r\n\r\n  this.getAlarmOnOffState = function () {\r\n    return this.alarmOnOffState;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/Alarm/index.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlarmManagerModel\": function() { return /* reexport safe */ _AlarmManagerModel__WEBPACK_IMPORTED_MODULE_0__.default; },\n/* harmony export */   \"Alarm\": function() { return /* reexport safe */ _Alarm__WEBPACK_IMPORTED_MODULE_1__.default; }\n/* harmony export */ });\n/* harmony import */ var _AlarmManagerModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlarmManagerModel */ \"./src/models/AlarmManagerModel/index.js\");\n/* harmony import */ var _Alarm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alarm */ \"./src/models/Alarm/index.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareWithTime\": function() { return /* binding */ compareWithTime; }\n/* harmony export */ });\nfunction compareWithTime(a, b) {\r\n  console.log(a.alarmTime, b.alarmTime);\r\n  return a.alarmTime - b.alarmTime;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://alarm_web/./src/utils/index.js?");

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