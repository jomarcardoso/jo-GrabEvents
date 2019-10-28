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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/OnGrab.ts");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL09uR3JhYi50cyJdLCJuYW1lcyI6WyJPbkdyYWIiLCJlbCIsInNhZmVYIiwic2FmZVkiLCJvbkRyYWdUb3AiLCJvbkRyYWdCb3R0b20iLCJvbkRyYWdMZWZ0Iiwib25EcmFnUmlnaHQiLCJvbkdyYWIiLCJvbkRyYWciLCJvbkRyb3AiLCJvbkRyb3BUb3AiLCJvbkRyb3BCb3R0b20iLCJvbkRyb3BMZWZ0Iiwib25Ecm9wUmlnaHQiLCJicmVha3BvaW50WCIsImJyZWFrcG9pbnRZIiwic3RhcnRYIiwiZW5kWCIsInN0YXJ0WSIsImVuZFkiLCJjbGlja2luZyIsImhhbmRsZUdyYWIiLCJlIiwieCIsInkiLCJhZGRFdmVudExpc3RlbmVyIiwic2NyZWVuWCIsInNjcmVlblkiLCJjaGFuZ2VkVG91Y2hlcyIsImhhbmRsZURyb3AiLCJkb2N1bWVudCIsImhhbmRsZURyYWciLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxl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O0FBRUQsUUFBSTlCLEtBQUssR0FBRytCLFNBQVMsR0FBR2xCLFdBQXhCLEVBQXFDO0FBQ25DWixlQUFTLElBQUlBLFNBQVMsRUFBdEI7QUFDQVksaUJBQVcsR0FBR2tCLFNBQWQ7QUFDRDs7QUFFRCxRQUFJL0IsS0FBSyxHQUFHYSxXQUFXLEdBQUdrQixTQUExQixFQUFxQztBQUNuQzdCLGtCQUFZLElBQUlBLFlBQVksRUFBNUI7QUFDQVcsaUJBQVcsR0FBR2tCLFNBQWQ7QUFDRDs7QUFFRHpCLFVBQU0sSUFBSUEsTUFBTSxDQUFDYyxDQUFELEVBQUk7QUFBRUMsT0FBQyxFQUFFUyxTQUFMO0FBQWdCUixPQUFDLEVBQUVTO0FBQW5CLEtBQUosQ0FBaEI7QUFDRDs7QUFFREgsVUFBUSxDQUFDTCxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxVQUFDSCxDQUFELEVBQU87QUFDNUMsUUFBSSxDQUFDRixRQUFMLEVBQWU7QUFDZixRQUFNRyxDQUFDLEdBQUdELENBQUMsQ0FBQ0ksT0FBWjtBQUNBLFFBQU1GLENBQUMsR0FBR0YsQ0FBQyxDQUFDSyxPQUFaO0FBQ0FJLGNBQVUsQ0FBQ1QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsQ0FBVjtBQUNELEdBTEQ7QUFPQXhCLElBQUUsQ0FBQ3lCLGdCQUFILENBQW9CLFdBQXBCLEVBQWlDLFVBQUNILENBQUQsRUFBTztBQUN0QyxRQUFNQyxDQUFDLEdBQUdELENBQUMsQ0FBQ00sY0FBRixDQUFpQixDQUFqQixFQUFvQkYsT0FBOUI7QUFDQSxRQUFNRixDQUFDLEdBQUdGLENBQUMsQ0FBQ00sY0FBRixDQUFpQixDQUFqQixFQUFvQkQsT0FBOUI7QUFDQUksY0FBVSxDQUFDVCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFWO0FBQ0QsR0FKRDtBQUtELEMiLCJmaWxlIjoiT25HcmFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJfdWkvYnVpbGQvanMvYXJlenpvL3BhZ2VzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZS9qcy9PbkdyYWIudHNcIik7XG4iLCIvKipcbiAqXG4gKiBAZGVzY3JpcHRpb24gYXRyZWxhIGV2ZW50b3MgZGUgdG9xdWUgYW8gZWxlbWVudG8gZW52aWFkbyBlIGNoYW1hIGFzIGZ1bsOnw7VlcyBkZSBjYWxsYmFjayBjb3JyZXNwb25kZW50ZXNcbiAqIEBwYXJhbSB7bm9kZX0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uR3JhYihlbCwge1xuICBzYWZlWCA9IDIwLFxuICBzYWZlWSA9IDIwLFxuICBvbkRyYWdUb3AsXG4gIG9uRHJhZ0JvdHRvbSxcbiAgb25EcmFnTGVmdCxcbiAgb25EcmFnUmlnaHQsXG4gIG9uR3JhYixcbiAgb25EcmFnLFxuICBvbkRyb3AsXG4gIG9uRHJvcFRvcCxcbiAgb25Ecm9wQm90dG9tLFxuICBvbkRyb3BMZWZ0LFxuICBvbkRyb3BSaWdodCxcbn0gPSB7fSkge1xuICBsZXQgYnJlYWtwb2ludFg7XG4gIGxldCBicmVha3BvaW50WTtcbiAgbGV0IHN0YXJ0WDtcbiAgbGV0IGVuZFg7XG4gIGxldCBzdGFydFk7XG4gIGxldCBlbmRZO1xuICBsZXQgY2xpY2tpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoYW5kbGVHcmFiKGUsIHgsIHkpIHtcbiAgICBicmVha3BvaW50WCA9IHg7XG4gICAgYnJlYWtwb2ludFkgPSB5O1xuICAgIHN0YXJ0WCA9IGJyZWFrcG9pbnRYO1xuICAgIHN0YXJ0WSA9IGJyZWFrcG9pbnRZO1xuICAgIG9uR3JhYiAmJiBvbkdyYWIoZSwgeyB4OiBzdGFydFgsIHk6IHN0YXJ0WSB9KTtcbiAgfVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgY2xpY2tpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHggPSBlLnNjcmVlblg7XG4gICAgY29uc3QgeSA9IGUuc2NyZWVuWTtcbiAgICBoYW5kbGVHcmFiKGUsIHgsIHkpO1xuICB9KTtcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIGNvbnN0IHkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gICAgaGFuZGxlR3JhYihlLCB4LCB5KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJvcChlLCB4LCB5KSB7XG4gICAgZW5kWCA9IHg7XG4gICAgZW5kWSA9IHk7XG5cbiAgICBpZiAoc2FmZVggPCBlbmRYIC0gc3RhcnRYKSB7XG4gICAgICBvbkRyb3BSaWdodCAmJiBvbkRyb3BSaWdodCgpO1xuICAgIH1cblxuICAgIGlmIChzYWZlWCA8IHN0YXJ0WCAtIGVuZFgpIHtcbiAgICAgIG9uRHJvcExlZnQgJiYgb25Ecm9wTGVmdCgpO1xuICAgIH1cblxuICAgIGlmIChzYWZlWSA8IGVuZFkgLSBzdGFydFkpIHtcbiAgICAgIG9uRHJvcEJvdHRvbSAmJiBvbkRyb3BCb3R0b20oKTtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVkgPCBzdGFydFkgLSBlbmRZKSB7XG4gICAgICBvbkRyb3BUb3AgJiYgb25Ecm9wVG9wKCk7XG4gICAgfVxuICAgIG9uRHJvcCAmJiBvbkRyb3AoZSwgeyB4OiBlbmRYLCB5OiBlbmRZIH0pO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUuc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5zY3JlZW5ZO1xuICAgIGNsaWNraW5nID0gZmFsc2U7XG4gICAgaGFuZGxlRHJvcChlLCB4LCB5KVxuICB9KTtcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICBjb25zdCB5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgIGhhbmRsZURyb3AoZSwgeCwgeSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURyYWcoZSwgeCwgeSkge1xuICAgIGxldCBwb3NpdGlvblggPSB4O1xuICAgIGxldCBwb3NpdGlvblkgPSB5O1xuXG4gICAgaWYgKHNhZmVYIDwgcG9zaXRpb25YIC0gYnJlYWtwb2ludFgpIHtcbiAgICAgIG9uRHJhZ1JpZ2h0ICYmIG9uRHJhZ1JpZ2h0KCk7XG4gICAgICBicmVha3BvaW50WCA9IHBvc2l0aW9uWDtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVggPCBicmVha3BvaW50WCAtIHBvc2l0aW9uWCkge1xuICAgICAgb25EcmFnTGVmdCAmJiBvbkRyYWdMZWZ0KCk7XG4gICAgICBicmVha3BvaW50WCA9IHBvc2l0aW9uWDtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVkgPCBwb3NpdGlvblkgLSBicmVha3BvaW50WSkge1xuICAgICAgb25EcmFnVG9wICYmIG9uRHJhZ1RvcCgpO1xuICAgICAgYnJlYWtwb2ludFkgPSBwb3NpdGlvblk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVZIDwgYnJlYWtwb2ludFkgLSBwb3NpdGlvblkpIHtcbiAgICAgIG9uRHJhZ0JvdHRvbSAmJiBvbkRyYWdCb3R0b20oKTtcbiAgICAgIGJyZWFrcG9pbnRZID0gcG9zaXRpb25ZO1xuICAgIH1cblxuICAgIG9uRHJhZyAmJiBvbkRyYWcoZSwgeyB4OiBwb3NpdGlvblgsIHk6IHBvc2l0aW9uWSB9KTtcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgaWYgKCFjbGlja2luZykgcmV0dXJuO1xuICAgIGNvbnN0IHggPSBlLnNjcmVlblg7XG4gICAgY29uc3QgeSA9IGUuc2NyZWVuWTtcbiAgICBoYW5kbGVEcmFnKGUsIHgsIHkpO1xuICB9KTtcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgY29uc3QgeSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICBoYW5kbGVEcmFnKGUsIHgsIHkpO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=