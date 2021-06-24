import { FlatList, Box, NativeBaseProvider, Center } from "native-base";
import React from "react";
import { useEffect } from "react";
import { create } from "apisauce";
import { useState } from "react";
import DataRenderer from "./DataRenderer";
export default function SauceExample() {
  const [data, setData] = useState([]);

  const api = create({
    baseURL: "https://api.sampleapis.com/coffee",
  });

  const fetchData = async () => {
    //make request to baseURL + 'iced'
    const response = await api.get("/HOT");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Using APISauce</Box>
        {data && <DataRenderer data={data} />}
      </Center>
    </NativeBaseProvider>
  );
}
