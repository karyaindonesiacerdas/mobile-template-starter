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
import {Container, Card} from 'native-base';
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

const CONTENT = {
    tableData: [
        ['No', 'Pernyataan', '   Ya','Tidak'],
        ['1', 'Merasa sehat hari ini, tidak sedang flu/batuk/demam/pusing ', '',''],
        ['2', 'Apakah anda semalam tidur minimal 4 jam ? ', '',''],
        ['3', 'Dalam waktu 3 hari (72 jam) terakhir apakah anda minum obat ', '',''],
        ['4', 'Dalam waktu 3 hari (72 jam) terakhir apakah anda minum jamu ', '',''],
        ['5', 'Dalam waktu 1 minggu terakhir apakah anda mencabut gigi ? ', '',''],
        ['6', 'Dalam waktu 2 minggu terakhir apakah anda mengalami demam lebih dari 38 C ', '',''],
        ['7', 'Untuk donor wanita, dalam waktu 6 minggu terakhir apakah anda saat ini sedang hamil ', '',''],
        ['8', 'Dalam 8 minggu terakhir apakah anda mendonorkan darah, trombosit atau plasma ? ', '',''],
        ['9', 'Dalam 8 minggu terakhir apakah anda menerima vaksinasi atau suntikan lainya? ', '',''],
        ['10', 'Dalam 8 minggu terakhir apakah anda pernah kontak dengan orang yang menerima vaksinasi smallpox ? ', '',''],
        ['11', 'Dalam waktu 16 minggu terakhir apakah anda mendonorkan 2 kantong melalui proses aferesis ? ', '',''],
        ['12', 'Dalam waktu 24 minggu  terakhir apakah anada saat ini sedang menyusui ? ', '',''],
        ['13', 'Dalam waktu 12 bulan apakah anda pernah menerima transfusi darah ', '',''],
        ['14', 'Dalam waktu 12 bulan apakah anda pernah mendapatkan transpaltasi organ, jaringan atau sumsum tulang ', '',''],
        ['15', 'Dalam waktu 12 bulan apakah anda pernah cangkok tulang untuk kulit ? ', '',''],
        ['16', 'Dalam waktu 12 bulan apakah anda pernah tertusuk jarum medis tanpa sengaja  ', '',''],
        ['17', 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan orang HIV/AIDS  ', '',''],
        ['18', 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan pekerja seks komersil  ', '',''],
        ['19', 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan pengguna narkoba jarum suntik ?  ', '',''],
        ['20', 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan pengguna kosentrat faktor pembekuan ?  ', '',''],
        ['21', 'Donor wanita, apakah anda pernah berhubungan seksual dengan laki laki yang biseksual ?  ', '',''],
        ['22', 'Apakah anda pernah berhubungan seksual dengan penderita hepatitis  ', '',''],
        ['23', 'Apakah anda tinggal dengan penderita hepatitis  ', '',''],
        ['24', 'Apakah anda pernah tato ', '',''],
        ['25', 'Apakah anda memiliki tindik telinga atau bagian tubuh lainnya ', '',''],
        ['26', 'Apakah anda sedang atau pernah mendapat pengobatan sifilis atau GO (kencing nanah) ', '',''],
        ['27', 'Apakah anda pernah ditahan atau/dipenjara untuk waktu lebih dari 3 hari ', '',''],
        ['28', 'Dalam waktu 3 tahun apakah anda pernah diluar wilayah indonesia ', '',''],
        ['29', 'Tahun 1977 hingga sekarang apakah anda menerima uang, obat atau pembayaran lain untuk seks? ', '',''],
        ['30', 'Tahun 1977 hingga sekarang laki laki : apakah anda pernah berhubungan  seksual dengan laki laki walaupun sekali ? ', '',''],
        ['31', 'Tahun 1980 hingga sekarang apakah anda tinggal selama 5 tahun atau lebih di eropa (terutama inggris) ', '',''],
        ['32', 'Apakah anda menerima transfusi darah di inggris ? ', '',''],
        ['33', 'Tahun 1980 hingga 1996 apakah ada tingga lebih dari 3 bulan di inggris ? ', '',''],
        ['34', 'Apakah anda pernah mendapatkan hasil positif tes HIV/AIDS ', '',''],
        ['35', 'Apakah anda pernah menggunakan ajrum suntik untuk obat-obatan ', '',''],
        ['36', 'Apakah anda pernah menggunakan konsetrat faktor pembekuan ', '',''],
        ['37', 'Apakah anda pernah menderita hepatitis ', '',''],
        ['38', 'Apakah anda pernah menderita malaria ', '',''],
        ['39', 'Apakah anda pernah menderita kanker ', '',''],
        ['40', 'Apakah anda pernah bermasalah dengan jantung dan paru-paru ? ', '',''],
        ['41', 'Apakah anda pernah menderita perdarahan atau penyakit berhubungan dengan darah ? ', '',''],
        ['42', 'Apakah anda pernah berhubungan seksual dengan orang yang tinggal di afrika ', '',''],
        ['43', 'Apakah anda pernah tinggal di afrika ? ', '',''],
    ],
};
function Kuisioner(props) {
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
                        marginLeft: 10,
                        marginTop: -10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Kuisioner
                </Text>
                <Text
                    style={{
                        marginLeft: 10,
                        marginTop: -10,
                        marginBottom: 10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    Donor Darah Biasa
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
                                flexArr={[1, 8, 1, 1,]}
                                style={styles.row}
                                textStyle={styles.text}
                            />
                        </TableWrapper>
                    </Table>
                </View>
                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 20,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Data')} >
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
                        <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Berhasil')} >
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

export default Kuisioner;
