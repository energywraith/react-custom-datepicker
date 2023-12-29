import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Custom as CalendarCustomStory } from '../elements/Calendar/Calendar.stories'

import { DatePicker, IDatePickerProps } from '../../components/DatePicker'
import dayjs from 'dayjs'

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
    value: { control: 'string' },
    onChange: { control: 'string' },
    isoWeek: { control: 'boolean' },
    classes: { control: 'object' },
  },
} satisfies Meta<typeof DatePicker>

export default meta
export type Story = StoryObj<typeof meta>

const UncontrolledDatePicker = (props: IDatePickerProps) => {
  return <DatePicker {...props} />
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: UncontrolledDatePicker,
}

export const Uncontrolled: Story = {
  ...Default,
}

const ControlledDatePicker = (props: IDatePickerProps) => {
  const [date, setDate] = useState<string | null>(dayjs().toISOString())

  return <DatePicker {...props} value={date} onChange={setDate} />
}

export const Controlled: Story = {
  render: ControlledDatePicker,
  args: {
    value: dayjs().toISOString(),
  },
}

export const IsoWeek: Story = {
  ...Default,
  args: {
    isoWeek: true,
  },
}

export const Custom: Story = {
  ...Default,
  args: {
    isoWeek: true,
    classes: {
      input: {
        root: 'bg-blue-100 text-blue-900 hover:!bg-blue-200',
      },
      calendar: CalendarCustomStory.args?.classes,
    },
  },
}
