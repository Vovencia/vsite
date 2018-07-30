(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/interfaces"],{

/***/ "./interfaces/appInfo.ts":
/*!*******************************!*\
  !*** ./interfaces/appInfo.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function appInfo(value) {
    return value;
}
exports.appInfo = appInfo;


/***/ }),

/***/ "./interfaces/bounds.ts":
/*!******************************!*\
  !*** ./interfaces/bounds.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.boundsDefault = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
};


/***/ }),

/***/ "./interfaces/index.ts":
/*!*****************************!*\
  !*** ./interfaces/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./position */ "./interfaces/position.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./size */ "./interfaces/size.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./appInfo */ "./interfaces/appInfo.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./bounds */ "./interfaces/bounds.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./percent */ "./interfaces/percent.ts"), exports);


/***/ }),

/***/ "./interfaces/percent.ts":
/*!*******************************!*\
  !*** ./interfaces/percent.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Percent = /** @class */ (function () {
    function Percent(value) {
        this._value = NaN;
        this._value = typeof value == 'string' ? parseFloat(value) : value;
    }
    Percent.prototype.value = function () {
        return this._value / 100;
    };
    Percent.prototype.valueOf = function () {
        return this._value / 100;
    };
    Percent.prototype.toString = function () {
        return (this._value) + '%';
    };
    return Percent;
}());
exports.Percent = Percent;


/***/ }),

/***/ "./interfaces/position.ts":
/*!********************************!*\
  !*** ./interfaces/position.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IPositionRelativeX;
(function (IPositionRelativeX) {
    IPositionRelativeX["left"] = "LEFT";
    IPositionRelativeX["center"] = "CENTER";
    IPositionRelativeX["middle"] = "CENTER";
    IPositionRelativeX["right"] = "RIGHT";
})(IPositionRelativeX = exports.IPositionRelativeX || (exports.IPositionRelativeX = {}));
var IPositionRelativeY;
(function (IPositionRelativeY) {
    IPositionRelativeY["top"] = "TOP";
    IPositionRelativeY["center"] = "CENTER";
    IPositionRelativeY["middle"] = "CENTER";
    IPositionRelativeY["bottom"] = "BOTTOM";
})(IPositionRelativeY = exports.IPositionRelativeY || (exports.IPositionRelativeY = {}));
exports.positionDefault = {
    x: 0,
    y: 0,
};


/***/ }),

/***/ "./interfaces/size.ts":
/*!****************************!*\
  !*** ./interfaces/size.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeDefault = {
    width: 0,
    height: 0,
};
exports.minSizeDefault = {
    minWidth: 0,
    minHeight: 0,
};
exports.maxSizeDefault = {
    maxWidth: 0,
    maxHeight: 0,
};


/***/ })

}]);
//# sourceMappingURL=interfaces.js.map