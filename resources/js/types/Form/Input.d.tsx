import {InputHTMLAttributes} from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {

    label: string;
    placeholder: string;
    type: string;
    defaultValue: string;
    className: string;
}
