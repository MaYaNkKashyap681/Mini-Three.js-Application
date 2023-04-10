const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const {connectDB} = require('./mongoDb/connectDb')
const {typeDefs} = require('./graphql/typedefs')
const {resolvers} = require('./graphql/resolvers')
const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers});
function startServer() {
  try {
    connectDB('mongodb://localhost/todoappNew')
    startStandaloneServer(server, {
      listen: 4000,
    })
      .then(({url}) => {
        console.log(`🚀  Server ready at: ${url}`);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    console.log(err);
  }
}
startServer();