import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from './styles';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
} from 'react-native-table-component';
import Axios from 'axios';

const CONTENT = {
    tableHead: ['JADWAL KEGIATAN DONOR DARAH SENIN'],

    tableData: [['JAM', 'INSTASI', 'KETERANGAN']],
};

function MobilUnit02(props) {
    const url = 'http://sahabat-utd.id:6006';
    const headers = {
        'Content-Type': 'application/json',
    };
    const body = {
        pelaksanaan: '',
        bulan: '08',
        hari: 'Monday',
    };
    Axios.post(`${url}/api/simaba/mobil-unit`, JSON.stringify(body), {
        headers,
    })
        .then(r => r.data)
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.data.lenght; i++) {
                CONTENT.tableData.push([
                    data.data[i].pelaksanaan.slice(8, 10) +
                        data.data[i].pelaksanaan.slice(4, 8) +
                        data.data[i].pelaksanaan.slice(0, 4),
                    data.data[i].mulai.slice(0, 5),
                    data.data[i].instansi,
                    data.data[i].status,
                ]);
            }
        })
        .catch(err => console.log('test : ', err));
    const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };

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
                        marginTop: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                    }}>
                    Jadwal
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Mobil Unit
                </Text>
                <Card
                    style={{
                        backgroundColor: '#70282b',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 30,
                        marginBottom: 30,
                    }}>
                    <TouchableOpacity>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15,
                                borderRadius: 10,
                                textAlign: 'center',
                                fontWeight: 'bold',

                                color: 'white',
                            }}>
                            JADWAL MODAL UNIT - SENIN
                        </Text>
                    </TouchableOpacity>
                </Card>

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
            </ScrollView>
            <View
                style={{
                    alignContent: 'center',

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',

                    bottom: 10,
                }}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'MobilUnit01')}>
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
                        marginLeft: '5%',
                    }}></View>
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

export default MobilUnit02;
