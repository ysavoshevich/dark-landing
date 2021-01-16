import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import ContentsSection from "../components/ContentsSection"
import GallerySection from "../components/GallerySection"
import PartnersSection from "../components/PartnersSection"
import TestimonialSection from "../components/TestimonialSection"
import CtaSection from "../components/CtaSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturesSection />
    <ContentsSection />
    <GallerySection />
    <PartnersSection />
    <TestimonialSection />
    <CtaSection />
  </Layout>
)

export default IndexPage
