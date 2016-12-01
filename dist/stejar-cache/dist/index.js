module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=7)}([function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;var _index=__webpack_require__(2);Object.keys(_index).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _index[key]}})})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0,exports.CacheService=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_store=__webpack_require__(6),_store2=_interopRequireDefault(_store),_moment=__webpack_require__(5),_moment2=_interopRequireDefault(_moment),_lodash=__webpack_require__(4),_di=__webpack_require__(3),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=function(k,v){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},CacheService=function(){function CacheService(){var storeInstance=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_store2["default"];_classCallCheck(this,CacheService),this.storeInstance=storeInstance,this.debug=!1,this.enabled=!1}return CacheService.prototype.canCache=function(){return this.storeInstance.enabled&&this.enabled},CacheService.prototype.log=function(){if(this.debug){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];args.forEach(function(arg){})}},CacheService.prototype.get=function(signature){if(this.canCache()){this.log("Trying to get item "+signature);var value=this.storeInstance.get(signature);return!value||this.isExpired(value)?(this.log("No data found or expired for  "+signature),null):(this.log("Got data from cache for  "+signature,JSON.parse(value.value)),JSON.parse(value.value))}},CacheService.prototype.clear=function(){this.log("Cache cleared"),this.storeInstance.clear()},CacheService.prototype.debugEnabled=function(){return this.debug},CacheService.prototype.getByTag=function(tag){var _this=this;this.log("Get item by tag: "+tag);var items=[];return(0,_lodash.each)(this.storeInstance.getAll(),function(item){-1!==item.tags.includes(tag)&&(_this.isExpired(item)||items.push(JSON.parse(item.value)))}),this.log("Got items by tag: "+tag,items),items},CacheService.prototype.clearByTag=function(tag){var _this2=this;this.log("Clear items by tag: "+tag),(0,_lodash.each)(this.storeInstance.getAll(),function(item,offset){-1!==item.tags.includes(tag)&&_this2.remove(offset)}),this.log("Cleared items by tag: "+tag)},CacheService.prototype.remove=function(signature){this.log("Removing item "+signature),this.storeInstance.remove(signature)},CacheService.prototype.clearByTags=function(tags){var _this3=this;this.log("Clear items by tags: "+tags.join(", ")),(0,_lodash.each)(this.storeInstance.getAll(),function(item,offset){(0,_lodash.each)(tags,function(tag){-1!==item.tags.includes(tag)&&_this3.remove(offset)})}),this.log("Cleared items by tags: "+tags.join(", "))},CacheService.prototype.enableDebug=function(){this.debug=!0,this.log("Cache debug enabled"),this.storeInstance.enabled?this.enabled?this.log("Cache is enabled"):this.log("Cache is disabled due to settings"):this.log("Cache is disabled due to browser")},CacheService.prototype.disable=function(){this.enabled=!1,this.log("Cache is disabled due to settings")},CacheService.prototype.isEnabled=function(){return this.enabled},CacheService.prototype.enable=function(){this.enabled=!0,this.log("Cache enabled")},CacheService.prototype.set=function(name,value,expiration,forcedExpiration,tags){if(expiration||(expiration=0),forcedExpiration||(forcedExpiration=0),this.canCache()){var expirationDate=expiration?(0,_moment2["default"])().add(expiration,"seconds"):0,forcedExpirationDate=forcedExpiration?(0,_moment2["default"])().add(forcedExpiration,"seconds"):0;this.log("Setting item into cache "+name+" with expiration date: "+(expirationDate?expirationDate.format("YYYY-MM-DD HH:mm:ss"):"never")+" and a forced expiration date: "+(forcedExpirationDate?forcedExpirationDate.format("YYYY-MM-DD HH:mm:ss"):"never"),value);var item={name:name,value:JSON.stringify(value),expiration:0!==expirationDate?expirationDate.unix():expirationDate,forcedExpirationDate:0!==forcedExpirationDate?forcedExpirationDate.unix():forcedExpirationDate,tags:tags?tags:[]};this.storeInstance.set(name,item)}},CacheService.prototype.isExpired=function(item){return 0!=item.forcedExpirationDate&&item.forcedExpirationDate<(0,_moment2["default"])().unix()?(this.log("Item "+item.name+" is expired."),this.remove(item.name),!0):(0!=item.expiration&&item.expiration<(0,_moment2["default"])().unix()&&(this.log("Item "+item.name+" is expired but can still use it for now."),this.remove(item.name)),!1)},CacheService}();exports.CacheService=CacheService=__decorate([_di.injectable,__metadata("design:paramtypes",[Object])],CacheService),exports.CacheService=CacheService},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;var _CacheService=__webpack_require__(1);Object.keys(_CacheService).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _CacheService[key]}})})},function(module,exports){module.exports=require("@stejar/di")},function(module,exports){module.exports=require("lodash")},function(module,exports){module.exports=require("moment")},function(module,exports){module.exports=require("store")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(0)}]);