import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import apolloClient from './ApolloClient'

const configureStore = createStore(
  rootReducer,
  {},
  applyMiddleware(apolloClient.middleware())
)

export default configureStore
