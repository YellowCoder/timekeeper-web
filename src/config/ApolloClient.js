import { ApolloClient, createNetworkInterface } from 'react-apollo'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://api.development.timekeeper.com:3000/graphql',
  }),
})

export default apolloClient
