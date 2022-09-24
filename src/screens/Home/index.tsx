import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { ToDo } from "../../components/ToDoCheck";
import { styles } from "./styles";

type IArray = {
  descripton: string;
  check: boolean;
};
export function Home() {
  const [todo, setTodo] = useState<IArray[]>([]);
  const [todoName, setTodoName] = useState("");


  function handleTaskAdd() {
    const todoExists = todo.find((task) => task.descripton === todoName);
    if (todoExists) {
      return Alert.alert(
        "To-Do Existe",
        "Já existe um to-do na lista com esse nome."
      );
    }
    todo.push({ descripton: todoName, check: false });
    setTodoName("");
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover as(os) ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTodo((prevState) =>
            prevState.filter((todo) => todo.descripton !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={styles.input}
            onChangeText={setTodoName}
            value={todoName}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTaskAdd()}
          >
            <Image
              source={require("../../../assets/plus.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerInfo}>
          <TouchableOpacity style={styles.subContainerInfo}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.accountant}>{}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subContainerInfo}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.accountant}>{}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.containerTask}
          data={todo}
          keyExtractor={(item) => item.descripton}
          renderItem={({ item }) => (
            <ToDo
              key={item.descripton}
              task={item.descripton}
              todoSelected={item.check}
              onRemove={() => handleTaskRemove(item.descripton)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <Image
                style={styles.imageInfo}
                source={require("../../../assets/clipboard.png")}
              />
              <Text style={styles.textInfo}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textInfo2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </>
          )}
        />
      </View>
    </View>
  );
}
