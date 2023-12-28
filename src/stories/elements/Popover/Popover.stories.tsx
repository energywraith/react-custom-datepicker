import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from '~/components/elements/Popover'

const PopoverWithContents = () => {
  return (
    <div className='py-24'>
      <Popover>
        <Popover.Button>Button content</Popover.Button>
        <Popover.Panel>Panel content</Popover.Panel>
      </Popover>
    </div>
  )
}

const meta = {
  title: 'elements/Popover',
  component: PopoverWithContents,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'string' },
  },
} satisfies Meta<typeof PopoverWithContents>

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
