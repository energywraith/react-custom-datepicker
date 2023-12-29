import React from 'react'

import { ChevronIcon } from '~/components/icons'
import { Button } from '../Button'
import { IMonthClasses, Month } from '../Month'
import { getNextMonth, getPreviousMonth } from '~/lib/date'
import { Dayjs } from 'dayjs'

interface ICalendarHeaderClasses {
  month?: IMonthClasses
}

interface ICalendarHeaderProps {
  month: Dayjs
  setMonth: (setStateCallback: (month: Dayjs) => Dayjs) => void
  classes?: ICalendarHeaderClasses
}

const CalendarHeader = ({ month, setMonth, classes }: ICalendarHeaderProps) => {
  const onPreviousMonth = () => {
    setMonth((month) => getPreviousMonth(month))
  }

  const onNextMonth = () => {
    setMonth((month) => getNextMonth(month))
  }

  return (
    <>
      <Button className='my-1' onClick={onPreviousMonth}>
        <ChevronIcon className='w-4 h-4 rotate-90' />
      </Button>
      <Month month={month.month()} year={month.year()} classes={classes?.month} />
      <Button className='my-1' onClick={onNextMonth}>
        <ChevronIcon className='w-4 h-4 -rotate-90' />
      </Button>
    </>
  )
}

export { CalendarHeader }
