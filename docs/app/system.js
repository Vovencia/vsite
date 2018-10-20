(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/system"],{

/***/ "../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js?!./system/index.styl":
/*!**********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/stylus-loader??ref--5-2!./system/index.styl ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700&subset=cyrillic);", ""]);

// module
exports.push([module.i, "html,\nbody {\n  padding: 0;\n  margin: 0;\n}\nhtml {\n  font-family: 'Roboto', Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;\n  font-size: 1px;\n  line-height: 1;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  background: #777 url(" + escape(__webpack_require__(/*! @assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg */ "./assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg")) + ") center no-repeat;\n  background-size: cover;\n}\nbody {\n  width: 100%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-size: 16rem;\n}\n#App {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n*,\n*:before,\n*:after {\n  box-sizing: padding-box;\n  box-sizing: border-box;\n}\n*::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  cursor: none;\n}\n*::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  cursor: none;\n}\n*::-webkit-scrollbar-thumb {\n  background: #888;\n  cursor: none;\n}\n*::-webkit-scrollbar-thumb:hover {\n  background: #555;\n  cursor: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./system/contentStore.ts":
/*!********************************!*\
  !*** ./system/contentStore.ts ***!
  \********************************/
/*! exports provided: add, get, getContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
/* harmony import */ var _newError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newError */ "./system/newError.ts");

var contents = {};
var contentPrefix = "@contentStore:";
function add(contentName, content) {
    if (contents[contentName]) {
        return Object(_newError__WEBPACK_IMPORTED_MODULE_0__["newError"])('Content with name "' + contentName + '" already exists');
    }
    contents[contentName] = content;
    return contentPrefix + contentName;
}
function get(contentName) {
    return contents[contentName];
}
function getContent(contentRequest) {
    if (typeof contentRequest != 'string')
        return contentRequest;
    if (contentRequest.indexOf(contentPrefix) !== 0)
        return contentRequest;
    return get(contentRequest.replace(contentPrefix, ""));
}


/***/ }),

/***/ "./system/index.styl":
/*!***************************!*\
  !*** ./system/index.styl ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/stylus-loader??ref--5-2!./index.styl */ "../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js?!./system/index.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./system/index.ts":
/*!*************************!*\
  !*** ./system/index.ts ***!
  \*************************/
/*! exports provided: reducersManager, window, store, getApp, getState, getDocumentRef, documentAddClass, documentRemoveClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApp", function() { return getApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentRef", function() { return getDocumentRef; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _reducersManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducersManager */ "./system/reducersManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducersManager", function() { return _reducersManager__WEBPACK_IMPORTED_MODULE_1__["reducersManager"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window */ "./system/window.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ "./system/loading.ts");
/* harmony import */ var _taskbar_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskbar-update */ "./system/taskbar-update.ts");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./init */ "./system/init.ts");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods */ "./system/methods.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "documentAddClass", function() { return _methods__WEBPACK_IMPORTED_MODULE_6__["documentAddClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "documentRemoveClass", function() { return _methods__WEBPACK_IMPORTED_MODULE_6__["documentRemoveClass"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render */ "./system/render.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.tsx");









_reducersManager__WEBPACK_IMPORTED_MODULE_1__["reducersManager"].addReducer(_loading__WEBPACK_IMPORTED_MODULE_3__["reducer"]);
_reducersManager__WEBPACK_IMPORTED_MODULE_1__["reducersManager"].addReducer(_taskbar_update__WEBPACK_IMPORTED_MODULE_4__["reducer"]);
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducersManager__WEBPACK_IMPORTED_MODULE_1__["reducersManager"].getMainReducer());
Object.assign(window, {
    __store: store,
});
Object(_init__WEBPACK_IMPORTED_MODULE_5__["init"])(store);

Object(_render__WEBPACK_IMPORTED_MODULE_7__["render"])(store);
function getApp(appId) {
    console.log(appId);
}
function getState() {
    if (_reducersManager__WEBPACK_IMPORTED_MODULE_1__["reducersManager"].isInReducer()) {
        return _reducersManager__WEBPACK_IMPORTED_MODULE_1__["reducersManager"].getGlobalState();
    }
    return store.getState();
}

function getDocumentRef() {
    return _components_Layout__WEBPACK_IMPORTED_MODULE_8__["layoutRef"];
}


/***/ }),

/***/ "./system/init.ts":
/*!************************!*\
  !*** ./system/init.ts ***!
  \************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _load_applications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-applications */ "./system/load-applications.ts");

function init(store) {
    store.dispatch({
        type: 'loading',
        name: 'applications',
    });
    store.dispatch({
        type: 'loading',
        name: 'delay',
    });
    setTimeout(function () {
        store.dispatch({
            type: 'loaded',
            name: 'delay',
        });
    }, 1000);
    Object(_load_applications__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (apps) {
        store.dispatch({
            type: 'Applications.loaded',
            list: apps
        });
        store.dispatch({
            type: 'loaded',
            name: 'applications',
        });
    });
}


/***/ }),

/***/ "./system/load-applications.ts":
/*!*************************************!*\
  !*** ./system/load-applications.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apps */ "./apps/index.tsx");

// declare  var __Apps: any
// let apps = __Apps;
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var promise = new Promise(function (resolve, reject) {
        var _apps = [];
        for (var key in _apps__WEBPACK_IMPORTED_MODULE_0__)
            _apps.push(_apps__WEBPACK_IMPORTED_MODULE_0__[key]);
        setTimeout(function () { return resolve(_apps); }, 10);
    });
    return promise;
});


/***/ }),

/***/ "./system/loading.ts":
/*!***************************!*\
  !*** ./system/loading.ts ***!
  \***************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
var loadingComponents = [];
function reducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case 'loading':
            loadingComponents.push(action.name);
            break;
        case 'loaded':
            loadingComponents = loadingComponents.filter(function (item) { return (item != action.name); });
            break;
        default: return state;
    }
    if (!state.System)
        state.System = {};
    if (loadingComponents.length) {
        state.System.loading = true;
    }
    else {
        state.System.loading = false;
    }
    document.documentElement.classList[state.System.loading ? 'add' : 'remove']('document-loading');
    document.documentElement.classList[!state.System.loading ? 'add' : 'remove']('document-loaded');
    return state;
}


/***/ }),

/***/ "./system/methods.ts":
/*!***************************!*\
  !*** ./system/methods.ts ***!
  \***************************/
/*! exports provided: documentAddClass, documentRemoveClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentAddClass", function() { return documentAddClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentRemoveClass", function() { return documentRemoveClass; });
function documentAddClass(className) {
    document.documentElement.classList.add(className);
}
function documentRemoveClass(className) {
    document.documentElement.classList.remove(className);
}


/***/ }),

/***/ "./system/newError.ts":
/*!****************************!*\
  !*** ./system/newError.ts ***!
  \****************************/
/*! exports provided: newError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newError", function() { return newError; });
function newError(message) {
    throw new Error(message);
}


/***/ }),

/***/ "./system/reducersManager.ts":
/*!***********************************!*\
  !*** ./system/reducersManager.ts ***!
  \***********************************/
/*! exports provided: reducersManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducersManager", function() { return reducersManager; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");

var reducersManager = new _utils__WEBPACK_IMPORTED_MODULE_0__["ReducersManager"]();


/***/ }),

/***/ "./system/render.tsx":
/*!***************************!*\
  !*** ./system/render.tsx ***!
  \***************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.tsx");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.styl */ "./system/index.styl");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_4__);





function render(store) {
    react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: store },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById("App"));
}


/***/ }),

/***/ "./system/taskbar-update.ts":
/*!**********************************!*\
  !*** ./system/taskbar-update.ts ***!
  \**********************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _components_WindowsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/WindowsManager */ "./components/WindowsManager/index.tsx");
/* harmony import */ var _components_Taskbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Taskbar */ "./components/Taskbar/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ "./utils/index.tsx");



function reducer(state, action) {
    switch (action.type) {
        case 'Applications.loaded':
        case Object(_components_WindowsManager__WEBPACK_IMPORTED_MODULE_0__["getActionName"])('changed'):
            var list = Object(_components_Taskbar__WEBPACK_IMPORTED_MODULE_1__["getListFromState"])(state);
            if (action.type == 'Applications.loaded') {
                list = list.filter(function (item) { return item.typeShutcut != 'app'; }).concat(action.list.map(function (item) {
                    return {
                        typeShutcut: 'app',
                        id: item.appInfo.uid,
                        call: item.call,
                        appInfo: item.appInfo,
                    };
                }).sort(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["sortByKey"])('id')));
            }
            else {
                list = list.filter(function (item) { return item.typeShutcut != 'window'; }).concat(action.list.map(function (item) {
                    var state = [];
                    state = ['inFocus'].filter(function (key) { return !!item[key]; });
                    return {
                        typeShutcut: 'window',
                        states: state.filter(Boolean).join(' '),
                        id: item.id + ':' + item.appInfo.uid,
                        call: function () {
                            _components_WindowsManager__WEBPACK_IMPORTED_MODULE_0__["actions"].focus(item.id);
                        },
                        appInfo: item.appInfo,
                    };
                }).sort(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["sortByKey"])('id')));
            }
            list.sort(function (a, b) {
                if (a.appInfo.uid > b.appInfo.uid)
                    return 1;
                if (a.appInfo.uid < b.appInfo.uid)
                    return -1;
                if (a.id > b.appInfo.id)
                    return 1;
                if (a.id < b.appInfo.id)
                    return -1;
                return 0;
            });
            state = Object(_components_Taskbar__WEBPACK_IMPORTED_MODULE_1__["setListInState"])(list, state);
            break;
    }
    // Taskbar.add
    return state;
}


/***/ }),

/***/ "./system/window.ts":
/*!**************************!*\
  !*** ./system/window.ts ***!
  \**************************/
/*! exports provided: open, getContentState, getOpenedApps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentState", function() { return getContentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenedApps", function() { return getOpenedApps; });
/* harmony import */ var _system_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @system/index */ "./system/index.ts");
/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Window */ "./components/Window/index.tsx");
/* harmony import */ var _components_WindowsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/WindowsManager */ "./components/WindowsManager/index.tsx");



function open(content, options, callback) {
    if (options === void 0) { options = _components_Window__WEBPACK_IMPORTED_MODULE_1__["defaultWindowProps"]; }
    if (callback === void 0) { callback = function (windowId) { }; }
    _components_WindowsManager__WEBPACK_IMPORTED_MODULE_2__["actions"].open({
        options: options,
        content: content,
        callback: callback,
    });
}
function getContentState(state) {
    if (!state)
        state = Object(_system_index__WEBPACK_IMPORTED_MODULE_0__["getState"])();
    return state.Layout.window;
}
function getOpenedApps() {
    return Object(_system_index__WEBPACK_IMPORTED_MODULE_0__["getState"])().WindowsManager.opened.map(function (window) {
        return {
            windowId: window.id,
            appInfo: window.appInfo,
        };
    });
}


/***/ })

}]);
//# sourceMappingURL=system.js.map