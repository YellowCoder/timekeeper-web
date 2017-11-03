import React, { Component } from 'react'

import styles from './styles'

class Navbar extends Component {
  render() {
    return(
      <nav className={ styles.nav }>
        <h2> Time keeper </h2>
        <ul>
          <li> Log out </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar