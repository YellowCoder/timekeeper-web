import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withApollo } from 'react-apollo'

import * as query from './query'
import * as actions from '../../actions/WorksheetList'

class WorksheetList extends Component {
  componentDidMount() {
    this.loadCurrentUser()
  }

  loadCurrentUser() {
    this.props.client.query({
      query: query.currentUser
    }).then(({ data }) => {
      const { setCurrentUser } = this.props
      setCurrentUser(data.currentUser)
    })
  }

  render() {
    return(
      <div> aaa </div>
    )
  }
}

const stateMap = (state) => ({
  currentUser: state.worksheetListReducer.currentUser
})

const dispatchMap = (dispatch, ownProps) => ({
  setCurrentUser: (user) => dispatch(actions.setCurrentUser(user))
})

export default compose(
  connect(stateMap, dispatchMap),
  withApollo
)(WorksheetList)
