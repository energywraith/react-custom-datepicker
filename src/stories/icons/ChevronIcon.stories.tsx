import type { Meta, StoryObj } from '@storybook/react'

import { ChevronIcon } from '~/components/icons'
import { classNames } from '~/lib/classNames'

const meta = {
  title: 'icons/Chevron',
  component: ChevronIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ChevronIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-4 h-4',
  },
}

export const Left: Story = {
  args: {
    ...Default.args,
    className: classNames(Default.args?.className, 'rotate-90'),
  },
}

export const Right: Story = {
  args: {
    ...Default.args,
    className: classNames(Default.args?.className, '-rotate-90'),
  },
}
