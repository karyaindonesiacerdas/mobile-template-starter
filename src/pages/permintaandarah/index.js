import React, {useState} from 'react';
import {Image, Text, View, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card, Picker, Item} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import Bg from '../../image/baground3.jpeg';

function PermintaanDarah(props) {
    const [text, onChangeText] = React.useState('Useless Text');
    const [selectedLanguage, setSelectedLanguage] = React.useState();

    const [number, onChangeNumber] = React.useState(null);
    const [jeniskelamin, setJenisKelamin] = React.useState([
        {label: 'Laki-Laki', value: 'laki-laki', checked: false},
        {label: 'Perempuan', value: 'perempuan', checked: false},
    ]);
    const [gologanDarah, setGolonganDarah] = React.useState([
        {label: 'A', value: 'A', checked: false},
        {label: 'B', value: 'B', checked: false},
        {label: 'O', value: 'O', checked: false},
        {label: 'AB', value: 'AB', checked: false},
    ]);
    const [rhesus, setRhesus] = React.useState([
        {label: 'Positif', value: '+', checked: false},
        {label: 'Negatif', value: '-', checked: false},
    ]);
    const [input] = useState({
        gologan_darah: '',
        jenis_kelamin: '',
        rhesus: '',
    });
    const golonganDarahHandler = index => {
        const newValue = gologanDarah.map((checkbox, i) => {
            if (i !== index)
                return {
                    ...checkbox,
                    checked: false,
                };
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                };
                input.gologan_darah = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setGolonganDarah(newValue);
    };
    const jeniskelaminHandler = index => {
        const newValue = jeniskelamin.map((checkbox, i) => {
            if (i !== index)
                return {
                    ...checkbox,
                    checked: false,
                };
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                };
                input.jenis_kelamin = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setJenisKelamin(newValue);
    };
    const rhesusHandler = index => {
        const newValue = rhesus.map((checkbox, i) => {
            if (i !== index)
                return {
                    ...checkbox,
                    checked: false,
                };
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                };
                input.rhesus = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setRhesus(newValue);
    };
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    const submitData = value => {};
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
                        color: 'black',
                    }}>
                    Permintaan
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Darah
                </Text>

                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'normal',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Permintaan Darah
                </Text>
                <Item style={styles.item}>
                    <Picker
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Rumah Sakit" value="java" />
                        <Picker.Item label="Mandiri" value="js" />
                    </Picker>
                </Item>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'normal',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Tanggal Permintaan
                </Text>
                <Item style={styles.item}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                    />
                </Item>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'normal',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Nama Pasien
                </Text>
                <Item style={styles.item}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                    />
                </Item>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'normal',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Rumah Sakit
                </Text>
                <Item style={styles.item}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                    />
                </Item>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    jenis kelamin
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        {jeniskelamin.map((checkbox, i) => {
                            if (i < jeniskelamin.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => jeniskelaminHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                    <View>
                        {jeniskelamin.map((checkbox, i) => {
                            if (i >= jeniskelamin.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => jeniskelaminHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                </View>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'normal',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    No.Rekam Medis
                </Text>
                <Item style={styles.item}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                    />
                </Item>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Golongan Darah
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        {gologanDarah.map((checkbox, i) => {
                            if (i < gologanDarah.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => golonganDarahHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                    <View>
                        {gologanDarah.map((checkbox, i) => {
                            if (i >= gologanDarah.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => golonganDarahHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                </View>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Rhesus
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        {rhesus.map((checkbox, i) => {
                            if (i < rhesus.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => rhesusHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                    <View>
                        {rhesus.map((checkbox, i) => {
                            if (i >= rhesus.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => rhesusHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                </View>

                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 50,
                        marginBottom: 20,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'Home')}>
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
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'PermintaanDarah1')}>
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
            </ScrollView>
        </Container>
    );
}

export default PermintaanDarah;
