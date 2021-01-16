import React from "react"
import IBM from "../images/partners/ibm.svg"
import Apple from "../images/partners/apple.svg"
import Android from "../images/partners/android.svg"
import Basecamp from "../images/partners/basecamp.svg"
import Apiary from "../images/partners/apiary.svg"
import Airbnb from "../images/partners/airbnb.svg"

export default function PartnersSection() {
  return (
    <section className="py-10 text-white bg-darkBlack">
      <div className="container flex flex-col items-center">
        <h2 className="mb-10 text-5xl text-center ">Partners</h2>
        <p className="max-w-xl px-10 mx-auto mb-12 text-xl text-center lg:mb-24 lg:px-0">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex flex-wrap justify-around max-w-xs mb-10 lg:w-full lg:max-w-5xl">
          <IBM className="p-2" />
          <Apple className="p-2" />
          <Android className="p-2" />
          <Basecamp className="p-2" />
          <Apiary className="p-2" />
          <Airbnb className="p-2" />
        </div>
        <button className="py-2 transition-transform duration-200 transform border border-white px-7 lg:px-10 lg:py-3 hover:-translate-y-1">
          All Partners
        </button>
      </div>
    </section>
  )
}
