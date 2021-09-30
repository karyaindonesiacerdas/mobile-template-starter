import React, { useState,useEffect } from "react";
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
  Card,

} from "native-base";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/baground3.jpeg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PENDONOR } from '../../config/api';
import Axios from 'axios';

function Barcode(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  
  useEffect(() => {
    Axios.get(`${url}/api/simaba/pendonor/qr`, body,
    {headers:{
        Authorization :'Bearer ' +token,
        'Content-Type': 'application/json',
      }})
        .then(res => {
            console.info('res.data', res.data);
            console.log(res.data);
            if (res.data.code === 200) {
                alert('sukses update jadwal');
                props.navigation.replace('Barcode');
            } else {
                console.log('Error', res.data.message);
            }
        })
        .catch(err => {
            console.log('test : ', err.response);
        });
  }, []);

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
          width: 55,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../image/Logo2.png")}
        style={{
          position: "absolute",
          width: 58,
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
            marginTop: 0,
            fontSize: 35,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Gedung UDD
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            marginBottom: 10,
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
          }}
        >
          PMI Kota Semarang
        </Text>
         <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold",

            textAlign: "center",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          ANDA TERDAFTAR SEBAGAI CALON DONOR{'\n'} DI UDD PMI KOTA SEMARANG{'\n'}SILAKAN KUNJUNGI UDD PMI KOTA SEMARANG
        </Text>
         <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            fontSize: 15,
 

            textAlign: "center",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Scan barcode untuk cetak formulir donor
        </Text>
        <Image
        source={require("../image/barcode.png")}
        style={{
        
          width: 250,
          height: 250,
          margin: 20,
          alignSelf:'center',

          
        }}
      ></Image>

       
        <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
      
            fontSize: 15,
            marginTop:20,
 

            textAlign: "center",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Keterangan :{'\n'}Berlaku 24 jam{'\n'}(Terinformasi masa berlaku)
        </Text>
        


        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:140,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Kalender')} >
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
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Dashboard')} >
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

    </Container>
  );
}

export default Barcode;
