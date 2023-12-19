import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { DatePicker } from '../components/DatePicker'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<DatePicker />)
  })
})
