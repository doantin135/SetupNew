import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";

// Components
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TodoHeader />
        <TodoList />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2", 
  },
});