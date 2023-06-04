import styled from '@emotion/styled'
import React from 'react'
import { Transition } from 'react-transition-group'

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
  // backgroundColor: '#000000',
  // opacity: 0.3,
}))

export const Background: React.FC = () => {
  return (
    <Transition appear in timeout={1000} unmountOnExit>
      <TopContainer data-aos="fade-up" data-aos-duration="500">
        <VideoContainer autoPlay muted loop playsInline>
          <source src="main_video.mp4" type="video/mp4" />
        </VideoContainer>
        <BackgroundContainer></BackgroundContainer>
      </TopContainer>
    </Transition>
  )
}
