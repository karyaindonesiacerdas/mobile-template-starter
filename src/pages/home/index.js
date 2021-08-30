import React, { Component } from "react";
import { Alert, ImageBackground, Image, Text, View } from "react-native";
import {
  Container,
  Card,
  button,
} from "native-base";
import {TouchableOpacity} from 'react-native'
import {Formik} from 'formik';
//from "react-native-gesture-handler";
import styles from "../styles/styles";
import * as Yup from 'yup';
// import {authLogin} from '../../../config/api';
import Bg from '../image/Baground2.jpg'

function Home(props) {
  // const mutation = useMutation(authRegister, {
    //     onSettled: (data, error, variables, context) => {
    //         Toast.show({
    //             text: data.message,
    //             type: data.type,
    //             duration: 2000,
    //             buttonText: 'Okay',
    //         });
    //         if (data?.code == 200) {
    //             AsyncStorage.setItem('token', data.data);
    //             setTimeout(() => {
    //                 props.navigation.replace('HomeApp');
    //             }, 2000);
    //             return;
    //         }
    //     },
    // });
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
  
     
        <Text style={{ marginLeft:20, marginTop:30,fontSize: 35,fontWeight: "bold",  color: "black" }}>
                Persyaratan & Pendaftaran
              </Text>

        <Text style={{ marginLeft:130,marginBottom:20, marginTop:50,fontSize: 25,fontWeight: "bold",  color: "black" }}>
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
              <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'KegiatanDonor')} >
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                    color:"white",
                  }}
                >
                  Biasa {'\n'}
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
              <View
            style={{
              marginTop:30,
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
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
                  Permintaan {'\n'} Darah
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
            <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:250,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Login')} >
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
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'KegiatanDonor')} >
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
    </Container>
  );
}

export default Home;