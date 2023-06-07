import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import { Navbar } from './Navbar'
import styled from '@emotion/styled'

const NavSpeedDial = styled(SpeedDial)(() => ({
  position: 'fixed',
  bottom: '5%',
  right: '5%',
  '@media (max-width: 768px)': {
    display: 'block',
  },
}))

export const SpeedDials = () => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <NavSpeedDial
        ariaLabel="SpeedDial"
        hidden={false}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        <SpeedDialAction icon="home" onClick={handleClose} />
      </NavSpeedDial>
    </>
  )
}
