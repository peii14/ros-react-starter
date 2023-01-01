import { Ros } from "roslib";
import React from "react";
import PropTypes from "prop-types";
export declare const TopicListProvider: {
    (props: TopicListProviderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        trigger: PropTypes.Requireable<boolean>;
        failedCallback: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
interface TopicListProviderProps {
    children?: React.ReactNode;
    trigger?: boolean;
    failedCallback?: (error: any) => void;
}
export declare function getTopicList(ros: Ros, callback: (topics: {
    topics: string[];
    types: string[];
}) => void, failedCallback?: (error: any) => void): void;
export declare function useTopicList(): {
    topics: string[];
    types: string[];
};
export {};
