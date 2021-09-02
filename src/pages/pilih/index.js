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
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import Bg from '../../image/Baground2.jpg';

function Pilih(props) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
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
                source={require('../image/logo.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../image/Logo2.png')}
                style={{
                    position: 'absolute',
                    width: 54,
                    height: 60,
                    margin: 20,

                    right: 10,
                    top: 10,
                }}></Image>
            <Text
                style={{
                    marginLeft: 170,
                    marginTop: 80,
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                Pilih
            </Text>
            <Text
                style={{
                    marginLeft: 70,
                    marginTop: 0,
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                Tempat Donormu
            </Text>
            <Card
                style={{
                    backgroundColor: 'brown',

                    marginTop: 80,
                    width: '86%',
                    marginLeft: '7%',
                }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goNextPage.bind(this, 'Gedung')}>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                        Gedung UDD PMI Kota semarang
                    </Text>
                </TouchableOpacity>
            </Card>
            <Card
                style={{
                    backgroundColor: 'brown',

                    marginTop: 60,
                    width: '86%',
                    marginLeft: '7%',
                }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goNextPage.bind(this, 'table')}>
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
                    backgroundColor: '#000',
                    width: '40%',
                    marginRight: '2%',
                }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goNextPage.bind(this, 'Berhasil')}>
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
                    alignContent: 'center',
                    marginLeft: 30,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    marginTop: 250,
                }}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goNextPage.bind(this, 'Berhasil')}>
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
            </View>
        </Container>
    );
}

export default Pilih;
