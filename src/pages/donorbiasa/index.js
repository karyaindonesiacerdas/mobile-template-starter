import React, { Component, useState } from "react";
import { Alert, ImageBackground, Image, Text, View,TextInput } from "react-native";
import { CheckBox } from 'react-native-elements';
import {
  Container,
  Header,
  Title,
  Left,
   HStack,
  Input,
  Card,
  Item,

} from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/Baground2.jpg'
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";


function DonorBiasa(props) {
  const [ktp, setKtp] = useState('')
  const [nama, setNama] = useState('')
  const refactorInput = (value)=>{
    value.ktp = ktp
    value.nama = nama
    props.navigation.replace('Data', {payload: value})
  }
  const goNextPage = (page) => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  async function getDataId(){
    const ktp_str = await AsyncStorage.getItem('ktp')
    const nama_str = await AsyncStorage.getItem('nama')
    setKtp(ktp_str)
    setNama(nama_str)
  }
  getDataId()
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
                Daftar
              </Text>
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 25,fontWeight: "bold",  color: "black" }}>
                Donor Darah Biasa
              </Text>
              <Formik 
                initialValues={{
                        ktp:'',
                        nama:'',
                        alamat:'',
                        kelurahan:'',
                        kecamatan:'',
                        wilayah:'',
                        nomor_telepon_wa:'',
                    }}
                    onSubmit={value => {
                        refactorInput(value);
                    }}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                    }) => (
                      <View>
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
          No.KTP
        </Text>
          <Item>
        <Input
          style={styles.input}
          onChangeText={handleChange('ktp')}
          onBlur={handleBlur('ktp')}
          value={ktp}
        />
        </Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Nama Lengkap
        </Text>
        <Item>
        <Input
          style={styles.input}
          onChangeText={handleChange('nama')}
          onBlur={handleBlur('nama')}
          value={nama?.toLowerCase()}
        />
        </Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Alamat Lengkap
        </Text>
          <Item>
        <Input
          style={styles.input}
          onChangeText={handleChange('alamat')}
          onBlur={handleBlur('alamat')}
          value={values.alamat.toLowerCase()}
        /></Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Kelurahan
        </Text>
          <Item>
        <Input
          style={styles.input}
          onChangeText={handleChange('kelurahan')}
          onBlur={handleBlur('kelurahan')}
          value={values.kelurahan.toLowerCase()}
        />
        </Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Kecamatan
        </Text>
          <Item>
        <Input
          style={styles.input}
          onChangeText={handleChange('kecamatan')}
          onBlur={handleBlur('kecamatan')}
          value={values.kecamatan.toLowerCase()}
        />
        </Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Kab/Kota
        </Text>
        <Item>
        <Input
          style={styles.input}
          onChangeText={handleChange('wilayah')}
          onBlur={handleBlur('wilayah')}
          value={values.wilayah.toLowerCase()}
        />
        </Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 16,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
            alignContent:"space-around"
          }}
        >
          No.Telp
        </Text>
          <Item>
        <Input
          style={styles.input}
          onChangeText={handleChange('nomor_telepon_wa')}
          onBlur={handleBlur('nomor_telepon_wa')}
          value={values.nomor_telepon_wa}
        />  
        </Item>
        <View
        style={{
          alignContent: "center",

          flexDirection: "row",
          justifyContent: "center",
            alignContent: "center",
            marginTop:150,
          
        }}>
        <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'KegiatanDonor')} >
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
            <TouchableOpacity onPress={handleSubmit}>
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
        </View>
        )}
        </Formik>
    </ScrollView>
    </Container>
  );
}

export default DonorBiasa;
