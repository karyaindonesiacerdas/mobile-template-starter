import React, {useState,useEffect} from 'react';
import {
    Container,
    Card,
    Item,
    Input,
    Spinner,
    Toast,
    ListItem,
    CheckBox,
    Body,
    Button,
    View,
    Text,
} from 'native-base';
import {Alert, Image, StyleSheet, TouchableOpacity,Linking} from 'react-native';
import Bg from '../../image/Baground2.jpg';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function Contact(props) {

  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  return (
    <Container>
        <Image source={Bg} style={{width: '100%', height: '100%', position: 'absolute'}} />
      <Image
        source={require("../../image/logo.png")}
        style={{
          width: 55,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../../image/Logo2.png")}
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
        <View style={styles.viewContainer}>
                
        <Text
          style={{
            textAlign: "center",
            marginTop: 0,
            marginBottom: 50,
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
          }}
        >
          PMI Kota Semarang
        </Text>
            <Card style={styles.flowCardPeach}>
                <TouchableOpacity>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>
                          <Icon name="building-o" size={40} color="#900" />
                    </View>  
                        
                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>
                        <Text style={styles.textInCard5}>
                        Jl. MGR Soegijopranoto SJ No.31 dan 35 {'\n'}
                        Kel. Pendrikan Kidul, Kec. Semarang Tengah {'\n'}
                        Kota Semarang, Jawa Tengah (50131) {'\n'}
                        </Text>
                    </View>
                    
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 0,
                        marginBottom: 15,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Hubungi Kami :
                    </Text>
                    <Text
                      style={{
                        textAlign: "left",
                        marginLeft: 10,
                        marginBottom: 0,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                     - Markas dan UPJ 
                    </Text>
                          
                      <Text style={{
                        textAlign: "left",
                        marginLeft: 23,
                        marginBottom: 0,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black",
                      }}>
                        <Icon name="phone" size={20} color="#900" />
                        {'  '}(024) 3541237
                      </Text>
                      <Text style={{
                        textAlign: "left",
                        marginLeft: 23,
                        marginBottom: 0,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black",
                      }}>
                        <Icon name="envelope-o" size={20} color="#900" />
                        {'  '}kota_semarang@pmi.or.id
                      </Text>
                    
                      <Text
                      style={{
                        textAlign: "left",
                        marginLeft: 10,
                        marginTop: 15,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                     – Unit Donor Darah
                    </Text>
                          
                      <Text style={{
                        textAlign: "left",
                        marginLeft: 23,
                        marginBottom: 0,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black",
                      }}>
                        <Icon name="phone" size={20} color="#900" />
                        {'  '}(024) 3515050
                      </Text>
                      <Text style={{
                        textAlign: "left",
                        marginLeft: 23,
                        marginBottom:20,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "black",
                      }}>
                        <Icon name="envelope-o" size={20} color="#900" />
                        {'  '}uddpmismg@yahoo.com
                      </Text>
                      <View
                        style={{
                            marginBottom:20,
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>
                      <Icon.Button name="facebook-square" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://www.facebook.com/pmi.semarang')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="instagram" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://www.instagram.com/pmikotasemarang/')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="youtube-play" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://www.youtube.com/channel/UCxTx1Tho2WraxpwWJQ3Eddw')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="internet-explorer" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://pmikotasemarang.or.id/')}} />
                      <Text>{'  '}</Text>
                      <Icon.Button name="twitter-square" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://twitter.com/pmikotasemarang?lang=id')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="whatsapp" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://web.whatsapp.com/send?phone=6282136700876&text=Halo%20PMI%20Kota%20Semarang')}} />
                       </View>
                      
                    
                </TouchableOpacity>
            </Card>
        </View>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:100,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Dashboard')} >
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Dashboard
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>

    </Container>
  );
}

export default Contact;
