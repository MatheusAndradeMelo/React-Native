
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Ir para login"
      onPress={() => navigation.goBack()} />
    </View>
  );
}

