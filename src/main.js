import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import {
  BrowserRouter
} from 'react-router-dom'

import store from './config/Store'
import apolloClient from './config/ApolloClient'

import Root from './containers/Root'

render(
  <ApolloProvider store={ store } client={ apolloClient }>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
