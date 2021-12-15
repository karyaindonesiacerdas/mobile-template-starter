import {View} from 'native-base';
import React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import SyncStorage from 'sync-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loading = true;

function LoadingStart(props) {
    useEffect(() => {
        async function checkToken() {
            var date = new Date().toLocaleDateString();
            date = `20${date.slice(6, 8)}-${date.slice(0, 2)}-${date.slice(
                3,
                5,
            )}T${new Date().toLocaleTimeString()}`;
            const role = await AsyncStorage.getItem('role');
            const token = await AsyncStorage.getItem('token');
            const exp = await AsyncStorage.getItem('exp');
            if (exp > date) {
                checkRole(role);
            } else {
                props.navigation.navigate('Login');
            }
        }
        function checkRole(role) {
            switch (role) {
                case 'pendonor':
                    props.navigation.navigate('Dashboard');
                    break;
                case 'admin':
                    props.navigation.navigate('DashboardAdmin');
                    break;
            }
        }
        checkToken();
    }, []);
    return (
        loading && (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 10,
                    position: 'relative',
                }}>
                <ActivityIndicator size="small" color="red" />
            </View>
        )
    );
}

export default LoadingStart;
