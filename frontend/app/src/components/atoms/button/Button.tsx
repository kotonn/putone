import React from 'react'
import { ButtonProps } from './ButtonType'

export const Button: React.FC<ButtonProps> = ({
  textMessage,
  handleclick,
}: ButtonProps) => {
  return (
    <button
      className="bg-transparent text-headline py-2 px-4 border border-primary-headline rounded-lg"
      onClick={handleclick}
    >
      {textMessage}
    </button>
  )
}
