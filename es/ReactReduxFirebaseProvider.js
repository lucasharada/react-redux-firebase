"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_createFirebaseInstance=_interopRequireDefault(require("./createFirebaseInstance")),_ReactReduxFirebaseContext=_interopRequireDefault(require("./ReactReduxFirebaseContext")),_ReduxFirestoreProvider=_interopRequireDefault(require("./ReduxFirestoreProvider"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_extends.apply(this,arguments)}function ReactReduxFirebaseProvider(){var props=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},children=props.children,config=props.config,dispatch=props.dispatch,firebase=props.firebase,initializeAuth=props.initializeAuth,createFirestoreInstance=props.createFirestoreInstance,extendedFirebaseInstance=_react.default.useMemo(function(){var extendedFirebaseInstance=(0,_createFirebaseInstance.default)(firebase,config,dispatch);return initializeAuth&&extendedFirebaseInstance.initializeAuth(),extendedFirebaseInstance},[firebase,config,dispatch]);return createFirestoreInstance?_react.default.createElement(_ReactReduxFirebaseContext.default.Provider,{value:extendedFirebaseInstance},_react.default.createElement(_ReduxFirestoreProvider.default,_extends({},props,{initializeAuth:!1}),children)):_react.default.createElement(_ReactReduxFirebaseContext.default.Provider,{value:extendedFirebaseInstance},children)}ReactReduxFirebaseProvider.defaultProps={initializeAuth:!0},ReactReduxFirebaseProvider.propTypes={children:_propTypes.default.node,config:_propTypes.default.object.isRequired,dispatch:_propTypes.default.func.isRequired,firebase:_propTypes.default.object.isRequired,initializeAuth:_propTypes.default.bool,createFirestoreInstance:_propTypes.default.func};var _default=ReactReduxFirebaseProvider;exports.default=_default,module.exports=exports.default;
//# sourceMappingURL=ReactReduxFirebaseProvider.js.map