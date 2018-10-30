import React, { Component } from "react";

import Layout from "../components/layout";
import HeroBlock from "../components/HeroBlock";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HeroBlock title="About Gritty" />
        <p>I got grit.</p>
      </Layout>
    );
  }
}

export default AboutPage;
