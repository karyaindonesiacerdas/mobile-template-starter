import React, { useState , useEffect} from "react";
import { Alert, ImageBackground, Image, Text, View,TextInput } from "react-native";
import { CheckBox } from 'react-native-elements';
import {
  Container,
  Card,
  Item,
  Input,
  Content,
  Icon,
} from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import {TouchableOpacity,PermissionsAndroid} from 'react-native'
import styles from "../styles/styles";
import Bg from '../../image/baground3.jpeg'
import { Formik,Form } from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_MANAGEMENT } from "../../config/api";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; 
import Axios from 'axios';
import * as Yup from 'yup'

function EditProfil(props) {
  const [filebase64, setBase64] = React.useState(null);

  const [pekerjaan, setPekerjaan] = React.useState([
    { label: 'PNS', value: 'pns', checked: false },
    { label: 'Swasta', value: 'swasta', checked: false },
    { label: 'Polri', value: 'polri', checked: false },
    { label: 'Petani', value: 'petani', checked: false },
    { label: 'BUMN', value: 'bumn', checked: false },
    { label: 'Pelajar', value: 'pelajar', checked: false },
    { label: 'Wirausaha', value: 'wirausaha', checked: false },
    { label: 'Lain-lain', value: 'lain-lain', checked: false },
  ])
  
  // const { value , handleSubmit , reset } = userForm();
  const [gologanDarah, setGolonganDarah] = React.useState([
    { label: 'A', value: 'A', checked: false },
    { label: 'B', value: 'B', checked: false },
    { label: 'O', value: 'O', checked: false },
    { label: 'AB', value: 'AB', checked: false },
    { label: 'X (Tidak tahu)', value: 'X', checked: false },
  ])
  const [jeniskelamin, setJenisKelamin] = React.useState([
    { label: 'Laki-Laki', value: 'laki-laki', checked: false },
    { label: 'Perempuan', value: 'perempuan', checked: false },
  ])
  const [statusmenikah, setStatusMenikah] = React.useState([
    { label: 'Sudah Menikah', value: '1', checked: false },
    { label: 'Belum Menikah', value: '0', checked: false },
  ])

  const [input] = useState({
    pekerjaan : '',
    gologan_darah:'',
    jenis_kelamin:'',
    status_menikah:'',
  })
  const pekerjaanHandler = (index) => {
    const newValue = pekerjaan.map((checkbox, i) => {
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
  const golonganDarahHandler = (index) => {
    const newValue = gologanDarah.map((checkbox, i) => {
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
       input.gologan_darah = checkbox.value
       return item
     }
    return checkbox
  })
  setGolonganDarah(newValue)
  }
  const jeniskelaminHandler = (index) => {
    const newValue = jeniskelamin.map((checkbox, i) => {
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
       input.jenis_kelamin = checkbox.value
       return item
     }
    return checkbox
  })
  setJenisKelamin(newValue)
  }
  const statusmenikahHandler = (index) => {
    const newValue = statusmenikah.map((checkbox, i) => {
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
       input.status_menikah = checkbox.value
       return item
     }
    return checkbox
  })
  setStatusMenikah(newValue)
  }
  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  const submitData =(value) => {
    async function submit(){
      const token = await AsyncStorage.getItem('token')
      const url = USER_MANAGEMENT;
      const body = {
        ktp: value.ktp,
        nama: value.nama,
        tempat_lahir: value.tempat_lahir,
        tanggal_lahir: value.tanggal_lahir,
        jenis_kelamin: input.jenis_kelamin,
        status_menikah: input.status_menikah,
        golongan_darah : input.gologan_darah,
        pekerjaan : input.pekerjaan,
        gambar : filebase64
      
      };
      console.log(body)
    
      if(input.jenis_kelamin == "" || input.status_menikah == "" || input.gologan_darah == "" || input.pekerjaan == ""){
        alert('Lengkapi Data Profile')
      }else{
        Axios.put(`${url}/api/simaba/user/update`, body,
        {headers:{
          Authorization :'Bearer ' +token,
          'Content-Type': 'application/json',
        }})
            .then(r => {
                if (r.data.code == 200) {
                  console.log(r.data)
                  // AsyncStorage.setItem('exp', r.data.data.exp);
                  // AsyncStorage.setItem('ktp', r.data.data.ktp);
                  // AsyncStorage.setItem('tempat_lahir',r.data.data.tempat_lahir);
                  // AsyncStorage.setItem('tanggal_lahir',r.data.data.tanggal_lahir);
                  // AsyncStorage.setItem('status_menikah',r.data.data.status_menikah);
                  // AsyncStorage.setItem('jenis_kelamin',r.data.data.jenis_kelamin);
                  alert('sukses melengkapi profil')
                  props.navigation.replace('Dashboard')
                } else {
                    console.log('Error', r.data);
                }
            })
            .catch(err => {
                console.log('error : ', err);
            });
      }


    }
    submit()
  }
  useEffect(() => {
    setBase64("/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIASwBLAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQr/xAAZEAEAAgMAAAAAAAAAAAAAAAAAAcECMXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABoRAQEBAAMBAAAAAAAAAAAAAAARAQISITH/2gAMAwEAAhEDEQA/AMP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBN35lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjeXahQVx3rtl8gAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=")
    },[]);

  const formSchema = Yup.object().shape({
    ktp : Yup.string()
    .min(10, 'Invalid KTP Number !')
    .max(16, 'Invalid KTP Number !')
    .required('Required !'),
    nama : Yup.string()
    .required('Required !'),
    tempat_lahir : Yup.string()
    .required('Required !'),
    tanggal_lahir : Yup.string()
    .required('Required !')
    // jeniskelamin : Yup.string()
    // .required('Required !'),
    // statusmenikah : Yup.string()
    // .required('Required !')
  })
  const [filePath, setFilePath] = useState({});
  
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64	: true
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
       
        setFilePath(response.assets[0]);
        setBase64(response.assets[0].base64)
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64	: true
    };
    launchImageLibrary(options, (response) => {
      
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      setFilePath(response.assets[0]);
      setBase64(response.assets[0].base64)      
    });
    
  };
  const removePhoto = () =>{
    setFilePath(null)
  };


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
                Edit
              </Text>
              <Text style={{ marginLeft:30, marginTop:-10,fontSize: 30,fontWeight: "bold",  color: "red" }}>
                Profil
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',borderWidth:1, padding: 10}}>
              <Card
                style={{
                  width: "60%", marginRight:"5%" }}
              >
            <Image
              source= {{ uri :'data:image/jpeg;base64,' + filebase64 }}
              style={{
                marginTop: 15,
                width:  150,
                height: 150,
                marginBottom: 10,
                alignSelf: "center",
                marginTop: 15, }}
            />
          </Card>
          <View style={{}}>
          <Card
            style={{
              backgroundColor: "grey",width: "60%", marginRight:"30%" }}
          >
            <TouchableOpacity style={styles.button} onPress={() => captureImage('photo')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Camera
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "grey",width: "60%", marginRight:"30%" }}
          >
            <TouchableOpacity style={styles.button} onPress={() => chooseFile('photo')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Galery
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "grey",width: "60%", marginRight:"30%" }}
          >
            <TouchableOpacity style={styles.button} onPress={() => removePhoto()}  >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </Card>
          </View>
          </View>
                 <Formik initialValues={{
                        ktp:'',
                        nama:'',
                        tempat_lahir:'',
                        tanggal_lahir:'',
                        jeniskelamin : '',
                        statusmenikah : '',
                    }}
                    validationSchema={formSchema}        
                    onSubmit={value => {
                        submitData(value);
                        goNextPage.bind(this, 'Dashboard')
                    }}            
                    >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched
                    }) => (
                      <View>
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
          No.KTP
        </Text>
        <Item style={styles.item}>
        <Input
          style={styles.input}
          onChangeText={handleChange('ktp')}
          onBlur={handleBlur('ktp')}
          value={values.ktp}
   
        />
        </Item>
        {errors.ktp && touched.ktp ? (
             <Text  style={{
              marginLeft: 30,
              fontSize: 15,
              fontWeight: "normal",
              color: "red",
              textShadowColor: "#fff",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 10,
            }}>{errors.ktp}</Text>
           ) : null}
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
          Nama
        </Text>
        <Item style={styles.item}>
        <Input
          style={styles.input}
          onChangeText={handleChange('nama')}
          onBlur={handleBlur('nama')}
          value={values.nama}
        />
        </Item>
        {errors.nama && touched.nama ? (
             <Text  style={{
              marginLeft: 30,
              fontSize: 15,
              fontWeight: "normal",
              color: "red",
              textShadowColor: "#fff",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 10,
            }}>{errors.nama}</Text>
           ) : null}
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
          Tempat Lahir
        </Text>
        <Item style={styles.item}>
        <Input
          style={styles.input}
          onChangeText={handleChange('tempat_lahir')}
          onBlur={handleBlur('tempat_lahir')}
          value={values.tempat_lahir}
        />
        </Item>
        {errors.tempat_lahir && touched.tempat_lahir ? (
             <Text  style={{
              marginLeft: 30,
              fontSize: 15,
              fontWeight: "normal",
              color: "red",
              textShadowColor: "#fff",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 10,
            }}>{errors.tempat_lahir}</Text>
           ) : null}
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
          Tanggal Lahir
        </Text>
        <Item style={styles.item}>
        <Input
          style={styles.input}
          onChangeText={handleChange('tanggal_lahir')}
          onBlur={handleBlur('tanggal_lahir')}
          value={values.tanggal_lahir}
          placeholder={"Contoh: 1982-12-28"}
        />
        </Item>
        {errors.tanggal_lahir && touched.tanggal_lahir ? (
             <Text  style={{
              marginLeft: 30,
              fontSize: 15,
              fontWeight: "normal",
              color: "red",
              textShadowColor: "#fff",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 10,
            }}>{errors.tanggal_lahir}</Text>
           ) : null}
         <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black" , textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,}}>
                jenis kelamin
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
              <View>
              {jeniskelamin.map((checkbox, i) => {
                if (i < jeniskelamin.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => jeniskelaminHandler(i)}
                    key={i}
                  /> 
                }
              })
                  }
                  </View>
                  <View>
              {jeniskelamin.map((checkbox, i) => {
                if (i >= jeniskelamin.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => jeniskelaminHandler(i)}
                    key={i}
                  /> 
                }
              })}
              </View>             
              </View>
              
              <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black" , textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,}}>
                Status Menikah
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
              <View>
              {statusmenikah.map((checkbox, i) => {
                if (i < statusmenikah.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => statusmenikahHandler(i)}
                    key={i}
                  /> 
                }
              })
                  }
                  </View>
                  <View>
              {statusmenikah.map((checkbox, i) => {
                if (i >= statusmenikah.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => statusmenikahHandler(i)}
                    key={i}
                  /> 
                }
              })}
              </View>             
              </View>
              {/* <Text
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
          Alamat
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Kelurahan
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Kecamatan
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Kabupaten/Kota
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
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
          Provinsi
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        /> */}
         <Text style={{ marginLeft:30, marginTop:30,fontSize: 15,fontWeight: "bold", color: "black" }}>
                Pekerjaan (Pilih salah satu)
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
              <View>
              {pekerjaan.map((checkbox, i) => {
                if (i < pekerjaan.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => pekerjaanHandler(i)}
                    key={i}
                  /> 
                }
              })
                  }
              </View>
              <View>
              {pekerjaan.map((checkbox, i) => {
                if (i >= pekerjaan.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => pekerjaanHandler(i)}
                    key={i}
                  /> 
                }
              })}
              </View>
              </View>
              <Text style={{ marginLeft:30, marginTop:20,fontSize: 15,fontWeight: "bold", color: "black", textShadowColor:'#fff',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
   }}>
                Golongan Darah
              </Text>
              <View style={{marginTop:10,marginLeft:30,marginRight:40, flexDirection: "row",justifyContent: "space-between"}}>
              <View>
              {gologanDarah.map((checkbox, i) => {
                if (i < gologanDarah.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => golonganDarahHandler(i)}
                    key={i}
                  /> 
                }
              })
                  }
                  </View>
                  <View>
              {gologanDarah.map((checkbox, i) => {
                if (i >= gologanDarah.length/2){
                  return <CheckBox
                  style={{width:"70%"}}
                    title={checkbox.label}
                    checked={checkbox.checked}
                    onPress={() => golonganDarahHandler(i)}
                    key={i}
                  /> 
                }
              })}
              </View>
              </View>
              <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:20,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "grey",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'GantiPasword')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Ganti Password
              </Text>
            </TouchableOpacity>
          </Card>
              </View>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:20,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Dashboard')} >
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
            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20, textAlign:'center',

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                  Simpan
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

export default EditProfil;