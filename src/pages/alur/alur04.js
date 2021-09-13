import React, { useState } from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { Container, Card } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function Alur04(props) {
	const goNextPage = (page) => {
		if (page) {
			props.navigation.replace(page);
		}
	};
	const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;
	return (
		<Container>
			<Image source={require('../../asset/logoUDD.png')} style={styles.logoUDD} />
			<Image source={require('../../asset/logoSehat.png')} style={styles.logoSehat} />

			<ScrollView>
				<Text style={styles.headerText1}>Alur</Text>
				<Text style={styles.headerText2}>Permintaan Darah</Text>

				<View style={styles.viewContainer}>
					<Image
						resizeMode={'cover'}
						source={require('../../asset/alur04.png')}
						style={{ width: '100%', height: 510, marginBottom: 50 }}
					/>

					<View style={styles.viewBackForward2}>
						<Card
							style={{
								backgroundColor: '#000',
								width: '40%',
								marginRight: '2%'
							}}
						>
							<TouchableOpacity onPress={goNextPage.bind(this, 'Alur01')}>
								<Text style={styles.textInCard}>Kembali</Text>
							</TouchableOpacity>
						</Card>
						<View style={{ width: '50%', marginLeft: '5%' }} />
					</View>
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

export default Alur04;
