import React from "react"

export default function ContentCard({ heading, text, btnText, image }) {
  return (
    <div className="flex flex-col items-center justify-between max-w-lg px-5 py-10 mx-5 my-5 bg-white lg:px-10 lg:py-12 rounded-xl text-darkBlack">
      <div>
        <h3 className="mb-10 text-2xl font-semibold text-center">{heading}</h3>
        <p className="max-w-lg mx-auto mb-10 text-xl text-center lg:px-14 ">
          {text}
        </p>
      </div>
      <button className="z-50 px-16 py-4 mb-5 text-white transition-transform duration-200 transform lg:mb-0 hover:-translate-y-1 bg-primary">
        {btnText}
      </button>
      <div className="w-full pt-10">{image}</div>
    </div>
  )
}
