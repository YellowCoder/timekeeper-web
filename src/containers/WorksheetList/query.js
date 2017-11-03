import gql from 'graphql-tag'

export const currentUser = gql`
  query CurrentUser {
    currentUser: current_user {
      id
    }
  }
`

export const worksheets = gql`
  query Worksheets {
    worksheets: worksheets {
      action
      created_at
      category {
        name
      }
    }
  }
`
