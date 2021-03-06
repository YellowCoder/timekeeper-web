import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Sidenav from '../../components/Sidenav'
import Navbar from '../../components/Navbar'
import WorksheetList from '../WorksheetList'

import styles from './styles'

class Root extends Component {
  render() {
    return(
      <div className={ styles.content }>
        <Navbar />
        <Sidenav />

        <main className={ styles.main }>
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
