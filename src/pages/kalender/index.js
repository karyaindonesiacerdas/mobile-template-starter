import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card, DatePicker} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
} from 'react-native-table-component';
import Bg from '../../image/Baground2.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PENDONOR } from '../../config/api';
import Axios from  'axios'
import DateTimePicker from '@react-native-community/datetimepicker';

const CONTENT = {
    tableHead: ['                                             Agustus 2021'],

    tableData: [
        ['   Senin', '  Selasa', '   Rabu','  Kamis','  Jumat','  Sabtu',' Minggu'],
        ['', '', '','','','','       1'],
        ['       2', '       3', '       4','       5','       6','      7','       8'],
        ['       9', '      10', '      11','      12','      13','     14','      15'],
        ['      16', '      17', '      18','      19','      20','     21','      22'],
        ['      23', '      24', '      25','      26','      27','     28','      29'],
        ['      30', '      31', '','','','',''],
    ],
};
function Kalender(props) {
    const [check1, setCheck1] = useState(false);
    const [date, setDate] = useState(null);
    const [pickerVis, setPickerVis] = useState(false);

    async function submitHandler(value){
        const ktp = await AsyncStorage.getItem('ktp')
        const token = await AsyncStorage.getItem('token')
        const url = PENDONOR;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        };
        const body = {
            ktp: ktp,
            lokasi: 'gedung udd'
        };
        console.log(body)
        Axios.put(`${url}/api/simaba/pendonor/update/lokasi`, JSON.stringify(body), {
            headers,
        })
            .then(res => {
              console.log(res.data)
                if (res.data.code === 200) { 
                    props.navigation.replace('Barcode');
                } else {
                    console.log('Error', res.data.message);
                }
            })
            .catch(err => {
                console.log('test : ', err);
            });
    }
    const goNextPage = page => {
        submitHandler()
        if (page) {
            props.navigation.replace(page);
        }
    };
    // const [datevalue, setDate] = useState(new Date());
    const _onDateChange = (e, newDate) => {
      setDate(newDate);
    };
    return (
        <Container>
            <Image source={Bg} style={{width: '100%', height: '100%', position: 'absolute'}} />
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
            {/* <DateTimePicker
            value={new Date(2018, 12, 31)}
testID="dateTimePicker"
timeZoneOffsetInMinutes={0}
value={date}
mode='date'
is24Hour={true}
display="default"
onChange={() => { setDate(new Date()); setPickerVis(true)}}
/> */}
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Gedung UDD
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        marginBottom: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PMI Kota Semarang
                </Text>

                <View
                    style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <Table
                        borderStyle={{
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                        <Row
                            data={CONTENT.tableHead}
                            flexArr={[1, 2, 1, 1]}
                            style={styles.head}
                            textStyle={styles.text}
                        />
                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={CONTENT.tableTitle}
                                style={styles.title}
                                heightArr={[28, 28]}
                                textStyle={styles.text}
                            />
                            <Rows
                                data={CONTENT.tableData}
                                flexArr={[1, 1, 1]}
                                style={styles.row}
                                textStyle={styles.text}
                            />
                        </TableWrapper>
                    </Table>
                </View>
                <View style={{}}>
                    <CheckBox title='Saya setuju untuk malakukan donor darah di gedung UDD pada tanggal yang telah di Tentukan' style={{width:"70%" }}checked={check1}
              onPress={() => setCheck1(!check1)}
              style={{ width: "70%" }}   />
          </View>
                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 400,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Gedung')} >
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
                        <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Barcode')} >
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

export default Kalender;
