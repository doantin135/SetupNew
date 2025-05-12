import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { addTask } from "../redux/taskSlice"; 
  
  const TodoHeader: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const dispatch = useDispatch();
  
    const onSubmitTask = () => {
      if (todo.trim().length === 0) {
        Alert.alert("You need to enter a task");
        setTodo("");
        return;
      }
  
      dispatch(
        addTask({
          id: Date.now(), // Generate a unique ID
          title: todo,    // Use correct key to match the updated Task type
        })
      );
      setTodo("");
    };
  
    return (
      <View>
        <Text style={styles.header}>Todo List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add todo"
            onChangeText={setTodo}
            value={todo}
          />
          <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default TodoHeader;
  
  const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 10,
    },
    inputContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      borderColor: "gray",
      borderWidth: 1,
      padding: 10,
      margin: 10,
      width: "90%",
      borderRadius: 5,
    },
    button: {
      backgroundColor: "black",
      padding: 10,
      margin: 10,
      width: "90%",
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
    },
  });