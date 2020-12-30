import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { FakeHistory } from "./components/FakeHistory";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { purple, white } from "./utils/colors";

import { NavigationContainer } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

{
  /* <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          <History />
        </View>
      </Provider> */
}
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="History" component={History} />
            <Tabs.Screen name="AddEntry" component={AddEntry} />
          </Tabs.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
