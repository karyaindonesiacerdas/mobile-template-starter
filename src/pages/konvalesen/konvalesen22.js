import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Container, Header, Title, Left, HStack, Card } from "native-base";
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
          Tempatmu
        </Text>
         <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            color: "black",
         
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Ketik Alamat
        </Text>

        <TextInput
          style={{
            height: 80,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            
          }}
          onChangeText={onChangeNumber}
     
      
        />


       
       

        <Image
        source={{
          uri: 'https://www.howtogeek.com/wp-content/uploads/2021/01/google-maps-satellite.png?height=200p&trim=2,2,2,2',
        }}
        style={{
        
          width: 200,
          height: 100,
          marginTop: 20,
          marginBottom: 20,
          alignSelf:'center',

          
        }}
      ></Image>
       <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            fontSize: 15,
            color: "black",
         
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Pilih Alamat
        </Text>

        <TextInput
          style={{
            height: 80,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            
          }}
          onChangeText={onChangeNumber}
     
      
        />

      

      

       
     
         <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:30,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity
            >
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
            <TouchableOpacity>
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
