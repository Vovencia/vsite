(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps/calculator/index"],{

/***/ "../node_modules/svg-inline-loader/index.js!./assets/images/cursors/cursors.svg":
/*!*****************************************************************************!*\
  !*** ../node_modules/svg-inline-loader!./assets/images/cursors/cursors.svg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"cursors\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\"><rect id=\"scene\" opacity=\"0\" fill=\"#FFFFFF\" width=\"100\" height=\"100\"></rect><g id=\"url\"><text transform=\"matrix(1 0 0 1 1.0415 4.2915)\" opacity=\"0\" font-family=\"&#x27;ArialMT&#x27;\" font-size=\"4px\">https://www.flaticon.com/packs/selection-and-cursors</text></g><circle id=\"cursor\" cx=\"50\" cy=\"50\" r=\"1.5\"></circle><path id=\"default\" display=\"none\" d=\"M80.7,79L51.6,50.3c-0.4-0.4-0.9-0.4-1.3,0c-0.2,0.2-0.3,0.4-0.3,0.6v41.2 c0,0.4,0.2,0.7,0.6,0.8c0.3,0.1,0.7,0,1-0.2l11.6-12.3h16.9c0.5,0,0.9-0.4,0.9-0.9C81,79.4,80.9,79.1,80.7,79z\"></path><path id=\"pointer\" d=\"M80.7,79.1L51.9,50.3c-0.4-0.4-1.1-0.4-1.6,0c-0.2,0.2-0.3,0.5-0.3,0.8V91c0,0.6,0.5,1.1,1.1,1.1 c0.2,0,0.5-0.1,0.7-0.2l7.8-5.8l6,12.1c0.3,0.5,0.9,0.8,1.5,0.5c0,0,0,0,0,0l8.9-4.4c0.5-0.3,0.8-0.9,0.5-1.5c0,0,0,0,0,0L70.6,81 h9.3c0.6,0,1.1-0.5,1.1-1.1C81,79.6,80.9,79.3,80.7,79.1z\"></path></svg>"

/***/ }),

/***/ "./apps/browser/appInfo.ts":
/*!*********************************!*\
  !*** ./apps/browser/appInfo.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _interfaces_1 = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");
exports.default = _interfaces_1.appInfo({
    icon: __webpack_require__(/*! ./icon.svg */ "./apps/browser/icon.svg"),
    name: "Браузер",
    uid: "browser",
});


/***/ }),

/***/ "./apps/browser/icon.svg":
/*!*******************************!*\
  !*** ./apps/browser/icon.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "apps/browser/icon.svg?2710ad5209dad1f134452eec9dfd0408";

/***/ }),

/***/ "./apps/browser/index.tsx":
/*!********************************!*\
  !*** ./apps/browser/index.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var appInfo_1 = __webpack_require__(/*! ./appInfo */ "./apps/browser/appInfo.ts");
exports.appInfo = appInfo_1.default;
var _system_1 = __webpack_require__(/*! @system */ "./system/index.ts");
var _interfaces_1 = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");
// import content from "./content";
// const content = requiredContent(appInfo.uid, require("./content/").default);
function call() {
    _system_1.window.open({ appInfo: appInfo_1.default }, {
        width: 500,
        height: 300,
        // maxWidth: 165,
        // maxHeight: 240,
        // minWidth: 165,
        // minHeight: 240,
        x: _interfaces_1.IPositionRelativeX.center,
        y: _interfaces_1.IPositionRelativeY.center,
        isMaximized: true,
        resizable: true,
        appInfo: appInfo_1.default,
    }, function (windowId) {
        console.log(windowId);
    });
}
exports.call = call;


/***/ }),

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
var _interfaces_1 = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");
// import content from "./content";
// const content = requiredContent(appInfo.uid, require("./content/").default);
function call() {
    _system_1.window.open({ appInfo: appInfo_1.default }, {
        width: 165,
        height: 240,
        // maxWidth: 165,
        // maxHeight: 240,
        // minWidth: 165,
        // minHeight: 240,
        x: _interfaces_1.IPositionRelativeX.center,
        y: _interfaces_1.IPositionRelativeY.center,
        resizable: true,
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
var browser = __webpack_require__(/*! ./browser */ "./apps/browser/index.tsx");
exports.browser = browser;


/***/ }),

/***/ "./assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg":
/*!******************************************************************************!*\
  !*** ./assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/backgrounds/assets/images/backgrounds/assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg?17b9f609b92eb1b6d17f6c82f65b0990";

/***/ })

},[["./apps/calculator/index.tsx","runtime","app/vendors","app/components","app/utils","app/mixins","app/system","app/interfaces"]]]);
//# sourceMappingURL=index.js.map