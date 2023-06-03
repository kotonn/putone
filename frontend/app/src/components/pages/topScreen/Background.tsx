import React from 'react'
import { Transition } from 'react-transition-group'

export const Background: React.FC = () => {
  return (
    <Transition appear in timeout={1000} unmountOnExit>
      <div className="absolute inset-0 -z-10">
        <img
          src="men-723557_1920.jpg"
          alt="background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 -z-5"></div>
      </div>
    </Transition>
  )
}
