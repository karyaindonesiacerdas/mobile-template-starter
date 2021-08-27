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
            marginTop: 25,
            fontSize: 35,
            fontWeight: "bold",
           
          }}
        >
          Alur Donor
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
          Biasa
        </Text>

        <View
          style={{
            alignContent: "center",marginRight:"5%",marginLeft:"5%",

            
            justifyContent: "center",
            alignContent: "center",
            marginTop: "5%", 
          }}
        >
          <Card
            style={{
              backgroundColor: "#da251c", borderRadius:10,
         
       
           
            }}
          >
            <TouchableOpacity>
             
              <Text
                style={{
                  margin: 10,
                  fontSize: 15,
                  borderRadius:10,
                  textAlign: "center",fontWeight:'bold',

                  color: "white",
                
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Card>
           <Icon
                name="arrow-down"
                type="font-awesome"
                color="#007dc3"
                size={30}
                style={{
                  marginTop: 0,

               
                  alignSelf: "center",
                }}
              />
               <Card
            style={{
              backgroundColor: "#70282b", borderRadius:10,
         
       
           
            }}
          >
            <TouchableOpacity>
             
              <Text
                style={{
                  margin: 10,
                  fontSize: 15,
                  borderRadius:10,
                  textAlign: "center",
                  fontWeight:'bold',

                  color: "white",
               
                }}
              >
                Melengkapi Informasi Pribadi
              </Text>
            </TouchableOpacity>
          </Card>
           <Icon
                name="arrow-down"
                type="font-awesome"
                color="#007dc3"
                size={30}
                style={{
                  marginTop: 0,

               
                  alignSelf: "center",
                }}
              />
               <Card
            style={{
              backgroundColor: "#da251c", borderRadius:10,
         
       
           
            }}
          >
            <TouchableOpacity>
             
              <Text
                style={{
                  margin: 10,
                  fontSize: 15,
                  borderRadius:10,
                  textAlign: "center",fontWeight:'bold',

                  color: "white",
                
                }}
              >
                Mengisi Kuesioner
              </Text>
            </TouchableOpacity>
          </Card>
           <Icon
                name="arrow-down"
                type="font-awesome"
                color="#007dc3"
                size={30}
                style={{
                  marginTop: 0,

               
                  alignSelf: "center",
                }}
              />
               <Card
            style={{
              backgroundColor: "#70282b", borderRadius:10,
         
       
           
            }}
          >
            <TouchableOpacity>
             
              <Text
                style={{
                  margin: 10,
                  fontSize: 15,
                  borderRadius:10,
                  textAlign: "center",
                  fontWeight:'bold',

                  color: "white",
               
                }}
              >
                Mengisi Informed Consent
              </Text>
            </TouchableOpacity>
          </Card>
           <Icon
                name="arrow-down"
                type="font-awesome"
                color="#007dc3"
                size={30}
                style={{
                  marginTop: 0,

               
                  alignSelf: "center",
                }}
              />
               <Card
            style={{
              backgroundColor: "#da251c", borderRadius:10,
         
       
           
            }}
          >
            <TouchableOpacity>
             
              <Text
                style={{
                  margin: 10,
                  fontSize: 15,
                  borderRadius:10,
                  textAlign: "center",fontWeight:'bold',

                  color: "white",
                
                }}
              >
                Mendapat Barcode (ID Donor)
              </Text>
            </TouchableOpacity>
          </Card>
           <Icon
                name="arrow-down"
                type="font-awesome"
                color="#007dc3"
                size={30}
                style={{
                  marginTop: 0,

               
                  alignSelf: "center",
                }}
              />
               <Card
            style={{
              backgroundColor: "#70282b", borderRadius:10,marginBottom:30,
         
       
           
            }}
          >
            <TouchableOpacity>
             
              <Text
                style={{
                  margin: 10,
                  fontSize: 15,
                  borderRadius:10,
                  
                  textAlign: "center",
                  fontWeight:'bold',

                  color: "white",
               
                }}
              >
                Tunjukkan Barcode/ID ke petugas UDD PMI
              </Text>
            </TouchableOpacity>
          </Card>
           <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:30,
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
              width: "50%",marginLeft:"5%"
            }}
          >
           
          </View>
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
