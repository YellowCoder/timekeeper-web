import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidenav extends Component {
  render() {
    return(
      <nav>
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
