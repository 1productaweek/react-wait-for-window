
import { useEffect, useState } from 'react'

export default function useWaitForWindow (prop: string, interval = 1000) {
  const [isReady, setIsReady] = useState(!!(window && (window as any)[prop]))

  useEffect(() => {
    if (isReady) return
    const timer = setInterval(() => {
      if (window && (window as any)[prop]) setIsReady(true)
    }, interval)
    return () => { clearInterval(timer) }
  }, [interval, isReady, prop])

  return isReady
}
