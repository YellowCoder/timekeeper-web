import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://api.development.timekeeper.com:3000/graphql'
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {}
    req.options.headers.authentication = '123'
    req.options.headers.accept = 'application/json;version=1'
    next()
  }
}])

const apolloClient = new ApolloClient({ networkInterface })

export default apolloClient
