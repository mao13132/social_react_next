import { Loader2 } from "lucide-react";
import { ILoader } from "./Loader.props";
import styles from './Loader.module.css';
import cn from 'classnames';

export function Loader({ className }: ILoader): JSX.Element {
    return <Loader2 className={cn(className, styles['loader'])} color={'white'} />
};