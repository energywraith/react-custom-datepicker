import React, { ReactNode } from 'react'
import { ButtonComponent, PopoverButton } from './PopoverButton'
import { PanelComponent, PopoverPanel } from './PopoverPanel'
import PopoverProvider from './PopoverContext'

interface IPopoverProps {
  children: ReactNode
}

type PopoverComponent = React.FC<IPopoverProps> & { Button: ButtonComponent; Panel: PanelComponent }

const Popover: PopoverComponent = ({ children }: IPopoverProps) => {
  return <PopoverProvider>{children}</PopoverProvider>
}

Popover.Button = PopoverButton
Popover.Panel = PopoverPanel

export { Popover }
