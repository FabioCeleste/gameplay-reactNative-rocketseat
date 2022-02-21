import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
  },
  container: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 20,
    backgroundColor: theme.colors.discord,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
