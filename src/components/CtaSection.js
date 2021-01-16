import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function CtaSection() {
  const data = useStaticQuery(graphql`
    query {
      chart: file(relativePath: { eq: "chart.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chartMob: file(relativePath: { eq: "chart-mob.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="py-20 text-white bg-darkBlack">
      <div className="container">
        <div className="flex flex-col rounded-lg lg:flex-row">
          <div className="relative flex flex-col items-center justify-center w-full lg:px-20 pt-36 lg:py-0 lg:items-start lg:w-1/2 lg:rounded-l-3xl bg-mediumBlack lg:bg-lightBlack">
            <h2 className="px-16 mb-5 text-4xl text-center lg:px-0 lg:text-5xl lg:text-left">
              OpenType feature and Variable fonts
            </h2>
            <button className="z-50 px-10 py-4 mb-10 transition-transform duration-200 transform lg:px-20 lg:mb-0 lg:mr-8 hover:-translate-y-1 bg-primary">
              Try For Free
            </button>
            <Image
              fluid={data.chartMob.childImageSharp.fluid}
              className="absolute bottom-0 w-full lg:hidden"
            />
          </div>
          <div className="hidden w-1/2 -ml-1 rounded-r-3xl lg:block">
            <Image
              fluid={data.chart.childImageSharp.fluid}
              className="rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
