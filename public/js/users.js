/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/users.js":
/*!*******************************!*\
  !*** ./resources/js/users.js ***!
  \*******************************/
/***/ (() => {

eval("Livewire.on(\"deleteTriggered\", function (id, name) {\n  var proceed = confirm(\"Are you sure you want to delete \".concat(name));\n\n  if (proceed) {\n    Livewire.emit(\"delete\", id);\n  }\n\n  window.addEventListener(\"user-deleted\", function (event) {\n    alert(\"\".concat(event.detail.user_name, \" was deleted\"));\n  });\n});\nLivewire.on(\"triggerCreate\", function () {\n  $(\"#user-modal\").modal(\"show\");\n});\nwindow.addEventListener(\"user-saved\", function (event) {\n  $(\"#user-modal\").modal(\"hide\");\n  alert(\"User \".concat(event.detail.user_name, \" was \").concat(event.detail.action, \"!\"));\n});\nLivewire.on(\"dataFetched\", function (user) {\n  $(\"#user-modal\").modal(\"show\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMuanM/ZWJjZSJdLCJuYW1lcyI6WyJMaXZld2lyZSIsIm9uIiwiaWQiLCJuYW1lIiwicHJvY2VlZCIsImNvbmZpcm0iLCJlbWl0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYWxlcnQiLCJkZXRhaWwiLCJ1c2VyX25hbWUiLCIkIiwibW9kYWwiLCJhY3Rpb24iLCJ1c2VyIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxFQUFULENBQVksaUJBQVosRUFBK0IsVUFBQ0MsRUFBRCxFQUFLQyxJQUFMLEVBQWM7QUFDekMsTUFBTUMsT0FBTyxHQUFHQyxPQUFPLDJDQUFvQ0YsSUFBcEMsRUFBdkI7O0FBRUEsTUFBSUMsT0FBSixFQUFhO0FBQ1RKLElBQUFBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLFFBQWQsRUFBd0JKLEVBQXhCO0FBQ0g7O0FBQ0RLLEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsY0FBeEIsRUFBdUMsVUFBQ0MsS0FBRCxFQUFTO0FBQzVDQyxJQUFBQSxLQUFLLFdBQUlELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxTQUFqQixrQkFBTDtBQUNILEdBRkQ7QUFHSCxDQVREO0FBV0FaLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZLGVBQVosRUFBNEIsWUFBTTtBQUM5QlksRUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUIsTUFBdkI7QUFDSCxDQUZEO0FBSUFQLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsVUFBQ0MsS0FBRCxFQUFXO0FBQzdDSSxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxLQUFqQixDQUF1QixNQUF2QjtBQUNBSixFQUFBQSxLQUFLLGdCQUFTRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsU0FBdEIsa0JBQXVDSCxLQUFLLENBQUNFLE1BQU4sQ0FBYUksTUFBcEQsT0FBTDtBQUNILENBSEQ7QUFLQWYsUUFBUSxDQUFDQyxFQUFULENBQVksYUFBWixFQUEyQixVQUFDZSxJQUFELEVBQVU7QUFDakNILEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLE1BQXZCO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbIkxpdmV3aXJlLm9uKFwiZGVsZXRlVHJpZ2dlcmVkXCIsIChpZCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2NlZWQgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7bmFtZX1gKTtcblxuICAgIGlmIChwcm9jZWVkKSB7XG4gICAgICAgIExpdmV3aXJlLmVtaXQoXCJkZWxldGVcIiwgaWQpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVzZXItZGVsZXRlZFwiLChldmVudCk9PntcbiAgICAgICAgYWxlcnQoYCR7ZXZlbnQuZGV0YWlsLnVzZXJfbmFtZX0gd2FzIGRlbGV0ZWRgKVxuICAgIH0pXG59KTtcblxuTGl2ZXdpcmUub24oXCJ0cmlnZ2VyQ3JlYXRlXCIsKCkgPT4ge1xuICAgICQoXCIjdXNlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidXNlci1zYXZlZFwiLCAoZXZlbnQpID0+IHtcbiAgICAkKFwiI3VzZXItbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgIGFsZXJ0KGBVc2VyICR7ZXZlbnQuZGV0YWlsLnVzZXJfbmFtZX0gd2FzICR7ZXZlbnQuZGV0YWlsLmFjdGlvbn0hYCk7XG59KTtcblxuTGl2ZXdpcmUub24oXCJkYXRhRmV0Y2hlZFwiLCAodXNlcikgPT4ge1xuICAgICQoXCIjdXNlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XG59KTtcbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/users.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/users.js"]();
/******/ 	
/******/ })()
;