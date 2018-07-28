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
exports.push([module.i, "html,\nbody {\n  padding: 0;\n  margin: 0;\n}\nhtml {\n  font-family: 'Roboto', Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;\n  font-size: 1px;\n  line-height: 1;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  background: #777 url(" + escape(__webpack_require__(/*! ../assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg */ "./assets/images/backgrounds/digital_space_universe_4k_8k-3840x2160.jpg")) + ") center no-repeat;\n  background-size: cover;\n}\nbody {\n  width: 100%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-size: 16rem;\n}\n#App {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n*,\n*:before,\n*:after {\n  box-sizing: padding-box;\n  box-sizing: border-box;\n}\n*::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  cursor: none;\n}\n*::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  cursor: none;\n}\n*::-webkit-scrollbar-thumb {\n  background: #888;\n  cursor: none;\n}\n*::-webkit-scrollbar-thumb:hover {\n  background: #555;\n  cursor: none;\n}\n", ""]);

// exports


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _window = __webpack_require__(/*! ./window */ "./system/window.ts");
exports.window = _window;
var loading_1 = __webpack_require__(/*! ./loading */ "./system/loading.ts");
var taskbar_update_1 = __webpack_require__(/*! ./taskbar-update */ "./system/taskbar-update.ts");
var render_1 = __webpack_require__(/*! ./render */ "./system/render.tsx");
var init_1 = __webpack_require__(/*! ./init */ "./system/init.ts");
var store_1 = __webpack_require__(/*! ./store */ "./system/store.ts");
function reducer(state, action) {
    state = loading_1.reducer(state, action);
    state = taskbar_update_1.reducer(state, action);
    return state;
}
exports.reducer = reducer;
exports.store = store_1.createStore();
init_1.init(exports.store);
render_1.render(exports.store);


/***/ }),

/***/ "./system/init.ts":
/*!************************!*\
  !*** ./system/init.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var load_applications_1 = __webpack_require__(/*! ./load-applications */ "./system/load-applications.ts");
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
    load_applications_1.default().then(function (apps) {
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
exports.init = init;


/***/ }),

/***/ "./system/load-applications.ts":
/*!*************************************!*\
  !*** ./system/load-applications.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var apps = __webpack_require__(/*! ../apps */ "./apps/index.ts");
// declare  var __Apps: any
// let apps = __Apps;
function default_1() {
    var promise = new Promise(function (resolve, reject) {
        console.log(apps.calculator);
        setTimeout(function () { return resolve([apps.calculator]); }, 10);
    });
    return promise;
}
exports.default = default_1;


/***/ }),

/***/ "./system/loading.ts":
/*!***************************!*\
  !*** ./system/loading.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.reducer = reducer;


/***/ }),

/***/ "./system/render.tsx":
/*!***************************!*\
  !*** ./system/render.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var index_1 = __webpack_require__(/*! ../components/Layout/index */ "./components/Layout/index.tsx");
__webpack_require__(/*! ./index.styl */ "./system/index.styl");
function render(store) {
    ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(index_1.default, null)), document.getElementById("App"));
}
exports.render = render;


/***/ }),

/***/ "./system/store.ts":
/*!*************************!*\
  !*** ./system/store.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var redux_1 = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
var index_1 = __webpack_require__(/*! ../components/Layout/index */ "./components/Layout/index.tsx");
var _1 = __webpack_require__(/*! ./ */ "./system/index.ts");
function createStore() {
    var store = redux_1.createStore(function (state, action) {
        state = tslib_1.__assign({}, _1.reducer(state, action));
        state = tslib_1.__assign({}, index_1.reducer(state, action));
        return state;
    });
    Object.assign(window, {
        __store: store,
    });
    return store;
}
exports.createStore = createStore;


/***/ }),

/***/ "./system/taskbar-update.ts":
/*!**********************************!*\
  !*** ./system/taskbar-update.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WindowsManager_1 = __webpack_require__(/*! ../components/WindowsManager */ "./components/WindowsManager/index.tsx");
var Taskbar_1 = __webpack_require__(/*! ../components/Taskbar */ "./components/Taskbar/index.tsx");
function reducer(state, action) {
    switch (action.type) {
        case 'Applications.loaded':
        case WindowsManager_1.getActionName('countChanged'):
            var list = Taskbar_1.getListFromState(state);
            if (action.type == 'Applications.loaded') {
                console.log('action.list', action.list);
                list = list.filter(function (item) { return item.typeShutcut != 'app'; }).concat(action.list.map(function (item) {
                    return {
                        typeShutcut: 'app',
                        id: item.appInfo.uid,
                        call: item.call,
                        appInfo: item.appInfo,
                    };
                }));
            }
            else {
                list = list.filter(function (item) { return item.typeShutcut != 'window'; }).concat(action.list.map(function (item) {
                    return {
                        typeShutcut: 'window',
                        id: item.id + ':' + item.appInfo.uid,
                        call: function () {
                            WindowsManager_1.actions.focus(item.id);
                        },
                        appInfo: item.appInfo,
                    };
                }));
            }
            state = Taskbar_1.setListInState(list, state);
            break;
    }
    // Taskbar.add
    return state;
}
exports.reducer = reducer;


/***/ }),

/***/ "./system/window.ts":
/*!**************************!*\
  !*** ./system/window.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! @system/index */ "./system/index.ts");
var Window_1 = __webpack_require__(/*! ../components/Window */ "./components/Window/index.tsx");
var WindowsManager_1 = __webpack_require__(/*! ../components/WindowsManager */ "./components/WindowsManager/index.tsx");
function open(content, options, callback) {
    if (options === void 0) { options = Window_1.defaultWindowProps; }
    if (callback === void 0) { callback = function (windowId) { }; }
    WindowsManager_1.actions.open({
        options: options,
        content: content,
        callback: callback,
    });
}
exports.open = open;
function getContentState() {
    return index_1.store.getState().Layout.window;
}
exports.getContentState = getContentState;
function getOpenedApps() {
    return index_1.store.getState().WindowsManager.opened.map(function (window) {
        return {
            windowId: window.id,
            appInfo: window.appInfo,
        };
    });
}
exports.getOpenedApps = getOpenedApps;


/***/ })

}]);
//# sourceMappingURL=system.js.map