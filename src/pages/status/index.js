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
import {Container, Header, Title, Left, HStack, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import Bg from '../../image/baground3.jpeg';
import {Button} from 'react-native-elements/dist/buttons/Button';

function Status(props) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState(null);
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
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
            <ScrollView>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 0,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Gedung UDD
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 0,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PMI Kota Semarang
                </Text>

                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 30,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    STATUS TRANSAKSI :
                </Text>

                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{}}>
                        <CheckBox
                            title="Lulus Pendaftaran Awal"
                            style={{width: '70%'}}
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                        <CheckBox
                            title="Pendaftaran Donor"
                            style={{width: '70%'}}
                            checked={check2}
                            onPress={() => setCheck2(!check2)}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 0,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}>
                    <CheckBox
                        title="Status Donor :"
                        style={{width: '70%'}}
                        checked={check3}
                        onPress={() => setCheck3(!check3)}
                    />
                    <View style={{marginLeft: 40}}>
                        <CheckBox
                            title="Berhasil"
                            style={{width: '70%'}}
                            checked={check4}
                            onPress={() => setCheck4(!check4)}
                        />
                        <CheckBox
                            title="Gagal"
                            style={{width: '70%'}}
                            checked={check5}
                            onPress={() => setCheck5(!check5)}
                        />
                    </View>
                </View>
                <View
                    style={{
                        alignContent: 'center',
                        marginLeft: 30,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        marginTop: 350,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'BarcodeDonor')}>
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
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'Dashboard')}>
                            <Text
                                style={{
                                    margin: 10,
                                    fontSize: 20,

                                    color: 'white',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}>
                                Selanjutnya
                            </Text>
                        </TouchableOpacity>
                    </Card>
                </View>
            </ScrollView>
        </Container>
    );
}

export default Status;
