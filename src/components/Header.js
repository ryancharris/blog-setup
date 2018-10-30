import React, { Component } from 'react'
import { Link } from 'gatsby'

import './Header.css'

class Header extends Component {
  renderMenu = () => {
    return <div className="Header__menu" />
  }

  render() {
    const { className } = this.props

    const cn = 'Header ' + className

    return (
      <div className={cn}>
        <Link className="Header__name" to="/">
          Gritty
        </Link>
        <div
          className="Header__nav"
          onClick={() => {
            console.log('clicked')
          }}
        >
          <div className="Header__nav-hamburger" />
        </div>
      </div>
    )
  }
}

export default Header
