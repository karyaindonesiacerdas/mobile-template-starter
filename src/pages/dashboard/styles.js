import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoUDD: {
    width: 54,
    height: 60,
    top: 10,
    margin: 20,

    left: 10,
  },
  logoSehat: {
    width: 54,
    position: "absolute",
    width: 54,
    height: 60,
    margin: 20,
    right: 10,
    top: 10,
  },

  ImageAtas: {
    marginTop: 10,
    width: 100,
    height: 70,
    alignSelf: "center",
  },
  viewAtas: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 15,
    width: "80%",
    alignSelf: "center",
  },
  textAtas: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  textTengah: {
    margin: 10,
    fontSize: 14,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  cardTengah: {
    backgroundColor: "#e60013",
    width: 120,
    borderRadius: 10,
    margin: "2%",
  },
  textBawah: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  cardStyle: {
    margin: 5,
    borderRadius: 10,
    width: 120,
    height: 100,
    backgroundColor: "#fff",
    elevation: 2, // Android shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  imageBackgroundStyle: {
    width: "100%",
    zIndex: -1,
    backgroundColor: "#fff",
    padding: 0,
    paddingVertical: 90,
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
