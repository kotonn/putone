import React from 'react'
import { Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { TextDencrypt } from './TextDencrypt'
import { Background } from './Background'

const TopScreenContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'center',
}))

const MainContainer = styled(Container)({
  maxWidth: '100vw',
  marginTop: 'auto',
  marginBottom: 'auto',
})

const HeadingContainer = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(50),
  '@media (max-width: 768px)': {
    marginLeft: theme.spacing(10),
  },
}))

const MainTypography = styled(Typography)(() => ({
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
  },
  '@media (min-width: 768px)': {
    fontSize: '5rem',
  },
}))

const SubTypography = styled(Typography)(() => ({
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
  '@media (min-width: 768px)': {
    fontSize: '3rem',
  },
}))

export const TopScreen: React.FC = () => {
  return (
    <TopScreenContainer>
      <Background />
      <MainContainer>
        <HeadingContainer>
          <MainTypography>
            <TextDencrypt text="PuTone" />
          </MainTypography>
          <SubTypography>
            <TextDencrypt text="Express yourself through music" />
          </SubTypography>
        </HeadingContainer>
      </MainContainer>
    </TopScreenContainer>
  )
}
