import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import {
  Container,
  Header,
  Title,
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
import styles from "../../../konvalesen/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../../config/api';
import Axios from 'axios';
import AwesomeLoading from 'react-native-awesome-loading';


function agrementKonvalesen(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [loading, setLoading] = useState(false);

  const goNextPage = (page) => {
    if (check1) {
      submit_donor()
      // props.navigation.navigate('agrementKonvalesen',{kode_pendonor : kode_calon_pendonor});
    }
    else {
      Alert.alert("Warning","Centang Informed Consent Donor Konvalesen Terlebih Dahulu",
              [{ text: "OK", onPress: () => console.log('Pressed') }]
              )
    }
  };

  async function submit_donor(input) {
    setLoading(true)
    const token = await AsyncStorage.getItem('token');
    const nama = await AsyncStorage.getItem('nama');
    const data_calon_donor = props.route.params.data_calon_donor
    const kuisoner_calon_donor = props.route.params.kuisoner_calon_donor

    const ktp = await AsyncStorage.getItem('ktp');
    
    Axios.post(`${API}/pendonor/calon-pendonor/create`, data_calon_donor,
        {headers:{
            Authorization :'Bearer ' +token,
            'Content-Type': 'multipart/form-data; boundary=${body._boundary}',
        }})
    .then(res => {
        // stop
        if (res.data.code === 200) {
            AsyncStorage.setItem('kode_pendonor',res.data.kode_pendonor);
            kuisoner_calon_donor.kode_calon_pendonor = res.data.kode_pendonor;
            kuisoner_calon_donor.ktp = ktp;
            kuisoner_calon_donor.nama = nama;
            const body = kuisoner_calon_donor;
            console.log(body);
            Axios.post(`${API}/kuesioner-ic/create`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                  setLoading(false)
                    console.info('res.data kuisoner', res.data);
                    console.log(res.data.code);
                    if (res.data.code === 200) {
                      setLoading(false)
                        props.navigation.navigate('admKonvalesenResult', {transaksi : res.data.transaksi});
                    } else {
                        Alert.alert("Error",res.data.message,
                        [{ text: "OK", onPress: () => console.log(res.data.message) }]
                        )
                    }
                })
                .catch(err => {
                    setLoading(false)
                    Alert.alert("Error","Session Berakhir Silahkan Login Kembali",
                    [{ text: "OK", onPress: () => props.navigation.navigate('Dashboard') }]
                    )
                });
        } else if (res.data.code === 500){
            setLoading(false)
            Alert.alert("Gagal","Anda Sudah Mendaftar Donor Hari Ini, Cek Halaman Riwayat  ",
            [{ text: "Cek Riwayat", onPress: () => props.navigation.replace('Riwayat') }]
            )
        } else if (res.data.code === 400){
            setLoading(false)
            Alert.alert("Gagal","Silahkan Lengkapi Halaman Profile Anda  ",
            [{ text: "Cek Inbox", onPress: () => props.navigation.replace('EditProfil') }]
           )
        } else {
          setLoading(false)
          Alert.alert("Error","Silahkan Coba Kembali",
          [{ text: "OK", onPress: () => props.navigation.navigate('Dashboard') }]
          )
        }
    })
    .catch(err => {
      setLoading(false)
        alert(err)  
      Alert.alert("Error","Session Berakhir Silahkan Login Kembali",
        [{ text: "OK", onPress: () => props.navigation.navigate('Dashboard') }]
        )
    });
    // setLoading(false)
}

  return (
    <Container>
          <AwesomeLoading indicatorId={18} size={50} isActive={loading} text="loading.." />

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
          Informed Consent
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
            marginRight: 30,
            marginTop: 20,
            fontSize: 15,

            textAlign: "justify",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Saya telah mendapatkan dan membaca semua informasi yang diberikan
          serta menjawab pertanyaan dengan jujur. Saya mengerti dan bersedia
          menyumbangkan darah dengan volume sesuai standar yang diberlakukan dan
          setuju diambil contoh darahnya untuk keperluan pemeriksaan
          laboratorium berupa uji golongan darah, HIV, Hepatitis B, hepatitis C,
          Sifilis dan infeksi lainnya yang diperlukan saya serta untuk
          kepentingan penelitian. Bila ternyata hasil pemeriksaan laboratorium
          perlu ditindaklanjuti, maka saya setuju untuk diberikan kabar
          tertulis.
          {"\n"}Jika komponen plasma tidak terpakai untuk transfusi, saya setuju
          dapat dijadikan produk plasma untuk pengobatan.
        </Text>
        <View
          style={{
            marginTop: 20,
            marginLeft: 40,
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={{}}>
            <CheckBox
              title="Setuju"
              checked={check1}
              onPress={() => setCheck1(!check1)}
              style={{ width: "70%" }}
            />
          </View>
        </View>

        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",
              width: "40%",
              marginLeft: "2%",
            }}
          >
            <TouchableOpacity onPress={goNextPage.bind(this, "admKonvalesenResult")}>
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

export default agrementKonvalesen;
