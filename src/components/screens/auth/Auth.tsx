import { AtSign } from "lucide-react"
import { Field } from "../ui/field/Field"

interface IAuth {
    type?: 'login' | 'register'
}

export function Auth({ type }: IAuth) {
    return <div>
        <form>
            <Field placeholder="Enter Email" type="email" Icon={AtSign} />
            <Field placeholder="Enter Password" type="password" Icon={AtSign} />
        </form>
    </div>
};