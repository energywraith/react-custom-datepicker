import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from '~/components/elements/Popover'

const meta = {
  title: 'elements/Popover/Button',
  component: Popover.Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'string' },
  },
} satisfies Meta<typeof Popover.Button>

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
  },
}
