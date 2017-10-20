import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Sidenav from '../../components/Sidenav'
import WorksheetList from '../WorksheetList'

class Root extends Component {
  render() {
    return(
      <div>
        <Sidenav />

        <main>
          <Route
            path='/worksheets'
            component={ WorksheetList }
          />
        </main>
      </div>
    )
  }
}

export default Root
