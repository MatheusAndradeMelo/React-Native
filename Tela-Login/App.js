import { StatusBar } from "expo-status-bar";
import React from "react";
import Signin from "./src/pages/Signin";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons"; 
 

export default function App() {  
  return (
    <>
      <Signin />
      <StatusBar style="light" />
    </> 
  );
}
 
//Adicionar biblioteca => yarn ou npm add styled-components

