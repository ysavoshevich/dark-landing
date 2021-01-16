import React, { useState } from "react"
import PropTypes from "prop-types"
import Logo from "../images/logo.svg"
import MobileMenuIcon from "../images/mobile-menu-icon.svg"
import NavLink from "./NavLink"

const Header = ({ siteTitle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="relative flex items-center w-full h-24 text-white bg-darkBlack">
      <div className="container flex items-center justify-between w-full px-5">
        <Logo className="z-50" />
        <nav className="absolute top-0 left-0 hidden w-full h-full lg:flex ">
          <ul className="flex items-center justify-center w-full h-full">
            <NavLink to="/" text="Home" additionalClasses="mx-7" />
            <NavLink to="/" text="Product" additionalClasses="mx-7" />
            <NavLink to="/" text="About" additionalClasses="mx-7" />
            <NavLink to="/" text="Contact" additionalClasses="mx-7" />
          </ul>
        </nav>
        <div className="z-50 flex items-center">
          <button className="py-2 transition-transform duration-200 transform border border-white px-7 lg:px-10 lg:py-3 hover:-translate-y-1">
            Login
          </button>
          <MobileMenuIcon
            className="ml-5 cursor-pointer lg:hidden"
            onClick={() => {
              setIsMobileMenuOpen(true)
            }}
          />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="absolute top-0 flex items-center justify-center w-screen h-screen bg-darkBlack"
          style={{ zIndex: 1000 }}
        >
          <nav>
            <ul className="flex flex-col items-center justify-center ">
              <NavLink to="/" text="Home" additionalClasses="my-2 text-3xl" />
              <NavLink
                to="/"
                text="Product"
                additionalClasses="my-2 text-3xl"
              />
              <NavLink to="/" text="About" additionalClasses="my-2 text-3xl" />
              <NavLink
                to="/"
                text="Contact"
                additionalClasses="my-2 text-3xl"
              />
              <button
                className="px-5 py-2 bg-darkBlue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Close
              </button>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
