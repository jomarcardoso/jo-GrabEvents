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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/OnGrab.js");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL09uR3JhYi5qcyJdLCJuYW1lcyI6WyJPbkdyYWIiLCJlbCIsInNhZmVYIiwic2FmZVkiLCJvbkRyYWdUb3AiLCJvbkRyYWdCb3R0b20iLCJvbkRyYWdMZWZ0Iiwib25EcmFnUmlnaHQiLCJvbkdyYWIiLCJvbkRyYWciLCJvbkRyb3AiLCJvbkRyb3BUb3AiLCJvbkRyb3BCb3R0b20iLCJvbkRyb3BMZWZ0Iiwib25Ecm9wUmlnaHQiLCJicmVha3BvaW50WCIsImJyZWFrcG9pbnRZIiwic3RhcnRYIiwiZW5kWCIsInN0YXJ0WSIsImVuZFkiLCJjbGlja2luZyIsImhhbmRsZUdyYWIiLCJlIiwieCIsInkiLCJhZGRFdmVudExpc3RlbmVyIiwic2NyZWVuWCIsInNjcmVlblkiLCJjaGFuZ2VkVG91Y2hlcyIsImhhbmRsZURyb3AiLCJkb2N1bWVudCIsImhhbmRsZURyYWciLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFNZSxXQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQWNQO0FBQUEsbUZBQUosRUFBSTtBQUFBLDBCQWJOQyxLQWFNO0FBQUEsUUFiTkEsS0FhTSwyQkFiRSxFQWFGO0FBQUEsMEJBWk5DLEtBWU07QUFBQSxRQVpOQSxLQVlNLDJCQVpFLEVBWUY7QUFBQSxRQVhOQyxTQVdNLFFBWE5BLFNBV007QUFBQSxRQVZOQyxZQVVNLFFBVk5BLFlBVU07QUFBQSxRQVROQyxVQVNNLFFBVE5BLFVBU007QUFBQSxRQVJOQyxXQVFNLFFBUk5BLFdBUU07QUFBQSxRQVBOQyxNQU9NLFFBUE5BLE1BT007QUFBQSxRQU5OQyxNQU1NLFFBTk5BLE1BTU07QUFBQSxRQUxOQyxNQUtNLFFBTE5BLE1BS007QUFBQSxRQUpOQyxTQUlNLFFBSk5BLFNBSU07QUFBQSxRQUhOQyxZQUdNLFFBSE5BLFlBR007QUFBQSxRQUZOQyxVQUVNLFFBRk5BLFVBRU07QUFBQSxRQUROQyxXQUNNLFFBRE5BLFdBQ007O0FBQ04sUUFBSUMsV0FBSjtBQUNBLFFBQUlDLFdBQUo7QUFDQSxRQUFJQyxNQUFKO0FBQ0EsUUFBSUMsSUFBSjtBQUNBLFFBQUlDLE1BQUo7QUFDQSxRQUFJQyxJQUFKO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsYUFBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtBQUMzQlYsaUJBQVcsR0FBR1MsQ0FBZDtBQUNBUixpQkFBVyxHQUFHUyxDQUFkO0FBQ0FSLFlBQU0sR0FBR0YsV0FBVDtBQUNBSSxZQUFNLEdBQUdILFdBQVQ7QUFDQVIsWUFBTSxJQUFJQSxNQUFNLENBQUNlLENBQUQsRUFBSTtBQUFFQyxTQUFDLEVBQUVQLE1BQUw7QUFBYVEsU0FBQyxFQUFFTjtBQUFoQixPQUFKLENBQWhCO0FBQ0Q7O0FBRURsQixNQUFFLENBQUN5QixnQkFBSCxDQUFvQixXQUFwQixFQUFpQyxVQUFDSCxDQUFELEVBQU87QUFDdENGLGNBQVEsR0FBRyxJQUFYO0FBQ0EsVUFBTUcsQ0FBQyxHQUFHRCxDQUFDLENBQUNJLE9BQVo7QUFDQSxVQUFNRixDQUFDLEdBQUdGLENBQUMsQ0FBQ0ssT0FBWjtBQUNBTixnQkFBVSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FMRDtBQU9BeEIsTUFBRSxDQUFDeUIsZ0JBQUgsQ0FBb0IsWUFBcEIsRUFBa0MsVUFBQ0gsQ0FBRCxFQUFPO0FBQ3ZDLFVBQU1DLENBQUMsR0FBR0QsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRixPQUE5QjtBQUNBLFVBQU1GLENBQUMsR0FBR0YsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRCxPQUE5QjtBQUNBTixnQkFBVSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FKRDs7QUFNQSxhQUFTSyxVQUFULENBQW9CUCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCO0FBQzNCUCxVQUFJLEdBQUdNLENBQVA7QUFDQUosVUFBSSxHQUFHSyxDQUFQOztBQUVBLFVBQUl2QixLQUFLLEdBQUdnQixJQUFJLEdBQUdELE1BQW5CLEVBQTJCO0FBQ3pCSCxtQkFBVyxJQUFJQSxXQUFXLEVBQTFCO0FBQ0Q7O0FBRUQsVUFBSVosS0FBSyxHQUFHZSxNQUFNLEdBQUdDLElBQXJCLEVBQTJCO0FBQ3pCTCxrQkFBVSxJQUFJQSxVQUFVLEVBQXhCO0FBQ0Q7O0FBRUQsVUFBSVYsS0FBSyxHQUFHaUIsSUFBSSxHQUFHRCxNQUFuQixFQUEyQjtBQUN6QlAsb0JBQVksSUFBSUEsWUFBWSxFQUE1QjtBQUNEOztBQUVELFVBQUlULEtBQUssR0FBR2dCLE1BQU0sR0FBR0MsSUFBckIsRUFBMkI7QUFDekJULGlCQUFTLElBQUlBLFNBQVMsRUFBdEI7QUFDRDs7QUFDREQsWUFBTSxJQUFJQSxNQUFNLENBQUNhLENBQUQsRUFBSTtBQUFFQyxTQUFDLEVBQUVOLElBQUw7QUFBV08sU0FBQyxFQUFFTDtBQUFkLE9BQUosQ0FBaEI7QUFDRDs7QUFFRFcsWUFBUSxDQUFDTCxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDSCxDQUFELEVBQU87QUFDMUMsVUFBTUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNJLE9BQVo7QUFDQSxVQUFNRixDQUFDLEdBQUdGLENBQUMsQ0FBQ0ssT0FBWjtBQUNBUCxjQUFRLEdBQUcsS0FBWDtBQUNBUyxnQkFBVSxDQUFDUCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FMRDtBQU9BeEIsTUFBRSxDQUFDeUIsZ0JBQUgsQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBQ0gsQ0FBRCxFQUFPO0FBQ3JDLFVBQU1DLENBQUMsR0FBR0QsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRixPQUE5QjtBQUNBLFVBQU1GLENBQUMsR0FBR0YsQ0FBQyxDQUFDTSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRCxPQUE5QjtBQUNBRSxnQkFBVSxDQUFDUCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsS0FKRDs7QUFNQSxhQUFTTyxVQUFULENBQW9CVCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCO0FBQzNCLFVBQUlRLFNBQVMsR0FBR1QsQ0FBaEI7QUFDQSxVQUFJVSxTQUFTLEdBQUdULENBQWhCOztBQUVBLFVBQUl2QixLQUFLLEdBQUcrQixTQUFTLEdBQUdsQixXQUF4QixFQUFxQztBQUNuQ1IsbUJBQVcsSUFBSUEsV0FBVyxFQUExQjtBQUNBUSxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVELFVBQUkvQixLQUFLLEdBQUdhLFdBQVcsR0FBR2tCLFNBQTFCLEVBQXFDO0FBQ25DM0Isa0JBQVUsSUFBSUEsVUFBVSxFQUF4QjtBQUNBUyxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVELFVBQUk5QixLQUFLLEdBQUcrQixTQUFTLEdBQUdsQixXQUF4QixFQUFxQztBQUNuQ1osaUJBQVMsSUFBSUEsU0FBUyxFQUF0QjtBQUNBWSxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVELFVBQUkvQixLQUFLLEdBQUdhLFdBQVcsR0FBR2tCLFNBQTFCLEVBQXFDO0FBQ25DN0Isb0JBQVksSUFBSUEsWUFBWSxFQUE1QjtBQUNBVyxtQkFBVyxHQUFHa0IsU0FBZDtBQUNEOztBQUVEekIsWUFBTSxJQUFJQSxNQUFNLENBQUNjLENBQUQsRUFBSTtBQUFFQyxTQUFDLEVBQUVTLFNBQUw7QUFBZ0JSLFNBQUMsRUFBRVM7QUFBbkIsT0FBSixDQUFoQjtBQUNEOztBQUVESCxZQUFRLENBQUNMLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLFVBQUNILENBQUQsRUFBTztBQUM1QyxVQUFJLENBQUNGLFFBQUwsRUFBZTtBQUNmLFVBQU1HLENBQUMsR0FBR0QsQ0FBQyxDQUFDSSxPQUFaO0FBQ0EsVUFBTUYsQ0FBQyxHQUFHRixDQUFDLENBQUNLLE9BQVo7QUFDQUksZ0JBQVUsQ0FBQ1QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsQ0FBVjtBQUNELEtBTEQ7QUFPQXhCLE1BQUUsQ0FBQ3lCLGdCQUFILENBQW9CLFdBQXBCLEVBQWlDLFVBQUNILENBQUQsRUFBTztBQUN0QyxVQUFNQyxDQUFDLEdBQUdELENBQUMsQ0FBQ00sY0FBRixDQUFpQixDQUFqQixFQUFvQkYsT0FBOUI7QUFDQSxVQUFNRixDQUFDLEdBQUdGLENBQUMsQ0FBQ00sY0FBRixDQUFpQixDQUFqQixFQUFvQkQsT0FBOUI7QUFDQUksZ0JBQVUsQ0FBQ1QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsQ0FBVjtBQUNELEtBSkQ7QUFLRCIsImZpbGUiOiJPbkdyYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIl91aS9idWlsZC9qcy9hcmV6em8vcGFnZXMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlL2pzL09uR3JhYi5qc1wiKTtcbiIsIi8qKlxuICpcbiAqIEBkZXNjcmlwdGlvbiBhdHJlbGEgZXZlbnRvcyBkZSB0b3F1ZSBhbyBlbGVtZW50byBlbnZpYWRvIGUgY2hhbWEgYXMgZnVuw6fDtWVzIGRlIGNhbGxiYWNrIGNvcnJlc3BvbmRlbnRlc1xuICogQHBhcmFtIHtub2RlfSBlbFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT25HcmFiKGVsLCB7XG4gIHNhZmVYID0gMjAsXG4gIHNhZmVZID0gMjAsXG4gIG9uRHJhZ1RvcCxcbiAgb25EcmFnQm90dG9tLFxuICBvbkRyYWdMZWZ0LFxuICBvbkRyYWdSaWdodCxcbiAgb25HcmFiLFxuICBvbkRyYWcsXG4gIG9uRHJvcCxcbiAgb25Ecm9wVG9wLFxuICBvbkRyb3BCb3R0b20sXG4gIG9uRHJvcExlZnQsXG4gIG9uRHJvcFJpZ2h0LFxufSA9IHt9KSB7XG4gIGxldCBicmVha3BvaW50WDtcbiAgbGV0IGJyZWFrcG9pbnRZO1xuICBsZXQgc3RhcnRYO1xuICBsZXQgZW5kWDtcbiAgbGV0IHN0YXJ0WTtcbiAgbGV0IGVuZFk7XG4gIGxldCBjbGlja2luZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUdyYWIoZSwgeCwgeSkge1xuICAgIGJyZWFrcG9pbnRYID0geDtcbiAgICBicmVha3BvaW50WSA9IHk7XG4gICAgc3RhcnRYID0gYnJlYWtwb2ludFg7XG4gICAgc3RhcnRZID0gYnJlYWtwb2ludFk7XG4gICAgb25HcmFiICYmIG9uR3JhYihlLCB7IHg6IHN0YXJ0WCwgeTogc3RhcnRZIH0pO1xuICB9XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBjbGlja2luZyA9IHRydWU7XG4gICAgY29uc3QgeCA9IGUuc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5zY3JlZW5ZO1xuICAgIGhhbmRsZUdyYWIoZSwgeCwgeSk7XG4gIH0pO1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgY29uc3QgeSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICBoYW5kbGVHcmFiKGUsIHgsIHkpO1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVEcm9wKGUsIHgsIHkpIHtcbiAgICBlbmRYID0geDtcbiAgICBlbmRZID0geTtcblxuICAgIGlmIChzYWZlWCA8IGVuZFggLSBzdGFydFgpIHtcbiAgICAgIG9uRHJvcFJpZ2h0ICYmIG9uRHJvcFJpZ2h0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVYIDwgc3RhcnRYIC0gZW5kWCkge1xuICAgICAgb25Ecm9wTGVmdCAmJiBvbkRyb3BMZWZ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVZIDwgZW5kWSAtIHN0YXJ0WSkge1xuICAgICAgb25Ecm9wQm90dG9tICYmIG9uRHJvcEJvdHRvbSgpO1xuICAgIH1cblxuICAgIGlmIChzYWZlWSA8IHN0YXJ0WSAtIGVuZFkpIHtcbiAgICAgIG9uRHJvcFRvcCAmJiBvbkRyb3BUb3AoKTtcbiAgICB9XG4gICAgb25Ecm9wICYmIG9uRHJvcChlLCB7IHg6IGVuZFgsIHk6IGVuZFkgfSk7XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLnNjcmVlblk7XG4gICAgY2xpY2tpbmcgPSBmYWxzZTtcbiAgICBoYW5kbGVEcm9wKGUsIHgsIHkpXG4gIH0pO1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gICAgaGFuZGxlRHJvcChlLCB4LCB5KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJhZyhlLCB4LCB5KSB7XG4gICAgbGV0IHBvc2l0aW9uWCA9IHg7XG4gICAgbGV0IHBvc2l0aW9uWSA9IHk7XG5cbiAgICBpZiAoc2FmZVggPCBwb3NpdGlvblggLSBicmVha3BvaW50WCkge1xuICAgICAgb25EcmFnUmlnaHQgJiYgb25EcmFnUmlnaHQoKTtcbiAgICAgIGJyZWFrcG9pbnRYID0gcG9zaXRpb25YO1xuICAgIH1cblxuICAgIGlmIChzYWZlWCA8IGJyZWFrcG9pbnRYIC0gcG9zaXRpb25YKSB7XG4gICAgICBvbkRyYWdMZWZ0ICYmIG9uRHJhZ0xlZnQoKTtcbiAgICAgIGJyZWFrcG9pbnRYID0gcG9zaXRpb25YO1xuICAgIH1cblxuICAgIGlmIChzYWZlWSA8IHBvc2l0aW9uWSAtIGJyZWFrcG9pbnRZKSB7XG4gICAgICBvbkRyYWdUb3AgJiYgb25EcmFnVG9wKCk7XG4gICAgICBicmVha3BvaW50WSA9IHBvc2l0aW9uWTtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVkgPCBicmVha3BvaW50WSAtIHBvc2l0aW9uWSkge1xuICAgICAgb25EcmFnQm90dG9tICYmIG9uRHJhZ0JvdHRvbSgpO1xuICAgICAgYnJlYWtwb2ludFkgPSBwb3NpdGlvblk7XG4gICAgfVxuXG4gICAgb25EcmFnICYmIG9uRHJhZyhlLCB7IHg6IHBvc2l0aW9uWCwgeTogcG9zaXRpb25ZIH0pO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICBpZiAoIWNsaWNraW5nKSByZXR1cm47XG4gICAgY29uc3QgeCA9IGUuc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5zY3JlZW5ZO1xuICAgIGhhbmRsZURyYWcoZSwgeCwgeSk7XG4gIH0pO1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgIGhhbmRsZURyYWcoZSwgeCwgeSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==