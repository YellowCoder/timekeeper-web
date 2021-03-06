import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withApollo } from 'react-apollo'

import List from '../../components/WorksheetList'

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
      this.loadWorksheets()
    })
  }

  loadWorksheets() {
    this.props.client.query({
      query: query.worksheets
    }).then(({ data }) => {
      const { setWorksheets } = this.props
      setWorksheets(data.worksheets)
    }) 
  }

  render() {
    const { loading, worksheets } = this.props

    return(
      <div>
        { loading && <p>Loading</p> }

        { !loading && <List worksheets={ worksheets }/> }
      </div>
    )
  }
}

const stateMap = (state) => ({
  currentUser: state.worksheetListReducer.currentUser,
  worksheets: state.worksheetListReducer.worksheets,
  loading: state.worksheetListReducer.loading
})

const dispatchMap = (dispatch, ownProps) => ({
  setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
  setWorksheets: (worksheets) => dispatch(actions.setWorksheets(worksheets))
})

export default compose(
  connect(stateMap, dispatchMap),
  withApollo
)(WorksheetList)
