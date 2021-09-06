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
import {Container, Card, Input} from 'native-base';
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

function Kuisioner(props) {
    const [kuesioner, setKuesioner] = useState([
        { number: 1, label: 'Merasa sehat hari ini, tidak sedang flu/batuk/demam/pusing', value: undefined, yes: false, no: false },
        { number: 2, label: 'Apakah anda semalam tidur minimal 4 jam ?', value: undefined, yes: false, no: false },
        { number: 3, label: 'Dalam waktu 3 hari (72 jam) terakhir apakah anda minum obat', value: '', yes: false, no: false },
        { number: 4, label: 'Dalam waktu 3 hari (72 jam) terakhir apakah anda minum jamu', value: '', yes: false, no: false },
        { number: 5, label: 'Dalam waktu 1 minggu terakhir apakah anda mencabut gigi ?', value: '', yes: false, no: false },
        { number: 6, label: 'Dalam waktu 2 minggu terakhir apakah anda mengalami demam lebih dari 38 C', value: '', yes: false, no: false },
        { number: 7, label: 'Untuk donor wanita, dalam waktu 6 minggu terakhir apakah anda saat ini sedang hamil', value: '', yes: false, no: false },
        { number: 8, label: 'Dalam 8 minggu terakhir apakah anda mendonorkan darah, trombosit atau plasma ?', value: '', yes: false, no: false },
        { number: 9, label: 'Dalam 8 minggu terakhir apakah anda menerima vaksinasi atau suntikan lainya?', value: '', yes: false, no: false },
        { number: 10, label: 'Dalam 8 minggu terakhir apakah anda pernah kontak dengan orang yang menerima vaksinasi smallpox ?', value: '', yes: false, no: false },
        { number: 11, label: 'Dalam waktu 16 minggu terakhir apakah anda mendonorkan 2 kantong melalui proses aferesis ?', value: '', yes: false, no: false },
        { number: 12, label: 'Dalam waktu 24 minggu  terakhir apakah anada saat ini sedang menyusui ?', value: '', yes: false, no: false },
        { number: 13, label: 'Dalam waktu 12 bulan apakah anda pernah menerima transfusi darah', value: '', yes: false, no: false },
        { number: 14, label: 'Dalam waktu 12 bulan apakah anda pernah mendapatkan transpaltasi organ, jaringan atau sumsum tulang', value: '', yes: false, no: false },
        { number: 15, label: 'Dalam waktu 12 bulan apakah anda pernah cangkok tulang untuk kulit ?', value: '', yes: false, no: false },
        { number: 16, label: 'Dalam waktu 12 bulan apakah anda pernah tertusuk jarum medis tanpa sengaja', value: '', yes: false, no: false },
        { number: 17, label: 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan orang HIV/AIDS', value: '', yes: false, no: false },
        { number: 18, label: 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan pekerja seks komersil', value: '', yes: false, no: false },
        { number: 19, label: 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan pengguna narkoba jarum suntik ?', value: '', yes: false, no: false },
        { number: 20, label: 'Dalam waktu 12 bulan apakah anda pernah berhubungan seksual dengan pengguna kosentrat faktor pembekuan ?', value: '', yes: false, no: false },
        { number: 21, label: 'Donor wanita, apakah anda pernah berhubungan seksual dengan laki laki yang biseksual ?', value: '', yes: false, no: false },
        { number: 22, label: 'Apakah anda pernah berhubungan seksual dengan penderita hepatitis', value: '', yes: false, no: false },
        { number: 23, label: 'Apakah anda tinggal dengan penderita hepatitis', value: '', yes: false, no: false },
        { number: 24, label: 'Apakah anda pernah tato', value: '', yes: false, no: false },
        { number: 25, label: 'Apakah anda memiliki tindik telinga atau bagian tubuh lainnya', value: '', yes: false, no: false },
        { number: 26, label: 'Apakah anda sedang atau pernah mendapat pengobatan sifilis atau GO (kencing nanah)', value: '', yes: false, no: false },
        { number: 27, label: 'Apakah anda pernah ditahan atau/dipenjara untuk waktu lebih dari 3 hari', value: '', yes: false, no: false },
        { number: 28, label: 'Dalam waktu 3 tahun apakah anda pernah diluar wilayah indonesia', value: '', yes: false, no: false },
        { number: 29, label: 'Tahun 1977 hingga sekarang apakah anda menerima uang, obat atau pembayaran lain untuk seks?', value: '', yes: false, no: false },
        { number: 30, label: 'Tahun 1977 hingga sekarang laki laki : apakah anda pernah berhubungan  seksual dengan laki laki walaupun sekali ?', value: '', yes: false, no: false },
        { number: 31, label: 'Tahun 1980 hingga sekarang apakah anda tinggal selama 5 tahun atau lebih di eropa (terutama inggris)', value: '', yes: false, no: false },
        { number: 32, label: 'Apakah anda menerima transfusi darah di inggris ?', value: '', yes: false, no: false },
        { number: 33, label: 'Tahun 1980 hingga 1996 apakah ada tingga lebih dari 3 bulan di inggris ?', value: '', yes: false, no: false },
        { number: 34, label: 'Apakah anda pernah mendapatkan hasil positif tes HIV/AIDS', value: '', yes: false, no: false },
        { number: 35, label: 'Apakah anda pernah menggunakan ajrum suntik untuk obat-obatan', value: '', yes: false, no: false },
        { number: 36, label: 'Apakah anda pernah menggunakan konsetrat faktor pembekuan', value: '', yes: false, no: false },
        { number: 37, label: 'Apakah anda pernah menderita hepatitis', value: '', yes: false, no: false },
        { number: 38, label: 'Apakah anda pernah menderita malaria', value: '', yes: false, no: false },
        { number: 39, label: 'Apakah anda pernah menderita kanker', value: '', yes: false, no: false },
        { number: 40, label: 'Apakah anda pernah bermasalah dengan jantung dan paru-paru ?', value: '', yes: false, no: false },
        { number: 41, label: 'Apakah anda pernah menderita perdarahan atau penyakit berhubungan dengan darah ?', value: '', yes: false, no: false },
        { number: 42, label: 'Apakah anda pernah berhubungan seksual dengan orang yang tinggal di afrika', value: '', yes: false, no: false },
        { number: 43, label: 'Apakah anda pernah tinggal di afrika ?', value: '', yes: false, no: false },
      ])
    
    const kuesionerHandler = (stat, index) => {
        const newValue = kuesioner.map((checkbox, i) => {
            if (i === index && stat == 'yes')
              return {
                ...checkbox,
                yes: true,
                no: false,
                value: 'YA',
              }
            if (i == index && stat === 'no') {
                return {
                    ...checkbox,
                    yes: false,
                    no: true,
                    value: 'TIDAK',
                  }
            }
           return checkbox
         })
         setKuesioner(newValue)
    }
    const goNextPage = page => {
        var input = RefactorInput(kuesioner)
        if (page === 'Berhasil') {
            if (input.count !== 43){
                alert(`semua kuesioner harus diisi, sisa : ${43-input.count}`)
            }else {
                props.navigation.replace(page);
            }
        }else {
            props.navigation.replace(page)
        }
    };
    // console.log(input)
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
                        marginTop: 10,
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
                        <TableWrapper style={styles.wrapper}>
                            <Row
                                data={['No', 'Pernyataan', '   Ya','Tidak']}
                                flexArr={[-1, 6, 1, 1,]}
                                style={styles.row}
                                textStyle={styles.text}
                            />
                            {
                                kuesioner.map((dat, i) =>(
                                    <Row
                                    data={[dat.number,dat.label,<CheckBox
                                    style={{width:"0%"}}
                                    checked={dat.yes}
                                  onPress={() => 
                                    kuesionerHandler('yes',i)
                                }
                                />,
                                <CheckBox
                                style={{width:"10%"}}
                                checked={dat.no}
                                  onPress={() => kuesionerHandler('no',i)}
                                />]}
                                    flexArr={[-1, 6, 1, 1]}
                                    style={styles.head}
                                    textStyle={styles.text}
                                    key={i}
                                />
                                ))   
                            }  
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

function RefactorInput(val) {
    var count = 0
    var t = new Date().toISOString().slice(0, 10);
    for (let i=0;i< val.length; i++){
        if (val[i].value !== undefined && val[i].value !== '') {
            count++
        }
    }
    var input = {
        kode_calon_pendonor: '',
        tanggal: t,
        ktp: '',
        nama: '',
        1:val[0].value,
        2:val[1].value,
        3:val[2].value,
        4:val[3].value,
        5:val[4].value,
        6:val[5].value,
        7:val[6].value,
        8:val[7].value,
        9:val[8].value,
        10:val[9].value,
        11:val[10].value,
        12:val[11].value,
        13:val[12].value,
        14:val[13].value,
        15:val[14].value,
        16:val[15].value,
        17:val[16].value,
        18:val[17].value,
        19:val[18].value,
        20:val[19].value,
        21:val[20].value,
        22:val[21].value,
        23:val[22].value,
        24:val[23].value,
        25:val[24].value,
        26:val[25].value,
        27:val[26].value,
        28:val[27].value,
        29:val[28].value,
        30:val[29].value,
        31:val[30].value,
        32:val[31].value,
        33:val[32].value,
        34:val[33].value,
        35:val[34].value,
        36:val[35].value,
        37:val[36].value,
        38:val[37].value,
        39:val[38].value,
        40:val[39].value,
        41:val[40].value,
        42:val[41].value,
        43:val[42].value,
        count: count,
    }
    return input
}