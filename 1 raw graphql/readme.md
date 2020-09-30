# Learning Graphql Revisited

**Graph QL** : [graphql.org - Javascript](https://graphql.org/code/#javascript)

**Express Graphql** : [graphql/express-graphql](https://github.com/graphql/express-graphql)

```
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{ hello }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));

//Expected Output: data returned: Object { hello: "Hello world!" }
  ```