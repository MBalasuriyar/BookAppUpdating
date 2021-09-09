///taken from my final project

const express = require('express');
// server stuff
const path = require('path');
// tells server where to go
const { ApolloServer } = require('apollo-server-express');
// database stuff
const db = require('./config/connection');
// more database stuff
const { typeDefs, resolvers } = require('./schemas');
// more db stuff
// const sequelize = require("./config/connection")

const { authMiddleware } = require('./utils/auth');
const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    // looks into the typeDefs and resolvers about database
  typeDefs,
  resolvers,
  context:authMiddleware
});

server.applyMiddleware({ app });
// connects mongo to Express

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// more express middleware 

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    // path from apollo
  });
});
