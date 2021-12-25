import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.container}
      colors={["#70ACF4", '#6CAAF3', "#5FA2F1", "#3585E4",]}
    >

      <StatusBar style="auto" />

      <View style={styles.content}>

      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.text}>Don`t have an account ?</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 15 }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  content: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff"
  }
});
