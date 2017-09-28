import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Store from './config/Store'

render(
  <Provider store={ Store }>
    <p> Initial Render </p>
  </Provider>,
  document.getElementById('root')
)
