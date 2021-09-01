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
import {ScrollView} from "react-native-gesture-handler";
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
          Konseling
        </Text>
        <Text style={styles.headerText2}>
          Donor Darah
        </Text>

        <View style={styles.viewContainer}>
          <Card style={styles.flowCardMarroon}>
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
            style={{marginTop: 0,alignSelf: "center"}}
          />

          <Card style={styles.flowCardRed}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Pilih fitur {"\n"}
                <B>Syarat dan Pendaftaran Pengadaan Darah</B>
              </Text>
            </TouchableOpacity>
          </Card>

          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center"}}
          />
          <Card style={styles.flowCardMarroon}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                Mengisi form yang disediakan
              </Text>
            </TouchableOpacity>
          </Card>
          <Icon
            name="arrow-down"
            type="font-awesome"
            color="#007dc3"
            size={30}
            style={{marginTop: 0,alignSelf: "center"}}
          />
          <Card style={styles.flowCardRed}>
            <TouchableOpacity>
              <Text style={styles.textInCard}>
                melihat jadwal pengadaan Donor Darah
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
        
      </ScrollView>

      <View style={styles.viewContainer}>
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
        <View
          style={{width: "40%",marginLeft: "5%",}}></View>
      </View>

      <ImageBackground
        // resizeMethod={'auto'}
        source={require("../../asset/footer.png")}
        style={styles.imageBackgroundStyle}
        imageStyle={{ resizeMode: "cover", alignSelf: "flex-end" }}
      ></ImageBackground>
    </Container>
  );
}
export default index;
