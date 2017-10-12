import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Worksheets from '../Worksheet'

class Root extends Component {
  render() {
    return(
      <div>
        <Sidebar />

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
