import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function Challenge() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.primeiro} />
      <View style={styles.primeiroSegundo} >
      <View style={styles.segundo} />
      <View style={styles.terceiro} />
      </View>
      <View style={styles.quartoQuinto}>
      <View style={styles.quarto} />
      <View style={styles.quinto} />
      </View>
      <View style={styles.sexto} />
      <View style={styles.quadrados}>
        <View style={styles.quadradin}/>
        <View style={styles.quadradin}/>
        <View style={styles.quadradin}/>
        <View style={styles.quadradin}/>
        <View style={styles.quadradin}/>
        <View style={styles.quadradin}/>
      </View>
    </SafeAreaView>
    <View style={styles.tab} />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4f4'
  },
  primeiro: {
    backgroundColor: 'red',
    height: 25
  },
  primeiroSegundo: {
    alignItems: 'center',
    marginVertical: 18,
  },
  segundo: {
    marginVertical: 18,
    backgroundColor: 'red',
    height: 85,
    width: 85
  },
  terceiro: {
    width: 150,
    height: 35,
    backgroundColor: '#000'
  },
  quartoQuinto: {
    flexDirection: 'row',
    marginTop: 20,
  },
  quarto: {
    backgroundColor: 'red',
    height: 80,
    width: '50%'
  },
  quinto: {
    backgroundColor: '#000',
    height: 80,
    width: '50%'
  },
  sexto: {
    backgroundColor: '#666',
    height: 10,
    marginBottom: 10
  },
  quadrados: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  quadradin: {
    height: 92,
    width: 94,
    backgroundColor: '#000',
    marginVertical: 15
  },
  tab: {
    backgroundColor: '#000',
    height: 50,
  }
});