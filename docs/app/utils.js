(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/utils"],{

/***/ "./utils/AliveReactComponent.ts":
/*!**************************************!*\
  !*** ./utils/AliveReactComponent.ts ***!
  \**************************************/
/*! exports provided: AliveReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AliveReactComponent", function() { return AliveReactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");



var AliveReactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AliveReactComponent, _super);
    function AliveReactComponent(props, componentId) {
        var _this = _super.call(this, props) || this;
        _this.aliveReactComponentId = componentId || _this.props.componentId || ('AliveComponent.' + _this.props.id);
        _this.state = _this.load(_this.props);
        _this.on('componentDidMount', _this.save.bind(_this));
        _this.on('componentDidUpdate', _this.save.bind(_this));
        _this.on('componentWillUnmount', _this.unload.bind(_this));
        return _this;
    }
    AliveReactComponent.prototype.save = function () {
        if (!this.aliveReactComponentId)
            return;
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["stateSave"])(this.aliveReactComponentId, this.state);
    };
    AliveReactComponent.prototype.load = function (defaultState) {
        if (!this.aliveReactComponentId)
            return defaultState;
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["stateLoad"])(this.aliveReactComponentId, defaultState);
    };
    AliveReactComponent.prototype.unload = function () {
        if (!this.aliveReactComponentId)
            return;
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["stateRemove"])(this.aliveReactComponentId);
    };
    return AliveReactComponent;
}(_utils__WEBPACK_IMPORTED_MODULE_1__["ReactComponentWithEventEmmiter"]));



/***/ }),

/***/ "./utils/ReactComponentWithEventEmmiter.ts":
/*!*************************************************!*\
  !*** ./utils/ReactComponentWithEventEmmiter.ts ***!
  \*************************************************/
/*! exports provided: ReactComponentWithEventEmmiter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponentWithEventEmmiter", function() { return ReactComponentWithEventEmmiter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");




var ReactComponentWithEventEmmiter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReactComponentWithEventEmmiter, _super);
    function ReactComponentWithEventEmmiter(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapMethodList = [
            'componentDidMount',
            'componentDidCatch',
            'componentDidUpdate',
            'componentWillMount',
            'componentWillReceiveProps',
            'componentWillUnmount',
            'componentWillUpdate',
            'shouldComponentUpdate'
        ];
        _this.eventEmmiter = new events__WEBPACK_IMPORTED_MODULE_2__();
        _this.eventEmmiterResults = {};
        _this.wrapMethodList.forEach((_this.wrapMethod).bind(_this));
        _this.on('shouldComponentUpdate', function (nextProps, nextState) {
            if (_this.props == nextProps && _this.state == nextState)
                return false;
            var nextPropsKeys = Object.keys(nextProps);
            var propsKeys = Object.keys(_this.props);
            var nextStateKeys = Object.keys(nextState);
            var stateKeys = Object.keys(_this.state);
            if (nextPropsKeys.length != propsKeys.length)
                return true;
            if (nextStateKeys.length != stateKeys.length)
                return true;
            for (var _i = 0, nextPropsKeys_1 = nextPropsKeys; _i < nextPropsKeys_1.length; _i++) {
                var key = nextPropsKeys_1[_i];
                if (_this.props[key] != nextProps[key])
                    return true;
            }
            for (var _a = 0, nextStateKeys_1 = nextStateKeys; _a < nextStateKeys_1.length; _a++) {
                var key = nextStateKeys_1[_a];
                if (_this.state[key] != nextState[key])
                    return true;
            }
            return false;
        });
        return _this;
    }
    ReactComponentWithEventEmmiter.prototype.wrapMethod = function (methodName) {
        if (this[methodName] == ReactComponentWithEventEmmiter.prototype[methodName])
            return;
        var oldMethod = this[methodName];
        this[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result1 = ReactComponentWithEventEmmiter.prototype[methodName].apply(this, args);
            var result2 = oldMethod.apply(this, args);
            if (methodName != 'shouldComponentUpdate')
                return result2;
            return [result1, result2].reduce((function (lastValue, currentValue) { return !!(lastValue || currentValue); }), false);
        };
    };
    ReactComponentWithEventEmmiter.prototype.on = function (event, listener) {
        var _this = this;
        this.eventEmmiter.on(event, function (resultKey) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            _this.eventEmmiterResults[resultKey].push(listener.apply(void 0, args));
        });
    };
    ReactComponentWithEventEmmiter.prototype.one = function (event, listener) {
        var _this = this;
        this.eventEmmiter.once(event, function (resultKey) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            _this.eventEmmiterResults[resultKey].push(listener.apply(void 0, args));
        });
    };
    ReactComponentWithEventEmmiter.prototype.off = function (event, listener) {
        var _this = this;
        this.eventEmmiter.off(event, function (resultKey) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            _this.eventEmmiterResults[resultKey].push(listener.apply(void 0, args));
        });
    };
    ReactComponentWithEventEmmiter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        var resultKey = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uid"])();
        this.eventEmmiterResults[resultKey] = [];
        (_a = this.eventEmmiter).emit.apply(_a, [event, resultKey].concat(args));
        var results = this.eventEmmiterResults[resultKey];
        delete this.eventEmmiterResults[resultKey];
        return results;
    };
    ReactComponentWithEventEmmiter.prototype.componentDidMount = function () {
        this.emit('componentDidMount');
    };
    ReactComponentWithEventEmmiter.prototype.componentDidCatch = function () {
        this.emit('componentDidCatch');
    };
    ReactComponentWithEventEmmiter.prototype.componentDidUpdate = function () {
        this.emit('componentDidUpdate');
    };
    ReactComponentWithEventEmmiter.prototype.componentWillMount = function () {
        this.emit('componentWillMount');
    };
    ReactComponentWithEventEmmiter.prototype.componentWillReceiveProps = function () {
        this.emit('componentWillReceiveProps');
    };
    ReactComponentWithEventEmmiter.prototype.componentWillUnmount = function () {
        this.emit('componentWillUnmount');
    };
    ReactComponentWithEventEmmiter.prototype.componentWillUpdate = function () {
        this.emit('componentWillUpdate');
    };
    ReactComponentWithEventEmmiter.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.emit('shouldComponentUpdate', nextProps, nextState)
            .reduce((function (lastValue, currentValue) { return !!(lastValue || currentValue); }), false));
    };
    return ReactComponentWithEventEmmiter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./utils/ReducersManager.ts":
/*!**********************************!*\
  !*** ./utils/ReducersManager.ts ***!
  \**********************************/
/*! exports provided: ReducersManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducersManager", function() { return ReducersManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var ReducersManager = /** @class */ (function () {
    function ReducersManager() {
        this.reducers = [];
        this.inReducer = false;
        this.mainReducer = this.mainReducer.bind(this);
    }
    ReducersManager.prototype.isInReducer = function () {
        return this.inReducer;
    };
    ReducersManager.prototype.addReducer = function (reducer) {
        this.reducers.push({
            handler: reducer,
        });
    };
    ReducersManager.prototype.addLocalReducer = function (namespace, reducer) {
        this.reducers.push({
            handler: reducer,
            namespace: namespace,
        });
    };
    ReducersManager.prototype.getMainReducer = function () { return this.mainReducer; };
    ReducersManager.prototype.getCurrentState = function () {
        return this.currentState;
    };
    ReducersManager.prototype.getGlobalState = function () {
        return this.globalState;
    };
    ReducersManager.prototype.mainReducer = function (state, action) {
        var _this = this;
        this.inReducer = true;
        this.reducers.forEach(function (reducer) {
            var _state = state || {};
            if (reducer.namespace) {
                _state = _state[reducer.namespace];
            }
            _this.currentState = _state;
            _this.globalState = state;
            _state = reducer.handler(_state, action);
            if (!state)
                state = {};
            if (reducer.namespace) {
                state[reducer.namespace] = _state;
            }
            else {
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, _state);
            }
        });
        this.inReducer = false;
        return state;
    };
    return ReducersManager;
}());



/***/ }),

/***/ "./utils/action.ts":
/*!*************************!*\
  !*** ./utils/action.ts ***!
  \*************************/
/*! exports provided: checkAction, createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAction", function() { return checkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

function checkAction(namespace, action) {
    if (action.type.indexOf(namespace) === 0) {
        return action.type.replace(new RegExp(namespace + ".?"), '');
    }
    return false;
}
function createAction(namespace, methodName, props) {
    if (props === void 0) { props = {}; }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { type: namespace + "." + methodName });
}


/***/ }),

/***/ "./utils/allowProps.tsx":
/*!******************************!*\
  !*** ./utils/allowProps.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    "accept",
    "accept-charset",
    "accesskey",
    "action",
    "align",
    "alt",
    "async",
    "autocapitalize",
    "autocomplete",
    "autofocus",
    "autoplay",
    "bgcolor",
    "border",
    "buffered",
    "challenge",
    "charset",
    "checked",
    "cite",
    "class",
    "code",
    "codebase",
    "color",
    "cols",
    "colspan",
    "content",
    "contenteditable",
    "contextmenu",
    "controls",
    "coords",
    "crossorigin",
    "data",
    "data-*",
    "datetime",
    "default",
    "defer",
    "dir",
    "dirname",
    "disabled",
    "download",
    "draggable",
    "dropzone",
    "enctype",
    "for",
    "form",
    "formaction",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "http-equiv",
    "icon",
    "id",
    "integrity",
    "ismap",
    "itemprop",
    "keytype",
    "kind",
    "label",
    "lang",
    "language",
    "list",
    "loop",
    "low",
    "manifest",
    "max",
    "maxlength",
    "minlength",
    "media",
    "method",
    "min",
    "multiple",
    "muted",
    "name",
    "novalidate",
    "open",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "poster",
    "preload",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "reversed",
    "rows",
    "rowspan",
    "sandbox",
    "scope",
    "scoped",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "spellcheck",
    "src",
    "srcdoc",
    "srclang",
    "srcset",
    "start",
    "step",
    "style",
    "summary",
    "tabindex",
    "target",
    "title",
    "translate",
    "type",
    "usemap",
    "value",
    "width",
    "wrap",
    "children",
    "className",
]);


/***/ }),

/***/ "./utils/funcs.ts":
/*!************************!*\
  !*** ./utils/funcs.ts ***!
  \************************/
/*! exports provided: repeat, repeatJoin, attrs, random, uid, round, mapToArray, positionToSize, sizeToPosition, sortByKey, keysToArray, firstLetterUppercase, RenderElement, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatJoin", function() { return repeatJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToArray", function() { return mapToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionToSize", function() { return positionToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeToPosition", function() { return sizeToPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByKey", function() { return sortByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keysToArray", function() { return keysToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstLetterUppercase", function() { return firstLetterUppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderElement", function() { return RenderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony import */ var _allowProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowProps */ "./utils/allowProps.tsx");

function repeat(count, handler) {
    for (var i = 0; i < count; i++)
        handler(i);
}
function repeatJoin(count, handler) {
    var result = [];
    for (var i = 0; i < count; i++)
        result.push(handler(i));
    return result;
}
function attrs(props) {
    var attrs = {};
    for (var key in props) {
        if (_allowProps__WEBPACK_IMPORTED_MODULE_0__["default"].indexOf(key) != -1) {
            attrs[key] = props[key];
            continue;
        }
        if (key == 'elementRef') {
            attrs.ref = props.elementRef;
            continue;
        }
        if (key.indexOf('data-') == 0) {
            attrs[key] = props[key];
            continue;
        }
        if (key.indexOf('on') == 0) {
            attrs[key] = props[key];
            continue;
        }
    }
    return attrs;
}
function random(arg1, arg2) {
    if (arg2 === void 0) { arg2 = 0; }
    var _a = {
        min: Math.min(arg1, arg2),
        max: Math.max(arg1, arg2),
    }, min = _a.min, max = _a.max;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var uid = (function () {
    var lastIndex = 0;
    var dateLengthPrefix = "00000000000000";
    var indexPrefix = "00000000000000";
    return function () {
        var _date = (dateLengthPrefix + Date.now()).slice(-dateLengthPrefix.length);
        var _index = (indexPrefix + (lastIndex++)).slice(-indexPrefix.length);
        return _date + '.' + _index;
    };
})();
function round(value, afterDots) {
    if (afterDots === void 0) { afterDots = 0; }
    afterDots = Math.pow(10, afterDots);
    return Math.round(value * afterDots) / afterDots;
}
function mapToArray(obj, handler) {
    if (Array.isArray(obj)) {
        return obj.map(handler);
    }
    var result = [];
    for (var key in obj) {
        result.push(handler(obj[key], key, obj));
    }
    return result;
}
function positionToSize(pos) {
    return {
        width: pos.x,
        height: pos.y,
    };
}
function sizeToPosition(pos) {
    return {
        x: pos.width,
        y: pos.height,
    };
}
function sortByKey(key) {
    return function (a, b) {
        if (a[key] > b[key])
            return 1;
        if (a[key] < b[key])
            return -1;
        return 0;
    };
}
function keysToArray(obj) {
    var result = [];
    for (var key in obj) {
        if (obj[key]) {
            result.push(key);
        }
    }
    return result;
}
function firstLetterUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function RenderElement(ElementHandler, self) {
    return function (props) {
        return ElementHandler.call(self, props);
    };
}
function isFunction(func) {
    return typeof func == 'function';
}


/***/ }),

/***/ "./utils/index.tsx":
/*!*************************!*\
  !*** ./utils/index.tsx ***!
  \*************************/
/*! exports provided: promiseFunction, isPromiseFunction, promiseFunctionCall, _styled, checkAction, createAction, ReactComponentWithEventEmmiter, AliveReactComponent, ReducersManager, promiseDelay, repeat, repeatJoin, attrs, random, uid, round, mapToArray, positionToSize, sizeToPosition, sortByKey, keysToArray, firstLetterUppercase, RenderElement, isFunction, stateSave, stateRemove, stateLoad, styled, el, div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAction", function() { return checkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ReactComponentWithEventEmmiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactComponentWithEventEmmiter */ "./utils/ReactComponentWithEventEmmiter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactComponentWithEventEmmiter", function() { return _ReactComponentWithEventEmmiter__WEBPACK_IMPORTED_MODULE_1__["ReactComponentWithEventEmmiter"]; });

/* harmony import */ var _AliveReactComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AliveReactComponent */ "./utils/AliveReactComponent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AliveReactComponent", function() { return _AliveReactComponent__WEBPACK_IMPORTED_MODULE_2__["AliveReactComponent"]; });

/* harmony import */ var _ReducersManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReducersManager */ "./utils/ReducersManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReducersManager", function() { return _ReducersManager__WEBPACK_IMPORTED_MODULE_3__["ReducersManager"]; });

/* harmony import */ var _promiseDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promiseDelay */ "./utils/promiseDelay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseDelay", function() { return _promiseDelay__WEBPACK_IMPORTED_MODULE_4__["promiseDelay"]; });

/* harmony import */ var _promiseFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promiseFunction */ "./utils/promiseFunction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseFunction", function() { return _promiseFunction__WEBPACK_IMPORTED_MODULE_5__["promiseFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromiseFunction", function() { return _promiseFunction__WEBPACK_IMPORTED_MODULE_5__["isPromiseFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseFunctionCall", function() { return _promiseFunction__WEBPACK_IMPORTED_MODULE_5__["promiseFunctionCall"]; });

/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./funcs */ "./utils/funcs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatJoin", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["repeatJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["attrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "round", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["round"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapToArray", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["mapToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionToSize", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["positionToSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeToPosition", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["sizeToPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortByKey", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["sortByKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keysToArray", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["keysToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstLetterUppercase", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["firstLetterUppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderElement", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["RenderElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _funcs__WEBPACK_IMPORTED_MODULE_6__["isFunction"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ "./utils/state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateSave", function() { return _state__WEBPACK_IMPORTED_MODULE_7__["stateSave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateRemove", function() { return _state__WEBPACK_IMPORTED_MODULE_7__["stateRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateLoad", function() { return _state__WEBPACK_IMPORTED_MODULE_7__["stateLoad"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action */ "./utils/action.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ "./utils/styled.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_9__["styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "el", function() { return _styled__WEBPACK_IMPORTED_MODULE_9__["el"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "div", function() { return _styled__WEBPACK_IMPORTED_MODULE_9__["div"]; });

/* harmony import */ var _mixins_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/styled */ "./mixins/styled.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_styled", function() { return _mixins_styled__WEBPACK_IMPORTED_MODULE_10__["default"]; });












function checkAction(namespace, action) {
    if (action.type.indexOf(namespace) === 0) {
        return action.type.replace(new RegExp(namespace + ".?"), '');
    }
    return false;
}
function createAction(namespace, methodName, props) {
    if (props === void 0) { props = {}; }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { type: namespace + "." + methodName });
}
// var contents = {};
// export function getContent(content, contentId?: string){
// 	var contentState = contentId ? (stateLoad("Content." + contentId)) : {};
// 	if( typeof content == 'string' && content.indexOf("@required:") === 0 ){
// 		content = contents[content.replace("@required:", "")];
// 	}
// 	return {content, contentState};
// }
// export function getWindowContent(window) {
// 	var windowId = window.id;
// 	var windowContent = window.content;
// 	var contentId = '';
// 	if( typeof windowContent == 'string' && windowContent.indexOf("@required:") === 0 ){
// 		var contentId = windowContent.replace("@required:", "");
// 		var contentState = contentId ? (stateLoad("Content." + windowId + ':' + contentId)) : {};
// 		windowContent = contents[contentId];
// 	}
// 	return {content: windowContent, contentState, contentId: contentId};
// }
// export function requiredContent(contentId, content){
// 	contents[contentId] = content;
// 	return "@required:" + contentId;
// }
// export function stateSave(stateName, state){
// 	storage.set('States.' + stateName, JSON.stringify(state));
// }
// export function stateRemove(stateName){
// 	storage.remove('States.' + stateName);
// }
// export function stateLoad<T>(stateName, _default = {}) {
// 	var parsed = JSON.parse(storage.get('States.' + stateName) || "{}");
// 	return {..._default, ...parsed};
// }


/***/ }),

/***/ "./utils/promiseDelay.ts":
/*!*******************************!*\
  !*** ./utils/promiseDelay.ts ***!
  \*******************************/
/*! exports provided: promiseDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseDelay", function() { return promiseDelay; });
function promiseDelay(delay) {
    if (delay === void 0) { delay = 1; }
    return function (input) {
        return new Promise(function (resolve) { return setTimeout(function () { resolve(input); }, delay); });
    };
}


/***/ }),

/***/ "./utils/promiseFunction.ts":
/*!**********************************!*\
  !*** ./utils/promiseFunction.ts ***!
  \**********************************/
/*! exports provided: promiseFunction, isPromiseFunction, promiseFunctionCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseFunction", function() { return promiseFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseFunction", function() { return isPromiseFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseFunctionCall", function() { return promiseFunctionCall; });
function promiseFunction(func) {
    func.isPromiseFunction = true;
    return func;
}
function isPromiseFunction(func) {
    return !!func.isPromiseFunction;
}
function promiseFunctionCall(func) {
    return func();
}


/***/ }),

/***/ "./utils/state.ts":
/*!************************!*\
  !*** ./utils/state.ts ***!
  \************************/
/*! exports provided: stateSave, stateRemove, stateLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateSave", function() { return stateSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateRemove", function() { return stateRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateLoad", function() { return stateLoad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./utils/storage.ts");


function stateSave(stateName, state) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].set('States.' + stateName, JSON.stringify(state));
}
function stateRemove(stateName) {
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].remove('States.' + stateName);
}
function stateLoad(stateName, _default) {
    if (_default === void 0) { _default = {}; }
    var parsed = JSON.parse(_storage__WEBPACK_IMPORTED_MODULE_1__["default"].get('States.' + stateName) || "{}");
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _default, parsed);
}


/***/ }),

/***/ "./utils/storage.ts":
/*!**************************!*\
  !*** ./utils/storage.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    get: function (name) { return localStorage.getItem(name); },
    set: function (name, value) { return localStorage.setItem(name, value); },
    remove: function (name) { return localStorage.removeItem(name); },
});


/***/ }),

/***/ "./utils/styled.ts":
/*!*************************!*\
  !*** ./utils/styled.ts ***!
  \*************************/
/*! exports provided: styled, el, div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "el", function() { return el; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled_components__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcs */ "./utils/funcs.ts");





function el(tagName, name, _props) {
    var result = function (props) {
        var props = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, _props);
        var _attrs = Object(_funcs__WEBPACK_IMPORTED_MODULE_3__["attrs"])(props);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](tagName, _attrs);
    };
    Object.defineProperty(result, "name", { value: name });
    return result;
}
var div = el.bind({}, 'div');


/***/ })

}]);
//# sourceMappingURL=utils.js.map