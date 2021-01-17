import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

export default function GallerySection() {
  const data = useStaticQuery(graphql`
    query {
      FirstRowCardZero: file(relativePath: { eq: "gallery/row-1/Card.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FirstRowCardOne: file(relativePath: { eq: "gallery/row-1/Card-1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FirstRowCardTwo: file(relativePath: { eq: "gallery/row-1/Card-2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FirstRowCardThree: file(
        relativePath: { eq: "gallery/row-1/Card-3.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SecondRowCardZero: file(relativePath: { eq: "gallery/row-2/Card.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SecondRowCardOne: file(relativePath: { eq: "gallery/row-2/Card-1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SecondRowCardTwo: file(relativePath: { eq: "gallery/row-2/Card-2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MobileCardZero: file(relativePath: { eq: "gallery/mobile/Card.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MobileCardOne: file(relativePath: { eq: "gallery/mobile/Card-1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MobileCardTwo: file(relativePath: { eq: "gallery/mobile/Card-2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MobileCardThree: file(relativePath: { eq: "gallery/mobile/Card-3.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="pb-32 text-white bg-darkBlack">
      <div className="container">
        <h2 className="mb-10 text-5xl text-center ">Gallery</h2>
        <p className="max-w-xl px-10 mx-auto mb-8 text-xl text-center lg:px-0">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="justify-between hidden w-full lg:flex">
          <Image
            fluid={data.FirstRowCardZero.childImageSharp.fluid}
            className="w-full -mx-5"
          />
          <Image
            fluid={data.FirstRowCardOne.childImageSharp.fluid}
            className="w-full -mx-5"
          />
          <Image
            fluid={data.FirstRowCardTwo.childImageSharp.fluid}
            className="w-full -mx-5"
          />
          <Image
            fluid={data.FirstRowCardThree.childImageSharp.fluid}
            className="w-full -mx-5"
          />
        </div>
        <div className="hidden lg:flex">
          <Image
            fluid={data.SecondRowCardZero.childImageSharp.fluid}
            className="w-full"
          />
          <Image
            fluid={data.SecondRowCardOne.childImageSharp.fluid}
            className="w-full"
          />
          <Image
            fluid={data.SecondRowCardTwo.childImageSharp.fluid}
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center lg:hidden">
          <Image
            fluid={data.MobileCardZero.childImageSharp.fluid}
            className="w-full max-w-md"
          />
          <Image
            fluid={data.MobileCardOne.childImageSharp.fluid}
            className="w-full max-w-md"
          />
          <Image
            fluid={data.MobileCardTwo.childImageSharp.fluid}
            className="w-full max-w-md"
          />
          <Image
            fluid={data.MobileCardThree.childImageSharp.fluid}
            className="w-full max-w-md"
          />
        </div>
        <button className="block py-2 mx-auto transition-transform duration-200 transform border border-white px-7 lg:px-10 lg:py-3 hover:-translate-y-1">
          See More
        </button>
      </div>
    </section>
  )
}
