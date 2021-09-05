import React, { useState } from "react";
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
import Bg from '../../image/Baground2.jpg'

function Barcode2(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
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
          Mobil Unit
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            marginBottom: 10,
            fontSize: 35,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Terdekat
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
          ANDA TERDAFTAR SEBAGAI CALON DONOR DI
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 0,
            fontSize: 15,
            fontWeight: "bold",

            textAlign: "center",
            color: "red",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          NAMA LOKASI MOBILE UNIT
        </Text>
        <View style={{
          marginTop:0,marginLeft:30,marginRight:70, flexDirection: "row",justifyContent: "center",
          alignContent: "center",
          }}>
                <View style={{}}>
                <Text
          style={{
            marginLeft: 30,
            marginRight: 3,
            marginTop: 0,
            fontSize: 15,
            fontWeight: "bold",

            textAlign: "center",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          SILAKAN KUNJUNGI
        </Text>
                    </View>
                    <View>
                    <Text
          style={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            fontSize: 15,
            fontWeight: "bold",

            textAlign: "center",
            color: "red",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          NAMA LOKASI MOBILE UNIT
        </Text>
                    </View>
                </View>
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
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'table')} >
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

export default Barcode2;
