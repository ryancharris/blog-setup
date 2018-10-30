import React, { Component } from "react";

import Layout from "../components/layout";
import HeroBlock from "../components/HeroBlock";
import PageBody from "../components/PageBody";

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HeroBlock title="Come @ Me" />
        <PageBody>
          <h2>Let's be friends!</h2>
          <a href="https://www.nhl.com/flyers/fans/gritty">Hire me</a>
        </PageBody>
      </Layout>
    );
  }
}

export default ContactPage;
