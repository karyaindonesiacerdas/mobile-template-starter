import React, {useState, useEffect} from 'react';
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
//import styles from "./styles";
import styles from './styles';
function ResultPermintaan(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [no_permintaan, setNoPermintaan] = useState('');
    useEffect(() => {
        setNoPermintaan(props.route.params.kode_permintaan);
    }, []);
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
                        color: 'black',
                    }}>
                    Permintaan
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'red',
                        marginBottom: 40,
                    }}>
                    Darah
                </Text>
                <Card style={styles.flowCardPeach}>
                    <Text
                        style={{
                            marginLeft: 20,
                            marginRight: 20,

                            marginTop: 20,
                            marginBottom: 20,
                            fontSize: 20,
                            fontWeight: 'bold',

                            textAlign: 'center',
                            color: 'black',
                        }}>
                        Permintaan Darah Berhasil {'\n'}
                        No Form : {'  ' + no_permintaan}
                    </Text>
                    <Text
                        style={{
                            marginLeft: 20,
                            marginRight: 20,

                            marginBottom: 20,
                            fontSize: 16,
                            fontWeight: 'bold',

                            textAlign: 'center',
                            color: 'black',
                        }}>
                        Terima Kasih telah mengajukan permintaan darah. {'\n'}{' '}
                        Permintaan akan di review dan akan diberitahukan
                        ketersediaannya
                    </Text>
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
                        backgroundColor: '#6e6562',
                        borderRadius: 10,
                        zIndex: 1,
                        marginTop: 10,
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'RiwayatPermintaan')}>
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: 'center',
                                margin: 15,

                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Riwayat Permintaan Darah
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

export default ResultPermintaan;

