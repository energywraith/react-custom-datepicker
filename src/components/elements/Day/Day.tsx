import React from 'react'
import { classNames } from '../../../lib/classNames'
import { Button, IButtonProps } from '../Button'

export interface IDayClassesBase {
  root?: string
  underline?: string
}

export interface IDayClasses extends IDayClassesBase {
  active?: IDayClassesBase
  today?: IDayClassesBase
  inRange?: IDayClassesBase
}

interface IDayProps extends IButtonProps {
  isActive?: boolean
  isToday?: boolean
  isInRange?: boolean
  classes?: IDayClasses
}

const Day = ({ children, classes, isActive, isToday, isInRange, disabled, onClick }: IDayProps) => {
  return (
    <Button
      type='button'
      disabled={disabled}
      className={classNames(
        'w-9 h-9 border-none p-0',
        classes?.root,
        isActive
          ? classNames('bg-blue-600 text-white disabled:bg-neutral-200 disabled:text-gray-400', classes?.active?.root)
          : 'hover:text-blue-600',
        isToday ? classNames('relative', classes?.active?.root) : null,
        isInRange ? classNames('bg-blue-100', classes?.inRange?.root) : null,
      )}
      withHoverEffect={!isActive}
      onClick={onClick}
    >
      {children}
      <div
        className={classNames(
          'absolute bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded bg-blue-600',
          classes?.underline,
          isActive ? classNames('bg-white', classes?.active?.underline) : 'bg-blue-600',
          !isToday ? classNames('hidden', classes?.today?.underline) : null,
        )}
      ></div>
    </Button>
  )
}

export { Day }
