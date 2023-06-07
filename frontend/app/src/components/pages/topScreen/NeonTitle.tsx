import { Typography, styled, keyframes } from '@mui/material'
import React from 'react'

const flicker = keyframes({
  '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
    textShadow:
      '-0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff, 0 0 2rem #d7532f, 0 0 4rem #d7532f, 0 0 6rem #d7532f, 0 0 8rem #d7532f, 0 0 10rem #d7532f',
    boxShadow:
      '0 0 .5rem #fff, inset 0 0 .5rem #fff, 0 0 2rem #283b72, inset 0 0 2rem #283b72, 0 0 4rem #283b72, inset 0 0 4rem #283b72',
  },
  '20%, 24%, 55%': {
    textShadow: 'none',
    boxShadow: 'none',
  },
})

const NeonContainer = styled('div')({
  fontFamily: "'Exo 2'",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

const NeonTypography = styled(Typography)({
  fontSize: '5rem',
  fontWeight: 200,
  fontStyle: 'italic',
  color: '#fff',
  padding: '4rem 6rem 5.5rem',
  border: '0.4rem solid #283b72',
  borderRadius: '2rem',

  animation: `${flicker} 1.5s infinite alternate`,
  '&::-moz-selection': {
    backgroundColor: '#d7532f',
    color: '#d7532f',
  },
  '&::selection': {
    backgroundColor: '#d7532f',
    color: '#d7532f',
  },
  '&:focus': {
    outline: 'none',
  },
})

export const NeonTitle: React.FC = () => {
  return (
    <NeonContainer>
      <NeonTypography variant="h1" spellCheck={false}>
        <div className="custom-font-for-neon-title">PuTone</div>
      </NeonTypography>
    </NeonContainer>
  )
}
