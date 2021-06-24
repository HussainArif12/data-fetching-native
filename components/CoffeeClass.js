import { Center, NativeBaseProvider, Box } from "native-base";
import React, { Component } from "react";
import DataRenderer from "./DataRenderer";

export default class CoffeeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchCoffee();
  }

  fetchCoffee() {
    const URL = "https://api.sampleapis.com/coffee/hot";
    fetch(URL)
      .then((response) => response.json())
      .then((list) => this.setState({ data: list }));
  }

  render() {
    return (
      <NativeBaseProvider>
        <Center flex={1}>
          <Box>Using class component</Box>
          {this.state.data && <DataRenderer data={this.state.data} />}
        </Center>
      </NativeBaseProvider>
    );
  }
}
