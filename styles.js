import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get("screen").height
const { height, width } = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    height: screenHeight

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
    height: "90%",
    justifyContent: "center"
  },
  footer: {
    height: "10%",
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
    alignSelf: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    paddingHorizontal: width * 0.1,
    marginTop: 5
  },
  loginButton: {
    width: width * 0.8,
    height: height * 0.06,
    backgroundColor: "#fff",
    borderRadius: height * 0.03,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  socialContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }
});

export default styles;