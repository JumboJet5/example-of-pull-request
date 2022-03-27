import React, { useEffect, useRef, useState } from "react";

export const SomeComponent: React.FC = () => {
  const [someState, setSomeState] = useState(1)
  const calculatedState = useSomeHook(someState)

  useEffect(() => {
    const intervalId = setInterval(() => setSomeState(prev => ++prev), 10_000)

    return () => clearInterval(intervalId)
  }, [])

  return <>Some component: {calculatedState}</>
}

export const OtherComponent: React.FC = () => {
  const someRef = useRef(1)
  const calculatedState = useSomeHook(someRef.current)

  useEffect(() => {
    const intervalId = setInterval(() => someRef.current++, 10_000)

    return () => clearInterval(intervalId)
  }, [])

  return <>Some component: {calculatedState}</>
}

export const useSomeHook = (argument: number): number => {
  const [calculatedState, setCalculatedState] = useState(argument * 2)

  useEffect(() => setCalculatedState(argument * 2), [argument])

  return calculatedState
}
