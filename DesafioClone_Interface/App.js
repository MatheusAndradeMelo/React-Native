import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const App = () => {

  return(

    <View style={styles.container}>
      <View style={[styles.card, styles.header]}>
          <Text>Primeiro</Text>
      </View>

      <View style={[styles.card, styles.content]}>
          <Text>Segundo</Text>
      </View>

     
      <View style={[styles.card, styles.footer]}>
          <Text>Terceiro</Text>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({

    header: {
      height: 80,
      backgroundColor: 'gray',
      
    },

    content: {
      height: 20,
      backgroundColor: '#555',
     
    },

    footer: {
      height: 80,
      backgroundColor: '#222',
     
    },

    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fcfcfc',
      alignItems: 'center',
      justifyContent: 'space-between'
      
    },

    card: {
      backgroundColor: 'red',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
});

export default App;