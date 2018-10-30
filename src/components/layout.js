import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import Header from './Header'

class Template extends Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    // if (location.pathname === rootPath) {
    //   // nothing
    // } else {
    // }
    return (
      <div>
        {Header}
        {children}
      </div>
    )
  }
}

export default Template
