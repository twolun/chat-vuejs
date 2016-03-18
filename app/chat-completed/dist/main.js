/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.config.debug = true;
	
	new Vue(_app2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components-all/app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/xuyanjun1/GitHub/chat-vuejs/app/chat-completed/components-all/app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "#chat {\n  overflow: hidden;\n  border-radius: 3px;\n}\n#chat .sidebar,\n#chat .main {\n  height: 100%;\n}\n#chat .sidebar {\n  float: left;\n  width: 200px;\n  color: #f4f4f4;\n  background-color: #2e3238;\n}\n#chat .main {\n  position: relative;\n  overflow: hidden;\n  background-color: #eee;\n}\n#chat .m-text {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n#chat .m-message {\n  height: calc(100% - 160px);\n}\n", "", {"version":3,"sources":["/./components-all/app.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,QAAQ;CACT;AACD;EACE,2BAA2B;CAC5B","file":"app.vue","sourcesContent":["#chat {\n  overflow: hidden;\n  border-radius: 3px;\n}\n#chat .sidebar,\n#chat .main {\n  height: 100%;\n}\n#chat .sidebar {\n  float: left;\n  width: 200px;\n  color: #f4f4f4;\n  background-color: #2e3238;\n}\n#chat .main {\n  position: relative;\n  overflow: hidden;\n  background-color: #eee;\n}\n#chat .m-text {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n#chat .m-message {\n  height: calc(100% - 160px);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(7);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _user = __webpack_require__(11);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _userlist = __webpack_require__(17);
	
	var _userlist2 = _interopRequireDefault(_userlist);
	
	var _dialogmessage = __webpack_require__(22);
	
	var _dialogmessage2 = _interopRequireDefault(_dialogmessage);
	
	var _dialoginput = __webpack_require__(27);
	
	var _dialoginput2 = _interopRequireDefault(_dialoginput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    el: '#chat',
	    data: function data() {
	        var serverData = _store2.default.fetch();
	
	        return {
	            // 登录用户
	            user: serverData.user,
	            // 用户列表
	            userList: serverData.userList,
	            // 会话列表
	            sessionList: serverData.sessionList,
	            // 搜索key
	            search: '',
	            // 选中的会话Index
	            sessionIndex: 0
	        };
	    },
	    computed: {
	        session: function session() {
	            return this.sessionList[this.sessionIndex];
	        }
	    },
	    methods: {
	        //添加发送消息
	        addInputMessage: function addInputMessage(text) {
	            this.session.messages.push({
	                text: text,
	                date: new Date(),
	                self: true
	            });
	        },
	        //改变会话列表
	        updateSessionIndex: function updateSessionIndex(value) {
	            this.sessionIndex = this.userList.indexOf(value);
	        }
	    },
	    components: {
	        user: _user2.default, userlist: _userlist2.default, dialogmessage: _dialogmessage2.default, dialoginput: _dialoginput2.default
	    }
	};
	// </script>
	//
	// <template>
	// 	<div>
	// 		<div class="sidebar">
	// 			<user :user="user" :search.sync="search"></user>	
	//             <userlist :user-list="userList" :session="session" @update-session-index="updateSessionIndex" :search="search"></userlist>
	// 		</div>
	//         <div class="main">
	//             <dialogmessage :session="session" :user="user" :user-list="userList"></dialogmessage>
	//             <dialoginput @add-message="addInputMessage"></dialoginput>
	//         </div>
	// 	</div>
	// </template>
	//
	// <style lang="less">
	// #chat {
	//     overflow: hidden;
	//     border-radius: 3px;
	//
	//     .sidebar, .main {
	//         height: 100%;  
	//     }
	//     .sidebar {
	//         float: left;
	//         width: 200px;
	//         color: #f4f4f4;
	//         background-color: #2e3238;
	//     }
	//     .main {
	//         position: relative;
	//         overflow: hidden;  
	//         background-color: #eee;
	//     }
	//     .m-text {
	//         position: absolute;
	//         width: 100%;
	//         bottom: 0;
	//         left: 0;
	//     }
	//     .m-message {
	//         height: ~'calc(100% - 160px)';
	//     }
	// }
	// </style>
	/* generated by vue-loader */
	// <script>

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(8);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var key = 'VUE-CHAT-v3';
	
	// 虚拟数据
	if (!localStorage.getItem(key)) {
	    var now = new Date();
	
	    var data = {
	        // 登录用户
	        user: {
	            id: 1,
	            name: 'Coffce',
	            img: 'dist/images/1.jpg'
	        },
	
	        // 用户列表
	        userList: [{
	            id: 2,
	            name: '示例介绍',
	            img: 'dist/images/2.png'
	        }, {
	            id: 3,
	            name: 'webpack',
	            img: 'dist/images/3.jpg'
	        }],
	
	        // 会话列表
	        sessionList: [{
	            userId: 2,
	            messages: [{
	                text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
	                date: now
	            }, {
	                text: '项目地址: https://github.com/coffcer/vue-chat',
	                date: now
	            }]
	        }, {
	            userId: 3,
	            messages: []
	        }]
	    };
	
	    localStorage.setItem(key, (0, _stringify2.default)(data));
	}
	
	exports.default = {
	    fetch: function fetch() {
	        return JSON.parse(localStorage.getItem(key));
	    },
	    save: function save(store) {
	        localStorage.setItem(key, (0, _stringify2.default)(store));
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(10)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components-all/user.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/xuyanjun1/GitHub/chat-vuejs/app/chat-completed/components-all/user.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['user', 'search']
	
	};
	// </script>
	//
	// <template>
	//     <div class="m-card">
	//         <header>
	//             <img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
	//             <p class="name">{{user.name}}</p>
	//         </header>
	//         <footer>
	//             <input class="search" type="text" placeholder="search user..." v-model="search">
	//         </footer>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     .m-card {
	//         padding: 12px;
	//         border-bottom: solid 1px #24272C;
	//
	//         footer {
	//             margin-top: 10px;
	//         }
	//
	//         .avatar, .name {
	//             vertical-align: middle;
	//         }
	//         .avatar {
	//             border-radius: 2px;
	//         }
	//         .name {
	//             display: inline-block;
	//             margin: 0 0 0 15px;
	//             font-size: 16px;
	//         }
	//         .search {
	//             padding: 0 10px;
	//             width: 100%;
	//             font-size: 12px;
	//             color: #fff;
	//             height: 30px;
	//             line-height: 30px;
	//             border: solid 1px #3a3a3a;
	//             border-radius: 4px;
	//             outline: none;
	//             background-color: #26292E;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-card\">\n    <header>\n        <img class=\"avatar\" width=\"40\" height=\"40\" :alt=\"user.name\" :src=\"user.img\">\n        <p class=\"name\">{{user.name}}</p>\n    </header>\n    <footer>\n        <input class=\"search\" type=\"text\" placeholder=\"search user...\" v-model=\"search\">\n    </footer>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components-all/userlist.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/xuyanjun1/GitHub/chat-vuejs/app/chat-completed/components-all/userlist.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./userlist.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./userlist.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-list li {\n  padding: 12px 15px;\n  border-bottom: 1px solid #292C33;\n  cursor: pointer;\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n}\n.m-list li:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.m-list li.active {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.m-list .avatar,\n.m-list .name {\n  vertical-align: middle;\n}\n.m-list .avatar {\n  border-radius: 2px;\n}\n.m-list .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n}\n", "", {"version":3,"sources":["/./components-all/userlist.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iCAAiC;EACjC,gBAAgB;EAChB,0CAAkC;EAAlC,kCAAkC;CACnC;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,2CAA2C;CAC5C;AACD;;EAEE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;CACpB","file":"userlist.vue","sourcesContent":[".m-list li {\n  padding: 12px 15px;\n  border-bottom: 1px solid #292C33;\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.m-list li:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.m-list li.active {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.m-list .avatar,\n.m-list .name {\n  vertical-align: middle;\n}\n.m-list .avatar {\n  border-radius: 2px;\n}\n.m-list .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script type="text/javascript">
	exports.default = {
	    props: ['userList', 'session', 'search'],
	    methods: {
	        select: function select(value) {
	            //还是要向上冒泡事件，在父组件中改变其值
	            this.$dispatch('update-session-index', value);
	        }
	    },
	    //自定义过滤器
	    filters: {
	        search: function search(list) {
	            var _this = this;
	
	            return list.filter(function (item) {
	                return item.name.indexOf(_this.search) > -1;
	            });
	        }
	    }

	};
	// </script>
	//
	// <template>
	//     <div class="m-list">
	//         <ul>
	//             <li v-for="item in userList | search" :class="{ active: session.userId === item.id }" @click="select(item)">
	//                 <img class="avatar"  width="30" height="30" :alt="item.name" :src="item.img">
	//                 <p class="name">{{item.name}}</p>
	//             </li>
	//         </ul>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     .m-list {
	//         li {
	//             padding: 12px 15px;
	//             border-bottom: 1px solid #292C33;
	//             cursor: pointer;
	//             transition: background-color .1s;
	//
	//             &:hover {
	//                 background-color: rgba(255, 255, 255, 0.03);
	//             }
	//             &.active {
	//                 background-color: rgba(255, 255, 255, 0.2);
	//             }
	//         }
	//         .avatar, .name {
	//             vertical-align: middle;
	//         }
	//         .avatar {
	//             border-radius: 2px;
	//         }
	//         .name {
	//             display: inline-block;
	//             margin: 0 0 0 15px;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-list\">\n    <ul>\n        <li v-for=\"item in userList | search\" :class=\"{ active: session.userId === item.id }\" @click=\"select(item)\">\n            <img class=\"avatar\"  width=\"30\" height=\"30\" :alt=\"item.name\" :src=\"item.img\">\n            <p class=\"name\">{{item.name}}</p>\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components-all/dialogmessage.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/xuyanjun1/GitHub/chat-vuejs/app/chat-completed/components-all/dialogmessage.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialogmessage.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialogmessage.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-message {\n  padding: 10px 15px;\n  overflow-y: scroll;\n}\n.m-message li {\n  margin-bottom: 15px;\n}\n.m-message .time {\n  margin: 7px 0;\n  text-align: center;\n}\n.m-message .time > span {\n  display: inline-block;\n  padding: 0 18px;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 2px;\n  background-color: #dcdcdc;\n}\n.m-message .avatar {\n  float: left;\n  margin: 0 10px 0 0;\n  border-radius: 3px;\n}\n.m-message .text {\n  display: inline-block;\n  position: relative;\n  padding: 0 10px;\n  max-width: calc(100% - 40px);\n  min-height: 30px;\n  line-height: 2.5;\n  font-size: 12px;\n  text-align: left;\n  word-break: break-all;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n.m-message .text:before {\n  content: \" \";\n  position: absolute;\n  top: 9px;\n  right: 100%;\n  border: 6px solid transparent;\n  border-right-color: #fafafa;\n}\n.m-message .self {\n  text-align: right;\n}\n.m-message .self .avatar {\n  float: right;\n  margin: 0 0 0 10px;\n}\n.m-message .self .text {\n  background-color: #b2e281;\n}\n.m-message .self .text:before {\n  right: inherit;\n  left: 100%;\n  border-right-color: transparent;\n  border-left-color: #b2e281;\n}\n", "", {"version":3,"sources":["/./components-all/dialogmessage.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;EAC7B,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,4BAA4B;CAC7B;AACD;EACE,kBAAkB;CACnB;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,WAAW;EACX,gCAAgC;EAChC,2BAA2B;CAC5B","file":"dialogmessage.vue","sourcesContent":[".m-message {\n  padding: 10px 15px;\n  overflow-y: scroll;\n}\n.m-message li {\n  margin-bottom: 15px;\n}\n.m-message .time {\n  margin: 7px 0;\n  text-align: center;\n}\n.m-message .time > span {\n  display: inline-block;\n  padding: 0 18px;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 2px;\n  background-color: #dcdcdc;\n}\n.m-message .avatar {\n  float: left;\n  margin: 0 10px 0 0;\n  border-radius: 3px;\n}\n.m-message .text {\n  display: inline-block;\n  position: relative;\n  padding: 0 10px;\n  max-width: calc(100% - 40px);\n  min-height: 30px;\n  line-height: 2.5;\n  font-size: 12px;\n  text-align: left;\n  word-break: break-all;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n.m-message .text:before {\n  content: \" \";\n  position: absolute;\n  top: 9px;\n  right: 100%;\n  border: 6px solid transparent;\n  border-right-color: #fafafa;\n}\n.m-message .self {\n  text-align: right;\n}\n.m-message .self .avatar {\n  float: right;\n  margin: 0 0 0 10px;\n}\n.m-message .self .text {\n  background-color: #b2e281;\n}\n.m-message .self .text:before {\n  right: inherit;\n  left: 100%;\n  border-right-color: transparent;\n  border-left-color: #b2e281;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['session', 'user', 'userList'],
	    computed: {
	        sessionUser: function sessionUser() {
	            var _this = this;
	
	            var users = this.userList.filter(function (item) {
	                return item.id === _this.session.userId;
	            });
	            return users[0];
	        }
	    },
	    filters: {
	        //用户头像
	        avatar: function avatar(item) {
	            // 如果是自己发的消息显示登录用户的头像
	            var user = item.self ? this.user : this.sessionUser;
	            return user && user.img;
	        },
	        //日期格式化
	        time: function time(date) {
	            if (typeof date === 'string') {
	                date = new Date(date);
	            }
	            return date.getHours() + ':' + date.getMinutes();
	        }
	    },
	    directives: {
	        // 发送消息后滚动到底部
	
	        'scroll-bottom': function scrollBottom() {
	            var _this2 = this;
	
	            Vue.nextTick(function () {
	                console.log(_this2.el);
	                _this2.el.scrollTop = _this2.el.scrollHeight - _this2.el.clientHeight;
	                //clientHeight：元素内容可视区域的高度
	                //scrollHeight: 元素内容的实际高度
	                //offsetHeight: 包括滚动条的高度
	                //scrollTop: 元素向上滚动距离
	            });
	        }
	    }
	};
	// </script>
	//
	// <template>
	//     <div class="m-message" v-scroll-bottom="session.messages">
	//         <ul>
	//             <li v-for="item in session.messages">
	//                 <p class="time"><span>{{item.date | time}}</span></p>
	//                 <div class="main" :class="{ self: item.self }">
	//                     <img class="avatar" width="30" height="30" :src="item | avatar" />
	//                     <div class="text">{{item.text}}</div>
	//                 </div>
	//             </li>
	//         </ul>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     .m-message {
	//         padding: 10px 15px;
	//         overflow-y: scroll;
	//
	//         li {
	//             margin-bottom: 15px;
	//         }
	//         .time {
	//             margin: 7px 0;
	//             text-align: center;
	//
	//             > span {
	//                 display: inline-block;
	//                 padding: 0 18px;
	//                 font-size: 12px;
	//                 color: #fff;
	//                 border-radius: 2px;
	//                 background-color: #dcdcdc;
	//             }
	//         }
	//         .avatar {
	//             float: left;
	//             margin: 0 10px 0 0;
	//             border-radius: 3px;
	//         }
	//         .text {
	//             display: inline-block;
	//             position: relative;
	//             padding: 0 10px;
	//             max-width: ~'calc(100% - 40px)';
	//             min-height: 30px;
	//             line-height: 2.5;
	//             font-size: 12px;
	//             text-align: left;
	//             word-break: break-all;
	//             background-color: #fafafa;
	//             border-radius: 4px;
	//
	//             &:before {
	//                 content: " ";
	//                 position: absolute;
	//                 top: 9px;
	//                 right: 100%;
	//                 border: 6px solid transparent;
	//                 border-right-color: #fafafa;
	//             }
	//         }
	//
	//         .self {
	//             text-align: right;
	//
	//             .avatar {
	//                 float: right;
	//                 margin: 0 0 0 10px;
	//             }
	//             .text {
	//                 background-color: #b2e281;
	//
	//                 &:before {
	//                     right: inherit;
	//                     left: 100%;
	//                     border-right-color: transparent;
	//                     border-left-color: #b2e281;
	//                 }
	//             }
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-message\" v-scroll-bottom=\"session.messages\">\n    <ul>\n        <li v-for=\"item in session.messages\">\n            <p class=\"time\"><span>{{item.date | time}}</span></p>\n            <div class=\"main\" :class=\"{ self: item.self }\">\n                <img class=\"avatar\" width=\"30\" height=\"30\" :src=\"item | avatar\" />\n                <div class=\"text\">{{item.text}}</div>\n            </div>\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(28)
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components-all/dialoginput.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/xuyanjun1/GitHub/chat-vuejs/app/chat-completed/components-all/dialoginput.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialoginput.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialoginput.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-text {\n  height: 160px;\n  border-top: solid 1px #ddd;\n}\n.m-text textarea {\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-family: \"Micrsofot Yahei\";\n  resize: none;\n}\n", "", {"version":3,"sources":["/./components-all/dialoginput.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,2BAA2B;CAC5B;AACD;EACE,cAAc;EACd,aAAa;EACb,YAAY;EACZ,aAAa;EACb,cAAc;EACd,+BAA+B;EAC/B,aAAa;CACd","file":"dialoginput.vue","sourcesContent":[".m-text {\n  height: 160px;\n  border-top: solid 1px #ddd;\n}\n.m-text textarea {\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-family: \"Micrsofot Yahei\";\n  resize: none;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: [],
	    data: function data() {
	        return {
	            text: ''
	        };
	    },
	
	    methods: {
	        inputing: function inputing(e) {
	            if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
	                // this.session.messages.push({
	                //     text: this.text,
	                //     date: new Date(),
	                //     self: true
	                // });
	                console.log('上种方法，以对象作为属性绑定，相当于双向数据绑定，这种操作会很难跟踪数据，所以使用事件冒泡的方式，在父组件中进行处理');
	                this.$dispatch('add-message', this.text);
	                this.text = '';
	            }
	        }
	    }
	};
	// </script>
	//
	// <template>
	//     <div class="m-text">
	//         <textarea placeholder="按 Ctrl + Enter 发送" v-model="text" @keyup="inputing"></textarea>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     .m-text {
	//         height: 160px;
	//         border-top: solid 1px #ddd;
	//
	//         textarea {
	//             padding: 10px;
	//             height: 100%;
	//             width: 100%;
	//             border: none;
	//             outline: none;
	//             font-family: "Micrsofot Yahei";
	//             resize: none;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-text\">\n    <textarea placeholder=\"按 Ctrl + Enter 发送\" v-model=\"text\" @keyup=\"inputing\"></textarea>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\t\t<div class=\"sidebar\">\n\t\t\t<user :user=\"user\" :search.sync=\"search\"></user>\t\n            <userlist :user-list=\"userList\" :session=\"session\" @update-session-index=\"updateSessionIndex\" :search=\"search\"></userlist>\n\t\t</div>\n        <div class=\"main\">\n            <dialogmessage :session=\"session\" :user=\"user\" :user-list=\"userList\"></dialogmessage>\n            <dialoginput @add-message=\"addInputMessage\"></dialoginput>\n        </div>\n\t</div>\n";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./user.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./user.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-card {\n  padding: 12px;\n  border-bottom: solid 1px #24272C;\n}\n.m-card footer {\n  margin-top: 10px;\n}\n.m-card .avatar,\n.m-card .name {\n  vertical-align: middle;\n}\n.m-card .avatar {\n  border-radius: 2px;\n}\n.m-card .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n  font-size: 16px;\n}\n.m-card .search {\n  padding: 0 10px;\n  width: 100%;\n  font-size: 12px;\n  color: #fff;\n  height: 30px;\n  line-height: 30px;\n  border: solid 1px #3a3a3a;\n  border-radius: 4px;\n  outline: none;\n  background-color: #26292E;\n}\n", "", {"version":3,"sources":["/./components-all/user.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,iCAAiC;CAClC;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,mBAAmB;EACnB,cAAc;EACd,0BAA0B;CAC3B","file":"user.vue","sourcesContent":[".m-card {\n  padding: 12px;\n  border-bottom: solid 1px #24272C;\n}\n.m-card footer {\n  margin-top: 10px;\n}\n.m-card .avatar,\n.m-card .name {\n  vertical-align: middle;\n}\n.m-card .avatar {\n  border-radius: 2px;\n}\n.m-card .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n  font-size: 16px;\n}\n.m-card .search {\n  padding: 0 10px;\n  width: 100%;\n  font-size: 12px;\n  color: #fff;\n  height: 30px;\n  line-height: 30px;\n  border: solid 1px #3a3a3a;\n  border-radius: 4px;\n  outline: none;\n  background-color: #26292E;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map