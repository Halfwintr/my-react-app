import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Learn to implement your design and apply basic styling using powerful CSS techniques. Additionally, you’ll be able to use custom fonts from Google fonts and set up the structure for your images and CSS.</p>
        <Link to="/page-2/">Do the thing</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" alt="" />
          <img src={require('../images/logo-figma.png')} width="50" alt="" />
          <img src={require('../images/logo-studio.png')} width="50" alt="" />
          <img src={require('../images/logo-framer.png')} width="50" alt="" />
          <img src={require('../images/logo-react.png')} width="50" alt="" />
          <img src={require('../images/logo-swift.png')} width="50" alt="" />
        </div>
        <Wave />
      </div>
    </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card 
            title="React for Designers"
            text="12 Sections"
            image={require('../images/wallpaper.jpg')} />
          <Card 
            title="React for Designers"
            text="12 Sections"
            image={require('../images/wallpaper4.jpg')} />
          <Card 
            title="React for Designers"
            text="12 Sections"
            image={require('../images/wallpaper2.jpg')} />
          <Card 
            title="React for Designers"
            text="12 Sections"
            image={require('../images/wallpaper3.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." 
    />
  </Layout>
)

export default IndexPage
