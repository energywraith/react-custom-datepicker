import React, { ButtonHTMLAttributes } from 'react'
import { classNames } from '~/lib/classNames'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withHoverEffect?: boolean
}

const Button = ({ children, className, withHoverEffect = true, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        'border border-secondary-200 p-2.5 text-sm text-gray-700 rounded-md disabled:text-gray-400',
        withHoverEffect ? 'hover:enabled:bg-blue-50' : '',
        className,
      )}
    >
      {children}
    </button>
  )
}

export { Button }
