import React, { useContext } from 'react'
import { ChevronIcon } from '~/components/icons'
import { Button, IButtonProps } from '../Button'
import { PopoverContext } from './PopoverContext'

export interface IPopoverButtonProps extends IButtonProps {}

export type ButtonComponent = React.FC<IPopoverButtonProps>

const PopoverButton: ButtonComponent = ({ children, disabled }: IPopoverButtonProps) => {
  const popoverContext = useContext(PopoverContext)

  return (
    <Button
      ref={popoverContext?.refs.setReference}
      className={`w-72 border border-secondary-700 rounded-md shadow-xs flex items-center gap-x-2 px-4 py-2 ${
        disabled ? 'bg-secondary-600 text-neutral-800' : 'text-gray-700 hover:bg-info-50'
      }`}
      {...popoverContext?.getReferenceProps()}
    >
      {children}
      <ChevronIcon className='w-4 h-4 ml-auto' />
    </Button>
  )
}

export { PopoverButton }
