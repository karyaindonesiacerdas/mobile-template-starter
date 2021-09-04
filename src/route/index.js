import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	Account,
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
	Status,
	table,
	Sukses,
	Barcode3,
	Kegiatan,
	Barcode2,
	Kalender,
	Dashboard,
	Kuisioner,
	konvalesen02,
	Konvalesen03,
	Konvalesen04,
	Konvalesen05,
	Konvalesen06,
} from '../pages';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

function index() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="LoadingStart">
				<Stack.Screen name="LoadingStart" component={LoadingStart} options={{ headerShown: false }} />
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
				<Stack.Screen name="KegiatanDonor" component={KegiatanDonor} options={{ headerShown: false }} />
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="DonorBiasa" component={DonorBiasa} options={{ headerShown: false }} />
				<Stack.Screen name="Data" component={Data} options={{ headerShown: false }} />
				<Stack.Screen name="Berhasil" component={Berhasil} options={{ headerShown: false }} />
				<Stack.Screen name="Pilih" component={Pilih} options={{ headerShown: false }} />
				<Stack.Screen name="Gedung" component={Gedung} options={{ headerShown: false }} />
				<Stack.Screen name="Barcode" component={Barcode} options={{ headerShown: false }} />
				<Stack.Screen name="Status" component={Status} options={{ headerShown: false }} />
				<Stack.Screen name="table" component={table} options={{ headerShown: false }} />
				<Stack.Screen name="Sukses" component={Sukses} options={{ headerShown: false }} />
				<Stack.Screen name="Barcode3" component={Barcode3} options={{ headerShown: false }} />
				<Stack.Screen name="Kegiatan" component={Kegiatan} options={{ headerShown: false }} />
				<Stack.Screen name="Barcode2" component={Barcode2} options={{ headerShown: false }} />
				<Stack.Screen name="Kalender" component={Kalender} options={{ headerShown: false }} />
				<Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
				<Stack.Screen name="Kuisioner" component={Kuisioner} options={{ headerShown: false }} />
				<Stack.Screen name="konvalesen02" component={konvalesen02} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen03" component={Konvalesen03} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen04" component={Konvalesen04} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen05" component={Konvalesen05} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen06" component={Konvalesen06} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default index;
