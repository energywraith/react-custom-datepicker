import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../../../components/elements/Card'

const meta = {
  title: 'elements/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'string' },
    classes: { control: 'object' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Children',
  },
}

export const Custom: Story = {
  args: {
    ...Default.args,
    classes: {
      root: '!bg-blue-600 text-white',
    },
  },
}
