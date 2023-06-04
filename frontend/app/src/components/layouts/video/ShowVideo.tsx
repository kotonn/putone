import React from 'react'

export const ShowVideo: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden z-[-1]">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="./top_screen_video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}
