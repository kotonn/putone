import { useEffect, useRef, useState } from 'react'

export const useScrollPosition = () => {
  const isProcessing = useRef(false)
  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    const handler = () => {
      if (isProcessing.current) return
      isProcessing.current = true
      // Window.requestAnimationFrame()でpositionYステートの更新を間引く
      window.requestAnimationFrame(() => {
        isProcessing.current = false
        setPositionY(window.scrollY)
      })
    }
    // スクロールイベントの登録
    document.addEventListener('scroll', handler, { passive: true })
    return () => {
      // スクロールイベントの解除
      document.removeEventListener('scroll', handler)
    }
  }, [])

  // スクロール量を返却する
  return positionY
}
