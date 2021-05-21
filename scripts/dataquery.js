export function getout(order) {
      return console.log(`Get outta here, ${order}`)
}



export function getUserData(ghUsername) {
      return queryFetch(
            `query ($username:String!) {
  user(login: $username) {
    avatarUrl
    bio
    name
    login
    repositories(last: 6,privacy: PUBLIC) {
      edges {
        node {
          name
          url
          updatedAt
          stargazerCount
          forkCount
          description
          languages(first: 1) {
          nodes {
            color
            name
          }
        }
        }
      }
    }
  }
}`,
            { username: ghUsername }
      ).then((data) => {
            return data;
      });
}





function queryFetch(query, variables) {
      return fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                  Authorization: "Bearer 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"
            },
            body: JSON.stringify({
                  query: query,
                  variables: variables
            })
      }).then((res) => res.json());
}