import React, { createContext, ReactNode, useState } from 'react'

import {
  autoUpdate,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  UseFloatingData,
  useInteractions,
} from '@floating-ui/react'

const initialState = false

interface IPopoverContext {
  isPanelOpen: boolean
  refs: UseFloatingData['refs']
  floatingStyles: UseFloatingData['floatingStyles']
  getFloatingProps: () => { [key: string]: any }
  getReferenceProps: () => { [key: string]: any }
  close: () => void
}

const PopoverContext = createContext<IPopoverContext | null>(null)

interface IPopoverProviderProps {
  children: ReactNode
}

const PopoverProvider = ({ children }: IPopoverProviderProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isPanelOpen,
    onOpenChange: setIsPanelOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          })
        },
      }),
    ],
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])

  const close = () => {
    setIsPanelOpen(false)
  }

  const value = { isPanelOpen, refs, floatingStyles, getReferenceProps, getFloatingProps, close }

  return <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
}

export default PopoverProvider

export { PopoverContext, initialState }
