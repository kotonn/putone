import React from 'react'
<<<<<<< HEAD
import { Button, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { TextDencrypt } from './TextDencrypt'
import { Background } from './Background'
import '../../../styles/index.css'
import { Navbar } from './Navbar'

const TopContainer = styled('div')(() => ({
=======
import { Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { TextDencrypt } from './TextDencrypt'
import { Background } from './Background'

const TopScreenContainer = styled('div')(() => ({
>>>>>>> 375a2f060ee84edfe0828c7821378d392cd22080
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'center',
}))

const MainContainer = styled(Container)({
  maxWidth: '100vw',
  marginTop: 'auto',
  marginBottom: 'auto',
<<<<<<< HEAD
  alignItems: 'center',
})

const MainTypography = styled(Typography)(() => ({
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    fontSize: '3rem',
    marginLeft: '1rem',
=======
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
>>>>>>> 375a2f060ee84edfe0828c7821378d392cd22080
  },
  '@media (min-width: 768px)': {
    fontSize: '5rem',
  },
}))

const SubTypography = styled(Typography)(() => ({
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
<<<<<<< HEAD
    fontSize: '1.2rem',
    marginLeft: '1rem',
=======
    fontSize: '1rem',
>>>>>>> 375a2f060ee84edfe0828c7821378d392cd22080
  },
  '@media (min-width: 768px)': {
    fontSize: '3rem',
  },
}))

<<<<<<< HEAD
const ButtonContainer = styled('div')(() => ({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '@media (max-width: 768px)': {
    bottom: '5rem',
  },
  '@media (min-width: 768px)': {
    bottom: '8rem',
  },
}))

const RegisterButton = styled(Button)(() => ({
  color: '#f9f4ef',
  border: '1px solid',
  ':hover': {
    color: '#283b72',
    backgroundColor: '#ffb800',
    border: '2px solid',
  },
  '@media (max-width: 768px)': {
    fontSize: '1rem',
    borderRadius: '0.8rem',
    padding: '0.5rem 1.5rem',
  },
  '@media (min-width: 768px)': {
    fontSize: '2rem',
    borderRadius: '1rem',
    padding: '1rem 3rem',
  },
}))

export const TopScreen: React.FC = () => {
  return (
    <>
      <TopContainer>
        <Background />
        <MainContainer>
          <MainTypography>
            <div
              className="custom-font-for-main"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <TextDencrypt text="PuTone" />
            </div>
          </MainTypography>
          <SubTypography>
            <div
              className="custom-font-for-sub"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <TextDencrypt text="Express yourself through music!" />
            </div>
          </SubTypography>
        </MainContainer>
        <ButtonContainer>
          <RegisterButton
            href="/signup"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="custom-font-for-sub">Get Started</div>
          </RegisterButton>
        </ButtonContainer>
      </TopContainer>
      <Navbar />
    </>
=======
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
>>>>>>> 375a2f060ee84edfe0828c7821378d392cd22080
  )
}
