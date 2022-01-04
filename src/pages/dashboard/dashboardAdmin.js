import React, {useState} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
    Button,
} from 'react-native';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import Bg from '../../image/baground3.jpeg';

function DashboardAdmin(props) {
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
                style={styles.logoUDD}
            />
            <Image
                source={require('../image/Logo2.png')}
                style={styles.logoSehat}
            />
            <Text>DASHBOARD ADMIN</Text>
            <Card
                style={{
                    backgroundColor: '#000',
                    width: '40%',
                    marginRight: '2%',
                }}>
                <TouchableOpacity onPress={goNextPage.bind(this, 'ListUser')}>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,

                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        Daftar User
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
                    onPress={goNextPage.bind(this, 'ListPendonor')}>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,

                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        Daftar Pendonor
                    </Text>
                </TouchableOpacity>
            </Card>
            <Card
                style={{
                    backgroundColor: '#000',
                    width: '40%',
                    marginRight: '2%',
                }}>
                <TouchableOpacity onPress={goNextPage.bind(this, 'Login')}>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,

                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </Card>
        </Container>
    );
}

export default DashboardAdmin;
