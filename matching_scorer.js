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
/******/ 	return __webpack_require__(__webpack_require__.s = "./games/matching/matching-scorer-amd.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./games/matching/matching-scorer-amd.js":
/*!***********************************************!*\
  !*** ./games/matching/matching-scorer-amd.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("LearnosityAmd.define([], function () {\n  var bundle = __webpack_require__(/*! ./matching-scorer */ \"./games/matching/matching-scorer.js\");\n\n  return {\n    Scorer: bundle[\"default\"]\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nYW1lcy9tYXRjaGluZy9tYXRjaGluZy1zY29yZXItYW1kLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZ2FtZXMvbWF0Y2hpbmcvbWF0Y2hpbmctc2NvcmVyLWFtZC5qcz9iOGNmIl0sInNvdXJjZXNDb250ZW50IjpbIkxlYXJub3NpdHlBbWQuZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ1bmRsZSA9IHJlcXVpcmUoXCIuL21hdGNoaW5nLXNjb3JlclwiKTtcblxuICByZXR1cm4ge1xuICAgIFNjb3JlcjogYnVuZGxlLmRlZmF1bHQsXG4gIH07XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./games/matching/matching-scorer-amd.js\n");

/***/ }),

/***/ "./games/matching/matching-scorer.js":
/*!*******************************************!*\
  !*** ./games/matching/matching-scorer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scorer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scorer = /*#__PURE__*/function () {\n  function Scorer(question, response) {\n    _classCallCheck(this, Scorer);\n\n    this.question = question;\n    this.response = response;\n    this.validResponse = (question.cards || []).filter(function (c) {\n      return c.isCorrectResponse;\n    }).length;\n  }\n\n  _createClass(Scorer, [{\n    key: \"isValid\",\n    value: function isValid() {\n      return this.response === this.validResponse;\n    }\n  }, {\n    key: \"score\",\n    value: function score() {\n      return this.isValid() ? this.maxScore() : 0;\n    }\n  }, {\n    key: \"maxScore\",\n    value: function maxScore() {\n      return this.validResponse.score || 1;\n    }\n  }, {\n    key: \"canValidateResponse\",\n    value: function canValidateResponse() {\n      return !!this.validResponse;\n    }\n  }]);\n\n  return Scorer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nYW1lcy9tYXRjaGluZy9tYXRjaGluZy1zY29yZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nYW1lcy9tYXRjaGluZy9tYXRjaGluZy1zY29yZXIuanM/ZGQxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZXIge1xuICBjb25zdHJ1Y3RvcihxdWVzdGlvbiwgcmVzcG9uc2UpIHtcbiAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb247XG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRoaXMudmFsaWRSZXNwb25zZSA9IChxdWVzdGlvbi5jYXJkcyB8fCBbXSkuZmlsdGVyKFxuICAgICAgKGMpID0+IGMuaXNDb3JyZWN0UmVzcG9uc2VcbiAgICApLmxlbmd0aDtcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2UgPT09IHRoaXMudmFsaWRSZXNwb25zZTtcbiAgfVxuXG4gIHNjb3JlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMubWF4U2NvcmUoKSA6IDA7XG4gIH1cblxuICBtYXhTY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZFJlc3BvbnNlLnNjb3JlIHx8IDE7XG4gIH1cblxuICBjYW5WYWxpZGF0ZVJlc3BvbnNlKCkge1xuICAgIHJldHVybiAhIXRoaXMudmFsaWRSZXNwb25zZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./games/matching/matching-scorer.js\n");

/***/ })

/******/ });