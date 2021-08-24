import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Account, Home, LoadingStart, Login, Register} from '../pages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

function index() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingStart">
                <Stack.Screen
                    name="LoadingStart"
                    component={LoadingStart}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default index;
