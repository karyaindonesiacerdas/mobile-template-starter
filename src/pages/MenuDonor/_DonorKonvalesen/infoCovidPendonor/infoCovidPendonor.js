import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,TouchableOpacity,
} from "react-native";
import {
  Container,
  Item,
  Picker,
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
  
} from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "../../../styles/styles";
import DocumentPicker from 'react-native-document-picker';
import { API } from '../../../../config/api';
import Axios from 'axios';
import qs from 'qs';
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

function infoCovidPendonor(props) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [berat_badan, setBeratBadan] = React.useState('0');
  const [positif_file, setPositif_file] = useState('');
  const [negative_file, setNegative_file] = useState('');
  const [positif_date, setPositif_date] = useState('');
  const [negative_date, setNegative_date] = useState('');
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [date, setDate] = useState(new Date())
  // const setInputData = params =>{
  //   input.alamat = params.payload.alamat
  //   input.jenis_donor = params.payload.jenis_donor
  //   input.ktp = params.payload.ktp
  //   input.nama = params.payload.nama
  //   input.nomor_telepon = params.payload.nomor_telepon
  //   input.wilayah = params.payload.wilayah
  //   input.kecamatan = params.payload.kecamatan
  //   input.kelurahan = params.payload.kelurahan
  //   input.pekerjaan = params.payload.pekerjaan
  //   input.golongan_darah = params.payload.golongan_darah
  //   input.rhesus = params.payload.rhesus
  // }

  async function submitData (value) {
    
    value.positif_date = positif_date
    value.tanggal_sembuh = negative_date
    value.hasil_positif_lab = positif_file
    value.hasil_negatif_lab = negative_file
    console.log("+" + positif_file)
    console.log("-" + negative_file)
    
    const body = new FormData();
    for (var key in value){
      body.append(key,value[key])
    }
    console.log(body)
    props.navigation.navigate('kuisonerKonvalesen',{data_calon_donor : body});
  }

  const goNextPage = (page) => {
    if (page == 'kuisonerKonvalesen') {
      // setInputData(props.route.params.data_calon_donor)
      submitData(props.route.params.data_calon_donor)
    }
  };

  const selectPositifFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res[0].uri);
      console.log('Type : ' + res[0].type);
      console.log('File Name : ' + res[0].name);
      console.log('File Size : ' + res[0].size);

      //Setting the state to show single file attributes
      const img = {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name
      }
      setPositif_file(img);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const selectNegativeFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res[0].uri);
      console.log('Type : ' + res[0].type);
      console.log('File Name : ' + res[0].name);
      console.log('File Size : ' + res[0].size);
      //Setting the state to show single file attributes
      const img2 = {
        uri: res[0].uri,
        type: res[0].type,
        name: res[0].name
      }
      setNegative_file(img2);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <Container>
      <Image
        source={require("../../../../asset/logoUDD.png")}
        style={{
          width: 54,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../../../../asset/logoSehat.png")}
        style={{
          position: "absolute",
          width: 54,
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
            marginTop: 25,
            fontSize: 35,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Daftar
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: -10,
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Donor Darah Konvalesen
        </Text>
        
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "bold",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Tanggal Positif
        </Text>
        <DatePicker
          modal
          mode='date'
          open={open}
          date={date}
          onConfirm={(date) => {
          setOpen(false)
          
          setPositif_date(moment(date).format('YYYY-MM-DD').toString())
              }}
              onCancel={() => {
              setOpen(false)
              }}
          />
         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",
            color: "black",
            marginTop: 0,
          }}
          onPressIn = {() => setOpen(true)}
          onChangeText={date => setPositif_date(date)}
          placeholder="(Contoh : 2021-01-01)"
          value = {positif_date}
        />
        
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#DDDDDD',
            padding: 5,
            marginTop :10,
            marginLeft: 30,
            marginRight: 30}}
          onPress={selectPositifFile}>
          {/*Single file selection button*/}
          <Text style={{
            marginLeft:0,
            marginRight: 15,
            marginTop: 0,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}>
             Upload hasil SWAB Positf
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <Text style={{
            marginLeft: 30,
            marginTop: 0,
            marginBottom : 0,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}>
           {positif_file.name ? positif_file.name : ''}
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "bold",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Tanggal Negatif / Sembuh:
        </Text>
        <DatePicker
          modal
          mode='date'
          open={open2}
          date={date}
          onConfirm={(date) => {
          setOpen2(false)
          
          setNegative_date(moment(date).format('YYYY-MM-DD').toString())
              }}
              onCancel={() => {
              setOpen2(false)
              }}
          />
         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",
            color:'black',
            marginTop: 0,
          }}
          onChangeText={date => setNegative_date(date)}
          placeholder="(Contoh : 2021-01-01)"
          onPressIn = {() => setOpen2(true)}
          value = {negative_date}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#DDDDDD',
            padding: 5,
            marginTop :10,
            marginLeft: 30,
            marginRight: 30}}
          onPress={selectNegativeFile}>
          {/*Single file selection button*/}
          <Text style={{
            marginLeft:0,
            marginRight: 15,
            marginTop: 0,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}>
             Upload hasil SWAB Negatif
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <Text style={{
            marginLeft: 30,
            marginTop: 0,
            marginBottom : 0,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}>
           {negative_file.name ? negative_file.name : ''}
        </Text>
        
        <Text
         style={{
           marginLeft: 30,
           marginTop: 20,
           marginBottom : 0,
           fontSize: 15,
           color: "black",
           fontWeight: "bold",
           textShadowColor: "#fff",
           textShadowOffset: { width: 1, height: 1 },
           textShadowRadius: 10,
         }}
       >
         {' <14 hari dari negatif atau sembuh lolos'} 
       </Text>
          <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            marginBottom : 0,
            fontSize: 15,
            color: "black",
            fontWeight: "bold",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {' ≥14 hari dari negatif atau sembuh tidak lolos'} 
        </Text>
         <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 180,
            marginBottom: 10,
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",
              width: "40%",
              marginRight: "2%",
            }}
          >
            <TouchableOpacity onPress={goNextPage.bind(this, "infoPendonorKonv")}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,

                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Kembali
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "#000",
              width: "40%",
              marginLeft: "2%",
            }}
          >
            <TouchableOpacity onPress={goNextPage.bind(this, "kuisonerKonvalesen")}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
                  textAlign: "center",

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

      <ImageBackground
        // resizeMethod={'auto'}
        source={require("../../../../asset/footer.png")}
        style={{
          width: "100%",

          backgroundColor: "#fff",
          padding: 0,
          paddingVertical: 90,
          position: "absolute",
          zIndex: -1,
          bottom: 0,
        }}
        imageStyle={{
          resizeMode: "cover",
          alignSelf: "flex-end",
        }}
      ></ImageBackground>
    </Container>
  );
}

export default infoCovidPendonor;

