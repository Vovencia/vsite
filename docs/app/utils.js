(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/utils"],{

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
var styled_components_1 = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");
exports.styled = styled_components_1.default;
var styled_1 = __webpack_require__(/*! ../mixins/styled */ "./mixins/styled.ts");
exports._styled = styled_1.default;
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
// export function map<T>(obj: Array<T> | object, handler: (element: T, index: number | string, obj: Array<T> | object) => boolean ): Array<T> | object {
// 	if( Array.isArray(obj) ){
// 		return obj.map(handler);
// 	} else {
// 		var result = {}
// 	}
// }


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


/***/ })

}]);
//# sourceMappingURL=utils.js.map