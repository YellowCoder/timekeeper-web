import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import {
  HashRouter
} from 'react-router-dom'

import store from './config/Store'
import apolloClient from './config/ApolloClient'

import Root from './containers/Root'

import 'minireset.css'
import './config/defaultStyles.css'

render(
  <ApolloProvider store={ store } client={ apolloClient }>
    <HashRouter>
      <Root />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
