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

function InfoKegiatan(props) {
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
                        Info Kegiatan
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
                                    source={require('../../image/kegiatan.png')}
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
                                    }}>
                                    {'      '}SEMARANG – Palang Merah Indonesia
                                    (PMI) Kota Semarang menggelar apel
                                    kesiapsiagaan bencana di halaman markas PMI
                                    Kota Semarang, Jalan Sogeijopranoto, 35 Kota
                                    Semarang, Jawa Tengah, Sabtu (4/12/2021)
                                    pagi.
                                    {'\n      '} Saat melakukan pengecekan
                                    sarana dan prasarana, Ketua PMI Kota
                                    Semarang Awal Prasetyo mengatakan aktivitas
                                    relawan sudah tidak bisa dianggap sebagai
                                    sebuah kegiatan sampingan. Sebab, menurutnya
                                    relawan harus memiliki standar kompetensi
                                    keterampilan yang dapat
                                    dipertanggungjawabkan.
                                    {'\n      '} “Relawan tidak bisa menjadi
                                    sampingan, relawan harus profesional,” kata
                                    Awal Prasetyo.
                                    {'\n      '} Awal lantas menerangkan
                                    prefesional yang dia maksud, yakni memiliki
                                    keterampilan yang dapat dipertanggung
                                    jawabkan ketika menolong korban. Selain itu
                                    juga memiliki peralatan yang sesuai standar
                                    profesional, utamanya dengan pelayanan
                                    ambulans, “Profesional disini bukan secara
                                    ekonomi, tapi secara pelayanan, sesuai
                                    dengan misi PMI, prefesional dan lebih
                                    dicintai masyarakat,” lanjutnya.
                                    {'\n      '} Lebih lanjut dia menerangkan,
                                    relawan PMI Kota Semarang harus diupayakan
                                    bisa tersertifikasi di lembaga sertifikasi
                                    profesi (LSP) PMI Jateng. Oleh karena itu
                                    dia berharap peran relawan dari
                                    fakultas/akademi gizi atau kesehatan dalam
                                    memberikan pelayanan makanan bagi korban
                                    bencana sesuai standar makan yang sehat.
                                    {'\n      '} Sementara, salah satu relawan
                                    senior PMI Kota Semarang, Roy Syaifuddin
                                    menerangkan peralatan yang telah siap untuk
                                    menghadapi bahaya musim hujan tahun ini. Dia
                                    sebut dari ambulans, perahu karet, alat
                                    perlindungan diri (APD) sampai alat bantu
                                    evakuasi ketinggian, “Ini juga sudah kita
                                    siapkan untuk posko siaga harian,” ungkap
                                    relawan yang ikut dalam bencana Tsunami
                                    Aceh.
                                    {'\n      '} Kepala Markas PMI Kota
                                    Semarang, Mugiyanto menambahkan, apel
                                    kesiapsiagaan bencana juga dimaksudkan untuk
                                    menyambut peringatan hari relawan
                                    internasional 5 Desember, “Apel
                                    kesiapsiagaan ini Juga memperingati hari
                                    relawan internasional pada 5 Desember. Jadi
                                    kita ajukan pada pagi hari ini,” ungkapnya.
                                    {'\n      '} Untuk itu, lanjutnya, PMI Kota
                                    Semarang melibatkan melibatkan perwakilan
                                    dari semua potensi kebencanaan di Kota
                                    Semarang seperti Basarnas, BPBD, Damkar,
                                    Baznas dan sebagainya.
                                    {'\n      '} “Kita libatkan semua potensi
                                    yang ada, kita melakukan pengecekan sumber
                                    daya manusia dan sarana dan prasarana yang
                                    ada,” jelasnya.
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

export default InfoKegiatan;

