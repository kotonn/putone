import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export const HeaderNext: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null)
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false)

  const handleMenuClick = () => {
    setMenuActive(!menuActive)
  }

  const handleMenuItemClick = (index: number) => {
    setActiveMenuItem(index)
    setMenuActive(false)
  }

  const handlePlaySongClick = () => {
    setActiveMenuItem(null)
  }

  const handleLogoClick = () => {
    setActiveMenuItem(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      setStickyNavbar(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav className={`navbar ${stickyNavbar ? 'sticky' : ''}`}>
        <div className="content">
          <div className="logo">
            <a href="#" onClick={handleLogoClick}>
              PuTone
            </a>
          </div>
          <ul className={`menu-list ${menuActive ? 'active' : ''}`}>
            <div className="icon cancel-btn" onClick={handleMenuClick}>
              <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
            </div>
            <li className={activeMenuItem === 0 ? 'active-menu-list' : ''}>
              <a href="#play" onClick={() => handleMenuItemClick(0)}>
                HOME
              </a>
            </li>
            <li className={activeMenuItem === 1 ? 'active-menu-list' : ''}>
              <a href="#songs" onClick={() => handleMenuItemClick(1)}>
                SUBMIT
              </a>
            </li>
            <li className={activeMenuItem === 2 ? 'active-menu-list' : ''}>
              <a href="#about" onClick={() => handleMenuItemClick(2)}>
                USAGE
              </a>
            </li>
            <li className={activeMenuItem === 3 ? 'active-menu-list' : ''}>
              <a href="#contact" onClick={() => handleMenuItemClick(3)}>
                CONTACT
              </a>
            </li>
          </ul>
          <div className="icon menu-btn" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
          </div>
        </div>
      </nav>
      <div className="banner"></div>
    </>
  )
}
