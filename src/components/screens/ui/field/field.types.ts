import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IfiledProps {
    placeholder: string,
    error?: FieldError,
    isEyeIcon?: boolean,
    Icon?: LucideIcon,
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IfiledProps;
