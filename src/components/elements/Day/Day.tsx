import React, { HTMLProps } from 'react'
import { classNames } from '../../../lib/classNames'

interface DayClasses {
  root?: string
  underline?: string
}

interface DayProps extends HTMLProps<HTMLButtonElement> {
  day: number
  isActive?: boolean
  isToday?: boolean
  isInRange?: boolean
  classes?: DayClasses
  activeClasses?: DayClasses
  todayClasses?: DayClasses
  inRangeClasses?: DayClasses
}

const Day = ({
  day,
  classes,
  activeClasses,
  todayClasses,
  isActive,
  isToday,
  isInRange,
  disabled,
  onClick,
}: DayProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      className={classNames(
        'text-sm text-gray-700 w-9 h-9 rounded-md disabled:text-gray-400',
        classes?.root,
        isActive
          ? classNames('bg-blue-600 text-white disabled:bg-neutral-200 disabled:text-gray-400', activeClasses?.root)
          : 'hover:text-blue-600',
        isToday ? classNames('relative', todayClasses?.root) : null,
        isInRange ? 'bg-blue-100' : null,
      )}
      onClick={onClick}
    >
      {day}
      <div
        className={classNames(
          'absolute bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded bg-blue-600',
          classes?.underline,
          isActive ? classNames('bg-white', activeClasses?.underline) : 'bg-blue-600',
          !isToday ? classNames('hidden', todayClasses?.underline) : null,
        )}
      ></div>
    </button>
  )
}

export { Day }
