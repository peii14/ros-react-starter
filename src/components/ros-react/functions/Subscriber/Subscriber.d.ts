import { Topic, Ros, Message } from "roslib";
import React from "react";
import PropTypes from "prop-types";
export declare const Subscriber: {
    (props: SubscriberProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        topic: PropTypes.Validator<string>;
        messageType: PropTypes.Validator<string>;
        throttleRate: PropTypes.Requireable<number>;
        latch: PropTypes.Requireable<boolean>;
        queueLength: PropTypes.Requireable<number>;
        queueSize: PropTypes.Requireable<number>;
        messageInitialValue: PropTypes.Requireable<object>;
    };
};
interface SubscriberProps {
    children?: React.ReactNode;
    topic: string;
    messageType: string;
    throttleRate?: number;
    latch?: boolean;
    queueLength?: number;
    queueSize?: number;
    customCallback?: (msg: Message) => void;
    messageInitialValue?: object;
}
export declare function subscribe(ros: Ros, settings: TopicSettings, callback: (message: Message) => void): Topic;
export declare function getTopic(ros: Ros, settings: TopicSettings): Topic;
export interface TopicSettings {
    topic: string;
    messageType: string;
    throttleRate?: number;
    latch?: boolean;
    queueLength?: number;
    queueSize?: number;
}
export declare function unsubscribe(topic: Topic, callback?: (message: Message) => void): void;
export declare function useMsg(): Message;
export {};
