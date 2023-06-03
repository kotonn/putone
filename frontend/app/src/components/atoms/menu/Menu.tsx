import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineMenu } from 'react-icons/ai'
import { MenuProps } from './MenuType'

export const Menu: React.FC<MenuProps> = ({ openMenu, handleMenuOpen }) => {
  return (
    <div className="relative flex justify-end items-center">
      <AiOutlineMenu
        className={`text-3xl text-white transition-opacity duration-500 ease-in-out absolute top-0 mt-7 mr-7 ${
          openMenu ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleMenuOpen}
      />
      <IoCloseOutline
        className={`text-3xl text-white transition-opacity duration-500 ease-in-out absolute top-0 mt-7 mr-7 ${
          openMenu ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleMenuOpen}
      />
    </div>
  )
}
