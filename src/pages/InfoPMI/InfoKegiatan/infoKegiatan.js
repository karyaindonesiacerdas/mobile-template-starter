import React, {useState,useEffect} from 'react';
import {
    Container,
    Card,
    Item,
    Input,
    Spinner,
    Toast,
    ListItem,
    CheckBox,
    Body,
    Button,
    View,
    Text,
} from 'native-base';
import {useMutation} from 'react-query';
import {Formik} from 'formik';
import {Alert, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import Bg from '../../image/Baground2.jpg';
import qs from 'qs';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_MANAGEMENT} from '../../../config/api';
import QRCode from "react-qr-code";

function InfoKegiatan(props) {
  const [qr , setQr] = useState(null)
  const [kartudonor,setKartu] = useState()
  const [nama,setNama] = useState()

  useEffect(() => {
    async function getData() {
      const token = await AsyncStorage.getItem('token')
      const kartudonor = await AsyncStorage.getItem('kartudonor')
      const nama = await AsyncStorage.getItem('nama')
      
      console.log(kartudonor)
      if (kartudonor){
        setNama(nama)
        setKartu(kartudonor)
        setQr(
          <View
            style={{
              alignContent: "center",

              flexDirection: "row",
              justifyContent: "center",
                alignContent: "center",
                marginTop:30,
                marginBottom:15,
              
            }}
          >
          <QRCode
          size = {200}
          value= {kartudonor}
        />
        </View>
        )    
      }else{
        const body = {
          email: '',
        };
        Axios.post(`${USER_MANAGEMENT}/simaba`, body, {
          headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
          },
        })
          .then(res => {
            const data_kartu = res.data.data[0]['KODEPENDONOR']
            const data_nama = res.data.data[0]['nama']
            setNama(data_nama)
            setKartu(data_kartu)

              setQr(
                <View
                  style={{
                    alignContent: "center",

                    flexDirection: "row",
                    justifyContent: "center",
                      alignContent: "center",
                      marginTop:10,
                      marginBottom:15,
                    
                  }}
                >
                <QRCode
                size = {200}
                value= {data_kartu}
              />
              </View>
              )    
          })
          .catch(err => {
              console.log('test : ', err.response);
          });
    }}
    getData()
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
        source={require("../../image/logo.png")}
        style={{
          width: 55,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../../image/Logo2.png")}
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
            marginTop: 0,
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Kartu Anggota
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 0,
            marginBottom: 30,
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
            marginTop: 5,
            fontSize: 20,
            fontWeight: "bold",

            textAlign: "center",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {kartudonor}
        </Text>
      {qr}
      <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 5,
            fontSize: 20,
            fontWeight: "bold",

            textAlign: "center",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {nama}
        </Text>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:100,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Dashboard')} >
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Dashboard
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>

    </Container>
  );
}

export default InfoKegiatan;
