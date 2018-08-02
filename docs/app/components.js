(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/components"],{

/***/ "../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js?!./components/Cursor/index.styl":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/stylus-loader??ref--5-2!./components/Cursor/index.styl ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  cursor: none;\n}\n*:not(.get-cursor) {\n  cursor: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./components/ControlBar/index.tsx":
/*!*****************************************!*\
  !*** ./components/ControlBar/index.tsx ***!
  \*****************************************/
/*! exports provided: ControlBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBar", function() { return ControlBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time */ "./components/ControlBar/time.tsx");




var ControlBar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ControlBar, _super);
    function ControlBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlBar.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RightPanel, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledTime, null))));
    };
    return ControlBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var _a = __webpack_require__(/*! ./styles.ts */ "./components/ControlBar/styles.ts").default(ControlBar, {
    RightPanel: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("ControlBar_RightPanel"),
    Time: _time__WEBPACK_IMPORTED_MODULE_3__["default"],
}), StyledControlBar = _a.Self, RightPanel = _a.RightPanel, StyledTime = _a.Time;
/* harmony default export */ __webpack_exports__["default"] = (StyledControlBar);


/***/ }),

/***/ "./components/ControlBar/styles.ts":
/*!*****************************************!*\
  !*** ./components/ControlBar/styles.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (obj, _a) {
    var RightPanel = _a.RightPanel, Time = _a.Time, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["RightPanel", "Time"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Self: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(obj)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t"]))), RightPanel: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(RightPanel)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: auto;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 5rem;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: auto;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 5rem;\n\t\t"]))), Time: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Time)(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tfont-size: 12rem;\n\t\t\tfont-weight: 300;\n\t\t"], ["\n\t\t\tfont-size: 12rem;\n\t\t\tfont-weight: 300;\n\t\t"]))) });
});
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./components/ControlBar/time.tsx":
/*!****************************************!*\
  !*** ./components/ControlBar/time.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Time = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Time, _super);
    function Time() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delay = 200;
        return _this;
    }
    Time.prototype.componentWillMount = function () { this.interval = setInterval(this.tick.bind(this), this.delay); this.tick(); };
    Time.prototype.componentWillUnmount = function () { clearInterval(this.interval); };
    Time.prototype.tick = function () {
        this.setState({
            formattedTime: this.getFormatTime(),
        });
    };
    Time.prototype.getTime = function () {
        var dateTime = new Date(Date.now());
        return {
            hour: dateTime.getHours(),
            minutes: dateTime.getMinutes(),
            seconds: dateTime.getSeconds(),
        };
    };
    Time.prototype.getFormatTime = function () {
        var time = this.getTime();
        return ("00" + time.hour).slice(-2) + ":" + ("00" + time.minutes).slice(-2);
    };
    Time.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props), this.state.formattedTime));
    };
    return Time;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Time);


/***/ }),

/***/ "./components/Cursor/index.styl":
/*!**************************************!*\
  !*** ./components/Cursor/index.styl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/stylus-loader??ref--5-2!./index.styl */ "../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js?!./components/Cursor/index.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/Cursor/index.tsx":
/*!*************************************!*\
  !*** ./components/Cursor/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styl */ "./components/Cursor/index.styl");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_2__);



var Snap = __webpack_require__(/*! snapsvg */ "../node_modules/snapsvg/dist/snap.svg-min.js");
var cursors = __webpack_require__(/*! svg-inline-loader!@assets/images/cursors/cursors.svg */ "../node_modules/svg-inline-loader/index.js!./assets/images/cursors/cursors.svg");
var Cursor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Cursor, _super);
    function Cursor(props) {
        var _this = _super.call(this, props) || this;
        _this.checkCursor = _this.checkCursor.bind(_this);
        _this.handlerMouseMove = _this.handlerMouseMove.bind(_this);
        _this.handlerMouseOut = _this.handlerMouseOut.bind(_this);
        _this.handlerMouseDown = _this.handlerMouseDown.bind(_this);
        _this.handlerMouseUp = _this.handlerMouseUp.bind(_this);
        _this.handlerDragStart = _this.handlerDragStart.bind(_this);
        _this.handlerDragEnd = _this.handlerDragEnd.bind(_this);
        _this.handlerDrag = _this.handlerDrag.bind(_this);
        _this.cursorRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = cursors;
        _this.cursorsHTML = tempDiv.children[0];
        _this.snapCursor = Snap(_this.cursorsHTML);
        _this.state = {
            mouseX: null,
            mouseY: null,
            cursor: 'default',
            mouseState: {}
        };
        return _this;
    }
    Cursor.prototype.render = function () {
        var styles = {};
        if (this.state.mouseX != null) {
            styles.left = this.state.mouseX + 'px';
        }
        if (this.state.mouseY != null) {
            styles.top = this.state.mouseY + 'px';
        }
        var attrs = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { 'style': styles, 'data-cursor': this.state.cursor, 'data-state': this.getMouseState() });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: this.cursorRef }, attrs)));
    };
    Cursor.prototype.componentDidUpdate = function () {
        var newCursor = this.cursorRef.current.querySelector('#' + this.state.cursor);
        if (!newCursor)
            newCursor = this.cursorRef.current.querySelector('#default');
        var newCursorD = newCursor.getAttribute('d');
        this.snapCursor.select('#cursor').animate({
            d: newCursorD,
        }, 150, mina.easeinout);
        // cursor.setAttribute('d', newCursor.getAttribute('d'));
    };
    Cursor.prototype.componentDidMount = function () {
        this.cursorRef.current.appendChild(this.cursorsHTML);
        document.addEventListener('mouseover', this.checkCursor);
        document.addEventListener('mousedown', this.checkCursor);
        document.addEventListener('mouseup', this.checkCursor);
        document.addEventListener('mousemove', this.handlerMouseMove);
        window.addEventListener('drag', this.handlerMouseMove);
        document.addEventListener('mouseout', this.handlerMouseOut);
        window.addEventListener('mousedown', this.handlerMouseDown);
        window.addEventListener('mouseup', this.handlerMouseUp);
        window.addEventListener('dragend', this.handlerMouseUp);
        window.addEventListener('dragstart', this.handlerDragStart);
        window.addEventListener('dragend', this.handlerDragEnd);
        window.addEventListener('drag', this.handlerDrag);
    };
    Cursor.prototype.componentWillUnmount = function () {
        document.removeEventListener('mouseover', this.checkCursor);
        document.removeEventListener('mousedown', this.checkCursor);
        document.removeEventListener('mouseup', this.checkCursor);
        document.removeEventListener('mousemove', this.handlerMouseMove);
        window.removeEventListener('drag', this.handlerMouseMove);
        document.removeEventListener('mouseout', this.handlerMouseOut);
        window.removeEventListener('mousedown', this.handlerMouseDown);
        window.removeEventListener('mouseup', this.handlerMouseUp);
        window.removeEventListener('dragend', this.handlerMouseUp);
        window.removeEventListener('dragstart', this.handlerDragStart);
        window.removeEventListener('dragend', this.handlerDragEnd);
        window.removeEventListener('drag', this.handlerDrag);
    };
    Cursor.prototype.checkCursor = function (event) {
        var targets = event.path;
        var cursor = "";
        for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {
            var target = targets_1[_i];
            if (!target.computedStyleMap)
                continue;
            target.classList.add('get-cursor');
            var _cursor = target.computedStyleMap().get("cursor").value;
            _cursor = _cursor.replace(/^-.+?-/, '');
            target.classList.remove('get-cursor');
            switch (_cursor) {
                case 'none':
                case '':
                    continue;
                default:
                    cursor = _cursor;
            }
            break;
        }
        if (!cursor)
            cursor = "default";
        this.setState({
            cursor: cursor,
        });
    };
    Cursor.prototype.handlerMouseOut = function (event) {
        // event.target.classList.remove('no-cursor');
    };
    Cursor.prototype.handlerMouseMove = function (event) {
        this.setState({
            mouseX: event.clientX,
            mouseY: event.clientY,
        });
    };
    Cursor.prototype.handlerMouseDown = function (event) {
        event.preventDefault();
        this.setState({
            mouseState: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.mouseState, { active: true }),
        });
    };
    Cursor.prototype.handlerMouseUp = function () {
        this.setState({
            mouseState: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.mouseState, { active: false }),
        });
    };
    Cursor.prototype.handlerDragStart = function () {
        this.setState({
            mouseState: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.mouseState, { drag: true }),
        });
    };
    Cursor.prototype.handlerDragEnd = function () {
        this.setState({
            mouseState: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.mouseState, { drag: false }),
        });
    };
    Cursor.prototype.handlerDrag = function (event) {
    };
    Cursor.prototype.getMouseState = function () {
        var result = [];
        for (var key in this.state.mouseState) {
            if (this.state.mouseState[key]) {
                result.push(key);
            }
        }
        return result.join(" ");
    };
    return Cursor;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__(/*! ./style.ts */ "./components/Cursor/style.ts").default(Cursor));


/***/ }),

/***/ "./components/Cursor/style.ts":
/*!************************************!*\
  !*** ./components/Cursor/style.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StylesCursor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


function StylesCursor(Cursor) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Cursor)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\tposition: fixed;\n\t\tpointer-events: none;\n\t\tcolor: #20efa4;\n\t\tz-index: 1000;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 40rem;\n\t\t\theight: 40rem;\n\t\t\tcolor: #20efa4;\n\t\t\tfill: currentColor;\n\t\t\tstroke: currentColor;\n\t\t\tstroke-width: 0;\n\t\t\tz-index: 1;\n\t\t\tposition: absolute;\n\t\t\ttop: -20rem;\n\t\t\tleft: -20rem;\n\t\t\ttransition: color 0.3s;\n\t\t\ttransition-property: color, transform;\n\t\t\ttransform-origin: center center;\n\t\t\t#cursor {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t*:not(#cursor) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&[data-cursor=\"pointer\"] {\n\t\t\tsvg {\n\t\t\t\tcolor: #efe120;\n\t\t\t}\n\t\t}\n\t\t&[data-state*=\"active\"] {\n\t\t\tsvg {\n\t\t\t\ttransform: scale(0.8)\n\t\t\t}\n\t\t}\n\t"], ["\n\t\tposition: fixed;\n\t\tpointer-events: none;\n\t\tcolor: #20efa4;\n\t\tz-index: 1000;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 40rem;\n\t\t\theight: 40rem;\n\t\t\tcolor: #20efa4;\n\t\t\tfill: currentColor;\n\t\t\tstroke: currentColor;\n\t\t\tstroke-width: 0;\n\t\t\tz-index: 1;\n\t\t\tposition: absolute;\n\t\t\ttop: -20rem;\n\t\t\tleft: -20rem;\n\t\t\ttransition: color 0.3s;\n\t\t\ttransition-property: color, transform;\n\t\t\ttransform-origin: center center;\n\t\t\t#cursor {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t*:not(#cursor) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&[data-cursor=\"pointer\"] {\n\t\t\tsvg {\n\t\t\t\tcolor: #efe120;\n\t\t\t}\n\t\t}\n\t\t&[data-state*=\"active\"] {\n\t\t\tsvg {\n\t\t\t\ttransform: scale(0.8)\n\t\t\t}\n\t\t}\n\t"])));
}
var templateObject_1;


/***/ }),

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/*! exports provided: layoutRef, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutRef", function() { return layoutRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components//Cursor */ "./components/Cursor/index.tsx");
/* harmony import */ var _components_WindowsManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/WindowsManager */ "./components/WindowsManager/index.tsx");
/* harmony import */ var _components_ControlBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ControlBar */ "./components/ControlBar/index.tsx");
/* harmony import */ var _components_Taskbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Taskbar */ "./components/Taskbar/index.tsx");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @system */ "./system/index.ts");









var layoutRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
var Layout = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Layout, _super);
    function Layout(props) {
        var _this = _super.call(this, props) || this;
        _this.onResize = _this.onResize.bind(_this);
        _this.window = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.content = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        return _this;
    }
    Layout.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.className, ref: layoutRef },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Cursor__WEBPACK_IMPORTED_MODULE_4__["default"], null),
            !this.props.loading && this.renderContent()));
    };
    Layout.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.onResize);
    };
    Layout.prototype.componentDidUpdate = function () {
        this.onResize();
    };
    Layout.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
    };
    Layout.prototype.renderContent = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Container, { elementRef: this.window },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ContainerColumn, null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_ControlBar__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ContainerRow, { elementRef: this.content },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Taskbar__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, null)))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_WindowsManager__WEBPACK_IMPORTED_MODULE_5__["default"], { opened: [] })));
    };
    Layout.prototype.onResize = function () {
        this.props.setLayoutState({
            window: {
                width: this.window.current.offsetWidth,
                height: this.window.current.offsetHeight,
                x: this.window.current.offsetLeft,
                y: this.window.current.offsetTop,
            },
            content: {
                width: this.content.current.offsetWidth,
                height: this.content.current.offsetHeight,
                x: this.content.current.offsetLeft,
                y: this.content.current.offsetTop,
            },
        });
    };
    return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var _a = __webpack_require__(/*! ./styles.ts */ "./components/Layout/styles.ts").default(Layout, {
    Container: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Layout_Container"),
    ContainerColumn: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Layout_Column"),
    ContainerRow: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Layout_Row"),
    Content: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["div"])("Layout_Content")
}), StyledLayout = _a.Self, Container = _a.Container, Content = _a.Content, ContainerColumn = _a.ContainerColumn, ContainerRow = _a.ContainerRow;
var ConnectedStyledLayout = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function mapStateToProps(state, ownProps) {
    return {
        loading: !!state.System.loading,
    };
}, function mapDispatchToProps(dispatch) {
    return {
        setLayoutState: function (size) {
            dispatch(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ type: 'Layout.setLayoutState' }, size));
        }
    };
})(StyledLayout);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedStyledLayout);
_system__WEBPACK_IMPORTED_MODULE_8__["reducersManager"].addLocalReducer('Layout', function (state, action) {
    if (!state || !state.window) {
        state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { window: {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
            } });
    }
    if (!state || !state.content) {
        state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { content: {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
            } });
    }
    switch (action.type) {
        case 'Layout.setLayoutState':
            state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { window: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.window, action.window), content: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.content, action.content) });
            break;
    }
    return state;
});
_system__WEBPACK_IMPORTED_MODULE_8__["reducersManager"].addLocalReducer('Taskbar', _components_Taskbar__WEBPACK_IMPORTED_MODULE_7__["reducer"]);


/***/ }),

/***/ "./components/Layout/styles.ts":
/*!*************************************!*\
  !*** ./components/Layout/styles.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (obj, _a) {
    var Container = _a.Container, Content = _a.Content, ContainerColumn = _a.ContainerColumn, ContainerRow = _a.ContainerRow, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["Container", "Content", "ContainerColumn", "ContainerRow"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Self: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(obj)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"]))), Container: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Container)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"]))), Content: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Content)(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tflex-grow: 1;\n\t\t"]))), ContainerColumn: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(ContainerColumn)(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"]))), ContainerRow: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(ContainerRow)(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tflex-grow: 1;\n\t\t"]))) });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./components/ScrolledContent/index.tsx":
/*!**********************************************!*\
  !*** ./components/ScrolledContent/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");



var ScrolledContent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ScrolledContent, _super);
    function ScrolledContent(props) {
        var _this = _super.call(this, props) || this;
        _this.self = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.content = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.track = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.bar = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.onResize = _this.onResize.bind(_this);
        _this.state = {
            scrollArea: 0,
            contentHeight: 1,
            contentTop: 0,
            barHeight: 1,
            barTop: 0,
        };
        return _this;
    }
    ScrolledContent.prototype.render = function () {
        var attrs = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props);
        delete attrs.children;
        var barStyles = {
            height: ((this.state.barHeight * 100) + '%'),
            top: ((this.state.barTop * 100) + '%'),
        };
        var isVisible = !({ 0: true, 1: true }[this.state.barHeight]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: this.self }, attrs),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, { style: { top: -this.state.contentTop + 'px' }, elementRef: this.content, onWheel: this.handlerOnWheel.bind(this) }, this.props.children),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Track, { "style-isVisible": isVisible, elementRef: this.track },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Bar, { elementRef: this.bar, style: barStyles }))));
    };
    ScrolledContent.prototype.calcScrollState = function (addTop) {
        if (addTop === void 0) { addTop = 0; }
        var windowHeight = this.self.current.offsetHeight;
        var contentHeight = this.content.current.offsetHeight;
        var contentTop = this.contentTop + addTop;
        if (contentTop < 0)
            contentTop = 0;
        if (contentTop > contentHeight - windowHeight)
            contentTop = contentHeight - windowHeight;
        this.contentTop = contentTop;
        var barHeight = ((windowHeight / contentHeight) || 1);
        var barTop = ((contentTop / contentHeight) || 0);
        windowHeight = (windowHeight / contentHeight);
        return {
            scrollArea: contentHeight - windowHeight,
            contentHeight: contentHeight,
            contentTop: contentTop,
            barHeight: barHeight,
            barTop: barTop,
        };
    };
    ScrolledContent.prototype.setScrollState = function (state) {
        if (state.barTop + state.barHeight > 1) {
            state.barTop = 1 - state.barHeight;
        }
        if (state.barTop < 0)
            state.barTop = 0;
        this.setState(state);
    };
    ScrolledContent.prototype.scroll = function (value) {
        var state = this.calcScrollState(value);
        this.setScrollState(state);
    };
    ScrolledContent.prototype.handlerOnWheel = function (event) {
        this.scroll(event.deltaY);
    };
    ScrolledContent.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.onResize);
        this.contentTop = -(parseFloat(window.getComputedStyle(this.content.current).top) || 0);
        this.update();
    };
    ScrolledContent.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
    };
    ScrolledContent.prototype.componentDidUpdate = function () {
        this.update();
    };
    ScrolledContent.prototype.update = function () {
        this.setScrollState(this.calcScrollState());
    };
    ScrolledContent.prototype.onResize = function () {
        this.update();
    };
    return ScrolledContent;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
var _a = __webpack_require__(/*! ./styles.ts */ "./components/ScrolledContent/styles.ts").default(ScrolledContent, {
    Content: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("ScrolledContent_Content"),
    Track: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("ScrolledContent_Track"),
    Bar: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("ScrolledContent_Bar"),
}), StyledScrolledContent = _a.Self, Content = _a.Content, Track = _a.Track, Bar = _a.Bar;
/* harmony default export */ __webpack_exports__["default"] = (StyledScrolledContent);


/***/ }),

/***/ "./components/ScrolledContent/styles.ts":
/*!**********************************************!*\
  !*** ./components/ScrolledContent/styles.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (obj, _a) {
    var Content = _a.Content, Track = _a.Track, Bar = _a.Bar, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["Content", "Track", "Bar"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Self: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(obj)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"]))), Content: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Content)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\ttransition: top 0.3s;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\ttransition: top 0.3s;\n\t\t"]))), Track: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Track)(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\twidth: 5rem;\n\t\t\tdisplay: ", ";\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\twidth: 5rem;\n\t\t\tdisplay: ", ";\n\t\t"])), function (props) { return (props['style-isVisible'] ? 'block' : 'none'); }), Bar: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Bar)(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 10rem;\n\t\t\ttransition: top 0.3s;\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 10rem;\n\t\t\ttransition: top 0.3s;\n\t\t"]))) });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./components/Taskbar/index.tsx":
/*!**************************************!*\
  !*** ./components/Taskbar/index.tsx ***!
  \**************************************/
/*! exports provided: default, reducer, setListInState, getListFromState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setListInState", function() { return setListInState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFromState", function() { return getListFromState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_ScrolledContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ScrolledContent */ "./components/ScrolledContent/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");





var TaskBar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskBar, _super);
    function TaskBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskBar.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["attrs"])(this.props)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_ScrolledContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, this.props.apps.map(this.renderItem.bind(this))))));
    };
    TaskBar.prototype.handlerItemClick = function (app, event) {
        event.preventDefault();
        if (app.call)
            app.call();
    };
    TaskBar.prototype.renderItem = function (app) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Item, { States: app.states, typeShutcut: app.typeShutcut, onClick: this.handlerItemClick.bind(this, app), title: app.appInfo.name, key: app.id },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: app.appInfo.icon, alt: "" })));
    };
    return TaskBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var _a = __webpack_require__(/*! ./styles.ts */ "./components/Taskbar/styles.ts").default(TaskBar, {
    Content: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["div"])("TaskBar_Content"),
    Item: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["el"])("a", "TaskBar_Item", { href: "#" }),
}), StyledTaskBar = _a.Self, Content = _a.Content, Item = _a.Item;
var ConnectedStyledTaskBar = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function mapStateToProps(state, ownProps) {
    return {
        apps: state.Taskbar.apps,
    };
}, function mapDispatchToProps(dispatch) {
    return {};
})(StyledTaskBar);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedStyledTaskBar);
function reducer(state, action) {
    if (state === void 0) { state = { apps: [] }; }
    if (action.type.indexOf("Taskbar.") !== 0)
        return state;
    var type = action.type.replace("Taskbar.", "");
    switch (type) {
        case 'add':
            state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
            state.apps = state.apps.concat(action.list);
            break;
    }
    return state;
}
function setListInState(list, state) {
    if (!state)
        state = {};
    state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    if (!state.Taskbar)
        state.Taskbar = {};
    state.Taskbar = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.Taskbar);
    state.Taskbar.apps = [].concat(list);
    return state;
}
function getListFromState(state) {
    if (state && state.Taskbar && state.Taskbar.apps)
        return [].concat(state.Taskbar.apps);
    return [];
}


/***/ }),

/***/ "./components/Taskbar/styles.ts":
/*!**************************************!*\
  !*** ./components/Taskbar/styles.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (obj, _a) {
    var Content = _a.Content, Item = _a.Item, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["Content", "Item"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Self: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(obj)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\twidth: 50rem;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 1;\n\t\t\ttransition: left 0.3s;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 20rem 0;\n\t\t"], ["\n\t\t\twidth: 50rem;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 1;\n\t\t\ttransition: left 0.3s;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 20rem 0;\n\t\t"]))), Content: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Content)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\twidth: 50rem;\n\t\t\tbackground: rgba(70, 70, 70, 0.5);\n\t\t\tborder-radius: 0 5rem 5rem 0;\n\t\t\tmax-height: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 5rem 0;\n\t\t"], ["\n\t\t\twidth: 50rem;\n\t\t\tbackground: rgba(70, 70, 70, 0.5);\n\t\t\tborder-radius: 0 5rem 5rem 0;\n\t\t\tmax-height: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 5rem 0;\n\t\t"]))), Item: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Item)(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 30rem;\n\t\t\theight: 30rem;\n\t\t\tmargin: 5rem auto;\n\t\t\ttransition: transform 0.3s;\n\t\t\tposition: relative;\n\t\t\timg,\n\t\t\tsvg {\n\t\t\t\tmax-width: 80%;\n\t\t\t\tmax-height: 80%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(1.1)\n\t\t\t}\n\t\t\t", "\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 30rem;\n\t\t\theight: 30rem;\n\t\t\tmargin: 5rem auto;\n\t\t\ttransition: transform 0.3s;\n\t\t\tposition: relative;\n\t\t\timg,\n\t\t\tsvg {\n\t\t\t\tmax-width: 80%;\n\t\t\t\tmax-height: 80%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(1.1)\n\t\t\t}\n\t\t\t",
            "\n\t\t"])), function (props) {
            if (props['typeShutcut'] != 'window')
                return '';
            return "\n\t\t\t\t\t&:after {\n\t\t\t\t\t\tcontent: '';\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tright: 0rem;\n\t\t\t\t\t\tbottom: 0rem;\n\t\t\t\t\t\twidth: 5rem;\n\t\t\t\t\t\theight: 5rem;\n\t\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\t\tbackground: " + ((props['States'] && props['States'].indexOf('inFocus') != -1) ? '#5f5' : '#ff5') + ";\n\t\t\t\t\t}\n\t\t\t\t";
        }) });
});
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./components/Window/boundsManager.ts":
/*!********************************************!*\
  !*** ./components/Window/boundsManager.ts ***!
  \********************************************/
/*! exports provided: BoundsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundsManager", function() { return BoundsManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");


var BoundsManager = /** @class */ (function () {
    function BoundsManager(window) {
        this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _interfaces__WEBPACK_IMPORTED_MODULE_1__["sizeDefault"], _interfaces__WEBPACK_IMPORTED_MODULE_1__["minSizeDefault"], _interfaces__WEBPACK_IMPORTED_MODULE_1__["maxSizeDefault"], _interfaces__WEBPACK_IMPORTED_MODULE_1__["positionDefault"]);
        for (var key in this.state) {
            this.state[key] = window[key];
        }
    }
    BoundsManager.prototype.setBounds = function (bounds) {
        var lastBounds = this.getBounds();
        var newBounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, lastBounds, bounds);
        var changed = {
            x1: lastBounds.x1 != newBounds.x1,
            x2: lastBounds.x2 != newBounds.x2,
            y1: lastBounds.y1 != newBounds.y1,
            y2: lastBounds.y2 != newBounds.y2,
        };
        var maxSize = this.getMaxSize();
        var minSize = this.getMinSize();
        var sizeKeys = {
            'x': 'width',
            'y': 'height',
        };
        var postKeys = ['x', 'y'];
        postKeys.forEach(function (key) {
            var key1 = key + '1';
            var key2 = key + '2';
            var value1 = newBounds[key1];
            var value2 = newBounds[key2];
            var sizeKey = sizeKeys[key];
            var changed2 = changed[key2] || (changed[key2] == changed[key1]);
            var _minSize = minSize[sizeKey];
            var _maxSize = maxSize[sizeKey];
            if (_minSize != null && _minSize >= 0 && ((value2 - value1) < _minSize)) {
                if (changed2) {
                    newBounds[key2] = value1 + _minSize;
                }
                else {
                    newBounds[key1] = value2 - _minSize;
                }
            }
            if (_maxSize != null && _maxSize >= 0 && ((value2 - value1) > _maxSize)) {
                if (changed2) {
                    newBounds[key2] = value1 + _maxSize;
                }
                else {
                    newBounds[key1] = value2 - _maxSize;
                }
            }
            if (newBounds[key1] > newBounds[key2]) {
                if (changed2) {
                    newBounds[key2] = newBounds[key1];
                }
                else {
                    newBounds[key1] = newBounds[key2];
                }
            }
        });
        this.setState({
            x: newBounds.x1,
            y: newBounds.y1,
            width: newBounds.x2 - newBounds.x1,
            height: newBounds.y2 - newBounds.y1,
        });
    };
    BoundsManager.prototype.setState = function (state) {
        this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state, state);
    };
    BoundsManager.prototype.getState = function () {
        return this.state;
    };
    BoundsManager.prototype.getBounds = function () {
        return {
            x1: this.state.x,
            y1: this.state.y,
            x2: this.state.x + this.state.width,
            y2: this.state.y + this.state.height,
        };
    };
    BoundsManager.prototype.setSize = function (size) {
        var bounds = this.getBounds();
        if (size.width != null) {
            bounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bounds, { x2: bounds.x1 + size.width });
        }
        if (size.height != null) {
            bounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bounds, { y2: bounds.y1 + size.height });
        }
        this.setBounds(bounds);
    };
    BoundsManager.prototype.setPosition = function (position) {
        var bounds = this.getBounds();
        var size = this.getSize();
        if (position.x != null) {
            bounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bounds, { x1: position.x, x2: position.x + size.width });
        }
        if (position.y != null) {
            bounds = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bounds, { y1: position.y, y2: position.y + size.height });
        }
        this.setBounds(bounds);
    };
    BoundsManager.prototype.getMaxSize = function () {
        return {
            width: this.state.maxWidth,
            height: this.state.maxHeight,
        };
    };
    BoundsManager.prototype.getMinSize = function () {
        return {
            width: this.state.minWidth,
            height: this.state.minHeight,
        };
    };
    BoundsManager.prototype.getSize = function () {
        return {
            width: this.state.width,
            height: this.state.height,
        };
    };
    BoundsManager.prototype.getPosition = function () {
        return {
            x: this.state.x,
            y: this.state.y,
        };
    };
    return BoundsManager;
}());



/***/ }),

/***/ "./components/Window/index.tsx":
/*!*************************************!*\
  !*** ./components/Window/index.tsx ***!
  \*************************************/
/*! exports provided: default, windowStates, windowPressState, windowBorderTypes, defaultWindowConstructorProps, defaultWindowProps, isState, isNormal, isMaximized, isMinimized, isClosing, isVisible, isOpened, BoundsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/WindowsManager */ "./components/WindowsManager/index.tsx");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @system */ "./system/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowStates", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowPressState", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowBorderTypes", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWindowConstructorProps", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_2__["defaultWindowConstructorProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWindowProps", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_2__["defaultWindowProps"]; });

/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods */ "./components/Window/methods.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isState", function() { return _methods__WEBPACK_IMPORTED_MODULE_4__["isState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNormal", function() { return _methods__WEBPACK_IMPORTED_MODULE_4__["isNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMaximized", function() { return _methods__WEBPACK_IMPORTED_MODULE_4__["isMaximized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMinimized", function() { return _methods__WEBPACK_IMPORTED_MODULE_4__["isMinimized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isClosing", function() { return _methods__WEBPACK_IMPORTED_MODULE_4__["isClosing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _methods__WEBPACK_IMPORTED_MODULE_4__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOpened", function() { return _methods__WEBPACK_IMPORTED_MODULE_4__["isOpened"]; });

/* harmony import */ var _boundsManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boundsManager */ "./components/Window/boundsManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundsManager", function() { return _boundsManager__WEBPACK_IMPORTED_MODULE_5__["BoundsManager"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render */ "./components/Window/render.tsx");








var Window = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Window, _super);
    function Window(props) {
        var _this = _super.call(this, props) || this;
        _this.pressed = _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"].None;
        _this.handlerMouseMove = _this.handlerMouseMove.bind(_this);
        _this.handlerMouseUp = _this.handlerMouseUp.bind(_this);
        _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
        return _this;
    }
    Window.prototype.checkSizeValue = function (value) {
        if (typeof value == 'number')
            return value + 'px';
        return value;
    };
    Window.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.state === _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowStates"].New) {
            setTimeout(function () { return _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].show(_this.props.id); }, 10);
        }
        document.documentElement.addEventListener('click', this.handleGlobalClick);
        document.documentElement.addEventListener('mousemove', this.handlerMouseMove);
        document.documentElement.addEventListener('mouseup', this.handlerMouseUp);
    };
    Window.prototype.componentWillUnmount = function () {
        document.documentElement.removeEventListener('click', this.handleGlobalClick);
        document.documentElement.removeEventListener('mousemove', this.handlerMouseMove);
        document.documentElement.removeEventListener('mouseup', this.handlerMouseUp);
    };
    Window.prototype.handleGlobalClick = function (event) {
        if (!this.props.inFocus)
            return;
        var parent = event.target;
        do {
            if (parent == this.boxRef.current)
                return;
        } while ((parent = parent.parentElement) && parent instanceof Element);
        this.unfocus();
    };
    Window.prototype.handlerOnPress = function (event) {
        event.preventDefault();
        this.focus();
    };
    Window.prototype.handlerHeaderOnPress = function (event) {
        if (event.target != this.headerRef.current)
            return;
        event.preventDefault();
        this.pressed = _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"].Header;
        Object(_system__WEBPACK_IMPORTED_MODULE_3__["documentAddClass"])('window__press--window-header');
        this.lastMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
    };
    Window.prototype.handlerResizeBorderPress = function (direction, event) {
        event.preventDefault();
        this.pressed = _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"].Border;
        Object(_system__WEBPACK_IMPORTED_MODULE_3__["documentAddClass"])('window__press--window-header');
        this.lastMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
        this.currentBorderType = direction;
    };
    Window.prototype.handlerMouseUp = function () {
        this.pressed = _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"].None;
        Object(_system__WEBPACK_IMPORTED_MODULE_3__["documentRemoveClass"])('window__press--window-header');
        Object(_system__WEBPACK_IMPORTED_MODULE_3__["documentRemoveClass"])('window__press--window-header');
    };
    Window.prototype.handlerMouseMove = function (event) {
        if (this.pressed == _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"].None)
            return;
        var mouseMove = {
            x: event.clientX - this.lastMousePosition.x,
            y: event.clientY - this.lastMousePosition.y,
        };
        this.lastMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
        switch (this.pressed) {
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"].Header:
                this.onHeaderMove(mouseMove);
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowPressState"].Border:
                this.onBorderMove(this.lastMousePosition);
                break;
        }
    };
    Window.prototype.handlerButtonControlClick = function (type, event) {
        event.preventDefault();
        switch (type) {
            case 'close':
                this.close();
                break;
            case 'maximize':
                this.setMaximize(!this.props.isMaximized);
                break;
        }
    };
    Window.prototype.onHeaderMove = function (mouseMove) {
        this.addPosition(mouseMove);
    };
    Window.prototype.onBorderMove = function (mousePosition) {
        var xPosition = 0;
        var yPosition = 0;
        switch (this.currentBorderType) {
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].Left:
                xPosition = 1;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].Right:
                xPosition = 2;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].Top:
                yPosition = 1;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].Bottom:
                yPosition = 2;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].LeftTop:
                xPosition = 1;
                yPosition = 1;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].LeftBottom:
                xPosition = 1;
                yPosition = 2;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].RightTop:
                xPosition = 2;
                yPosition = 1;
                break;
            case _interfaces__WEBPACK_IMPORTED_MODULE_2__["windowBorderTypes"].RightBottom:
                xPosition = 2;
                yPosition = 2;
                break;
        }
        var bounds = {};
        if (xPosition) {
            bounds['x' + xPosition] = mousePosition.x;
        }
        if (yPosition) {
            bounds['y' + yPosition] = mousePosition.y;
        }
        this.setBounds(bounds);
    };
    Window.prototype.setBounds = function (bounds) {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].setBounds(this.props.id, bounds);
    };
    Window.prototype.getSize = function () {
        return {
            width: this.props.width,
            height: this.props.height,
        };
    };
    Window.prototype.setSize = function (size) {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].setSize(this.props.id, size);
    };
    Window.prototype.addSize = function (addSize) {
        var size = this.getSize();
        if (addSize.width)
            size.width += addSize.width;
        if (addSize.height)
            size.height += addSize.height;
        this.setSize(size);
    };
    Window.prototype.getPosition = function () {
        var position = {
            x: this.props.x || 0,
            y: this.props.y || 0,
        };
        return position;
    };
    Window.prototype.setPosition = function (position) {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].setPosition(this.props.id, {
            x: position.x,
            y: position.y,
        });
    };
    Window.prototype.addPosition = function (addPosition) {
        var position = this.getPosition();
        if (addPosition.x)
            position.x += addPosition.x;
        if (addPosition.y)
            position.y += addPosition.y;
        this.setPosition(position);
    };
    Window.prototype.setMaximize = function (isMaximize) {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].setMaximize(this.props.id, isMaximize);
    };
    Window.prototype.setMinimize = function (isMinimize) {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].setMinimize(this.props.id, isMinimize);
    };
    Window.prototype.close = function () {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].close(this.props.id);
    };
    Window.prototype.focus = function () {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].focus(this.props.id);
    };
    Window.prototype.unfocus = function () {
        _components_WindowsManager__WEBPACK_IMPORTED_MODULE_1__["actions"].unfocus(this.props.id);
    };
    return Window;
}(_render__WEBPACK_IMPORTED_MODULE_6__["default"]));
var StyledWindow = __webpack_require__(/*! ./styles */ "./components/Window/styles.ts").self(Window);
/* harmony default export */ __webpack_exports__["default"] = (StyledWindow);


/***/ }),

/***/ "./components/Window/interfaces.ts":
/*!*****************************************!*\
  !*** ./components/Window/interfaces.ts ***!
  \*****************************************/
/*! exports provided: windowStates, windowPressState, windowBorderTypes, defaultWindowConstructorProps, defaultWindowProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowStates", function() { return windowStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowPressState", function() { return windowPressState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowBorderTypes", function() { return windowBorderTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultWindowConstructorProps", function() { return defaultWindowConstructorProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultWindowProps", function() { return defaultWindowProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var windowStates;
(function (windowStates) {
    windowStates[windowStates["New"] = 1] = "New";
    windowStates[windowStates["Minimized"] = 2] = "Minimized";
    windowStates[windowStates["Normal"] = 4] = "Normal";
    windowStates[windowStates["Maximized"] = 8] = "Maximized";
    windowStates[windowStates["Closing"] = 16] = "Closing";
    windowStates[windowStates["isVisible"] = 12] = "isVisible";
    windowStates[windowStates["isOpened"] = 15] = "isOpened";
})(windowStates || (windowStates = {}));
var windowPressState;
(function (windowPressState) {
    windowPressState[windowPressState["None"] = 0] = "None";
    windowPressState[windowPressState["Header"] = 1] = "Header";
    windowPressState[windowPressState["Border"] = 2] = "Border";
})(windowPressState || (windowPressState = {}));
var windowBorderTypes;
(function (windowBorderTypes) {
    windowBorderTypes["Top"] = "top";
    windowBorderTypes["Left"] = "left";
    windowBorderTypes["Right"] = "right";
    windowBorderTypes["Bottom"] = "bottom";
    windowBorderTypes["LeftTop"] = "left-top";
    windowBorderTypes["LeftBottom"] = "left-bottom";
    windowBorderTypes["RightTop"] = "right-top";
    windowBorderTypes["RightBottom"] = "right-bottom";
})(windowBorderTypes || (windowBorderTypes = {}));
var defaultWindowConstructorProps = {
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    minWidth: 50,
    minHeight: 50,
    maxWidth: NaN,
    maxHeight: NaN,
    inFocus: false,
    isMinified: false,
    isMaximized: false,
    state: windowStates.New,
    toState: windowStates.Normal,
    resizable: true,
    appInfo: null,
    id: '',
};
var defaultWindowProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultWindowConstructorProps, { contentId: '', id: '', content: '', contentState: {} });


/***/ }),

/***/ "./components/Window/methods.ts":
/*!**************************************!*\
  !*** ./components/Window/methods.ts ***!
  \**************************************/
/*! exports provided: isState, isNormal, isMaximized, isMinimized, isClosing, isVisible, isOpened */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isState", function() { return isState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNormal", function() { return isNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMaximized", function() { return isMaximized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMinimized", function() { return isMinimized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClosing", function() { return isClosing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpened", function() { return isOpened; });
/* harmony import */ var _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Window/interfaces */ "./components/Window/interfaces.ts");

function isState(windowProps, needState) {
    var state = windowProps.state;
    // if( windowProps.state == windowStates.New ){
    // 	state = windowProps.toState;
    // }
    return !!(state & needState);
}
function isNormal(windowProps) {
    return isState(windowProps, _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_0__["windowStates"].Normal);
}
function isMaximized(windowProps) {
    return isState(windowProps, _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_0__["windowStates"].Maximized);
}
function isMinimized(windowProps) {
    return isState(windowProps, _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_0__["windowStates"].Minimized);
}
function isClosing(windowProps) {
    return isState(windowProps, _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_0__["windowStates"].Closing);
}
function isVisible(windowProps) {
    return isState(windowProps, _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_0__["windowStates"].isVisible) && !isMinimized(windowProps);
}
function isOpened(windowProps) {
    return isState(windowProps, _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_0__["windowStates"].isOpened) && !isClosing(windowProps);
}


/***/ }),

/***/ "./components/Window/render.tsx":
/*!**************************************!*\
  !*** ./components/Window/render.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./components/Window/index.tsx");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @system */ "./system/index.ts");






var WindowRender = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WindowRender, _super);
    function WindowRender(props) {
        var _this = _super.call(this, props) || this;
        _this.boxRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.headerRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.Box = _this.Box.bind(_this);
        _this.ResizeBorders = _this.ResizeBorders.bind(_this);
        _this.Header = _this.Header.bind(_this);
        _this.Body = _this.Body.bind(_this);
        return _this;
    }
    WindowRender.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.Box, null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.ResizeBorders, null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.Header, null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](this.Body, null)));
    };
    WindowRender.prototype.Box = function (props) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Box, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getBoxAttrs()), props.children));
    };
    WindowRender.prototype.ResizeBorders = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, this.props.resizable && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapToArray"])(_interfaces__WEBPACK_IMPORTED_MODULE_3__["windowBorderTypes"], this.renderResizeBorder.bind(this))));
    };
    WindowRender.prototype.Header = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Header, { elementRef: this.headerRef, onMouseDown: this.handlerHeaderOnPress.bind(this) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Buttons, null, this.getButtonControlList().map(this.renderButtonControl.bind(this))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, { windowWidth: this.props.width },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TitleText, null, this.props.appInfo.name))));
    };
    WindowRender.prototype.Body = function () {
        var Content = this.props.content;
        var contentState = this.props.contentState;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Body, null, this.renderContent(Content, { windowId: this.props.id, contentId: this.props.contentId, contentState: contentState })));
    };
    WindowRender.prototype.renderContent = function (Content, attrs) {
        if (typeof Content == 'string')
            return Content;
        if (typeof Content == 'function')
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, attrs));
        return '';
    };
    WindowRender.prototype.renderButtonControl = function (buttonType) {
        if (!buttonType)
            return '';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ButtonControl, { key: buttonType, "button-type": buttonType, onClick: this.handlerButtonControlClick.bind(this, buttonType) }));
    };
    WindowRender.prototype.renderResizeBorder = function (type, index) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResizeBorder, { key: index, onMouseDown: this.handlerResizeBorderPress.bind(this, type), Type: type }));
    };
    WindowRender.prototype.handlerOnPress = function (event) { };
    WindowRender.prototype.handlerHeaderOnPress = function (event) { };
    WindowRender.prototype.handlerResizeBorderPress = function (direction, event) { };
    WindowRender.prototype.handlerButtonControlClick = function (type, event) { };
    WindowRender.prototype.getValue = function (value) {
        return parseFloat(value) + 'px';
    };
    WindowRender.prototype.getButtonControlList = function () {
        return ['close', this.props.resizable && 'maximize', 'minimize'];
    };
    WindowRender.prototype.getBoxAttrs = function () {
        var style = {
            left: this.getValue(this.props.x),
            top: this.getValue(this.props.y),
            width: this.getValue(this.props.width),
            height: this.getValue(this.props.height),
        };
        return {
            documentRef: Object(_system__WEBPACK_IMPORTED_MODULE_5__["getDocumentRef"])(),
            style: style,
            elementRef: this.boxRef,
            isVisible: Object(_index__WEBPACK_IMPORTED_MODULE_4__["isVisible"])(this.props),
            inFocus: this.props.inFocus,
            className: this.props.className,
            onMouseDown: this.handlerOnPress.bind(this),
        };
    };
    return WindowRender;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (WindowRender);
var _a = __webpack_require__(/*! ./styles */ "./components/Window/styles.ts").children({
    Box: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("Window_Box"),
    Header: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("Window_Header"),
    Title: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("Window_Title"),
    TitleText: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("Window_TitleText"),
    Body: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("Window_Body"),
    Buttons: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("Window_Buttons"),
    ButtonControl: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["el"])("button", "Window_ButtonControl"),
    ResizeBorder: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["div"])("Window_ResizeBorder"),
}), Box = _a.Box, Header = _a.Header, Body = _a.Body, Buttons = _a.Buttons, ButtonControl = _a.ButtonControl, Title = _a.Title, TitleText = _a.TitleText, ResizeBorder = _a.ResizeBorder;


/***/ }),

/***/ "./components/Window/styles.ts":
/*!*************************************!*\
  !*** ./components/Window/styles.ts ***!
  \*************************************/
/*! exports provided: self, children */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


function self(Self) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Self)(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\tposition: fixed;\n\t\twidth: 400rem;\n\t\theight: 400rem;\n\t\tbackground: rgba(70, 70, 70, 0.99);\n\t"], ["\n\t\tposition: fixed;\n\t\twidth: 400rem;\n\t\theight: 400rem;\n\t\tbackground: rgba(70, 70, 70, 0.99);\n\t"])));
}
function children(_a) {
    var Box = _a.Box, Header = _a.Header, Body = _a.Body, Buttons = _a.Buttons, ButtonControl = _a.ButtonControl, ResizeBorder = _a.ResizeBorder, Title = _a.Title, TitleText = _a.TitleText, children = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["Box", "Header", "Body", "Buttons", "ButtonControl", "ResizeBorder", "Title", "TitleText"]);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, children, { Box: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Box)(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\ttransform: scale(", ");\n\t\t\topacity: ", ";\n\t\t\tbox-shadow: ", ";\n\t\t\ttop: 100rem;\n\t\t\tleft: 100rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.3s, opacity 0.3s/*, top 0.05s, left 0.05s, height 0.05s, width 0.05s*/;\n\t\t"], ["\n\t\t\ttransform: scale(", ");\n\t\t\topacity: ", ";\n\t\t\tbox-shadow: ", ";\n\t\t\ttop: 100rem;\n\t\t\tleft: 100rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.3s, opacity 0.3s/*, top 0.05s, left 0.05s, height 0.05s, width 0.05s*/;\n\t\t"])), function (props) { return props['isVisible'] ? '1' : '0'; }, boxOpacity, function (props) { return props['inFocus'] ? '0 0 30rem rgba(0, 0, 0, 0.5)' : '0 0 10rem rgba(0, 0, 0, 0.1)'; }), Header: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Header)(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\t&:active {\n\t\t\t\tcursor: grabbing;\n\t\t\t}\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\t&:active {\n\t\t\t\tcursor: grabbing;\n\t\t\t}\n\t\t"]))), Body: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Body)(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"]))), Title: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Title)(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 10rem;\n\t\t\tfont-weight: 300;\n\t\t\talign-items: center;\n\t\t\tjustify-content: stretch;\n\t\t\ttext-align: ", ";\n\t\t\tpadding: 0 ", " 0 45rem;\n\t\t\tpointer-events: none;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 10rem;\n\t\t\tfont-weight: 300;\n\t\t\talign-items: center;\n\t\t\tjustify-content: stretch;\n\t\t\ttext-align: ", ";\n\t\t\tpadding: 0 ", " 0 45rem;\n\t\t\tpointer-events: none;\n\t\t"])), function (props) { return props['windowWidth'] > 200 ? 'center' : 'left'; }, function (props) { return props['windowWidth'] > 200 ? '45rem' : '10rem'; }), TitleText: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(TitleText)(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\twidth: 100%;\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\twidth: 100%;\n\t\t"]))), Buttons: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(Buttons)(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 6rem;\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 6rem;\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t"]))), ButtonControl: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(ButtonControl)(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tdisplay: block;\n\t\t\twidth: 8rem;\n\t\t\theight: 8rem;\n\t\t\tpadding: 0;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\tcursor: pointer;\n\t\t\tmargin-right: 4rem;\n\t\t\t", "\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twidth: 8rem;\n\t\t\theight: 8rem;\n\t\t\tpadding: 0;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\tcursor: pointer;\n\t\t\tmargin-right: 4rem;\n\t\t\t", "\n\t\t"])), buttonStyles), ResizeBorder: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styled"])(ResizeBorder)(templateObject_9 || (templateObject_9 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n\t\t\tposition: absolute;\n\t\t\tfont-size: 4rem;\n\t\t\tz-index: 2;\n\t\t\t/* background: red; */\n\t\t\t", "\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\tfont-size: 4rem;\n\t\t\tz-index: 2;\n\t\t\t/* background: red; */\n\t\t\t", "\n\t\t"])), ResizeBorderStyle) });
}
function buttonStyles(props) {
    var color = '';
    var colorHover = '';
    switch (props['button-type']) {
        case 'close':
            color = '#f77';
            colorHover = '#f55';
            break;
        case 'minimize':
            color = '#7f7';
            colorHover = '#5f5';
            break;
        case 'maximize':
            color = '#ff7';
            colorHover = '#ff5';
            break;
    }
    return "\n\t\tbackground: " + color + ";\n\t\t&:hover {\n\t\t\tbackground: " + colorHover + ";\n\t\t}\n\t";
}
function boxOpacity(props) {
    if (props['isVisible']) {
        if (props['inFocus']) {
            return '1';
        }
        return '0.8';
    }
    return '0';
}
function ResizeBorderStyle(props) {
    var result = '';
    switch (props['Type']) {
        case 'top':
            result += "\n\t\t\t\ttop: -0.5em;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\theight: 1em;\n\t\t\t\tcursor: ns-resize !important;\n\t\t\t";
            break;
        case 'bottom':
            result += "\n\t\t\t\tbottom: -0.5em;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\theight: 1em;\n\t\t\t\tcursor: ns-resize !important;\n\t\t\t";
            break;
        case 'left':
            result += "\n\t\t\t\tleft: -0.5em;\n\t\t\t\ttop: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\twidth: 1em;\n\t\t\t\tcursor: ew-resize !important;\n\t\t\t";
            break;
        case 'right':
            result += "\n\t\t\t\tright: -0.5em;\n\t\t\t\ttop: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\twidth: 1em;\n\t\t\t\tcursor: ew-resize !important;\n\t\t\t";
            break;
        case 'left-top':
            result += "\n\t\t\t\ttop: -0.5em;\n\t\t\t\tleft: -0.5em;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;\n\t\t\t\tcursor: nwse-resize !important;\n\t\t\t";
            break;
        case 'right-bottom':
            result += "\n\t\t\t\tbottom: -0.5em;\n\t\t\t\tright: -0.5em;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;\n\t\t\t\tcursor: nwse-resize !important;\n\t\t\t";
            break;
        case 'right-top':
            result += "\n\t\t\t\ttop: -0.5em;\n\t\t\t\tright: -0.5em;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;\n\t\t\t\tcursor: nesw-resize !important;\n\t\t\t";
            break;
        case 'left-bottom':
            result += "\n\t\t\t\tbottom: -0.5em;\n\t\t\t\tleft: -0.5em;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;\n\t\t\t\tcursor: nesw-resize !important;\n\t\t\t";
            break;
    }
    if (props['Type'].indexOf('-') != -1) {
        result += "\n\t\t\tz-index: 3;\n\t\t\t/* background: green; */\n\t\t";
    }
    return result;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./components/WindowContent/index.tsx":
/*!********************************************!*\
  !*** ./components/WindowContent/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");


var WindowContent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WindowContent, _super);
    function WindowContent(props) {
        var _this = _super.call(this, props, "Content:" + props.contentId) || this;
        _this.componentId = '';
        _this.id = "Content:" + _this.props.contentId;
        _this.windowId = _this.props.windowId;
        return _this;
    }
    return WindowContent;
}(_utils__WEBPACK_IMPORTED_MODULE_1__["AliveReactComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (WindowContent);


/***/ }),

/***/ "./components/WindowsManager/actions.ts":
/*!**********************************************!*\
  !*** ./components/WindowsManager/actions.ts ***!
  \**********************************************/
/*! exports provided: createAction, getActionName, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionName", function() { return getActionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _system_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @system/index */ "./system/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods */ "./components/WindowsManager/methods.ts");




var _createAction = _utils__WEBPACK_IMPORTED_MODULE_2__["createAction"].bind({}, "WindowsManager");

function getActionName(name) {
    return _createAction(name).type;
}
var actions = {
    _load: function () {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("load"));
        actions.changed();
    },
    open: function (params) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("open", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params)));
        actions.changed();
    },
    focus: function (windowId) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("focus", { windowId: windowId }));
        actions.changed();
    },
    unfocus: function (windowId) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("unfocus", { windowId: windowId }));
        actions.changed();
    },
    setPosition: function (windowId, position) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("setPosition", { windowId: windowId, position: position }));
    },
    show: function (windowId) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("show", { windowId: windowId }));
        actions.changed();
    },
    hide: function (windowId) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("hide", { windowId: windowId }));
        actions.changed();
    },
    close: function (windowId) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("closing", { windowId: windowId }));
        actions.hide(windowId);
        setTimeout(function () {
            _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("close", { windowId: windowId }));
        }, 300);
        actions.changed();
    },
    resize: function (windowId, size) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("setSize", { windowId: windowId, size: size }));
    },
    changed: function () {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("changed", { list: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["getList"])() }));
    },
    setBounds: function (windowId, bounds) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("setBounds", { windowId: windowId, bounds: bounds }));
    },
    setSize: function (windowId, size) {
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("setSize", { windowId: windowId, size: size }));
    },
    setMaximize: function (windowId, isMaximize) {
        if (isMaximize === void 0) { isMaximize = true; }
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("setMaximize", { windowId: windowId, isMaximize: isMaximize }));
    },
    setMinimize: function (windowId, isMinimize) {
        if (isMinimize === void 0) { isMinimize = true; }
        _system_index__WEBPACK_IMPORTED_MODULE_1__["store"].dispatch(_createAction("setMinimize", { windowId: windowId, isMinimize: isMinimize }));
    }
};


/***/ }),

/***/ "./components/WindowsManager/index.tsx":
/*!*********************************************!*\
  !*** ./components/WindowsManager/index.tsx ***!
  \*********************************************/
/*! exports provided: actions, getActionName, reducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./components/WindowsManager/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["actions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActionName", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["getActionName"]; });

/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Window */ "./components/Window/index.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./components/WindowsManager/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]; });










var WindowsManager = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WindowsManager, _super);
    function WindowsManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsManager.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, this.props.opened.map(this.renderWindow.bind(this))));
    };
    WindowsManager.prototype.renderWindow = function (window) {
        var props = this.getWindowProps(window);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Window__WEBPACK_IMPORTED_MODULE_5__["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)));
    };
    WindowsManager.prototype.componentDidMount = function () {
        _actions__WEBPACK_IMPORTED_MODULE_4__["actions"]._load();
    };
    WindowsManager.prototype.getWindowProps = function (window) {
        var props = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, { key: window.id }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getWindowContent"])(window));
        return props;
    };
    return WindowsManager;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var ConnectedWindowsManager = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function mapStateToProps(state, ownProps) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.WindowsManager);
}, function mapDispatchToProps(dispatch) {
    return {};
})(WindowsManager);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedWindowsManager);


/***/ }),

/***/ "./components/WindowsManager/methods.ts":
/*!**********************************************!*\
  !*** ./components/WindowsManager/methods.ts ***!
  \**********************************************/
/*! exports provided: windowFocus, windowMap, windowCalcState, getList, constructorOptions, getWindowMaximizedSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowFocus", function() { return windowFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowMap", function() { return windowMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowCalcState", function() { return windowCalcState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructorOptions", function() { return constructorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowMaximizedSize", function() { return getWindowMaximizedSize; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _system_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @system/window */ "./system/window.ts");
/* harmony import */ var _components_Window_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Window/methods */ "./components/Window/methods.ts");
/* harmony import */ var _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Window/interfaces */ "./components/Window/interfaces.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");
/* harmony import */ var _system_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @system/index */ "./system/index.ts");







function windowFocus(list, windowId, setFocus) {
    if (setFocus === void 0) { setFocus = true; }
    var focusWindow;
    list = list.filter(function (window) {
        if (setFocus && window.id === windowId) {
            focusWindow = window;
            window.inFocus = setFocus;
            return false;
        }
        window.inFocus = false;
        return true;
    });
    if (focusWindow)
        list.push(focusWindow);
    return list;
}
function windowMap(list, windowId, handler) {
    return list.map(function (window) {
        if (window.id != windowId)
            return window;
        return handler(window);
    });
}
var isPercent = /[0-9.]+\%/;
function parsePercent(val) {
    return (parseFloat(val) || 0) / 100;
}
function _windowCalcState(keyPosition, keySize, windowProps, contentProps) {
    var result = {};
    var windowSize = windowCalcStateSize(keySize, windowProps, contentProps);
    var windowPosition = windowProps[keyPosition];
    var contentSize = contentProps[keySize];
    switch (windowPosition) {
        case 'center':
        case 'middle':
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeX"].center:
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeY"].center:
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeX"].middle:
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeY"].middle:
            windowPosition = '50%';
            break;
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeX"].left:
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeY"].top:
            windowPosition = '0%';
            break;
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeX"].right:
        case _interfaces__WEBPACK_IMPORTED_MODULE_5__["IPositionRelativeY"].bottom:
            windowPosition = '100%';
            break;
    }
    if (isPercent.test(windowPosition) || windowPosition instanceof _interfaces__WEBPACK_IMPORTED_MODULE_5__["Percent"]) {
        windowPosition = parsePercent(windowPosition.toString()) * (contentSize - windowSize) || 0;
    }
    else {
        windowPosition = parseFloat(windowPosition) || 0;
    }
    windowPosition += contentProps[keyPosition];
    result[keySize] = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["round"])(windowSize, 3);
    result[keyPosition] = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["round"])(windowPosition, 3);
    return result;
}
function windowCalcStateSize(keySize, windowProps, contentProps) {
    if (isPercent.test(windowProps[keySize])) {
        return parsePercent(windowProps[keySize]) * contentProps[keySize];
    }
    return parseFloat(windowProps[keySize]) || 0;
}
function windowCalcState(windowProps) {
    var contentState = Object(_system_window__WEBPACK_IMPORTED_MODULE_1__["getContentState"])();
    var result = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    };
    result = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, result, _windowCalcState('x', 'width', windowProps, contentState), _windowCalcState('y', 'height', windowProps, contentState));
    return result;
}
function getList() {
    return _system_index__WEBPACK_IMPORTED_MODULE_6__["store"].getState().WindowsManager.opened.filter(function (window) { return Object(_components_Window_methods__WEBPACK_IMPORTED_MODULE_2__["isOpened"])(window); });
}
function constructorOptions(options) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _components_Window_interfaces__WEBPACK_IMPORTED_MODULE_3__["defaultWindowConstructorProps"], { id: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["uid"])() }, options, windowCalcState(options));
}
function getWindowMaximizedSize() {
    var contentState = Object(_system_window__WEBPACK_IMPORTED_MODULE_1__["getContentState"])();
    return {
        width: contentState.width,
        height: contentState.height,
    };
}


/***/ }),

/***/ "./components/WindowsManager/reducer.ts":
/*!**********************************************!*\
  !*** ./components/WindowsManager/reducer.ts ***!
  \**********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _reducerMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducerMethods */ "./components/WindowsManager/reducerMethods.ts");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @system */ "./system/index.ts");



function reducer(state, action) {
    if (state === void 0) { state = {
        opened: []
    }; }
    var type = "";
    if (!(type = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkAction"])("WindowsManager", action)))
        return state;
    var reducer = new _reducerMethods__WEBPACK_IMPORTED_MODULE_1__["ReducerMethods"](state, action);
    reducer.call(type, state, action);
    return reducer.getState();
}
_system__WEBPACK_IMPORTED_MODULE_2__["reducersManager"].addLocalReducer('WindowsManager', reducer);


/***/ }),

/***/ "./components/WindowsManager/reducerMethods.ts":
/*!*****************************************************!*\
  !*** ./components/WindowsManager/reducerMethods.ts ***!
  \*****************************************************/
/*! exports provided: ReducerMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerMethods", function() { return ReducerMethods; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Window */ "./components/Window/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods */ "./components/WindowsManager/methods.ts");





var ReducerMethods = /** @class */ (function () {
    function ReducerMethods(state, action) {
        this.state = {};
        this.action = {};
        this.state = state;
        this.action = action;
    }
    ReducerMethods.prototype.call = function (method, state, action) {
        if (state === void 0) { state = {}; }
        if (!(typeof this[method] == 'function'))
            return;
        this[method]();
    };
    ReducerMethods.prototype.getState = function () {
        return this.state;
    };
    ReducerMethods.prototype.setState = function (obj) {
        this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state, obj);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["stateSave"])("WindowsManager", this.state);
    };
    ReducerMethods.prototype.open = function () {
        var windowProps = Object(_methods__WEBPACK_IMPORTED_MODULE_3__["constructorOptions"])(this.action.options);
        var newWindow = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _components_Window__WEBPACK_IMPORTED_MODULE_1__["defaultWindowProps"], windowProps, { content: this.action.content });
        console.log('newWindow', newWindow);
        this.setState({
            opened: this.state.opened.concat(newWindow)
        });
        this.action.windowId = newWindow.id;
        this.focus();
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(this.action.callback)) {
            this.action.callback(this.action.id);
        }
    };
    ReducerMethods.prototype.load = function () {
        this.setState(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["stateLoad"])("WindowsManager", {
            opened: []
        }));
    };
    ReducerMethods.prototype.focus = function () {
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowFocus"])(this.state.opened, this.action.windowId),
        });
    };
    ReducerMethods.prototype.unfocus = function () {
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowFocus"])(this.state.opened, this.action.windowId, false),
        });
    };
    ReducerMethods.prototype.show = function () {
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, { state: window.toState || _components_Window__WEBPACK_IMPORTED_MODULE_1__["windowStates"].Normal });
            })
        });
    };
    ReducerMethods.prototype.hide = function () {
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, { state: window.state | _components_Window__WEBPACK_IMPORTED_MODULE_1__["windowStates"].Minimized });
            })
        });
    };
    ReducerMethods.prototype.close = function () {
        var _this = this;
        this.setState({
            opened: this.state.opened.filter(function (window) { return window.id !== _this.action.windowId; })
        });
    };
    ReducerMethods.prototype.closing = function () {
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                window = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window);
                window.state = window.state | _components_Window__WEBPACK_IMPORTED_MODULE_1__["windowStates"].Closing;
                return window;
            })
        });
    };
    ReducerMethods.prototype.setPosition = function () {
        var _this = this;
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                var windowBoundsManager = new _components_Window__WEBPACK_IMPORTED_MODULE_1__["BoundsManager"](window);
                windowBoundsManager.setPosition(_this.action.position);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, windowBoundsManager.getState());
            })
        });
    };
    ReducerMethods.prototype.setSize = function () {
        var _this = this;
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                var windowBoundsManager = new _components_Window__WEBPACK_IMPORTED_MODULE_1__["BoundsManager"](window);
                windowBoundsManager.setSize(_this.action.size);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, _this.action.size);
            })
        });
    };
    ReducerMethods.prototype.setBounds = function () {
        var _this = this;
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                var windowBoundsManager = new _components_Window__WEBPACK_IMPORTED_MODULE_1__["BoundsManager"](window);
                windowBoundsManager.setBounds(_this.action.bounds);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, windowBoundsManager.getState());
            })
        });
    };
    ReducerMethods.prototype.setMaximize = function () {
        var _this = this;
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, { isMaximize: _this.action.isMaximize });
            })
        });
    };
    ReducerMethods.prototype.setMinimize = function () {
        var _this = this;
        this.setState({
            opened: Object(_methods__WEBPACK_IMPORTED_MODULE_3__["windowMap"])(this.state.opened, this.action.windowId, function (window) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, window, { isMinimize: _this.action.isMinimize });
            })
        });
    };
    return ReducerMethods;
}());



/***/ })

}]);
//# sourceMappingURL=components.js.map