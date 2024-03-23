import { IButton } from "./ButtonGoogle.props";
import styles from './ButtonGoogle.module.css';
import cn from 'classnames';

export const ButtonGoogle = ({ className, children, ...props }: IButton): JSX.Element => {



    return (
        <button className={cn(className, styles['button'])} {...props}>
            {children}
        </button>
    );
};