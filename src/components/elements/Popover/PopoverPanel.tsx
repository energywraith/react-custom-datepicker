import React, { useContext } from 'react'
import { PopoverContext } from './PopoverContext'
import { Card, ICardProps } from '../Card'

interface IPopoverPanelProps extends ICardProps {}

export type PanelComponent = React.FC<IPopoverPanelProps>

const PopoverPanel: PanelComponent = ({ children, classes }: IPopoverPanelProps) => {
  const popoverContext = useContext(PopoverContext)

  return (
    (!popoverContext || popoverContext?.isPanelOpen) && (
      <div
        ref={popoverContext?.refs.setFloating}
        style={popoverContext?.floatingStyles}
        {...popoverContext?.getFloatingProps()}
      >
        <Card classes={classes}>{children}</Card>
      </div>
    )
  )
}

export { PopoverPanel }
