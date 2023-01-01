import React from "react";
import PropTypes from "prop-types";
import { Ros } from "roslib";
export declare const ParamListProvider: {
    (props: ParamListProviderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        trigger: PropTypes.Requireable<boolean>;
        failedCallback: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
interface ParamListProviderProps {
    children?: React.ReactNode;
    trigger?: boolean;
    failedCallback?: (error: any) => void;
}
export declare function getParamList(ros: Ros, callback: (params: string[]) => void, failedCallback?: (error: any) => void): void;
export declare function useParamList(): string[];
export {};
