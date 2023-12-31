import { forwardRef, ReactNode } from "react";
import Link from "next/link"
import { cn } from '@/utils/utils'

export enum Types {
  LINK = 'link',
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}

interface Props {
  children?: ReactNode;
  type: Types;
  href?: string; // Change type to string
  className?: string;
}

export type Ref = HTMLButtonElement;

const defaultStyle = "bg-lime-400 px-5 py-2 active:bg-neongreen border-b-gray-400 border-r-gray-500 border-b-3 border-r-3 active:border-l-3 active:border-r-0 active:border-r-gray-500 active:border-b-gray-700 select-none";

const Button = forwardRef<Ref, Props>((props, ref) => (
  props.type === Types.LINK ? (
    <Link href={props.href || ''} className={defaultStyle + (props.className || '')}>
      {props.children}
    </Link>
  ) : <button ref={ref} type={props.type} className={cn(defaultStyle, props.className)}>
    {props.children}
  </button>

));

Button.displayName = 'Button'

export default Button;
