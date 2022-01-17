import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import Bg from '../../image/baground3.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_MANAGEMENT} from '../../config/api';
import Axios from 'axios';
import {useQuery, useQueryClient} from 'react-query';
import {useNavigation} from '@react-navigation/native';

function Dashboard(props) {
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = React.useState(true);
    const navigation = useNavigation();

    useQuery(
        'check-token',
        async () => {
            const token = await AsyncStorage.getItem('token');
            
            // Aktif token :
            // const token =
            //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIiwiZG9ub3JfaWQiOiIiLCJuYW1hIjoiWmFocmkgUnVzbGkiLCJnb2xvbmdhbl9kYXJhaCI6IiIsInJvbGUiOiJwZW5kb25vciIsImdhbWJhciI6IiIsImV4cCI6MTYzOTU0MzA3NCwiaWF0IjoxNjM5NTM5NDc0LCJpc3MiOiJTQUhBQkFULVVURCJ9.3cMhcr3mXv-uBUNxeIg8U66W_qAbSl6md1P2nH_bxpg';

            // Expired token :
            // const token =
            //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InphaHJpLnJ1c2xpQGdtYWlsLmNvbSIsImRvbm9yX2lkIjoiIiwibmFtYSI6IlphaHJpIFJ1c2xpIiwiZ29sb25nYW5fZGFyYWgiOiIiLCJyb2xlIjoicGVuZG9ub3IiLCJnYW1iYXIiOiIiLCJleHAiOjE2Mzk1MzM2NTQsImlhdCI6MTYzOTUzMDA1NCwiaXNzIjoiU0FIQUJBVC1VVEQifQ.OSR5Va_GTj21vQnzHHOBc3WfyKyYeqU1cVrN_xS1DkY';
            const url = USER_MANAGEMENT;

            const body = {
                email: '',
            };
            const res = await Axios.post(`${USER_MANAGEMENT}/simaba`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            });
            return res.data;
        },
        {
            cacheTime: 0,
            onSettled: (data, error) => {
                console.log('DATA----', data);
                if (data?.code == 200) {
                    // token masih aktif
                }
                if (error || data?.code != 200) {
                    alert("Unauthorized");
                    // expired kembali ke login dan clear session
                    queryClient.invalidateQueries();
                    AsyncStorage.clear();
                    props.navigation.reset({
                        index: 0,
                        routes: [{name: 'Login'}],
                    });
                }
                setIsLoading(false);
            },
        },
    );

    useEffect(() => {
        // checkSession();
        checkProfile();
    }, []);

    if (isLoading) {
        return <ActivityIndicator size="small" style={{flex: 1}} />;
    }

    async function checkProfile() {
        const ktp = await AsyncStorage.getItem('ktp');
        if (ktp == null) {
            props.navigation.navigate('EditProfil');
        }
    }

    async function checkSession123() {
        const token = await AsyncStorage.getItem('token');
        const url = USER_MANAGEMENT;

        const body = {
            email: '',
        };
        Axios.post(`${USER_MANAGEMENT}/simaba`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(r => {
                console.info('then123----', r.data);
                if (r.data.code == 401) {
                    console.info('then----');
                    // AsyncStorage.clear();
                    // props.navigation.navigate('Login');
                }
            })
            .catch(err => {
                console.info('catch---');
                // AsyncStorage.clear();
                // props.navigation.navigate('Login');
            });
    }

    const goNextPage = page => {
        if (page === 'Login') {
            AsyncStorage.clear();
            props.navigation.navigate(page);
        } else {
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
                style={styles.logoUDD}
            />
            <Image
                source={require('../image/Logo2.png')}
                style={styles.logoSehat}
            />
            <ScrollView>
                <View>
                <Card style={{
                    		backgroundColor: '#e60013',
                            width: 120,
                            borderRadius: 10,
                            marginRight: 15,
                            alignSelf : 'flex-end'
                }}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'Login')}>
                            <Text style={styles.textTengah}>Logout</Text>
                        </TouchableOpacity>
                </Card>
                <TouchableOpacity
                    onPress={goNextPage.bind(this, 'Riwayat')}>
                    <Image
                        source={require('../image/pesan.jpg')}
                        style={{
                            width: 60,
                            height: 60,  
                            margin: 10,
                            alignSelf: 'flex-start'}}
                    />
                </TouchableOpacity>
                </View>
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
                            onPress={goNextPage.bind(this, 'KartuDonor')}>
                            <Text style={styles.textTengah}>Kartu Donor</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card style={styles.cardTengah}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'EditProfil')}>
                            <Text style={styles.textTengah}>Edit Profil</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card style={styles.cardTengah}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'Riwayat')}>
                            <Text style={styles.textTengah}>Riwayat Donor</Text>
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

                        <Text style={styles.textBawah}>Alur Donor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardStyle}
                        onPress={goNextPage.bind(this, 'MenuDonor')}>
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

                        <Text style={styles.textBawah}>Stok & Kebutuhan</Text>
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

                        <Text style={styles.textBawah}>Konseling Donor</Text>
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
                        <Text style={styles.textBawah}>Kontak</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    );
}

export default Dashboard;
