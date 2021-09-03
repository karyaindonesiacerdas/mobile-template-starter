import React, {useState} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container, Card, List} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

function index(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };
    return (
        <Container>
            <Image
                source={require('../../asset/logoUDD.png')}
                style={styles.logoUDD}></Image>
            <Image
                source={require('../../asset/logoSehat.png')}
                style={styles.logoSehat}></Image>

            <ScrollView>
                <Text style={styles.headerText1}>Alur Donor</Text>
                <Text style={styles.headerText2}>Biasa</Text>

                <View style={styles.viewContainer}>
                    <Card style={styles.flowCardRed}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>Login</Text>
                        </TouchableOpacity>
                    </Card>
                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{marginTop: 0, alignSelf: 'center'}}
                    />
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pendaaftaran donor
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardRed}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Verifikasi data donor
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pemeriksaan Hb dan golongan darah
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardRed}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pemeriksaan kesehatan
                            </Text>
                            <Text>a. Pengukuran tekanan darah</Text>
                            <Text>b. Pengukuran berat badan</Text>
                            <Text>c. Pemeriksaan nadi</Text>
                            <Text>d. Pemeriksaan suhu tubuh</Text>
                            <Text>e. Wawancara riwayat kesehatan</Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pengambilan darah donor
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardRed}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Refreshment area
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    <Card style={styles.flowCardBrown}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pendonor setelah mendonorkan darah dapat
                                beristirahat sebentar sambil minum air putih
                                atau makan makanan kecil
                            </Text>
                            <Text style={styles.textInCard}>
                                Tips setelah donor:
                            </Text>

                            <Text>
                                a. Membatasi aktivitas fisik Anda selama
                                setidaknya 5 jam setelah donor
                            </Text>
                            <Text>
                                b. Melepaskan plester setidaknya 4-5 jam setelah
                                Anda selesai donor darah
                            </Text>
                            <Text>c. Menghindari panas</Text>
                            <Text>
                                d. Menghindari untuk berdiri dalam waktu yang
                                lama
                            </Text>
                            <Text>
                                e. Jika Anda merokok, sebaiknya Anda tidak
                                merokok selama 2 jam setelah donor darah
                            </Text>
                            <Text>
                                f. Jika Anda minum alkohol, sebaiknya Anda tidak
                                minum alkohol sampai 24 jam setelah donor
                            </Text>
                            <Text>
                                g. Minum banyak cairan untuk menggantikan cairan
                                tubuh Anda yang hilang
                            </Text>
                            <Text>
                                h. Makan makanan yang mengandung: zat besi
                                tinggi, vitamin C, asam folat, riboflavin
                                (vitamin B2), damn vitamin B6
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <View style={styles.viewBackForward2}>
                        <Card
                            style={{
                                backgroundColor: '#000',
                                width: '40%',
                                marginRight: '2%',
                            }}>
                            <TouchableOpacity
                                onPress={goNextPage.bind(this, 'Alur01')}>
                                <Text style={styles.textInCard}>Kembali</Text>
                            </TouchableOpacity>
                        </Card>
                        <View
                            style={{
                                width: '50%',
                                marginLeft: '5%',
                            }}></View>
                    </View>
                </View>
            </ScrollView>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../asset/footer.png')}
                style={styles.imageBackgroundStyle}
                imageStyle={{
                    resizeMode: 'cover',
                    alignSelf: 'flex-end',
                }}></ImageBackground>
        </Container>
    );
}

export default index;
