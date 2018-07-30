(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/utils"],{

/***/ "./utils/AliveReactComponent.ts":
/*!**************************************!*\
  !*** ./utils/AliveReactComponent.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var _1 = __webpack_require__(/*! ./ */ "./utils/index.tsx");
var AliveReactComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AliveReactComponent, _super);
    function AliveReactComponent(props, componentId) {
        var _this = _super.call(this, props) || this;
        _this.componentId = componentId || _this.props.componentId || ('AliveComponent.' + _this.props.id);
        _this.state = _this.load(_this.props);
        _this.on('componentDidMount', _this.save.bind(_this));
        _this.on('componentDidUpdate', _this.save.bind(_this));
        _this.on('componentWillUnmount', _this.unload.bind(_this));
        return _this;
    }
    AliveReactComponent.prototype.save = function () {
        if (!this.componentId)
            return;
        _utils_1.stateSave(this.componentId, this.state);
    };
    AliveReactComponent.prototype.load = function (defaultState) {
        if (!this.componentId)
            return defaultState;
        return _utils_1.stateLoad(this.componentId, defaultState);
    };
    AliveReactComponent.prototype.unload = function () {
        if (!this.componentId)
            return;
        _utils_1.stateRemove(this.componentId);
    };
    return AliveReactComponent;
}(_1.ReactComponentWithEventEmmiter));
exports.AliveReactComponent = AliveReactComponent;
// const ConnectedAliveReactComponent = connect(function mapStateToProps(){
// }, function mapDispatchToProps(dispatch){
// })(AliveReactComponent);


/***/ }),

/***/ "./utils/ReactComponentWithEventEmmiter.ts":
/*!*************************************************!*\
  !*** ./utils/ReactComponentWithEventEmmiter.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var EventEmitter = __webpack_require__(/*! events */ "../node_modules/events/events.js");
var _utils_1 = __webpack_require__(/*! @utils */ "./utils/index.tsx");
var ReactComponentWithEventEmmiter = /** @class */ (function (_super) {
    tslib_1.__extends(ReactComponentWithEventEmmiter, _super);
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
        _this.eventEmmiter = new EventEmitter();
        _this.eventEmmiterResults = {};
        _this.wrapMethodList.forEach((_this.wrapMethod).bind(_this));
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
            return [result1, result2].reduce((function (lastValue, currentValue) { return !!(lastValue && currentValue); }), true);
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
        var resultKey = _utils_1.uid();
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
    ReactComponentWithEventEmmiter.prototype.shouldComponentUpdate = function () {
        return (this.emit('shouldComponentUpdate')
            .reduce((function (lastValue, currentValue) { return !!(lastValue && currentValue); }), true));
    };
    return ReactComponentWithEventEmmiter;
}(React.Component));
exports.ReactComponentWithEventEmmiter = ReactComponentWithEventEmmiter;


/***/ }),

/***/ "./utils/ReducersManager.ts":
/*!**********************************!*\
  !*** ./utils/ReducersManager.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
            if (reducer.namespace) {
                state[reducer.namespace] = _state;
            }
            else {
                state = tslib_1.__assign({}, state, _state);
            }
        });
        this.inReducer = false;
        return state;
    };
    return ReducersManager;
}());
exports.ReducersManager = ReducersManager;


/***/ }),

/***/ "./utils/allowProps.tsx":
/*!******************************!*\
  !*** ./utils/allowProps.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
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
];


/***/ }),

/***/ "./utils/index.tsx":
/*!*************************!*\
  !*** ./utils/index.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var allowProps_1 = __webpack_require__(/*! ./allowProps */ "./utils/allowProps.tsx");
var storage_1 = __webpack_require__(/*! ./storage */ "./utils/storage.ts");
tslib_1.__exportStar(__webpack_require__(/*! ./ReactComponentWithEventEmmiter */ "./utils/ReactComponentWithEventEmmiter.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./AliveReactComponent */ "./utils/AliveReactComponent.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ReducersManager */ "./utils/ReducersManager.ts"), exports);
function el(tagName, name, _props) {
    var result = function (props) {
        var props = tslib_1.__assign({}, props, _props);
        var _attrs = attrs(props);
        return React.createElement(tagName, _attrs);
    };
    Object.defineProperty(result, "name", { value: name });
    return result;
}
exports.el = el;
exports.div = el.bind({}, 'div');
var styled_1 = __webpack_require__(/*! ./styled */ "./utils/styled.ts");
exports.styled = styled_1.default;
var styled_2 = __webpack_require__(/*! ../mixins/styled */ "./mixins/styled.ts");
exports._styled = styled_2.default;
function repeat(count, handler) {
    for (var i = 0; i < count; i++)
        handler(i);
}
exports.repeat = repeat;
function repeatJoin(count, handler) {
    var result = [];
    for (var i = 0; i < count; i++)
        result.push(handler(i));
    return result;
}
exports.repeatJoin = repeatJoin;
function attrs(props) {
    var attrs = {};
    for (var key in props) {
        if (allowProps_1.default.indexOf(key) != -1) {
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
exports.attrs = attrs;
function checkAction(namespace, action) {
    if (action.type.indexOf(namespace) === 0) {
        return action.type.replace(new RegExp(namespace + ".?"), '');
    }
    return false;
}
exports.checkAction = checkAction;
function createAction(namespace, methodName, props) {
    if (props === void 0) { props = {}; }
    return tslib_1.__assign({}, props, { type: namespace + "." + methodName });
}
exports.createAction = createAction;
function random(arg1, arg2) {
    if (arg2 === void 0) { arg2 = 0; }
    var _a = {
        min: Math.min(arg1, arg2),
        max: Math.max(arg1, arg2),
    }, min = _a.min, max = _a.max;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.random = random;
exports.uid = (function () {
    var lastIndex = 0;
    var dateLengthPrefix = "00000000000000";
    var indexPrefix = "00000000000000";
    return function () {
        var _date = (dateLengthPrefix + Date.now()).slice(-dateLengthPrefix.length);
        var _index = (indexPrefix + (lastIndex++)).slice(-indexPrefix.length);
        return _date + '.' + _index;
    };
})();
var contents = {};
function getContent(content, contentId) {
    var contentState = contentId ? (stateLoad("Content." + contentId)) : {};
    if (typeof content == 'string' && content.indexOf("@required:") === 0) {
        content = contents[content.replace("@required:", "")];
    }
    return { content: content, contentState: contentState };
}
exports.getContent = getContent;
function getWindowContent(window) {
    var windowId = window.id;
    var windowContent = window.content;
    var contentId = '';
    if (typeof windowContent == 'string' && windowContent.indexOf("@required:") === 0) {
        var contentId = windowContent.replace("@required:", "");
        var contentState = contentId ? (stateLoad("Content." + windowId + ':' + contentId)) : {};
        windowContent = contents[contentId];
    }
    return { content: windowContent, contentState: contentState, contentId: contentId };
}
exports.getWindowContent = getWindowContent;
function requiredContent(contentId, content) {
    contents[contentId] = content;
    return "@required:" + contentId;
}
exports.requiredContent = requiredContent;
function stateSave(stateName, state) {
    storage_1.default.set('States.' + stateName, JSON.stringify(state));
}
exports.stateSave = stateSave;
function stateRemove(stateName) {
    storage_1.default.remove('States.' + stateName);
}
exports.stateRemove = stateRemove;
function stateLoad(stateName, _default) {
    if (_default === void 0) { _default = {}; }
    var parsed = JSON.parse(storage_1.default.get('States.' + stateName) || "{}");
    return tslib_1.__assign({}, _default, parsed);
}
exports.stateLoad = stateLoad;
function round(value, afterDots) {
    if (afterDots === void 0) { afterDots = 0; }
    afterDots = Math.pow(10, afterDots);
    return Math.round(value * afterDots) / afterDots;
}
exports.round = round;
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
exports.mapToArray = mapToArray;
function positionToSize(pos) {
    return {
        width: pos.x,
        height: pos.y,
    };
}
exports.positionToSize = positionToSize;
function sizeToPosition(pos) {
    return {
        x: pos.width,
        y: pos.height,
    };
}
exports.sizeToPosition = sizeToPosition;
function sortByKey(key) {
    return function (a, b) {
        if (a[key] > b[key])
            return 1;
        if (a[key] < b[key])
            return -1;
        return 0;
    };
}
exports.sortByKey = sortByKey;
function keysToArray(obj) {
    var result = [];
    for (var key in obj) {
        if (obj[key]) {
            result.push(key);
        }
    }
    return result;
}
exports.keysToArray = keysToArray;
function firstLetterUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.firstLetterUppercase = firstLetterUppercase;
function RenderElement(ElementHandler, self) {
    return function (props) {
        return ElementHandler.call(self, props);
    };
}
exports.RenderElement = RenderElement;
function isFunction(func) {
    return typeof func == 'function';
}
exports.isFunction = isFunction;


/***/ }),

/***/ "./utils/storage.ts":
/*!**************************!*\
  !*** ./utils/storage.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    get: function (name) { return localStorage.getItem(name); },
    set: function (name, value) { return localStorage.setItem(name, value); },
    remove: function (name) { return localStorage.removeItem(name); },
};


/***/ }),

/***/ "./utils/styled.ts":
/*!*************************!*\
  !*** ./utils/styled.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");
exports.default = styled_components_1.default;


/***/ })

}]);
//# sourceMappingURL=utils.js.map