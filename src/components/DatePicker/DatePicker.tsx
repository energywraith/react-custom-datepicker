import React, { useContext, useState } from 'react'
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
  defaultValue?: string
  onChange?: (dateISOString: string) => void
  classes?: IDatePickerClasses
  isoWeek?: boolean
}

const DatePickerWithoutContext = ({
  value: valueFromProps,
  onChange: onChangeFromProps,
  defaultValue,
  classes,
  isoWeek,
}: IDatePickerProps) => {
  const popoverContext = useContext(PopoverContext)

  const isControlled = typeof valueFromProps != 'undefined'
  const hasDefaultValue = typeof defaultValue != 'undefined'

  const [internalValue, setInternalValue] = useState(hasDefaultValue ? defaultValue : '')
  const value = isControlled ? valueFromProps : internalValue

  const isDateValid = dayjs(value).isValid()

  const onSelectDate = (date: Dayjs) => {
    const dateISOString = date.toISOString()

    if (onChangeFromProps) {
      onChangeFromProps(dateISOString)
    }

    if (!isControlled) {
      setInternalValue(dateISOString)
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

const DatePicker = (props: IDatePickerProps) => (
  <Popover>
    <DatePickerWithoutContext {...props} />
  </Popover>
)

export { DatePicker }
