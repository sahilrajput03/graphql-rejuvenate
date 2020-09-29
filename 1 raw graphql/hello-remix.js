var { graphql, buildSchema } = require("graphql");
// This file is remixed with async/await.
(async function () {
  let { data } = await graphql(
    buildSchema(`
      type Query {
        hello: String
      }
  `),
    "{ hello }",
    { hello: () => "Hello world!" }
  );
  console.log(`We receive - ${JSON.stringify(data)}`);

  // end of program!
})();
