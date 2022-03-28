import React, { useEffect, useState } from 'react'

export const SomeComponent: React.FC = () => {
  const [componentCounter, setComponentCounter] = useState(1)
  const [mouseState, setMouseState] = useState<{ x: number, y: number } | null>(null)

  useEffect(() => {
    const intervalId = setInterval(() => setComponentCounter(prev => ++prev), 10_000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    subscribeListener()

    return unsubscribeListener()
  }, [componentCounter])

  const subscribeListener = () => {
    console.log('start listen', componentCounter)
    window.addEventListener('mousemove', (e) => setMouseState({ x: e.offsetX, y: e.offsetY }))
  }

  const unsubscribeListener = () => {
    console.log('finish listen', componentCounter)
    window.removeEventListener('mousemove', (e) => setMouseState({ x: e.offsetX, y: e.offsetY }))
  }

  return <>
    <h2>move mouse pls</h2>
    <p>Current position: x - {mouseState?.x ?? 'undefined'}, y - {mouseState?.y ?? 'undefined'}</p>
  </>
}
