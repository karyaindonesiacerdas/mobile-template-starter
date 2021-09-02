import React, { Component } from "react";
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
import { Button } from "react-native-elements/dist/buttons/Button";


function Kegiatan(props) {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
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
                Kegiatan
              </Text>
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 25,fontWeight: "bold",  color: "black" }}>
                Donor Darah
              </Text>

                 
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
          Instansi / Koordinator Donor
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Alamat Tempat Donor
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Nama Koordinator
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          No.Telp
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Target
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Kriteria Pelaksanaan Donor
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text style={{
            marginLeft: 30,
            marginTop:20,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
            Waktu Pelaksanaan
        </Text>
        <View style={{
          marginTop:0,marginLeft:30,marginRight:70, flexDirection: "row",justifyContent: "center",
          alignContent: "center",
          }}>
                <View style={{}}>
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
            alignContent:"space-around"
          }}
        >
          Hari
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        </View>
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
            alignContent:"space-around"
          }}
        >
          Tanggal
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        </View>
        
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
            alignContent:"space-around"
          }}
        >
          Waktu
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        </View>
        </View>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 16,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
            alignContent:"space-around"
          }}
        >
          Upload Surat Permohonan
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:15,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Home')} >
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
                Kirim
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
          
 </ScrollView>
    </Container>
  );
}

export default Kegiatan;