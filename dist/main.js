"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_project"] = self["webpackChunkto_do_list_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin-top: 100px;\\r\\n  width: 500px;\\r\\n  background-color: beige;\\r\\n  border: 1px;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.row h1 {\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  font-family: Poppins, sans-serif;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  text-indent: 20px;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  background-color: beige;\\r\\n  border: 0;\\r\\n  outline: 0;\\r\\n  font-size: 18px;\\r\\n  width: 400px;\\r\\n}\\r\\n\\r\\n.TODO-List {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.div-item {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 10px;\\r\\n}\\r\\n\\r\\n.elements {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.elements h2 {\\r\\n  font-size: 16px;\\r\\n  font-weight: bold;\\r\\n  font-family: Poppins, sans-serif;\\r\\n  margin-left: 15px;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: aliceblue;\\r\\n  margin-top: -8px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.clear a {\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  color: rgb(167, 166, 166);\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.drag-over {\\r\\n  border: dashed 3px red;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _module_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/getData.js */ \"./src/module/getData.js\");\n/* harmony import */ var _module_dataUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/dataUi.js */ \"./src/module/dataUi.js\");\n/* harmony import */ var _module_addData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/addData.js */ \"./src/module/addData.js\");\n/* harmony import */ var _module_deleteData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/deleteData.js */ \"./src/module/deleteData.js\");\n/* harmony import */ var _module_editData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/editData.js */ \"./src/module/editData.js\");\n/* harmony import */ var _module_checkData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/checkData.js */ \"./src/module/checkData.js\");\n/* harmony import */ var _module_clearAllData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/clearAllData.js */ \"./src/module/clearAllData.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst add = document.getElementById('plus');\r\nconst clearAll = document.getElementById('clear');\r\nconst title = document.getElementById('task');\r\nconst reload = document.getElementById('reload');\r\n\r\nconst data = (0,_module_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\ndata.forEach((e) => {\r\n  (0,_module_dataUi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\r\n});\r\n\r\n// function reload list\r\nreload.addEventListener('click', () => {\r\n  data.forEach((task) => {\r\n    task.completed = false;\r\n  });\r\n  localStorage.setItem('tasks', JSON.stringify(data));\r\n  window.location.reload();\r\n});\r\n\r\n// function add task to list\r\nadd.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n\r\n  const titleValue = title.value;\r\n  (0,_module_addData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(titleValue);\r\n  title.value = '';\r\n});\r\n\r\n// function get current value from input\r\nwindow.getCurrentTask = (event) => {\r\n  (0,_module_editData_js__WEBPACK_IMPORTED_MODULE_5__.currentValue)(event);\r\n};\r\n\r\n// function edit task of list\r\nwindow.editTask = (event) => {\r\n  (0,_module_editData_js__WEBPACK_IMPORTED_MODULE_5__.editValue)(event);\r\n};\r\n\r\n// function checkbox\r\nwindow.taskCheckbox = (event) => {\r\n  (0,_module_checkData_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(event);\r\n};\r\n\r\n// function remove task from list\r\nconst deleteTasksFromArray = (target) => {\r\n  if (target.classList.contains('remove')) {\r\n    (0,_module_deleteData_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(target.parentNode.firstElementChild\r\n      .lastElementChild.value);\r\n    target.parentNode.parentNode.remove();\r\n  }\r\n};\r\nconst manageRemove = (item) => {\r\n  deleteTasksFromArray(item.target);\r\n};\r\ndocument.getElementById('TODO-List').addEventListener('click', manageRemove);\r\n\r\n// clearAll tasks\r\nclearAll.addEventListener('click', () => {\r\n  (0,_module_clearAllData_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n  window.location.reload();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index.js?");

/***/ }),

/***/ "./src/module/addData.js":
/*!*******************************!*\
  !*** ./src/module/addData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _classData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classData.js */ \"./src/module/classData.js\");\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n/* harmony import */ var _setdata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setdata.js */ \"./src/module/setdata.js\");\n\r\n\r\n\r\n\r\nconst addData = (text) => {\r\n  const data = (0,_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  if (!(text === '')) {\r\n    const objTask = new _classData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text, false, data.length + 1);\r\n\r\n    (0,_setdata_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(objTask);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addData);\r\n\n\n//# sourceURL=webpack://to-do-list-project/./src/module/addData.js?");

/***/ }),

/***/ "./src/module/checkData.js":
/*!*********************************!*\
  !*** ./src/module/checkData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n\r\n\r\nfunction checkBoxValue(event) {\r\n  const data = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  data.forEach((task) => {\r\n    if (task.description === event.nextElementSibling.value) {\r\n      task.completed = !task.completed;\r\n    }\r\n  });\r\n  event.nextElementSibling.classList.toggle('completed');\r\n  localStorage.setItem('tasks', JSON.stringify(data));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkBoxValue);\n\n//# sourceURL=webpack://to-do-list-project/./src/module/checkData.js?");

/***/ }),

/***/ "./src/module/classData.js":
/*!*********************************!*\
  !*** ./src/module/classData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nclass Tasks {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list-project/./src/module/classData.js?");

/***/ }),

/***/ "./src/module/clearAllData.js":
/*!************************************!*\
  !*** ./src/module/clearAllData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n\r\n\r\nfunction clearAllData() {\r\n  const data = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const deleteAll = data.filter((item) => item.completed === false);\r\n  deleteAll.forEach((task, index) => {\r\n    task.index = index + 1;\r\n  });\r\n  localStorage.setItem('tasks', JSON.stringify(deleteAll));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllData);\n\n//# sourceURL=webpack://to-do-list-project/./src/module/clearAllData.js?");

/***/ }),

/***/ "./src/module/dataUi.js":
/*!******************************!*\
  !*** ./src/module/dataUi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delete.png */ \"./src/images/delete.png\");\n\r\n\r\nconst taskUi = (task) => {\r\n  const icDelete = new Image();\r\n  icDelete.src = _images_delete_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  icDelete.classList.add('remove');\r\n  const toDoList = document.getElementById('TODO-List');\r\n  const divParent = document.createElement('div');\r\n  divParent.classList.add('div-container');\r\n  divParent.setAttribute('draggable', 'true');\r\n\r\n  divParent.innerHTML += `\r\n                            <div class=\"items\">\r\n                                  <div class=\"elements\">\r\n                                      <input type=\"checkbox\" onclick=\"taskCheckbox(this)\" class=\"check\" ${task.completed ? 'checked' : ''}>\r\n                                      <input type=\"text\" value=\"${task.description}\" class=\"input ${task.completed ? 'completed' : ''}\" onfocus=\"getCurrentTask(this)\"  onblur=\"editTask(this)\">\r\n                                  </div>\r\n                                  <img class=\"remove\" src=\"${_images_delete_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"reload\">\r\n                            </div>\r\n                            <hr>\r\n                         `;\r\n  toDoList.appendChild(divParent);\r\n  return toDoList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskUi);\r\n\n\n//# sourceURL=webpack://to-do-list-project/./src/module/dataUi.js?");

/***/ }),

/***/ "./src/module/deleteData.js":
/*!**********************************!*\
  !*** ./src/module/deleteData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n\r\n\r\nconst deletTasksFromLocalSorage = (event) => {\r\n  const data = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const deleteTask = data.filter((item) => item.description !== event);\r\n  deleteTask.forEach((task, index) => {\r\n    task.index = index + 1;\r\n  });\r\n  localStorage.setItem('tasks', JSON.stringify(deleteTask));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deletTasksFromLocalSorage);\n\n//# sourceURL=webpack://to-do-list-project/./src/module/deleteData.js?");

/***/ }),

/***/ "./src/module/editData.js":
/*!********************************!*\
  !*** ./src/module/editData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentValue\": () => (/* binding */ currentValue),\n/* harmony export */   \"editValue\": () => (/* binding */ editValue)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n\r\n\r\nlet currentText = null;\r\n\r\n// function get current value from input\r\nfunction currentValue(event) {\r\n  currentText = event.value;\r\n}\r\n// function edit task of list\r\nfunction editValue(event) {\r\n  const data = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const text = event.value;\r\n  if (!(text === '')) {\r\n    data.forEach((task) => {\r\n      if (task.description === currentText) {\r\n        task.description = text;\r\n      }\r\n    });\r\n  }\r\n  // update local storage\r\n  localStorage.setItem('tasks', JSON.stringify(data));\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-project/./src/module/editData.js?");

/***/ }),

/***/ "./src/module/getData.js":
/*!*******************************!*\
  !*** ./src/module/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getdata = () => {\r\n  const datas = JSON.parse(localStorage.getItem('tasks')) || [];\r\n\r\n  return datas;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getdata);\n\n//# sourceURL=webpack://to-do-list-project/./src/module/getData.js?");

/***/ }),

/***/ "./src/module/setdata.js":
/*!*******************************!*\
  !*** ./src/module/setdata.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n// import taskUi from './dataUi.js';\r\n\r\n\r\nconst setData = (task) => {\r\n  const arrTask = (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  arrTask.push(task);\r\n\r\n  localStorage.setItem('tasks', JSON.stringify(arrTask));\r\n\r\n  // taskUi(task);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setData);\n\n//# sourceURL=webpack://to-do-list-project/./src/module/setdata.js?");

/***/ }),

/***/ "./src/images/delete.png":
/*!*******************************!*\
  !*** ./src/images/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ce1f523c16f7af7ecc0.png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/delete.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);