import React, { HTMLProps } from 'react'
import { classNames } from '~/lib/classNames'

export interface ICardProps extends HTMLProps<HTMLDivElement> {
  classes?: {
    root?: string
  }
}

const Card = ({ classes, children }: ICardProps) => {
  return (
    <div
      className={classNames('shadow-sm border bg-white border-neutral-200 flex flex-col p-6 rounded-lg', classes?.root)}
    >
      {children}
    </div>
  )
}

export { Card }
