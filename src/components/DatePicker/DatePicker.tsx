import React, { useContext } from 'react'
import { Popover } from '../elements/Popover'
import { CalendarIcon } from '~/components/icons'
import { Calendar, ICalendarClasses } from '../elements/Calendar'
import dayjs, { Dayjs } from 'dayjs'
import { PopoverContext } from '../elements/Popover/PopoverContext'

interface IDatePickerClasses {
  input?: {
    root: string
  }
  calendar?: ICalendarClasses
}

export interface IDatePickerProps {
  value?: string | null
  onChange?: (dateISOString: string) => void
  classes?: IDatePickerClasses
  isoWeek?: boolean
}

const DatePicker = ({ value = dayjs().toISOString(), onChange, classes, isoWeek }: IDatePickerProps) => {
  const popoverContext = useContext(PopoverContext)

  const isDateValid = dayjs(value).isValid()

  const onSelectDate = (date: Dayjs) => {
    if (onChange) {
      onChange(date.toISOString())
    }

    popoverContext?.close()
  }

  return (
    <>
      <Popover.Button className={classes?.input?.root}>
        <CalendarIcon className='w-5 h-5' />
        <span>{isDateValid ? dayjs(value).format('D MMM YYYY') : 'No date selected'}</span>
      </Popover.Button>
      <Popover.Panel>
        <Calendar
          date={isDateValid ? dayjs(value) : undefined}
          onSelectDate={onSelectDate}
          classes={classes?.calendar}
          isoWeek={isoWeek}
        />
      </Popover.Panel>
    </>
  )
}

const DatePickerInPopoverContext = (props: IDatePickerProps) => (
  <Popover>
    <DatePicker {...props} />
  </Popover>
)

export { DatePickerInPopoverContext as DatePicker }
