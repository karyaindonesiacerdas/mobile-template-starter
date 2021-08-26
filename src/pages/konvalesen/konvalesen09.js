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
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import styles from "./styles";

function index() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <Container>
      <Image
        source={require("../../asset/logoUDD.png")}
        style={{
          width: 54,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../../asset/logoSehat.png")}
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
          Donor Darah Konvalesen
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
          SELAMAT{'\n'}ANDA LOLOS SEBAGAI{'\n'}CALON DONOR
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
          <TouchableOpacity>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Selanjutnya
            </Text>
          </TouchableOpacity>
        </Card>

      
      </ScrollView>

      <ImageBackground
        // resizeMethod={'auto'}
        source={require("../../asset/footer.png")}
        style={{
          width: "100%",

          backgroundColor: "#fff",
          padding: 0,
          paddingVertical: 90,
          position: "absolute",
          zIndex: -1,
          bottom: 0,
        }}
        imageStyle={{
          resizeMode: "cover",
          alignSelf: "flex-end",
        }}
      ></ImageBackground>
    </Container>
  );
}

export default index;
