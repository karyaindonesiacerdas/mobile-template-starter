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
            color: "red",
          }}
        >
          Gedung UDD
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
          PMI Kota Semarang
        </Text>

        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20%",
          }}
        >
          <Card
            style={{
              backgroundColor: "#fff",
              width: 130,
              height: 130,
              marginLeft: "5%",
            }}
          >
            <TouchableOpacity>
              <Icon
                name="money"
                type="font-awesome"
                color="#f50"
                size={50}
                style={{
                  marginTop: 25,

                  width: 55,
                  height: 50,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 20,
                  textAlign: "center",

                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Transaksi
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "#fff",
              width: 130,
              height: 130,
              marginLeft: "5%",
            }}
          >
            <TouchableOpacity>
              <Icon
                name="envelope"
                type="font-awesome"
                color="#f50"
                size={50}
                style={{
                  marginTop: 25,

                  width: 50,
                  height: 50,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 20,
                  textAlign: "center",

                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Pesan
              </Text>
            </TouchableOpacity>
          </Card>
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
