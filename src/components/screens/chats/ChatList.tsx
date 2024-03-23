import { Search } from "lucide-react";
import { Field } from "../ui/field/Field";
import styles from './ChatList.module.css';

export function ChatList() {
    return (
        <div className={styles['search-row']}>
            <Field className={styles['seach-chat']} Icon={Search} placeholder="Search chats" />           
        </div>
    );
};