import React, { Component } from "react";
import { Alert, ImageBackground, Image, Text, View,TextInput } from "react-native";
import { CheckBox } from 'react-native-elements';
import {
  Container,
  Header,
  Title,
  Left,
   HStack,
 Item,
  Card,
  Input,
} from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/baground3.jpeg'
import { Button } from "react-native-elements/dist/buttons/Button";


function Kegiatan(props) {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
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
          top:10,
          margin:20,
    
          left:10,
        }}
      ></Image>
      <Image
        source={require("../image/Logo2.png")}
        style={{
          position:'absolute',
          width: 54,
          height: 60,
          margin:20,
       
          right:10,
          top:10,
        }}
      ></Image>
      <ScrollView>
     
  
     
        <Text style={{ marginLeft:100, marginTop:100,fontSize: 35,fontWeight: "bold",  color: "black" }}>
                Ganti Pasword
              </Text>
              

                 
              <Text
          style={{
            marginLeft: 30,
            marginTop: 90,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Pasword Lama
        </Text>
        <Item style={styles.item}>
        <Input
          style={styles.input}
          onChangeText={onChangeNumber}
          secureTextEntry={true}
   
        />
        </Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Pasword Baru
        </Text>
        <Item style={styles.item}>
        <Input
          style={styles.input}
          onChangeText={onChangeNumber}
          secureTextEntry={true}
   
        />
        </Item>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:65,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%",marginLeft:"2%"
            }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, '')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20, textAlign:'center',

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
          
 </ScrollView>
    </Container>
  );
}

export default Kegiatan;