import { combineReducers } from 'redux'

import worksheetListReducer from './WorksheetListReducer'
import apolloClient from '../config/ApolloClient'

const rootReducer = combineReducers({
  apollo: apolloClient.reducer(),
  worksheetListReducer
})

export default rootReducer
