import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { IWeekDaysProps, WeekDays } from '../../../components/elements/WeekDays'

const WeekDaysWithSpacing = (props: IWeekDaysProps) => {
  return (
    <div className='flex gap-x-1'>
      <WeekDays {...props} />
    </div>
  )
}

const meta = {
  title: 'elements/WeekDays',
  component: WeekDaysWithSpacing,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isoWeek: { control: 'boolean' },
    customNames: { control: 'object' },
    classes: { control: 'object' },
  },
} satisfies Meta<typeof WeekDays>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const isoWeek: Story = {
  args: {
    isoWeek: true,
  },
}

export const customNames: Story = {
  args: {
    customNames: {
      Monday: 'Pon.',
      Tuesday: 'Wt.',
      Wednesday: 'Śr.',
      Thursday: 'Czw.',
      Friday: 'Pt.',
      Saturday: 'Sob.',
      Sunday: 'Niedz.',
    },
  },
}

export const custom: Story = {
  args: {
    isoWeek: true,
    classes: {
      root: 'bg-blue-600 !text-white',
    },
    customNames: {
      Monday: 'Pon.',
      Tuesday: 'Wt.',
      Wednesday: 'Śr.',
      Thursday: 'Czw.',
      Friday: 'Pt.',
      Saturday: 'Sob.',
      Sunday: 'Niedz.',
    },
  },
}
