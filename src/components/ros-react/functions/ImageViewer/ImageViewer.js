"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageViewer = exports.rosImageSrcString = exports.TransportLayer = exports.Encoding = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Encoding;
(function (Encoding) {
    Encoding["mjpeg"] = "mjpeg";
    Encoding["ros"] = "ros_compressed";
    Encoding["png"] = "png";
    Encoding["vp8"] = "vp8";
    Encoding["h264"] = "h264";
})(Encoding = exports.Encoding || (exports.Encoding = {}));
var TransportLayer;
(function (TransportLayer) {
    TransportLayer["raw"] = "raw";
    TransportLayer["compressed"] = "compressed";
    TransportLayer["theora"] = "theora";
})(TransportLayer = exports.TransportLayer || (exports.TransportLayer = {}));
function rosImageSrcString(topic, height, width, host, port, encoding, transportLayer, quality, bitrate, qmin, qmax, gop, vp8Quality) {
    if (height === void 0) { height = 480; }
    if (width === void 0) { width = 640; }
    if (host === void 0) { host = "http://localhost"; }
    if (port === void 0) { port = 8080; }
    if (encoding === void 0) { encoding = Encoding.mjpeg; }
    if (transportLayer === void 0) { transportLayer = TransportLayer.raw; }
    if (quality === void 0) { quality = 95; }
    if (bitrate === void 0) { bitrate = 100000; }
    if (qmin === void 0) { qmin = 10; }
    if (qmax === void 0) { qmax = 42; }
    if (gop === void 0) { gop = 250; }
    if (vp8Quality === void 0) { vp8Quality = 'realtime'; }
    if (encoding === Encoding.mjpeg) {
        return getMjpegSourceString(topic, height, width, host, port, encoding, transportLayer, quality);
    }
    else if (encoding === Encoding.vp8) {
        return getVp8SourceString(topic, height, width, host, port, encoding, transportLayer, bitrate, qmin, qmax, gop, vp8Quality);
    }
    else {
        return getOtherSourceString(topic, height, width, host, port, encoding, transportLayer);
    }
}
exports.rosImageSrcString = rosImageSrcString;
function getMjpegSourceString(topic, height, width, host, port, encoding, transportLayer, quality) {
    if (height === void 0) { height = 480; }
    if (width === void 0) { width = 640; }
    if (host === void 0) { host = "http://localhost"; }
    if (port === void 0) { port = 8080; }
    if (encoding === void 0) { encoding = Encoding.mjpeg; }
    if (transportLayer === void 0) { transportLayer = TransportLayer.raw; }
    if (quality === void 0) { quality = 95; }
    return "".concat(host, ":").concat(port, "/stream?topic=").concat(topic, "&type=").concat(encoding, "&default_transport=").concat(transportLayer, "&width=").concat(width, "&height=").concat(height, "&quality=").concat(quality);
}
function getVp8SourceString(topic, height, width, host, port, encoding, transportLayer, bitrate, qmin, qmax, gop, vp8Quality) {
    return "".concat(host, ":").concat(port, "/stream?topic=").concat(topic, "&type=").concat(encoding, "&default_transport=").concat(transportLayer, "&width=").concat(width, "&height=").concat(height, "&bitrate=").concat(bitrate, "&qmin=").concat(qmin, "&qmax=").concat(qmax, "&gop=").concat(gop, "&quality=").concat(vp8Quality);
}
function getOtherSourceString(topic, height, width, host, port, encoding, transportLayer) {
    return "".concat(host, ":").concat(port, "/stream?topic=").concat(topic, "&type=").concat(encoding, "&default_transport=").concat(transportLayer, "&width=").concat(width, "&height=").concat(height);
}
var ImageViewer = function (props) {
    if (props.disabled) {
        return (react_1.default.createElement("img", { src: "", width: props.width, height: props.height, alt: "" }));
    }
    else {
        var src = rosImageSrcString(props.topic, props.height, props.width, props.host, props.port, props.encoding, props.transportLayer, props.quality, props.bitrate, props.qmin, props.qmax, props.gop, props.vp8Quality);
        return (react_1.default.createElement("img", { src: src, width: props.width, height: props.height, alt: "" }));
    }
};
exports.ImageViewer = ImageViewer;
exports.ImageViewer.propTypes = {
    topic: prop_types_1.default.string.isRequired,
    height: prop_types_1.default.number,
    width: prop_types_1.default.number,
    host: prop_types_1.default.string,
    port: prop_types_1.default.number,
    encoding: prop_types_1.default.string,
    transportLayer: prop_types_1.default.string,
    quality: prop_types_1.default.number,
    disabled: prop_types_1.default.bool,
    bitrate: prop_types_1.default.number,
    qmin: prop_types_1.default.number,
    qmax: prop_types_1.default.number,
    gop: prop_types_1.default.number,
    vp8Quality: prop_types_1.default.string,
};
//# sourceMappingURL=ImageViewer.js.map