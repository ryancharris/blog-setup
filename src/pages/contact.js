import React, { Component } from 'react'

import Layout from '../components/layout'

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Come @ Me</h1>
        <p>Let's be friends!</p>
      </Layout>
    )
  }
}

export default ContactPage
