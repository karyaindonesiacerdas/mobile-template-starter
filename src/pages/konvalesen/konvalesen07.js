import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { CheckBox } from 'react-native-elements';
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
  TouchableOpacity,
} from "react-native-gesture-handler";
import styles from "./styles";

function index() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
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

            textAlign: 'justify',
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Saya telah mendapatkan dan membaca semua informasi
yang diberikan serta menjawab pertanyaan dengan jujur.
Saya mengerti dan bersedia menyumbangkan darah dengan
volume sesuai standar yang diberlakukan dan setuju diambil
contoh darahnya untuk keperluan pemeriksaan
laboratorium berupa uji golongan darah, HIV, Hepatitis B,
hepatitis C, Sifilis dan infeksi lainnya yang diperlukan saya
serta untuk kepentingan penelitian. Bila ternyata hasil
pemeriksaan laboratorium perlu ditindaklanjuti, maka saya
setuju untuk diberikan kabar tertulis.
{'\n'}Jika komponen plasma tidak terpakai untuk transfusi, saya
setuju dapat dijadikan produk plasma untuk pengobatan.
        </Text>
         <View style={{marginTop:20,marginLeft:40,marginRight:40, flexDirection: "row",justifyContent: "center", }}>
                <View style={{}}>
           
                 <CheckBox title='Setuju' checked={check1}
        onPress={() => setCheck1(!check1)}  style={{width:"70%",  }}  />
                <CheckBox title='Tidak Setuju' style={{width:"70%",  }} checked={check2}
        onPress={() => setCheck2(!check2)}   />
               
                </View>
               
                     
               
              </View>

       


        <Card
          style={{
            backgroundColor: "#000",
            marginTop: 30,
            marginBottom: 20,
            width: "86%",
            marginLeft: "7%",
          }}
        >
          <TouchableOpacity>
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

export default index;
