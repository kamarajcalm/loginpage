import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get("window")
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)


  return (
    <LinearGradient style={styles.container}
      colors={["#70ACF4", '#6CAAF3', "#5FA2F1", "#3585E4",]}
    >

      <StatusBar style="auto" />

      <View style={styles.content}>
        <View style={[styles.center]}>
          <Text style={[styles.textwithBold]}>Sign In</Text>
        </View>

        <View style={[styles.textInputContainer, styles.boxWithShadow]}>
          <View>
            <Text style={styles.text}>Email</Text>
          </View>
          <View style={[styles.textBox]}>
            <View style={[styles.iconContainer]}>
              <MaterialCommunityIcons name="email" size={24} color="#fff" />
            </View>
            <TextInput
              value={email}
              onChangeText={val => setEmail(val)}
              keyboardType={"email-address"}
              style={[styles.textInput]}
              placeholder='Enter Your Email'
              placeholderTextColor={"#fff"}
              selectionColor={"#fff"}
            />


          </View>
        </View>

        <View style={[styles.textInputContainer, styles.boxWithShadow]}>
          <View>
            <Text style={styles.text}>password</Text>
          </View>
          <View style={[styles.textBox]}>
            <View style={[styles.iconContainer]}>
              <Ionicons name="key-outline" size={24} color="#fff" />
            </View>
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={val => setPassword(val)}
              style={[styles.textInput]}
              placeholder='Enter Your Password'
              placeholderTextColor={"#fff"}
              selectionColor={"#fff"}
            />


          </View>
        </View>

        <View style={[styles.flexEnd]}>
          <TouchableOpacity>
            <Text style={[styles.text]}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>

          <Checkbox

            value={rememberMe}
            onValueChange={val => setRememberMe(val)}
            style={styles.checkbox}
            color={rememberMe ? '#3585E4' : "#fff"}
          />
          <View>
            <Text style={[styles.text]}>Remember me</Text>
          </View>

        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.text}>Don`t have an account ?</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text style={[styles.textwithBold]}>Sign up</Text>
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
    height: height * 0.06,
    width: width * 0.8,
    flexDirection: "row",
    backgroundColor: "#89C1FD",
    marginTop: 10,
    borderRadius: 5
  },
  text: {
    color: "#fff"
  },
  textwithBold: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  iconContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    flex: 0.8,
    color: "#fff"
  },

  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  flexEnd: {
    marginTop: 10,
    alignSelf: "flex-end",
    paddingHorizontal: width * 0.1
  },
  checkbox: {
    height: 15,
    width: 15,

  },
  checkboxContainer: {
    flexDirection: "row",
    paddingHorizontal: width * 0.1
  }
});
