/// <reference types="react" />
import PropTypes from "prop-types";
export declare enum Encoding {
    mjpeg = "mjpeg",
    ros = "ros_compressed",
    png = "png",
    vp8 = "vp8",
    h264 = "h264"
}
export declare enum TransportLayer {
    raw = "raw",
    compressed = "compressed",
    theora = "theora"
}
interface ImageViewerProps {
    topic: string;
    height?: number;
    width?: number;
    host?: string;
    port?: number;
    encoding?: Encoding;
    transportLayer?: TransportLayer;
    quality?: number;
    disabled?: boolean;
    bitrate?: number;
    qmin?: number;
    qmax?: number;
    gop?: number;
    vp8Quality?: string;
}
export declare function rosImageSrcString(topic: string, height?: number, width?: number, host?: string, port?: number, encoding?: Encoding, transportLayer?: TransportLayer, quality?: number, bitrate?: number, qmin?: number, qmax?: number, gop?: number, vp8Quality?: string): string;
export declare const ImageViewer: {
    (props: ImageViewerProps): JSX.Element;
    propTypes: {
        topic: PropTypes.Validator<string>;
        height: PropTypes.Requireable<number>;
        width: PropTypes.Requireable<number>;
        host: PropTypes.Requireable<string>;
        port: PropTypes.Requireable<number>;
        encoding: PropTypes.Requireable<string>;
        transportLayer: PropTypes.Requireable<string>;
        quality: PropTypes.Requireable<number>;
        disabled: PropTypes.Requireable<boolean>;
        bitrate: PropTypes.Requireable<number>;
        qmin: PropTypes.Requireable<number>;
        qmax: PropTypes.Requireable<number>;
        gop: PropTypes.Requireable<number>;
        vp8Quality: PropTypes.Requireable<string>;
    };
};
export {};
