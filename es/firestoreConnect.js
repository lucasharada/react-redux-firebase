"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=firestoreConnect;var _isEqual2=_interopRequireDefault(require("lodash/isEqual")),_react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_hoistNonReactStatics=_interopRequireDefault(require("hoist-non-react-statics")),_utils=require("./utils"),_ReduxFirestoreContext=_interopRequireDefault(require("./ReduxFirestoreContext")),_ReactReduxFirebaseContext=_interopRequireDefault(require("./ReactReduxFirebaseContext"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function(){return cache},cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={};if(null!=obj){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function firestoreConnect(){var queriesConfig=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return function(WrappedComponent){function FirestoreConnectWithContext(props){return _react.default.createElement(_ReactReduxFirebaseContext.default.Consumer,null,function(_internalFirebase){return _react.default.createElement(_ReduxFirestoreContext.default.Consumer,null,function(_internalFirestore){return _react.default.createElement(FirestoreConnectWrapped,_extends({},props,{dispatch:_internalFirebase.dispatch,firestore:_internalFirestore,firebase:_internalFirebase}))})})}var FirestoreConnectWrapped=function(_Component){function FirestoreConnectWrapped(){var _getPrototypeOf2,_this;_classCallCheck(this,FirestoreConnectWrapped);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(FirestoreConnectWrapped)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"prevData",null),_this}return _inherits(FirestoreConnectWrapped,_Component),_createClass(FirestoreConnectWrapped,[{key:"componentDidMount",value:function componentDidMount(){if(this.firestoreIsEnabled){var inputAsFunc=(0,_utils.createCallable)(queriesConfig);this.prevData=inputAsFunc(this.props,this.props),this.props.firestore.setListeners(this.prevData)}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.firestoreIsEnabled&&this.prevData&&this.props.firestore.unsetListeners(this.prevData)}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(np){var firestore=this.props.firestore,inputAsFunc=(0,_utils.createCallable)(queriesConfig),data=inputAsFunc(np,this.props);if(this.firestoreIsEnabled&&!(0,_isEqual2.default)(data,this.prevData)){var changes=(0,_utils.getChanges)(data,this.prevData);this.prevData=data,firestore.unsetListeners(changes.removed),firestore.setListeners(changes.added)}}},{key:"render",value:function render(){return _react.default.createElement(WrappedComponent,this.props)}},{key:"firestoreIsEnabled",get:function get(){return!!this.props.firestore}}]),FirestoreConnectWrapped}(_react.Component);return _defineProperty(FirestoreConnectWrapped,"wrappedComponent",WrappedComponent),_defineProperty(FirestoreConnectWrapped,"displayName",(0,_utils.wrapDisplayName)(WrappedComponent,"FirestoreConnectWrapped")),FirestoreConnectWrapped.propTypes={dispatch:_propTypes.default.func.isRequired,firebase:_propTypes.default.object,firestore:_propTypes.default.object},FirestoreConnectWithContext.displayName=(0,_utils.wrapDisplayName)(WrappedComponent,"FirestoreConnect"),FirestoreConnectWithContext.wrappedComponent=WrappedComponent,(0,_hoistNonReactStatics.default)(FirestoreConnectWithContext,WrappedComponent)}}module.exports=exports.default;
//# sourceMappingURL=firestoreConnect.js.map