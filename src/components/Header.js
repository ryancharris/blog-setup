import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    debugger
    return (
      <div class="Header">
        <div class="Header__name">Gritty</div>
        <div
          class="Header__nav"
          onClick={() => {
            console.log(clicked)
          }}
        />
      </div>
    )
  }
}

export default Header
