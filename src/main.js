import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import store from './config/Store'
import apolloClient from './config/ApolloClient'

render(
  <ApolloProvider store={ store } client={ apolloClient }>
    <p> Initial Render </p>
  </ApolloProvider>,
  document.getElementById('root')
)
