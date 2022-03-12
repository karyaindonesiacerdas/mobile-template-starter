import React, {useState,useEffect} from 'react';
import {
    Container,
    Card,
    Item,
    Input,
    Spinner,
    Toast,
    ListItem,
    CheckBox,
    Body,
    Button,
    View,
    Text,
} from 'native-base';
import {Alert, Image, StyleSheet, TouchableOpacity,Linking} from 'react-native';
import Bg from '../../image/Baground2.jpg';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function Sejarah(props) {

  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  return (
    <Container>
        <Image source={Bg} style={{width: '100%', height: '100%', position: 'absolute'}} />
      <Image
        source={require("../../image/logo.png")}
        style={{
          width: 55,
          height: 60,
          top: 10,
          margin: 20,

          left: 10,
        }}
      ></Image>
      <Image
        source={require("../../image/Logo2.png")}
        style={{
          position: "absolute",
          width: 58,
          height: 60,
          margin: 20,

          right: 10,
          top: 10,
        }}
      ></Image>
      <ScrollView>
        <View style={styles.viewContainer}>
                
        <Text
          style={{
            textAlign: "center",
            marginTop: 0,
            marginBottom: 50,
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
          }}
        >
         Sejarah PMI Kota Semarang
        </Text>
            <Card style={styles.flowCardPeach}>
                <TouchableOpacity>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>
                          <Icon name="info" size={40} color="#900" />
                    </View>  
                        
                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                          
                        }}>
                        <Text style={{
                          textAlign: "justify",
                          fontSize: 14,
                          color: "black",
                        }}>
                        {'      '}Kata Palang Merah dan jiwa kepalangmerahan sudah dikenal oleh masyarakat semarang dalam peristiwa Pertempuran Lima hari di Semarang pada tanggal 14 – 19 Okt 1945. Pada waktu itu anggota Palang Merah sebagian besar terdiri dari karyawan-karyawati Rumah Sakit Umum dr. Kariadi yang waktu itu disebut “C.B.Z”, pada waktu clash ke II Belanda menduduki Kota Semarang dan mendirikan organisasi kepalangmerahan yang disebut NERKAI (Nederland Rood Kruis Afdeling Indie) yang dipimpin oleh Ny. Van Leeven.
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                          
                        }}>
                          <Text style={{
                          textAlign: "justify",
                          marginTop: 10,
                          fontSize: 14,
                          color: "black",
                        }}>
                        {'      '}
                        Karena ada penyerahan kedaulatan Republik Indonesia hasil dari perundingan Meja Bundar di Denhaag Nederland, maka NERKAI menyerahkan kegiatan kepalangmerahan tersebut kepada dr. Syoekinar Syarif dari Rumah Sakit CBZ (sekarang RS. Dr. Kariadi).
                        </Text>
                     </View>
                     <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'center' 
                        }}>
                        <Text style={{
                          textAlign: "justify",
                          margin : 10,
                          marginBottom: 10,
                          fontSize: 14,
                          color: "black",
                        }}>
                        {'      '}
                        Selanjutnya Bp. Dr. Syoekinar Syarif tersebut merubah NERKAI menjadi Palang Merah Indonesia. Perubahan nama itu dikarenakan Palang Merah di Jakarta juga telah lahir tanggal 5 September 1945 yang waktu itu wilayahnya hampir meliputi seluruh Jawa Tengah bagian utara. Pusat kegiatan kantor PMI Wilayah Jawa Tengah dan Cabang di Jl. Bodjong No. 100 (sekarang Jl. Pemuda) Semarang, sedangkan kegiatan Dinas Donor Darah (DDD) berubah nama menjadi UTDC (Unit Transfusi Darah Cabang) berada di Jl. Bulu No. 31 (sekarang Jl. Mgr. Soegijapranata). Saat ini menjadi UDD (Unit Donor Darah – AD dan ART PMI) atau UTD (Unit Transfusi Darah – PERMENKES)
                        </Text>
                      </View>
                      <Text style={{
                          textAlign: "justify",
                          margin: 10,
                          fontSize: 14,
                          color: "black",
                        }}>
                         Kegiatan Pelayanan PMI telah mempunyai kegiatan berupa PPPK yang dipusatkan pada tiga tempat, yaitu :
                        </Text>
                        <Text style={{
                        textAlign: "justify",
                        margin: 10,
                        marginBottom: 0,
                        fontSize: 14,
                        color: "black",
                      }}>
                        <Icon name="circle" size={10} color="#900" />
                        {'  '}Di Kebon Dalem sekarang Gang Pinggir No. 62 Semarang. {'\n'}
                        
                        <Icon name="circle" size={10} color="#900" />
                        {'  '}Di Jl. Dr. Jawa (Jl. Kol. Sugiyono No. 4/Kantor DPU) Semarang. {'\n'}
                        
                        <Icon name="circle" size={10} color="#900" />
                        {'  '}Di Karen Weg Semarang sekarang Jl. Dr. Cipto No 62A Semarang. {'\n'}{'\n'}
                        {'      '}
                        Dalam perkembangan selanjutnya tahun 1952 Pelayanan PPPK yang berada di tiga tempat tersebut disatukan di Jl. Bulu No. 31 Semarang, dengan nama Balai Pengobatan Umum dipimpin oleh Bp. Sandimun. Kegiatan tersebut dibuka setiap hari kerja mulai pk 08.00-13.00. Ternyata penyatuan lokasi tersebut mendapat tanggapan sangat positif dari masyarakat, karena berada dipusat kota dan dengan biaya relative murah dan terjangkau oleh masyarakat luas. {'\n'}
                      </Text>
                      <Text style={{
                        textAlign: "justify",
                        marginLeft: 25,
                        marginRight:10,
                        marginBottom: 0,
                        fontSize: 14,
                        color: "black",
                      }}>
                        1. Pada tahun 1969 Bapak Sy. Syarif mendapat tugas ke Markas Besar PMI Jakarta, maka Ketua PMI Kota Semarang diserah terimakan kepada Bp. Letkol dr. A. Suroyo yang memimpin PMI sampai dengan tahun 1977.{'\n'}
                        2. Mengingat PMI mempunyai 2 kantor, yaitu di Jl. Bojong (Jl. Pemuda No. 100 dahulu untuk kantpr Migas) sebagai pusat administrasi, sedangkan pusat pelayanan donor darah dan Balai Pengobatan Umum di Bulu (Jl. Soegijapranata No. 31 semarang), untuk efisiensi diputuskan bahwa kegiatan kantor administrasi menjadi satu atap dengan kegiatan pelayanan donor darah dan Balai Pengobatan.{'\n'}{'\n'}
                      
                        </Text>
                      <Text style={{
                        textAlign: "justify",
                        margin: 10,
                        marginBottom: 0,
                        fontSize: 14,
                        color: "black",
                      }}> 
                      Sebagai realisasi dari yang pertama tersebut diatas pada tahun 1974 telah ditanda tangani perjanjian dengan PT. Migas yang berisi :

                      {'\n\n'}“Kantor PMI Jl. Bodjong diserahkan PT. Migas dan PMI mendapat uang pesangon sebesar Rp. 13.200.000.- (Tiga belas juta dua ratus ribu rupiah). Uang tersebut dipergunakan untuk membangun gedung di Jl. Mgr. Soegijapranata; Gedung bagian depan menjadi 2 lantai dan merehab gedung yang lain untuk pelayanan PMI.”
                      {'\n\n  '}Pada tanggal 21 Juli 1975, diresmikan pembangunan Gedung PMI beserta pelayanannya oleh Bp. Walikota Semarang Hadiyanto.

                      {'\n\n  '}Pada tahun 1978 dalam forum musyawarah Cabang Bp. Soerojo menyerahkan kepemimpinan PMI kepada Soewarno, SH.

                      {'\n\n  '}Adapun Ketua PMI Kota Semarang dari Tahun 1950 s/d sekarang adalah sebagai berikut :
                      {'\n\n  '}1. Tahun 1950-1968  : Dr. Sy. Syarif
                      {'\n\n  '}2. Tahun 1968-1978  : Dr. A. Soerojo
                      {'\n\n  '}3. Tahun 1978-1995  : Soewarno, SH
                      {'\n\n  '}4. Tahun 1996-2001  : Drs. H. Farchani
                      {'\n\n  '}5. Tahun 2001-2006  : Prof. Dr. J. Kartini Soejendro
                      {'\n\n  '}6. Tahun 2006-2011  : Drs. Saman Kadarisman
                      {'\n\n  '}7. Tahun 2011-2016  : Drs. Saman Kadarisman
                      {'\n\n  '}8. Tahun 2016-2021  : Dr. dr. Shofa Chasani, SpFa, SpPD-KGH, Finasim
                      {'\n\n  '}9. Tahun 2021-2026  : Dr. dr. Awal Prasetyo, M.Kes., Sp.THT-KL., MARS.
                      
                      {'\n\n'}(Pada tahun 1995 Bp. Soewarno, SH meninggal dunia, maka Ketua dipegang sementara oleh Wakil Ketua I Prof. Dr. AG. Soemantri)
                      </Text>
                      <View
                        style={{
                            marginTop : 25,
                            marginBottom:20,
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>
                      <Icon.Button name="facebook-square" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://www.facebook.com/pmi.semarang')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="instagram" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://www.instagram.com/pmikotasemarang/')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="youtube-play" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://www.youtube.com/channel/UCxTx1Tho2WraxpwWJQ3Eddw')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="twitter-square" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://twitter.com/pmikotasemarang?lang=id')}}/>
                      <Text>{'  '}</Text>
                      <Icon.Button name="whatsapp" size={25} color="#900" backgroundColor='#fadbd9' onPress={()=>{ Linking.openURL('https://web.whatsapp.com/send?phone=6282136700876&text=Halo%20PMI%20Kota%20Semarang')}} />
                     
                       </View>
                      
                    
                </TouchableOpacity>
            </Card>
        </View>
        <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:100,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Dashboard')} >
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Dashboard
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>

    </Container>
  );
}

export default Sejarah;
