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
import {ScrollView,} from "react-native-gesture-handler";
import styles from "./styles";

function Alur02(props) {
  const goNextPage = (page) => {
    if (page) {
      props.navigation.replace(page);
    }
  };
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
          Biasa
        </Text>

        <View style={styles.viewContainer}>
          <Card style={styles.flowCardRed}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Login
              </Text>
            </TouchableOpacity>
          </Card>
          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center",}}
          />
          <Card style={styles.flowCardMarroon}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
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
          <Card style={styles.flowCardRed}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
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
          <Card style={styles.flowCardMarroon}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
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
          <Card style={styles.flowCardRed}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
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
          <Card style={styles.flowCardMarroon}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Tunjukkan Barcode/ID ke petugas UDD PMI
              </Text>
            </TouchableOpacity>
          </Card>

          <View style={styles.viewBackForward2}>
            <Card
              style={{
                backgroundColor: "#000",
                width: "40%",
                marginRight: "2%",
              }}>
              <TouchableOpacity onPress={goNextPage.bind(this, "Alur01")}>
                <Text style={styles.textInCard}>
                  Kembali
                </Text>
              </TouchableOpacity>
            </Card>
            <View
              style={{
                width: "50%",
                marginLeft: "5%",
              }}
            ></View>
          </View>
        </View>
      </ScrollView>

      <ImageBackground
        // resizeMethod={'auto'}
        source={require("../../asset/footer.png")}
        style={styles.imageBackgroundStyle}
        imageStyle={{ resizeMode: "cover", alignSelf: "flex-end" }}
      ></ImageBackground>
    </Container>
  );
}

export default Alur02;
