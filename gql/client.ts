import { GraphQLClient } from "graphql-request";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const endpoint = "https://countries.trevorblades.com";

/* Creating a new GraphQLClient instance and exporting it. */
export const graphQLClient = new GraphQLClient(endpoint);

/* Creating a new ApolloClient instance and exporting it. */
export const apolloClient = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});
