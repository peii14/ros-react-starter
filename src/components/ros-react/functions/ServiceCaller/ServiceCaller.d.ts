/// <reference types="react" />
import PropTypes from "prop-types";
import { Ros, ServiceResponse } from "roslib";
export declare const ServiceCaller: {
    (props: ServiceCallerProps): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        serviceType: PropTypes.Requireable<string>;
        trigger: PropTypes.Requireable<boolean>;
        request: PropTypes.Requireable<object>;
        callback: PropTypes.Requireable<(...args: any[]) => any>;
        failedCallback: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
interface ServiceCallerProps {
    name: string;
    serviceType: string;
    trigger?: boolean;
    request?: object;
    callback?: (resp: ServiceResponse) => void;
    failedCallback?: (error: any) => void;
}
export declare function callService(ros: Ros, name: string, serviceType: string, request?: object, callback?: ((resp: ServiceResponse) => void), failedCallback?: ((error: any) => void)): void;
export {};
