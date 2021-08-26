import React, { Component } from "react";
import { Alert, ImageBackground, Image, Text, View } from "react-native";
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
  return (
    <Container>
      
      <Image
        source={require("../../asset/logoUDD.png")}
        style={{
          width: 54,
          height: 60,
          top:10,
          margin:20,
    
          left:10,
        }}
      ></Image>
      <Image
        source={require("../../asset/logoSehat.png")}
        style={{
          position:'absolute',
          width: 54,
          height: 60,
          margin:20,
       
          right:10,
          top:10,
        }}
      ></Image>
     
  
     
        <Text style={{ marginLeft:30, marginTop:25,fontSize: 35,fontWeight: "bold",  color: "red" }}>
                Daftar
              </Text>
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 25,fontWeight: "bold",  color: "black" }}>
                Donor Darah Konvalesen
              </Text>
              <Text style={{ marginLeft:30, marginTop:20,fontSize: 17,fontWeight: "bold",  color: "black" }}>
                PERSYARATAN
              </Text>

        <Text style={{ marginLeft:30, marginTop:10,fontSize: 15, color: "black" }}>
                1. Sehat, tidak sedang flu, batuk/demam/pusing
              </Text>
               <Text style={styles.descriptionPersyaratan}>
                2. Usia minimal 17 th s.d. 60 th
              </Text>
              <Text style={styles.descriptionPersyaratan}>
                3. Berat badan ≥ 45 Kg
              </Text>
                <Text style={{marginLeft:40,fontSize: 15, color: "black"}}>
                a. Obat antibiotik jenis apapun
              </Text>
                <Text style={{marginLeft:40,fontSize: 15, color: "black"}}>
                b. Obat tertentu (konsultasikan dengan dokter atau petugas)
              </Text>
              <Text style={styles.descriptionPersyaratan}>
                4. Kadar Hemoglobin 12,5 sd 17,0 g/dl
              </Text>
              <Text style={styles.descriptionPersyaratan}>
                5. Cukup istirahat (tidur minimal 4 jam)
              </Text>
              <Text style={styles.descriptionPersyaratan}>
                6.  Interval donor
              </Text>
               <Text style={{marginLeft:40,fontSize: 15,  color: "black"}}>
                b. Metode apheresis adalah 14 hari
              </Text>
                <Text style={{marginLeft:40,fontSize: 15,  color: "black"}}>
                a. Metode konvesional adalah ≥ 60 hari
              </Text>
              <Text style={{marginLeft:30,fontSize: 15, color: "black"}}>
                7. Donor perempuan, tidak sedang hamil, menyusui
              </Text>
             
        
            
              
             

              


           <Card style={{ backgroundColor: "#000", marginTop:40,
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
                  DAFTAR
                </Text>
               
              </TouchableOpacity>
            </Card>
          

               
             <ImageBackground
  // resizeMethod={'auto'}
  source={require("../../asset/footer.png")}
  style={{
    width: "100%",

  
    backgroundColor:'#fff',
    padding: 0,
    paddingVertical: 90,
    position: 'absolute',
    zIndex:-1,
  bottom:0
  }}
  imageStyle={{
    resizeMode: "cover",
    alignSelf: "flex-end"
  }}
>
  
</ImageBackground>
       
     
     
    </Container>
  );
}

export default index;
