"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=useFirebaseConnect;var _differenceWith2=_interopRequireDefault(require("lodash/differenceWith")),_isEqual2=_interopRequireDefault(require("lodash/isEqual")),_react=require("react"),_query=require("./actions/query"),_utils=require("./utils"),_useFirebase=_interopRequireDefault(require("./useFirebase"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function useFirebaseConnect(queriesConfig){var firebase=(0,_useFirebase.default)(),eventRef=(0,_react.useRef)(),dataRef=(0,_react.useRef)(),data=(0,_react.useMemo)(function(){return(0,_utils.invokeArrayQuery)(queriesConfig)},[queriesConfig]);(0,_react.useEffect)(function(){if(null!==data&&!(0,_isEqual2.default)(data,dataRef.current)){var itemsToSubscribe=(0,_differenceWith2.default)(data,dataRef.current,_isEqual2.default),itemsToUnsubscribe=(0,_differenceWith2.default)(dataRef.current,data,_isEqual2.default);dataRef.current=data,(0,_query.unWatchEvents)(firebase,firebase.dispatch,(0,_utils.getEventsFromInput)(itemsToUnsubscribe)),eventRef.current=(0,_utils.getEventsFromInput)(data),(0,_query.watchEvents)(firebase,firebase.dispatch,(0,_utils.getEventsFromInput)(itemsToSubscribe))}},[data]),(0,_react.useEffect)(function(){return function(){(0,_query.unWatchEvents)(firebase,firebase.dispatch,eventRef.current)}},[])}module.exports=exports.default;
//# sourceMappingURL=useFirebaseConnect.js.map