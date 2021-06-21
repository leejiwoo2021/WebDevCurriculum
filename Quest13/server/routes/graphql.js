var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
    jiwoo: User
  }

  type User {
    name: String
    id: ID
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'test String';
  },
  jiwoo: () => {
    return { name: 'testing JIWOO', id: 12 };
  },
};

const router = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = router;
