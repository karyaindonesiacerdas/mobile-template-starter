import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements";
import {
  Container,
  Card,
} from "native-base";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/Baground2.jpg'

function Pilih(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  return (
    <Container>
         <Image source={Bg} style={{width: '100%', height: '100%', position: 'absolute'}} />
      <Image
        source={require("../image/logo.png")}
        style={{
          width: 54,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../image/Logo2.png")}
        style={{
          position: "absolute",
          width: 54,
          height: 60,
          margin: 20,

          right: 10,
          top: 10,
        }}
      ></Image>
      <Card style={{ backgroundColor: "brown",
  
  
  marginTop:40,
  width: "86%",marginLeft:"7%"}}>
            <TouchableOpacity>
             
              <Text
                style={{
                  margin:10,
                  fontSize: 20,
                  textAlign: "center",
                  color:"white",
                  fontWeight: "bold",
                }}
              >
                Gedung UDD PMI Kota semarang
              </Text>
             
            </TouchableOpacity>
          </Card>
          <Card style={{ backgroundColor: "brown",
  
  
  marginTop:40,
  width: "86%",marginLeft:"7%"}}>
            <TouchableOpacity>
             
              <Text
                style={{
                  margin:10,
                  fontSize: 20,
                  textAlign: "center",
                  color:"white",
                  fontWeight: "bold",
                }}
              >
                Mobil Unit Terdekat
              </Text>
             
            </TouchableOpacity>
          </Card>
          <Card style={{ backgroundColor: "brown",
  
  
  marginTop:40,
  width: "86%",marginLeft:"7%"}}>
            <TouchableOpacity>
             
              <Text
                style={{
                  margin:10,
                  fontSize: 20,
                  textAlign: "center",
                  color:"white",
                  fontWeight: "bold",
                }}
              >
                Tempatmu
              </Text>
             
            </TouchableOpacity>
          </Card>
    </Container>
  );
}

export default Pilih;
