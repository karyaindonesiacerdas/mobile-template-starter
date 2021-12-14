import React, {useState} from 'react';
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
import {useMutation} from 'react-query';
import {Formik} from 'formik';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import Bg from '../../image/Baground2.jpg';
import qs from 'qs';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import {
  ScrollView,
} from "react-native-gesture-handler";
import styles from "../styles/styles";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_MANAGEMENT } from "../../config/api";


function Kegiatan(props) {
  const submitData =(value) => {
    async function submit(){
      const token = await AsyncStorage.getItem('token')
      const url = USER_MANAGEMENT;
      const body = {
        email: value.email,
        new_password: value.new_password,
        nik : value.nik
      };
      console.log(body)
    
      Axios.put(`${url}/api/simaba/user/change-password`, body,
      {headers:{
        'Content-Type': 'application/json',
      }})
          .then(r => {
              if (r.data.code == 200) {
                alert('Sukses Update Password')
                props.navigation.replace('EditProfil')
              } else {
                  console.log('Error', r.data);
              }
          })
          .catch(err => {
              console.log('error : ', err);
          });
    }
    submit()
  }
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
        
  
     
        <Text style={{ marginLeft:100, marginTop:100,fontSize: 35,fontWeight: "bold",  color: "black" }}>
                Ganti Pasword
              </Text>                 
              <Formik
                    initialValues={{
                        email: '',
                        nik : '',
                        new_password: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        nik: Yup.string()
                            .required('Required'),
                    })}
                    onSubmit={value => {
                        submitData(value);
                        goNextPage.bind(this, 'Dashboard');
                    }}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                    }) => (
                        <View>
                            <Text
                          style={{
                            marginLeft: 30,
                            marginTop: 90,
                            fontSize: 15,
                            fontWeight: "normal",
                            color: "black",
                            textShadowColor: "#fff",
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 10,
                          }}
                        >
                          Email
                        </Text>
                        <Item style={styles.item}>
                        <Input
                          style={styles.input}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                          underlineColorAndroid="transparent"
                        />
                        </Item>
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
                          NIK
                        </Text>
                        <Item style={styles.item}>
                        <Input
                          style={styles.input}
                          onChangeText={handleChange('nik')}
                          onBlur={handleBlur('nik')}
                          value={values.nik}
                          underlineColorAndroid="transparent"
                        />
                        </Item>
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
                          Pasword Baru
                        </Text>
                        <Item style={styles.item}>
                        <Input
                          style={styles.input}
                          onChangeText={handleChange('new_password')}
                          onBlur={handleBlur('new_password')}
                          value={values.new_password}
                          underlineColorAndroid="transparent"
                          secureTextEntry={true}
                  
                        />
                        </Item>
                        <View
                          style={{
                            alignContent: "center",

                            flexDirection: "row",
                            justifyContent: "center",
                              alignContent: "center",
                              marginTop:65,
                            
                          }}
                        >
                          <Card
                            style={{
                              backgroundColor: "#000",width: "40%",marginLeft:"2%"
                            }}
                          >
                            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                              <Text
                                style={{
                                  margin: 10,
                                  fontSize: 20, textAlign:'center',

                                  color: "white",
                                  fontWeight: "bold",
                                }}
                              >
                                Submit
                              </Text>
                            </TouchableOpacity>
                          </Card>
                        </View>
                        </View>        
                    )}
                  </Formik>              
 </ScrollView>
    </Container>
  );
}

export default Kegiatan;