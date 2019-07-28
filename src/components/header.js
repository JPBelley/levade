import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'

const Header = () => (
  <header>
    <nav>
      <a href="#featured">Featured</a>
      <a href="#collections">Work</a>
      <a href="#contact">Contact</a> 
    </nav >
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
