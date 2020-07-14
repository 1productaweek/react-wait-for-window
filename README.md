# React Wait for Window

Waits for a window prop to become available. E.g. if you're loading Stripe async, you will need to wait for it to become available before trying to use any components that rely on it.

```
npm install @1producataweek/react-wait-for-window
```


### useWaitForWindow(prop: string, timer: number): boolean

A hook that will update when the window prop becomes available. Returns true/false depending on whether the prop is set on `window`. The timer is the interval that the prop should be checked.

```tsx
import React from 'react'
import { useWaitForWindow } from '@1producataweek/react-wait-for-window'

function Component () {
  const propIsAvailable = useWaitForWindow('stripe', 1000)

  if (!propIsAvailable) return 'Loading'

  return <ComponentThatDependsOnWindowProp />
}
```


### WaitForWindow

A hook that will update when the window prop becomes available. Returns true/false depending on whether the prop is set on `window`. The timer will set 

```tsx
import React from 'react'
import { WaitForWindow } from '@1producataweek/react-wait-for-window'

function Component () {
  return (
    <WaitForWindow prop='' timer={1000}>
      <ComponentThatDependsOnWindowProp />
    </WaitForWindow>
  )
}
```



### Made by 1PAW

https://1productaweek.com
<pre>
  |
  |- [Ralley](https://ralley.io) - queue as a service
  |- [Snapboard](https://snapboard.io) - hackable dashboard
</pre>