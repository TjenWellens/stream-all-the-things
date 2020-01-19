import React from 'react'
import { Helmet } from 'react-helmet-async'
import Page from '../components/Page.jsx'
const About = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <div>This is the about page</div>
  </Page>
)
export default About
