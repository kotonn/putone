import React, { useEffect, useState } from 'react'
import { TextDencrypt } from './TextDencrypt'
import { Container, styled } from '@mui/material'
import { useScrollPosition } from '../../../hooks/useScrollPosition'

const TopContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: '100vh',
}))

const SectionContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
}))

const TitleTypography = styled('h3')(() => ({
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
  '@media (min-width: 768px)': {
    fontSize: '2rem',
  },
}))

const DescriptionTypography = styled('p')(() => ({
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
  '@media (min-width: 768px)': {
    fontSize: '1.5rem',
  },
}))

const SectionImg = styled('img')(() => ({
  width: '30%',
}))

const TextContainer = styled('div')(() => ({
  border: 'solid 1px #f9f4ef',
  borderRadius: '2rem',
  padding: '5rem',
}))

export const Usage: React.FC = () => {
  return (
    <>
      <TopContainer id="usage">
        <SectionContainer>
          <SectionImg src="splash_screen.PNG" alt="splash_screen" />

          <TextContainer>
            <TitleTypography>
              <TextDencrypt text="1. PuToneを開く" />
            </TitleTypography>
            <DescriptionTypography>
              <TextDencrypt text="PuToneを開く" />
            </DescriptionTypography>
          </TextContainer>
        </SectionContainer>
      </TopContainer>
    </>
  )
}
