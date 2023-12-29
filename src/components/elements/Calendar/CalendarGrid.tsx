import React, { HTMLProps } from 'react'
import { classNames } from '~/lib/classNames'

interface ICalendarGridProps extends HTMLProps<HTMLDivElement> {}

const CalendarGrid = ({ children, className }: ICalendarGridProps) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-[36px_36px_36px_36px_36px_36px_36px] grid-rows-[36px_36px_36px_36px_36px_36px_36px] gap-1',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { CalendarGrid }
