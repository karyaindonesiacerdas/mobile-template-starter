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
            const role = await AsyncStorage.getItem('role');
            const token = await AsyncStorage.getItem('token');
            if (token){
                checkRole(role)
            } else {
                props.navigation.replace('Login');
            }
        }
        function checkRole(role) {
            switch (role) {
                case 'pendonor':
                    props.navigation.replace('Dashboard');
                    break;
                case 'admin':
                    props.navigation.replace('DashboardAdmin');
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
