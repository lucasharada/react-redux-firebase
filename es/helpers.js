"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getVal=getVal,exports.isLoaded=isLoaded,exports.isEmpty=isEmpty,exports.fixPath=fixPath,exports.populate=populate;var _some2=_interopRequireDefault(require("lodash/some")),_defaultsDeep2=_interopRequireDefault(require("lodash/defaultsDeep")),_reduce2=_interopRequireDefault(require("lodash/reduce")),_mapValues2=_interopRequireDefault(require("lodash/mapValues")),_map2=_interopRequireDefault(require("lodash/map")),_has2=_interopRequireDefault(require("lodash/has")),_get2=_interopRequireDefault(require("lodash/get")),_set2=_interopRequireDefault(require("lodash/set")),_size2=_interopRequireDefault(require("lodash/size")),_constants=require("./constants"),_populate=require("./utils/populate"),_reducers=require("./utils/reducers");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getVal(firebase,path,notSetValue){if(!firebase)return notSetValue;var dotPath=(0,_reducers.getDotStrPath)(path),valueAtPath=(0,_get2.default)(firebase,dotPath,notSetValue);return valueAtPath}function isLoaded(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return!(args&&args.length)||args.every(function(arg){return arg!==void 0&&!1!==(0,_get2.default)(arg,"isLoaded")})}function isEmpty(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return!(args&&args.length)||args.some(function(arg){return!(arg&&(0,_size2.default)(arg))||!0===arg.isEmpty})}function fixPath(path){return("/"===path.substring(0,1)?"":"/")+path}function buildChildList(state,list,p){var mapFn=Array.isArray(list)?_map2.default:_mapValues2.default;return mapFn(list,function(val,key){var getKey=val;(!0===val||p.populateByKey)&&(getKey=key);var dotRoot=(0,_reducers.getDotStrPath)(p.root),pathArr=[dotRoot,getKey];p.childParam&&pathArr.push(p.childParam);var pathString=pathArr.join(".");return(0,_get2.default)(state.data,pathString)?p.keyProp?_objectSpread(_defineProperty({},p.keyProp,getKey),(0,_get2.default)(state.data,pathString)):(0,_get2.default)(state.data,pathString):!0===val||p.populateByKey?val:getKey})}function populateChild(state,child,p){var childVal=(0,_get2.default)(child,p.child);if(!child||!childVal)return null;if("string"==typeof childVal||childVal instanceof String){var dotRoot=p.root.split("/").filter(Boolean).join("."),pathArr=[dotRoot,childVal];p.childParam&&pathArr.push(p.childParam);var pathString=pathArr.join("."),populateVal=(0,_get2.default)(state.data,pathString);return populateVal?(0,_set2.default)({},p.childAlias||p.child,p.keyProp?_objectSpread(_defineProperty({},p.keyProp,childVal),populateVal):populateVal):child}return(0,_set2.default)({},p.childAlias||p.child,buildChildList(state,childVal,p))}function populate(state,path,populates,notSetValue){var splitPath=path.split("/").filter(Boolean),pathArr=-1===_constants.topLevelPaths.indexOf(splitPath[0])?["data"].concat(_toConsumableArray(splitPath)):splitPath,dotPath=pathArr.join("."),data=(0,_get2.default)(state,dotPath,notSetValue);if(!state||data===notSetValue)return notSetValue;if(null===data)return null;var populatesForData=(0,_populate.getPopulateObjs)("function"==typeof populates?populates(pathArr.slice(-1)[0],data):populates);if(Array.isArray(data)){var someArrayItemHasKey=function(array){return function(key){return(0,_some2.default)(array,function(item){return(0,_has2.default)(item,key)})}},_dataHasPopulateChilds=(0,_some2.default)(populatesForData,function(populate){return someArrayItemHasKey(data)(["value",populate.child])});return _dataHasPopulateChilds?data.map(function(_ref){var key=_ref.key,dataValue=_ref.value,populatedValue=populatesForData.map(function(p){return populateChild(state,dataValue,p)}).reduce(function(acc,v){return(0,_defaultsDeep2.default)(v,acc)},dataValue);return{key:key,value:populatedValue}}):data}var dataHasPopulateChilds=(0,_some2.default)(populatesForData,function(p){return(0,_has2.default)(data,p.child)});return dataHasPopulateChilds?populatesForData.map(function(p){return populateChild(state,data,p)}).reduce(function(acc,v){return(0,_defaultsDeep2.default)(v,acc)},data):-1===pathArr.indexOf("profile")?(0,_mapValues2.default)(data,function(child,childKey){var key="ordered"===pathArr[0]?child.key:childKey,populatesForDataItem=(0,_populate.getPopulateObjs)("function"==typeof populates?populates(key,child):populates),dataHasPopulateChilds=(0,_some2.default)(populatesForDataItem,function(p){return(0,_has2.default)(child,p.child)});return dataHasPopulateChilds?(0,_reduce2.default)((0,_map2.default)(populatesForDataItem,function(p){return populateChild(state,child,p)}),function(obj,v){return(0,_defaultsDeep2.default)(v,obj)},child):child}):data}
//# sourceMappingURL=helpers.js.map