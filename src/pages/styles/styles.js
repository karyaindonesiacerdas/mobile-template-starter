import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
  },

  iconSize: {
    color: "#006C9B",
    fontSize: 22,
  },
  header: {
    borderBottomWidth: 1,
    shadowColor: "#d4d4d4",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    elevation: 3,
    backgroundColor: "#fff",
    paddingLeft: "3%",
  },

  imageSizeIklan: {
    width: "100%",
    height: 330,
    paddingTop: "70%",
    resizeMode: "cover",
    flex: 1,
  },

  top: {
    backgroundColor: "#333",
    // height: 300,
    // height: '100%',
  },
  wrapIklan: {
    width: "100%",
  },
  footerStyle: {
    borderTopWidth: 0.5,
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    elevation: 3,
    backgroundColor: "#fff",
  },
  footerTabStyle: {
    borderBottomWidth: 0.5,
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    elevation: 3,
    backgroundColor: "#fff",
  },
  imageStyle: {
    marginTop: 15,
    width: 60,
    height: 60,
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 15,
  },
  imageStyle1: {
    marginTop: 15,
    width: 60,
    height: 60,
    marginBottom: 15,
    alignSelf: "center",
  },
  cardStyle: {
    backgroundColor: "red",
    marginTop: 10,
    borderRadius: 10,
    width: "40%",
  
    marginLeft: "3%",
    marginRight: "3%",
    flexDirection: "column",
    justifyContent: "center",
  },
  separator: {
    height: 90,
    width: 1,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    backgroundColor: "#fff",
  },
  conferenceCard: {
    backgroundColor: "#006C9B",
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
  },
   descriptionPersyaratan: {
    marginLeft:30, marginTop:0,fontSize: 15, color: "black",
  },
  input: {
    height: 40,
    
    marginRight: 30,
    marginLeft: 30,
    backgroundColor:'#bebebe',
  
    padding: 10,
  },
});

export default styles;
