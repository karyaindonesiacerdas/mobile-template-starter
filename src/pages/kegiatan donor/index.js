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

function  KegiatanDonor(props) {
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
          width: 60,
          height: 60,
          margin:20,
       
          right:10,
          top:10,
        }}
      ></Image>
  
     
        <Text style={{ marginLeft:30, marginTop:30,fontSize: 30,fontWeight: "bold",  color: "black" }}>
                Persyaratan & Pendaftaran
              </Text>

        <Text style={{ marginLeft:30,marginBottom:20, marginTop:50,fontSize: 25,fontWeight: "bold",  color: "black" }}>
                DONOR DARAH
              </Text>
              <Text style={{ marginLeft:30,marginBottom:20, marginTop:0,fontSize: 15,fontWeight: "normal",  color: "black" }}>
                1.Sehat,tidak sedang flu,batuk/demam/pusing{'\n'}
                2.Usia maksimal 17 th s.d. 60 th {'\n'}
                3.Berat badan ≥45 Kg{'\n'}
                {'   '}a.Obat anti biotik apapun{'\n'}
                {'   '}b.Obat tertentu (konsultasikan dengan dokter atau petugas){'\n'}
                4.Kadar Hemoglobin 12,5 sd 17,0 g/dl{'\n'}
                5.Cukup istirahat (Tidur minimal 4 jam){'\n'}
                6.Interval Donor{'\n'}
                {'    '}a.Metode Konvesional adalah ≥60 hari{'\n'}
                {'    '}b.Metode apheresis adalah 14 hari{'\n'}
                7.Donor perempuan,sedang tidak hamil,Menyusui 
              </Text>
              
              <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >

            <Card style={styles.cardStyle}>
              <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'DonorBiasa')} >
                <Text
                  style={{
                    margin:10,
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                    color:"white",
                  }}
                >
                  DAFTAR
                </Text>
              </TouchableOpacity>
            </Card>
             </View>
           

               
            
       
     
     
    </Container>
  );
}

export default KegiatanDonor;