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
exports.push([module.i, "html {\n  cursor: none;\n}\n*:not(.get-cursor) {\n  cursor: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./components/ControlBar/index.tsx":
/*!*****************************************!*\
  !*** ./components/ControlBar/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var time_1 = __webpack_require__(/*! ./time */ "./components/ControlBar/time.tsx");
var ControlBar = /** @class */ (function (_super) {
    tslib_1.__extends(ControlBar, _super);
    function ControlBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlBar.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({}, this.props),
            React.createElement(RightPanel, null,
                React.createElement(StyledTime, null))));
    };
    return ControlBar;
}(React.Component));
exports.ControlBar = ControlBar;
var _a = __webpack_require__(/*! ./styles.ts */ "./components/ControlBar/styles.ts")(ControlBar, {
    RightPanel: utils_1.div("ControlBar_RightPanel"),
    Time: time_1.default,
}), StyledControlBar = _a.Self, RightPanel = _a.RightPanel, StyledTime = _a.Time;
exports.default = StyledControlBar;


/***/ }),

/***/ "./components/ControlBar/styles.ts":
/*!*****************************************!*\
  !*** ./components/ControlBar/styles.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var RightPanel = _a.RightPanel, Time = _a.Time, children = tslib_1.__rest(_a, ["RightPanel", "Time"]);
    return tslib_1.__assign({}, children, { Self: utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t"]))), RightPanel: utils_1.styled(RightPanel)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: auto;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 5rem;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: auto;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 5rem;\n\t\t"]))), Time: utils_1.styled(Time)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tfont-size: 12rem;\n\t\t\tfont-weight: 300;\n\t\t"], ["\n\t\t\tfont-size: 12rem;\n\t\t\tfont-weight: 300;\n\t\t"]))) });
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./components/ControlBar/time.tsx":
/*!****************************************!*\
  !*** ./components/ControlBar/time.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var Time = /** @class */ (function (_super) {
    tslib_1.__extends(Time, _super);
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
        return (React.createElement("div", tslib_1.__assign({}, this.props), this.state.formattedTime));
    };
    return Time;
}(React.Component));
exports.default = Time;


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
__webpack_require__(/*! ./index.styl */ "./components/Cursor/index.styl");
var Cursor = /** @class */ (function (_super) {
    tslib_1.__extends(Cursor, _super);
    function Cursor(props) {
        var _this = _super.call(this, props) || this;
        _this.handlerMouseMove = _this.handlerMouseMove.bind(_this);
        _this.handlerMouseOver = _this.handlerMouseOver.bind(_this);
        _this.handlerMouseOut = _this.handlerMouseOut.bind(_this);
        _this.handlerMouseDown = _this.handlerMouseDown.bind(_this);
        _this.handlerMouseUp = _this.handlerMouseUp.bind(_this);
        _this.handlerDragStart = _this.handlerDragStart.bind(_this);
        _this.handlerDragEnd = _this.handlerDragEnd.bind(_this);
        _this.handlerDrag = _this.handlerDrag.bind(_this);
        _this.state = {
            mouseX: -100,
            mouseY: -100,
            cursor: 'default',
            mouseState: {}
        };
        return _this;
    }
    Cursor.prototype.render = function () {
        var attrs = tslib_1.__assign({}, this.props, { 'style': { left: this.state.mouseX + 'px', top: this.state.mouseY + 'px' }, 'data-cursor': this.state.cursor, 'data-state': this.getMouseState() });
        return (React.createElement("div", tslib_1.__assign({}, attrs),
            React.createElement("svg", { version: "1.1", x: "0px", y: "0px", viewBox: "-50 -50 563 563" },
                React.createElement("path", { d: "M359.55,344.47,18.22,3.13A10.67,10.67,0,0,0,0,10.69V501.35a10.66,10.66,0,0,0,18.47,7.25L154,362.69H352a10.67,10.67,0,0,0,7.55-18.22Z" }))));
    };
    Cursor.prototype.componentDidMount = function () {
        document.addEventListener('mousemove', this.handlerMouseMove);
        window.addEventListener('drag', this.handlerMouseMove);
        document.addEventListener('mouseover', this.handlerMouseOver);
        document.addEventListener('mouseout', this.handlerMouseOut);
        window.addEventListener('mousedown', this.handlerMouseDown);
        window.addEventListener('mouseup', this.handlerMouseUp);
        window.addEventListener('dragend', this.handlerMouseUp);
        window.addEventListener('dragstart', this.handlerDragStart);
        window.addEventListener('dragend', this.handlerDragEnd);
        window.addEventListener('drag', this.handlerDrag);
    };
    Cursor.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.handlerMouseMove);
        window.removeEventListener('drag', this.handlerMouseMove);
        document.removeEventListener('mouseover', this.handlerMouseOver);
        document.removeEventListener('mouseout', this.handlerMouseOut);
        window.removeEventListener('mousedown', this.handlerMouseDown);
        window.removeEventListener('mouseup', this.handlerMouseUp);
        window.removeEventListener('dragend', this.handlerMouseUp);
        window.removeEventListener('dragstart', this.handlerDragStart);
        window.removeEventListener('dragend', this.handlerDragEnd);
        window.removeEventListener('drag', this.handlerDrag);
    };
    Cursor.prototype.handlerMouseOver = function (event) {
        var targets = event.path;
        var cursor = "";
        for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {
            var target = targets_1[_i];
            if (!target.computedStyleMap)
                continue;
            target.classList.add('get-cursor');
            var _cursor = target.computedStyleMap().get("cursor").value;
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
            mouseState: tslib_1.__assign({}, this.state.mouseState, { active: true }),
        });
    };
    Cursor.prototype.handlerMouseUp = function () {
        this.setState({
            mouseState: tslib_1.__assign({}, this.state.mouseState, { active: false }),
        });
    };
    Cursor.prototype.handlerDragStart = function () {
        this.setState({
            mouseState: tslib_1.__assign({}, this.state.mouseState, { drag: true }),
        });
    };
    Cursor.prototype.handlerDragEnd = function () {
        this.setState({
            mouseState: tslib_1.__assign({}, this.state.mouseState, { drag: false }),
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
}(React.Component));
exports.default = __webpack_require__(/*! ./style.ts */ "./components/Cursor/style.ts")(Cursor);


/***/ }),

/***/ "./components/Cursor/style.ts":
/*!************************************!*\
  !*** ./components/Cursor/style.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
module.exports = function StylesCursor(Cursor) {
    return utils_1.styled(Cursor)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\tposition: fixed;\n\t\tpointer-events: none;\n\t\tcolor: #20efa4;\n\t\ttransition: color 0.3s;\n\t\tz-index: 1000;\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder: 2px solid rgba(255,255,255, 0.5);\n\t\t\tanimation: pulse 1s infinite;\n\t\t\tborder-radius: 50%;\n\t\t\ttransition: all 0.3s;\n\t\t\tvisibility: hidden;\n\t\t\topacity: 0;\n\t\t\t@keyframes pulse {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\ttransform: scale(0.8)\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 20px;\n\t\t\tcolor: #20efa4;\n\t\t\tfill: currentColor;\n\t\t\tstroke: currentColor;\n\t\t\tstroke-width: 50;\n\t\t\tz-index: 1;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\ttransform-origin: top left;\n\t\t}\n\t\t&[data-cursor=\"pointer\"] {\n\t\t\t&,\n\t\t\tsvg {\n\t\t\t\tcolor: #efe120;\n\t\t\t}\n\t\t\t/* &:before {\n\t\t\t\tvisibility: visible;\n\t\t\t\topacity: 1;\n\t\t\t\twidth: 10px;\n\t\t\t\theight: 10px;\n\t\t\t\tmargin: -5px 0 0 -5px;\n\t\t\t} */\n\t\t\t/* svg {\n\t\t\t\tfill: transparent;\n\t\t\t\tstroke-dasharray: 100;\n\t\t\t} */\n\t\t}\n\t\t&[data-state*=\"active\"] {\n\t\t\tsvg {\n\t\t\t\ttransform: scale(0.8)\n\t\t\t}\n\t\t}\n\t"], ["\n\t\tposition: fixed;\n\t\tpointer-events: none;\n\t\tcolor: #20efa4;\n\t\ttransition: color 0.3s;\n\t\tz-index: 1000;\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder: 2px solid rgba(255,255,255, 0.5);\n\t\t\tanimation: pulse 1s infinite;\n\t\t\tborder-radius: 50%;\n\t\t\ttransition: all 0.3s;\n\t\t\tvisibility: hidden;\n\t\t\topacity: 0;\n\t\t\t@keyframes pulse {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\ttransform: scale(0.8)\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 20px;\n\t\t\tcolor: #20efa4;\n\t\t\tfill: currentColor;\n\t\t\tstroke: currentColor;\n\t\t\tstroke-width: 50;\n\t\t\tz-index: 1;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\ttransform-origin: top left;\n\t\t}\n\t\t&[data-cursor=\"pointer\"] {\n\t\t\t&,\n\t\t\tsvg {\n\t\t\t\tcolor: #efe120;\n\t\t\t}\n\t\t\t/* &:before {\n\t\t\t\tvisibility: visible;\n\t\t\t\topacity: 1;\n\t\t\t\twidth: 10px;\n\t\t\t\theight: 10px;\n\t\t\t\tmargin: -5px 0 0 -5px;\n\t\t\t} */\n\t\t\t/* svg {\n\t\t\t\tfill: transparent;\n\t\t\t\tstroke-dasharray: 100;\n\t\t\t} */\n\t\t}\n\t\t&[data-state*=\"active\"] {\n\t\t\tsvg {\n\t\t\t\ttransform: scale(0.8)\n\t\t\t}\n\t\t}\n\t"])));
};
var templateObject_1;


/***/ }),

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var redux_1 = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var Cursor_1 = __webpack_require__(/*! ../Cursor */ "./components/Cursor/index.tsx");
var WindowsManager_1 = __webpack_require__(/*! ../WindowsManager */ "./components/WindowsManager/index.tsx");
var ControlBar_1 = __webpack_require__(/*! ../ControlBar */ "./components/ControlBar/index.tsx");
var Taskbar_1 = __webpack_require__(/*! ../Taskbar */ "./components/Taskbar/index.tsx");
var Layout = /** @class */ (function (_super) {
    tslib_1.__extends(Layout, _super);
    function Layout(props) {
        var _this = _super.call(this, props) || this;
        _this.onResize = _this.onResize.bind(_this);
        _this.window = React.createRef();
        _this.content = React.createRef();
        return _this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", { className: this.props.className },
            React.createElement(Cursor_1.default, null),
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
        return (React.createElement(React.Fragment, null,
            React.createElement(Container, { elementRef: this.window },
                React.createElement(ContainerColumn, null,
                    React.createElement(ControlBar_1.default, null),
                    React.createElement(ContainerRow, { elementRef: this.content },
                        React.createElement(Taskbar_1.default, null),
                        React.createElement(Content, null)))),
            React.createElement(WindowsManager_1.default, { opened: [] })));
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
}(React.Component));
var _a = __webpack_require__(/*! ./styles.ts */ "./components/Layout/styles.ts")(Layout, {
    Container: utils_1.div("Layout_Container"),
    ContainerColumn: utils_1.div("Layout_Column"),
    ContainerRow: utils_1.div("Layout_Row"),
    Content: utils_1.div("Layout_Content")
}), StyledLayout = _a.Self, Container = _a.Container, Content = _a.Content, ContainerColumn = _a.ContainerColumn, ContainerRow = _a.ContainerRow;
var ConnectedStyledLayout = react_redux_1.connect(function mapStateToProps(state, ownProps) {
    return {
        loading: !!state.System.loading,
    };
}, function mapDispatchToProps(dispatch) {
    return {
        setLayoutState: function (size) {
            dispatch(tslib_1.__assign({ type: 'Layout.setLayoutState' }, size));
        }
    };
})(StyledLayout);
exports.default = ConnectedStyledLayout;
exports.reducer = redux_1.combineReducers({
    Layout: function (state, action) {
        if (!state) {
            state = {};
        }
        if (!state.window) {
            state = tslib_1.__assign({}, state, { window: {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0,
                } });
        }
        if (!state.content) {
            state = tslib_1.__assign({}, state, { content: {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0,
                } });
        }
        switch (action.type) {
            case 'Layout.setLayoutState':
                state = tslib_1.__assign({}, state, { window: tslib_1.__assign({}, state.window, action.window), content: tslib_1.__assign({}, state.content, action.content) });
                break;
        }
        return state;
    },
    System: function (state, action) {
        if (state === void 0) { state = {}; }
        return state;
    },
    Taskbar: Taskbar_1.reducer,
    WindowsManager: WindowsManager_1.reducer,
});


/***/ }),

/***/ "./components/Layout/styles.ts":
/*!*************************************!*\
  !*** ./components/Layout/styles.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var Container = _a.Container, Content = _a.Content, ContainerColumn = _a.ContainerColumn, ContainerRow = _a.ContainerRow, children = tslib_1.__rest(_a, ["Container", "Content", "ContainerColumn", "ContainerRow"]);
    return tslib_1.__assign({}, children, { Self: utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"]))), Container: utils_1.styled(Container)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"]))), Content: utils_1.styled(Content)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tflex-grow: 1;\n\t\t"]))), ContainerColumn: utils_1.styled(ContainerColumn)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"]))), ContainerRow: utils_1.styled(ContainerRow)(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tflex-grow: 1;\n\t\t"]))) });
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./components/ScrolledContent/index.tsx":
/*!**********************************************!*\
  !*** ./components/ScrolledContent/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var ScrolledContent = /** @class */ (function (_super) {
    tslib_1.__extends(ScrolledContent, _super);
    function ScrolledContent(props) {
        var _this = _super.call(this, props) || this;
        _this.self = React.createRef();
        _this.content = React.createRef();
        _this.track = React.createRef();
        _this.bar = React.createRef();
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
        var attrs = tslib_1.__assign({}, this.props);
        delete attrs.children;
        var barStyles = {
            height: ((this.state.barHeight * 100) + '%'),
            top: ((this.state.barTop * 100) + '%'),
        };
        var isVisible = !({ 0: true, 1: true }[this.state.barHeight]);
        return (React.createElement("div", tslib_1.__assign({ ref: this.self }, attrs),
            React.createElement(Content, { style: { top: -this.state.contentTop + 'px' }, elementRef: this.content, onWheel: this.handlerOnWheel.bind(this) }, this.props.children),
            React.createElement(Track, { "style-isVisible": isVisible, elementRef: this.track },
                React.createElement(Bar, { elementRef: this.bar, style: barStyles }))));
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
}(React.PureComponent));
var _a = __webpack_require__(/*! ./styles.ts */ "./components/ScrolledContent/styles.ts")(ScrolledContent, {
    Content: utils_1.div("ScrolledContent_Content"),
    Track: utils_1.div("ScrolledContent_Track"),
    Bar: utils_1.div("ScrolledContent_Bar"),
}), StyledScrolledContent = _a.Self, Content = _a.Content, Track = _a.Track, Bar = _a.Bar;
exports.default = StyledScrolledContent;


/***/ }),

/***/ "./components/ScrolledContent/styles.ts":
/*!**********************************************!*\
  !*** ./components/ScrolledContent/styles.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var Content = _a.Content, Track = _a.Track, Bar = _a.Bar, children = tslib_1.__rest(_a, ["Content", "Track", "Bar"]);
    return tslib_1.__assign({}, children, { Self: utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"]))), Content: utils_1.styled(Content)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\ttransition: top 0.3s;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\ttransition: top 0.3s;\n\t\t"]))), Track: utils_1.styled(Track)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\twidth: 5rem;\n\t\t\tdisplay: ", ";\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\twidth: 5rem;\n\t\t\tdisplay: ", ";\n\t\t"])), function (props) { return (props['style-isVisible'] ? 'block' : 'none'); }), Bar: utils_1.styled(Bar)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 10rem;\n\t\t\ttransition: top 0.3s;\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 10rem;\n\t\t\ttransition: top 0.3s;\n\t\t"]))) });
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./components/Taskbar/index.tsx":
/*!**************************************!*\
  !*** ./components/Taskbar/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var ScrolledContent_1 = __webpack_require__(/*! ../ScrolledContent */ "./components/ScrolledContent/index.tsx");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var TaskBar = /** @class */ (function (_super) {
    tslib_1.__extends(TaskBar, _super);
    function TaskBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskBar.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({}, utils_1.attrs(this.props)),
            React.createElement(Content, null,
                React.createElement(ScrolledContent_1.default, null, this.props.apps.map((function (app) {
                    return (React.createElement(Item, { onClick: this.handlerItemClick.bind(this, app), title: app.appInfo.name, key: app.id },
                        React.createElement("img", { src: app.appInfo.icon, alt: "" })));
                }).bind(this))))));
    };
    TaskBar.prototype.handlerItemClick = function (app, event) {
        event.preventDefault();
        if (app.call)
            app.call();
    };
    return TaskBar;
}(React.Component));
var _a = __webpack_require__(/*! ./styles.ts */ "./components/Taskbar/styles.ts")(TaskBar, {
    Content: utils_1.div("TaskBar_Content"),
    Item: utils_1.el("a", "TaskBar_Item", { href: "#" }),
}), StyledTaskBar = _a.Self, Content = _a.Content, Item = _a.Item;
var ConnectedStyledTaskBar = react_redux_1.connect(function mapStateToProps(state, ownProps) {
    return {
        apps: state.Taskbar.apps,
    };
}, function mapDispatchToProps(dispatch) {
    return {};
})(StyledTaskBar);
exports.default = ConnectedStyledTaskBar;
function reducer(state, action) {
    if (state === void 0) { state = { apps: [] }; }
    if (action.type.indexOf("Taskbar.") !== 0)
        return state;
    var type = action.type.replace("Taskbar.", "");
    switch (type) {
        case 'add':
            state = tslib_1.__assign({}, state);
            state.apps = state.apps.concat(action.list);
            break;
    }
    return state;
}
exports.reducer = reducer;
function setListInState(list, state) {
    if (!state)
        state = {};
    state = tslib_1.__assign({}, state);
    if (!state.Taskbar)
        state.Taskbar = {};
    state.Taskbar = tslib_1.__assign({}, state.Taskbar);
    state.Taskbar.apps = [].concat(list);
    return state;
}
exports.setListInState = setListInState;
function getListFromState(state) {
    if (state && state.Taskbar && state.Taskbar.apps)
        return [].concat(state.Taskbar.apps);
    return [];
}
exports.getListFromState = getListFromState;


/***/ }),

/***/ "./components/Taskbar/styles.ts":
/*!**************************************!*\
  !*** ./components/Taskbar/styles.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var Content = _a.Content, Item = _a.Item, children = tslib_1.__rest(_a, ["Content", "Item"]);
    return tslib_1.__assign({}, children, { Self: utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 50rem;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 1;\n\t\t\ttransition: left 0.3s;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 20px 0;\n\t\t"], ["\n\t\t\twidth: 50rem;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 1;\n\t\t\ttransition: left 0.3s;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 20px 0;\n\t\t"]))), Content: utils_1.styled(Content)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 50rem;\n\t\t\tbackground: rgba(70, 70, 70, 0.5);\n\t\t\tborder-radius: 0 5rem 5rem 0;\n\t\t\tmax-height: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 5px 0;\n\t\t"], ["\n\t\t\twidth: 50rem;\n\t\t\tbackground: rgba(70, 70, 70, 0.5);\n\t\t\tborder-radius: 0 5rem 5rem 0;\n\t\t\tmax-height: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 5px 0;\n\t\t"]))), Item: utils_1.styled(Item)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tmargin: 5px auto;\n\t\t\ttransition: transform 0.3s;\n\t\t\timg,\n\t\t\tsvg {\n\t\t\t\tmax-width: 80%;\n\t\t\t\tmax-height: 80%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(1.1)\n\t\t\t}\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tmargin: 5px auto;\n\t\t\ttransition: transform 0.3s;\n\t\t\timg,\n\t\t\tsvg {\n\t\t\t\tmax-width: 80%;\n\t\t\t\tmax-height: 80%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(1.1)\n\t\t\t}\n\t\t"]))) });
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./components/Window/index.tsx":
/*!*************************************!*\
  !*** ./components/Window/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var WindowsManager_1 = __webpack_require__(/*! ../WindowsManager */ "./components/WindowsManager/index.tsx");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
tslib_1.__exportStar(__webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./methods */ "./components/Window/methods.ts"), exports);
var render_1 = __webpack_require__(/*! ./render */ "./components/Window/render.tsx");
var Window = /** @class */ (function (_super) {
    tslib_1.__extends(Window, _super);
    function Window(props) {
        var _this = _super.call(this, props) || this;
        _this.pressed = interfaces_1.windowPressState.None;
        _this.handlerMouseMove = _this.handlerMouseMove.bind(_this);
        _this.handlerMouseUp = _this.handlerMouseUp.bind(_this);
        return _this;
    }
    Window.prototype.checkSizeValue = function (value) {
        if (typeof value == 'number')
            return value + 'px';
        return value;
    };
    Window.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.state === interfaces_1.windowStates.New) {
            setTimeout(function () { return WindowsManager_1.actions.show(_this.props.id); }, 10);
        }
        document.documentElement.addEventListener('mousemove', this.handlerMouseMove);
        document.documentElement.addEventListener('mouseup', this.handlerMouseUp);
    };
    Window.prototype.componentWillUnmount = function () {
        document.documentElement.removeEventListener('mousemove', this.handlerMouseMove);
        document.documentElement.removeEventListener('mouseup', this.handlerMouseUp);
    };
    Window.prototype.handlerOnPress = function (event) {
        event.preventDefault();
        WindowsManager_1.actions.focus(this.props.id);
    };
    Window.prototype.handlerHeaderOnPress = function (event) {
        if (event.target != this.headerRef.current)
            return;
        event.preventDefault();
        this.pressed = interfaces_1.windowPressState.Header;
        this.lastMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
    };
    Window.prototype.handlerResizeBorderPress = function (direction, event) {
        event.preventDefault();
        this.pressed = interfaces_1.windowPressState.Border;
        this.lastMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
        this.currentBorderType = direction;
    };
    Window.prototype.handlerMouseUp = function () {
        this.pressed = interfaces_1.windowPressState.None;
    };
    Window.prototype.handlerMouseMove = function (event) {
        if (this.pressed == interfaces_1.windowPressState.None)
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
            case interfaces_1.windowPressState.Header:
                this.onHeaderMove(mouseMove);
                break;
            case interfaces_1.windowPressState.Border:
                this.onBorderMove(this.lastMousePosition);
                break;
        }
    };
    Window.prototype.handlerButtonControlClick = function (type, event) {
        event.preventDefault();
        switch (type) {
            case 'close':
                WindowsManager_1.actions.close(this.props.id);
                break;
        }
    };
    Window.prototype.onHeaderMove = function (mouseMove) {
        this.addPosition(mouseMove);
    };
    Window.prototype.onBorderMove = function (mousePosition) {
        var size = this.getSize();
        var position = this.getPosition();
        var bounds = {
            x1: position.x,
            y1: position.y,
            x2: position.x + size.width,
            y2: position.y + size.height,
        };
        var changed = { x: 0, y: 0 };
        switch (this.currentBorderType) {
            case interfaces_1.windowBorderTypes.Left:
                bounds.x1 = mousePosition.x;
                changed['x'] = 1;
                break;
            case interfaces_1.windowBorderTypes.Right:
                bounds.x2 = mousePosition.x;
                changed['x'] = 2;
                break;
            case interfaces_1.windowBorderTypes.Top:
                bounds.y1 = mousePosition.y;
                changed['y'] = 1;
                break;
            case interfaces_1.windowBorderTypes.Bottom:
                bounds.y2 = mousePosition.y;
                changed['y'] = 2;
                break;
            case interfaces_1.windowBorderTypes.LeftTop:
                bounds.x1 = mousePosition.x;
                bounds.y1 = mousePosition.y;
                changed['x'] = 1;
                changed['y'] = 1;
                break;
            case interfaces_1.windowBorderTypes.LeftBottom:
                bounds.x1 = mousePosition.x;
                bounds.y2 = mousePosition.y;
                changed['x'] = 1;
                changed['y'] = 2;
                break;
            case interfaces_1.windowBorderTypes.RightTop:
                bounds.x2 = mousePosition.x;
                bounds.y1 = mousePosition.y;
                changed['x'] = 2;
                changed['y'] = 1;
                break;
            case interfaces_1.windowBorderTypes.RightBottom:
                bounds.x2 = mousePosition.x;
                bounds.y2 = mousePosition.y;
                changed['x'] = 2;
                changed['y'] = 2;
                break;
        }
        var minSize = utils_1.sizeToPosition(this.getMinSize());
        ;
        ['x', 'y'].forEach(function (direction) {
            if (changed[direction]) {
                bounds[direction + changed[direction]] = mousePosition[direction];
                if ((bounds[direction + 2] - bounds[direction + 1]) < minSize[direction]) {
                    bounds[direction + changed[direction]] = (changed[direction] == 1 ?
                        bounds[direction + 2] - minSize[direction] :
                        bounds[direction + 1] + minSize[direction]);
                }
            }
        });
        position = {
            x: bounds.x1,
            y: bounds.y1,
        };
        size = {
            width: bounds.x2 - bounds.x1,
            height: bounds.y2 - bounds.y1,
        };
        this.setSize(size);
        this.setPosition(position);
    };
    Window.prototype.getMinSize = function () {
        return {
            width: (this.props.minWidth > 50 ? this.props.minWidth : 50),
            height: (this.props.minHeight > 50 ? this.props.minHeight : 50),
        };
    };
    Window.prototype.getMaxSize = function () {
        return {
            width: this.props.maxWidth,
            height: this.props.maxHeight,
        };
    };
    Window.prototype.checkSize = function (_size) {
        var size = tslib_1.__assign({}, _size);
        var minSize = this.getMinSize();
        if (size.width < minSize.width)
            size.width = minSize.width;
        if (size.height < minSize.height)
            size.height = minSize.height;
        return size;
    };
    Window.prototype.getSize = function () {
        return {
            width: this.props.width,
            height: this.props.height,
        };
    };
    Window.prototype.setSize = function (size) {
        size = this.checkSize(size);
        WindowsManager_1.actions.resize(this.props.id, size);
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
        WindowsManager_1.actions.move(this.props.id, {
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
    return Window;
}(render_1.default));
var StyledWindow = __webpack_require__(/*! ./styles */ "./components/Window/styles.ts")(Window);
exports.default = StyledWindow;


/***/ }),

/***/ "./components/Window/interfaces.ts":
/*!*****************************************!*\
  !*** ./components/Window/interfaces.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var windowStates;
(function (windowStates) {
    windowStates[windowStates["New"] = 1] = "New";
    windowStates[windowStates["Minimized"] = 2] = "Minimized";
    windowStates[windowStates["Normal"] = 4] = "Normal";
    windowStates[windowStates["Maximized"] = 8] = "Maximized";
    windowStates[windowStates["Closing"] = 16] = "Closing";
    windowStates[windowStates["isVisible"] = 12] = "isVisible";
    windowStates[windowStates["isOpened"] = 15] = "isOpened";
})(windowStates = exports.windowStates || (exports.windowStates = {}));
var windowPressState;
(function (windowPressState) {
    windowPressState[windowPressState["None"] = 0] = "None";
    windowPressState[windowPressState["Header"] = 1] = "Header";
    windowPressState[windowPressState["Border"] = 2] = "Border";
})(windowPressState = exports.windowPressState || (exports.windowPressState = {}));
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
})(windowBorderTypes = exports.windowBorderTypes || (exports.windowBorderTypes = {}));
exports.defaultWindowProps = {
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    minWidth: 0,
    minHeight: 0,
    maxWidth: 0,
    maxHeight: 0,
    inFocus: false,
    state: windowStates.New,
    toState: windowStates.Normal,
    resizable: true,
    appInfo: null,
};


/***/ }),

/***/ "./components/Window/methods.ts":
/*!**************************************!*\
  !*** ./components/Window/methods.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts");
function isState(windowProps, needState) {
    var state = windowProps.state;
    // if( windowProps.state == windowStates.New ){
    // 	state = windowProps.toState;
    // }
    return !!(state & needState);
}
exports.isState = isState;
function isNormal(windowProps) {
    return isState(windowProps, interfaces_1.windowStates.Normal);
}
exports.isNormal = isNormal;
function isMaximized(windowProps) {
    return isState(windowProps, interfaces_1.windowStates.Maximized);
}
exports.isMaximized = isMaximized;
function isMinimized(windowProps) {
    return isState(windowProps, interfaces_1.windowStates.Minimized);
}
exports.isMinimized = isMinimized;
function isClosing(windowProps) {
    return isState(windowProps, interfaces_1.windowStates.Closing);
}
exports.isClosing = isClosing;
function isVisible(windowProps) {
    return isState(windowProps, interfaces_1.windowStates.isVisible) && !isMinimized(windowProps);
}
exports.isVisible = isVisible;
function isOpened(windowProps) {
    return isState(windowProps, interfaces_1.windowStates.isOpened) && !isClosing(windowProps);
}
exports.isOpened = isOpened;


/***/ }),

/***/ "./components/Window/render.tsx":
/*!**************************************!*\
  !*** ./components/Window/render.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var index_1 = __webpack_require__(/*! ./index */ "./components/Window/index.tsx");
var WindowRender = /** @class */ (function (_super) {
    tslib_1.__extends(WindowRender, _super);
    function WindowRender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxRef = React.createRef();
        _this.headerRef = React.createRef();
        return _this;
    }
    WindowRender.prototype.checkSizeValue = function (value) {
        if (typeof value == 'number')
            return value + 'px';
        return value;
    };
    WindowRender.prototype.render = function () {
        var _this = this;
        var Content = this.props.content;
        var contentState = this.props.contentState;
        var style = {
            left: this.props.x + 'px',
            top: this.props.y + 'px',
            width: this.checkSizeValue(this.props.width),
            height: this.checkSizeValue(this.props.height),
        };
        return (React.createElement(Box, { style: style, elementRef: this.boxRef, isVisible: index_1.isVisible(this.props), inFocus: this.props.inFocus, className: this.props.className, onMouseDown: this.handlerOnPress.bind(this) },
            this.props.resizable && utils_1.mapToArray(interfaces_1.windowBorderTypes, function (type, index) {
                return React.createElement(ResizeBorder, { key: index, onMouseDown: _this.handlerResizeBorderPress.bind(_this, type), Type: type });
            }),
            React.createElement(Header, { elementRef: this.headerRef, onMouseDown: this.handlerHeaderOnPress.bind(this) },
                React.createElement(Buttons, null, ['close', this.props.resizable && 'maximize', 'minimize'].map(function (type) {
                    return type && React.createElement(ButtonControl, { key: type, "button-type": type, onClick: _this.handlerButtonControlClick.bind(_this, type) });
                }))),
            React.createElement(Body, null,
                React.createElement(Content, { id: this.props.id, contentId: this.props.contentId, state: contentState }))));
    };
    return WindowRender;
}(React.PureComponent));
exports.default = WindowRender;
var _a = __webpack_require__(/*! ./styles */ "./components/Window/styles.ts").children({
    Box: utils_1.div("Window_Box"),
    Header: utils_1.div("Window_Header"),
    Body: utils_1.div("Window_Body"),
    Buttons: utils_1.div("Window_Buttons"),
    ButtonControl: utils_1.el("button", "Window_ButtonControl"),
    ResizeBorder: utils_1.div("Window_ResizeBorder"),
}), Box = _a.Box, Header = _a.Header, Body = _a.Body, Buttons = _a.Buttons, ButtonControl = _a.ButtonControl, ResizeBorder = _a.ResizeBorder;


/***/ }),

/***/ "./components/Window/styles.ts":
/*!*************************************!*\
  !*** ./components/Window/styles.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
module.exports = function (Self) {
    return utils_1.styled(Self)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\tposition: fixed;\n\t\twidth: 400rem;\n\t\theight: 400rem;\n\t\tbackground: rgba(70, 70, 70, 0.99);\n\t"], ["\n\t\tposition: fixed;\n\t\twidth: 400rem;\n\t\theight: 400rem;\n\t\tbackground: rgba(70, 70, 70, 0.99);\n\t"])));
};
module.exports.children = function (_a) {
    var Box = _a.Box, Header = _a.Header, Body = _a.Body, Buttons = _a.Buttons, ButtonControl = _a.ButtonControl, ResizeBorder = _a.ResizeBorder, children = tslib_1.__rest(_a, ["Box", "Header", "Body", "Buttons", "ButtonControl", "ResizeBorder"]);
    return tslib_1.__assign({}, children, { Box: utils_1.styled(Box)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\ttransform: scale(", ");\n\t\t\topacity: ", ";\n\t\t\tbox-shadow: ", ";\n\t\t\ttop: 100rem;\n\t\t\tleft: 100rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.3s, opacity 0.3s, top 0.05s, left 0.05s, height 0.05s, width 0.05s;\n\t\t"], ["\n\t\t\ttransform: scale(", ");\n\t\t\topacity: ", ";\n\t\t\tbox-shadow: ", ";\n\t\t\ttop: 100rem;\n\t\t\tleft: 100rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.3s, opacity 0.3s, top 0.05s, left 0.05s, height 0.05s, width 0.05s;\n\t\t"])), function (props) { return props['isVisible'] ? '1' : '0'; }, boxOpacity, function (props) { return props['inFocus'] ? '0 0 30rem rgba(0, 0, 0, 0.5)' : '0 0 10rem rgba(0, 0, 0, 0.1)'; }), Header: utils_1.styled(Header)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t"]))), Body: utils_1.styled(Body)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"]))), Buttons: utils_1.styled(Buttons)(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 6rem;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 6rem;\n\t\t"]))), ButtonControl: utils_1.styled(ButtonControl)(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: block;\n\t\t\twidth: 8rem;\n\t\t\theight: 8rem;\n\t\t\tpadding: 0;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\tcursor: pointer;\n\t\t\tmargin-right: 4rem;\n\t\t\t", "\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twidth: 8rem;\n\t\t\theight: 8rem;\n\t\t\tpadding: 0;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\tcursor: pointer;\n\t\t\tmargin-right: 4rem;\n\t\t\t", "\n\t\t"])), buttonStyles), ResizeBorder: utils_1.styled(ResizeBorder)(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n\t\t\tposition: absolute;\n\t\t\tfont-size: 4rem;\n\t\t\tz-index: 2;\n\t\t\tbackground: red;\n\t\t\t", ";\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\tfont-size: 4rem;\n\t\t\tz-index: 2;\n\t\t\tbackground: red;\n\t\t\t", ";\n\t\t"])), ResizeBorderStyle) });
};
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
        result += "\n\t\t\tz-index: 3;\n\t\t\tbackground: green;\n\t\t";
    }
    return result;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./components/WindowContent/index.tsx":
/*!********************************************!*\
  !*** ./components/WindowContent/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var WindowContent = /** @class */ (function (_super) {
    tslib_1.__extends(WindowContent, _super);
    function WindowContent(props) {
        var _this = _super.call(this, props) || this;
        _this.stateId = "Content:" + _this.props.contentId + ':' + _this.props.id;
        _this.state = utils_1.stateLoad(_this.stateId);
        return _this;
    }
    WindowContent.prototype.componentDidUpdate = function () {
        utils_1.stateSave(this.stateId, this.state);
    };
    WindowContent.prototype.componentDidMount = function () {
        utils_1.stateSave(this.stateId, this.state);
    };
    WindowContent.prototype.componentWillUnmount = function () {
        utils_1.stateRemove(this.stateId);
    };
    return WindowContent;
}(React.Component));
exports.default = WindowContent;


/***/ }),

/***/ "./components/WindowsManager/actions.ts":
/*!**********************************************!*\
  !*** ./components/WindowsManager/actions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var Window_1 = __webpack_require__(/*! ../Window */ "./components/Window/index.tsx");
var index_1 = __webpack_require__(/*! @system/index */ "./system/index.ts");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var _createAction = utils_1.createAction.bind({}, "WindowsManager");
exports.createAction = _createAction;
var methods_1 = __webpack_require__(/*! ./methods */ "./components/WindowsManager/methods.ts");
function getActionName(name) {
    return _createAction(name).type;
}
exports.getActionName = getActionName;
exports.actions = {
    _load: function () {
        index_1.store.dispatch(_createAction("load"));
        exports.actions.countChanged();
    },
    open: function (props) {
        var options = tslib_1.__assign({}, Window_1.defaultWindowProps, { id: utils_1.uid() }, props.options);
        options = tslib_1.__assign({}, options, methods_1.windowCalcState(options));
        props.options = options;
        index_1.store.dispatch(_createAction("open", props));
        exports.actions.focus(options.id);
        exports.actions.countChanged();
    },
    focus: function (windowId) {
        index_1.store.dispatch(_createAction("focus", { windowId: windowId }));
    },
    move: function (windowId, position) {
        index_1.store.dispatch(_createAction("move", { windowId: windowId, position: position }));
    },
    show: function (windowId) {
        index_1.store.dispatch(_createAction("show", { windowId: windowId }));
    },
    hide: function (windowId) {
        index_1.store.dispatch(_createAction("hide", { windowId: windowId }));
    },
    close: function (windowId) {
        index_1.store.dispatch(_createAction("closing", { windowId: windowId }));
        exports.actions.hide(windowId);
        setTimeout(function () {
            index_1.store.dispatch(_createAction("close", { windowId: windowId }));
        }, 300);
        exports.actions.countChanged();
    },
    resize: function (windowId, size) {
        index_1.store.dispatch(_createAction("resize", { windowId: windowId, size: size }));
    },
    countChanged: function () {
        index_1.store.dispatch(_createAction("countChanged", { list: methods_1.getList() }));
    }
};


/***/ }),

/***/ "./components/WindowsManager/index.tsx":
/*!*********************************************!*\
  !*** ./components/WindowsManager/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var actions_1 = __webpack_require__(/*! ./actions */ "./components/WindowsManager/actions.ts");
exports.actions = actions_1.actions;
exports.getActionName = actions_1.getActionName;
var Window_1 = __webpack_require__(/*! ../Window */ "./components/Window/index.tsx");
var reducer_1 = __webpack_require__(/*! ./reducer */ "./components/WindowsManager/reducer.ts");
exports.reducer = reducer_1.reducer;
var WindowsManager = /** @class */ (function (_super) {
    tslib_1.__extends(WindowsManager, _super);
    function WindowsManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsManager.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.props.opened.map(this.renderWindow.bind(this))));
    };
    WindowsManager.prototype.renderWindow = function (window) {
        return (React.createElement(Window_1.default, tslib_1.__assign({ key: window.id }, tslib_1.__assign({}, window, utils_1.getWindowContent(window)))));
    };
    WindowsManager.prototype.componentDidMount = function () {
        actions_1.actions._load();
    };
    return WindowsManager;
}(React.Component));
var ConnectedWindowsManager = react_redux_1.connect(function mapStateToProps(state, ownProps) {
    return tslib_1.__assign({}, state.WindowsManager);
}, function mapDispatchToProps(dispatch) {
    return {};
})(WindowsManager);
exports.default = ConnectedWindowsManager;


/***/ }),

/***/ "./components/WindowsManager/methods.ts":
/*!**********************************************!*\
  !*** ./components/WindowsManager/methods.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var window_1 = __webpack_require__(/*! ../../system/window */ "./system/window.ts");
var index_1 = __webpack_require__(/*! ../Window/index */ "./components/Window/index.tsx");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var index_2 = __webpack_require__(/*! @system/index */ "./system/index.ts");
function windowFocus(list, windowId) {
    var focusWindow;
    list = list.filter(function (window) {
        if (window.id === windowId) {
            focusWindow = window;
            window.inFocus = true;
            return false;
        }
        window.inFocus = false;
        return true;
    });
    if (focusWindow)
        list.push(focusWindow);
    return list;
}
exports.windowFocus = windowFocus;
function windowMap(list, windowId, handler) {
    return list.map(function (window) {
        if (window.id != windowId)
            return window;
        return handler(window);
    });
}
exports.windowMap = windowMap;
var isPercent = /[0-9.]+\%/;
function parsePercent(val) {
    return (parseFloat(val) || 0) / 100;
}
function _windowCalcState(keyPosition, keySize, windowProps, contentProps) {
    var result = {};
    if (index_1.isMaximized(windowProps)) {
        result[keyPosition] = contentProps[keyPosition];
        result[keySize] = contentProps[keySize];
        return result;
    }
    var windowSize = windowClasStateSize(keySize, windowProps, contentProps);
    var windowPosition = windowProps[keyPosition];
    var contentSize = contentProps[keySize];
    switch (windowPosition) {
        case 'center':
            windowPosition = '50%';
            break;
        case 'left':
        case 'top':
            windowPosition = '0%';
            break;
        case 'right':
        case 'bottom':
            windowPosition = '100%';
            break;
    }
    if (isPercent.test(windowPosition)) {
        windowPosition = parsePercent(windowPosition) * (contentSize - windowSize) || 0;
    }
    else {
        windowPosition = parseFloat(windowPosition) || 0;
    }
    windowPosition += contentProps[keyPosition];
    result[keySize] = utils_1.round(windowSize, 3);
    result[keyPosition] = utils_1.round(windowPosition, 3);
    return result;
}
function windowClasStateSize(keySize, windowProps, contentProps) {
    if (isPercent.test(windowProps[keySize])) {
        return parsePercent(windowProps[keySize]) * contentProps[keySize];
    }
    return parseFloat(windowProps[keySize]) || 0;
}
function windowCalcState(windowProps) {
    var contentState = window_1.getContentState();
    var result = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    };
    result = tslib_1.__assign({}, result, _windowCalcState('x', 'width', windowProps, contentState), _windowCalcState('y', 'height', windowProps, contentState));
    return result;
}
exports.windowCalcState = windowCalcState;
function getList() {
    return index_2.store.getState().WindowsManager.opened.filter(function (window) { return index_1.isOpened(window); });
}
exports.getList = getList;


/***/ }),

/***/ "./components/WindowsManager/reducer.ts":
/*!**********************************************!*\
  !*** ./components/WindowsManager/reducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var Window_1 = __webpack_require__(/*! ../Window */ "./components/Window/index.tsx");
var utils_1 = __webpack_require__(/*! ../../utils */ "./utils/index.tsx");
var methods_1 = __webpack_require__(/*! ./methods */ "./components/WindowsManager/methods.ts");
function reducer(state, action) {
    if (state === void 0) { state = {
        opened: []
    }; }
    var type = "";
    if (!(type = utils_1.checkAction("WindowsManager", action)))
        return state;
    switch (type) {
        case 'open':
            state = tslib_1.__assign({}, state);
            state.opened = state.opened.concat(tslib_1.__assign({}, Window_1.defaultWindowProps, action.options, { content: action.content }));
            action.callback(action.id);
            break;
        case 'load':
            state = utils_1.stateLoad("WindowsManager", {
                opened: []
            });
            break;
        case 'focus':
            state.opened = methods_1.windowFocus(state.opened, action.windowId);
            break;
        case 'show':
            state.opened = methods_1.windowMap(state.opened, action.windowId, function (window) {
                return tslib_1.__assign({}, window, { state: window.toState || Window_1.windowStates.Normal });
            });
            break;
        case 'hide':
            state.opened = methods_1.windowMap(state.opened, action.windowId, function (window) {
                return tslib_1.__assign({}, window, { state: window.state | Window_1.windowStates.Minimized });
            });
            break;
        case 'close':
            state.opened = state.opened.filter(function (window) { return window.id !== action.windowId; });
            break;
        case 'closing':
            state.opened = methods_1.windowMap(state.opened, action.windowId, function (window) {
                window = tslib_1.__assign({}, window);
                window.state = window.state | Window_1.windowStates.Closing;
                return window;
            });
            break;
        case 'move':
            state.opened = methods_1.windowMap(state.opened, action.windowId, function (window) {
                return tslib_1.__assign({}, window, action.position);
            });
            break;
        case 'resize':
            state.opened = methods_1.windowMap(state.opened, action.windowId, function (window) {
                return tslib_1.__assign({}, window, action.size);
            });
            break;
    }
    utils_1.stateSave("WindowsManager", state);
    return state;
}
exports.reducer = reducer;


/***/ })

}]);
//# sourceMappingURL=components.js.map