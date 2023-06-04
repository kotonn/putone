import React from 'react'
import { useState } from 'react'
import { Typography, styled } from '@mui/material'

const LogoImg = styled('p')(() => ({
  '@media (min-width: 768px)': {
    position: 'fixed',
    top: '4%',
    left: '4%',
    fontSize: '2rem',
    color: '#f9f4ef',
  },
}))

const NavContainer = styled('nav')(() => ({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    top: '3%',
    right: '5%',
    '& a': {
      textDecoration: 'none',
      color: '#f9f4ef',
      padding: '0.5rem',
      '&.active': {
        borderBottom: '1px solid',
      },
    },
  },
  '@media (min-width: 768px)': {
    top: '3%',
    right: '3%',
    '& a': {
      textDecoration: 'none',
      color: '#f9f4ef',
      padding: '1.5rem',
      '&:hover': {
        color: '#ffb800',
      },
      '&.active': {
        color: '#ffb800',
        borderBottom: '1px solid',
      },
    },
  },
}))

const NavTypography = styled(Typography)(() => ({
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
  '@media (min-width: 768px)': {
    fontSize: '1.5rem',
  },
}))

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <>
      <LogoImg
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div className="custom-font-for-sub">PuTone</div>
      </LogoImg>
      <NavContainer
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <a
          href="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <NavTypography>
            <div className="custom-font-for-nav">Home</div>
          </NavTypography>
        </a>
        <a
          href="#use"
          onClick={() => setActiveNav('#use')}
          className={activeNav === '#use' ? 'active' : ''}
        >
          <NavTypography>
            <div className="custom-font-for-nav">Usage</div>
          </NavTypography>
        </a>
        <a
          href="#subscribe"
          onClick={() => setActiveNav('#subscribe')}
          className={activeNav === '#subscribe' ? 'active' : ''}
        >
          <NavTypography>
            <div className="custom-font-for-nav">Subscription</div>
          </NavTypography>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <NavTypography>
            <div className="custom-font-for-nav">Contact</div>
          </NavTypography>
        </a>
      </NavContainer>
    </>
  )
}
