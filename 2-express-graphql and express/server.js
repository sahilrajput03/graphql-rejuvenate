var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var rootValue = {
  hello: () => {
    return "Hello world!";
  },
};
/* This file is remixed with my own little crooks. */
const graphqlHTTPmiddleware = graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});

var app = express();
app.use("/graphql", graphqlHTTPmiddleware);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
