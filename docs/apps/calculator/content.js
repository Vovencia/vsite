(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps/calculator/content"],{

/***/ "./apps/calculator/content/index.tsx":
/*!*******************************************!*\
  !*** ./apps/calculator/content/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var WindowContent_1 = __webpack_require__(/*! @components/WindowContent */ "./components/WindowContent/index.tsx");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var ScrolledContent_1 = __webpack_require__(/*! @components/ScrolledContent */ "./components/ScrolledContent/index.tsx");
var CalculatorContent = /** @class */ (function (_super) {
    tslib_1.__extends(CalculatorContent, _super);
    function CalculatorContent(props) {
        var _this = _super.call(this, props) || this;
        _this.actions = [
            "", "", "", "c",
            "7", "8", "9", "x",
            "4", "5", "6", "-",
            "1", "2", "3", "+",
            "", "0", ".", "=",
        ];
        _this.state = tslib_1.__assign({ currentValue: [], value1: 0, value2: 0, isDecimal: false, action: '' }, _this.state);
        _this.onButtonClick = _this.onButtonClick.bind(_this);
        return _this;
    }
    CalculatorContent.prototype.render = function () {
        var _this = this;
        var value = this.state.currentValue.join('') || '0';
        return (React.createElement("div", { className: this.props.className },
            React.createElement(Display, null,
                React.createElement(ScrolledContent_1.default, null,
                    React.createElement(DisplayText, { "data-value": value }))),
            React.createElement(Buttons, null, this.actions.map(function (action, index) { return React.createElement(Button, { key: index, onClick: _this.onButtonClick, "data-action": action }); }))));
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
                state = tslib_1.__assign({}, state, { currentValue: value });
                break;
            case 'c':
                state = tslib_1.__assign({}, state, { currentValue: [], isDecimal: false, value1: 0, value2: 0, action: '' });
                break;
            case '.':
                if (this.state.isDecimal)
                    break;
                value = this.state.currentValue.concat(value);
                state = tslib_1.__assign({}, state, { isDecimal: true, currentValue: value });
                break;
        }
        this.setState(state);
    };
    return CalculatorContent;
}(WindowContent_1.default));
exports.CalculatorContent = CalculatorContent;
var _a = __webpack_require__(/*! ./styles */ "./apps/calculator/content/styles.ts")(CalculatorContent, {
    Display: _utils_1.div("Calculator_Display"),
    DisplayText: _utils_1.div("Calculator_DisplayText"),
    Buttons: _utils_1.div("Calculator_Buttons"),
    Button: _utils_1.el("button", "Calculator_Button")
}), StyledCalculatorContent = _a.Self, Display = _a.Display, DisplayText = _a.DisplayText, Buttons = _a.Buttons, Button = _a.Button;
exports.default = StyledCalculatorContent;


/***/ }),

/***/ "./apps/calculator/content/styles.ts":
/*!*******************************************!*\
  !*** ./apps/calculator/content/styles.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
module.exports = function (Self, _a) {
    var Display = _a.Display, DisplayText = _a.DisplayText, Button = _a.Button, Buttons = _a.Buttons, children = tslib_1.__rest(_a, ["Display", "DisplayText", "Button", "Buttons"]);
    return tslib_1.__assign({}, children, { Self: _utils_1.styled(Self)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t"]))), Display: _utils_1.styled(Display)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tpadding: 10rem;\n\t\t\tfont-size: 20rem;\n\t\t\tfont-weight: 300;\n\t\t\tflex-shrink: 1;\n\t\t\t> * {\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tpadding: 10rem;\n\t\t\tfont-size: 20rem;\n\t\t\tfont-weight: 300;\n\t\t\tflex-shrink: 1;\n\t\t\t> * {\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t"]))), DisplayText: _utils_1.styled(DisplayText)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tword-break: break-all;\n\t\t\ttext-align: right;\n\t\t\tflex-grow: 1;\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tword-break: break-all;\n\t\t\ttext-align: right;\n\t\t\tflex-grow: 1;\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-value);\n\t\t\t}\n\t\t"]))), Buttons: _utils_1.styled(Buttons)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\tflex-grow: 0;\n\t\t\tmargin-left: 1px;\n\t\t\tflex-shrink: 0;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-top: 1px;\n\t\t"], ["\n\t\t\tflex-grow: 0;\n\t\t\tmargin-left: 1px;\n\t\t\tflex-shrink: 0;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin-top: 1px;\n\t\t"]))), Button: _utils_1.styled(Button)(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: block;\n\t\t\twidth: 40px;\n\t\t\theight: 30rem;\n\t\t\tborder: 0;\n\t\t\tmargin-right: 1px;\n\t\t\tmargin-bottom: 1px;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\tcursor: pointer;\n\t\t\t&[data-action=\"\"]{\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tcursor: default;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-action)\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t\t}\n\t\t\t&:active {\n\t\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t\t}\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twidth: 40px;\n\t\t\theight: 30rem;\n\t\t\tborder: 0;\n\t\t\tmargin-right: 1px;\n\t\t\tmargin-bottom: 1px;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\tcursor: pointer;\n\t\t\t&[data-action=\"\"]{\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tcursor: default;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: attr(data-action)\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t\t}\n\t\t\t&:active {\n\t\t\t\tbackground: rgba(0, 0, 0, 1);\n\t\t\t}\n\t\t"]))) });
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ })

},[["./apps/calculator/content/index.tsx","runtime","app/vendors","app/components","app/utils","app/mixins"]]]);
//# sourceMappingURL=content.js.map