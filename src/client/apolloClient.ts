import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  headers: {
    "x-api-key": "da2-b7vqajjrfbgbvjf4fbesbavuhq",
  },
  uri: "https://api-apollo.dentalkart.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
