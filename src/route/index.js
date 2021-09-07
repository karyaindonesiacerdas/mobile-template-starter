import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
	Konvalesen07,
	Konvalesen09,
	Konvalesen10,
	Konvalesen11,
	Konvalesen12,
	Konvalesen13,
	Konvalesen14,
	Konvalesen15,
	Konvalesen16,
	Konvalesen17,
	Konvalesen19,
	Konvalesen22,
	Konvalesen23,
	InfoStok01,
	InfoStok02,
	InfoStok03,
	MobilUnit01,
	MobilUnit02,
    Riwayat,
	PermintaanDarah,
	Alur01,
	Alur02,
	Alur03,
	Alur04,
	Alur05,
	Alur06,
	EditProfil,
	DashboardAdmin,
	ListUser,
	ListPendonor,
} from '../pages';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

function index() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Dashboard">
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
				<Stack.Screen name="Konvalesen07" component={Konvalesen07} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen09" component={Konvalesen09} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen10" component={Konvalesen10} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen11" component={Konvalesen11} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen12" component={Konvalesen12} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen13" component={Konvalesen13} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen14" component={Konvalesen14} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen15" component={Konvalesen15} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen16" component={Konvalesen16} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen17" component={Konvalesen17} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen19" component={Konvalesen19} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen22" component={Konvalesen22} options={{ headerShown: false }} />
				<Stack.Screen name="Konvalesen23" component={Konvalesen23} options={{ headerShown: false }} />
				<Stack.Screen name="InfoStok01" component={InfoStok01} options={{ headerShown: false }} />
				<Stack.Screen name="InfoStok02" component={InfoStok02} options={{ headerShown: false }} />
				<Stack.Screen name="InfoStok03" component={InfoStok03} options={{ headerShown: false }} />
				<Stack.Screen name="MobilUnit01" component={MobilUnit01} options={{ headerShown: false }} />
				<Stack.Screen name="MobilUnit02" component={MobilUnit02} options={{ headerShown: false }} />
                <Stack.Screen name="Riwayat" component={Riwayat} options={{ headerShown: false }} />
				<Stack.Screen name="Alur01" component={Alur01} options={{ headerShown: false }} />
				<Stack.Screen name="Alur02" component={Alur02} options={{ headerShown: false }} />
				<Stack.Screen name="Alur03" component={Alur03} options={{ headerShown: false }} />
				<Stack.Screen name="Alur04" component={Alur04} options={{ headerShown: false }} />
				<Stack.Screen name="Alur05" component={Alur05} options={{ headerShown: false }} />
				<Stack.Screen name="Alur06" component={Alur06} options={{ headerShown: false }} />
				<Stack.Screen name="PermintaanDarah" component={PermintaanDarah} options={{ headerShown: false }} />
				<Stack.Screen name="EditProfil" component={EditProfil} options={{ headerShown: false }} />
				<Stack.Screen name="DashboardAdmin" component={DashboardAdmin} options={{ headerShown: false }} />
				<Stack.Screen name="ListUser" component={ListUser} options={{ headerShown: false }} />
				<Stack.Screen name="ListPendonor" component={ListPendonor} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default index;
