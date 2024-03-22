import { AtSign } from "lucide-react"
import { Field } from "../ui/field/Field"
import { Button } from "../ui/Button/Button"
import styles from './Auth.module.css';

interface IAuth {
    type?: 'login' | 'register'
}

export function Auth({ type }: IAuth) {
    return <div className={styles['form']}>


        <form className={styles['m-auto']}>
            
            <h1 className={styles['form-h1']}>{type}</h1>
            <Field error={{message: 'Не верный тип'}} placeholder="Enter Email" type="email" Icon={AtSign} />
            <Field placeholder="Enter Password" type="password" Icon={AtSign} />


            <div className={styles['button-row']}><Button>{type}</Button></div>
        </form>
    </div>
};