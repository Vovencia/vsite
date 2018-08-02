(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator.content"],{

/***/ "./apps/calculator/content/index.tsx":
/*!*******************************************!*\
  !*** ./apps/calculator/content/index.tsx ***!
  \*******************************************/
/*! exports provided: CalculatorContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorContent", function() { return CalculatorContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_WindowContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/WindowContent */ "./components/WindowContent/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _components_ScrolledContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ScrolledContent */ "./components/ScrolledContent/index.tsx");





var CalculatorContent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalculatorContent, _super);
    function CalculatorContent(props) {
        var _this = _super.call(this, props) || this;
        _this.actions = [
            "", "", "", "c",
            "7", "8", "9", "x",
            "4", "5", "6", "-",
            "1", "2", "3", "+",
            "", "0", ".", "=",
        ];
        _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ currentValue: [], value1: 0, value2: 0, isDecimal: false, action: '' }, _this.state);
        _this.onButtonClick = _this.onButtonClick.bind(_this);
        return _this;
    }
    CalculatorContent.prototype.render = function () {
        var _this = this;
        var value = this.state.currentValue.join('') || '0';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.className },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Display, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_ScrolledContent__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DisplayText, { "data-value": value }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Buttons, null, this.actions.map(function (action, index) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, { key: index, onClick: _this.onButtonClick, "data-action": action }); }))));
    };
    CalculatorContent.prototype.onButtonClick = function (event) {
        event.preventDefault();
        var value = event.target.dataset.action;
        var state = {};
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                value = this.state.currentValue.concat(value);
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentValue: value });
                break;
            case 'c':
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentValue: [], isDecimal: false, value1: 0, value2: 0, action: '' });
                break;
            case '.':
                if (this.state.isDecimal)
                    break;
                value = this.state.currentValue.concat(value);
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isDecimal: true, currentValue: value });
                break;
        }
        this.setState(state);
    };
    return CalculatorContent;
}(_components_WindowContent__WEBPACK_IMPORTED_MODULE_2__["default"]));

var _a = __webpack_require__(/*! ./styles */ "./apps/calculator/content/styles.ts")(CalculatorContent, {
    Display: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_Display"),
    DisplayText: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_DisplayText"),
    Buttons: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_Buttons"),
    Button: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["el"])("button", "Calculator_Button")
}), StyledCalculatorContent = _a.Self, Display = _a.Display, DisplayText = _a.DisplayText, Buttons = _a.Buttons, Button = _a.Button;
/* harmony default export */ __webpack_exports__["default"] = (StyledCalculatorContent);


/***/ }),

/***/ "./apps/calculator/content/styles.ts":
/*!*******************************************!*\
  !*** ./apps/calculator/content/styles.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (Self, _a) {
    var Display = _a.Display, DisplayText = _a.DisplayText, Button = _a.Button, Buttons = _a.Buttons, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["Display", "DisplayText", "Button", "Buttons"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Self: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Self)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"]))), Display: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Display)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tpadding: 10rem;\n\t\t\tfont-size: 20rem;\n\t\t\tfont-weight: 300;\n\t\t\tflex-shrink: 1;\n\t\t\t> * {\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tpadding: 10rem;\n\t\t\tfont-size: 20rem;\n\t\t\tfont-weight: 300;\n\t\t\tflex-shrink: 1;\n\t\t\t> * {\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t"]))), DisplayText: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(DisplayText)(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tword-break: break-all;\n\t\t\ttext-align: right;\n\t\t\tflex-grow: 1;\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tword-break: break-all;\n\t\t\ttext-align: right;\n\t\t\tflex-grow: 1;\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t"]))), Buttons: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Buttons)(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tflex-grow: 0;\n\t\t\tmargin-left: 1px;\n\t\t\tflex-shrink: 0;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-top: 1px;\n\t\t"], ["\n\t\t\tflex-grow: 0;\n\t\t\tmargin-left: 1px;\n\t\t\tflex-shrink: 0;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-top: 1px;\n\t\t"]))), Button: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Button)(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: block;\n\t\t\twidth: 40px;\n\t\t\theight: 30rem;\n\t\t\tborder: 0;\n\t\t\tmargin-right: 1px;\n\t\t\tmargin-bottom: 1px;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\tcursor: pointer;\n\t\t\t&[data-action=\"\"]{\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tcursor: default;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-action)\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t\t}\n\t\t\t&:active {\n\t\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t\t}\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twidth: 40px;\n\t\t\theight: 30rem;\n\t\t\tborder: 0;\n\t\t\tmargin-right: 1px;\n\t\t\tmargin-bottom: 1px;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\tcursor: pointer;\n\t\t\t&[data-action=\"\"]{\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tcursor: default;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-action)\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t\t}\n\t\t\t&:active {\n\t\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t\t}\n\t\t"]))) });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ })

}]);
//# sourceMappingURL=calculator.content.js.map