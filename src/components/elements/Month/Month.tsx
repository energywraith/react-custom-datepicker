import React, { HTMLProps } from 'react'
import { classNames } from '~/lib/classNames'
import { TMonths, getMonthName } from '~/lib/date'

export interface IMonthClasses {
  root?: string
}

export interface IMonthProps extends HTMLProps<HTMLDivElement> {
  month: number
  year: number
  customNames?: TMonths
  classes?: IMonthClasses
}

const Month = ({ month, year, customNames, classes }: IMonthProps) => {
  const monthName = getMonthName({
    month,
    monthsMap: customNames,
  })

  return (
    <div
      className={classNames(
        'bg-neutral-200 rounded-lg py-2.5 px-2.5 flex-grow text-center text-sm font-semibold flex items-center justify-center',
        classes?.root,
      )}
    >
      {monthName} {year}
    </div>
  )
}

export { Month }
