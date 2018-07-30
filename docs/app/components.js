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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
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
    RightPanel: _utils_1.div("ControlBar_RightPanel"),
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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var RightPanel = _a.RightPanel, Time = _a.Time, children = tslib_1.__rest(_a, ["RightPanel", "Time"]);
    return tslib_1.__assign({}, children, { Self: _utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tcolor: #fff;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t"]))), RightPanel: _utils_1.styled(RightPanel)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: auto;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 5rem;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: auto;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 5rem;\n\t\t"]))), Time: _utils_1.styled(Time)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tfont-size: 12rem;\n\t\t\tfont-weight: 300;\n\t\t"], ["\n\t\t\tfont-size: 12rem;\n\t\t\tfont-weight: 300;\n\t\t"]))) });
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
        _this.cursors = __webpack_require__(/*! svg-inline-loader!@assets/images/cursors/cursors.svg */ "../node_modules/svg-inline-loader/index.js!./assets/images/cursors/cursors.svg");
        _this.checkCursor = _this.checkCursor.bind(_this);
        _this.handlerMouseMove = _this.handlerMouseMove.bind(_this);
        _this.handlerMouseOut = _this.handlerMouseOut.bind(_this);
        _this.handlerMouseDown = _this.handlerMouseDown.bind(_this);
        _this.handlerMouseUp = _this.handlerMouseUp.bind(_this);
        _this.handlerDragStart = _this.handlerDragStart.bind(_this);
        _this.handlerDragEnd = _this.handlerDragEnd.bind(_this);
        _this.handlerDrag = _this.handlerDrag.bind(_this);
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
        var attrs = tslib_1.__assign({}, this.props, { 'style': styles, 'data-cursor': this.state.cursor, 'data-state': this.getMouseState(), dangerouslySetInnerHTML: {
                __html: this.cursors
            } });
        // const cursorSvg = fs.readFileSync( require('@assets/images/cursors/cursors.svg') )
        return (React.createElement("div", tslib_1.__assign({}, attrs)));
    };
    Cursor.prototype.componentDidMount = function () {
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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
module.exports = function StylesCursor(Cursor) {
    return _utils_1.styled(Cursor)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\tposition: fixed;\n\t\tpointer-events: none;\n\t\tcolor: #20efa4;\n\t\ttransition: color 0.3s;\n\t\tz-index: 1000;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder: 2px solid rgba(255,255,255, 0.5);\n\t\t\tanimation: pulse 1s infinite;\n\t\t\tborder-radius: 50%;\n\t\t\ttransition: all 0.3s;\n\t\t\tvisibility: hidden;\n\t\t\topacity: 0;\n\t\t\t@keyframes pulse {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\ttransform: scale(0.8)\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 40rem;\n\t\t\theight: 40rem;\n\t\t\tcolor: #20efa4;\n\t\t\tfill: currentColor;\n\t\t\tstroke: currentColor;\n\t\t\tstroke-width: 0;\n\t\t\tz-index: 1;\n\t\t\tposition: absolute;\n\t\t\ttop: -20rem;\n\t\t\tleft: -20rem;\n\t\t\ttransition: all 0.3s;\n\t\t\ttransform-origin: top left;\n\t\t\t#default {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t*:not(#default) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&[data-cursor=\"default\"]{\n\t\t\tsvg {\n\t\t\t\t#default {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t*:not(#default) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&[data-cursor=\"pointer\"] {\n\t\t\t&,\n\t\t\tsvg {\n\t\t\t\tcolor: #efe120;\n\t\t\t}\n\t\t\tsvg {\n\t\t\t\t#pointer {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t*:not(#pointer) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&[data-state*=\"active\"] {\n\t\t\tsvg {\n\t\t\t\ttransform: scale(0.8)\n\t\t\t}\n\t\t}\n\t"], ["\n\t\tposition: fixed;\n\t\tpointer-events: none;\n\t\tcolor: #20efa4;\n\t\ttransition: color 0.3s;\n\t\tz-index: 1000;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder: 2px solid rgba(255,255,255, 0.5);\n\t\t\tanimation: pulse 1s infinite;\n\t\t\tborder-radius: 50%;\n\t\t\ttransition: all 0.3s;\n\t\t\tvisibility: hidden;\n\t\t\topacity: 0;\n\t\t\t@keyframes pulse {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\ttransform: scale(0.8)\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 40rem;\n\t\t\theight: 40rem;\n\t\t\tcolor: #20efa4;\n\t\t\tfill: currentColor;\n\t\t\tstroke: currentColor;\n\t\t\tstroke-width: 0;\n\t\t\tz-index: 1;\n\t\t\tposition: absolute;\n\t\t\ttop: -20rem;\n\t\t\tleft: -20rem;\n\t\t\ttransition: all 0.3s;\n\t\t\ttransform-origin: top left;\n\t\t\t#default {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t*:not(#default) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t\t&[data-cursor=\"default\"]{\n\t\t\tsvg {\n\t\t\t\t#default {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t*:not(#default) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&[data-cursor=\"pointer\"] {\n\t\t\t&,\n\t\t\tsvg {\n\t\t\t\tcolor: #efe120;\n\t\t\t}\n\t\t\tsvg {\n\t\t\t\t#pointer {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t*:not(#pointer) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&[data-state*=\"active\"] {\n\t\t\tsvg {\n\t\t\t\ttransform: scale(0.8)\n\t\t\t}\n\t\t}\n\t"])));
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
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var Cursor_1 = __webpack_require__(/*! @components//Cursor */ "./components/Cursor/index.tsx");
var WindowsManager_1 = __webpack_require__(/*! @components/WindowsManager */ "./components/WindowsManager/index.tsx");
var ControlBar_1 = __webpack_require__(/*! @components/ControlBar */ "./components/ControlBar/index.tsx");
var Taskbar_1 = __webpack_require__(/*! @components/Taskbar */ "./components/Taskbar/index.tsx");
var _system_1 = __webpack_require__(/*! @system */ "./system/index.ts");
exports.layoutRef = React.createRef();
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
        return (React.createElement("div", { className: this.props.className, ref: exports.layoutRef },
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
    Container: _utils_1.div("Layout_Container"),
    ContainerColumn: _utils_1.div("Layout_Column"),
    ContainerRow: _utils_1.div("Layout_Row"),
    Content: _utils_1.div("Layout_Content")
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
_system_1.reducersManager.addLocalReducer('Layout', function (state, action) {
    if (!state || !state.window) {
        state = tslib_1.__assign({}, state, { window: {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
            } });
    }
    if (!state || !state.content) {
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
});
_system_1.reducersManager.addLocalReducer('Taskbar', Taskbar_1.reducer);
_system_1.reducersManager.addLocalReducer('WindowsManager', WindowsManager_1.reducer);


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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var Container = _a.Container, Content = _a.Content, ContainerColumn = _a.ContainerColumn, ContainerRow = _a.ContainerRow, children = tslib_1.__rest(_a, ["Container", "Content", "ContainerColumn", "ContainerRow"]);
    return tslib_1.__assign({}, children, { Self: _utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"]))), Container: _utils_1.styled(Container)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-wrap: wrap;\n\t\t\tflex-grow: 1;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t"]))), Content: _utils_1.styled(Content)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tflex-grow: 1;\n\t\t"]))), ContainerColumn: _utils_1.styled(ContainerColumn)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t"]))), ContainerRow: _utils_1.styled(ContainerRow)(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tflex-grow: 1;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tflex-grow: 1;\n\t\t"]))) });
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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
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
    Content: _utils_1.div("ScrolledContent_Content"),
    Track: _utils_1.div("ScrolledContent_Track"),
    Bar: _utils_1.div("ScrolledContent_Bar"),
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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var Content = _a.Content, Track = _a.Track, Bar = _a.Bar, children = tslib_1.__rest(_a, ["Content", "Track", "Bar"]);
    return tslib_1.__assign({}, children, { Self: _utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"]))), Content: _utils_1.styled(Content)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\ttransition: top 0.3s;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\ttransition: top 0.3s;\n\t\t"]))), Track: _utils_1.styled(Track)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\twidth: 5rem;\n\t\t\tdisplay: ", ";\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\twidth: 5rem;\n\t\t\tdisplay: ", ";\n\t\t"])), function (props) { return (props['style-isVisible'] ? 'block' : 'none'); }), Bar: _utils_1.styled(Bar)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 10rem;\n\t\t\ttransition: top 0.3s;\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 10rem;\n\t\t\ttransition: top 0.3s;\n\t\t"]))) });
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
var ScrolledContent_1 = __webpack_require__(/*! @components/ScrolledContent */ "./components/ScrolledContent/index.tsx");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var TaskBar = /** @class */ (function (_super) {
    tslib_1.__extends(TaskBar, _super);
    function TaskBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskBar.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({}, _utils_1.attrs(this.props)),
            React.createElement(Content, null,
                React.createElement(ScrolledContent_1.default, null, this.props.apps.map(this.renderItem.bind(this))))));
    };
    TaskBar.prototype.handlerItemClick = function (app, event) {
        event.preventDefault();
        if (app.call)
            app.call();
    };
    TaskBar.prototype.renderItem = function (app) {
        return (React.createElement(Item, { States: app.states, typeShutcut: app.typeShutcut, onClick: this.handlerItemClick.bind(this, app), title: app.appInfo.name, key: app.id },
            React.createElement("img", { src: app.appInfo.icon, alt: "" })));
    };
    return TaskBar;
}(React.Component));
var _a = __webpack_require__(/*! ./styles.ts */ "./components/Taskbar/styles.ts")(TaskBar, {
    Content: _utils_1.div("TaskBar_Content"),
    Item: _utils_1.el("a", "TaskBar_Item", { href: "#" }),
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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
module.exports = function (obj, _a) {
    var Content = _a.Content, Item = _a.Item, children = tslib_1.__rest(_a, ["Content", "Item"]);
    return tslib_1.__assign({}, children, { Self: _utils_1.styled(obj)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 50rem;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 1;\n\t\t\ttransition: left 0.3s;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 20rem 0;\n\t\t"], ["\n\t\t\twidth: 50rem;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 1;\n\t\t\ttransition: left 0.3s;\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 20rem 0;\n\t\t"]))), Content: _utils_1.styled(Content)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 50rem;\n\t\t\tbackground: rgba(70, 70, 70, 0.5);\n\t\t\tborder-radius: 0 5rem 5rem 0;\n\t\t\tmax-height: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 5rem 0;\n\t\t"], ["\n\t\t\twidth: 50rem;\n\t\t\tbackground: rgba(70, 70, 70, 0.5);\n\t\t\tborder-radius: 0 5rem 5rem 0;\n\t\t\tmax-height: 100%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 5rem 0;\n\t\t"]))), Item: _utils_1.styled(Item)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 30rem;\n\t\t\theight: 30rem;\n\t\t\tmargin: 5rem auto;\n\t\t\ttransition: transform 0.3s;\n\t\t\tposition: relative;\n\t\t\timg,\n\t\t\tsvg {\n\t\t\t\tmax-width: 80%;\n\t\t\t\tmax-height: 80%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(1.1)\n\t\t\t}\n\t\t\t", "\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 30rem;\n\t\t\theight: 30rem;\n\t\t\tmargin: 5rem auto;\n\t\t\ttransition: transform 0.3s;\n\t\t\tposition: relative;\n\t\t\timg,\n\t\t\tsvg {\n\t\t\t\tmax-width: 80%;\n\t\t\t\tmax-height: 80%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ttransform: scale(1.1)\n\t\t\t}\n\t\t\t",
            "\n\t\t"])), function (props) {
            if (props['typeShutcut'] != 'window')
                return '';
            return "\n\t\t\t\t\t&:after {\n\t\t\t\t\t\tcontent: '';\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tright: 0rem;\n\t\t\t\t\t\tbottom: 0rem;\n\t\t\t\t\t\twidth: 5rem;\n\t\t\t\t\t\theight: 5rem;\n\t\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\t\tbackground: " + ((props['States'] && props['States'].indexOf('inFocus') != -1) ? '#5f5' : '#ff5') + ";\n\t\t\t\t\t}\n\t\t\t\t";
        }) });
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./components/Window/boundsManager.ts":
/*!********************************************!*\
  !*** ./components/Window/boundsManager.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var _interfaces_1 = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");
var BoundsManager = /** @class */ (function () {
    function BoundsManager(window) {
        this.state = tslib_1.__assign({}, _interfaces_1.sizeDefault, _interfaces_1.minSizeDefault, _interfaces_1.maxSizeDefault, _interfaces_1.positionDefault);
        for (var key in this.state) {
            this.state[key] = window[key];
        }
    }
    BoundsManager.prototype.setBounds = function (bounds) {
        var lastBounds = this.getBounds();
        var newBounds = tslib_1.__assign({}, lastBounds, bounds);
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
        this.state = tslib_1.__assign({}, this.state, state);
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
            bounds = tslib_1.__assign({}, bounds, { x2: bounds.x1 + size.width });
        }
        if (size.height != null) {
            bounds = tslib_1.__assign({}, bounds, { y2: bounds.y1 + size.height });
        }
        this.setBounds(bounds);
    };
    BoundsManager.prototype.setPosition = function (position) {
        var bounds = this.getBounds();
        var size = this.getSize();
        if (position.x != null) {
            bounds = tslib_1.__assign({}, bounds, { x1: position.x, x2: position.x + size.width });
        }
        if (position.y != null) {
            bounds = tslib_1.__assign({}, bounds, { y1: position.y, y2: position.y + size.height });
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
exports.BoundsManager = BoundsManager;


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
var WindowsManager_1 = __webpack_require__(/*! @components/WindowsManager */ "./components/WindowsManager/index.tsx");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts");
var _system_1 = __webpack_require__(/*! @system */ "./system/index.ts");
tslib_1.__exportStar(__webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./methods */ "./components/Window/methods.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./boundsManager */ "./components/Window/boundsManager.ts"), exports);
var render_1 = __webpack_require__(/*! ./render */ "./components/Window/render.tsx");
var Window = /** @class */ (function (_super) {
    tslib_1.__extends(Window, _super);
    function Window(props) {
        var _this = _super.call(this, props) || this;
        _this.pressed = interfaces_1.windowPressState.None;
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
        if (this.props.state === interfaces_1.windowStates.New) {
            setTimeout(function () { return WindowsManager_1.actions.show(_this.props.id); }, 10);
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
        this.pressed = interfaces_1.windowPressState.Header;
        _system_1.documentAddClass('window__press--window-header');
        this.lastMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
    };
    Window.prototype.handlerResizeBorderPress = function (direction, event) {
        event.preventDefault();
        this.pressed = interfaces_1.windowPressState.Border;
        _system_1.documentAddClass('window__press--window-header');
        this.lastMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
        this.currentBorderType = direction;
    };
    Window.prototype.handlerMouseUp = function () {
        this.pressed = interfaces_1.windowPressState.None;
        _system_1.documentRemoveClass('window__press--window-header');
        _system_1.documentRemoveClass('window__press--window-header');
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
            case interfaces_1.windowBorderTypes.Left:
                xPosition = 1;
                break;
            case interfaces_1.windowBorderTypes.Right:
                xPosition = 2;
                break;
            case interfaces_1.windowBorderTypes.Top:
                yPosition = 1;
                break;
            case interfaces_1.windowBorderTypes.Bottom:
                yPosition = 2;
                break;
            case interfaces_1.windowBorderTypes.LeftTop:
                xPosition = 1;
                yPosition = 1;
                break;
            case interfaces_1.windowBorderTypes.LeftBottom:
                xPosition = 1;
                yPosition = 2;
                break;
            case interfaces_1.windowBorderTypes.RightTop:
                xPosition = 2;
                yPosition = 1;
                break;
            case interfaces_1.windowBorderTypes.RightBottom:
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
        WindowsManager_1.actions.setBounds(this.props.id, bounds);
    };
    Window.prototype.getSize = function () {
        return {
            width: this.props.width,
            height: this.props.height,
        };
    };
    Window.prototype.setSize = function (size) {
        WindowsManager_1.actions.setSize(this.props.id, size);
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
        WindowsManager_1.actions.setPosition(this.props.id, {
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
        WindowsManager_1.actions.setMaximize(this.props.id, isMaximize);
    };
    Window.prototype.setMinimize = function (isMinimize) {
        WindowsManager_1.actions.setMinimize(this.props.id, isMinimize);
    };
    Window.prototype.close = function () {
        WindowsManager_1.actions.close(this.props.id);
    };
    Window.prototype.focus = function () {
        WindowsManager_1.actions.focus(this.props.id);
    };
    Window.prototype.unfocus = function () {
        WindowsManager_1.actions.unfocus(this.props.id);
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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
exports.defaultWindowConstructorProps = {
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
exports.defaultWindowProps = tslib_1.__assign({}, exports.defaultWindowConstructorProps, { contentId: '', id: '', content: '', contentState: {} });


/***/ }),

/***/ "./components/Window/methods.ts":
/*!**************************************!*\
  !*** ./components/Window/methods.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(/*! @components/Window/interfaces */ "./components/Window/interfaces.ts");
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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./components/Window/interfaces.ts");
var index_1 = __webpack_require__(/*! ./index */ "./components/Window/index.tsx");
var _system_1 = __webpack_require__(/*! @system */ "./system/index.ts");
var WindowRender = /** @class */ (function (_super) {
    tslib_1.__extends(WindowRender, _super);
    function WindowRender(props) {
        var _this = _super.call(this, props) || this;
        _this.boxRef = React.createRef();
        _this.headerRef = React.createRef();
        _this.Box = _this.Box.bind(_this);
        _this.ResizeBorders = _this.ResizeBorders.bind(_this);
        _this.Header = _this.Header.bind(_this);
        _this.Body = _this.Body.bind(_this);
        return _this;
    }
    WindowRender.prototype.render = function () {
        return (React.createElement(this.Box, null,
            React.createElement(this.ResizeBorders, null),
            React.createElement(this.Header, null),
            React.createElement(this.Body, null)));
    };
    WindowRender.prototype.Box = function (props) {
        return (React.createElement(Box, tslib_1.__assign({}, this.getBoxAttrs()), props.children));
    };
    WindowRender.prototype.ResizeBorders = function () {
        return (React.createElement(React.Fragment, null, this.props.resizable && _utils_1.mapToArray(interfaces_1.windowBorderTypes, this.renderResizeBorder.bind(this))));
    };
    WindowRender.prototype.Header = function () {
        return (React.createElement(Header, { elementRef: this.headerRef, onMouseDown: this.handlerHeaderOnPress.bind(this) },
            React.createElement(Buttons, null, this.getButtonControlList().map(this.renderButtonControl.bind(this))),
            React.createElement(Title, { windowWidth: this.props.width },
                React.createElement(TitleText, null, this.props.appInfo.name))));
    };
    WindowRender.prototype.Body = function () {
        var Content = this.props.content;
        var contentState = this.props.contentState;
        return (React.createElement(Body, null, this.renderContent(Content, { windowId: this.props.id, contentId: this.props.contentId, contentState: contentState })));
    };
    WindowRender.prototype.renderContent = function (Content, attrs) {
        if (typeof Content == 'string')
            return Content;
        if (typeof Content == 'function')
            return React.createElement(Content, tslib_1.__assign({}, attrs));
        return '';
    };
    WindowRender.prototype.renderButtonControl = function (buttonType) {
        if (!buttonType)
            return '';
        return (React.createElement(ButtonControl, { key: buttonType, "button-type": buttonType, onClick: this.handlerButtonControlClick.bind(this, buttonType) }));
    };
    WindowRender.prototype.renderResizeBorder = function (type, index) {
        return (React.createElement(ResizeBorder, { key: index, onMouseDown: this.handlerResizeBorderPress.bind(this, type), Type: type }));
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
            documentRef: _system_1.getDocumentRef(),
            style: style,
            elementRef: this.boxRef,
            isVisible: index_1.isVisible(this.props),
            inFocus: this.props.inFocus,
            className: this.props.className,
            onMouseDown: this.handlerOnPress.bind(this),
        };
    };
    return WindowRender;
}(React.PureComponent));
exports.default = WindowRender;
var _a = __webpack_require__(/*! ./styles */ "./components/Window/styles.ts").children({
    Box: _utils_1.div("Window_Box"),
    Header: _utils_1.div("Window_Header"),
    Title: _utils_1.div("Window_Title"),
    TitleText: _utils_1.div("Window_TitleText"),
    Body: _utils_1.div("Window_Body"),
    Buttons: _utils_1.div("Window_Buttons"),
    ButtonControl: _utils_1.el("button", "Window_ButtonControl"),
    ResizeBorder: _utils_1.div("Window_ResizeBorder"),
}), Box = _a.Box, Header = _a.Header, Body = _a.Body, Buttons = _a.Buttons, ButtonControl = _a.ButtonControl, Title = _a.Title, TitleText = _a.TitleText, ResizeBorder = _a.ResizeBorder;


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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
module.exports = function (Self) {
    return _utils_1.styled(Self)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\tposition: fixed;\n\t\twidth: 400rem;\n\t\theight: 400rem;\n\t\tbackground: rgba(70, 70, 70, 0.99);\n\t"], ["\n\t\tposition: fixed;\n\t\twidth: 400rem;\n\t\theight: 400rem;\n\t\tbackground: rgba(70, 70, 70, 0.99);\n\t"])));
};
module.exports.children = function (_a) {
    var Box = _a.Box, Header = _a.Header, Body = _a.Body, Buttons = _a.Buttons, ButtonControl = _a.ButtonControl, ResizeBorder = _a.ResizeBorder, Title = _a.Title, TitleText = _a.TitleText, children = tslib_1.__rest(_a, ["Box", "Header", "Body", "Buttons", "ButtonControl", "ResizeBorder", "Title", "TitleText"]);
    return tslib_1.__assign({}, children, { Box: _utils_1.styled(Box)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\ttransform: scale(", ");\n\t\t\topacity: ", ";\n\t\t\tbox-shadow: ", ";\n\t\t\ttop: 100rem;\n\t\t\tleft: 100rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.3s, opacity 0.3s/*, top 0.05s, left 0.05s, height 0.05s, width 0.05s*/;\n\t\t"], ["\n\t\t\ttransform: scale(", ");\n\t\t\topacity: ", ";\n\t\t\tbox-shadow: ", ";\n\t\t\ttop: 100rem;\n\t\t\tleft: 100rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.3s, opacity 0.3s/*, top 0.05s, left 0.05s, height 0.05s, width 0.05s*/;\n\t\t"])), function (props) { return props['isVisible'] ? '1' : '0'; }, boxOpacity, function (props) { return props['inFocus'] ? '0 0 30rem rgba(0, 0, 0, 0.5)' : '0 0 10rem rgba(0, 0, 0, 0.1)'; }), Header: _utils_1.styled(Header)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\t&:active {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t"], ["\n\t\t\twidth: 100%;\n\t\t\theight: 20rem;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t\tposition: relative;\n\t\t\t&:active {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t"]))), Body: _utils_1.styled(Body)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t"]))), Title: _utils_1.styled(Title)(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 10rem;\n\t\t\tfont-weight: 300;\n\t\t\talign-items: center;\n\t\t\tjustify-content: stretch;\n\t\t\ttext-align: ", ";\n\t\t\tpadding: 0 ", " 0 45rem;\n\t\t\tpointer-events: none;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 10rem;\n\t\t\tfont-weight: 300;\n\t\t\talign-items: center;\n\t\t\tjustify-content: stretch;\n\t\t\ttext-align: ", ";\n\t\t\tpadding: 0 ", " 0 45rem;\n\t\t\tpointer-events: none;\n\t\t"])), function (props) { return (console.log(props), props['windowWidth'] > 200 ? 'center' : 'left'); }, function (props) { return (console.log(props), props['windowWidth'] > 200 ? '45rem' : '10rem'); }), TitleText: _utils_1.styled(TitleText)(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\twidth: 100%;\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\twidth: 100%;\n\t\t"]))), Buttons: _utils_1.styled(Buttons)(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 6rem;\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t"], ["\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 6rem;\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t"]))), ButtonControl: _utils_1.styled(ButtonControl)(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n\t\t\tdisplay: block;\n\t\t\twidth: 8rem;\n\t\t\theight: 8rem;\n\t\t\tpadding: 0;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\tcursor: pointer;\n\t\t\tmargin-right: 4rem;\n\t\t\t", "\n\t\t"], ["\n\t\t\tdisplay: block;\n\t\t\twidth: 8rem;\n\t\t\theight: 8rem;\n\t\t\tpadding: 0;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 0;\n\t\t\ttransition: all 0.3s;\n\t\t\tcursor: pointer;\n\t\t\tmargin-right: 4rem;\n\t\t\t", "\n\t\t"])), buttonStyles), ResizeBorder: _utils_1.styled(ResizeBorder)(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n\t\t\tposition: absolute;\n\t\t\tfont-size: 4rem;\n\t\t\tz-index: 2;\n\t\t\tbackground: red;\n\t\t\t", ";\n\t\t"], ["\n\t\t\tposition: absolute;\n\t\t\tfont-size: 4rem;\n\t\t\tz-index: 2;\n\t\t\tbackground: red;\n\t\t\t", ";\n\t\t"])), ResizeBorderStyle) });
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var WindowContent = /** @class */ (function (_super) {
    tslib_1.__extends(WindowContent, _super);
    function WindowContent(props) {
        var _this = _super.call(this, props, "Content:" + props.contentId) || this;
        _this.componentId = '';
        _this.id = "Content:" + _this.props.contentId;
        _this.windowId = _this.props.windowId;
        return _this;
    }
    return WindowContent;
}(_utils_1.AliveReactComponent));
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
var index_1 = __webpack_require__(/*! @system/index */ "./system/index.ts");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var methods_1 = __webpack_require__(/*! ./methods */ "./components/WindowsManager/methods.ts");
var _createAction = _utils_1.createAction.bind({}, "WindowsManager");
exports.createAction = _createAction;
function getActionName(name) {
    return _createAction(name).type;
}
exports.getActionName = getActionName;
exports.actions = {
    _load: function () {
        index_1.store.dispatch(_createAction("load"));
        exports.actions.changed();
    },
    open: function (params) {
        index_1.store.dispatch(_createAction("open", { params: params }));
        exports.actions.changed();
    },
    focus: function (windowId) {
        index_1.store.dispatch(_createAction("focus", { windowId: windowId }));
        exports.actions.changed();
    },
    unfocus: function (windowId) {
        index_1.store.dispatch(_createAction("unfocus", { windowId: windowId }));
        exports.actions.changed();
    },
    setPosition: function (windowId, position) {
        index_1.store.dispatch(_createAction("setPosition", { windowId: windowId, position: position }));
    },
    show: function (windowId) {
        index_1.store.dispatch(_createAction("show", { windowId: windowId }));
        exports.actions.changed();
    },
    hide: function (windowId) {
        index_1.store.dispatch(_createAction("hide", { windowId: windowId }));
        exports.actions.changed();
    },
    close: function (windowId) {
        index_1.store.dispatch(_createAction("closing", { windowId: windowId }));
        exports.actions.hide(windowId);
        setTimeout(function () {
            index_1.store.dispatch(_createAction("close", { windowId: windowId }));
        }, 300);
        exports.actions.changed();
    },
    resize: function (windowId, size) {
        index_1.store.dispatch(_createAction("setSize", { windowId: windowId, size: size }));
    },
    changed: function () {
        index_1.store.dispatch(_createAction("changed", { list: methods_1.getList() }));
    },
    setBounds: function (windowId, bounds) {
        index_1.store.dispatch(_createAction("setBounds", { windowId: windowId, bounds: bounds }));
    },
    setSize: function (windowId, size) {
        index_1.store.dispatch(_createAction("setSize", { windowId: windowId, size: size }));
    },
    setMaximize: function (windowId, isMaximize) {
        if (isMaximize === void 0) { isMaximize = true; }
        index_1.store.dispatch(_createAction("setMaximize", { windowId: windowId, isMaximize: isMaximize }));
    },
    setMinimize: function (windowId, isMinimize) {
        if (isMinimize === void 0) { isMinimize = true; }
        index_1.store.dispatch(_createAction("setMinimize", { windowId: windowId, isMinimize: isMinimize }));
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
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var actions_1 = __webpack_require__(/*! ./actions */ "./components/WindowsManager/actions.ts");
exports.actions = actions_1.actions;
exports.getActionName = actions_1.getActionName;
var Window_1 = __webpack_require__(/*! @components/Window */ "./components/Window/index.tsx");
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
        var props = this.getWindowProps(window);
        return (React.createElement(Window_1.default, tslib_1.__assign({}, props)));
    };
    WindowsManager.prototype.componentDidMount = function () {
        actions_1.actions._load();
    };
    WindowsManager.prototype.getWindowProps = function (window) {
        var props = tslib_1.__assign({}, window, { key: window.id }, _utils_1.getWindowContent(window));
        console.log('getWindowProps', props);
        return props;
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
var window_1 = __webpack_require__(/*! @system/window */ "./system/window.ts");
var methods_1 = __webpack_require__(/*! @components/Window/methods */ "./components/Window/methods.ts");
var interfaces_1 = __webpack_require__(/*! @components/Window/interfaces */ "./components/Window/interfaces.ts");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var _interfaces_1 = __webpack_require__(/*! @interfaces */ "./interfaces/index.ts");
var index_1 = __webpack_require__(/*! @system/index */ "./system/index.ts");
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
    var windowSize = windowCalcStateSize(keySize, windowProps, contentProps);
    var windowPosition = windowProps[keyPosition];
    var contentSize = contentProps[keySize];
    switch (windowPosition) {
        case 'center':
        case 'middle':
        case _interfaces_1.IPositionRelativeX.center:
        case _interfaces_1.IPositionRelativeY.center:
        case _interfaces_1.IPositionRelativeX.middle:
        case _interfaces_1.IPositionRelativeY.middle:
            windowPosition = '50%';
            break;
        case _interfaces_1.IPositionRelativeX.left:
        case _interfaces_1.IPositionRelativeY.top:
            windowPosition = '0%';
            break;
        case _interfaces_1.IPositionRelativeX.right:
        case _interfaces_1.IPositionRelativeY.bottom:
            windowPosition = '100%';
            break;
    }
    if (isPercent.test(windowPosition) || windowPosition instanceof _interfaces_1.Percent) {
        windowPosition = parsePercent(windowPosition.toString()) * (contentSize - windowSize) || 0;
    }
    else {
        windowPosition = parseFloat(windowPosition) || 0;
    }
    windowPosition += contentProps[keyPosition];
    result[keySize] = _utils_1.round(windowSize, 3);
    result[keyPosition] = _utils_1.round(windowPosition, 3);
    return result;
}
function windowCalcStateSize(keySize, windowProps, contentProps) {
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
    return index_1.store.getState().WindowsManager.opened.filter(function (window) { return methods_1.isOpened(window); });
}
exports.getList = getList;
function constructorOptions(options) {
    return tslib_1.__assign({}, interfaces_1.defaultWindowConstructorProps, { id: _utils_1.uid() }, options, windowCalcState(options));
}
exports.constructorOptions = constructorOptions;
function getWindowMaximizedSize() {
    var contentState = window_1.getContentState();
    return {
        width: contentState.width,
        height: contentState.height,
    };
}
exports.getWindowMaximizedSize = getWindowMaximizedSize;


/***/ }),

/***/ "./components/WindowsManager/reducer.ts":
/*!**********************************************!*\
  !*** ./components/WindowsManager/reducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var reducerMethods_1 = __webpack_require__(/*! ./reducerMethods */ "./components/WindowsManager/reducerMethods.ts");
function reducer(state, action) {
    if (state === void 0) { state = {
        opened: []
    }; }
    var type = "";
    if (!(type = _utils_1.checkAction("WindowsManager", action)))
        return state;
    var reducer = new reducerMethods_1.ReducerMethods(state, action);
    reducer.call(type, state, action);
    return reducer.getState();
}
exports.reducer = reducer;


/***/ }),

/***/ "./components/WindowsManager/reducerMethods.ts":
/*!*****************************************************!*\
  !*** ./components/WindowsManager/reducerMethods.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var Window_1 = __webpack_require__(/*! @components/Window */ "./components/Window/index.tsx");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var methods_1 = __webpack_require__(/*! ./methods */ "./components/WindowsManager/methods.ts");
var methods_2 = __webpack_require__(/*! ./methods */ "./components/WindowsManager/methods.ts");
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
        this.state = tslib_1.__assign({}, this.state, obj);
        _utils_1.stateSave("WindowsManager", this.state);
    };
    ReducerMethods.prototype.open = function () {
        var windowProps = methods_2.constructorOptions(this.action.params.options);
        var newWindow = tslib_1.__assign({}, Window_1.defaultWindowProps, windowProps, { content: this.action.content });
        this.setState({
            opened: this.state.opened.concat(newWindow)
        });
        this.action.windowId = newWindow.id;
        this.focus();
        if (_utils_1.isFunction(this.action.callback)) {
            this.action.callback(this.action.id);
        }
    };
    ReducerMethods.prototype.load = function () {
        this.setState(_utils_1.stateLoad("WindowsManager", {
            opened: []
        }));
    };
    ReducerMethods.prototype.focus = function () {
        this.setState({
            opened: methods_1.windowFocus(this.state.opened, this.action.windowId),
        });
    };
    ReducerMethods.prototype.unfocus = function () {
        this.setState({
            opened: methods_1.windowFocus(this.state.opened, this.action.windowId, false),
        });
    };
    ReducerMethods.prototype.show = function () {
        this.setState({
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                return tslib_1.__assign({}, window, { state: window.toState || Window_1.windowStates.Normal });
            })
        });
    };
    ReducerMethods.prototype.hide = function () {
        this.setState({
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                return tslib_1.__assign({}, window, { state: window.state | Window_1.windowStates.Minimized });
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
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                window = tslib_1.__assign({}, window);
                window.state = window.state | Window_1.windowStates.Closing;
                return window;
            })
        });
    };
    ReducerMethods.prototype.setPosition = function () {
        var _this = this;
        this.setState({
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                var windowBoundsManager = new Window_1.BoundsManager(window);
                windowBoundsManager.setPosition(_this.action.position);
                return tslib_1.__assign({}, window, windowBoundsManager.getState());
            })
        });
    };
    ReducerMethods.prototype.setSize = function () {
        var _this = this;
        this.setState({
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                var windowBoundsManager = new Window_1.BoundsManager(window);
                windowBoundsManager.setSize(_this.action.size);
                return tslib_1.__assign({}, window, _this.action.size);
            })
        });
    };
    ReducerMethods.prototype.setBounds = function () {
        var _this = this;
        this.setState({
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                var windowBoundsManager = new Window_1.BoundsManager(window);
                windowBoundsManager.setBounds(_this.action.bounds);
                return tslib_1.__assign({}, window, windowBoundsManager.getState());
            })
        });
    };
    ReducerMethods.prototype.setMaximize = function () {
        var _this = this;
        this.setState({
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                return tslib_1.__assign({}, window, { isMaximize: _this.action.isMaximize });
            })
        });
    };
    ReducerMethods.prototype.setMinimize = function () {
        var _this = this;
        this.setState({
            opened: methods_1.windowMap(this.state.opened, this.action.windowId, function (window) {
                return tslib_1.__assign({}, window, { isMinimize: _this.action.isMinimize });
            })
        });
    };
    return ReducerMethods;
}());
exports.ReducerMethods = ReducerMethods;


/***/ })

}]);
//# sourceMappingURL=components.js.map