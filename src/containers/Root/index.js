import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Sidenav from '../../components/Sidenav'
import Worksheets from '../Worksheet'

class Root extends Component {
  render() {
    return(
      <div>
        <Sidenav />

        <main>
          <Route
            path='/worksheets'
            component={ Worksheets }
          />
        </main>
      </div>
    )
  }
}

export default Root
