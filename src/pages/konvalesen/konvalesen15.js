import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

function Konvalesen15(props) {
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
                source={require('../../asset/logoUDD.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../asset/logoSehat.png')}
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
                    Daftar
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    Donor Darah Konvalesen
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,

                        marginTop: 80,
                        marginBottom: 20,
                        fontSize: 25,
                        fontWeight: 'bold',

                        textAlign: 'center',
                        color: 'black',
                    }}>
                    Kami Menginformasikan hasil Pemeriksaan plasma konvalesen
                    {'\n'}Dengan nama:
                    {'\n'}
                    [Nama Calon Pendonor]{'\n'}
                    Status:{'\n'}
                    [Lolos/Tidak Lolos]{'\n'}
                    {'\n'}
                    (Jika Lolos) Silahkan Klik Selanjutnya Untuk Memilih Lokasi
                    Donor Darah Konvalesen
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
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Konvalesen14')}>
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
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginLeft: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Konvalesen16')}>
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
                source={require('../../asset/footer.png')}
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

export default Konvalesen15;
