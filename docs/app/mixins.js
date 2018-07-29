(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/mixins"],{

/***/ "./mixins/styled.ts":
/*!**************************!*\
  !*** ./mixins/styled.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    checkValue: function (value) {
        switch ((typeof value).toLowerCase()) {
            case 'number':
                return value + 'px';
            default:
                return value;
        }
    },
    result: function (values) {
        var result = '';
        for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
            var key = _a[_i];
            result += key + ": " + this.checkValue(values[key]) + ";";
        }
        return result;
    },
    size: function (width, height) {
        if (height === void 0) { height = width; }
        return this.result({
            width: width,
            height: height
        });
    }
};


/***/ })

}]);
//# sourceMappingURL=mixins.js.map