import * as actions from '../actions/WorksheetList'

const initialState = {
  currentUser: null
}

const WorksheetListReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.SET_CURRENT_USER:
    return {
      ...state,
      currentUser: action.currentUser
    }
  default:
    return state
  }
}

export default WorksheetListReducer
