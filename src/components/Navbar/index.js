import React, { Component } from 'react'

import styles from './styles'

class Navbar extends Component {
  render() {
    return(
      <nav className={ styles.nav }>
        <h2 className={ styles.h2 }> Time keeper </h2>
      </nav>
    )
  }
}

export default Navbar