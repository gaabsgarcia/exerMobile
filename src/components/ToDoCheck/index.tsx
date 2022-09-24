import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  task: string;
  todoSelected: boolean;
  onRemove: () => void;
};

export function ToDo({ task, onRemove, todoSelected = false }: Props) {
  const [todo, setTodo] = useState<boolean>(todoSelected);

  function handlePressedCompleted(todo: boolean) {
    if (todo === true) {
      setTodo(false);
    } else if (todo === false) {
      setTodo(true);
    }
  }

  return (
    <View style={styles.container}>
      {!todo ? (
        <>
          <TouchableOpacity style={styles.button} onPress={() => handlePressedCompleted(todoSelected)}>
            <Image
              style={styles.image}
              source={require("../../../assets/check.png")}
            />
          </TouchableOpacity>
          <Text style={styles.name}>{task}</Text>
          <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Image
              style={styles.image}
              source={require("../../../assets/trash.png")}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={() => handlePressedCompleted(todoSelected)}>
            <Image
              style={styles.image}
              source={require("../../../assets/checked.png")}
            />
          </TouchableOpacity>
          <Text style={styles.task}>{task}</Text>
          <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Image
              style={styles.image}
              source={require("../../../assets/trash.png")}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
