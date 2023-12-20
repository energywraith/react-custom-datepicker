import React from 'react'
import { classNames } from '../../../lib/classNames'
import { Button, IButtonProps } from '../Button'

export interface IDayClasses {
  root?: string
  underline?: string
}

interface IDayProps extends IButtonProps {
  isActive?: boolean
  isToday?: boolean
  isInRange?: boolean
  classes?: IDayClasses
  activeClasses?: IDayClasses
  todayClasses?: IDayClasses
  inRangeClasses?: IDayClasses
}

const Day = ({
  children,
  classes,
  activeClasses,
  todayClasses,
  isActive,
  isToday,
  isInRange,
  disabled,
  onClick,
}: IDayProps) => {
  return (
    <Button
      type='button'
      disabled={disabled}
      className={classNames(
        'w-9 h-9 border-none p-0 hover:bg-transparent',
        classes?.root,
        isActive
          ? classNames('bg-blue-600 text-white disabled:bg-neutral-200 disabled:text-gray-400', activeClasses?.root)
          : 'hover:text-blue-600',
        isToday ? classNames('relative', todayClasses?.root) : null,
        isInRange ? 'bg-blue-100' : null,
      )}
      onClick={onClick}
    >
      {children}
      <div
        className={classNames(
          'absolute bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded bg-blue-600',
          classes?.underline,
          isActive ? classNames('bg-white', activeClasses?.underline) : 'bg-blue-600',
          !isToday ? classNames('hidden', todayClasses?.underline) : null,
        )}
      ></div>
    </Button>
  )
}

export { Day }
