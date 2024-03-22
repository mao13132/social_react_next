import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Loader } from "../Loader/Loader";
import styles from './Button.module.css';
import cn from 'classnames';

interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
};

export function Button({ isLoading, children, className }: IButton) {
    return (
        <button className={cn(className, styles['button'])}>{isLoading ? <Loader /> : children}</button>
    );
};