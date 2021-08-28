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
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
//import styles from "./styles";

function Data(props) {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <Container>
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
     
  
     
        <Text style={{ marginLeft:30, marginTop:25,fontSize: 35,fontWeight: "bold",  color: "red" }}>
                Daftar
              </Text>
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 25,fontWeight: "bold",  color: "black" }}>
                Donor Darah Biasa
              </Text>

                 <Text style={{ marginLeft:30, marginTop:0,fontSize: 15, color: "black" }}>
                Tempat dan Tanggal Lahir (update otomatis) apabila usia kurang dari 17 tahun tidak lolos (otomatis)
              </Text>
               <Text style={{ marginLeft:30, marginTop:30,fontSize: 15,fontWeight: "bold", color: "black" }}>
                Pekerjaan (Pilih salah satu)
              </Text>
            

            

              <View style={{marginTop:10,marginLeft:40,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{}}><CheckBox title='PNS' style={{width:"70%" }}   />
           
                 <CheckBox title='Swasta' style={{width:"70%" }}   />
                <CheckBox title='Polri' style={{width:"70%" }}   />
                <CheckBox title='Petani' style={{width:"70%" }}   />
                </View>
               
                <View><CheckBox title='BUMN' style={{width:"70%" }}   />
                <CheckBox title='Pelajar' style={{width:"70%" }}   />
                <CheckBox title='Wirausaha' style={{width:"70%" }}   />
                <CheckBox title='Lain-lain' style={{width:"70%" }}   />
                </View>             
               
              </View>

               <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black", textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
   }}>
                Golongan Darah
              </Text>
          

            

              <View style={{marginTop:10,marginLeft:40,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{}}><CheckBox title='A' style={{width:"70%" }}   />
           
                 <CheckBox title='B' style={{width:"70%" }}   />
                <CheckBox title='O' style={{width:"70%" }}   />
               
                </View>
               
                <View><CheckBox title='AB' style={{width:"70%" }}   />
                <CheckBox title='X (Tidak tahu)' style={{width:"70%" }}   />
           
                </View>             
               
              </View>

               <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black" , textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,}}>
                Rhesus
              </Text>
            

            

              <View style={{marginTop:10,marginLeft:40,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{}}>
           
                 <CheckBox title='Positif' style={{width:"70%" }}   />
                <CheckBox title='X (Tidak Tahu)' style={{width:"70%" }}   />
               
                </View>
               
                <View><CheckBox title='Negatif' style={{width:"70%" }}   />
            
           
                </View>             
               
              </View>
<Card style={{ backgroundColor: "#000", marginTop:40, marginBottom:20,
    width: "86%",marginLeft:"7%"}}>
              <TouchableOpacity>
               
                <Text
                  style={{
                    margin:10,
                    fontSize: 20,
                    textAlign: "center",
                    color:"white",
                    fontWeight: "bold",
                  }}
                >
                  Selanjutnya
                </Text>
               
              </TouchableOpacity>
            </Card>
          
 </ScrollView>
    </Container>
  );
}

export default Data;