import React from "react"
import ContentCard from "./ContentCard"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function ContentsSection() {
  const data = useStaticQuery(graphql`
    query {
      macbook: file(relativePath: { eq: "macbook.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      board: file(relativePath: { eq: "board.png" }) {
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
        <h2 className="mb-10 text-5xl text-center">Contents</h2>
        <p className="max-w-xl px-10 mx-auto mb-24 text-xl text-center lg:px-0">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex flex-col items-center justify-center px-5 lg:items-stretch lg:px-0 lg:flex-row">
          <ContentCard
            heading="Work"
            text="Ever wondered if you're too reliant on a client for work? Slate helps you identify."
            btnText="Sign Up"
            image={<Image fluid={data.macbook.childImageSharp.fluid} />}
          />
          <ContentCard
            heading="Design with real data"
            text="Ever wondered if you're too reliant on a client for work? Slate helps you identify."
            btnText="Try For Free"
            image={<Image fluid={data.board.childImageSharp.fluid} />}
          />
        </div>
      </div>
    </section>
  )
}
