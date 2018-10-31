import React, { Component } from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

import Header from "./Header";
import Footer from "./Footer";

import "./Layout.css";

class Template extends Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const className = location.pathname === rootPath ? "is-homepage" : "";
    const layoutCN = "Layout " + className;

    return (
      <div className={layoutCN}>
        <Header className={className} />
        {children}
        {location.pathname !== rootPath && <Footer />}
      </div>
    );
  }
}

export default Template;
