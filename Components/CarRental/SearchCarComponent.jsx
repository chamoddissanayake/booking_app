import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";

export default class SearchCarComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
    console.log(props.navigation);
  }

  render() {
    return (
      <View>
        <View style={{ backgroundColor: "white" }}>
          <Button
            onPress={() => this.props.navigation.navigate("CarSearchResults")}
            title="Search Cars#"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
