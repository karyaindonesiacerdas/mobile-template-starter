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

import styles from "../styles/styles";
import DocumentPicker from 'react-native-document-picker';
import { PENDONOR } from '../../config/api';
import Axios from 'axios';
import qs from 'qs';

function Konvalesen05(props) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [berat_badan, setBeratBadan] = React.useState('0');
  const [positif_file, setPositif_file] = useState('');
  const [negative_file, setNegative_file] = useState('');
  const [positif_date, setPositif_date] = useState('');
  const [negative_date, setNegative_date] = useState('');
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

  const setInputData = params =>{
    input.alamat = params.payload.alamat
    input.jenis_donor = params.payload.jenis_donor
    input.ktp = params.payload.ktp
    input.nama = params.payload.nama
    input.nomor_telepon = params.payload.nomor_telepon
    input.wilayah = params.payload.wilayah
    input.kecamatan = params.payload.kecamatan
    input.kelurahan = params.payload.kelurahan
    input.pekerjaan = params.payload.pekerjaan
    input.golongan_darah = params.payload.golongan_darah
    input.rhesus = params.payload.rhesus
  }

  async function submitData (value) {
    const token = await AsyncStorage.getItem('token');
    const tanggal_lahir = await AsyncStorage.getItem('tanggal_lahir');
    const jenis_kelamin = await AsyncStorage.getItem('jenis_kelamin');
    const url = PENDONOR;
    
    value.tanggal_lahir = tanggal_lahir
    value.jenis_kelamin = jenis_kelamin
    value.berat_badan = berat_badan
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
    Axios.post(`${url}/api/simaba/calon-pendonor/create`, body,
    {headers:{
      Authorization :'Bearer ' +token,
      'Content-Type': 'multipart/form-data; boundary=${body._boundary}',
    }})
    .then(res => {
        console.info('res.data', res.data);
        console.log(res.data);
        if (res.data.code === 200) {
            alert('sukses menambahkan pendonor');
            AsyncStorage.setItem('kode_pendonor',res.data.kode_pendonor);
            props.navigation.navigate('Konvalesen06',{kode_pendonor : res.data.kode_pendonor});
        } else {
            console.log('Error', res.data.message);
        }
    })
    .catch(err => {
        console.log('test : ', err);
    });

  }

  const goNextPage = (page) => {
    if (page == 'Konvalesen06') {
      setInputData(props.route.params)
      submitData(input)
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
        source={require("../../asset/logoUDD.png")}
        style={{
          width: 54,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../../asset/logoSehat.png")}
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
            selectedValue={berat_badan}
            onValueChange={(itemValue, itemIndex) =>
              setBeratBadan(itemValue)
            }>
              <Picker.Item label="0" value="0" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="26" value="26" />
              <Picker.Item label="27" value="27" />
              <Picker.Item label="28" value="28" />
              <Picker.Item label="29" value="29" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="31" value="31" />
              <Picker.Item label="32" value="32" />
              <Picker.Item label="33" value="33" />
              <Picker.Item label="34" value="34" />
              <Picker.Item label="35" value="35" />
              <Picker.Item label="36" value="36" />
              <Picker.Item label="37" value="37" />
              <Picker.Item label="38" value="38" />
              <Picker.Item label="39" value="39" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="41" value="41" />
              <Picker.Item label="42" value="42" />
              <Picker.Item label="43" value="43" />
              <Picker.Item label="44" value="44" />
              <Picker.Item label="45" value="45" />
              <Picker.Item label="46" value="46" />
              <Picker.Item label="47" value="47" />
              <Picker.Item label="48" value="48" />
              <Picker.Item label="49" value="49" />
              <Picker.Item label="50" value="50" />
              <Picker.Item label="51" value="51" />
              <Picker.Item label="52" value="52" />
              <Picker.Item label="53" value="53" />
              <Picker.Item label="54" value="54" />
              <Picker.Item label="55" value="55" />
              <Picker.Item label="56" value="56" />
              <Picker.Item label="57" value="57" />
              <Picker.Item label="58" value="58" />
              <Picker.Item label="59" value="59" />
              <Picker.Item label="60" value="60" />
              <Picker.Item label="61" value="61" />
              <Picker.Item label="62" value="62" />
              <Picker.Item label="63" value="63" />
              <Picker.Item label="64" value="64" />
              <Picker.Item label="65" value="65" />
              <Picker.Item label="66" value="66" />
              <Picker.Item label="67" value="67" />
              <Picker.Item label="68" value="68" />
              <Picker.Item label="69" value="69" />
              <Picker.Item label="70" value="70" />
              <Picker.Item label="71" value="71" />
              <Picker.Item label="72" value="72" />
              <Picker.Item label="73" value="73" />
              <Picker.Item label="74" value="74" />
              <Picker.Item label="75" value="75" />
              <Picker.Item label="76" value="76" />
              <Picker.Item label="77" value="77" />
              <Picker.Item label="78" value="78" />
              <Picker.Item label="79" value="79" />
              <Picker.Item label="80" value="80" />
              <Picker.Item label="81" value="81" />
              <Picker.Item label="82" value="82" />
              <Picker.Item label="83" value="83" />
              <Picker.Item label="84" value="84" />
              <Picker.Item label="85" value="85" />
              <Picker.Item label="86" value="86" />
              <Picker.Item label="87" value="87" />
              <Picker.Item label="88" value="88" />
              <Picker.Item label="89" value="89" />
              <Picker.Item label="90" value="90" />
              <Picker.Item label="91" value="91" />
              <Picker.Item label="92" value="92" />
              <Picker.Item label="93" value="93" />
              <Picker.Item label="94" value="94" />
              <Picker.Item label="95" value="95" />
              <Picker.Item label="96" value="96" />
        </Picker>
        </Item>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            marginBottom : 10,
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
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
          Tanggal Positif
        </Text>
         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 0,
          }}
          onChangeText={date => setPositif_date(date)}
          placeholder="(Contoh : 2021-01-01)"
    
        
        />
        
                 <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
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
         <TextInput
          style={{
            height: 40,

            marginRight: 30,
            marginLeft: 30,
            backgroundColor: "#bebebe",

            marginTop: 0,
          }}
          onChangeText={date => setNegative_date(date)}
          placeholder="(Contoh : 2021-01-01)"
  

        />
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
            <TouchableOpacity onPress={goNextPage.bind(this, "Konvalesen04")}>
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
            <TouchableOpacity onPress={goNextPage.bind(this, "Konvalesen06")}>
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
        source={require("../../asset/footer.png")}
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

export default Konvalesen05;

