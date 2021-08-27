import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
  },
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
});

export default styles;
