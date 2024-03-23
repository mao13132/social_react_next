import { IMessage, IUser } from "@/app/types/chat.types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IChatItem extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    messages: IMessage[],
    particopants: IUser[],
};