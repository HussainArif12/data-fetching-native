import { FlatList, Box, Center } from "native-base";
import React from "react";

export default function DataRenderer({ data }) {
  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        {item.title}
      </Box>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
