"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pathStrToObj=pathStrToObj,exports.getEventsFromInput=getEventsFromInput,exports.default=void 0;var _remove2=_interopRequireDefault(require("lodash/remove")),_isObject2=_interopRequireDefault(require("lodash/isObject")),_flatMap2=_interopRequireDefault(require("lodash/flatMap")),_populate=require("./populate"),_query=require("./query");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function pathStrToObj(path){var pathObj={path:path,type:"value",isQuery:!1},queryId=(0,_query.getQueryIdFromPath)(path);if(queryId){var pathArray=path.split("#");pathObj=Object.assign({},pathObj,{queryId:queryId,isQuery:!0,path:pathArray[0],queryParams:pathArray[1].split("&")}),(0,_populate.getPopulates)(pathArray[1].split("&"))&&(pathObj.populates=(0,_populate.getPopulates)(pathArray[1].split("&")),pathObj.queryParams=(0,_remove2.default)(pathArray[1].split("&"),function(p){return-1===p.indexOf("populate")}))}return pathObj}function getEventsFromInput(paths){return(0,_flatMap2.default)(paths,function(path){if("string"==typeof path||path instanceof String)return[pathStrToObj(path)];if(Array.isArray(path))return[{type:"first_child",path:path[0]},{type:"child_added",path:path[0]},{type:"child_removed",path:path[0]},{type:"child_moved",path:path[0]},{type:"child_changed",path:path[0]}];if((0,_isObject2.default)(path)){if(!path.path)throw new Error("Path is a required parameter within definition object");var strPath=path.path;return path.storeAs&&(strPath+="@".concat(path.storeAs)),path.queryParams&&(strPath+="#".concat(path.queryParams.join("&"))),path=Object.assign({},pathStrToObj(strPath),path),[path]}throw new Error("Invalid Path Definition: ".concat(path,". Only strings, objects, and arrays accepted."))})}var _default={getEventsFromInput:getEventsFromInput};exports.default=_default;
//# sourceMappingURL=events.js.map