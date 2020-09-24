import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/logo1.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = ({navigation}) => {

	return (
		<>
			<BackgroundColor>
				<Touchable onPress={() => navigation.navigate('Landing')} >
					<Logo source={logo}/>
				</Touchable>
			</BackgroundColor>
		</>
	);
};

const BackgroundColor = styled.View`
	background-color: #121C2F;
	flex: 1;
`;

const Touchable = styled.TouchableOpacity`
	background-color: white;
	margin: auto;
`;

const Logo = styled.Image`
	margin: auto;
	height: 200px;
	width: 200px;
`;


export default App;
