import React, { ButtonHTMLAttributes } from 'react'
import { classNames } from '~/lib/classNames'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        'border border-secondary-200 p-2.5 text-sm text-gray-700 rounded-md disabled:text-gray-400 hover:enabled:bg-blue-50',
        className,
      )}
    >
      {children}
    </button>
  )
}

export { Button }
