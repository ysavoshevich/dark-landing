import React from "react"
import Map from "../images/footer/map.svg"
import Phone from "../images/footer/phone.svg"
import Twitter from "../images/footer/tw.svg"
import LinkedIn from "../images/footer/ln.svg"
import Facebook from "../images/footer/fb.svg"
import NavLink from "./NavLink"

export default function Footer() {
  return (
    <footer className="pt-24 pb-20 text-white bg-darkBlack">
      <div className="container flex flex-col justify-between pl-20 lg:px-20 lg:pl-20 lg:flex-row">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col mb-10 mr-10 lg:mb-0">
            <h4 className="mb-5 text-2xl">Fingertipe</h4>
            <NavLink to="/" text="Home" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Examples" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Pricing" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Updates" additionalClasses="mx-0 my-2" />
          </div>
          <div className="flex flex-col mb-10 mr-10 lg:mb-0">
            <h4 className="mb-5 text-2xl">Resources</h4>
            <NavLink to="/" text="Home" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Examples" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Pricing" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Updates" additionalClasses="mx-0 my-2" />
          </div>
          <div className="flex flex-col mb-10 lg:mb-0">
            <h4 className="mb-5 text-2xl">About</h4>
            <NavLink to="/" text="Home" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Examples" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Pricing" additionalClasses="mx-0 my-2" />
            <NavLink to="/" text="Updates" additionalClasses="mx-0 my-2" />
          </div>
        </div>
        <div>
          <div className="flex">
            <Map />
            <p className="pl-2">7480 Mockingbird Hill</p>
          </div>
          <div className="flex mt-2">
            <Phone />
            <p className="pl-2">(123) 123-1234</p>
          </div>
          <div className="flex mt-5">
            <a href="">
              <Twitter className="mr-5" />
            </a>
            <a href="">
              <Facebook className="mr-5" />
            </a>
            <a href="">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
