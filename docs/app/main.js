(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/main"],{

/***/ "./apps/calculator/appInfo.ts":
/*!************************************!*\
  !*** ./apps/calculator/appInfo.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(/*! ../../interfaces */ "./interfaces/index.ts");
exports.default = interfaces_1.appInfo({
    icon: __webpack_require__(/*! ./icon.svg */ "./apps/calculator/icon.svg"),
    name: "Калькулятор",
    uid: "apps.calculator",
});


/***/ }),

/***/ "./apps/calculator/icon.svg":
/*!**********************************!*\
  !*** ./apps/calculator/icon.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "apps/calculator/icon.svg?2424bcfdcb2aa93a702af458ff315a98";

/***/ }),

/***/ "./apps/index.ts":
/*!***********************!*\
  !*** ./apps/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appInfo_1 = __webpack_require__(/*! ./calculator/appInfo */ "./apps/calculator/appInfo.ts");
exports.calculator = appInfo_1.default;


/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./system/init */ "./system/init.ts");


/***/ })

},[["./index.tsx","runtime","app/vendors","app/system","app/interfaces"]]]);
});
//# sourceMappingURL=main.js.map