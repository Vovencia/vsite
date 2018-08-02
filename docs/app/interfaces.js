(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/interfaces"],{

/***/ "./interfaces/appInfo.ts":
/*!*******************************!*\
  !*** ./interfaces/appInfo.ts ***!
  \*******************************/
/*! exports provided: appInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInfo", function() { return appInfo; });
function appInfo(value) {
    return value;
}


/***/ }),

/***/ "./interfaces/bounds.ts":
/*!******************************!*\
  !*** ./interfaces/bounds.ts ***!
  \******************************/
/*! exports provided: boundsDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundsDefault", function() { return boundsDefault; });
var boundsDefault = {
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
/*! exports provided: IPositionRelativeX, IPositionRelativeY, positionDefault, sizeDefault, minSizeDefault, maxSizeDefault, appInfo, boundsDefault, Percent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ "./interfaces/position.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IPositionRelativeX", function() { return _position__WEBPACK_IMPORTED_MODULE_0__["IPositionRelativeX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IPositionRelativeY", function() { return _position__WEBPACK_IMPORTED_MODULE_0__["IPositionRelativeY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionDefault", function() { return _position__WEBPACK_IMPORTED_MODULE_0__["positionDefault"]; });

/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./size */ "./interfaces/size.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeDefault", function() { return _size__WEBPACK_IMPORTED_MODULE_1__["sizeDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minSizeDefault", function() { return _size__WEBPACK_IMPORTED_MODULE_1__["minSizeDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxSizeDefault", function() { return _size__WEBPACK_IMPORTED_MODULE_1__["maxSizeDefault"]; });

/* harmony import */ var _appInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appInfo */ "./interfaces/appInfo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appInfo", function() { return _appInfo__WEBPACK_IMPORTED_MODULE_2__["appInfo"]; });

/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounds */ "./interfaces/bounds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boundsDefault", function() { return _bounds__WEBPACK_IMPORTED_MODULE_3__["boundsDefault"]; });

/* harmony import */ var _percent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./percent */ "./interfaces/percent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return _percent__WEBPACK_IMPORTED_MODULE_4__["Percent"]; });








/***/ }),

/***/ "./interfaces/percent.ts":
/*!*******************************!*\
  !*** ./interfaces/percent.ts ***!
  \*******************************/
/*! exports provided: Percent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return Percent; });
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



/***/ }),

/***/ "./interfaces/position.ts":
/*!********************************!*\
  !*** ./interfaces/position.ts ***!
  \********************************/
/*! exports provided: IPositionRelativeX, IPositionRelativeY, positionDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPositionRelativeX", function() { return IPositionRelativeX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPositionRelativeY", function() { return IPositionRelativeY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionDefault", function() { return positionDefault; });
var IPositionRelativeX;
(function (IPositionRelativeX) {
    IPositionRelativeX["left"] = "LEFT";
    IPositionRelativeX["center"] = "CENTER";
    IPositionRelativeX["middle"] = "CENTER";
    IPositionRelativeX["right"] = "RIGHT";
})(IPositionRelativeX || (IPositionRelativeX = {}));
var IPositionRelativeY;
(function (IPositionRelativeY) {
    IPositionRelativeY["top"] = "TOP";
    IPositionRelativeY["center"] = "CENTER";
    IPositionRelativeY["middle"] = "CENTER";
    IPositionRelativeY["bottom"] = "BOTTOM";
})(IPositionRelativeY || (IPositionRelativeY = {}));
var positionDefault = {
    x: 0,
    y: 0,
};


/***/ }),

/***/ "./interfaces/size.ts":
/*!****************************!*\
  !*** ./interfaces/size.ts ***!
  \****************************/
/*! exports provided: sizeDefault, minSizeDefault, maxSizeDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeDefault", function() { return sizeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minSizeDefault", function() { return minSizeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxSizeDefault", function() { return maxSizeDefault; });
var sizeDefault = {
    width: 0,
    height: 0,
};
var minSizeDefault = {
    minWidth: 0,
    minHeight: 0,
};
var maxSizeDefault = {
    maxWidth: 0,
    maxHeight: 0,
};


/***/ })

}]);
//# sourceMappingURL=interfaces.js.map