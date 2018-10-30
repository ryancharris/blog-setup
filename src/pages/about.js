import React, { Component } from 'react'
import Layout from '../components/layout'

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>About Gritty</h1>
        <p>I got grit.</p>
      </Layout>
    )
  }
}

export default AboutPage
