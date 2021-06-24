import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { Box, Center, NativeBaseProvider } from "native-base";
import React from "react";
import DataRenderer from "./DataRenderer";

//connect to GraphQL server:
const client = new ApolloClient({
  uri: "https://api.sampleapis.com/coffee/graphql",
  cache: new InMemoryCache(),
});

function RenderQuery() {
  const query = gql`
    query HotCoffees {
      allHots {
        title
        id
      }
    }
  `;

  //make a query
  const { loading, error, data } = useQuery(query);
  if (error) console.log(error);
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Using GraphQL</Box>
        {loading && <Box>Loading data.. please wait</Box>}
        {data && <DataRenderer data={data.allHots} />}
      </Center>
    </NativeBaseProvider>
  );
}

export default function CoffeeGraphQL() {
  return (
    <ApolloProvider client={client}>
      <RenderQuery />
    </ApolloProvider>
  );
}
