import React, { useState } from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { Container, Card } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function index(props) {
	const goNextPage = (page) => {
		if (page) {
			props.navigation.replace(page);
		}
	};

	return (
		<Container>
			<Image source={require('../../asset/logoUDD.png')} style={styles.logoUDD} />
			<Image source={require('../../asset/logoSehat.png')} style={styles.logoSehat} />
			<ScrollView>
				<View style={styles.viewAtas}>
					<TouchableOpacity style={{ backgroundColor: '#fff', width: 120, height: 120 }}>
						<Image
							source={{
								uri: 'https://www.pmi-kabtegal.or.id/asset/foto_statis/pmi_jadul.jpg'
							}}
							style={styles.ImageAtas}
						/>
						<Text style={styles.textAtas}>Sejarah PMI{'\n'}Kota Semarang</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#fff',
							width: 120,
							height: 120
						}}
					>
						<Image
							source={{
								uri:
									'https://pmikotasemarang.or.id/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-14-at-17.14.08-1024x576.jpeg'
							}}
							style={styles.ImageAtas}
						/>
						<Text style={styles.textAtas}>Info kegiatan {'\n'}PMI & Donor Darah</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							backgroundColor: '#fff',
							width: 120,
							height: 120
						}}
					>
						<Image
							source={{
								uri:
									'https://pmi.or.id/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-18-at-00.21.46.jpeg'
							}}
							style={styles.ImageAtas}
						/>
						<Text style={styles.textAtas}>Info Plasma {'\n'}Konvalesen</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.viewAtas}>
					<Card style={styles.cardTengah}>
						<TouchableOpacity>
							<Text style={styles.textTengah}>Edit Profil</Text>
						</TouchableOpacity>
					</Card>

					<Card style={styles.cardTengah}>
						<TouchableOpacity>
							<Text style={styles.textTengah}>Riwayat Donor</Text>
						</TouchableOpacity>
					</Card>

					<Card style={styles.cardTengah}>
						<TouchableOpacity>
							<Text style={styles.textTengah}>Logout</Text>
						</TouchableOpacity>
					</Card>
				</View>

				<View style={styles.viewAtas}>
					<TouchableOpacity style={styles.cardStyle} onPress={goNextPage.bind(this, 'Alur01')}>
						<Image
							source={require('../../asset/alurDonorDarah.png')}
							style={{
								marginTop: 5,
								width: 35,
								height: 50,
								alignSelf: 'center'
							}}
						/>

						<Text style={styles.textBawah}>Alur Donor {'\n'}Darah</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.cardStyle} onPress={goNextPage.bind(this, 'Konvalesen01')}>
						<Image
							source={require('../../asset/persyaratanDonorDarah.png')}
							style={{
								marginTop: 5,
								width: 49,
								height: 50,
								alignSelf: 'center'
							}}
						/>

						<Text style={styles.textBawah}>Persyaratan Donor {'\n'}& pendaftaran</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.cardStyle} onPress={goNextPage.bind(this, 'InfoStok01')}>
						<Image
							source={require('../../asset/stokDarah.png')}
							style={{
								marginTop: 5,
								width: 54,
								height: 50,
								alignSelf: 'center'
							}}
						/>

						<Text style={styles.textBawah}>Info Stok & Kebutuhan Darah</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewAtas}>
					<TouchableOpacity style={styles.cardStyle} onPress={goNextPage.bind(this, 'MobilUnit01')}>
						<Image
							source={require('../../asset/jadwalMobilUnit.png')}
							style={{
								marginTop: 5,
								width: 50,
								height: 50,
								alignSelf: 'center'
							}}
						/>

						<Text style={styles.textBawah}>Jadwal Mobil {'\n'}Unit</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.cardStyle}>
						<Image
							source={require('../../asset/konselingDonorDarah.png')}
							style={{
								marginTop: 5,
								width: 45,
								height: 50,
								alignSelf: 'center'
							}}
						/>

						<Text style={styles.textBawah}>Konseling Donor Darah Online</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cardStyle}>
						<Image
							source={require('../../asset/palangMerahIndonesia.png')}
							style={{
								marginTop: 5,
								width: 80,
								height: 50,
								alignSelf: 'center'
							}}
						/>
						<Text style={styles.textBawah}>Kontak PMI Kota Semarang</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			<ImageBackground
				// resizeMethod={'auto'}
				source={require('../../asset/footer.png')}
				style={styles.imageBackgroundStyle}
				imageStyle={{ resizeMode: 'cover', alignSelf: 'flex-end' }}
			/>
		</Container>
	);
}

export default index;
