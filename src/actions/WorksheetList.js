export const SET_CURRENT_USER = 'WORKSHEET_LIST_SET_CURRENT_USER'
export const SET_WORKSHEETS = 'WORKSHEET_LIST_SET_WORKSHEETS'

export function setCurrentUser(currentUser) {
  return { type: SET_CURRENT_USER, currentUser}
}

export function setWorksheets(worksheets) {
  return { type: SET_WORKSHEETS, worksheets}
}