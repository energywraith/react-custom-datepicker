import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from '~/components/elements/Calendar/Calendar'

const meta = {
  title: 'elements/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isoWeek: { control: 'boolean' },
    date: { control: 'date' },
    classes: { control: 'object' },
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const IsoWeek: Story = {
  args: {
    isoWeek: true,
  },
}

export const Custom: Story = {
  args: {
    ...Default.args,
    isoWeek: true,
    classes: {
      month: { root: '!bg-blue-900 text-white' },
      day: { root: 'text-blue-900', active: { root: '!text-white !bg-blue-900' } },
    },
  },
}
