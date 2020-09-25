import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/containers/splash/splash';
import Landing from './src/containers/landing/landing';
import Register from './src/containers/register/register';
import Onboard from './src/containers/onboard/onboard';
import BottomTabNavigator from './src/routing/routing';

const Stack = createStackNavigator();

function App() {
	return (
		// <BottomTabNavigator />
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
				<Stack.Screen name="SPLASH" component={Splash} />
				<Stack.Screen name="Landing" component={Landing} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Onboard" component={Onboard} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;