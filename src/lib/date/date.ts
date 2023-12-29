import dayjs, { Dayjs } from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekday from 'dayjs/plugin/weekday'
import { TWeekDays, TWeekDay, TMonths, TMonth } from './types'

dayjs.extend(isoWeek)
dayjs.extend(weekday)

export const getWeekDay = ({ day, isoWeek }: { day: number; isoWeek?: boolean }) => {
  if (isoWeek) {
    return dayjs().isoWeekday(day + 1)
  }

  return dayjs().weekday(day)
}

export const getWeekDays = ({ weekDaysMap, isoWeek }: { weekDaysMap?: TWeekDays; isoWeek?: boolean }) => {
  return Array.from(Array(7).keys()).map((key) => {
    const day = getWeekDay({ day: key, isoWeek })
    const mappedDay = weekDaysMap?.[day.format('dddd') as TWeekDay]

    return mappedDay || day.format('ddd')
  })
}

export const getMonthName = ({ month, monthsMap }: { month: number; monthsMap?: TMonths }) => {
  const monthName = dayjs().month(month).format('MMMM')

  return monthsMap?.[monthName as TMonth] || monthName
}

export const getCalendar = (date = dayjs(), isoWeek = false) => {
  const calendar = []

  const firstDayOfStartDate = date.clone().set('date', 1)

  const startDate = firstDayOfStartDate.clone().startOf(isoWeek ? 'isoWeek' : 'week')
  const endDate = firstDayOfStartDate.clone().endOf('month')

  const day = startDate.clone()

  let dayIndex = 0
  while (day.add(dayIndex, 'day').clone().isBefore(endDate, 'day') || calendar.length < 6 * 7) {
    calendar.push(day.add(dayIndex, 'day').clone())
    dayIndex++
  }

  return calendar
}

export const getPreviousMonth = (date: Dayjs) => {
  return dayjs(date).subtract(1, 'month')
}

export const getNextMonth = (date: Dayjs) => {
  return dayjs(date).add(1, 'month')
}

export const isSameMonth = (date: Dayjs, basedate = dayjs()) => {
  return dayjs(basedate).isSame(date, 'month')
}

export const isSameDay = (date: Dayjs, basedate = dayjs()) => {
  return dayjs(basedate).isSame(date, 'day')
}
