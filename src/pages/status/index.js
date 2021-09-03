import React, { Component } from "react";
import { Alert, ImageBackground, Image, Text, View,TextInput } from "react-native";
import { CheckBox } from 'react-native-elements';
import {
  Container,
  Header,
  Title,
  Left,
   HStack,
 
  Card,
  
} from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/Baground2.jpg'
import { Button } from "react-native-elements/dist/buttons/Button";


function Status(props) {
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
     
  
     
        <Text style={{ marginLeft:30, marginTop:0,fontSize: 35,fontWeight: "bold",  color: "red" }}>
                Gedung UDD
              </Text>
              <Text style={{ marginLeft:30, marginTop:0,fontSize: 25,fontWeight: "bold",  color: "black" }}>
                PMI Kota Semarang
              </Text>

               <Text style={{ marginLeft:30, marginTop:30,fontSize: 15,fontWeight: "bold", color: "black" }}>
                STATUS TRANSAKSI :
              </Text>
            

            

              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{}}><CheckBox title='Lulus Pendaftaran Awal' style={{width:"70%" }}   />
                 <CheckBox title='Pendaftaran Donor' style={{width:"70%" }}   />
                </View>             
               
              </View>
              <View style={{marginTop:0,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent:"flex-start" }}>
              <CheckBox title='Status Donor :' style={{width:"70%" }}   />
                <View style={{marginLeft:40,}}>
                <CheckBox title='Berhasil' style={{width:"70%" }}   />
                 <CheckBox title='Gagal' style={{width:"70%" }}   />
           
                </View>             
               
              </View>
              <View
          style={{
            alignContent: "center",
            marginLeft:30,
            flexDirection: "row",
            justifyContent: "flex-start",
              alignContent: "center",
              marginTop:350,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Barcode')} >
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
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Dashboard')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
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

export default Status;