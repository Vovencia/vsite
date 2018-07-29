(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps/calculator/index"],{

/***/ "./apps/calculator/appInfo.ts":
/*!************************************!*\
  !*** ./apps/calculator/appInfo.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _interfaces_1 = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");
exports.default = _interfaces_1.appInfo({
    icon: __webpack_require__(/*! ./icon.svg */ "./apps/calculator/icon.svg"),
    name: "Калькулятор",
    uid: "calculator",
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

/***/ "./apps/calculator/index.tsx":
/*!***********************************!*\
  !*** ./apps/calculator/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appInfo_1 = __webpack_require__(/*! ./appInfo */ "./apps/calculator/appInfo.ts");
exports.appInfo = appInfo_1.default;
var _system_1 = __webpack_require__(/*! @system */ "./system/index.ts");
// import content from "./content";
// const content = requiredContent(appInfo.uid, require("./content/").default);
function call() {
    _system_1.window.open("123", {
        width: 165,
        height: 240,
        maxWidth: 165,
        maxHeight: 240,
        minWidth: 165,
        minHeight: 240,
        x: 'center',
        y: 'center',
        resizable: false,
        appInfo: appInfo_1.default,
    }, function (windowId) {
        console.log(windowId);
    });
}
exports.call = call;


/***/ }),

/***/ "./apps/index.ts":
/*!***********************!*\
  !*** ./apps/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var calculator = __webpack_require__(/*! ./calculator */ "./apps/calculator/index.tsx");
exports.calculator = calculator;


/***/ }),

/***/ "./assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg":
/*!******************************************************************************!*\
  !*** ./assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg?17b9f609b92eb1b6d17f6c82f65b0990";

/***/ })

},[["./apps/calculator/index.tsx","runtime","app/vendors","app/components","app/utils","app/mixins","app/system","app/interfaces"]]]);
//# sourceMappingURL=index.js.map