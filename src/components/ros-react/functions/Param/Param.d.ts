import React from 'react';
import PropTypes from 'prop-types';
export declare const Param: {
    (props: ParamProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        name: PropTypes.Validator<string>;
        setValue: PropTypes.Requireable<any>;
        delete: PropTypes.Requireable<boolean>;
        setCallback: PropTypes.Requireable<(...args: any[]) => any>;
        deleteCallback: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
interface ParamProps {
    children?: React.ReactNode;
    name: string;
    setValue?: any;
    get?: boolean;
    setCallback?: (response: any) => void;
    delete?: boolean;
    deleteCallback?: (response: any) => void;
}
export declare function useParam(): any;
export {};
