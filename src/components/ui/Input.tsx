import React , {forwardRef}from 'react';
import { PropsWithChildren } from 'react';
import cn from 'utils/libs';
import { InputHTMLAttributes } from 'react';
import {cva, VariantProps} from 'class-variance-authority'


const inputVariants = cva(
  'mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none',
  {
    variants: {
      variant: {
        default: ' ',
        search: 'pl-12  ',
        search1: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
interface InputProps
  extends  InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
     state?:string
    }
export default forwardRef<HTMLInputElement,  InputProps>(function Input( props, ref){
  const {className,placeholder,type, id, onChange, state, disabled, variant} = props;
 
  return (
    <input
      onChange={onChange}
      disabled={disabled}
      type={type}
      id={id}
      placeholder={placeholder}
      className={cn(
        inputVariants({ variant, className }),
        `${
          disabled === true
            ? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
            : state === 'error'
            ? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'
            : state === 'success'
            ? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400'
            : 'border-gray-200 dark:!border-white/10 dark:text-white'
        }`,
      )}
    />
  );

})