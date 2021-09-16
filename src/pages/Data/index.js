import React, { useState } from "react";
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
import { Formik } from "formik";
import { PENDONOR } from "../../config/api";
import Axios from 'axios'
import qs from 'qs'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Data(props) {
  const [number, onChangeNumber] = React.useState(null);
  const [pekerjaan, setPekerjaan] = React.useState([
    { label: 'PNS', value: 'pns', checked: false },
    { label: 'Swasta', value: 'swasta', checked: false },
    { label: 'Polri', value: 'polri', checked: false },
    { label: 'Petani', value: 'petani', checked: false },
    { label: 'BUMN', value: 'bumn', checked: false },
    { label: 'Pelajar', value: 'pelajar', checked: false },
    { label: 'Wirausaha', value: 'wirausaha', checked: false },
    { label: 'Lain-lain', value: 'lain-lain', checked: false },
  ])
  const [gologanDarah, setGolonganDarah] = React.useState([
    { label: 'A', value: 'A', checked: false },
    { label: 'B', value: 'B', checked: false },
    { label: 'O', value: 'O', checked: false },
    { label: 'AB', value: 'AB', checked: false },
    { label: 'Tidak Tahu', value: 'X', checked: false },
  ])
  const [rhesus, setRhesus] = React.useState([
    { label: 'Positif', value: '+', checked: false },
    { label: 'Negatif', value: '-', checked: false },
    { label: 'Tidak Tahu', value: 'X', checked: false },
  ])
  const [input] = useState({
    pekerjaan : '',
    golongan_darah: '',
    rhesus : '',
  })
  const pekerjaanHandler = (index) => {
    const newValue = pekerjaan.map((checkbox, i) => {
     if (i !== index)
       return {
         ...checkbox,
         checked: false,
       }
     if (i === index) {
       const item = {
         ...checkbox,
         checked: !checkbox.checked,
       }
       input.pekerjaan = checkbox.value
       return item
     }
    return checkbox
  })
  setPekerjaan(newValue)
  }
  const golonganDarahHandler = (index) => {
    const newValue = gologanDarah.map((checkbox, i) => {
     if (i !== index)
       return {
         ...checkbox,
         checked: false,
       }
     if (i === index) {
       const item = {
         ...checkbox,
         checked: !checkbox.checked,
       }
       input.golongan_darah = checkbox.value
       return item
     }
    return checkbox
  })
  setGolonganDarah(newValue)
  }

  const rhesusHandler = (index) => {
    const newValue = rhesus.map((checkbox, i) => {
     if (i !== index)
       return {
         ...checkbox,
         checked: false,
       }
     if (i === index) {
       const item = {
         ...checkbox,
         checked: !checkbox.checked,
       }
       input.rhesus = checkbox.value
       return item
     }
    return checkbox
  })
  setRhesus(newValue)
  }

  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
    }
}

function sleepThenAct(){
    sleepFor(1000);
    console.log("Hello, JavaScript sleep!");
}
  const submitData = (value) => {
    var data = props.route.params.payload
    async function submit() {
      const token = await AsyncStorage.getItem('token')
      const status_menikah = await AsyncStorage.getItem('status_menikah')
      const tempat_lahir = await AsyncStorage.getItem('tempat_lahir')
      const tanggal_lahir = await AsyncStorage.getItem('tanggal_lahir')
      // sleepThenAct()
      const url = PENDONOR;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        };
        const body = {
            ktp: data.ktp,
            nama: data.nama,
            alamat: data.alamat,
            kelurahan: data.kelurahan,
            kecamatan: data.kecamatan,
            wilayah: data.wilayah,
            nomor_telepon_wa: data.nomor_telepon_wa,
            berat_badan: value.bb,
            jenis_donor: 'biasa',
            tempat_lahir: tempat_lahir,
            tanggal_lahir: tanggal_lahir,
            pekerjaan: input.pekerjaan,
            golongan_darah: input.golongan_darah,
            rhesus: input.rhesus,
            status_menikah: status_menikah,
        };
        console.log(body)
        Axios.post(`${url}/api/simaba/calon-pendonor/create`, qs.stringify(body), {
            headers,
        })
            .then(res => {
              console.log(res.data)
                if (res.data.code === 200) {
                    alert(
                        'sukses mendaftar sebagai calon pendonor, silahkan isi kuesioner',
                    );
                    AsyncStorage.setItem('kode_calon_pendonor', res.data.kode_pendonor) 
                    props.navigation.replace('Kuisioner');
                } else {
                    console.log('Error', res.data.message);
                    alert('cek kembali inputan Anda');
                }
            })
            .catch(err => {
                alert('semua form harus diisi')
                console.log('test : ', err);
            });
    }
    submit()
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
                Daftar
              </Text>
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 25,fontWeight: "bold",  color: "black" }}>
                Donor Darah Biasa
              </Text>
               <Text style={{ marginLeft:30, marginTop:30,fontSize: 15,fontWeight: "bold", color: "black" }}>
                Pekerjaan (Pilih salah satu)
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
              <View>
              {pekerjaan.map((checkbox, i) => {
                if (i < pekerjaan.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => pekerjaanHandler(i)}
                    key={i}
                  /> 
                }
              })
                  }
              </View>
              <View>
              {pekerjaan.map((checkbox, i) => {
                if (i >= pekerjaan.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => pekerjaanHandler(i)}
                    key={i}
                  /> 
                }
              })}
              </View>
              </View>

               <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black", textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
   }}>
                Golongan Darah
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
              <View>
              {gologanDarah.map((checkbox, i) => {
                if (i < gologanDarah.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => golonganDarahHandler(i)}
                    key={i}
                  /> 
                }
              })
                  }
                  </View>
                  <View>
              {gologanDarah.map((checkbox, i) => {
                if (i >= gologanDarah.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => golonganDarahHandler(i)}
                    key={i}
                  /> 
                }
              })}
              </View>
              </View>
              <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black" , textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,}}>
                Rhesus
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
              <View>
              {rhesus.map((checkbox, i) => {
                if (i < rhesus.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => rhesusHandler(i)}
                    key={i}
                  /> 
                }
              })
                  }
                  </View>
                  <View>
              {rhesus.map((checkbox, i) => {
                if (i >= rhesus.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => rhesusHandler(i)}
                    key={i}
                  /> 
                }
              })}
              </View>             
              </View>
              <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Berat badan (Pilih)
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {''} ≥45 kg (Apabila kurang dari tidak lolos)
        </Text>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:30,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'DonorBiasa')} >
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
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Kuisioner')} >
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

export default Data;