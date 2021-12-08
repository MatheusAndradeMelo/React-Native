
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Ir para Home"
       onPress={() => navigation.navigate("Home")}
       />
    </View>
  );
}


