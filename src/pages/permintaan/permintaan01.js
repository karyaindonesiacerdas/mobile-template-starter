import React, { Component } from "react";
import { Alert, ImageBackground, Image, Text, View } from "react-native";
import {
  Container,
  Card,
} from "native-base";
import {
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
  
     
        <Text style={{ marginLeft:30, marginTop:30,fontSize: 30,fontWeight: "bold",  color: "black" }}>
                Persyaratan {'\n'}& Pendaftaran
              </Text>

        <Text style={{ marginLeft:30, marginTop:40,fontSize: 15,fontWeight: "bold",  color: "black" }}>
                DONOR DARAH
              </Text>

              <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >

            <Card style={styles.cardStyle}>
              <TouchableOpacity >
         
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                    color:"white",
                  }}
                >
                  Biasa
                </Text>
               
              </TouchableOpacity>
            </Card>
            <Card style={styles.cardStyle}>
              <TouchableOpacity>
               
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                    color:"white",
                  }}
                >
                  Plasma{'\n'} Konvalesen
                </Text>
               
              </TouchableOpacity>
            </Card>
          </View>

           <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold",  color: "black" }}>
                PERMINTAAN DARAH
              </Text>

              <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >

            <Card style={styles.cardStyle}>
              <TouchableOpacity >
         
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                    color:"white",
                  }}
                >
                  Rumah{'\n'} Sakit
                </Text>
               
              </TouchableOpacity>
            </Card>
            <Card style={styles.cardStyle}>
              <TouchableOpacity>
               
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    color:"white",
                    fontWeight: "bold",
                  }}
                >
                  Mandiri
                </Text>
               
              </TouchableOpacity>
            </Card>
            
          </View>

           <Card style={{ backgroundColor: "#000",
  
  
    marginTop:40,
    width: "86%",marginLeft:"7%"}}>
              <TouchableOpacity>
               
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    color:"white",
                    fontWeight: "bold",
                  }}
                >
                  Mengadakan Kegiatan Donor Darah
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
