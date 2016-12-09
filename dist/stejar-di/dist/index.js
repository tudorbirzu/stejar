module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=9)}([function(module,exports){"use strict";function namespace(namespace){return function(entity){return entity.namespace=namespace,entity}}function getNamespacedName(object){var name="function"==typeof object?object.name:object.constructor.name;return object.namespace&&(name=object.namespace+"/"+name),object.constructor.namespace&&(name=object.constructor.namespace+"/"+name),name}exports.__esModule=!0,exports.namespace=namespace,exports.getNamespacedName=getNamespacedName},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;var _src=__webpack_require__(5);Object.keys(_src).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _src[key]}})})},function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;exports.AbstractProvider=function AbstractProvider(){_classCallCheck(this,AbstractProvider)}},function(module,exports){"use strict";function Resolver(classToInvoke){var methodToInvoke=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"invoke";return function(serviceManager){return function(){var _serviceManager$get;return(_serviceManager$get=serviceManager.get(classToInvoke))[methodToInvoke].apply(_serviceManager$get,arguments)}}}exports.__esModule=!0,exports.Resolver=Resolver},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0,exports.ServiceManager=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};__webpack_require__(8);var _namespaceUtils=__webpack_require__(0),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=function(k,v){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},invariant=__webpack_require__(7),ServiceManager=ServiceManager_1=function(){function ServiceManager(){_classCallCheck(this,ServiceManager),this.container={},this.providers={},this.implementsList={},this.bind(ServiceManager_1,this)}return ServiceManager.prototype.bind=function(resource,instance){return this.container[this.getNameFromResource(resource)]=instance,this},ServiceManager.prototype.alias=function(resource,aliasName){var _this=this;return this.providers[this.getNameFromResource(resource)]=function(){return _this.get(aliasName)},this},ServiceManager.prototype.bindToMethod=function(method,object){return this.implementsList[method]=object,this},ServiceManager.prototype.factory=function(){for(var _this2=this,_len=arguments.length,factories=Array(_len),_key=0;_key<_len;_key++)factories[_key]=arguments[_key];return factories.map(function(factory){return factory(_this2)}),this},ServiceManager.prototype.provide=function(className,callback){var _this3=this;return this.providers[this.getNameFromResource(className)]=function(){var instance=callback(_this3);if(!instance)throw new Error('The provider for the class "'+className.name+'" must provide an instance of this class when initialized.');return _this3.bind(_this3.getNameFromResource(className),instance),instance},this},ServiceManager.prototype.provider=function(){for(var _this4=this,_len2=arguments.length,providers=Array(_len2),_key2=0;_key2<_len2;_key2++)providers[_key2]=arguments[_key2];return providers.map(function(provider){var realProvider=new provider;_this4.provide(realProvider.provides(),realProvider.provide.bind(realProvider))}),this},ServiceManager.prototype.get=function(resource){if(this.container[this.getNameFromResource(resource)])return this.container[this.getNameFromResource(resource)];if(this.providers[this.getNameFromResource(resource)])return this.providers[this.getNameFromResource(resource)](this);var result=this.instantiate(resource);return invariant(result,'Could not "get" '+this.getNameFromResource(resource)),this.bind(resource,result),result},ServiceManager.prototype.instantiate=function(resource){var _this5=this,args=Reflect.getMetadata("design:paramtypes",resource);if("undefined"==typeof args)throw new Error("Could not get constructor dependencies for "+resource.name+". Did you forget to decorate it with @injectable ?");if(!args)return new resource;var dependencies=[];try{args.forEach(function(arg){return dependencies.push(_this5.get(arg))})}catch(error){throw error}var instance=new(Function.prototype.bind.apply(resource,[null].concat(dependencies)));return Object.keys(this.implementsList).forEach(function(key){if(key in instance)instance[key](_this5.get(_this5.implementsList[key]));else for(var item in instance)key===item&&instance[key](_this5.get(_this5.implementsList[key]))}),instance},ServiceManager.prototype.getNameFromResource=function(resource){return"string"==typeof resource?resource:(0,_namespaceUtils.getNamespacedName)(resource)},ServiceManager}();exports.ServiceManager=ServiceManager=ServiceManager_1=__decorate([(0,_namespaceUtils.namespace)("Stejar/Core"),__metadata("design:paramtypes",[])],ServiceManager),exports.ServiceManager=ServiceManager;var ServiceManager_1},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;var _ServiceManager=__webpack_require__(4);Object.keys(_ServiceManager).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _ServiceManager[key]}})});var _AbstractProvider=__webpack_require__(2);Object.keys(_AbstractProvider).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _AbstractProvider[key]}})});var _namespaceUtils=__webpack_require__(0);Object.keys(_namespaceUtils).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _namespaceUtils[key]}})});var _injectable=__webpack_require__(6);Object.keys(_injectable).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _injectable[key]}})});var _Resolver=__webpack_require__(3);Object.keys(_Resolver).forEach(function(key){"default"!==key&&"__esModule"!==key&&Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _Resolver[key]}})})},function(module,exports){"use strict";function injectable(WrappedClass){return WrappedClass}exports.__esModule=!0,exports.injectable=injectable},function(module,exports){module.exports=require("invariant")},function(module,exports){module.exports=require("reflect-metadata")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)}]);