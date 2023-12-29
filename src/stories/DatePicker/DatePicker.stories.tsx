import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Custom as CalendarCustomStory } from '../elements/Calendar/Calendar.stories'

import { DatePicker, IDatePickerProps } from '../../components/DatePicker'
import dayjs from 'dayjs'

const DatePickerWithSpacing = (props: IDatePickerProps) => {
  const [date, onSelectDate] = useState<string | null>(dayjs().set('date', 12).toISOString())

  return (
    <div className='pt-8 pb-96'>
      <DatePicker {...props} value={date} onChange={onSelectDate} />
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: DatePickerWithSpacing,
}

export const IsoWeek: Story = {
  args: {
    isoWeek: true,
  },
  render: DatePickerWithSpacing,
}

export const Custom: Story = {
  args: {
    isoWeek: true,
    classes: {
      input: {
        root: 'bg-blue-100 text-blue-900 hover:!bg-blue-200',
      },
      calendar: CalendarCustomStory.args?.classes,
    },
  },
  render: DatePickerWithSpacing,
}
