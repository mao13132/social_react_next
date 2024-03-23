'server client';

import { CurrentUserProps } from "./CurrentUser.props";
import styles from './CurrentUser.module.css';
import cn from 'classnames';
import Image from 'next/image';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const CurrentUser = ({ className, ...props }: CurrentUserProps): JSX.Element => {

    const session = useSession();

    return (
        <div className={cn(className, styles['user'])} {...props}>

            {<Image src={session?.data?.user?.image || '/avatar.png'} className={styles['avatar']} alt="Аватар" width={50} height={50} />}

            <span>{session?.data ? session?.data?.user?.email : 'Anonim' }</span>

            {session?.data

                ? <Link className={styles['out']} href='#' onClick={() => signOut(
                    {
                        callbackUrl: '/',
                    }
                )}>Sign Out</Link>
                : <Link className={styles['in']} href='/login'>Sign In</Link>}

        </div>
    );
};