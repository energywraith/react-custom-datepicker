import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekday from 'dayjs/plugin/weekday'
import { TWeekDays, TWeekDay } from './types'

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
