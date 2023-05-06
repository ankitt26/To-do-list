"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/addlist.js":
/*!****************************!*\
  !*** ./modules/addlist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _completelist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completelist.js */ \"./modules/completelist.js\");\n/* harmony import */ var _fetchLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLocal.js */ \"./modules/fetchLocal.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./modules/render.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const AddList = document.getElementById(\"addList\");\r\n  const enterBtn = document.querySelector(\".enter-btn\");\r\n\r\n  const Addtolist = () => {\r\n    const task = AddList.value;\r\n    const tasklist = (0,_fetchLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const len = tasklist.length;\r\n\r\n    if (task !== \"\") {\r\n      const newtask = { description: task, completed: false, index: len + 1 };\r\n      tasklist.push(newtask);\r\n\r\n      const toString = JSON.stringify(tasklist);\r\n      localStorage.setItem(\"tasklist\", toString);\r\n\r\n      AddList.value = \"\";\r\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasklist);\r\n      (0,_completelist_js__WEBPACK_IMPORTED_MODULE_0__.checkCompleted)(tasklist);\r\n    }\r\n  };\r\n\r\n  // Add by click\r\n\r\n  enterBtn.addEventListener(\"click\", (event) => {\r\n    Addtolist();\r\n    event.preventDefault();\r\n  });\r\n\r\n  // Add by enter key\r\n\r\n  document.addEventListener(\"keydown\", (event) => {\r\n    if (event.key === \"Enter\") {\r\n      Addtolist();\r\n      event.preventDefault();\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/addlist.js?");

/***/ }),

/***/ "./modules/clearall.js":
/*!*****************************!*\
  !*** ./modules/clearall.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLocal.js */ \"./modules/fetchLocal.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./modules/render.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const all = document.querySelector(\".clear\");\r\n\r\n  all.addEventListener(\"click\", () => {\r\n    let tasklist = (0,_fetchLocal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    tasklist = tasklist.filter((value) => value.completed === false);\r\n\r\n    tasklist.forEach((value, indd) => {\r\n      value.index = indd + 1;\r\n    });\r\n\r\n    const toString = JSON.stringify(tasklist);\r\n    localStorage.setItem(\"tasklist\", toString);\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasklist);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/clearall.js?");

/***/ }),

/***/ "./modules/completelist.js":
/*!*********************************!*\
  !*** ./modules/completelist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCompleted\": () => (/* binding */ checkCompleted),\n/* harmony export */   \"updateCheck\": () => (/* binding */ updateCheck)\n/* harmony export */ });\n/* harmony import */ var _fetchLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLocal */ \"./modules/fetchLocal.js\");\n\r\n\r\nconst checkCompleted = () => {\r\n  const tasklist = (0,_fetchLocal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  tasklist.forEach((value) => {\r\n    const cId = `check${value.index}`;\r\n    const descId = `desc${value.index}`;\r\n\r\n    if (value.completed === true) {\r\n      const completed = document.getElementById(cId);\r\n      completed.checked = true;\r\n\r\n      //   add line through\r\n      const checkItem = document.getElementById(descId);\r\n      checkItem.classList.add(\"checked\");\r\n      checkItem.setAttribute(\"contenteditable\", \"false\");\r\n    } else if (value.completed === false) {\r\n      const completed = document.getElementById(cId);\r\n      completed.checked = false;\r\n\r\n      //   Remove line through\r\n      const checkItem = document.getElementById(descId);\r\n      checkItem.classList.remove(\"checked\");\r\n      checkItem.setAttribute(\"contenteditable\", \"true\");\r\n    }\r\n  });\r\n};\r\n\r\nconst updateCheck = () => {\r\n  document.addEventListener(\"change\", (event) => {\r\n    const tasklist = (0,_fetchLocal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const checkId = event.target.id;\r\n\r\n    tasklist.forEach((value) => {\r\n      const taskId = `check${value.index}`;\r\n\r\n      if (taskId === checkId) {\r\n        value.completed = !value.completed;\r\n      }\r\n      const toString = JSON.stringify(tasklist);\r\n      localStorage.setItem(\"tasklist\", toString);\r\n      checkCompleted(tasklist);\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/completelist.js?");

/***/ }),

/***/ "./modules/edit.js":
/*!*************************!*\
  !*** ./modules/edit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLocal */ \"./modules/fetchLocal.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const listul = document.querySelector(\".list-ul\");\r\n  let tasklist;\r\n  listul.addEventListener(\"keydown\", (event) => {\r\n    tasklist = (0,_fetchLocal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    if (event.target.classList.contains(\"description\")) {\r\n      const listid = event.target.id;\r\n      const edittask = document.getElementById(listid);\r\n      // edittask.setAttribute(\"contenteditable\", \"true\");\r\n\r\n      tasklist.forEach((value) => {\r\n        const taskId = `desc${value.index}`;\r\n        if (taskId === listid) {\r\n          value.description = edittask.innerText;\r\n        }\r\n      });\r\n\r\n      const toString = JSON.stringify(tasklist);\r\n      localStorage.setItem(\"tasklist\", toString);\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/edit.js?");

/***/ }),

/***/ "./modules/fetchLocal.js":
/*!*******************************!*\
  !*** ./modules/fetchLocal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  let tasklist;\r\n\r\n  if (localStorage.getItem(\"tasklist\")) {\r\n    tasklist = JSON.parse(localStorage.getItem(\"tasklist\"));\r\n  } else {\r\n    tasklist = [];\r\n  }\r\n  return tasklist;\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/fetchLocal.js?");

/***/ }),

/***/ "./modules/removelist.js":
/*!*******************************!*\
  !*** ./modules/removelist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _completelist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completelist.js */ \"./modules/completelist.js\");\n/* harmony import */ var _fetchLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLocal.js */ \"./modules/fetchLocal.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./modules/render.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const listul = document.querySelector(\".list-ul\");\r\n\r\n  listul.addEventListener(\"click\", (event) => {\r\n    let tasklist = (0,_fetchLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    if (event.target.classList.contains(\"fa\")) {\r\n      const faId = event.target.id;\r\n\r\n      tasklist = tasklist.filter((value) => {\r\n        const taskId = `fa${value.index}`;\r\n        return faId !== taskId;\r\n      });\r\n\r\n      // to reassign the index\r\n      tasklist.forEach((value, indd) => {\r\n        value.index = indd + 1;\r\n      });\r\n\r\n      const toString = JSON.stringify(tasklist);\r\n      localStorage.setItem(\"tasklist\", toString);\r\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasklist);\r\n      (0,_completelist_js__WEBPACK_IMPORTED_MODULE_0__.checkCompleted)(tasklist);\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/removelist.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLocal */ \"./modules/fetchLocal.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const tasklist = (0,_fetchLocal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const ul = document.querySelector(\".list-ul\");\r\n  const sortIndex = tasklist.sort((a, b) => a.index - b.index);\r\n  ul.innerHTML = \"\";\r\n\r\n  sortIndex.forEach((value) => {\r\n    const li = document.createElement(\"li\");\r\n    li.className = \"list-li\";\r\n    li.id = value.index;\r\n\r\n    li.innerHTML = `<input type=\"checkbox\" id=\"check${value.index}\" class=\"checkbok\" name=\"listCheckbox\" value=\"${value.completed}\">\r\n  <p class=\"description\" id=\"desc${value.index}\"> ${value.description} </p>\r\n  <i class=\"fa fa-solid fa-trash\" id=\"fa${value.index}\" aria-hidden=\"true\"></i>\r\n`;\r\n    ul.append(li);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./modules/render.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ysabeau:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".todo-list {\\r\\n  border: 2px solid rgb(189, 184, 184);\\r\\n  border-radius: 5px;\\r\\n  box-shadow:\\r\\n    0 -28px 20px -20px rgba(0, 0, 0, 0.45),\\r\\n    25px 0 20px -20px rgba(0, 0, 0, 0.45),\\r\\n    0 25px 20px -20px rgba(0, 0, 0, 0.45),\\r\\n    -25px 0 20px -20px rgba(0, 0, 0, 0.45);\\r\\n  margin: 100px auto;\\r\\n  max-width: 600px;\\r\\n  font-family: \\\"Ysabeau\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.list-div {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 2px 20px;\\r\\n}\\r\\n\\r\\n.list-ul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  padding-left: 0;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.list-li {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 15px 20px;\\r\\n  font-size: 20px;\\r\\n  border-bottom: 1px solid rgb(163, 191, 191);\\r\\n}\\r\\n\\r\\n.description {\\r\\n  font-size: 25px;\\r\\n  font-weight: 500;\\r\\n  width: 450px;\\r\\n  margin: 0 2px;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  color: rgb(163, 191, 191);\\r\\n  font-size: 20px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.checkbok {\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n  text-decoration-color: red;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  font-size: 23px;\\r\\n  font-weight: 800;\\r\\n  background-color: beige;\\r\\n  text-align: center;\\r\\n  margin: 0 1px;\\r\\n  padding-top: 10px;\\r\\n  height: 45px;\\r\\n}\\r\\n\\r\\n.input-add {\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  font-size: 16px;\\r\\n  height: 50px;\\r\\n  width: 450px;\\r\\n}\\r\\n\\r\\ni {\\r\\n  color: rgb(163, 191, 191);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/addlist.js */ \"./modules/addlist.js\");\n/* harmony import */ var _modules_removelist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/removelist.js */ \"./modules/removelist.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/render.js */ \"./modules/render.js\");\n/* harmony import */ var _modules_clearall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/clearall.js */ \"./modules/clearall.js\");\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/edit.js */ \"./modules/edit.js\");\n/* harmony import */ var _modules_completelist_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/completelist.js */ \"./modules/completelist.js\");\n/* harmony import */ var _modules_fetchLocal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/fetchLocal */ \"./modules/fetchLocal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_addlist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_removelist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_clearall_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_edit_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_completelist_js__WEBPACK_IMPORTED_MODULE_6__.checkCompleted)();\r\n(0,_modules_completelist_js__WEBPACK_IMPORTED_MODULE_6__.updateCheck)();\r\n\r\nconst refresh = document.querySelector(\".fa-arrows-rotate\");\r\nrefresh.addEventListener(\"click\", () => {\r\n  window.location.reload();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);