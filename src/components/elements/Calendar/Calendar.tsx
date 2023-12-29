import React, { HTMLProps, useState } from 'react'
import { CalendarGrid } from './CalendarGrid'
import { IWeekDayClasses, WeekDays } from '../WeekDays'
import { getCalendar } from '~/lib/date'
import dayjs, { Dayjs } from 'dayjs'
import { CalendarDay } from './CalendarDay'
import { CalendarHeader } from './CalendarHeader'
import { IDayClasses } from '../Day'
import { IMonthClasses } from '../Month'
import { classNames } from '~/lib/classNames'

export interface ICalendarClasses {
  root?: string
  month?: IMonthClasses
  weekDay?: IWeekDayClasses
  day?: IDayClasses
}

interface ICalendarProps extends HTMLProps<HTMLDivElement> {
  isoWeek?: boolean
  date?: Dayjs
  onSelectDate: (date: Dayjs) => void
  classes?: ICalendarClasses
}

const Calendar = ({ date = dayjs(), onSelectDate, classes, isoWeek }: ICalendarProps) => {
  const [calendarMonth, setCalendarMonth] = useState(date)

  const days = getCalendar(calendarMonth, isoWeek)

  return (
    <div className={classNames('grid grid-cols-[auto_1fr_auto] gap-x-3', classes?.root)}>
      <CalendarHeader month={calendarMonth} setMonth={setCalendarMonth} classes={classes} />
      <CalendarGrid className='col-start-2 mt-4'>
        <WeekDays isoWeek={isoWeek} classes={classes?.weekDay} />
        {days.map((day) => {
          return (
            <CalendarDay
              key={day.toISOString()}
              day={day}
              selectedDate={date}
              calendarMonth={calendarMonth}
              onClick={onSelectDate}
              classes={classes?.day}
            />
          )
        })}
      </CalendarGrid>
    </div>
  )
}

export { Calendar }
