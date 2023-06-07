import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import { useScrollPosition } from '../../../hooks/useScrollPosition'

const TopContainer = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -10,
}))

const VideoContainer = styled('video')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}))

const BackgroundContainer = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: '#000000',
  // opacity: 0.7,
}))

export const Background: React.FC = () => {
  const scrollY = useScrollPosition()
  const [backgroundColor, setBackgroundColor] = useState('')
  console.log(scrollY)

  useEffect(() => {
    if (scrollY > 1000) {
      setBackgroundColor('#000000')
    } else {
      const rgbValue = Math.floor((scrollY / 255) * 255)
      setBackgroundColor(
        `rgba(${255 - rgbValue}, ${255 - rgbValue}, ${255 - rgbValue}, ${
          scrollY / 1000
        })`
      )
    }
  }, [scrollY])
  return (
    <>
      <Transition appear in timeout={1000} unmountOnExit>
        <TopContainer data-aos="fade-up" data-aos-duration="500">
          <VideoContainer autoPlay muted loop playsInline>
            <source src="top_screen_video.mp4" type="video/mp4" />
          </VideoContainer>
          <BackgroundContainer style={{ backgroundColor: backgroundColor }} />
        </TopContainer>
      </Transition>
    </>
  )
}
