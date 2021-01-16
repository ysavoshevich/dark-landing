import React from "react"
import TestimonialCard from "./TestimonialCard"
import { graphql, useStaticQuery } from "gatsby"

const lorem =
  "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year."

export default function TestimonialSection() {
  const data = useStaticQuery(graphql`
    query {
      AvatarOne: file(relativePath: { eq: "testimonials/avatar.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AvatarTwo: file(relativePath: { eq: "testimonials/avatar-2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AvatarThree: file(relativePath: { eq: "testimonials/avatar-3.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AvatarFour: file(relativePath: { eq: "testimonials/avatar-4.png" }) {
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
      <div className="container flex flex-col items-center">
        <h2 className="mb-10 text-5xl text-center ">Testimonials</h2>
        <div className="flex flex-col max-w-xs lg:max-w-4xl ">
          <div className="flex flex-col lg:flex-row">
            <TestimonialCard
              fluid={data.AvatarOne.childImageSharp.fluid}
              name="Claire Bell"
              role="Designer"
              text={lorem}
            />
            <TestimonialCard
              fluid={data.AvatarTwo.childImageSharp.fluid}
              name="Francisco Lane"
              role="Designer"
              text={lorem}
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <TestimonialCard
              fluid={data.AvatarThree.childImageSharp.fluid}
              name="Ralph Fisher"
              role="Designer"
              text={lorem}
            />
            <TestimonialCard
              fluid={data.AvatarFour.childImageSharp.fluid}
              name="Jorge Murphy"
              role="Designer"
              text={lorem}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
