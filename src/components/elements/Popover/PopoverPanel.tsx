import React, { ReactNode, useContext } from 'react'
import { PopoverContext } from './PopoverContext'
import { Card } from '../Card'

interface IPopoverPanelProps {
  children: ReactNode
}

export type PanelComponent = React.FC<IPopoverPanelProps>

const PopoverPanel: PanelComponent = ({ children }: IPopoverPanelProps) => {
  const popoverContext = useContext(PopoverContext)

  return (
    (!popoverContext || popoverContext?.isPanelOpen) && (
      <div
        ref={popoverContext?.refs.setFloating}
        style={popoverContext?.floatingStyles}
        {...popoverContext?.getFloatingProps()}
      >
        <Card>{children}</Card>
      </div>
    )
  )
}

export { PopoverPanel }
