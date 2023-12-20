import React from 'react'
import { IconProps } from './types'

const ChevronIcon = (props: IconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' {...props} className={props.className}>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.8'
      d='M3.5 6l4.193 3.887a.414.414 0 00.138.083.488.488 0 00.337 0c.053-.02.1-.048.138-.083L12.5 6'
    ></path>
  </svg>
)

export { ChevronIcon }
