(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps/calculator/content"],{

/***/ "./apps/browser/content/index.tsx":
/*!****************************************!*\
  !*** ./apps/browser/content/index.tsx ***!
  \****************************************/
/*! exports provided: BrowserContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserContent", function() { return BrowserContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_WindowContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/WindowContent */ "./components/WindowContent/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");




console.log('calculator content');
var BrowserContent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrowserContent, _super);
    function BrowserContent(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultUrl = 'https://google.com/';
        var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ browserHistory: [] }, _this.state);
        _this.state = state;
        return _this;
    }
    BrowserContent.prototype.render = function () {
        var url = this.state.browserHistory[this.state.browserHistory.length - 1] || this.defaultUrl;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.className },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Toolbar, null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SiteFrame, { sandbox: "allow-forms allow-scripts", src: url })));
    };
    return BrowserContent;
}(_components_WindowContent__WEBPACK_IMPORTED_MODULE_2__["default"]));

var _a = __webpack_require__(/*! ./styles */ "./apps/browser/content/styles.ts").default(BrowserContent, {
    Toolbar: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Browser_Toolbar"),
    SiteFrame: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["el"])("webview", "Browser_SiteFrame"),
}), StyledBrowserContent = _a.Self, Toolbar = _a.Toolbar, SiteFrame = _a.SiteFrame;
/* harmony default export */ __webpack_exports__["default"] = (StyledBrowserContent);


/***/ }),

/***/ "./apps/browser/content/styles.ts":
/*!****************************************!*\
  !*** ./apps/browser/content/styles.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (Self, _a) {
    var SiteFrame = _a.SiteFrame, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["SiteFrame"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Self: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Self)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"]))), SiteFrame: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(SiteFrame)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t"]))) });
});
var templateObject_1, templateObject_2;


/***/ }),

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





console.log('calculator content');
var CalculatorContent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalculatorContent, _super);
    function CalculatorContent(props) {
        var _this = _super.call(this, props) || this;
        _this.actions = [
            "c", "", "<", "/",
            "7", "8", "9", "*",
            "4", "5", "6", "-",
            "1", "2", "3", "+",
            "", "0", ".", "=",
        ];
        var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.reset(true), _this.state);
        _this.state = state;
        _this.onButtonClick = _this.onButtonClick.bind(_this);
        _this.on('keydown', _this.onKeydown.bind(_this));
        return _this;
    }
    CalculatorContent.prototype.render = function () {
        var _this = this;
        var value = this.state.currentValue.join('') || '0';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.className },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Display, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_ScrolledContent__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DisplayText, null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DisplayAction, { "data-value": this.state.action }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DisplayValues, null, [1, 2].map(function (key) {
                            var value = _this.state['value' + key];
                            if (value == null)
                                value = undefined;
                            else
                                value = value.toString();
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DisplayValue, { key: key, Index: key, "data-value": value });
                        }))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledButtons, null, this.actions.map(function (action, index) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, { key: index, onClick: _this.onButtonClick, "data-action": action });
            }))));
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
                if (value != '0' || this.addZero(this.state.currentValue)) {
                    value = this.state.currentValue.concat(value);
                }
                else {
                    value = this.state.currentValue;
                }
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentValue: value, value2: value.join('') || 0 });
                break;
            case 'c':
                state = this.reset(true);
                break;
            case '.':
                if (this.state.currentValue.indexOf('.') !== -1)
                    break;
                value = this.state.currentValue.concat(value);
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentValue: value, value2: parseFloat(value.join('')) || 0 });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { action: value, value1: this.calc(this.state.value1, this.state.value2, this.state.action), value2: 0, currentValue: [] });
                break;
            case '=':
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, this.reset(true), { value2: this.calc(this.state.value1, this.state.value2, this.state.action) });
                break;
            case '<':
                value = [].concat(this.state.currentValue);
                value.splice(-1);
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentValue: value, value2: parseFloat(value.join('')) || 0 });
                break;
        }
        this.setState(state);
    };
    CalculatorContent.prototype.calc = function (value1, value2, action) {
        if (!value2)
            value2 = 0;
        if (action && value1 != null)
            return eval(parseFloat(value1) + action + parseFloat(value2));
        return value2;
    };
    CalculatorContent.prototype.reset = function (returnState) {
        if (returnState === void 0) { returnState = false; }
        var newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state, { currentValue: [], value1: null, value2: 0, action: '' });
        if (returnState)
            return newState;
        this.setState(newState);
    };
    CalculatorContent.prototype.addZero = function (currentValue) {
        return !!currentValue.filter(function (value) { return value != '0'; }).length;
    };
    CalculatorContent.prototype.onKeydown = function () {
    };
    return CalculatorContent;
}(_components_WindowContent__WEBPACK_IMPORTED_MODULE_2__["default"]));

var Buttons = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Buttons, _super);
    function Buttons(props) {
        var _this = _super.call(this, props) || this;
        _this.Content = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_Buttons");
        return _this;
    }
    Buttons.prototype.render = function () {
        return this.Content(this.props);
    };
    Buttons.prototype.shouldComponentUpdate = function () {
        return false;
    };
    return Buttons;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var _a = __webpack_require__(/*! ./styles */ "./apps/calculator/content/styles.ts").default(CalculatorContent, {
    Display: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_Display"),
    DisplayText: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_DisplayText"),
    DisplayValue: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_DisplayValue"),
    DisplayValues: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_DisplayValues"),
    DisplayAction: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Calculator_DisplayAction"),
    Buttons: Buttons,
    Button: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["el"])("button", "Calculator_Button")
}), StyledCalculatorContent = _a.Self, Display = _a.Display, DisplayText = _a.DisplayText, DisplayValue = _a.DisplayValue, DisplayValues = _a.DisplayValues, DisplayAction = _a.DisplayAction, StyledButtons = _a.Buttons, Button = _a.Button;
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
    var Display = _a.Display, DisplayText = _a.DisplayText, Button = _a.Button, Buttons = _a.Buttons, DisplayValue = _a.DisplayValue, DisplayValues = _a.DisplayValues, DisplayAction = _a.DisplayAction, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["Display", "DisplayText", "Button", "Buttons", "DisplayValue", "DisplayValues", "DisplayAction"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Self: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Self)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"]))), Display: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Display)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tpadding: 10rem;\n\t\t\tfont-size: 20rem;\n\t\t\tfont-weight: 300;\n\t\t\tflex-shrink: 1;\n\t\t\t> * {\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tpadding: 10rem;\n\t\t\tfont-size: 20rem;\n\t\t\tfont-weight: 300;\n\t\t\tflex-shrink: 1;\n\t\t\t> * {\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t"]))), DisplayText: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(DisplayText)(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t"]))), DisplayAction: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(DisplayAction)(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 20rem;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t"], ["\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 20rem;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t"]))), DisplayValues: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(DisplayValues)(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"]))), Buttons: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Buttons)(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tflex-grow: 0;\n\t\t\tmargin-left: 1px;\n\t\t\tflex-shrink: 0;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-top: 1rem;\n\t\t"], ["\n\t\t\tflex-grow: 0;\n\t\t\tmargin-left: 1px;\n\t\t\tflex-shrink: 0;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-top: 1rem;\n\t\t"]))), Button: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Button)(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: block;\n\t\t\twidth: calc(25% - 1rem);\n\t\t\theight: 30rem;\n\t\t\tborder: 0;\n\t\t\tmargin-right: 1rem;\n\t\t\tmargin-bottom: 1rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\tcursor: pointer;\n\t\t\t&[data-action=\"\"]{\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tcursor: default;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-action)\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t\t}\n\t\t\t&:active {\n\t\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t\t}\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twidth: calc(25% - 1rem);\n\t\t\theight: 30rem;\n\t\t\tborder: 0;\n\t\t\tmargin-right: 1rem;\n\t\t\tmargin-bottom: 1rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\tcursor: pointer;\n\t\t\t&[data-action=\"\"]{\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tcursor: default;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-action)\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t\t}\n\t\t\t&:active {\n\t\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t\t}\n\t\t"]))), DisplayValue: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(DisplayValue)(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tword-break: break-all;\n\t\t\ttext-align: right;\n\t\t\tflex-grow: 1;\n\t\t\tdisplay: none;\n\t\t\t&[data-value] {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t\tfont-size: ", "em;\n\t\t"], ["\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tword-break: break-all;\n\t\t\ttext-align: right;\n\t\t\tflex-grow: 1;\n\t\t\tdisplay: none;\n\t\t\t&[data-value] {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t\tfont-size: ", "em;\n\t\t"])), calcFontSize) });
});
function calcFontSize(props) {
    var result = 1;
    var ratio = props['Index'] == 1 ? 0.7 : 1.3;
    // if(props['data-value'] && props['data-value'].length > 8){
    // 	result = 8/props['data-value'].length;
    // }
    result *= result * ratio;
    return result;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ })

}]);
//# sourceMappingURL=content.js.map