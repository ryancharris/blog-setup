import React, { Component } from "react";

import Layout from "../components/layout";
import HeroBlock from "../components/HeroBlock";
import PageBody from "../components/PageBody";

import "../components/AboutPage.css";

import avatar from "../assets/gritty.jpg";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HeroBlock />
        <PageBody>
          <img className="AboutPage__avatar" src={avatar} />
          <h1 className="AboutPage__title">About Gritty</h1>
          <hr className="AboutPage__divider" />
          <p className="AboutPage__bio">
            Ut vitae purus eu tortor molestie vulputate. Phasellus pulvinar
            suscipit turpis, fringilla aliquet leo pellentesque sed. Aenean eget
            ornare enim. Proin rutrum massa tellus, eu rutrum arcu commodo ac.
            Ut facilisis porta nibh et tempor. Vestibulum eu nunc vel lectus
            porttitor lacinia eget ac lectus. Ut tristique tincidunt ipsum, id
            sagittis mauris. Curabitur lorem mauris, egestas ac imperdiet nec,
            blandit fringilla neque.
          </p>
          <p className="AboutPage__bio">
            ullam et turpis volutpat, condimentum eros congue, rutrum libero.
            Nullam consequat lacus id accumsan finibus. Maecenas imperdiet
            faucibus dapibus. Suspendisse velit diam, aliquam quis sollicitudin
            quis, consectetur vel ligula. Nunc ultricies consequat interdum.
            Quisque eleifend placerat nisi, ac vulputate elit accumsan eget.
            Pellentesque aliquet nibh quis tortor mollis, sed interdum mi
            blandit.
          </p>
        </PageBody>
      </Layout>
    );
  }
}

export default AboutPage;
