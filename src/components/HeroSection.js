import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "gatsby-image"

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "screens.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="relative text-white bg-darkBlack">
      <div className="container flex flex-col items-center justify-between h-full px-5">
        <div>
          <h1 className="max-w-2xl mx-auto mb-10 text-5xl text-center mt-14 lg:text-7xl">
            Work at the speed of thought
          </h1>
          <p className="max-w-xl px-10 mx-auto mb-20 text-xl text-center lg:px-0">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="flex flex-col mb-10 lg:flex-row">
          <button className="z-50 px-10 py-4 mb-5 transition-transform duration-200 transform lg:mb-0 lg:mr-8 hover:-translate-y-1 bg-primary">
            Try For Free
          </button>
          <button className="z-50 px-10 py-4 transition-transform duration-200 transform border border-white hover:-translate-y-1">
            Learn More
          </button>
        </div>
        <div className="w-full">
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
        <div
          className="absolute bottom-0 z-50 w-full h-1/6 lg:h-2/6"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%)",
          }}
        ></div>
      </div>
    </section>
  )
}
