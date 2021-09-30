import React, { useState } from "react";
import { Alert, ImageBackground, Image, Text, View,TextInput  ,Input} from "react-native";
import { CheckBox } from 'react-native-elements';
import {
  Container,
  Header,
  Title,
  Left,
   HStack,
 Item,
 Picker,
  Card,
  
} from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/baground3.jpeg'
import { Formik } from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PENDONOR } from '../../config/api';
import Axios from 'axios';
import qs from 'qs';

function Data(props) {
  const [number, onChangeNumber] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState();
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
    jenis_donor : '',
    ktp : '',
    nama : '',
    nomor_telepon : '',
    wilayah : '',
    kecamatan : '',
    kelurahan : '',
    alamat : '',
    pekerjaan : '',
    golongan_darah: '',
    rhesus : '',
    berat_badan : '',
    jenis_kelamin : '',
    tanggal_lahir : '',
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
    if (page === 'DonorBiasa') {
      props.navigation.goBack()
    }else if (page === 'Kuisioner'){
      setInputData(props.route.params)
      submitData(input)
    }
  }
  
  const setInputData = params =>{
    input.alamat = params.payload.alamat
    input.jenis_donor = 'biasa'
    input.ktp = params.payload.ktp
    input.nama = params.payload.nama
    input.nomor_telepon = params.payload.nomor_telepon
    input.wilayah = params.payload.wilayah
    input.kecamatan = params.payload.kecamatan
    input.kelurahan = params.payload.kelurahan
    
  }
  async function submitData (value) {
    const token = await AsyncStorage.getItem('token');
    const tanggal_lahir = await AsyncStorage.getItem('tanggal_lahir');
    const jenis_kelamin = await AsyncStorage.getItem('jenis_kelamin');
    const url = PENDONOR;
    value.tanggal_lahir = tanggal_lahir
    value.jenis_kelamin = jenis_kelamin
    value.berat_badan = 60
    const body = value;
    console.log(body)
    Axios.post(`${url}/api/simaba/calon-pendonor/create`, qs.stringify(body),
    {headers:{
      Authorization :'Bearer ' +token,
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
    .then(res => {
        console.info('res.data', res.data);
        console.log(res.data);
        if (res.data.code === 200) {
            alert('sukses menambahkan pendonor');
            AsyncStorage.setItem('kode_pendonor',res.data.kode_pendonor);
            props.navigation.navigate('Kuisioner',{kode_pendonor : res.data.kode_pendonor});
        } else {
            console.log('Error', res.data.message);
        }
    })
    .catch(err => {
        console.log('test : ', err);
    });

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
        <Item style={styles.item}>
        <Picker
        style={styles.input}
            onChangeText={onChangeNumber}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
              <Picker.Item label="0" value="0" />
              <Picker.Item label="25" value="1" />
              <Picker.Item label="26" value="2" />
              <Picker.Item label="27" value="3" />
              <Picker.Item label="28" value="4" />
              <Picker.Item label="29" value="5" />
              <Picker.Item label="30" value="6" />
              <Picker.Item label="31" value="7" />
              <Picker.Item label="32" value="8" />
              <Picker.Item label="33" value="9" />
              <Picker.Item label="34" value="10" />
              <Picker.Item label="35" value="11" />
              <Picker.Item label="36" value="12" />
              <Picker.Item label="37" value="13" />
              <Picker.Item label="38" value="14" />
              <Picker.Item label="39" value="15" />
              <Picker.Item label="40" value="16" />
              <Picker.Item label="41" value="17" />
              <Picker.Item label="42" value="18" />
              <Picker.Item label="43" value="19" />
              <Picker.Item label="44" value="20" />
              <Picker.Item label="45" value="21" />
              <Picker.Item label="46" value="22" />
              <Picker.Item label="47" value="23" />
              <Picker.Item label="48" value="24" />
              <Picker.Item label="49" value="25" />
              <Picker.Item label="50" value="26" />
              <Picker.Item label="51" value="27" />
              <Picker.Item label="52" value="28" />
              <Picker.Item label="53" value="29" />
              <Picker.Item label="54" value="30" />
              <Picker.Item label="55" value="31" />
              <Picker.Item label="56" value="32" />
              <Picker.Item label="57" value="33" />
              <Picker.Item label="58" value="34" />
              <Picker.Item label="59" value="35" />
              <Picker.Item label="60" value="36" />
              <Picker.Item label="61" value="37" />
              <Picker.Item label="62" value="38" />
              <Picker.Item label="63" value="39" />
              <Picker.Item label="64" value="40" />
              <Picker.Item label="65" value="41" />
              <Picker.Item label="66" value="42" />
              <Picker.Item label="67" value="43" />
              <Picker.Item label="68" value="44" />
              <Picker.Item label="69" value="45" />
              <Picker.Item label="70" value="46" />
              <Picker.Item label="71" value="47" />
              <Picker.Item label="72" value="48" />
              <Picker.Item label="73" value="49" />
              <Picker.Item label="74" value="50" />
              <Picker.Item label="75" value="51" />
              <Picker.Item label="76" value="52" />
              <Picker.Item label="77" value="53" />
              <Picker.Item label="78" value="54" />
              <Picker.Item label="79" value="55" />
              <Picker.Item label="80" value="56" />
              <Picker.Item label="81" value="57" />
              <Picker.Item label="82" value="58" />
              <Picker.Item label="83" value="59" />
              <Picker.Item label="84" value="60" />
              <Picker.Item label="85" value="61" />
              <Picker.Item label="86" value="62" />
              <Picker.Item label="87" value="63" />
              <Picker.Item label="88" value="64" />
              <Picker.Item label="89" value="65" />
              <Picker.Item label="90" value="66" />
              <Picker.Item label="91" value="67" />
              <Picker.Item label="92" value="68" />
              <Picker.Item label="93" value="69" />
              <Picker.Item label="94" value="70" />
              <Picker.Item label="95" value="71" />
              <Picker.Item label="96" value="72" />
        </Picker>
        </Item>
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