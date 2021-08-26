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
        
            color: "black",
          }}
        >
          Produk
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
             <CheckBox title="Whole Blood (WB) Biasa" style={{ width: "90%" }} />

            <CheckBox title="Whole Blood (WB) Segar" style={{ width: "90%" }} />
            <CheckBox title="Packed Red Cell (PRC) Biasa" style={{ width: "90%" }} />
            <CheckBox title="Packed Red Cell (PRC) Leukodepleted" style={{ width: "90%" }} />
            <CheckBox title="Packed Red Cell (PRC) Pediatric Leukodepleted" style={{ width: "90%" }} />
            <CheckBox title="Packed Red Cell (PRC) Pediatric Biasa" style={{ width: "90%" }} />
            <CheckBox title="Washed Erytrocyte (WE)" style={{ width: "90%" }} />
            <CheckBox title="Trombosite Concentrate (TC) Biasa" style={{ width: "90%" }} />
            <CheckBox title="Trombosite Concentrate (TC) Apheresis Leukodepleted" style={{ width: "90%" }} />
            <CheckBox title="Fresh Frozen Plasma (FFP)" style={{ width: "90%" }} />
            <CheckBox title="Cryoprecipitate" style={{ width: "90%" }} />
            <CheckBox title="Plasma Konvalesen" style={{ width: "90%" }} />
          
          </View>

          
        </View>
      
 <Text style={{ marginLeft:30, marginTop:10,marginBottom:5,fontSize: 15,fontWeight:'bold', color: "black", textShadowColor: "#fff",
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 20, }}>
                Jumlah
              </Text>

              <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        
      />
      

       
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
