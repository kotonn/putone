import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdCancel } from 'react-icons/md'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [hamburger, setHamburger] = useState(false)
  return (
    <div className="flex items-center justify-between sm:pt-7 sm:mx-7 md:pt-10 md:mx-10">
      <Link to="/">
        <h1 className="text-3xl font-bold text-white">PuTone</h1>
      </Link>
      <div>
        <GiHamburgerMenu
          className="cursor-pointer text-3xl text-theme-default"
          onClick={() => setHamburger(true)}
        />
      </div>
      {hamburger && (
        <nav className="fixed top-0 right-0 min-h-screen w-full bg-black">
          <div className="flex justify-end pt-10 mr-10 md:pt-10 md:mx-10">
            <MdCancel
              className="text-4xl text-[#C07F00] cursor-pointer hover:text-white"
              onClick={() => setHamburger(false)}
            />
          </div>
          <div className="flex w-full flex-col space-y-8">
            <Link to="/login" className="text-white hover:text-[#C07F00]">
              Login
            </Link>
            <Link to="/register" className="text-white hover:text-[#C07F00]">
              Register
            </Link>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/dha-stix"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="text-white text-2xl hover:text-[#C07F00]" />
              </a>
              <a
                href="https://twitter.com/dayvid_JS"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="text-white text-2xl hover:text-[#C07F00]" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}
