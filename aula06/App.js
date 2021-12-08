import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{title: "Home"}}
          />
          <Stack.Screen 
           name="Login"
           component={Login} 
           options={{ title: "Login" }}
           />
        </Stack.Navigator> */}

      <Tab.Navigator initialRouteName="Login" 
       initialRouteName="Login"
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;

           if (route.name === "Home") {
             iconName = focused
               ? "home"
               : "home-outline";
           } else if (route.name === "Login") {
             iconName = focused ? "ios-list" : "ios-list";
           }
// You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: "#00ff00",
         tabBarInactiveTintColor: "gray",
         tabBarLabelStyle: {
            paddingBottom: 1,
         },
       })}
       >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
