import { PAT } from "../pass.js";


export function getUserData(ghUsername) {
      return queryFetch(
            `query ($username:String!) {
  user(login: $username) {
    avatarUrl
    bio
    name
    login
    repositories(last: 20,privacy: PUBLIC) {
          totalCount
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
                  Authorization: `Bearer ${PAT}`
            },
            body: JSON.stringify({
                  query: query,
                  variables: variables
            })
      }).then((res) => res.json());
}