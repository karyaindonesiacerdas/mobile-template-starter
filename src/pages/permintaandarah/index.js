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
import { Button } from "react-native-elements/dist/buttons/Button";


function PermintaanDarah(props) {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [check14, setCheck14] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check16, setCheck16] = useState(false);
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
     
  
     
        <Text style={{ marginLeft:30, marginTop:0,fontSize: 35,fontWeight: "bold",  color: "black" }}>
                Permintaan
              </Text>
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 30,fontWeight: "bold",  color: "red" }}>
                Darah
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
          Permintaan Darah
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
          Tanggal Permintaan
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
          Nama Pasien
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
          Rumah Sakit
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
          Jenis Kelamin
        </Text>
        <View style={{marginTop:10,marginLeft:30,marginRight:60, flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{}}><CheckBox title='Laki-Laki' style={{width:"70%" }}checked={check9}
              onPress={() => setCheck9(!check9)}  />
               
                </View>
               
                <View><CheckBox title='Perempuan' style={{width:"70%" }}checked={check12}
              onPress={() => setCheck12(!check12)}   />
           
                </View>             
               
              </View>
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
          No.Rekam Medis
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black", textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
   }}>
                Golongan Darah
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:100, flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{}}><CheckBox title='A' style={{width:"70%" }}checked={check1}
              onPress={() => setCheck1(!check1)}  />
           
                 <CheckBox title='B' style={{width:"70%" }} checked={check2}
              onPress={() => setCheck2(!check2)}   />
               
                </View>
               
                <View><CheckBox title='AB' style={{width:"70%" }}checked={check3}
              onPress={() => setCheck3(!check3)}   />
              
              <CheckBox title='O' style={{width:"70%" }} checked={check11}
              onPress={() => setCheck11(!check11)}  />
           
                </View>             
               
              </View>
              <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black" , textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,}}>
                Rhesus
              </Text>
            

            

              <View style={{marginTop:10,marginLeft:30,marginRight:70, flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{}}>
           
                 <CheckBox title='Positif' style={{width:"70%" }}  checked={check14}
              onPress={() => setCheck14(!check14)} />
               
                </View>
               
                <View><CheckBox title='Negatif' style={{width:"70%" }} checked={check16}
              onPress={() => setCheck16(!check16)}  />
            
           
                </View>             
              </View>
        
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:80,
            
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
                  Selanjutnya
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
          
 </ScrollView>
    </Container>
  );
}

export default PermintaanDarah;