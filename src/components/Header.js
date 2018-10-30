import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    const { className } = this.props

    const cn = 'Header ' + className

    return (
      <div className={cn}>
        <div className="Header__name">Gritty</div>
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
