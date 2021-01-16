import React from "react"
import Image from "gatsby-image"

export default function TestimonialCard({ fluid, name, role, text }) {
  return (
    <div className="py-10 pl-8 m-4 transition-colors duration-300 border border-white rounded-lg cursor-pointer hover:bg-lightBlack">
      <div className="flex flex-row">
        <Image fluid={fluid} className="w-14 " />
        <div className="flex flex-col pl-5 font-semibold">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
      <p className="pt-5 pr-5 lg:pr-20">{text}</p>
    </div>
  )
}
