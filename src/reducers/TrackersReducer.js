import * as actionType from '../actions/ActionType'

const TrackersReducer = (state = 0, action) => {
  switch (action.type) {
    case actionType.INITIAL_ACTION:
      return state
    default:
      return state
  }
}

export default TrackersReducer
