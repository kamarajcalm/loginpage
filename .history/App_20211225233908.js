import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient style={styles.container}
      colors={['#6CAAF3', "#5FA2F1", "#3585E4", 'transparent']}
    >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
