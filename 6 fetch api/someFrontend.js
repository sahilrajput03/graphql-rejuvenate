let queryRespones = async () =>
  (
    await (
      await fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: "{hello}" }),
      })
    ).json()
  ).data;

(async () => {
  console.log(`${await queryRespones()}`);
})();
