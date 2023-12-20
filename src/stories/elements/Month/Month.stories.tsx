import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { IMonthProps, Month } from '../../../components/elements/Month'

const MonthWrapper = (props: IMonthProps) => {
  return (
    <div className='w-[300px]'>
      <Month {...props} />
    </div>
  )
}

const meta = {
  title: 'elements/Month',
  component: MonthWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    month: { control: { type: 'number', min: 0, max: 11 } },
    year: { control: { type: 'number', min: 0 } },
    customNames: { control: 'object' },
  },
} satisfies Meta<typeof Month>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    month: 0,
    year: 2023,
  },
}

export const customNames: Story = {
  args: {
    ...Default.args,
    customNames: {
      January: 'Styczeń',
      February: 'Luty',
      March: 'Marzec',
      April: 'Lipiec',
      May: 'Maj',
      June: 'Czerwiec',
      July: 'Lipiec',
      August: 'Sierpień',
      September: 'Wrzesień',
      October: 'Październik',
      November: 'Listopad',
      December: 'Grudzień',
    },
  },
}

export const custom: Story = {
  args: {
    ...customNames.args,
    classes: {
      root: '!bg-blue-600 !text-white',
    },
  },
}
