import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../containers/home_sellerDashboard/home_sellerDashboard';
import Product from '../containers/products/products';



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contact" component={Product} />
        </Tab.Navigator>
    );
};


const App = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}

export default App;