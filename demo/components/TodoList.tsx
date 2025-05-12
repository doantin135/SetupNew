import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { useSelector, useDispatch } from "react-redux";
  import { deleteTask } from "../redux/taskSlice";
  
  // Define Task type
  interface Task {
    id: number;
    title: string;
  }
  
  const TodoList: React.FC = () => {
    const dispatch = useDispatch();
  
    const todos: Task[] = useSelector((state: any) => state.tasks);
  
    const onDelete = (id: number) => {
      dispatch(deleteTask({ id: id.toString() }));
    };
  
    const renderItem = ({ item }: { item: Task }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={30} color="red" />
        </TouchableOpacity>
      </View>
    );
  
    return (
      <View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={<Text style={styles.emptyText}>No todos yet.</Text>}
        />
      </View>
    );
  };
  
  export default TodoList;
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#e9e9e9",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
    },
    deleteButton: {
      padding: 10,
    },
    emptyText: {
      textAlign: "center",
      marginTop: 20,
      color: "#999",
      fontSize: 16,
    },
  });