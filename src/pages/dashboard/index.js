import React, { useState } from "react";
import { ImageBackground, Image, Text, View,TouchableOpacity } from "react-native";
import { Container, Card } from "native-base";
import { ScrollView,  } from "react-native-gesture-handler";
import styles from "./styles";

function index(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };

  return (
    <Container>
      <Image
        source={require("../../asset/logoUDD.png")}
        style={styles.logoUDD}
      ></Image>
      <Image
        source={require("../../asset/logoSehat.png")}
        style={styles.logoSehat}
      ></Image>
      <ScrollView>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 15,
            width: "80%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 120,
              height: 120,
            }}
          >
            <Image
              source={{
                uri: "https://www.pmi-kabtegal.or.id/asset/foto_statis/pmi_jadul.jpg",
              }}
              style={styles.ImageAtas} ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Sejarah PMI{"\n"}Kota Semarang
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 120,
              height: 120,
            }}
          >
            <Image
              source={{
                uri: "https://pmikotasemarang.or.id/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-14-at-17.14.08-1024x576.jpeg",
              }}
               style={styles.ImageAtas}></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Info kegiatan {"\n"}PMI & Donor Darah
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 120,
              height: 120,
            }}
          >
            <Image
              source={{
                uri: "https://pmi.or.id/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-18-at-00.21.46.jpeg",
              }}
               style={styles.ImageAtas} ></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Info Plasma {"\n"}Konvalesen
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
            width: "80%",
            alignSelf: "center",
          }}
        >
          <Card
            style={{
              backgroundColor: "#e60013",
              width: 120,
              borderRadius: 10,

              margin: "2%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  margin: 10,

                  fontSize: 14,
                  textAlign: "center",

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Edit Profil
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "#e60013",
              width: 120,
              borderRadius: 10,

              margin: "2%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  margin: 10,

                  fontSize: 14,
                  textAlign: "center",

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Riwayat Donor
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "#e60013",
              width: 120,
              borderRadius: 10,

              margin: "2%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  margin: 10,
                  fontSize: 14,
                  textAlign: "center",

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Logout
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
            marginTop: 20,
            width: "80%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity style={styles.cardStyle} onPress={goNextPage.bind(this, 'Alur01')} >
            <Image
              source={require("../../asset/alurDonorDarah.png")}
              style={{
                marginTop: 5,

                width: 35,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Alur Donor {"\n"}Darah
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardStyle}>
            <Image
              source={require("../../asset/persyaratanDonorDarah.png")}
              style={{
                marginTop: 5,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Persyaratan Donor {"\n"}& pendaftaran
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardStyle} >
            <Image
              source={require("../../asset/stokDarah.png")}
              style={{
                marginTop: 5,

                width: 54,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Info Stok & Kebutuhan Darah
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignContent: "center",
            marginTop: 20,

            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",

            width: "80%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity style={styles.cardStyle} onPress={goNextPage.bind(this, 'MobilUnit01')} >
            <Image
              source={require("../../asset/jadwalMobilUnit.png")}
              style={{
                marginTop: 5,

                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>

            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Jadwal Mobil {"\n"}Unit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardStyle}>
            <Image
              source={require("../../asset/konselingDonorDarah.png")}
              style={{
                marginTop: 5,

                width: 45,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Konseling Donor Darah Online
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardStyle}>
            <Image
              source={require("../../asset/palangMerahIndonesia.png")}
              style={{
                marginTop: 5,

                width: 80,
                height: 50,
                alignSelf: "center",
              }}
            ></Image>
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                textAlign: "center",

                color: "black",
                fontWeight: "bold",
              }}
            >
              Kontak PMI Kota Semarang
            </Text>
          </TouchableOpacity>
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
