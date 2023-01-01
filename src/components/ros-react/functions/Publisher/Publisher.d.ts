/// <reference types="react" />
import PropTypes from "prop-types";
import { Message } from "roslib";
export declare const Publisher: {
    (props: PublisherProps): JSX.Element;
    propTypes: {
        topic: PropTypes.Validator<string>;
        message: PropTypes.Requireable<object>;
        messageType: PropTypes.Validator<string>;
        throttleRate: PropTypes.Requireable<number>;
        latch: PropTypes.Requireable<boolean>;
        queueLength: PropTypes.Requireable<number>;
        queueSize: PropTypes.Requireable<number>;
        autoRepeat: PropTypes.Requireable<boolean>;
    };
};
interface PublisherProps {
    topic: string;
    message: Message;
    messageType: string;
    throttleRate?: number;
    latch?: boolean;
    queueLength?: number;
    queueSize?: number;
    autoRepeat?: boolean;
}
export {};
