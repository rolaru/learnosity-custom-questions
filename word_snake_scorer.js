/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./games/word-snake/word-snake-scorer-amd.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/NDgzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/classCallCheck.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanM/MzUzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/createClass.js\n");

/***/ }),

/***/ "./games/word-snake/word-snake-scorer-amd.js":
/*!***************************************************!*\
  !*** ./games/word-snake/word-snake-scorer-amd.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("LearnosityAmd.define([], function () {\n  var bundle = __webpack_require__(/*! ./word-snake-scorer */ \"./games/word-snake/word-snake-scorer.js\");\n\n  return {\n    Scorer: bundle[\"default\"]\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nYW1lcy93b3JkLXNuYWtlL3dvcmQtc25ha2Utc2NvcmVyLWFtZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2dhbWVzL3dvcmQtc25ha2Uvd29yZC1zbmFrZS1zY29yZXItYW1kLmpzPzlhYjIiXSwic291cmNlc0NvbnRlbnQiOlsiTGVhcm5vc2l0eUFtZC5kZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnVuZGxlID0gcmVxdWlyZShcIi4vd29yZC1zbmFrZS1zY29yZXJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBTY29yZXI6IGJ1bmRsZS5kZWZhdWx0LFxuICB9O1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./games/word-snake/word-snake-scorer-amd.js\n");

/***/ }),

/***/ "./games/word-snake/word-snake-scorer.js":
/*!***********************************************!*\
  !*** ./games/word-snake/word-snake-scorer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scorer; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Scorer = /*#__PURE__*/function () {\n  function Scorer(question, response) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Scorer);\n\n    this.question = question;\n    this.response = response;\n    this.validResponse = (question.words || []).length;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Scorer, [{\n    key: \"isValid\",\n    value: function isValid() {\n      return this.response === this.validResponse;\n    }\n  }, {\n    key: \"score\",\n    value: function score() {\n      return this.isValid() ? this.maxScore() : 0;\n    }\n  }, {\n    key: \"maxScore\",\n    value: function maxScore() {\n      return this.validResponse.score || 1;\n    }\n  }, {\n    key: \"canValidateResponse\",\n    value: function canValidateResponse() {\n      return !!this.validResponse;\n    }\n  }]);\n\n  return Scorer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nYW1lcy93b3JkLXNuYWtlL3dvcmQtc25ha2Utc2NvcmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZ2FtZXMvd29yZC1zbmFrZS93b3JkLXNuYWtlLXNjb3Jlci5qcz9jMDgyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlciB7XG4gIGNvbnN0cnVjdG9yKHF1ZXN0aW9uLCByZXNwb25zZSkge1xuICAgIHRoaXMucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy52YWxpZFJlc3BvbnNlID0gKHF1ZXN0aW9uLndvcmRzIHx8IFtdKS5sZW5ndGg7XG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3BvbnNlID09PSB0aGlzLnZhbGlkUmVzcG9uc2U7XG4gIH1cblxuICBzY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLm1heFNjb3JlKCkgOiAwO1xuICB9XG5cbiAgbWF4U2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRSZXNwb25zZS5zY29yZSB8fCAxO1xuICB9XG5cbiAgY2FuVmFsaWRhdGVSZXNwb25zZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLnZhbGlkUmVzcG9uc2U7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./games/word-snake/word-snake-scorer.js\n");

/***/ })

/******/ });