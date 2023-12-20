import React from 'react'
import { TWeekDays, getWeekDays } from '~/lib/date'
import { Day, IDayClasses } from '../Day'

export interface IWeekDaysProps {
  customNames?: TWeekDays
  isoWeek?: boolean
  classes?: IDayClasses
}

const WeekDays = ({ customNames, isoWeek, classes }: IWeekDaysProps) => {
  const weekDays = getWeekDays({ weekDaysMap: customNames, isoWeek })

  return weekDays.map((day) => (
    <Day key={day} disabled classes={classes}>
      {day}
    </Day>
  ))
}

export { WeekDays }
