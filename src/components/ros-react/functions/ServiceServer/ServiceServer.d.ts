/// <reference types="react" />
import PropTypes from "prop-types";
import { ServiceRequest, ServiceResponse } from "roslib";
export declare const ServiceServer: {
    (props: ServiceServerProps): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        serviceType: PropTypes.Validator<string>;
        callback: PropTypes.Validator<(...args: any[]) => any>;
    };
};
interface ServiceServerProps {
    name: string;
    serviceType: string;
    callback: (req: ServiceRequest, resp: ServiceResponse) => void;
}
export declare function wrapServerCallback(callback: (req: ServiceRequest, resp: ServiceResponse) => void): (req: ServiceRequest, resp: ServiceResponse) => boolean;
export {};
