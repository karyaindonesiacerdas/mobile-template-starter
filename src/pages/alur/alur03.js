import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { Container, Card } from "native-base";
import {
  ScrollView,
} from "react-native-gesture-handler";
import styles from "./styles";

function index(props) {
  const goNextPage = (page) => {
    if (page) {
      props.navigation.replace(page);
    }
  };
   const B = (props) => (
    <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
  );

  return (
    <Container>
      <Image
        source={require("../../asset/logoUDD.png")}
        style={styles.logoUDD}></Image>
      <Image
        source={require("../../asset/logoSehat.png")}
        style={styles.logoSehat}></Image>

      <ScrollView>
        <Text style={styles.headerText1}>
          Alur Donor
        </Text>
        <Text style={styles.headerText2}>
          Darah Konvalesen
        </Text>

        <View style={styles.viewContainer}>

          <Card style={styles.flowCardRed}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Pendaftaran Donor
              </Text>
            </TouchableOpacity>
          </Card>

          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center",}}/>
          <Card style={styles.flowCardMarroon}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Verifikasi Data Donor
              </Text>
            </TouchableOpacity>
          </Card>

          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center",}}/>
          <Card style={styles.flowCardRed}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Pemeriksaan Hb dan golongan darah
              </Text>
            </TouchableOpacity>
          </Card>
          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center",}}/>
          <Card style={styles.flowCardMarroon}>
    
               <TouchableOpacity>
              <Text style={{ marginTop:20, marginLeft: 20,marginRight:20,  fontSize: 15, color: "white",}}>
                <B>Pemeriksaan kesehatan</B>
              </Text>
              
              <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                a.
              </Text>

               <Text style={{fontSize: 15, color: "white"}}>
                 Pengukuran tekanan darah
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                b.
              </Text>

               <Text style={{fontSize: 15, color: "white"}}>
                  Pengukuran berat badan
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                c. 
              </Text>

               <Text style={{fontSize: 15, color: "white"}}>
                 Pemeriksaan nadi
              </Text>
              </View>
              <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                d. 
              </Text>

               <Text style={{fontSize: 15, color: "white"}}>
                 Pemeriksaan suhu tubuh
              </Text>
              </View>
              <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                e. 
              </Text>

               <Text style={{fontSize: 15, color: "white", marginBottom:20}}>
                 Wawancara riwayat kesehatan
              </Text>
              </View>
             
            </TouchableOpacity>

             
       
          </Card>
          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center",}} />
         <Card style={styles.flowCardRed}>
             <TouchableOpacity>
              <Text style={{ marginTop:20, marginLeft: 20,marginRight:20,  fontSize: 15, color: "white",}}>
                <B>Pengujian</B>
              </Text>
              
              <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                a.
              </Text>

               <Text style={{fontSize: 15, color: "white"}}>
                 Pemeriksaan titer antibody
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                b.
              </Text>

               <Text style={{fontSize: 15, color: "white"}}>
                  Pemeriksaan golongan darah dan skrining antibody
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={{fontSize: 15, color: "white",marginRight:5}}>
                c. 
              </Text>

               <Text style={{fontSize: 15, color: "white", marginBottom:20}}>
                 Pemeriksaan infeksi menular lewat transfusi darah
              </Text>
              </View>
             
            </TouchableOpacity>
          </Card>

          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center"}}/>
          <Card style={styles.flowCardMarroon}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Pengambilan Darah Donor
              </Text>
            </TouchableOpacity>
          </Card>

          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center"}}/>
         <Card style={styles.flowCardMarroon}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Refreshment area
              </Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.flowCardPeach}>
            <TouchableOpacity>
              <Text style={{ marginTop:20, marginLeft: 20,marginRight:20,  fontSize: 15, color: "black",}}>
                Pendonor setelah mendonorkan darah dapat beristirahat sebentar sambil minum air putih atau makan makanan kecil{'\n'}{'\n'}
                <B>Tips setelah donor :</B>
              </Text>
              
              <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={styles.textInCards5}>
                a.
              </Text>

               <Text style={styles.textInCards4}>
                 Membatasi aktivitas fisik Anda selama setidaknya 5 jam setelah donor
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={styles.textInCards5}>
                b.
              </Text>

               <Text style={styles.textInCards4}>
                  Melepaskan plester setidaknya 4-5 jam setelah Anda selesai donor Darah
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={styles.textInCards5}>
                c. 
              </Text>

               <Text style={styles.textInCards4}>
                 Menghindari panas
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={styles.textInCards5}>
                d.
              </Text>

               <Text style={styles.textInCards4}>
                  Menghindari untuk berdiri dalam waktu yang lama
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={styles.textInCards5}>
                e.
              </Text>

               <Text style={styles.textInCards4}>
                  Jika Anda merokok, sebaiknya Anda tidak merokok selama 2 jam setelah Donor
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={styles.textInCards5}>
                f. 
              </Text>

               <Text style={styles.textInCards4}>
                 Jika Anda minum alkohol, sebaiknya Anda tidak minum alkohol sampai 24 jam setelah donor
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row",}}>
                <Text style={styles.textInCards5}>
                g. 
              </Text>

               <Text style={styles.textInCards4}>
                 Minum banyak cairan untuk menggantikan cairan tubuh Anda yang hilang
              </Text>
              </View>
               <View style={{marginRight:20, marginLeft:20,flexDirection: "row", marginBottom:20}}>
                <Text style={styles.textInCards5}>
                h. 
              </Text>

               <Text style={styles.textInCards4}>
                 Makan makanan yang mengandung: zat besi tinggi, vitamin C, asamfolat, riboflavin (vitamin B2) dan vitamin B6
              </Text>
              </View>
            </TouchableOpacity>
          </Card>
          <View style={styles.viewBackForward2}>
            <Card
              style={{
                backgroundColor: "#000",
                width: "40%",
                marginRight: "2%",
              }}
            >
              <TouchableOpacity onPress={goNextPage.bind(this, "Alur01")}>
                <Text style={styles.textInCard}>
                  Kembali
                </Text>
              </TouchableOpacity>
            </Card>
            <View style={{width: "50%",marginLeft: "5%",}}></View>
          </View>
        </View>
      </ScrollView>

      <ImageBackground
        // resizeMethod={'auto'}
        source={require("../../asset/footer.png")}
        style={styles.imageBackgroundStyle}
        imageStyle={{resizeMode: "cover",alignSelf: "flex-end"}}
      ></ImageBackground>
    </Container>
  );
}
export default index;
