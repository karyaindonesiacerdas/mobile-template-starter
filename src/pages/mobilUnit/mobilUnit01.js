import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import { Container, Card } from "native-base";
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
            marginTop: 10,
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          Jadwal
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
          Mobil Unit
        </Text>

        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 30,
            width: "80%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 120,
              height: 100,
            }}
          >
            <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                
                marginTop: 10,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Senin
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 120,
              height: 100,
            }}
          >
           <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                
                marginTop: 10,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Selasa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
             width: 120,
              height: 100,
            }}
          >
            <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                
                marginTop: 10,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Rabu
            </Text>
          </TouchableOpacity>
        </View>
         <View
          style={{
            alignContent: "center",
            marginTop:20,

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
     
            width: "80%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              
              width: 120,
              height: 100,
            }}
          >
            <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                
                marginTop: 5,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Kamis
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
            
              width: 120,
              height: 100,
            }}
          >
           <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                
                marginTop: 5,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Jumat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
             
              width: 120,
              height: 100,
            }}
          >
            <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                
                marginTop: 5,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Sabtu
            </Text>
          </TouchableOpacity>
        </View>
         <View
          style={{
            alignContent: "center",marginTop:20,

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          
            width: "80%",
            alignSelf: "center",
            marginBottom:100,
          }}
        >
          <TouchableOpacity
            style={{backgroundColor:'white', borderRadius:10,
    
              width: 120,
              height: 100,
            }}
          >
            <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                
                marginTop: 5,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Minggu
            </Text>
          </TouchableOpacity>

         
          
        </View>
        
        
      </ScrollView>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
             
              bottom: 10,
              
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
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
              width: "40%",marginLeft:"5%"
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
