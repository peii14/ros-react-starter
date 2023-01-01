import React from 'react';
import PropTypes from 'prop-types';
import { Ros } from 'roslib';
interface RosConnectionProps {
    children: React.ReactNode;
    url?: string;
    autoConnect?: boolean;
    autoConnectTimeout?: number;
    authenticate?: boolean;
    user?: string;
    password?: string;
}
export declare const RosConnection: {
    (props: RosConnectionProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        url: PropTypes.Validator<string>;
        autoConnect: PropTypes.Requireable<boolean>;
        autoConnectTimeout: PropTypes.Requireable<number>;
        authenticate: PropTypes.Requireable<boolean>;
        user: PropTypes.Requireable<string>;
        password: PropTypes.Requireable<string>;
    };
};
export declare function setupConnectionCallbacks(ros: Ros, url?: string, autoConnect?: boolean, autoConnectTimeout?: number, authenticate?: boolean, user?: string, password?: string): void;
export declare function connect(ros: Ros, url?: string, authenticate?: boolean, user?: string, password?: string): void;
export declare function closeConnection(ros: Ros): void;
export declare function useRos(): Ros;
export {};
