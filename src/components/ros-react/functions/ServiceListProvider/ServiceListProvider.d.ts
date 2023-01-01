import React from "react";
import PropTypes from "prop-types";
import { Ros } from "roslib";
export declare const ServiceListProvider: {
    (props: ServiceListProviderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        trigger: PropTypes.Requireable<boolean>;
        failedCallback: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
interface ServiceListProviderProps {
    children?: React.ReactNode;
    trigger?: boolean;
    failedCallback?: (error: any) => void;
}
export declare function getServiceList(ros: Ros, callback: (services: string[]) => void, failedCallback?: (error: any) => void): void;
export declare function useServiceList(): string[];
export {};
