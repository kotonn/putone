import React from 'react'
import { useDencrypt } from 'use-dencrypt-effect'

type Props = {
  text: string
}

export const TextDencrypt = ({ text }: Props) => {
  const [result, setResult] = useDencrypt()

  React.useEffect(() => {
    let i = 0

    const loop = async () => {
      await setResult(text)
      i = i === text.length - 1 ? 0 : i + 1
    }

    loop()
  }, [setResult])

  return <div>{result}</div>
}
