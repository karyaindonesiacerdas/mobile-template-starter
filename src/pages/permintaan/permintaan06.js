import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Container, Header, Title, Left, HStack, Card } from "native-base";
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
           
          }}
        >
          Permintaan
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: -10,
            fontSize: 35,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Darah
        </Text>
       

       
        <Text
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 15,
            fontWeight:'bold',
        
            color: "black",
          }}
        >
          STATUS TRANSAKSI
        </Text>

       
          <View
          style={{
            marginTop: 10,
            marginLeft: 40,
            marginRight: 40,
         
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
    

            <CheckBox title="Permohonan Permintaan" style={{ width: "90%" }} />
            <CheckBox title="Permintaan darah disetujui" style={{ width: "90%" }} />
            <CheckBox title="Menunggu formulir permintaan darah
dan contoh darah pasien" style={{ width: "90%" }} />
            <CheckBox title="Transaksi selesai" style={{ width: "90%" }} />
  
          
          </View>

          
        </View>
      
 
      

       
     
      </ScrollView>
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
              backgroundColor: "#000",width: "40%", marginRight:"2%" ,marginBottom:20}}
          >
            <TouchableOpacity
            >
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
          <View
            style={{
              width: "40%",marginLeft:"2%"
            }}
          >
            
          </View>
        </View>

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
