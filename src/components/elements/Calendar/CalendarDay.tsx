import React from 'react'
import { isSameDay, isSameMonth } from '~/lib/date'
import { Day, IDayClasses } from '../Day'
import { Dayjs } from 'dayjs'

interface ICalendarDayProps {
  day: Dayjs
  selectedDate: Dayjs
  calendarMonth: Dayjs
  onClick: (day: Dayjs) => void
  classes?: IDayClasses
}

const CalendarDay = ({ day, selectedDate, calendarMonth, onClick, classes }: ICalendarDayProps) => {
  const isDateSameMonthAsSelected = isSameMonth(day, selectedDate)
  const isDateSameDayAsSelected = isSameDay(day, selectedDate)

  const isDateSameMonthAsCalendar = isSameMonth(day, calendarMonth)

  const handleClick = () => {
    onClick(day)
  }

  return (
    <Day
      disabled={!isDateSameMonthAsCalendar}
      isActive={isDateSameMonthAsSelected && isDateSameDayAsSelected}
      onClick={handleClick}
      classes={classes}
    >
      {day.format('D')}
    </Day>
  )
}

export { CalendarDay }
