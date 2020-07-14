import React from 'react'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WaitForWindow from '../WaitForWindow'

jest.useFakeTimers()

test('renders loader when loading', () => {
  const { getByText } = render(<WaitForWindow prop='prop'>Hello</WaitForWindow>)
  const loading = getByText(/Loading/i)
  expect(loading).toBeInTheDocument()
})

test('renders loading', () => {
  const { getByText } = render(<WaitForWindow prop='prop'>Hello</WaitForWindow>)

  act(() => {
    (window as any).prop = 'any'
    jest.advanceTimersByTime(1000)
  })

  const loading = getByText(/Hello/i)
  expect(loading).toBeInTheDocument()
})
