import React, { Component } from "react";
import { Alert, ImageBackground, Image, Text, View,TextInput } from "react-native";
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
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <Container>
      
      <Image
        source={require("../../asset/logoUDD.png")}
        style={{
          width: 54,
          height: 60,
          top:10,
          margin:20,
    
          left:10,
        }}
      ></Image>
      <Image
        source={require("../../asset/logoSehat.png")}
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

                 <Text style={{ marginLeft:30, marginTop:20,fontSize: 15, color: "black" }}>
                No. KTP
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
         <Text style={{ marginLeft:30, marginTop:10,fontSize: 15, color: "black" }}>
                Nama Lengkap
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        
      />
       <Text style={{ marginLeft:30, marginTop:10,fontSize: 15, color: "black" }}>
                Alamat Lengkap
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        
      />
       <Text style={{ marginLeft:30, marginTop:10,fontSize: 15, color: "black" }}>
                Kelurahan (Pilih)
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        
      />
       <Text style={{ marginLeft:30, marginTop:10,fontSize: 15, color: "black" }}>
                Kecamatan (Pilih)
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        
      />
       <Text style={{ marginLeft:30, marginTop:10,fontSize: 15, color: "black" }}>
                Kab / Kota (Pilih)
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        
      />
       <Text style={{ marginLeft:30, marginTop:10,fontSize: 15, color: "black" }}>
                No. Telp.
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
        
      />
      

             
             
        
            
              
            

              


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
               
             <ImageBackground
  // resizeMethod={'auto'}
  source={require("../../asset/footer.png")}
  style={{
    width: "100%",

  
    backgroundColor:'#fff',
    padding: 0,
    paddingVertical: 90,
    position: 'absolute',
    zIndex:-1,
  bottom:0
  }}
  imageStyle={{
    resizeMode: "cover",
    alignSelf: "flex-end"
  }}
>
  
</ImageBackground>
       
     
     
    </Container>
  );
}

export default index;
