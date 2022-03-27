import React, { useEffect, useMemo, useState } from 'react'

export const SomeComponent: React.FC = () => {
  const [componentCounter, setComponentCounter] = useState(1)
  const [, setOtherStates] = useState({})

  console.log('componentCounter', componentCounter)
  const resultOfSomeHook = useSomeHook(componentCounter)

  useEffect(() => {
    const intervalId = setInterval(() => setComponentCounter(prev => ++prev), 10_000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => setOtherStates({}), 2_000)

    return () => clearInterval(intervalId)
  }, [])

  console.log('============================')
  return <>{resultOfSomeHook}</>
}

export const useSomeHook = (counter: number) => {
  const result = useMemo(() => makeSomeCalculations(counter), [counter])
  console.log('hookCalculations', result)
  return result
}

const makeSomeCalculations = (counter: number) => {
  console.log('inside calculation')
  return counter * 2
}
