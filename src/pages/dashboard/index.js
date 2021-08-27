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
              style={{
                marginTop: 10,

                  width: 100,
                height: 70,
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
              style={{
                marginTop: 10,

                 width: 100,
                height: 70,
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
              style={{
                marginTop: 10,

                width: 100,
                height: 70,
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
         
          <TouchableOpacity
            style={{
              margin: 5,
              borderRadius: 10,
              width: 120,
              height: 100,
              backgroundColor: "#fff",
              elevation: 2, // Android shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
            }}
          >
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

          
           <TouchableOpacity
            style={{
              margin: 5,
              borderRadius: 10,
              width: 120,
              height: 100,
              backgroundColor: "#fff",
              elevation: 2, // Android shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
            }}
          >
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
          
           <TouchableOpacity
            style={{
              margin: 5,
              borderRadius: 10,
              width: 120,
              height: 100,
              backgroundColor: "#fff",
              elevation: 2, // Android shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
            }}
          >
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
          <TouchableOpacity
            style={{
              margin: 5,
              borderRadius: 10,
              width: 120,
              height: 100,
              backgroundColor: "#fff",
              elevation: 2, // Android shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
            }}
          >
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

          <TouchableOpacity
            style={{
              margin: 5,
              borderRadius: 10,
              width: 120,
              height: 100,
              backgroundColor: "#fff",
              elevation: 2, // Android shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
            }}
          >
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
          <TouchableOpacity
            style={{
              margin: 5,
              borderRadius: 10,
              width: 120,
              height: 100,
              backgroundColor: "#fff",
              elevation: 2, // Android shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
            }}
          >
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
