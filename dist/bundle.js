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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n/* harmony import */ var _viewModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewModels */ \"./src/viewModels/index.js\");\n\r\n\r\n\r\nvar managerModel = new _models__WEBPACK_IMPORTED_MODULE_0__.AlarmManagerModel();\r\nvar managerViewModel = new _viewModels__WEBPACK_IMPORTED_MODULE_1__.AlarmManagerViewModel(managerModel);\r\n\r\n// console.log(managerModel.getStandardTime());\r\n\r\n// console.log(managerModel.setStandardTime(new Date('1997-12-17T03:24:00')));\r\n\r\n// console.log(\r\n//   managerModel.addAlarmToAlarmArray({\r\n//     alarmTime: new Date(),\r\n//     clockMode: 'test',\r\n//     alarmMode: 'test',\r\n//     alarmContent: 'test',\r\n//     alarmOnOffState: true,\r\n//   })\r\n// );\r\n\r\n// console.log(\r\n//   managerModel.addAlarmToAlarmArray({\r\n//     alarmTime: new Date('1997-12-17T03:24:00'),\r\n//     clockMode: 'test',\r\n//     alarmMode: 'test',\r\n//     alarmContent: 'test',\r\n//     alarmOnOffState: true,\r\n//   })\r\n// );\r\n\r\nconsole.log(\r\n  managerViewModel.addAlarmToAlarmArray({\r\n    alarmTime: new Date('2021-01-25T01:37:00'),\r\n    clockMode: 'test',\r\n    alarmMode: 'test',\r\n    alarmContent: 'test',\r\n    alarmOnOffState: true,\r\n  })\r\n);\r\n\r\n// console.log(managerModel.setOnOffStateOfAlarm(1));\r\n// console.log(managerModel.getAlarmArray());\r\n\n\n//# sourceURL=webpack://alarm_web/./src/index.js?");

/***/ }),

/***/ "./src/library/Observer/index.js":
/*!***************************************!*\
  !*** ./src/library/Observer/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Observer; }\n/* harmony export */ });\nfunction Observer() {}\r\n\r\nObserver.prototype = {\r\n  observe: function (self, target) {\r\n    target.publisher.register(self);\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://alarm_web/./src/library/Observer/index.js?");

/***/ }),

/***/ "./src/library/Publisher/index.js":
/*!****************************************!*\
  !*** ./src/library/Publisher/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Publisher; }\n/* harmony export */ });\nfunction Publisher() {\r\n  this.observers = [];\r\n}\r\n\r\nPublisher.prototype = {\r\n  register: function (observer) {\r\n    this.observers.push(observer);\r\n  },\r\n\r\n  publish: function (callback) {\r\n    for (var i = 0; i < this.observers.length; i++) {\r\n      this.observers[i][callback]();\r\n    }\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://alarm_web/./src/library/Publisher/index.js?");

/***/ }),

/***/ "./src/library/index.js":
/*!******************************!*\
  !*** ./src/library/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observer\": function() { return /* reexport safe */ _Observer__WEBPACK_IMPORTED_MODULE_0__.default; },\n/* harmony export */   \"Publisher\": function() { return /* reexport safe */ _Publisher__WEBPACK_IMPORTED_MODULE_1__.default; }\n/* harmony export */ });\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./src/library/Observer/index.js\");\n/* harmony import */ var _Publisher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publisher */ \"./src/library/Publisher/index.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://alarm_web/./src/library/index.js?");

/***/ }),

/***/ "./src/models/AlarmManagerModel/index.js":
/*!***********************************************!*\
  !*** ./src/models/AlarmManagerModel/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlarmManagerModel; }\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./src/models/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library */ \"./src/library/index.js\");\n\r\n\r\n\r\n\r\nfunction AlarmManagerModel() {\r\n  this.standardTime = new Date();\r\n  this.alarmArray = [];\r\n  this.activeAlarmArray = [];\r\n  this.publisher = new _library__WEBPACK_IMPORTED_MODULE_2__.Publisher();\r\n  this._timer1 = null;\r\n\r\n  this.setTimer();\r\n  this.loadDataFromLocalStorage();\r\n}\r\n\r\nAlarmManagerModel.prototype = {\r\n  setTimer: function () {\r\n    var that = this;\r\n    this._timer1 = setInterval(function () {\r\n      that.passStandardTime();\r\n    }, 1000);\r\n  },\r\n\r\n  saveDataToLocalStorage: function (key, data) {\r\n    localStorage.setItem(key, JSON.stringify(data));\r\n  },\r\n\r\n  loadDataFromLocalStorage: function () {\r\n    if ('alarmArray' in localStorage) {\r\n      this.setAlarmArray(JSON.parse(localStorage.getItem('alarmArray')));\r\n    }\r\n  },\r\n\r\n  publish: function (callback) {\r\n    this.publisher.publish(callback);\r\n  },\r\n\r\n  isSameTime: function (standardTime, alarmTime) {\r\n    if (standardTime.getFullYear() !== alarmTime.getFullYear()) {\r\n      return false;\r\n    }\r\n\r\n    if (standardTime.getMonth() !== alarmTime.getMonth()) {\r\n      return false;\r\n    }\r\n\r\n    if (standardTime.getDate() !== alarmTime.getDate()) {\r\n      return false;\r\n    }\r\n\r\n    if (standardTime.getHours() !== alarmTime.getHours()) {\r\n      return false;\r\n    }\r\n\r\n    if (standardTime.getMinutes() !== alarmTime.getMinutes()) {\r\n      return false;\r\n    }\r\n\r\n    if (standardTime.getSeconds() !== alarmTime.getSeconds()) {\r\n      return false;\r\n    }\r\n\r\n    return true;\r\n  },\r\n\r\n  getStandardTime: function () {\r\n    return this.standardTime;\r\n  },\r\n\r\n  setStandardTime: function (time) {\r\n    clearInterval(this._timer1);\r\n    this.standardTime = time;\r\n    this.setTimer();\r\n\r\n    return this.standardTime;\r\n  },\r\n\r\n  passStandardTime: function () {\r\n    var prevMinute = this.standardTime.getMinutes();\r\n    console.log('passStandardTime');\r\n    this.standardTime.setMilliseconds(\r\n      this.standardTime.getMilliseconds() + 1000\r\n    );\r\n\r\n    var nowMinute = this.standardTime.getMinutes();\r\n    if (prevMinute !== nowMinute) {\r\n      this.searchActiveAlarms(this.standardTime);\r\n    }\r\n\r\n    return this.standardTime;\r\n  },\r\n\r\n  getAlarmArray: function () {\r\n    return this.alarmArray;\r\n  },\r\n\r\n  setAlarmArray: function (array) {\r\n    var loadedAlarmArray = [];\r\n\r\n    for (var i = 0; i < array.length; i++) {\r\n      loadedAlarmArray.push(\r\n        new _models__WEBPACK_IMPORTED_MODULE_0__.Alarm({\r\n          alarmTime: new Date(array[i].alarmTime),\r\n          clockMode: array[i].clockMode,\r\n          alarmMode: array[i].alarmMode,\r\n          alarmContent: array[i].alarmContent,\r\n          alarmOnOffState: array[i].alarmOnOffState,\r\n        })\r\n      );\r\n    }\r\n\r\n    this.alarmArray = loadedAlarmArray;\r\n\r\n    if (this.alarmArray.length >= 2) {\r\n      this.alarmArray.sort(_utils__WEBPACK_IMPORTED_MODULE_1__.compareWithTime);\r\n    }\r\n\r\n    this.saveDataToLocalStorage('alarmArray', this.alarmArray);\r\n\r\n    console.log(this.alarmArray, 'setAlarmArray');\r\n\r\n    return this.alarmArray;\r\n  },\r\n\r\n  addAlarmToAlarmArray: function (alarmObject) {\r\n    console.log('addAlarmToAlarmArray');\r\n    this.alarmArray.push(new _models__WEBPACK_IMPORTED_MODULE_0__.Alarm(alarmObject));\r\n\r\n    if (this.alarmArray.length >= 2) {\r\n      this.alarmArray.sort(_utils__WEBPACK_IMPORTED_MODULE_1__.compareWithTime);\r\n    }\r\n\r\n    this.saveDataToLocalStorage('alarmArray', this.alarmArray);\r\n\r\n    return this.alarmArray;\r\n  },\r\n\r\n  removeAlarmFromAlarmArray: function (alarmIndex) {\r\n    this.alarmArray.splice(alarmIndex, 1);\r\n\r\n    this.saveDataToLocalStorage('alarmArray', this.alarmArray);\r\n\r\n    return this.alarmArray;\r\n  },\r\n\r\n  getActiveAlarmArray: function () {\r\n    return this.activeAlarmArray;\r\n  },\r\n\r\n  searchActiveAlarms: function (standardTime) {\r\n    this.activeAlarmArray = [];\r\n\r\n    for (var i = 0; i < this.alarmArray.length; i++) {\r\n      if (this.isSameTime(standardTime, this.alarmArray[i].alarmTime)) {\r\n        this.activeAlarmArray.push(this.alarmArray[i]);\r\n      }\r\n    }\r\n\r\n    this.publish('getActiveAlarmArray');\r\n\r\n    return this.activeAlarmArray;\r\n  },\r\n\r\n  setOnOffStateOfAlarm: function (alarmIndex) {\r\n    // saveDataToLocalStorage('alarmArray', this.alarmArray)\r\n    return this.alarmArray[alarmIndex].setAlarmOnOffState(\r\n      !this.alarmArray[alarmIndex].getAlarmOnOffState()\r\n    );\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/AlarmManagerModel/index.js?");

/***/ }),

/***/ "./src/models/Alarm/index.js":
/*!***********************************!*\
  !*** ./src/models/Alarm/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Alarm; }\n/* harmony export */ });\nfunction Alarm(alarmObject) {\r\n  this.alarmTime = alarmObject.alarmTime;\r\n  this.clockMode = alarmObject.clockMode;\r\n  this.alarmMode = alarmObject.alarmMode;\r\n  this.alarmContent = alarmObject.alarmContent;\r\n  this.alarmOnOffState = alarmObject.alarmOnOffState;\r\n}\r\n\r\nAlarm.prototype = {\r\n  setAlarmTime: function (time) {\r\n    this.alarmTime = time;\r\n\r\n    return this.alarmTime;\r\n  },\r\n\r\n  getAlarmTime: function () {\r\n    return this.alarmTime;\r\n  },\r\n\r\n  setClockMode: function (mode) {\r\n    this.clockMode = mode;\r\n\r\n    return this.clockMode;\r\n  },\r\n\r\n  getClockMode: function () {\r\n    return this.clockMode;\r\n  },\r\n\r\n  setAlarmMode: function (mode) {\r\n    this.alarmMode = mode;\r\n\r\n    return this.alarmMode;\r\n  },\r\n\r\n  getAlarmMode: function () {\r\n    return this.alarmMode;\r\n  },\r\n\r\n  setAlarmContent: function (content) {\r\n    this.alarmContent = content;\r\n\r\n    return this.alarmContent;\r\n  },\r\n\r\n  getAlarmContent: function () {\r\n    return this.alarmContent;\r\n  },\r\n\r\n  setAlarmOnOffState: function (onOffState) {\r\n    this.alarmOnOffState = onOffState;\r\n\r\n    return this.alarmOnOffState;\r\n  },\r\n\r\n  getAlarmOnOffState: function () {\r\n    return this.alarmOnOffState;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://alarm_web/./src/models/Alarm/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareWithTime\": function() { return /* binding */ compareWithTime; }\n/* harmony export */ });\nfunction compareWithTime(a, b) {\r\n  return a.alarmTime - b.alarmTime;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://alarm_web/./src/utils/index.js?");

/***/ }),

/***/ "./src/viewModels/AlarmManagerViewModel/index.js":
/*!*******************************************************!*\
  !*** ./src/viewModels/AlarmManagerViewModel/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlarmManagerViewModel; }\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library */ \"./src/library/index.js\");\n\r\n\r\nfunction AlarmManagerViewModel(model) {\r\n  this.model = model;\r\n  this.activeAlarmArray = [];\r\n  this.observer = new _library__WEBPACK_IMPORTED_MODULE_0__.Observer();\r\n  this.publisher = new _library__WEBPACK_IMPORTED_MODULE_0__.Publisher();\r\n\r\n  this.observe();\r\n}\r\n\r\nAlarmManagerViewModel.prototype = {\r\n  observe: function () {\r\n    this.observer.observe(this, this.model);\r\n  },\r\n\r\n  getActiveAlarmArray: function () {\r\n    this.activeAlarmArray = this.model.getActiveAlarmArray();\r\n    console.log(this.activeAlarmArray, 'getActiveAlarmArray');\r\n\r\n    return this.activeAlarmArray;\r\n  },\r\n\r\n  getStandardTime: function () {\r\n    return this.model.getStandardTime();\r\n  },\r\n\r\n  setStandardTime: function (time) {\r\n    return this.model.setStandardTime(time);\r\n  },\r\n\r\n  getAlarmArray: function () {\r\n    return this.model.alarmArray();\r\n  },\r\n\r\n  setAlarmArray: function (array) {\r\n    return this.model.setAlarmArray(array);\r\n  },\r\n\r\n  addAlarmToAlarmArray: function (alarmObject) {\r\n    return this.model.addAlarmToAlarmArray(alarmObject);\r\n  },\r\n\r\n  removeAlarmFromAlarmArray: function (alarmIndex) {\r\n    return this.model.removeAlarmFromAlarmArray(alarmIndex);\r\n  },\r\n\r\n  setOnOffStateOfAlarm: function (alarmIndex) {\r\n    return this.model.setOnOffStateOfAlarm(alarmIndex);\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://alarm_web/./src/viewModels/AlarmManagerViewModel/index.js?");

/***/ }),

/***/ "./src/viewModels/index.js":
/*!*********************************!*\
  !*** ./src/viewModels/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlarmManagerViewModel\": function() { return /* reexport safe */ _AlarmManagerViewModel__WEBPACK_IMPORTED_MODULE_0__.default; }\n/* harmony export */ });\n/* harmony import */ var _AlarmManagerViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlarmManagerViewModel */ \"./src/viewModels/AlarmManagerViewModel/index.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://alarm_web/./src/viewModels/index.js?");

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