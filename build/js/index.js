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
/******/ 	__webpack_require__.p = "_ui/build/js/arezzo/pages/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/OnGrab.ts":
/*!*****************************!*\
  !*** ./source/js/OnGrab.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnGrab; });
/**
 *
 * @description atrela eventos de toque ao elemento enviado e chama as funções de callback correspondentes
 * @param {node} el
 * @param {object} options
 */
function OnGrab(el) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$safeX = _ref.safeX,
      safeX = _ref$safeX === void 0 ? 20 : _ref$safeX,
      _ref$safeY = _ref.safeY,
      safeY = _ref$safeY === void 0 ? 20 : _ref$safeY,
      onDragTop = _ref.onDragTop,
      onDragBottom = _ref.onDragBottom,
      onDragLeft = _ref.onDragLeft,
      onDragRight = _ref.onDragRight,
      onGrab = _ref.onGrab,
      onDrag = _ref.onDrag,
      onDrop = _ref.onDrop,
      onDropTop = _ref.onDropTop,
      onDropBottom = _ref.onDropBottom,
      onDropLeft = _ref.onDropLeft,
      onDropRight = _ref.onDropRight;

  var breakpointX;
  var breakpointY;
  var startX;
  var endX;
  var startY;
  var endY;
  var clicking = false;

  function handleGrab(e, x, y) {
    breakpointX = x;
    breakpointY = y;
    startX = breakpointX;
    startY = breakpointY;
    onGrab && onGrab(e, {
      x: startX,
      y: startY
    });
  }

  el.addEventListener('mousedown', function (e) {
    clicking = true;
    var x = e.screenX;
    var y = e.screenY;
    handleGrab(e, x, y);
  });
  el.addEventListener('touchstart', function (e) {
    var x = e.changedTouches[0].screenX;
    var y = e.changedTouches[0].screenY;
    handleGrab(e, x, y);
  });

  function handleDrop(e, x, y) {
    endX = x;
    endY = y;

    if (safeX < endX - startX) {
      onDropRight && onDropRight();
    }

    if (safeX < startX - endX) {
      onDropLeft && onDropLeft();
    }

    if (safeY < endY - startY) {
      onDropBottom && onDropBottom();
    }

    if (safeY < startY - endY) {
      onDropTop && onDropTop();
    }

    onDrop && onDrop(e, {
      x: endX,
      y: endY
    });
  }

  document.addEventListener('mouseup', function (e) {
    var x = e.screenX;
    var y = e.screenY;
    clicking = false;
    handleDrop(e, x, y);
  });
  el.addEventListener('touchend', function (e) {
    var x = e.changedTouches[0].screenX;
    var y = e.changedTouches[0].screenY;
    handleDrop(e, x, y);
  });

  function handleDrag(e, x, y) {
    var positionX = x;
    var positionY = y;

    if (safeX < positionX - breakpointX) {
      onDragRight && onDragRight();
      breakpointX = positionX;
    }

    if (safeX < breakpointX - positionX) {
      onDragLeft && onDragLeft();
      breakpointX = positionX;
    }

    if (safeY < positionY - breakpointY) {
      onDragTop && onDragTop();
      breakpointY = positionY;
    }

    if (safeY < breakpointY - positionY) {
      onDragBottom && onDragBottom();
      breakpointY = positionY;
    }

    onDrag && onDrag(e, {
      x: positionX,
      y: positionY
    });
  }

  document.addEventListener('mousemove', function (e) {
    if (!clicking) return;
    var x = e.screenX;
    var y = e.screenY;
    handleDrag(e, x, y);
  });
  el.addEventListener('touchmove', function (e) {
    var x = e.changedTouches[0].screenX;
    var y = e.changedTouches[0].screenY;
    handleDrag(e, x, y);
  });
}

/***/ }),

/***/ "./source/js/index.js":
/*!****************************!*\
  !*** ./source/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OnGrab_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnGrab.ts */ "./source/js/OnGrab.ts");


function onTouchMove() {
  var elXAxis = document.querySelector('#touch-result-1-x');
  var elYAxis = document.querySelector('#touch-result-1-y');
  var elStatus = document.querySelector('#touch-status-1');
  var elDropX = document.querySelector('#touch-drop-1-x');
  var elDropY = document.querySelector('#touch-drop-1-y');
  var contX = 0;
  var contY = 0;

  function onXMove(fn) {
    contX = fn(contX);
    elXAxis.innerHTML = contX;
  }

  function onYMove(fn) {
    contY = fn(contY);
    elYAxis.innerHTML = contY;
  }

  function onGrab() {
    elStatus.innerHTML = 'GRABBING';
  }

  function onDrop() {
    onYMove(function () {
      return 0;
    });
    onXMove(function () {
      return 0;
    });
    elStatus.innerHTML = 'GRAB!';
  }

  function onDrag(e, axes) {// console.log(axes);
  }

  function dropX(direction) {
    elDropX.innerHTML = direction;
  }

  function dropY(direction) {
    elDropY.innerHTML = direction;
  }

  Object(_OnGrab_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('#touch-pad-1'), {
    onDragLeft: function onDragLeft() {
      return onXMove(function (i) {
        return i -= 1;
      });
    },
    onDragRight: function onDragRight() {
      return onXMove(function (i) {
        return i += 1;
      });
    },
    onDragTop: function onDragTop() {
      return onYMove(function (i) {
        return i -= 1;
      });
    },
    onDragBottom: function onDragBottom() {
      return onYMove(function (i) {
        return i += 1;
      });
    },
    onGrab: onGrab,
    onDrop: onDrop,
    onDrag: onDrag,
    onDropTop: function onDropTop() {
      return dropY('top');
    },
    onDropBottom: function onDropBottom() {
      return dropY('bottom');
    },
    onDropLeft: function onDropLeft() {
      return dropX('left');
    },
    onDropRight: function onDropRight() {
      return dropX('right');
    }
  });
}

onTouchMove();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL09uR3JhYi50cyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvaW5kZXguanMiXSwibmFtZXMiOlsiT25HcmFiIiwiZWwiLCJzYWZlWCIsInNhZmVZIiwib25EcmFnVG9wIiwib25EcmFnQm90dG9tIiwib25EcmFnTGVmdCIsIm9uRHJhZ1JpZ2h0Iiwib25HcmFiIiwib25EcmFnIiwib25Ecm9wIiwib25Ecm9wVG9wIiwib25Ecm9wQm90dG9tIiwib25Ecm9wTGVmdCIsIm9uRHJvcFJpZ2h0IiwiYnJlYWtwb2ludFgiLCJicmVha3BvaW50WSIsInN0YXJ0WCIsImVuZFgiLCJzdGFydFkiLCJlbmRZIiwiY2xpY2tpbmciLCJoYW5kbGVHcmFiIiwiZSIsIngiLCJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2hhbmdlZFRvdWNoZXMiLCJoYW5kbGVEcm9wIiwiZG9jdW1lbnQiLCJoYW5kbGVEcmFnIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwib25Ub3VjaE1vdmUiLCJlbFhBeGlzIiwicXVlcnlTZWxlY3RvciIsImVsWUF4aXMiLCJlbFN0YXR1cyIsImVsRHJvcFgiLCJlbERyb3BZIiwiY29udFgiLCJjb250WSIsIm9uWE1vdmUiLCJmbiIsImlubmVySFRNTCIsIm9uWU1vdmUiLCJheGVzIiwiZHJvcFgiLCJkaXJlY3Rpb24iLCJkcm9wWSIsImkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3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Q0FBWDtBQUFBLEtBVHdCO0FBVXRDdEMsY0FBVSxFQUFFO0FBQUEsYUFBTW9DLEtBQUssQ0FBQyxNQUFELENBQVg7QUFBQSxLQVYwQjtBQVd0Q25DLGVBQVcsRUFBRTtBQUFBLGFBQU1tQyxLQUFLLENBQUMsT0FBRCxDQUFYO0FBQUE7QUFYeUIsR0FEcEMsQ0FBTjtBQWVEOztBQUVEZCxXQUFXLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIl91aS9idWlsZC9qcy9hcmV6em8vcGFnZXMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlL2pzL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKlxuICogQGRlc2NyaXB0aW9uIGF0cmVsYSBldmVudG9zIGRlIHRvcXVlIGFvIGVsZW1lbnRvIGVudmlhZG8gZSBjaGFtYSBhcyBmdW7Dp8O1ZXMgZGUgY2FsbGJhY2sgY29ycmVzcG9uZGVudGVzXG4gKiBAcGFyYW0ge25vZGV9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbkdyYWIoZWwsIHtcbiAgc2FmZVggPSAyMCxcbiAgc2FmZVkgPSAyMCxcbiAgb25EcmFnVG9wLFxuICBvbkRyYWdCb3R0b20sXG4gIG9uRHJhZ0xlZnQsXG4gIG9uRHJhZ1JpZ2h0LFxuICBvbkdyYWIsXG4gIG9uRHJhZyxcbiAgb25Ecm9wLFxuICBvbkRyb3BUb3AsXG4gIG9uRHJvcEJvdHRvbSxcbiAgb25Ecm9wTGVmdCxcbiAgb25Ecm9wUmlnaHQsXG59ID0ge30pIHtcbiAgbGV0IGJyZWFrcG9pbnRYO1xuICBsZXQgYnJlYWtwb2ludFk7XG4gIGxldCBzdGFydFg7XG4gIGxldCBlbmRYO1xuICBsZXQgc3RhcnRZO1xuICBsZXQgZW5kWTtcbiAgbGV0IGNsaWNraW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlR3JhYihlLCB4LCB5KSB7XG4gICAgYnJlYWtwb2ludFggPSB4O1xuICAgIGJyZWFrcG9pbnRZID0geTtcbiAgICBzdGFydFggPSBicmVha3BvaW50WDtcbiAgICBzdGFydFkgPSBicmVha3BvaW50WTtcbiAgICBvbkdyYWIgJiYgb25HcmFiKGUsIHsgeDogc3RhcnRYLCB5OiBzdGFydFkgfSk7XG4gIH1cblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGNsaWNraW5nID0gdHJ1ZTtcbiAgICBjb25zdCB4ID0gZS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLnNjcmVlblk7XG4gICAgaGFuZGxlR3JhYihlLCB4LCB5KTtcbiAgfSk7XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgIGhhbmRsZUdyYWIoZSwgeCwgeSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURyb3AoZSwgeCwgeSkge1xuICAgIGVuZFggPSB4O1xuICAgIGVuZFkgPSB5O1xuXG4gICAgaWYgKHNhZmVYIDwgZW5kWCAtIHN0YXJ0WCkge1xuICAgICAgb25Ecm9wUmlnaHQgJiYgb25Ecm9wUmlnaHQoKTtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVggPCBzdGFydFggLSBlbmRYKSB7XG4gICAgICBvbkRyb3BMZWZ0ICYmIG9uRHJvcExlZnQoKTtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVkgPCBlbmRZIC0gc3RhcnRZKSB7XG4gICAgICBvbkRyb3BCb3R0b20gJiYgb25Ecm9wQm90dG9tKCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVZIDwgc3RhcnRZIC0gZW5kWSkge1xuICAgICAgb25Ecm9wVG9wICYmIG9uRHJvcFRvcCgpO1xuICAgIH1cbiAgICBvbkRyb3AgJiYgb25Ecm9wKGUsIHsgeDogZW5kWCwgeTogZW5kWSB9KTtcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLnNjcmVlblg7XG4gICAgY29uc3QgeSA9IGUuc2NyZWVuWTtcbiAgICBjbGlja2luZyA9IGZhbHNlO1xuICAgIGhhbmRsZURyb3AoZSwgeCwgeSlcbiAgfSk7XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgY29uc3QgeSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICBoYW5kbGVEcm9wKGUsIHgsIHkpO1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVEcmFnKGUsIHgsIHkpIHtcbiAgICBsZXQgcG9zaXRpb25YID0geDtcbiAgICBsZXQgcG9zaXRpb25ZID0geTtcblxuICAgIGlmIChzYWZlWCA8IHBvc2l0aW9uWCAtIGJyZWFrcG9pbnRYKSB7XG4gICAgICBvbkRyYWdSaWdodCAmJiBvbkRyYWdSaWdodCgpO1xuICAgICAgYnJlYWtwb2ludFggPSBwb3NpdGlvblg7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVYIDwgYnJlYWtwb2ludFggLSBwb3NpdGlvblgpIHtcbiAgICAgIG9uRHJhZ0xlZnQgJiYgb25EcmFnTGVmdCgpO1xuICAgICAgYnJlYWtwb2ludFggPSBwb3NpdGlvblg7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVZIDwgcG9zaXRpb25ZIC0gYnJlYWtwb2ludFkpIHtcbiAgICAgIG9uRHJhZ1RvcCAmJiBvbkRyYWdUb3AoKTtcbiAgICAgIGJyZWFrcG9pbnRZID0gcG9zaXRpb25ZO1xuICAgIH1cblxuICAgIGlmIChzYWZlWSA8IGJyZWFrcG9pbnRZIC0gcG9zaXRpb25ZKSB7XG4gICAgICBvbkRyYWdCb3R0b20gJiYgb25EcmFnQm90dG9tKCk7XG4gICAgICBicmVha3BvaW50WSA9IHBvc2l0aW9uWTtcbiAgICB9XG5cbiAgICBvbkRyYWcgJiYgb25EcmFnKGUsIHsgeDogcG9zaXRpb25YLCB5OiBwb3NpdGlvblkgfSk7XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIGlmICghY2xpY2tpbmcpIHJldHVybjtcbiAgICBjb25zdCB4ID0gZS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLnNjcmVlblk7XG4gICAgaGFuZGxlRHJhZyhlLCB4LCB5KTtcbiAgfSk7XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gICAgaGFuZGxlRHJhZyhlLCB4LCB5KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgT25HcmFiIGZyb20gJy4vT25HcmFiLnRzJztcblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUoKSB7XG4gIGNvbnN0IGVsWEF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2gtcmVzdWx0LTEteCcpO1xuICBjb25zdCBlbFlBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoLXJlc3VsdC0xLXknKTtcbiAgY29uc3QgZWxTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2gtc3RhdHVzLTEnKTtcbiAgY29uc3QgZWxEcm9wWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaC1kcm9wLTEteCcpO1xuICBjb25zdCBlbERyb3BZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoLWRyb3AtMS15Jyk7XG4gIGxldCBjb250WCA9IDA7XG4gIGxldCBjb250WSA9IDA7XG5cbiAgZnVuY3Rpb24gb25YTW92ZShmbikge1xuICAgIGNvbnRYID0gZm4oY29udFgpO1xuICAgIGVsWEF4aXMuaW5uZXJIVE1MID0gY29udFg7XG4gIH1cblxuICBmdW5jdGlvbiBvbllNb3ZlKGZuKSB7XG4gICAgY29udFkgPSBmbihjb250WSk7XG4gICAgZWxZQXhpcy5pbm5lckhUTUwgPSBjb250WTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uR3JhYigpIHtcbiAgICBlbFN0YXR1cy5pbm5lckhUTUwgPSAnR1JBQkJJTkcnO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKCkge1xuICAgIG9uWU1vdmUoKCkgPT4gMCk7XG4gICAgb25YTW92ZSgoKSA9PiAwKTtcbiAgICBlbFN0YXR1cy5pbm5lckhUTUwgPSAnR1JBQiEnO1xuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUsIGF4ZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhheGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BYKGRpcmVjdGlvbikge1xuICAgIGVsRHJvcFguaW5uZXJIVE1MID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJvcFkoZGlyZWN0aW9uKSB7XG4gICAgZWxEcm9wWS5pbm5lckhUTUwgPSBkaXJlY3Rpb247XG4gIH1cblxuICBPbkdyYWIoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoLXBhZC0xJyksIHtcbiAgICAgIG9uRHJhZ0xlZnQ6ICgpID0+IG9uWE1vdmUoKGkpID0+IGkgLT0gMSksXG4gICAgICBvbkRyYWdSaWdodDogKCkgPT4gb25YTW92ZSgoaSkgPT4gaSArPSAxKSxcbiAgICAgIG9uRHJhZ1RvcDogKCkgPT4gb25ZTW92ZSgoaSkgPT4gaSAtPSAxKSxcbiAgICAgIG9uRHJhZ0JvdHRvbTogKCkgPT4gb25ZTW92ZSgoaSkgPT4gaSArPSAxKSxcbiAgICAgIG9uR3JhYixcbiAgICAgIG9uRHJvcCxcbiAgICAgIG9uRHJhZyxcbiAgICAgIG9uRHJvcFRvcDogKCkgPT4gZHJvcFkoJ3RvcCcpLFxuICAgICAgb25Ecm9wQm90dG9tOiAoKSA9PiBkcm9wWSgnYm90dG9tJyksXG4gICAgICBvbkRyb3BMZWZ0OiAoKSA9PiBkcm9wWCgnbGVmdCcpLFxuICAgICAgb25Ecm9wUmlnaHQ6ICgpID0+IGRyb3BYKCdyaWdodCcpXG4gICAgfVxuICApO1xufVxuXG5vblRvdWNoTW92ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==