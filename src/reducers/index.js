import { combineReducers } from 'redux'

import trackersReducer from './TrackersReducer'
import apolloClient from '../config/ApolloClient'

const rootReducer = combineReducers({
  apollo: apolloClient.reducer(),
  trackersReducer
})

export default rootReducer
