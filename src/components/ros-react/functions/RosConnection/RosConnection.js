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
exports.useRos = exports.closeConnection = exports.connect = exports.setupConnectionCallbacks = exports.RosConnection = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var roslib_1 = require("roslib");
var js_sha512_1 = require("js-sha512");
var RosHandle = new roslib_1.Ros({});
var RosContext = (0, react_1.createContext)(RosHandle);
var RosConnection = function (props) {
    (0, react_1.useEffect)(function () {
        setupConnectionCallbacks(RosHandle, props.url, props.autoConnect, props.autoConnectTimeout, props.authenticate, props.user, props.password);
        connect(RosHandle, props.url, props.authenticate, props.user, props.password);
        return function () {
            closeConnection(RosHandle);
        };
    }, []);
    return (react_1.default.createElement(RosContext.Provider, { value: RosHandle }, props.children));
};
exports.RosConnection = RosConnection;
exports.RosConnection.propTypes = {
    children: prop_types_1.default.node.isRequired,
    url: prop_types_1.default.string.isRequired,
    autoConnect: prop_types_1.default.bool,
    autoConnectTimeout: prop_types_1.default.number,
    authenticate: prop_types_1.default.bool,
    user: prop_types_1.default.string,
    password: prop_types_1.default.string,
};
function setupConnectionCallbacks(ros, url, autoConnect, autoConnectTimeout, authenticate, user, password) {
    if (url === void 0) { url = "ws://127.0.0.1:9090"; }
    if (autoConnect === void 0) { autoConnect = false; }
    if (autoConnectTimeout === void 0) { autoConnectTimeout = 1000; }
    if (authenticate === void 0) { authenticate = false; }
    if (user === void 0) { user = ''; }
    if (password === void 0) { password = ''; }
    ros.on('connection', function () {
        console.log("Connected");
    });
    ros.on('close', function () {
        console.log("Disconnected");
    });
    ros.on('error', function () {
        console.log("Connection error");
        if (autoConnect) {
            setTimeout(function () {
                connect(ros, url, authenticate, user, password);
            }, autoConnectTimeout);
        }
    });
}
exports.setupConnectionCallbacks = setupConnectionCallbacks;
function connect(ros, url, authenticate, user, password) {
    if (url === void 0) { url = "ws://127.0.0.1:9090"; }
    if (authenticate === void 0) { authenticate = false; }
    if (user === void 0) { user = ''; }
    if (password === void 0) { password = ''; }
    ros.connect(url);
    if (authenticate) {
        var authMessage = new AuthenticationMessage(url, user, password);
        ros.authenticate(authMessage.getMac(), authMessage.client, authMessage.dest, authMessage.rand, authMessage.time, authMessage.level, authMessage.timeEnd);
    }
}
exports.connect = connect;
function closeConnection(ros) {
    ros.close();
}
exports.closeConnection = closeConnection;
var AuthenticationMessage = /** @class */ (function () {
    function AuthenticationMessage(url, user, password) {
        this.dest = url;
        this.client = user;
        this.secret = password;
        this.rand = "randomstring";
        this.time = new Date().getTime();
        this.level = "user";
        this.timeEnd = this.time;
    }
    AuthenticationMessage.prototype.getMac = function () {
        return (0, js_sha512_1.sha512)(this.secret + this.client + this.dest + this.rand + this.time.toString() + this.level + this.timeEnd.toString());
    };
    return AuthenticationMessage;
}());
function useRos() {
    var ros = (0, react_1.useContext)(RosContext);
    if (ros === undefined) {
        throw new Error('rosreact components must be wrapped by a RosProvider');
    }
    return ros;
}
exports.useRos = useRos;
//# sourceMappingURL=RosConnection.js.map