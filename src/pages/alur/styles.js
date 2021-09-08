import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
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
  headerText1: {
    marginLeft: 30,
    marginTop: 25,
    fontSize: 35,
    fontWeight: "bold",
  },
  headerText2: {
    marginLeft: 30,
    marginTop: -10,
    fontSize: 35,
    fontWeight: "bold",
    color: "red",
  },
  descriptionPersyaratan: {
    marginLeft: 30,
    marginTop: 0,
    fontSize: 15,
    color: "black",
  },
  input: {
    height: 40,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#bebebe",
    padding: 10,
  },
  input1: {
    height: 40,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#bebebe",
    paddingTop: 20,
  },
  checkbox: {
    marginTop: 0,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoUDD: {
    width: 54,
    height: 60,
    top: 10,
    margin: 20,
    left: 10,
  },
  logoSehat: {
    position: "absolute",
    width: 54,
    height: 60,
    margin: 20,
    right: 10,
    top: 10,
  },
  textInCard: {
    margin: 10,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
   textInCards2: {
    margin: 10,
    fontSize: 15,
    color: "white",
  },
  textInCards3: {
    margin: 20,
    fontSize: 15,
    color: "black",
  },
   textInCards4: {
    fontSize: 15,
    color: "black",
  },
   textInCards5: {
    fontSize: 15,
    color: "black",
    marginRight:5,
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
  viewBackForward: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 10,
    position: "absolute",
  },
  viewBackForward2: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
    bottom: 10,
  },
  viewContainer: {
    alignContent: "center",
    marginRight: "5%",
    marginLeft: "5%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "5%",
  },
   viewContainer2: {
     width:'100%',
    alignContent: "center",
    marginRight: "5%",
    marginLeft: "5%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "5%",
  },
  flowCardRed: { backgroundColor: "#da251c", borderRadius: 10 },
  flowCardMarroon: { backgroundColor: "#70282b", borderRadius: 10,zIndex:1 },
  flowCardPeach: { backgroundColor: "#fbe0d5", borderRadius: 10, marginTop:-20 },
});

export default styles;
