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

/***/ "./source/js/OnGrab.js":
/*!*****************************!*\
  !*** ./source/js/OnGrab.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = OnGrab;

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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./source/js/index.js":
/*!****************************!*\
  !*** ./source/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./OnGrab.js */ "./source/js/OnGrab.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_OnGrab) {
  "use strict";

  _OnGrab = _interopRequireDefault(_OnGrab);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    (0, _OnGrab["default"])(document.querySelector('#touch-pad-1'), {
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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL09uR3JhYi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvaW5kZXguanMiXSwibmFtZXMiOlsiT25HcmFiIiwiZWwiLCJzYWZlWCIsInNhZmVZIiwib25EcmFnVG9wIiwib25EcmFnQm90dG9tIiwib25EcmFnTGVmdCIsIm9uRHJhZ1JpZ2h0Iiwib25HcmFiIiwib25EcmFnIiwib25Ecm9wIiwib25Ecm9wVG9wIiwib25Ecm9wQm90dG9tIiwib25Ecm9wTGVmdCIsIm9uRHJvcFJpZ2h0IiwiYnJlYWtwb2ludFgiLCJicmVha3BvaW50WSIsInN0YXJ0WCIsImVuZFgiLCJzdGFydFkiLCJlbmRZIiwiY2xpY2tpbmciLCJoYW5kbGVHcmFiIiwiZSIsIngiLCJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2hhbmdlZFRvdWNoZXMiLCJoYW5kbGVEcm9wIiwiZG9jdW1lbnQiLCJoYW5kbGVEcmFnIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwib25Ub3VjaE1vdmUiLCJlbFhBeGlzIiwicXVlcnlTZWxlY3RvciIsImVsWUF4aXMiLCJlbFN0YXR1cyIsImVsRHJvcFgiLCJlbERyb3BZIiwiY29udFgiLCJjb250WSIsIm9uWE1vdmUiLCJmbiIsImlubmVySFRNTCIsIm9uWU1vdmUiLCJheGVzIiwiZHJvcFgiLCJkaXJlY3Rpb24iLCJkcm9wWSIsImkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFNZSxXQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQWNQO0FBQUEsbUZBQUosRUFBSTtBQUFBLDBCQWJOQyxLQWFNO0FBQUEsUUFiTkEsS0FhTSwyQkFiRSxFQWFGO0FBQUEsMEJBWk5DLEtBWU07QUFBQSxRQVpOQSxLQVlNLDJCQVpFLEVBWUY7QUFBQSxRQVhOQyxTQVdNLFFBWE5BLFNBV007QUFBQSxRQVZOQyxZQVVNLFFBVk5BLFlBVU07QUFBQSxRQVROQyxVQVNNLFFBVE5BLFVBU007QUFBQSxRQVJOQyxXQVFNLFFBUk5BLFdBUU07QUFBQSxRQVBOQyxNQU9NLFFBUE5BLE1BT007QUFBQSxRQU5OQyxNQU1NLFFBTk5BLE1BTU07QUFBQSxRQUxOQyxNQUtNLFFBTE5BLE1BS007QUFBQSxRQUpOQyxTQUlNLFFBSk5BLFNBSU07QUFBQSxRQUhOQyxZQUdNLFFBSE5BLFlBR007QUFBQSxRQUZOQyxVQUVNLFFBRk5BLFVBRU07QUFBQSxRQUROQyxXQUNNLFFBRE5BLFdBQ007O0FBQ04sUUFBSUMsV0FBSjtBQUNBLFFBQUlDLFdBQUo7QUFDQSxRQUFJQyxNQUFKO0FBQ0EsUUFBSUMsSUFBSjtBQUNBLFFBQUlDLE1BQUo7QUFDQSxRQUFJQyxJQUFKO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsYUFBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtBQUMzQlYsaUJBQVcsR0FBR1MsQ0FBZDtBQUNBUixpQkFBVyxHQUFHUyxDQUFkO0FBQ0FSLFlBQU0sR0FBR0YsV0FBVDtBQUNBSSxZQUFNLEdBQUdILFdBQVQ7QUFDQVIsWUFBTSxJQUFJQSxNQUFNLENBQUNlLENBQUQsRUFBSTtBQUFFQyxTQUFDLEVBQUVQLE1BQUw7QUFBYVEsU0FBQyxFQUFFTjtBQUFoQixPQUFKLENBQWhCO0FBQ0Q7O0FBRURsQixNQUFFLENBQUN5QixnQkFBSCxDQUFvQixXQUFwQixFQUFpQyxVQUFDSCxDQUFELEVBQU87QUFDdENGLGNBQVEsR0FBRyxJQUFYO0FBQ0EsVUFBTUcsQ0FBQyxHQUFHRCxDQUFDLENBQUNJLE9BQVo7QUFDQSxVQUFNRixDQUFDLEdBQUdGLENBQUMsQ0FBQ0ssT0FBWjtBQUNBTixnQkFBVSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FMRDtBQU9BeEIsTUFBRSxDQUFDeUIsZ0JBQUgsQ0FBb0IsWUFBcEIsRUFBa0MsVUFBQ0gsQ0FBRCxFQUFPO0FBQ3ZDLFVBQU1DLENBQUMsR0FBR0QsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRixPQUE5QjtBQUNBLFVBQU1GLENBQUMsR0FBR0YsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRCxPQUE5QjtBQUNBTixnQkFBVSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FKRDs7QUFNQSxhQUFTSyxVQUFULENBQW9CUCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCO0FBQzNCUCxVQUFJLEdBQUdNLENBQVA7QUFDQUosVUFBSSxHQUFHSyxDQUFQOztBQUVBLFVBQUl2QixLQUFLLEdBQUdnQixJQUFJLEdBQUdELE1BQW5CLEVBQTJCO0FBQ3pCSCxtQkFBVyxJQUFJQSxXQUFXLEVBQTFCO0FBQ0Q7O0FBRUQsVUFBSVosS0FBSyxHQUFHZSxNQUFNLEdBQUdDLElBQXJCLEVBQTJCO0FBQ3pCTCxrQkFBVSxJQUFJQSxVQUFVLEVBQXhCO0FBQ0Q7O0FBRUQsVUFBSVYsS0FBSyxHQUFHaUIsSUFBSSxHQUFHRCxNQUFuQixFQUEyQjtBQUN6QlAsb0JBQVksSUFBSUEsWUFBWSxFQUE1QjtBQUNEOztBQUVELFVBQUlULEtBQUssR0FBR2dCLE1BQU0sR0FBR0MsSUFBckIsRUFBMkI7QUFDekJULGlCQUFTLElBQUlBLFNBQVMsRUFBdEI7QUFDRDs7QUFDREQsWUFBTSxJQUFJQSxNQUFNLENBQUNhLENBQUQsRUFBSTtBQUFFQyxTQUFDLEVBQUVOLElBQUw7QUFBV08sU0FBQyxFQUFFTDtBQUFkLE9BQUosQ0FBaEI7QUFDRDs7QUFFRFcsWUFBUSxDQUFDTCxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDSCxDQUFELEVBQU87QUFDMUMsVUFBTUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNJLE9BQVo7QUFDQSxVQUFNRixDQUFDLEdBQUdGLENBQUMsQ0FBQ0ssT0FBWjtBQUNBUCxjQUFRLEdBQUcsS0FBWDtBQUNBUyxnQkFBVSxDQUFDUCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FMRDtBQU9BeEIsTUFBRSxDQUFDeUIsZ0JBQUgsQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBQ0gsQ0FBRCxFQUFPO0FBQ3JDLFVBQU1DLENBQUMsR0FBR0QsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRixPQUE5QjtBQUNBLFVBQU1GLENBQUMsR0FBR0YsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRCxPQUE5QjtBQUNBRSxnQkFBVSxDQUFDUCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FKRDs7QUFNQSxhQUFTTyxVQUFULENBQW9CVCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCO0FBQzNCLFVBQUlRLFNBQVMsR0FBR1QsQ0FBaEI7QUFDQSxVQUFJVSxTQUFTLEdBQUdULENBQWhCOztBQUVBLFVBQUl2QixLQUFLLEdBQUcrQixTQUFTLEdBQUdsQixXQUF4QixFQUFxQztBQUNuQ1IsbUJBQVcsSUFBSUEsV0FBVyxFQUExQjtBQUNBUSxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVELFVBQUkvQixLQUFLLEdBQUdhLFdBQVcsR0FBR2tCLFNBQTFCLEVBQXFDO0FBQ25DM0Isa0JBQVUsSUFBSUEsVUFBVSxFQUF4QjtBQUNBUyxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVELFVBQUk5QixLQUFLLEdBQUcrQixTQUFTLEdBQUdsQixXQUF4QixFQUFxQztBQUNuQ1osaUJBQVMsSUFBSUEsU0FBUyxFQUF0QjtBQUNBWSxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVELFVBQUkvQixLQUFLLEdBQUdhLFdBQVcsR0FBR2tCLFNBQTFCLEVBQXFDO0FBQ25DN0Isb0JBQVksSUFBSUEsWUFBWSxFQUE1QjtBQUNBVyxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVEekIsWUFBTSxJQUFJQSxNQUFNLENBQUNjLENBQUQsRUFBSTtBQUFFQyxTQUFDLEVBQUVTLFNBQUw7QUFBZ0JSLFNBQUMsRUFBRVM7QUFBbkIsT0FBSixDQUFoQjtBQUNEOztBQUVESCxZQUFRLENBQUNMLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLFVBQUNILENBQUQsRUFBTztBQUM1QyxVQUFJLENBQUNGLFFBQUwsRUFBZTtBQUNmLFVBQU1HLENBQUMsR0FBR0QsQ0FBQyxDQUFDSSxPQUFaO0FBQ0EsVUFBTUYsQ0FBQyxHQUFHRixDQUFDLENBQUNLLE9BQVo7QUFDQUksZ0JBQVUsQ0FBQ1QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsQ0FBVjtBQUNELEtBTEQ7QUFPQXhCLE1BQUUsQ0FBQ3lCLGdCQUFILENBQW9CLFdBQXBCLEVBQWlDLFVBQUNILENBQUQsRUFBTztBQUN0QyxVQUFNQyxDQUFDLEdBQUdELENBQUMsQ0FBQ00sY0FBRixDQUFpQixDQUFqQixFQUFvQkYsT0FBOUI7QUFDQSxVQUFNRixDQUFDLEdBQUdGLENBQUMsQ0FBQ00sY0FBRixDQUFpQixDQUFqQixFQUFvQkQsT0FBOUI7QUFDQUksZ0JBQVUsQ0FBQ1QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsQ0FBVjtBQUNELEtBSkQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7OztBQzVIRDs7OztBQUVBLFdBQVNVLFdBQVQsR0FBdUI7QUFDckIsUUFBTUMsT0FBTyxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHUCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWhCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHUixRQUFRLENBQUNNLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHVCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWhCO0FBQ0EsUUFBTUksT0FBTyxHQUFHVixRQUFRLENBQUNNLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWhCO0FBQ0EsUUFBSUssS0FBSyxHQUFHLENBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxhQUFTQyxPQUFULENBQWlCQyxFQUFqQixFQUFxQjtBQUNuQkgsV0FBSyxHQUFHRyxFQUFFLENBQUNILEtBQUQsQ0FBVjtBQUNBTixhQUFPLENBQUNVLFNBQVIsR0FBb0JKLEtBQXBCO0FBQ0Q7O0FBRUQsYUFBU0ssT0FBVCxDQUFpQkYsRUFBakIsRUFBcUI7QUFDbkJGLFdBQUssR0FBR0UsRUFBRSxDQUFDRixLQUFELENBQVY7QUFDQUwsYUFBTyxDQUFDUSxTQUFSLEdBQW9CSCxLQUFwQjtBQUNEOztBQUVELGFBQVNuQyxNQUFULEdBQWtCO0FBQ2hCK0IsY0FBUSxDQUFDTyxTQUFULEdBQXFCLFVBQXJCO0FBQ0Q7O0FBRUQsYUFBU3BDLE1BQVQsR0FBa0I7QUFDaEJxQyxhQUFPLENBQUM7QUFBQSxlQUFNLENBQU47QUFBQSxPQUFELENBQVA7QUFDQUgsYUFBTyxDQUFDO0FBQUEsZUFBTSxDQUFOO0FBQUEsT0FBRCxDQUFQO0FBQ0FMLGNBQVEsQ0FBQ08sU0FBVCxHQUFxQixPQUFyQjtBQUNEOztBQUVELGFBQVNyQyxNQUFULENBQWdCYyxDQUFoQixFQUFtQnlCLElBQW5CLEVBQXlCLENBQ3ZCO0FBQ0Q7O0FBRUQsYUFBU0MsS0FBVCxDQUFlQyxTQUFmLEVBQTBCO0FBQ3hCVixhQUFPLENBQUNNLFNBQVIsR0FBb0JJLFNBQXBCO0FBQ0Q7O0FBRUQsYUFBU0MsS0FBVCxDQUFlRCxTQUFmLEVBQTBCO0FBQ3hCVCxhQUFPLENBQUNLLFNBQVIsR0FBb0JJLFNBQXBCO0FBQ0Q7O0FBRUQsNEJBQ0VuQixRQUFRLENBQUNNLGFBQVQsQ0FBdUIsY0FBdkIsQ0FERixFQUMwQztBQUN0Qy9CLGdCQUFVLEVBQUU7QUFBQSxlQUFNc0MsT0FBTyxDQUFDLFVBQUFRLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxJQUFJLENBQVQ7QUFBQSxTQUFGLENBQWI7QUFBQSxPQUQwQjtBQUV0QzdDLGlCQUFXLEVBQUU7QUFBQSxlQUFNcUMsT0FBTyxDQUFDLFVBQUFRLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxJQUFJLENBQVQ7QUFBQSxTQUFGLENBQWI7QUFBQSxPQUZ5QjtBQUd0Q2hELGVBQVMsRUFBRTtBQUFBLGVBQU0yQyxPQUFPLENBQUMsVUFBQUssQ0FBQztBQUFBLGlCQUFJQSxDQUFDLElBQUksQ0FBVDtBQUFBLFNBQUYsQ0FBYjtBQUFBLE9BSDJCO0FBSXRDL0Msa0JBQVksRUFBRTtBQUFBLGVBQU0wQyxPQUFPLENBQUMsVUFBQUssQ0FBQztBQUFBLGlCQUFJQSxDQUFDLElBQUksQ0FBVDtBQUFBLFNBQUYsQ0FBYjtBQUFBLE9BSndCO0FBS3RDNUMsWUFBTSxFQUFOQSxNQUxzQztBQU10Q0UsWUFBTSxFQUFOQSxNQU5zQztBQU90Q0QsWUFBTSxFQUFOQSxNQVBzQztBQVF0Q0UsZUFBUyxFQUFFO0FBQUEsZUFBTXdDLEtBQUssQ0FBQyxLQUFELENBQVg7QUFBQSxPQVIyQjtBQVN0Q3ZDLGtCQUFZLEVBQUU7QUFBQSxlQUFNdUMsS0FBSyxDQUFDLFFBQUQsQ0FBWDtBQUFBLE9BVHdCO0FBVXRDdEMsZ0JBQVUsRUFBRTtBQUFBLGVBQU1vQyxLQUFLLENBQUMsTUFBRCxDQUFYO0FBQUEsT0FWMEI7QUFXdENuQyxpQkFBVyxFQUFFO0FBQUEsZUFBTW1DLEtBQUssQ0FBQyxPQUFELENBQVg7QUFBQTtBQVh5QixLQUQxQztBQWVEOztBQUVEZCxhQUFXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJfdWkvYnVpbGQvanMvYXJlenpvL3BhZ2VzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZS9qcy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICpcbiAqIEBkZXNjcmlwdGlvbiBhdHJlbGEgZXZlbnRvcyBkZSB0b3F1ZSBhbyBlbGVtZW50byBlbnZpYWRvIGUgY2hhbWEgYXMgZnVuw6fDtWVzIGRlIGNhbGxiYWNrIGNvcnJlc3BvbmRlbnRlc1xuICogQHBhcmFtIHtub2RlfSBlbFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT25HcmFiKGVsLCB7XG4gIHNhZmVYID0gMjAsXG4gIHNhZmVZID0gMjAsXG4gIG9uRHJhZ1RvcCxcbiAgb25EcmFnQm90dG9tLFxuICBvbkRyYWdMZWZ0LFxuICBvbkRyYWdSaWdodCxcbiAgb25HcmFiLFxuICBvbkRyYWcsXG4gIG9uRHJvcCxcbiAgb25Ecm9wVG9wLFxuICBvbkRyb3BCb3R0b20sXG4gIG9uRHJvcExlZnQsXG4gIG9uRHJvcFJpZ2h0LFxufSA9IHt9KSB7XG4gIGxldCBicmVha3BvaW50WDtcbiAgbGV0IGJyZWFrcG9pbnRZO1xuICBsZXQgc3RhcnRYO1xuICBsZXQgZW5kWDtcbiAgbGV0IHN0YXJ0WTtcbiAgbGV0IGVuZFk7XG4gIGxldCBjbGlja2luZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUdyYWIoZSwgeCwgeSkge1xuICAgIGJyZWFrcG9pbnRYID0geDtcbiAgICBicmVha3BvaW50WSA9IHk7XG4gICAgc3RhcnRYID0gYnJlYWtwb2ludFg7XG4gICAgc3RhcnRZID0gYnJlYWtwb2ludFk7XG4gICAgb25HcmFiICYmIG9uR3JhYihlLCB7IHg6IHN0YXJ0WCwgeTogc3RhcnRZIH0pO1xuICB9XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBjbGlja2luZyA9IHRydWU7XG4gICAgY29uc3QgeCA9IGUuc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5zY3JlZW5ZO1xuICAgIGhhbmRsZUdyYWIoZSwgeCwgeSk7XG4gIH0pO1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgY29uc3QgeSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICBoYW5kbGVHcmFiKGUsIHgsIHkpO1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVEcm9wKGUsIHgsIHkpIHtcbiAgICBlbmRYID0geDtcbiAgICBlbmRZID0geTtcblxuICAgIGlmIChzYWZlWCA8IGVuZFggLSBzdGFydFgpIHtcbiAgICAgIG9uRHJvcFJpZ2h0ICYmIG9uRHJvcFJpZ2h0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVYIDwgc3RhcnRYIC0gZW5kWCkge1xuICAgICAgb25Ecm9wTGVmdCAmJiBvbkRyb3BMZWZ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVZIDwgZW5kWSAtIHN0YXJ0WSkge1xuICAgICAgb25Ecm9wQm90dG9tICYmIG9uRHJvcEJvdHRvbSgpO1xuICAgIH1cblxuICAgIGlmIChzYWZlWSA8IHN0YXJ0WSAtIGVuZFkpIHtcbiAgICAgIG9uRHJvcFRvcCAmJiBvbkRyb3BUb3AoKTtcbiAgICB9XG4gICAgb25Ecm9wICYmIG9uRHJvcChlLCB7IHg6IGVuZFgsIHk6IGVuZFkgfSk7XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLnNjcmVlblk7XG4gICAgY2xpY2tpbmcgPSBmYWxzZTtcbiAgICBoYW5kbGVEcm9wKGUsIHgsIHkpXG4gIH0pO1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gICAgaGFuZGxlRHJvcChlLCB4LCB5KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJhZyhlLCB4LCB5KSB7XG4gICAgbGV0IHBvc2l0aW9uWCA9IHg7XG4gICAgbGV0IHBvc2l0aW9uWSA9IHk7XG5cbiAgICBpZiAoc2FmZVggPCBwb3NpdGlvblggLSBicmVha3BvaW50WCkge1xuICAgICAgb25EcmFnUmlnaHQgJiYgb25EcmFnUmlnaHQoKTtcbiAgICAgIGJyZWFrcG9pbnRYID0gcG9zaXRpb25YO1xuICAgIH1cblxuICAgIGlmIChzYWZlWCA8IGJyZWFrcG9pbnRYIC0gcG9zaXRpb25YKSB7XG4gICAgICBvbkRyYWdMZWZ0ICYmIG9uRHJhZ0xlZnQoKTtcbiAgICAgIGJyZWFrcG9pbnRYID0gcG9zaXRpb25YO1xuICAgIH1cblxuICAgIGlmIChzYWZlWSA8IHBvc2l0aW9uWSAtIGJyZWFrcG9pbnRZKSB7XG4gICAgICBvbkRyYWdUb3AgJiYgb25EcmFnVG9wKCk7XG4gICAgICBicmVha3BvaW50WSA9IHBvc2l0aW9uWTtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVkgPCBicmVha3BvaW50WSAtIHBvc2l0aW9uWSkge1xuICAgICAgb25EcmFnQm90dG9tICYmIG9uRHJhZ0JvdHRvbSgpO1xuICAgICAgYnJlYWtwb2ludFkgPSBwb3NpdGlvblk7XG4gICAgfVxuXG4gICAgb25EcmFnICYmIG9uRHJhZyhlLCB7IHg6IHBvc2l0aW9uWCwgeTogcG9zaXRpb25ZIH0pO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICBpZiAoIWNsaWNraW5nKSByZXR1cm47XG4gICAgY29uc3QgeCA9IGUuc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5zY3JlZW5ZO1xuICAgIGhhbmRsZURyYWcoZSwgeCwgeSk7XG4gIH0pO1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgIGhhbmRsZURyYWcoZSwgeCwgeSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IE9uR3JhYiBmcm9tICcuL09uR3JhYi5qcyc7XG5cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCkge1xuICBjb25zdCBlbFhBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoLXJlc3VsdC0xLXgnKTtcbiAgY29uc3QgZWxZQXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaC1yZXN1bHQtMS15Jyk7XG4gIGNvbnN0IGVsU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoLXN0YXR1cy0xJyk7XG4gIGNvbnN0IGVsRHJvcFggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2gtZHJvcC0xLXgnKTtcbiAgY29uc3QgZWxEcm9wWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaC1kcm9wLTEteScpO1xuICBsZXQgY29udFggPSAwO1xuICBsZXQgY29udFkgPSAwO1xuXG4gIGZ1bmN0aW9uIG9uWE1vdmUoZm4pIHtcbiAgICBjb250WCA9IGZuKGNvbnRYKTtcbiAgICBlbFhBeGlzLmlubmVySFRNTCA9IGNvbnRYO1xuICB9XG5cbiAgZnVuY3Rpb24gb25ZTW92ZShmbikge1xuICAgIGNvbnRZID0gZm4oY29udFkpO1xuICAgIGVsWUF4aXMuaW5uZXJIVE1MID0gY29udFk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkdyYWIoKSB7XG4gICAgZWxTdGF0dXMuaW5uZXJIVE1MID0gJ0dSQUJCSU5HJztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcCgpIHtcbiAgICBvbllNb3ZlKCgpID0+IDApO1xuICAgIG9uWE1vdmUoKCkgPT4gMCk7XG4gICAgZWxTdGF0dXMuaW5uZXJIVE1MID0gJ0dSQUIhJztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlLCBheGVzKSB7XG4gICAgLy8gY29uc29sZS5sb2coYXhlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wWChkaXJlY3Rpb24pIHtcbiAgICBlbERyb3BYLmlubmVySFRNTCA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BZKGRpcmVjdGlvbikge1xuICAgIGVsRHJvcFkuaW5uZXJIVE1MID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgT25HcmFiKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaC1wYWQtMScpLCB7XG4gICAgICBvbkRyYWdMZWZ0OiAoKSA9PiBvblhNb3ZlKGkgPT4gaSAtPSAxKSxcbiAgICAgIG9uRHJhZ1JpZ2h0OiAoKSA9PiBvblhNb3ZlKGkgPT4gaSArPSAxKSxcbiAgICAgIG9uRHJhZ1RvcDogKCkgPT4gb25ZTW92ZShpID0+IGkgLT0gMSksXG4gICAgICBvbkRyYWdCb3R0b206ICgpID0+IG9uWU1vdmUoaSA9PiBpICs9IDEpLFxuICAgICAgb25HcmFiLFxuICAgICAgb25Ecm9wLFxuICAgICAgb25EcmFnLFxuICAgICAgb25Ecm9wVG9wOiAoKSA9PiBkcm9wWSgndG9wJyksXG4gICAgICBvbkRyb3BCb3R0b206ICgpID0+IGRyb3BZKCdib3R0b20nKSxcbiAgICAgIG9uRHJvcExlZnQ6ICgpID0+IGRyb3BYKCdsZWZ0JyksXG4gICAgICBvbkRyb3BSaWdodDogKCkgPT4gZHJvcFgoJ3JpZ2h0JylcbiAgICB9XG4gICk7XG59XG5cbm9uVG91Y2hNb3ZlKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9