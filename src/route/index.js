import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
	MenuDonor,
	LoadingStart,
	Login,
	Register,
	persyaratanBiasa,
	daftarDonorBiasa,
	infoPendonorBiasa,
	admBiasaResult,
	lokasiDonor,
	lokasiGedung,
	BarcodeDonor,
	Status,
	lokasiMobilUnit,
	Sukses,
	Barcode3,
	Kegiatan,
	Barcode2,
	Kalender,
	Dashboard,
	kuisionerBiasa,
	persyaratanKonvalesen,
	daftarDonorkonv,
	infoPendonorKonv,
	infoCovidPendonor,
	kuisonerKonvalesen,
	agrementKonvalesen,
	admKonvalesenResult,
	lokasiSampel,
	gedungUddKonvalesen,
	agrementPlace,
	barcodeSampel,
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
    ActiveDonor,
	ActiveDonorDetail,
	RiwayatDonor,
	PermintaanDarah,
	MenuAlur,
	alurDonorBiasa,
	alurDonorKonvalesen,
	permintaanDarah,
	pengadaanDonor,
	konselingDonor,
	EditProfil,
	DashboardAdmin,
	ListUser,
	ListPendonor,
	PermintaanDarah1,
	PermintaanSukses,
	GantiPasword,
	KartuDonor,
	Contact,
	InfoKegiatan,
	InfoKonvalesen,
	Sejarah,
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
				<Stack.Screen name="persyaratanBiasa" component={persyaratanBiasa} options={{ headerShown: false }} />
				<Stack.Screen name="MenuDonor" component={MenuDonor} options={{ headerShown: false }} />
				<Stack.Screen name="daftarDonorBiasa" component={daftarDonorBiasa} options={{ headerShown: false }} />
				<Stack.Screen name="infoPendonorBiasa" component={infoPendonorBiasa} options={{ headerShown: false }} />
				<Stack.Screen name="admBiasaResult" component={admBiasaResult} options={{ headerShown: false }} />
				<Stack.Screen name="lokasiDonor" component={lokasiDonor} options={{ headerShown: false }} />
				<Stack.Screen name="lokasiGedung" component={lokasiGedung} options={{ headerShown: false }} />
				<Stack.Screen name="BarcodeDonor" component={BarcodeDonor} options={{ headerShown: false }} />
				<Stack.Screen name="Status" component={Status} options={{ headerShown: false }} />
				<Stack.Screen name="lokasiMobilUnit" component={lokasiMobilUnit} options={{ headerShown: false }} />
				<Stack.Screen name="Sukses" component={Sukses} options={{ headerShown: false }} />
				<Stack.Screen name="Barcode3" component={Barcode3} options={{ headerShown: false }} />
				<Stack.Screen name="Kegiatan" component={Kegiatan} options={{ headerShown: false }} />
				<Stack.Screen name="Barcode2" component={Barcode2} options={{ headerShown: false }} />
				<Stack.Screen name="Kalender" component={Kalender} options={{ headerShown: false }} />
				<Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
				<Stack.Screen name="kuisionerBiasa" component={kuisionerBiasa} options={{ headerShown: false }} />
				<Stack.Screen name="persyaratanKonvalesen" component={persyaratanKonvalesen} options={{ headerShown: false }} />
				<Stack.Screen name="daftarDonorkonv" component={daftarDonorkonv} options={{ headerShown: false }} />
				<Stack.Screen name="infoPendonorKonv" component={infoPendonorKonv} options={{ headerShown: false }} />
				<Stack.Screen name="infoCovidPendonor" component={infoCovidPendonor} options={{ headerShown: false }} />
				<Stack.Screen name="kuisonerKonvalesen" component={kuisonerKonvalesen} options={{ headerShown: false }} />
				<Stack.Screen name="agrementKonvalesen" component={agrementKonvalesen} options={{ headerShown: false }} />
				<Stack.Screen name="admKonvalesenResult" component={admKonvalesenResult} options={{ headerShown: false }} />
				<Stack.Screen name="lokasiSampel" component={lokasiSampel} options={{ headerShown: false }} />
				<Stack.Screen name="gedungUddKonvalesen" component={gedungUddKonvalesen} options={{ headerShown: false }} />
				<Stack.Screen name="agrementPlace" component={agrementPlace} options={{ headerShown: false }} />
				<Stack.Screen name="barcodeSampel" component={barcodeSampel} options={{ headerShown: false }} />
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
                <Stack.Screen name="ActiveDonor" component={ActiveDonor} options={{ headerShown: false }} />
				<Stack.Screen name="ActiveDonorDetail" component={ActiveDonorDetail} options={{ headerShown: false }} />
				<Stack.Screen name="RiwayatDonor" component={RiwayatDonor} options={{ headerShown: false }} />
				<Stack.Screen name="MenuAlur" component={MenuAlur} options={{ headerShown: false }} />
				<Stack.Screen name="alurDonorBiasa" component={alurDonorBiasa} options={{ headerShown: false }} />
				<Stack.Screen name="alurDonorKonvalesen" component={alurDonorKonvalesen} options={{ headerShown: false }} />
				<Stack.Screen name="permintaanDarah" component={permintaanDarah} options={{ headerShown: false }} />
				<Stack.Screen name="pengadaanDonor" component={pengadaanDonor} options={{ headerShown: false }} />
				<Stack.Screen name="konselingDonor" component={konselingDonor} options={{ headerShown: false }} />
				<Stack.Screen name="PermintaanDarah" component={PermintaanDarah} options={{ headerShown: false }} />
				<Stack.Screen name="EditProfil" component={EditProfil} options={{ headerShown: false }} />
				<Stack.Screen name="DashboardAdmin" component={DashboardAdmin} options={{ headerShown: false }} />
				<Stack.Screen name="ListUser" component={ListUser} options={{ headerShown: false }} />
				<Stack.Screen name="ListPendonor" component={ListPendonor} options={{ headerShown: false }} />
				<Stack.Screen name="PermintaanDarah1" component={PermintaanDarah1} options={{ headerShown: false }} />
				<Stack.Screen name="PermintaanSukses" component={PermintaanSukses} options={{ headerShown: false }} />
				<Stack.Screen name="GantiPasword" component={GantiPasword} options={{ headerShown: false }} />
				<Stack.Screen name="KartuDonor" component={KartuDonor} options={{ headerShown: false }} />
				<Stack.Screen name="InfoKegiatan" component={InfoKegiatan} options={{ headerShown: false }} />
				<Stack.Screen name="InfoKonvalesen" component={InfoKonvalesen} options={{ headerShown: false }} />
				<Stack.Screen name="Sejarah" component={Sejarah} options={{ headerShown: false }} />
				<Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
			
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default index;
