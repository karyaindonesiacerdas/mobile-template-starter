import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Account,
  Dashboard,
  Home,
  LoadingStart,
  Login,
  Register,
  KegiatanDonor,
  DonorBiasa,
  Data,
  Berhasil,
  Pilih,
  Gedung,
  Barcode,
  MobilUnit01,
  MobilUnit02,
  MobilUnit03,
  MobilUnit04,
  MobilUnit05,
  MobilUnit06,
  MobilUnit07,
  MobilUnit08,
  Alur01,
  Alur02,
  Alur03,
  Alur04,
  Alur05,
  Alur06,
  InfoStok01,
  InfoStok02,
  InfoStok03,
} from "../pages";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingStart">
        <Stack.Screen
          name="LoadingStart"
          component={LoadingStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KegiatanDonor"
          component={KegiatanDonor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DonorBiasa"
          component={DonorBiasa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Data"
            component={Data}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Berhasil"
            component={Berhasil}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Pilih"
            component={Pilih}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Gedung"
            component={Gedung}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Barcode"
            component={Barcode}
            options={{headerShown: false}}
        />
        <Stack.Screen
          name="MobilUnit01"
          component={MobilUnit01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobilUnit02"
          component={MobilUnit02}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobilUnit03"
          component={MobilUnit03}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobilUnit04"
          component={MobilUnit04}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobilUnit05"
          component={MobilUnit05}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobilUnit06"
          component={MobilUnit06}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobilUnit07"
          component={MobilUnit07}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobilUnit08"
          component={MobilUnit08}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Alur01"
          component={Alur01}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Alur02"
          component={Alur02}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Alur03"
          component={Alur03}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Alur04"
          component={Alur04}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Alur05"
          component={Alur05}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Alur06"
          component={Alur06}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="InfoStok01"
          component={InfoStok01}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="InfoStok02"
          component={InfoStok02}
          options={{ headerShown: false }}
        />
        
         <Stack.Screen
          name="InfoStok03"
          component={InfoStok03}
          options={{ headerShown: false }}
        />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index;
