import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements";
import {
  Container,
  Card,

} from "native-base";
import {
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import styles from "./styles";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['Informasi kebutuhan Darah\nTanggal ..... Pukul ... '],
 
  tableData: [
    ['NO', 'RUMAH SAKIT', 'PRODUK DARAH','GOLONGAN DARAH','RHESUS','JUMLAH','STATUS'],
    ['1', 'PMI', 'PRC','A','POSITIF','2','Terlayan Pukul\n ....\n Belum terlayani'],
    ['2','Dst', '', '', '', '', ''],
    ['3','Dst', '', '', '', '', ''],
    ['4','Dst', '', '', '', '', ''],

  
  ],
};

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
          Informasi Stok &
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
          Kebutuhan Darah
        </Text>

        <Card
            style={{
              backgroundColor: "#70282b",  width:'90%',alignSelf:'center',marginTop:30, marginBottom:30,
         
       
           
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
                KEBUTUHAN DARAH
              </Text>
            </TouchableOpacity>
          </Card>
        
         <View style={{width:"90%",justifyContent: "center",
              alignSelf: "center", marginBottom:100}}>
      <Table borderStyle={{ borderWidth: 1 ,justifyContent: "center",
              alignContent: "center",}}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={styles.textHead}
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
            flexArr={[0.5, 1, 1,1.3,1,1,1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
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