import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import useChangeEffect from './hooks/useChangeEffect';
import styles from './styles';
export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const login = () => {
    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    let validemail = emailPattern.test(email)
    if (!validemail) {
      return setEmailError("Please Enter a valid email")
    }
    if (password.length == 0) {
      return setPasswordError("Please Enter Password")
    }
  }

  useChangeEffect(() => {
    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    let validemail = emailPattern.test(email)
    if (!validemail) {
      setEmailError("Please Enter a valid email")
    } else {
      setEmailError(null)
    }
  }, [email])

  useChangeEffect(() => {
    if (password.length == 0) {
      setPasswordError("Please Enter Password")
    } else {
      setPasswordError(null)
    }
  }, [password])
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
            {emailError && <Text style={[styles.text, { color: "red" }]}>{emailError}</Text>}
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
            {passwordError && <Text style={[styles.text, { color: "red" }]}>{passwordError}</Text>}
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
          <View style={[styles.center, { marginLeft: 10 }]}>
            <Text style={[styles.text]}>Remember me</Text>
          </View>

        </View>
        <View style={[styles.textInputContainer]}>
          <TouchableOpacity style={[styles.loginButton, styles.boxWithShadow]}
            onPress={login}
          >
            <Text style={[styles.text, { color: "#3585E4" }]}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.center, { marginTop: 15 }]}>
          <Text style={[styles.text]}>-OR-</Text>
        </View>
        <View style={[styles.center, { marginTop: 15 }]}>
          <Text style={[styles.text, { fontSize: 12, fontWeight: "bold" }]}>Sign in with</Text>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Image
              style={{ height: 40, width: 40 }}
              source={{ uri: "https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png" }}

            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image
              style={{ height: 40, width: 40 }}
              source={{ uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" }}

            />
          </TouchableOpacity>
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


