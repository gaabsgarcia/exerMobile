import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  image: {
    marginTop: 70,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  subContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#1A1A1A",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
    top: -88,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#fdfcfe",
    padding: 16,
    marginRight: 12,
    borderColor: "#0D0D0D",
    borderWidth: 1,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 16,
    height: 16,
    color: "#ffffff",
    alignSelf: "center",
  },
  containerInfo: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "#808080",
    borderBottomWidth: 0.5,
    top: -100,
    paddingBottom: 20,
  },
  subContainerInfo: {
    flexDirection: "row",
  },
  created: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  completed: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  accountant: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#333333",
    borderRadius: 9,
    marginLeft: 5,
    alignSelf: "flex-end",
  },
  imageInfo: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  textInfo: {
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "#808080"
  },
  textInfo2: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "#808080",
  },
  containerTask: {
    top: -22,
  }
});
