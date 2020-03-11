"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPopulateObj=getPopulateObj,exports.getChildType=getChildType,exports.getPopulateObjs=getPopulateObjs,exports.getPopulates=getPopulates,exports.getPopulateChild=getPopulateChild,exports.populateList=populateList,exports.promisesForPopulate=promisesForPopulate;var _some2=_interopRequireDefault(require("lodash/some")),_has2=_interopRequireDefault(require("lodash/has")),_set2=_interopRequireDefault(require("lodash/set")),_forEach2=_interopRequireDefault(require("lodash/forEach")),_get2=_interopRequireDefault(require("lodash/get")),_map2=_interopRequireDefault(require("lodash/map")),_isObject2=_interopRequireDefault(require("lodash/isObject")),_filter2=_interopRequireDefault(require("lodash/filter")),_index=require("./index");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function getPopulateObj(str){if(!(0,_index.isString)(str))return str;var strArray=str.split(":");return{child:strArray[0],root:strArray[1]}}function getChildType(child){return(0,_index.isString)(child)?"string":Array.isArray(child)?"array":(0,_isObject2.default)(child)?"object":"other"}function getPopulateObjs(arr){return Array.isArray(arr)?arr.map(function(o){return(0,_isObject2.default)(o)?o:getPopulateObj(o)}):arr}function getPopulates(queryParams){var populates=(0,_filter2.default)(queryParams,function(param){return-1!==param.indexOf("populate")||(0,_isObject2.default)(param)&&param.populates}).map(function(p){return p.split("=")[1]});return populates.length?populates.map(getPopulateObj):null}function getPopulateChild(firebase,populate,id){return firebase.database().ref().child("".concat(populate.root,"/").concat(id)).once("value").then(function(snap){return snap.val()})}function populateList(firebase,list,p,results){return results[p.root]||(0,_set2.default)(results,p.root,{}),Promise.all((0,_map2.default)(list,function(id,childKey){var populateKey=!0===id||p.populateByKey?childKey:id;return getPopulateChild(firebase,p,populateKey).then(function(pc){return pc?(0,_set2.default)(results,"".concat(p.root,".").concat(populateKey),pc):results})}))}function promisesForPopulate(firebase,dataKey,originalData,populatesIn){var promisesArray=[],results={},populatesForData=getPopulateObjs("function"==typeof populatesIn?populatesIn(dataKey,originalData):populatesIn),dataHasPopulateChilds=(0,_some2.default)(populatesForData,function(populate){return(0,_has2.default)(originalData,populate.child)});return dataHasPopulateChilds?(0,_forEach2.default)(populatesForData,function(p){return(0,_index.isString)((0,_get2.default)(originalData,p.child))?promisesArray.push(getPopulateChild(firebase,p,(0,_get2.default)(originalData,p.child)).then(function(v){v&&(0,_set2.default)(results,"".concat(p.root,".").concat((0,_get2.default)(originalData,p.child)),v)})):promisesArray.push(populateList(firebase,(0,_get2.default)(originalData,p.child),p,results))}):(0,_forEach2.default)(originalData,function(d,key){var populatesForDataItem=getPopulateObj("function"==typeof populatesIn?populatesIn(key,d):populatesIn);(0,_forEach2.default)(populatesForDataItem,function(p){var idOrList=(0,_get2.default)(d,p.child);return idOrList?(0,_index.isString)(idOrList)?promisesArray.push(getPopulateChild(firebase,p,idOrList).then(function(v){return v&&(0,_set2.default)(results,"".concat(p.root,".").concat(idOrList),v),results})):Array.isArray(idOrList)||(0,_isObject2.default)(idOrList)?promisesArray.push(populateList(firebase,idOrList,p,results)):void 0:void 0})}),Promise.all(promisesArray).then(function(){return results})}
//# sourceMappingURL=populate.js.map