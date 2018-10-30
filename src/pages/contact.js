import React, { Component } from 'react'

import Layout from '../components/layout'
import HeroBlock from '../components/HeroBlock'

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HeroBlock title="Come @ Me" />
        <p>Let's be friends!</p>
      </Layout>
    )
  }
}

export default ContactPage
