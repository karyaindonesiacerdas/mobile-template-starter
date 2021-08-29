import React, { Component } from "react";
import { Alert, ImageBackground, Image, Text, View,TouchableOpacity, } from "react-native";
import {
  Container,
  Card,
} from "native-base";
import {
  ScrollView,
  TouchableWithoutFeedback,

} from "react-native-gesture-handler";

import styles from "./styles";

function index(props) {
  const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };

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

   <ScrollView>
     <Text
          style={{
            marginLeft: 30,
            marginTop: 25,
            fontSize: 35,
            fontWeight: "bold",
           
          }}
        >
          Alur 
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: -10,
            fontSize: 35,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Donor Darah
        </Text>

              <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              marginTop:20,
            }}
          >

            <Card style={styles.cardStyle}>
              <TouchableOpacity onPress={goNextPage.bind(this, 'Alur02')}>
         
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
              <TouchableOpacity onPress={goNextPage.bind(this, 'Alur03')}>
               
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
              <TouchableOpacity onPress={goNextPage.bind(this, 'Alur04')}>
         
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
              <TouchableOpacity onPress={goNextPage.bind(this, 'Alur04')}>
               
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
  
  
    marginTop:20,
    width: "86%",marginLeft:"7%"}}>
              <TouchableOpacity onPress={goNextPage.bind(this, 'Alur05')}>
               
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
             
             <Card style={{ backgroundColor: "#000",
  
  
    marginTop:5,
    width: "86%",marginLeft:"7%"}}>
              <TouchableOpacity onPress={goNextPage.bind(this, 'Alur06')}>
               
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    color:"white",
                    fontWeight: "bold",
                  }}
                >
                  Konseling Donor Darah
                </Text>
               
              </TouchableOpacity >
            </Card>
         
           
  </ScrollView>
    <View
          style={{
           

            flexDirection: "row",
            justifyContent: "center",
           
       
              bottom: 10,
              position:'absolute',
              
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity onPress={goNextPage.bind(this, 'Dashboard')}
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
          <View
            style={{
              width: "40%",marginLeft:"5%"
            }}
          >
           
          </View>
        </View>
  
 
               
             <ImageBackground
  // resizeMethod={'auto'}
  source={require("../../asset/footer.png")}
  style={{
    width: "100%", zIndex: -1,

  
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
