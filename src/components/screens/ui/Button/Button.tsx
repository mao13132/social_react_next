import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Loader } from "../Loader/Loader";
import styles from './Button.module.css';
import cn from 'classnames';

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
};

export function Button({ isLoading, children, className, ...props }: IButton) {
    return (
        <button className={cn(className, styles['button'])} {...props}>{isLoading ? <Loader /> : children}</button>
    );
};