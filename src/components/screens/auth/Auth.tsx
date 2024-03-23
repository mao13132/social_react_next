'use client'
import { AtSign } from "lucide-react"
import { Field } from "../ui/field/Field"
import { Button } from "../ui/Button/Button"
import styles from './Auth.module.css';
import { ButtonGoogle } from "../ui/ButtonGoogle/ButtonGoogle";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from "react";


interface IAuth {
    type?: 'login' | 'register'
}

export function Auth({ type }: IAuth) {

    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get('callbackUrl') || '/profile';

    const router = useRouter();

    const hadleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        if (res && !res.error) {
            router.push('/profile')
        } else {
            console.log(`Не смог авторизоваться: ${res}`)
        };

    };

    console.log(`юз парамс: ${searchParams}`)

    return <div className={styles['form']}>

        <div className={styles['wrapper-form']}>

            <form className={styles['m-auto']} onSubmit={hadleSubmit}>

                <h1 className={styles['form-h1']}>{type}</h1>
                <Field name="email" placeholder="Enter Email" type="email" Icon={AtSign} required />
                <Field name="password" placeholder="Enter Password" type="password" Icon={AtSign} required />


                <div className={styles['button-row']}><Button>{type}</Button></div>
            </form>

            <ButtonGoogle onClick={() => signIn('google', { callbackUrl })}>Зайти через Google</ButtonGoogle>
        </div>
    </div>
};