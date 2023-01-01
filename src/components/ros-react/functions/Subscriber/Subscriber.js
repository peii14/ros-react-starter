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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMsg = exports.unsubscribe = exports.getTopic = exports.subscribe = exports.Subscriber = void 0;
var roslib_1 = require("roslib");
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var RosConnection_1 = require("../RosConnection");
var common_1 = require("../common");
var MessageContext = (0, react_1.createContext)(new roslib_1.Message({}));
var Subscriber = function (props) {
    var ros = (0, RosConnection_1.useRos)();
    var _a = (0, react_1.useState)(new roslib_1.Message(props.messageInitialValue)), message = _a[0], setMessage = _a[1];
    var topic = props.topic, messageType = props.messageType, throttleRate = props.throttleRate, latch = props.latch, queueLength = props.queueLength, queueSize = props.queueSize, customCallback = props.customCallback, other = __rest(props, ["topic", "messageType", "throttleRate", "latch", "queueLength", "queueSize", "customCallback"]);
    var topicSettings = {
        topic: topic,
        messageType: messageType,
        throttleRate: throttleRate,
        latch: latch,
        queueLength: queueLength,
        queueSize: queueSize
    };
    var callback = customCallback || (function (newMessage) { setMessage(newMessage); });
    (0, react_1.useEffect)(function () {
        var topic = subscribe(ros, topicSettings, callback);
        return function () {
            unsubscribe(topic, callback);
        };
    }, []);
    return (react_1.default.createElement(MessageContext.Provider, { value: message }, props.children));
};
exports.Subscriber = Subscriber;
exports.Subscriber.propTypes = {
    children: prop_types_1.default.node,
    topic: prop_types_1.default.string.isRequired,
    messageType: prop_types_1.default.string.isRequired,
    throttleRate: prop_types_1.default.number,
    latch: prop_types_1.default.bool,
    queueLength: prop_types_1.default.number,
    queueSize: prop_types_1.default.number,
    messageInitialValue: prop_types_1.default.object,
};
function subscribe(ros, settings, callback) {
    var topic = getTopic(ros, settings);
    topic.subscribe(callback);
    return topic;
}
exports.subscribe = subscribe;
function getTopic(ros, settings) {
    var options = {
        ros: ros,
        name: settings.topic,
        messageType: settings.messageType,
        throttle_rate: settings.throttleRate || 10,
        latch: settings.latch || false,
        queue_length: settings.queueLength || 1,
        queue_size: settings.queueSize || 10,
    };
    return new roslib_1.Topic(options);
}
exports.getTopic = getTopic;
function unsubscribe(topic, callback) {
    if (callback) {
        topic.unsubscribe(callback);
    }
    else {
        topic.unsubscribe();
    }
}
exports.unsubscribe = unsubscribe;
function useMsg() {
    return (0, common_1.useCheckedContext)(MessageContext);
}
exports.useMsg = useMsg;
//# sourceMappingURL=Subscriber.js.map