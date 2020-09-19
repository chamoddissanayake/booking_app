import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Header from "../common/Header";
import Screen from "../common/Screen";

export default class TravelOffers extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>Travel Offers</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});