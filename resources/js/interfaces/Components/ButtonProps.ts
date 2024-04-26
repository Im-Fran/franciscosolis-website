import {ButtonHTMLAttributes, PropsWithChildren} from "react";

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
    onClick?: () => void;
    color?: 'primary' |  'white' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink';
    size?: 'sm' | 'md' | 'lg';
}
