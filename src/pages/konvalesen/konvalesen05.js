import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
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
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
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

        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Berat badan (Pilih)
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {'>'} 45 kg (Apabila kurang dari tidak lolos)
        </Text>

        <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 20,
          }}
          onChangeText={onChangeNumber}
          placeholder="Berat Badan > 55 kg (Apabila kurang dari tidak lolos)"
      
        />

         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 10,
          }}
          onChangeText={onChangeNumber}
          placeholder="Upload hasil SWAB Positf"
      
        />
         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 10,
          }}
          onChangeText={onChangeNumber}
          placeholder="Tanggal Positif"
    
        
        />
         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 10,
          }}
          onChangeText={onChangeNumber}
          placeholder="Upload hasil SWAB Negatif"
       
       
        />
         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 10,
          }}
          onChangeText={onChangeNumber}
          placeholder="Tanggal negatif / sembuh"
  
      
        />

         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 10,
          }}
          onChangeText={onChangeNumber}
          placeholder=">14 hari dari negatif atau sembuh lolos"
          value={number}
       
        />
             <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 10,
          }}
          onChangeText={onChangeNumber}
          placeholder="<14 hari dari negatif atau sembuh tidak lolos"
          value={number}
         
        />


        <Card
          style={{
            backgroundColor: "#000",
            marginTop: 40,
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
