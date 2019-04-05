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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: nucloud/map-embed\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextControl = _wp$components.TextControl;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('nucloud/map-embed', {\n\ttitle: __('nuCloud Map Embed'),\n\ticon: 'location-alt',\n\tcategory: 'embed', // E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('map'), __('nucloud'), __('embed')],\n\tattributes: {\n\t\tmap_id: {\n\t\t\tdefault: 5,\n\t\t\ttype: 'integer'\n\t\t},\n\t\tmarker: {\n\t\t\tdefault: '',\n\t\t\ttype: 'integer'\n\t\t},\n\t\theight: {\n\t\t\tdefault: 500,\n\t\t\ttype: 'integer'\n\t\t},\n\t\tlayer: {\n\t\t\tdefault: '',\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    map_id = _props$attributes.map_id,\n\t\t    height = _props$attributes.height,\n\t\t    marker = _props$attributes.marker,\n\t\t    layer = _props$attributes.layer,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\n\t\treturn [wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: __('Map Settings', 'nucloud'),\n\t\t\t\t\tinitialOpen: true\n\t\t\t\t},\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\tlabel: __('Map ID', 'nucloud'),\n\t\t\t\t\t\thelp: __('Enter the ID for the map you would like to embed', 'nucloud'),\n\t\t\t\t\t\tonChange: function onChange(map_id) {\n\t\t\t\t\t\t\tsetAttributes({ map_id: map_id });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tvalue: map_id,\n\t\t\t\t\t\ttype: 'number'\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\tlabel: __('Map Height', 'nucloud'),\n\t\t\t\t\t\thelp: __('Enter the height of the embed in pixels', 'nucloud'),\n\t\t\t\t\t\tonChange: function onChange(height) {\n\t\t\t\t\t\t\tsetAttributes({ height: height });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tvalue: height,\n\t\t\t\t\t\ttype: 'number'\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\tlabel: __('Display Marker', 'nucloud'),\n\t\t\t\t\t\thelp: __('Enter a marker ID to display a stop by default', 'nucloud'),\n\t\t\t\t\t\tonChange: function onChange(marker) {\n\t\t\t\t\t\t\tsetAttributes({ marker: marker });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tvalue: marker,\n\t\t\t\t\t\ttype: 'number'\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\tlabel: __('Display Layers', 'nucloud'),\n\t\t\t\t\t\thelp: __('Enter a comma separated list of layer names to display them by default', 'nucloud'),\n\t\t\t\t\t\tonChange: function onChange(layer) {\n\t\t\t\t\t\t\tsetAttributes({ layer: layer });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tvalue: layer\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement('iframe', { src: 'https://cdn-map1.nucloud.com/nucloudmap/index.html?map=' + map_id + '&marker=' + marker + '&layer=' + layer, style: { height: height } })\n\t\t)];\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IG51Y2xvdWQvbWFwLWVtYmVkXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdyxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbnVjbG91ZC9tYXAtZW1iZWQnLCB7XG5cdHRpdGxlOiBfXygnbnVDbG91ZCBNYXAgRW1iZWQnKSxcblx0aWNvbjogJ2xvY2F0aW9uLWFsdCcsXG5cdGNhdGVnb3J5OiAnZW1iZWQnLCAvLyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdtYXAnKSwgX18oJ251Y2xvdWQnKSwgX18oJ2VtYmVkJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bWFwX2lkOiB7XG5cdFx0XHRkZWZhdWx0OiA1LFxuXHRcdFx0dHlwZTogJ2ludGVnZXInXG5cdFx0fSxcblx0XHRtYXJrZXI6IHtcblx0XHRcdGRlZmF1bHQ6ICcnLFxuXHRcdFx0dHlwZTogJ2ludGVnZXInXG5cdFx0fSxcblx0XHRoZWlnaHQ6IHtcblx0XHRcdGRlZmF1bHQ6IDUwMCxcblx0XHRcdHR5cGU6ICdpbnRlZ2VyJ1xuXHRcdH0sXG5cdFx0bGF5ZXI6IHtcblx0XHRcdGRlZmF1bHQ6ICcnLFxuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBtYXBfaWQgPSBfcHJvcHMkYXR0cmlidXRlcy5tYXBfaWQsXG5cdFx0ICAgIGhlaWdodCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmhlaWdodCxcblx0XHQgICAgbWFya2VyID0gX3Byb3BzJGF0dHJpYnV0ZXMubWFya2VyLFxuXHRcdCAgICBsYXllciA9IF9wcm9wcyRhdHRyaWJ1dGVzLmxheWVyLFxuXHRcdCAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiBfXygnTWFwIFNldHRpbmdzJywgJ251Y2xvdWQnKSxcblx0XHRcdFx0XHRpbml0aWFsT3BlbjogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBfXygnTWFwIElEJywgJ251Y2xvdWQnKSxcblx0XHRcdFx0XHRcdGhlbHA6IF9fKCdFbnRlciB0aGUgSUQgZm9yIHRoZSBtYXAgeW91IHdvdWxkIGxpa2UgdG8gZW1iZWQnLCAnbnVjbG91ZCcpLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG1hcF9pZCkge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbWFwX2lkOiBtYXBfaWQgfSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dmFsdWU6IG1hcF9pZCxcblx0XHRcdFx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogX18oJ01hcCBIZWlnaHQnLCAnbnVjbG91ZCcpLFxuXHRcdFx0XHRcdFx0aGVscDogX18oJ0VudGVyIHRoZSBoZWlnaHQgb2YgdGhlIGVtYmVkIGluIHBpeGVscycsICdudWNsb3VkJyksXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBoZWlnaHQ6IGhlaWdodCB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR2YWx1ZTogaGVpZ2h0LFxuXHRcdFx0XHRcdFx0dHlwZTogJ251bWJlcidcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBfXygnRGlzcGxheSBNYXJrZXInLCAnbnVjbG91ZCcpLFxuXHRcdFx0XHRcdFx0aGVscDogX18oJ0VudGVyIGEgbWFya2VyIElEIHRvIGRpc3BsYXkgYSBzdG9wIGJ5IGRlZmF1bHQnLCAnbnVjbG91ZCcpLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG1hcmtlcikge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbWFya2VyOiBtYXJrZXIgfSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dmFsdWU6IG1hcmtlcixcblx0XHRcdFx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogX18oJ0Rpc3BsYXkgTGF5ZXJzJywgJ251Y2xvdWQnKSxcblx0XHRcdFx0XHRcdGhlbHA6IF9fKCdFbnRlciBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIGxheWVyIG5hbWVzIHRvIGRpc3BsYXkgdGhlbSBieSBkZWZhdWx0JywgJ251Y2xvdWQnKSxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShsYXllcikge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbGF5ZXI6IGxheWVyIH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHZhbHVlOiBsYXllclxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywgeyBzcmM6ICdodHRwczovL2Nkbi1tYXAxLm51Y2xvdWQuY29tL251Y2xvdWRtYXAvaW5kZXguaHRtbD9tYXA9JyArIG1hcF9pZCArICcmbWFya2VyPScgKyBtYXJrZXIgKyAnJmxheWVyPScgKyBsYXllciwgc3R5bGU6IHsgaGVpZ2h0OiBoZWlnaHQgfSB9KVxuXHRcdCldO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);