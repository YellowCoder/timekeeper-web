import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as styles from './index.styles'

class Sidenav extends Component {
  render() {
    return(
      <nav className={ styles.sidenav }>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/worksheets'> Worksheets </Link></li>
          <li><Link to='/signout'> Sign out </Link></li>
        </ul>
      </nav>
    )
  }
}

export default Sidenav
