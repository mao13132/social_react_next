'use client'

import { MessagesSquare, Phone, Settings, Sun, Users2 } from 'lucide-react';
import Image from 'next/image';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import { API } from '@/utils/api';
import { MENU } from './sidebar.data';
import cn from 'classnames';
import { usePathname } from 'next/navigation';


export function Sidebar() {

    const pathName = usePathname();

    return <aside className={styles['sidebar']}>
        <Image priority src="/logo.svg" alt='логотип' width={50} height={50} />

        <div className={styles['icons']}>

            {MENU.map(item => (

                <Link href={item.url} key={item.url} className={cn({
                    [styles['active']]: pathName === item.url,
                })}>

                    <item.icon size={27} />

                </Link>
            ))}


        </div>

        <Sun size={27} />


    </aside>
};