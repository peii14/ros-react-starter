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
exports.useParam = exports.Param = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var RosConnection_1 = require("../RosConnection");
var roslib_1 = require("roslib");
var common_1 = require("../common");
var ParamContext = (0, react_1.createContext)(null);
var Param = function (props) {
    var ros = (0, RosConnection_1.useRos)();
    var param = new roslib_1.Param({ ros: ros, name: props.name });
    var _a = (0, react_1.useState)(null), paramValue = _a[0], setParamValue = _a[1];
    (0, react_1.useEffect)(function () {
        if (!(props.setValue == null)) {
            param.set(props.setValue, props.setCallback);
        }
    }, [props.setValue]);
    (0, react_1.useEffect)(function () {
        if (props.get === true) {
            param.get(function (response) {
                setParamValue(response);
            });
        }
    }, [props.get]);
    (0, react_1.useEffect)(function () {
        if (props.delete === true) {
            var deleteCallback = props.deleteCallback || (function (resp) { ; });
            param.delete(deleteCallback);
        }
    }, [props.delete]);
    return (react_1.default.createElement(ParamContext.Provider, { value: paramValue }, props.children));
};
exports.Param = Param;
;
exports.Param.propTypes = {
    children: prop_types_1.default.node,
    name: prop_types_1.default.string.isRequired,
    setValue: prop_types_1.default.any,
    delete: prop_types_1.default.bool,
    setCallback: prop_types_1.default.func,
    deleteCallback: prop_types_1.default.func,
};
function useParam() {
    return (0, common_1.useCheckedContext)(ParamContext);
}
exports.useParam = useParam;
;
//# sourceMappingURL=Param.js.map