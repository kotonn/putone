import { useEffect, useRef, useState } from 'react'
import { useScrollPosition } from './useScrollPosition'

const ScrollDirection = {
  Up: 'up',
  Down: 'down',
} as const
export type ScrollDirectionType =
  (typeof ScrollDirection)[keyof typeof ScrollDirection]

export const useScrollDirection = () => {
  const positionY = useScrollPosition()
  const previousPositionY = useRef(positionY)
  const [direction, setDirection] = useState<ScrollDirectionType | null>(null)

  useEffect(() => {
    if (positionY < previousPositionY.current) {
      setDirection(ScrollDirection.Up)
    } else if (positionY > previousPositionY.current) {
      setDirection(ScrollDirection.Down)
    } else {
      setDirection(null)
    }

    previousPositionY.current = positionY
  }, [positionY])

  return direction
}
