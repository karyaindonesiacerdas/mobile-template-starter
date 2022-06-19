import React, {useState, useEffect} from 'react';
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
import {
    Alert,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking,
} from 'react-native';
import Bg from '../../image/Baground2.jpg';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function InfoKonvalesen(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };
    return (
        <Container>
            <Image
                source={Bg}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            />
            <Image
                source={require('../../image/logo.png')}
                style={{
                    width: 55,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../image/Logo2.png')}
                style={{
                    position: 'absolute',
                    width: 58,
                    height: 60,
                    margin: 20,

                    right: 10,
                    top: 10,
                }}></Image>
            <ScrollView>
                <View style={styles.viewContainer}>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 0,
                            marginBottom: 50,
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'black',
                        }}>
                        Sedulur Plasma Gencarkan Screening Plasma Jemput Bola
                    </Text>
                    <Card style={styles.flowCardPeach}>
                        <TouchableOpacity>
                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                }}>
                                <Image
                                    source={require('../../image/donordarah.jpeg')}
                                    style={{
                                        marginTop: 10,
                                        marginBottom: 20,
                                        width: 200,
                                        height: 200,
                                        alignSelf: 'center',
                                    }}
                                />
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                }}>
                                <Text
                                    style={{
                                        textAlign: 'justify',
                                        fontSize: 14,
                                        color: 'black',
                                        margin: 5,
                                    }}>
                                    {'      '}Semarang, Sebanyak 21 Penyintas
                                    Covid-19 di wilayah Meteseh Tembalang Sabtu
                                    (14/08) hadir di Mushola Nurul Huda Dinar
                                    mas untuk mengikuti sampling darah plasma
                                    konvalesen.{'\n'}
                                    {'      '}Koordinator Sedulur Plasma,
                                    Purwoko – Lek MESEM mengatakan Sampling
                                    darah plasma konvalesen ini merupakan
                                    Inovasi Giat Sosial Kemanusiaan dalam Rangka
                                    Usaha membantu Ketersediaan Plasma
                                    Konvalesen di UDD PMI KOTA SEMARANG.
                                    {'\n      '}“Tingginya permintaan Plasma
                                    Konvalesen yang masuk ke UDD PMI Kota
                                    Semarang pada awal juli kemarin, membuat
                                    Waktu untuk Proses Donor Plasma Konvalesen
                                    membutuhkan Waktu sampai 2 hari. Hari
                                    pertama untuk Sampling dan Hari kedua untuk
                                    Proses Donor Plasma Konvalesen baik secara
                                    Konvensional maupun Apheresis,” paparnya.
                                    {'\n      '}Melihat kondisi diatas, Muncul
                                    ide untuk memfasilitasi para Penyintas untuk
                                    Lakukan Sampling di lokasi dekat Rumah.
                                    Harapannya semakin banyak Penyintas yang
                                    Tergerak Dan merasa Nyaman dalam Proses
                                    Sampling tersebut.
                                    {'\n      '}“Gagasan ini muncul setelah
                                    diskusi dengan beberapa rekan Relawan yang
                                    selama beberapa minggu terakhir terjun
                                    langsung ke lapangan untuk Membantu Edukasi,
                                    Pendampingan Penyintas Covid19 yang Mau
                                    Berdonor Plasma Konvalesen,” tutur Retno
                                    Ketua RW 16 Meteseh
                                    {'\n      '}Tim Sedulur Plasma Sangat
                                    Komunikatif, dalam memberikan info, arahan
                                    dan Motivasi untuk Donor Plasma Konvalesen
                                    sehingga kegiatan ini dapat berjalan lancar
                                    dan Antusiasme warga sangat besar,
                                    ungkapnya.
                                    {'\n      '}”Terbukti saat giat sampling
                                    pertama (31/07) sebanyak 25 Penyintas sudah
                                    Mendaftar secara Online, telah hadir
                                    sebanyak 21 dan menggikuti hingga selesai
                                    dan hari ini (14/08) sebanyak 20 Pendonor
                                    Hadir dari total 23 Orang yang sudah
                                    mendaftar secara Online,” tutur Retno.
                                    {'\n      '}Ni Wayan Koordinator Sedulur
                                    Plasma dan juga warga RW 16 Meteseh
                                    melaporkan pada giat sampling pertama
                                    (31/07) Penyintas Covid-19 yang hadir pada
                                    acara ini sebanyak 21 penyintas 11
                                    diantaranya lolos untuk Donor Plasma
                                    Konvalesen. ”Giat sampling pertama (31/07),
                                    semua yang lolos Donor plasma Konvalesen
                                    dengan metode Apheresis hadir ke UDD PMI
                                    KOTA SEMARANG pada Minggu, 01 Agustus yang
                                    lalu,” lapornya.
                                    {'\n      '}Selanjutnya, pada hari ini 14
                                    agustus 2021 kembali di laksanakan event
                                    serupa, kali ini akan lebih Semarak, karena
                                    dalam rangka menyambut peringatan HUT RI ke
                                    76.
                                    {'\n      '}“Sebanyak 20 orang penyintas
                                    covid-19 ikut berpartisipasi menjadi
                                    PAHLAWAN PLASMA,”tambahnya.
                                    {'\n      '}Sebelum berdonor para calon
                                    Pendonor wajib melakukan REGISTRASI melalui
                                    link berikut bit.ly/regSEDULURPLASMAJUL21dan
                                    selanjutnya akan mendapatkan Jadwal jam
                                    kedatangan, sehingga Protokol Kesehatan
                                    Covid 19 dapat dijalankan secara maksimal.
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginTop: 25,
                                    marginBottom: 20,
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                }}>
                                <Icon.Button
                                    name="facebook-square"
                                    size={25}
                                    color="#900"
                                    backgroundColor="#fadbd9"
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://www.facebook.com/pmi.semarang',
                                        );
                                    }}
                                />
                                <Text>{'  '}</Text>
                                <Icon.Button
                                    name="instagram"
                                    size={25}
                                    color="#900"
                                    backgroundColor="#fadbd9"
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://www.instagram.com/pmikotasemarang/',
                                        );
                                    }}
                                />
                                <Text>{'  '}</Text>
                                <Icon.Button
                                    name="youtube-play"
                                    size={25}
                                    color="#900"
                                    backgroundColor="#fadbd9"
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://www.youtube.com/channel/UCxTx1Tho2WraxpwWJQ3Eddw',
                                        );
                                    }}
                                />
                                <Text>{'  '}</Text>
                                <Icon.Button
                                    name="twitter-square"
                                    size={25}
                                    color="#900"
                                    backgroundColor="#fadbd9"
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://twitter.com/pmikotasemarang?lang=id',
                                        );
                                    }}
                                />
                                <Text>{'  '}</Text>
                                <Icon.Button
                                    name="whatsapp"
                                    size={25}
                                    color="#900"
                                    backgroundColor="#fadbd9"
                                    onPress={() => {
                                        Linking.openURL(
                                            'https://web.whatsapp.com/send?phone=6282136700876&text=Halo%20PMI%20Kota%20Semarang',
                                        );
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>
                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 100,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'Dashboard')}>
                            <Text
                                style={{
                                    marginVertical: 10,
                                    fontSize: 20,

                                    color: 'white',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}>
                                Dashboard
                            </Text>
                        </TouchableOpacity>
                    </Card>
                </View>
            </ScrollView>
        </Container>
    );
}

export default InfoKonvalesen;

