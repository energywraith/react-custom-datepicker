import type { Meta, StoryObj } from '@storybook/react'

import { Day } from '../../../components/elements/Day'

const meta = {
  title: 'elements/Day',
  component: Day,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'number', min: 1, max: 31 } },
    disabled: { control: 'boolean' },
    isActive: { control: 'boolean' },
    isToday: { control: 'boolean' },
    isInRange: { control: 'boolean' },
    classes: { control: 'object' },
  },
} satisfies Meta<typeof Day>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 13,
  },
}

export const Active: Story = {
  args: {
    ...Default.args,
    isActive: true,
  },
}

export const Today: Story = {
  args: {
    ...Default.args,
    isToday: true,
  },
}

export const InRange: Story = {
  args: {
    ...Default.args,
    isInRange: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Custom: Story = {
  args: {
    ...Default.args,
    isActive: true,
    isToday: true,
    classes: {
      active: { root: 'bg-red-600 !text-white', underline: 'bg-white' },
    },
  },
}
