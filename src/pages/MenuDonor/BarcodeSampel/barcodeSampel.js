import React, {useState, useEffect} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {
    Container,
    Header,
    Title,
    Left,
    Right,
    Button,
    Body,
    Content,
    Card,
    CardItem,
    Footer,
    FooterTab,
    Icon,
} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from '../../konvalesen/styles';

function barcodeSampel(props) {
    const [jadwal, setJadwal] = useState(null);
    const [lokasi, setLokasi] = useState(null);
    useEffect(() => {
        setJadwal(props.route.params.jadwal);
        setLokasi(props.route.params.lokasi);
    }, []);
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    return (
        <Container>
            <Image
                source={require('../../../asset/logoUDD.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../../asset/logoSehat.png')}
                style={{
                    position: 'absolute',
                    width: 54,
                    height: 60,
                    margin: 20,

                    right: 10,
                    top: 10,
                }}></Image>
            <ScrollView>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 25,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Gedung
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -5,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PMI Kota Semarang
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,

                        marginTop: 50,
                        marginBottom: 20,
                        fontSize: 24,
                        fontWeight: 'bold',

                        textAlign: 'center',
                        color: 'black',
                    }}>
                    Terima Kasih Anda Sudah Mendaftarkan Diri Sebagai Calon
                    Donor Plasma Konvalesen.{'\n'}
                    {'\n'}
                    Jadwal Pengambilan Sampel Darah di {lokasi} pada tanggal
                    {'\n'}
                    {'\n'}
                    {jadwal}
                    {'\n'}
                    Silahkan Datang Pada Jadwal Yang Sudah di Tentukan
                </Text>
            </ScrollView>
            <View
                style={{
                    alignContent: 'center',

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 30,
                    marginBottom: 10,
                }}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginLeft: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Konvalesen14')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                textAlign: 'center',

                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Selanjutnya
                        </Text>
                    </TouchableOpacity>
                </Card>
            </View>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../../asset/footer.png')}
                style={{
                    width: '100%',

                    backgroundColor: '#fff',
                    padding: 0,
                    paddingVertical: 90,
                    position: 'absolute',
                    zIndex: -1,
                    bottom: 0,
                }}
                imageStyle={{
                    resizeMode: 'cover',
                    alignSelf: 'flex-end',
                }}></ImageBackground>
        </Container>
    );
}

export default barcodeSampel;
