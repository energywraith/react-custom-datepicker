import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { classNames } from '~/lib/classNames'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withHoverEffect?: boolean
}

export type Ref = HTMLButtonElement

const Button = forwardRef<Ref, IButtonProps>(({ children, className, withHoverEffect = true, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={classNames(
        'border border-secondary-200 p-2.5 text-sm text-gray-700 rounded-md disabled:text-gray-400 focus:ring-1',
        withHoverEffect ? 'hover:enabled:bg-blue-50' : '',
        className,
      )}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
