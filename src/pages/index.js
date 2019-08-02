import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero/hero"
import AboutSection from "../components/aboutSection/aboutSection"
import LocationSection from "../components/locationSection/locationSection"
import TeamSection from "../components/TeamSection/TeamSection"

import { ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <SEO title="Home" />
      <Hero />

      <AboutSection />
      <LocationSection />
      <TeamSection />
    </Layout>
  </ParallaxProvider>
)

export default IndexPage
