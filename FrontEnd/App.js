import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import TaskListScreen from "./screens/TaskListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
  },
});
