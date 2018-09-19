import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Learn to implement your design and apply basic styling using powerful CSS techniques. Additionally, you’ll be able to use custom fonts from Google fonts and set up the structure for your images and CSS.</p>
        <Link to="/page-2/">Do the thing</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
