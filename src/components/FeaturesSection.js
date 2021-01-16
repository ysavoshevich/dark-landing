import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Feature from "./Feature"
import Alien from "../images/alien.svg"
import Infinity from "../images/infinity.svg"
import Restraunt from "../images/restraunt.svg"

export default function FeaturesSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "features.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="text-white bg-darkBlack">
      <div className="container py-48">
        <h2 className="mb-10 text-5xl text-center uppercase">Features</h2>
        <p className="max-w-xl px-10 mx-auto mb-24 text-xl text-center lg:px-0">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="w-full px-10 lg:px-0 lg:w-8/12">
            <Image fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className="max-w-sm lg:w-4/12">
            <Feature
              icon={<Restraunt />}
              heading="A single source of truth"
              text="When you add work to your Slate calendar we automatically calculate useful insights"
            />
            <Feature
              icon={<Alien />}
              heading="Intuitive interface"
              text="When you add work to your Slate calendar we automatically calculate useful insights"
            />
            <Feature
              icon={<Infinity />}
              heading="Or with rules"
              text="When you add work to your Slate calendar we automatically calculate useful insights"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
