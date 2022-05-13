"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Chart.jsx":
/*!******************************!*\
  !*** ./components/Chart.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! victory */ \"victory\");\n/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_queries_GetTotal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/GetTotal */ \"./graphql/queries/GetTotal.js\");\n\n\n\n\n\nconst Chart = ()=>{\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_GetTotal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        pollInterval: 2500\n    });\n    if (loading) return \"Loading...\";\n    if (error) return `Error! ${error.message}`;\n    const length = data.getTotal.length;\n    const categories = data.getTotal.map((e)=>e[\"_id\"].category\n    );\n    const amounts = data.getTotal.map((e)=>e.amount\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(victory__WEBPACK_IMPORTED_MODULE_3__.VictoryChart, {\n        width: 400,\n        height: 400,\n        theme: victory__WEBPACK_IMPORTED_MODULE_3__.VictoryTheme.material,\n        domainPadding: {\n            x: [\n                10,\n                10\n            ],\n            y: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(victory__WEBPACK_IMPORTED_MODULE_3__.VictoryAxis, {\n                tickValues: Array.from({\n                    length: length\n                }, (_v, i)=>i\n                ),\n                tickFormat: categories\n            }, void 0, false, {\n                fileName: \"/Users/soto/Desktop/sms/components/Chart.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(victory__WEBPACK_IMPORTED_MODULE_3__.VictoryAxis, {\n                dependentAxis: true,\n                tickFormat: (x)=>`$${x}`\n            }, void 0, false, {\n                fileName: \"/Users/soto/Desktop/sms/components/Chart.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(victory__WEBPACK_IMPORTED_MODULE_3__.VictoryBar, {\n                style: {\n                    data: {\n                        fill: ({ datum  })=>datum.fill\n                    }\n                },\n                labels: ({ datum  })=>datum.amount\n                ,\n                labelComponent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(victory__WEBPACK_IMPORTED_MODULE_3__.VictoryTooltip, {}, void 0, false, void 0, void 0),\n                barRatio: 0.2,\n                alignment: \"start\",\n                data: data.getTotal,\n                x: data.getTotal[\"_id\"],\n                y: \"amount\"\n            }, void 0, false, {\n                fileName: \"/Users/soto/Desktop/sms/components/Chart.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soto/Desktop/sms/components/Chart.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJ0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDZ0I7QUFPekI7QUFDbUM7QUFFcEQsTUFBTVEsS0FBSyxHQUFHLElBQU07SUFDbEIsTUFBTSxFQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFLEdBQUdWLHdEQUFRLENBQUNNLGlFQUFTLEVBQUU7UUFBRUssWUFBWSxFQUFFLElBQUk7S0FBRSxDQUFDO0lBRTVFLElBQUlILE9BQU8sRUFBRSxPQUFPLFlBQVksQ0FBQztJQUVqQyxJQUFJQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRUEsS0FBSyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTVDLE1BQU1DLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxRQUFRLENBQUNELE1BQU07SUFDbkMsTUFBTUUsVUFBVSxHQUFHTCxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLENBQUMsR0FBS0EsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxRQUFRO0lBQUEsQ0FBQztJQUM5RCxNQUFNQyxPQUFPLEdBQUdULElBQUksQ0FBQ0ksUUFBUSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxHQUFLQSxDQUFDLENBQUNHLE1BQU07SUFBQSxDQUFDO0lBRWxELHFCQUNFLDhEQUFDbEIsaURBQVk7UUFDWG1CLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLE1BQU0sRUFBRSxHQUFHO1FBQ1hDLEtBQUssRUFBRW5CLDBEQUFxQjtRQUM1QnFCLGFBQWEsRUFBRTtZQUFFQyxDQUFDLEVBQUU7QUFBQyxrQkFBRTtBQUFFLGtCQUFFO2FBQUM7WUFBRUMsQ0FBQyxFQUFFLENBQUM7U0FBRTs7MEJBRXBDLDhEQUFDeEIsZ0RBQVc7Z0JBQ1Z5QixVQUFVLEVBQUVDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO29CQUFFakIsTUFBTSxFQUFFQSxNQUFNO2lCQUFFLEVBQUUsQ0FBQ2tCLEVBQUUsRUFBRUMsQ0FBQyxHQUFLQSxDQUFDO2dCQUFBLENBQUM7Z0JBQ3hEQyxVQUFVLEVBQUVsQixVQUFVOzs7Ozt5QkFDdEI7MEJBQ0YsOERBQUNaLGdEQUFXO2dCQUFDK0IsYUFBYTtnQkFBQ0QsVUFBVSxFQUFFLENBQUNQLENBQUMsR0FBSyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUM7Ozs7O3lCQUFJOzBCQUN6RCw4REFBQ3pCLCtDQUFVO2dCQUNUa0MsS0FBSyxFQUFFO29CQUFFekIsSUFBSSxFQUFFO3dCQUFFMEIsSUFBSSxFQUFFLENBQUMsRUFBRUMsS0FBSyxHQUFFLEdBQUtBLEtBQUssQ0FBQ0QsSUFBSTtxQkFBRTtpQkFBRTtnQkFDcERFLE1BQU0sRUFBRSxDQUFDLEVBQUVELEtBQUssR0FBRSxHQUFLQSxLQUFLLENBQUNqQixNQUFNO2dCQUFBO2dCQUNuQ21CLGNBQWMsZ0JBQUUsOERBQUNsQyxtREFBYyxvQ0FBRztnQkFDbENtQyxRQUFRLEVBQUUsR0FBRztnQkFDYkMsU0FBUyxFQUFDLE9BQU87Z0JBQ2pCL0IsSUFBSSxFQUFFQSxJQUFJLENBQUNJLFFBQVE7Z0JBQ25CWSxDQUFDLEVBQUVoQixJQUFJLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCYSxDQUFDLEVBQUMsUUFBUTs7Ozs7eUJBQ1Y7Ozs7OztpQkFDVyxDQUNmO0NBQ0g7QUFFRCxpRUFBZXBCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcnQuanN4PzJiZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7XG4gIFZpY3RvcnlCYXIsXG4gIFZpY3RvcnlDaGFydCxcbiAgVmljdG9yeUF4aXMsXG4gIFZpY3RvcnlUaGVtZSxcbiAgVmljdG9yeVRvb2x0aXAsXG59IGZyb20gXCJ2aWN0b3J5XCI7XG5pbXBvcnQgR0VUX1RPVEFMIGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXMvR2V0VG90YWxcIjtcblxuY29uc3QgQ2hhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9UT1RBTCwgeyBwb2xsSW50ZXJ2YWw6IDI1MDAgfSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiBcIkxvYWRpbmcuLi5cIjtcblxuICBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGRhdGEuZ2V0VG90YWwubGVuZ3RoO1xuICBjb25zdCBjYXRlZ29yaWVzID0gZGF0YS5nZXRUb3RhbC5tYXAoKGUpID0+IGVbXCJfaWRcIl0uY2F0ZWdvcnkpO1xuICBjb25zdCBhbW91bnRzID0gZGF0YS5nZXRUb3RhbC5tYXAoKGUpID0+IGUuYW1vdW50KTtcblxuICByZXR1cm4gKFxuICAgIDxWaWN0b3J5Q2hhcnRcbiAgICAgIHdpZHRoPXs0MDB9XG4gICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgIHRoZW1lPXtWaWN0b3J5VGhlbWUubWF0ZXJpYWx9XG4gICAgICBkb21haW5QYWRkaW5nPXt7IHg6IFsxMCwgMTBdLCB5OiA1IH19XG4gICAgPlxuICAgICAgPFZpY3RvcnlBeGlzXG4gICAgICAgIHRpY2tWYWx1ZXM9e0FycmF5LmZyb20oeyBsZW5ndGg6IGxlbmd0aCB9LCAoX3YsIGkpID0+IGkpfVxuICAgICAgICB0aWNrRm9ybWF0PXtjYXRlZ29yaWVzfVxuICAgICAgLz5cbiAgICAgIDxWaWN0b3J5QXhpcyBkZXBlbmRlbnRBeGlzIHRpY2tGb3JtYXQ9eyh4KSA9PiBgJCR7eH1gfSAvPlxuICAgICAgPFZpY3RvcnlCYXJcbiAgICAgICAgc3R5bGU9e3sgZGF0YTogeyBmaWxsOiAoeyBkYXR1bSB9KSA9PiBkYXR1bS5maWxsIH0gfX1cbiAgICAgICAgbGFiZWxzPXsoeyBkYXR1bSB9KSA9PiBkYXR1bS5hbW91bnR9XG4gICAgICAgIGxhYmVsQ29tcG9uZW50PXs8VmljdG9yeVRvb2x0aXAgLz59XG4gICAgICAgIGJhclJhdGlvPXswLjJ9XG4gICAgICAgIGFsaWdubWVudD1cInN0YXJ0XCJcbiAgICAgICAgZGF0YT17ZGF0YS5nZXRUb3RhbH1cbiAgICAgICAgeD17ZGF0YS5nZXRUb3RhbFtcIl9pZFwiXX1cbiAgICAgICAgeT1cImFtb3VudFwiXG4gICAgICAvPlxuICAgIDwvVmljdG9yeUNoYXJ0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VRdWVyeSIsIlZpY3RvcnlCYXIiLCJWaWN0b3J5Q2hhcnQiLCJWaWN0b3J5QXhpcyIsIlZpY3RvcnlUaGVtZSIsIlZpY3RvcnlUb29sdGlwIiwiR0VUX1RPVEFMIiwiQ2hhcnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicG9sbEludGVydmFsIiwibWVzc2FnZSIsImxlbmd0aCIsImdldFRvdGFsIiwiY2F0ZWdvcmllcyIsIm1hcCIsImUiLCJjYXRlZ29yeSIsImFtb3VudHMiLCJhbW91bnQiLCJ3aWR0aCIsImhlaWdodCIsInRoZW1lIiwibWF0ZXJpYWwiLCJkb21haW5QYWRkaW5nIiwieCIsInkiLCJ0aWNrVmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwiX3YiLCJpIiwidGlja0Zvcm1hdCIsImRlcGVuZGVudEF4aXMiLCJzdHlsZSIsImZpbGwiLCJkYXR1bSIsImxhYmVscyIsImxhYmVsQ29tcG9uZW50IiwiYmFyUmF0aW8iLCJhbGlnbm1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Chart.jsx\n");

/***/ }),

/***/ "./graphql/queries/GetTotal.js":
/*!*************************************!*\
  !*** ./graphql/queries/GetTotal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_TOTAL = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    getTotal {\n      _id {\n        category\n      }\n      amount\n    }\n  }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_TOTAL);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3F1ZXJpZXMvR2V0VG90YWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLFNBQVMsR0FBR0QsK0NBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3RCLENBQUM7QUFDRCxpRUFBZUMsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZ3JhcGhxbC9xdWVyaWVzL0dldFRvdGFsLmpzPzU1MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IEdFVF9UT1RBTCA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGdldFRvdGFsIHtcbiAgICAgIF9pZCB7XG4gICAgICAgIGNhdGVnb3J5XG4gICAgICB9XG4gICAgICBhbW91bnRcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgZGVmYXVsdCBHRVRfVE9UQUw7XG4iXSwibmFtZXMiOlsiZ3FsIiwiR0VUX1RPVEFMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/queries/GetTotal.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chart */ \"./components/Chart.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    uri: \"api/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            fluid: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                    lg: \"8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/soto/Desktop/sms/pages/index.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/soto/Desktop/sms/pages/index.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soto/Desktop/sms/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/soto/Desktop/sms/pages/index.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/soto/Desktop/sms/pages/index.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2RTtBQUNyQztBQUNjO0FBRXRELE1BQU1PLE1BQU0sR0FBRyxJQUFJTix3REFBWSxDQUFDO0lBQzlCTyxHQUFHLEVBQUUsYUFBYTtJQUNsQkMsS0FBSyxFQUFFLElBQUlQLHlEQUFhLEVBQUU7Q0FDM0IsQ0FBQztBQUNhLFNBQVNRLElBQUksR0FBRztJQUM3QixxQkFDRSw4REFBQ1YsMERBQWM7UUFBQ08sTUFBTSxFQUFFQSxNQUFNO2tCQUM1Qiw0RUFBQ0Qsc0RBQVM7WUFBQ0ssS0FBSyxFQUFDLElBQUk7c0JBQ25CLDRFQUFDUCxnREFBRzswQkFDRiw0RUFBQ0MsZ0RBQUc7b0JBQUNPLEVBQUUsRUFBQyxHQUFHOzhCQUNULDRFQUFDVCx5REFBSzs7Ozs0QkFBRzs7Ozs7d0JBQ0w7Ozs7O29CQUNGOzs7OztnQkFDSTs7Ozs7WUFDRyxDQUNqQjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiBcImFwaS9ncmFwaHFsXCIsXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPVwibWRcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIGxnPVwiOFwiPlxuICAgICAgICAgICAgPENoYXJ0IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJDaGFydCIsIlJvdyIsIkNvbCIsIkNvbnRhaW5lciIsImNsaWVudCIsInVyaSIsImNhY2hlIiwiSG9tZSIsImZsdWlkIiwibGciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "victory":
/*!**************************!*\
  !*** external "victory" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("victory");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();