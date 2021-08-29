import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { Container, Card } from "native-base";
import {
  ScrollView,
  TouchableWithoutFeedback,
  
} from "react-native-gesture-handler";
import styles from "./styles";

function index(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
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
          Konseling
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
          Donor Darah
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
              backgroundColor: "#70282b", borderRadius:10,
         
       
           
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
              backgroundColor: "#da251c", borderRadius:10,
         
       
           
            }}
          >
            <TouchableOpacity>
             
              <Text
                style={{
                  margin: 10,
                  fontSize: 15,
                  borderRadius:10,
                  textAlign: "center",
               

                  color: "white",
               
                }}
              >
                Pilih fitur {'\n'}<B>Syarat dan Pendaftaran Pengadaan Darah</B>
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

                  color: "white",
                
                }}
              >
                Mengisi form yang disediakan
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
                  textAlign: "center",
                

                  color: "white",
               
                }}
              >
                melihat jadwal pengadaan Donor Darah
              </Text>
              
            </TouchableOpacity>
          </Card>
          
        
         
         
        </View>
      </ScrollView>
      
 <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:30,
              bottom: 10,
              position:'absolute',
              
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity onPress={goNextPage.bind(this, 'Alur01')}
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
