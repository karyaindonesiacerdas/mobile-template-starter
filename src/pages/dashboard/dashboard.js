import React, {useState} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import Bg from '../../image/Baground2.jpg';

function Dashboard(props) {
    const goNextPage = page => {
        if (page === 'Logout') {
            AsyncStorage.clear();
            props.navigation.replace(page);
        }else {
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
                style={styles.logoUDD}
            />
            <Image
                source={require('../image/Logo2.png')}
                style={styles.logoSehat}
            />
            <ScrollView>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Konvalesen14')}>
                        <Image
                            source={require('../image/pesan.jpg')}
                            style={{
                                marginTop: 20,
                                width: 60,
                                height: 60,
                                marginRight:290,
                                alignSelf: 'center',
                            }}
                        />
                    </TouchableOpacity>
                <View style={styles.viewAtas}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            width: 120,
                            height: 120,
                        }}>
                        <Image
                            source={{
                                uri: 'https://www.pmi-kabtegal.or.id/asset/foto_statis/pmi_jadul.jpg',
                            }}
                            style={styles.ImageAtas}
                        />
                        <Text style={styles.textAtas}>
                            Sejarah PMI{'\n'}Kota Semarang
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            width: 120,
                            height: 120,
                        }}>
                        <Image
                            source={{
                                uri: 'https://pmikotasemarang.or.id/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-14-at-17.14.08-1024x576.jpeg',
                            }}
                            style={styles.ImageAtas}
                        />
                        <Text style={styles.textAtas}>
                            Info kegiatan {'\n'}PMI & Donor Darah
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#fff',
                            width: 120,
                            height: 120,
                        }}>
                        <Image
                            source={{
                                uri: 'https://pmi.or.id/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-18-at-00.21.46.jpeg',
                            }}
                            style={styles.ImageAtas}
                        />
                        <Text style={styles.textAtas}>
                            Info Plasma {'\n'}Konvalesen
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewAtas}>
                    <Card style={styles.cardTengah}>
                        <TouchableOpacity
                        onPress={goNextPage.bind(this, 'EditProfil')}>
                            <Text style={styles.textTengah}>Edit Profil</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card style={styles.cardTengah}>
                        <TouchableOpacity onPress={goNextPage.bind(this, 'Riwayat')}>
                            <Text style={styles.textTengah}>Riwayat Donor</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card style={styles.cardTengah}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'Login')}>
                            <Text style={styles.textTengah}>Logout</Text>
                        </TouchableOpacity>
                    </Card>
                </View>

                <View style={styles.viewAtas}>
                    <TouchableOpacity
                        style={styles.cardStyle}
                        onPress={goNextPage.bind(this, 'Alur01')}>
                        <Image
                            source={require('../image/alur.png')}
                            style={{
                                marginTop: 5,
                                width: 60,
                                height: 60,
                                alignSelf: 'center',
                            }}
                        />

                        <Text style={styles.textBawah}>
                            Alur Donor 
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardStyle}
                        onPress={goNextPage.bind(this, 'Home')}>
                        <Image
                            source={require('../image/donor.png')}
                            style={{
                                marginTop: 5,
                                width: 80,
                                height: 60,
                                alignSelf: 'center',
                            }}
                        />

                        <Text style={styles.textBawah}>
                            Persyaratan & pendaftaran
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardStyle}
                        onPress={goNextPage.bind(this, 'InfoStok01')}>
                        <Image
                            source={require('../image/infostok.jpeg')}
                            style={{
                                marginTop: 5,
                                width: 60,
                                height: 60,
                                alignSelf: 'center',
                            }}
                        />

                        <Text style={styles.textBawah}>
                             Stok & Kebutuhan 
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewAtas}>
                    <TouchableOpacity
                        style={styles.cardStyle}
                        onPress={goNextPage.bind(this, 'MobilUnit01')}>
                        <Image
                            source={require('../image/jadwal2.png')}
                            style={{
                                marginTop: 5,
                                width: 60,
                                height: 60,
                                alignSelf: 'center',
                            }}
                        />

                        <Text style={styles.textBawah}>
                            Jadwal Mobil {'\n'}Unit
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardStyle}>
                        <Image
                            source={require('../image/konseling2.jpeg')}
                            style={{
                                marginTop: 5,
                                width: 60,
                                height: 60,
                                alignSelf: 'center',
                            }}
                        />

                        <Text style={styles.textBawah}>
                            Konseling Donor 
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardStyle}>
                        <Image
                            source={require('../image/download.png')}
                            style={{
                                marginTop: 10,
                                width: 120,
                                height: 60,
                                alignSelf: 'center',
                            }}
                        />
                        <Text style={styles.textBawah}>
                            Kontak 
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    );
}

export default Dashboard;
