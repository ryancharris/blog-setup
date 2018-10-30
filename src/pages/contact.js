import React, { Component } from "react";

import Layout from "../components/layout";
import HeroBlock from "../components/HeroBlock";

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HeroBlock title="Come @ Me" />
        <h2>Let's be friends!</h2>
        <a href="https://www.nhl.com/flyers/fans/gritty">Hire me</a>
      </Layout>
    );
  }
}

export default ContactPage;
