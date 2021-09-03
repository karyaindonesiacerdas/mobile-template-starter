import React, {useEffect, useState} from 'react';
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
    tableHead: ['Informasi kebutuhan Darah\nTanggal ..... Pukul ... '],

    tableData: [
        [
            'NO',
            'RUMAH SAKIT',
            'PRODUK DARAH',
            'GOLONGAN DARAH',
            'RHESUS',
            'JUMLAH',
            'STATUS',
        ],
    ],
};

function InfoStok02(props) {
    const [res, setRes] = useState({
        data: [
            {
                uid: '1',
                waktu: '2021-08-18T07:10:09Z',
                no_form: 'UTD-180821-0018',
                rumah_sakit: 'RSUP Dr Kariadi Semarang',
                produk_darah: 'PRC',
                golongan_darah: 'B',
                rhesus: '+',
                jumlah_permintaan: '1',
                jumlah_terpenuhi: 0,
                keterangan: 'DATA DUMMY',
                ditambahkan: '2021-08-18T13:21:34Z',
                diupdate: '',
            },
        ],
    });
    useEffect(() => {
        const url = 'http://sahabat-utd.id:6007';
        const headers = {
            'Content-Type': 'application/json',
        };
        Axios.post(`${url}/api/simaba/resipien`, JSON.stringify({}), {
            headers,
        })
            .then(r => {
                if (r.data.code == 200) {
                    // for (let i = 0; i < res.data.data.length; i++) {
                    //     CONTENT.tableData.push([
                    //         i + 1,
                    //         res.data.data[i].rumah_sakit,
                    //         res.data.data[i].produk_darah,
                    //         res.data.data[i].golongan_darah,
                    //         res.data.data[i].rhesus,
                    //         res.data.data[i].jumlah_permintaan,
                    //         res.data.data[i].keterangan,
                    //     ]);
                    // }
                    setRes(r.data);
                } else {
                    console.log('Error', r.data.message);
                }
            })
            .catch(err => {
                console.log('tes : ', err);
            });
    });

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
                        marginTop: 25,
                        fontSize: 35,
                        fontWeight: 'bold',
                    }}>
                    Informasi Stok &
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Kebutuhan Darah
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
                            KEBUTUHAN DARAH
                        </Text>
                    </TouchableOpacity>
                </Card>

                <View
                    style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: 100,
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
                            textStyle={styles.textHead}
                        />
                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={CONTENT.tableTitle}
                                style={styles.title}
                                heightArr={[28, 28]}
                                textStyle={styles.text}
                            />
                            {res.data.map((dat, i) =>
                                CONTENT.tableData.push([
                                    i + 1,
                                    dat.rumah_sakit,
                                    dat.produk_darah,
                                    dat.golongan_darah,
                                    dat.rhesus,
                                    dat.jumlah_permintaan,
                                    dat.jumlah_terpenuhi,
                                    dat.keterangan,
                                ]),
                            )}
                            <Row
                                data={CONTENT.tableData}
                                flexArr={[0.5, 1, 1, 1.3, 1, 1, 1]}
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
                    marginTop: 30,
                    bottom: 10,
                }}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'InfoStok01')}>
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

export default InfoStok02;
