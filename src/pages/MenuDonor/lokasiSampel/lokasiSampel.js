import React, {useState} from 'react';
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
import {Container, Card} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import Bg from '../../image/Baground2.jpg';

function lokasiSampel(props) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const goNextPage = page => {
        if (page) {
            if (page !== 'gedungUddKonvalesen' && page !== 'Dashboard') {
                Alert.alert('Warning', 'Menu Ini Belum Bisa Digunakan', [
                    {text: 'OK', onPress: () => null},
                ]);
            } else {
                props.navigation.navigate(page);
            }
        }
    };
    return (
        <Container>
            <Image
                source={require('../../image/logo.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../image/Logo2.png')}
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
                        marginTop: 25,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                    }}>
                    PILIH LOKASI AMBIL {'\n'}CONTOH DARAH
                </Text>

                <Card
                    style={{
                        backgroundColor: '#70282b',
                        marginTop: 80,
                        marginBottom: 20,
                        width: '86%',
                        marginLeft: '7%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'gedungUddKonvalesen')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Gedung UDD PMI Kota Semarang
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card
                    style={{
                        backgroundColor: '#70282b',
                        marginTop: 10,
                        marginBottom: 20,
                        width: '86%',
                        marginLeft: '7%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Konvalesen17')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Mobil Unit Terdekat
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card
                    style={{
                        backgroundColor: '#70282b',
                        marginTop: 10,
                        marginBottom: 20,
                        width: '86%',
                        marginLeft: '7%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Konvalesen22')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Tempatmu
                        </Text>
                    </TouchableOpacity>
                </Card>
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
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Dashboard')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,

                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                            Kembali
                        </Text>
                    </TouchableOpacity>
                </Card>
                <View
                    style={{
                        width: '40%',
                        marginLeft: '2%',
                    }}></View>
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

export default lokasiSampel;

