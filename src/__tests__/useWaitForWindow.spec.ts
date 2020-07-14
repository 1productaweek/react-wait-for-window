import { renderHook, act } from '@testing-library/react-hooks'
import useWaitForWindow from '../useWaitForWindow'

jest.useFakeTimers()

describe('useWaitForWindow.spec', () => {
  test('should return false when prop does not exist', () => {
    const { result } = renderHook(() => useWaitForWindow('prop'))
    expect(result.current).toBe(false)
  })

  test('should update to true when prop becomes active', () => {
    const { result } = renderHook(() => useWaitForWindow('prop'))
    expect(result.current).toBe(false)

    act(() => {
      (window as any).prop = 'helloworld'
      jest.advanceTimersByTime(1000)
    })

    expect(result.current).toBe(true)
  })
})
