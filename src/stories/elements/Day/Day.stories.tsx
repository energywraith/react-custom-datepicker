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
    children: { control: 'number' },
    disabled: { control: 'boolean' },
    isActive: { control: 'boolean' },
    isToday: { control: 'boolean' },
    isInRange: { control: 'boolean' },
    classes: { control: 'object' },
    activeClasses: { control: 'object' },
    todayClasses: { control: 'object' },
    inRangeClasses: { control: 'object' },
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
    children: 13,
    isActive: true,
  },
}

export const Today: Story = {
  args: {
    children: 13,
    isToday: true,
  },
}

export const InRange: Story = {
  args: {
    children: 13,
    isInRange: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 13,
    disabled: true,
  },
}

export const Custom: Story = {
  args: {
    children: 13,
    isActive: true,
    isToday: true,
    activeClasses: { root: 'bg-red-600 !text-white', underline: 'bg-white' },
  },
}
