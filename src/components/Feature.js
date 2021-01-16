import React from "react"

export default function Feature({ icon, heading, text }) {
  return (
    <div className="justify-center px-16 lg:px-10 my-14">
      <div className="flex items-center">
        <div className="pr-2">{icon}</div>
        <h3 className="text-2xl lg:pr-24">{heading}</h3>
      </div>
      <p className="lg:pr-24">{text}</p>
    </div>
  )
}
