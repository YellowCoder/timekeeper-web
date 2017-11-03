import * as actions from '../actions/WorksheetList'

const initialState = {
  currentUser: null,
  worksheets: [],
  loading: true
}

const WorksheetListReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.SET_CURRENT_USER:
    return {
      ...state,
      currentUser: action.currentUser
    }
  case actions.SET_WORKSHEETS:
    return {
      ...state,
      worksheets: action.worksheets,
      loading: false
    }
  default:
    return state
  }
}

export default WorksheetListReducer
