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
  Header,
  Title,
  Left,
  Right,
  Button,
  Body,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Icon,
} from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/Baground2.jpg'

function Berhasil(props) {
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
      <ScrollView>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 25,
            fontSize: 35,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Daftar
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: -10,
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Donor Darah Biasa
        </Text>
          <Card
          style={{
            backgroundColor: "#70282b",
            marginTop: 50,
            marginBottom: 20,
            width: "86%",
            marginLeft: "7%",
          }}
        >
           <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
         
            marginTop: 20,
            marginBottom: 20,
            fontSize: 20,
            fontWeight:'bold',

            textAlign: "center",
            color: "white",
      
          }}
        >
          SELAMAT{'\n'}ANDA LOLOS SEBAGAI{'\n'}CALON PENDONOR
        </Text>
          
        </Card>

        <Card
          style={{
            backgroundColor: "#000",
            marginTop: 30,
            marginBottom: 20,
            width: "86%",
            marginLeft: "7%",
          }}
        >
          </Card>
          <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:370,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Data')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Kembali
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "#000",width: "40%",marginLeft:"2%"
            }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Pilih')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20, textAlign:'center',

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Selanjutnya
              </Text>
            </TouchableOpacity>
          </Card>
        </View>

      
      </ScrollView>
    </Container>
  );
}

export default Berhasil;
