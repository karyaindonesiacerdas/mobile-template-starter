import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import {
  Container,
  Card,

} from "native-base";
import {
  ScrollView,
  TouchableWithoutFeedback,
  
} from "react-native-gesture-handler";
import styles from "./styles";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['JADWAL KEGIATAN DONOR DARAH SENIN'],
 
  tableData: [
    ['JAM', 'INSTASI', 'KETERANGAN'],
    ['08.00', 'PMI', 'Umum'],
    ['Dst', '', ''],
  
  ],
};

function index(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
   const goNextPage = (page) => {
    if (page) {
      props.navigation.replace(page);
    }
  };
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
            color: "red",
          }}
        >
          Mobil Unit
        </Text>
        <Text
          style={{
            marginLeft: 30,
            marginTop: -10,
            marginBottom: 10,
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Terdekat
        </Text>
        
         <View style={{width:"90%",justifyContent: "center",
              alignSelf: "center",}}>
      <Table borderStyle={{ borderWidth: 1 ,justifyContent: "center",
              alignContent: "center",}}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[1, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>

        <Image
        source={{
          uri: 'https://www.howtogeek.com/wp-content/uploads/2021/01/google-maps-satellite.png?height=200p&trim=2,2,2,2',
        }}
        style={{
        
          width: 200,
          height: 100,
          marginTop: 40,
          marginBottom: 20,
          alignSelf:'center',

          
        }}
      ></Image>
       <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold",

            textAlign: "justify",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          NAMA LOKASI MOBILE UNIT
        </Text>
 <Text
          style={{
            marginLeft: 30,
            marginRight: 30,
            
            fontSize: 15,
            fontWeight: "bold",

            textAlign: "justify",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          ALAMAT LOKASI MOBILE UNIT
        </Text>

       
        
      </ScrollView>
         <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 30,
            marginBottom: 10,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",
              width: "40%",
              marginRight: "2%",
            }}
          >
            <TouchableOpacity onPress={goNextPage.bind(this, "Konvalesen10")}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,

                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Kembali
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "#000",
              width: "40%",
              marginLeft: "2%",
            }}
          >
            <TouchableOpacity onPress={goNextPage.bind(this, "Konvalesen17")}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
                  textAlign: "center",

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Selanjutnya
              </Text>
            </TouchableOpacity>
          </Card>
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
