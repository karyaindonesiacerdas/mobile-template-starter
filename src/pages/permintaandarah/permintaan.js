import React, { useState } from "react";
import { Alert, ImageBackground, Image, Text, View,TextInput, Dimensions } from "react-native";
import { CheckBox } from 'react-native-elements';
import {
  Container,
 Item,
 Input,
  Card,
  Content,
  Icon,
} from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import {TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/Baground2.jpg'
import { Formik } from "formik";

function PermintaanDarah1(props) {
  const [pekerjaan, setPekerjaan] = React.useState([
    { label: 'Whole Blood (WB) Biasa', value: 'Whole Blood (WB) Biasa', checked: false, num: 0 },
    { label: 'Whole Blood (WB) Segar', value: 'Whole Blood (WB) Segar', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Biasa', value: 'Packed Red Cell (PRC) Biasa', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Leukodepleted', value: 'Packed Red Cell (PRC) Leukodepleted', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Pediatric Leukodepleted', value: 'Packed Red Cell (PRC) Pediatric Leukodepleted', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Pediatric Biasa', value: 'Packed Red Cell (PRC) Pediatric Biasa', checked: false, num: 0 },
    { label: 'Washed Erytrocyte (WE)', value: 'Washed Erytrocyte (WE)', checked: false, num: 0 },
    { label: 'Trombosite Concentrate (TC) Biasa', value: 'Trombosite Concentrate (TC) Biasa', checked: false, num: 0 },
    { label: 'Trombosite Concentrate (TC) Apheresis Leukodepleted', value: 'Trombosite Concentrate (TC) Leukodepleted', checked: false, num: 0 },
    { label: 'Fresh Frozen Plasma (FFP)', value: 'Fresh Frozen Plasma (FFP)', checked: false, num: 0 },
    { label: 'Cryoprecipitate', value: 'Cryoprecipitate', checked: false, num: 0 },
    { label: 'Plasma Konvalesen', value: 'Plasma Konvalesen', checked: false, num: 0 },
  ])
  const [input] = useState({
    pekerjaan : '',
  })
  const pekerjaanHandler = (index) => {
    const newValue = pekerjaan.map((data, i) => {
     if (i !== index)
       return {
         ...checkbox,
         checked: false,
       }
     if (i === index) {
       const item = {
         ...checkbox,
         checked: !checkbox.checked,
       }
       input.pekerjaan = checkbox.value
       return item
     }
    return checkbox
  })
  setPekerjaan(newValue)
  }
  
  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  const submitData = (value) => {
  }
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  const plusNum = (item, key) => {
    let newArr = [...pekerjaan]; // copying the old datas array
    if (item.num < 4) {
      newArr[key] = {checked: item.checked, label: item.label, value: item.value, num: item.num +1}; // replace e.target.value with whatever you want to change it to
      console.info("newArr", newArr)
      setPekerjaan(newArr); // ??
    } else {
      alert("sudah melebihi jumlah maksimal!")
    }
    
  }

  const minusNum = (item, key) => {
    let newArr = [...pekerjaan]; // copying the old datas array
    console.info("num", item.num)
    if (item.num > 0) {
      newArr[key] = {checked: item.checked, label: item.label, value: item.value, num: item.num -1}; // replace e.target.value with whatever you want to change it to
      console.info("newArr", newArr)
      setPekerjaan(newArr); // ??
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
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 35,fontWeight: "bold",  color: "red" }}>
                Darah
              </Text>
              <View style={{
          marginTop:0,marginLeft:30,marginRight:70, flexDirection: "row",justifyContent: "center",
          alignContent: "center",
          }}>
                <View style={{}}>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
            alignContent:"space-around"
          }}
        >
          Produk (maximal 2)
        </Text>
        </View>
        
        <View>
        <Text
          style={{
            marginLeft: 180,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
            alignContent:"space-around",
            marginBottom: 10
          }}
        >
          Jumlah
        </Text>
        </View>
              </View>


{/* ============================ */}

{pekerjaan.map((item, key) => {
        return (
          <View key={key} style={{flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, padding: 5}}>
            <Text style={{marginLeft: 10}}>{item.value}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
            <TouchableOpacity>
              <Icon type="FontAwesome5" name="minus-circle" onPress={() => minusNum(item, key)} />
            </TouchableOpacity>
            <Text style={{
              marginRight:5,
              marginLeft:5,
                marginTop: 0,
                fontSize: 20,
                fontWeight:'normal',

                textAlign: "center",
                color: "black",
          
              }}
            >
              {item.num}
            </Text>
            <TouchableOpacity>
              <Icon type="FontAwesome5" name="plus-circle" onPress={() => plusNum(item, key)} />
            </TouchableOpacity>
            </View>
          </View>
        )
      })}

        {/* ============================ */}




              
              <Formik
              initialValues={{
                bb:0,
            }}
            onSubmit={value => {
                submitData(value);
                goNextPage.bind(this, 'Kuesioner')
            }}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
            }) => (
              <View>
              
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
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'PermintaanDarah')} >
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
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'PermintaanSukses')} >
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
        </View>)}
        </Formik>
          
 </ScrollView>
    </Container>
  );
}

export default PermintaanDarah1;