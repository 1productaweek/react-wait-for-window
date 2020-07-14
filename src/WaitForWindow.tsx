import React from 'react'
import useWaitForWindow from './useWaitForWindow'

export interface WaitForWindowProps {
  children: React.ReactNode
  prop: string
  loader?: React.ReactNode
}

function WaitForWindow ({ children, loader, prop }: WaitForWindowProps) {
  const isReady = useWaitForWindow(prop)

  if (!isReady) return (<>{loader || 'Loading'}</>)

  return (<>{children}</>)
}

export default WaitForWindow
