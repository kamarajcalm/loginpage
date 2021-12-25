import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get("window")
export default function App() {
  return (
    <LinearGradient style={styles.container}
      colors={["#70ACF4", '#6CAAF3', "#5FA2F1", "#3585E4",]}
    >

      <StatusBar style="auto" />

      <View style={styles.content}>
        <View style={[styles.center]}>
          <Text style={[styles.text, { fontSize: 20, fontWeight: "bold" }]}>Sign In</Text>
        </View>

        <View style={[styles.textInputContainer]}>
          <View>
            <Text style={styles.text}>Email</Text>
          </View>
          <View style={[styles.textBox]}>

          </View>
        </View>
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
  textInputContainer: {
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.03
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 0.9,
    justifyContent: "center"
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textBox: {
    height: height * 0.07,
    width: width * 0.8,
    flexDirection: "row",
    backgroundColor: "#89C1FD",
    marginTop: 5
  },
  text: {
    color: "#fff"
  }
});
