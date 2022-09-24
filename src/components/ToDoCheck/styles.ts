import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  task: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    marginLeft: 16,
    textDecorationLine: "line-through"
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {}
});
