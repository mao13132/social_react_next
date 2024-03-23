import { IChatItem } from "./ChatItem.props";
import styles from './ChatItem.module.css';
import cn from 'classnames';
import { useSession } from "next-auth/react";
import Image from "next/image";

export const ChatItem = ({ particopants, messages, className, ...props }: IChatItem): JSX.Element => {


    const session = useSession();

    const correnspondent = particopants.find(items => items.email !== session?.data?.user?.email);

    const lastMessage = messages.at(-1);

    return (
        <div className={cn(className, styles['chatItems'])} {...props}>
            {<Image src={session?.data?.user?.image || '/avatar.png'} className={styles['avatar']} alt="Аватар" width={45} height={45} />}

            <span>{session?.data ? session?.data?.user?.email : 'Anonim'}</span>

            <div className={styles['wrapper-message']}>

                <div className={styles['message-title']}>
                    <div className={styles['user-name']}>{correnspondent?.email}</div>

                    <div className={styles['user-date']}>{lastMessage?.createdAt}</div>
                </div>

                <div className={styles['message-text']}>{lastMessage?.text}</div>

            </div>
        </div>
    );
};
