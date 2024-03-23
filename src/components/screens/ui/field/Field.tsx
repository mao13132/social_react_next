import { forwardRef } from 'react';
import styles from './Field.module.css';
import { TypeInputProps } from './field.types';
import cn from 'classnames';

export const Field = forwardRef<HTMLInputElement, TypeInputProps>(
    ({ error, type: initialType, style, Icon, className, ...rest }, ref) => {

        return (
            <div className={cn(className)}>
                <label className={cn(styles['field'])}>

                    {Icon && (
                        <div className={styles['icon']}>
                            <Icon />
                        </div>
                    )}

                    <input ref={ref} {...rest} style={style} />
                    {error && <div className={styles['error']}>{error.message}</div>}

                </label>
            </div>
        );
    }
);