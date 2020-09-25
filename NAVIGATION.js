import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

	const Home = ({navigation}) => {
		return (
			<View style={styles.center}>
				<Text>This is the home screen</Text>
				<Button title="Go to About Screen" onPress={() => navigation.navigate("About")}/>
			</View>
		);
	};

	const About = () => {
		return (
			<View style={styles.center}>
				<Text>This is the about screen</Text>
			</View>
		);
	};

	const Contact = () => {
		return (
			<View style={styles.center}>
				<Text>This is the contact screen</Text>
			</View>
		);
	};

	const screenOptionStyle = {
		headerStyle: { backgroundColor: "#9AC4F8" },
		headerTintColor: "white",
		headerBackTitle: "Back",
	};
	const MainStackNavigator = () => {
		return (
			<Stack.Navigator screenOptions={screenOptionStyle} >
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="About" component={About} />
			</Stack.Navigator>
		);
	}

	const Stack = createStackNavigator();
	const ContactStackNavigator = () => {
		return (
			<Stack.Navigator screenOptions={screenOptionStyle}>
				<Stack.Screen name="Contact" component={Contact} />
			</Stack.Navigator>
		);
	}

	const Tab = createBottomTabNavigator();
	const BottomTabNavigator = () => {
		return (
			<Tab.Navigator>
				<Tab.Screen name="Home" component={MainStackNavigator} />
				<Tab.Screen name="Contact" component={ContactStackNavigator} />
			</Tab.Navigator>
		);
	};

	const Drawer = createDrawerNavigator();
	const DrawerNavigator = () => {
		return (
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={BottomTabNavigator} />
				<Drawer.Screen name="Contact" component={ContactStackNavigator} />
			</Drawer.Navigator>
		);
	  }

	const App = () => {
		return (
			<NavigationContainer>
				<DrawerNavigator />
		  	</NavigationContainer>
		);
	}

	const styles = StyleSheet.create({
		center: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
		},
	});

export default App;