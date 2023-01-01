"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callService = exports.ServiceCaller = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var RosConnection_1 = require("../RosConnection");
var roslib_1 = require("roslib");
var ServiceCaller = function (props) {
    var name = props.name, serviceType = props.serviceType, trigger = props.trigger, request = props.request, callback = props.callback, failedCallback = props.failedCallback;
    var ros = (0, RosConnection_1.useRos)();
    (0, react_1.useEffect)(function () {
        if (trigger) {
            callService(ros, name, serviceType, request, callback, failedCallback);
        }
    }, [trigger]);
    return react_1.default.createElement(react_1.Fragment, null);
};
exports.ServiceCaller = ServiceCaller;
exports.ServiceCaller.propTypes = {
    name: prop_types_1.default.string.isRequired,
    serviceType: prop_types_1.default.string,
    trigger: prop_types_1.default.bool,
    request: prop_types_1.default.object,
    callback: prop_types_1.default.func,
    failedCallback: prop_types_1.default.func,
};
function callService(ros, name, serviceType, request, callback, failedCallback) {
    if (callback === void 0) { callback = function (resp) { ; }; }
    var service = new roslib_1.Service({ ros: ros, name: name, serviceType: serviceType });
    var serviceRequest = new roslib_1.ServiceRequest(request);
    service.callService(serviceRequest, callback, failedCallback);
}
exports.callService = callService;
//# sourceMappingURL=ServiceCaller.js.map