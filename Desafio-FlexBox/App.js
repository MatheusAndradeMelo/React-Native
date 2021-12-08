import React from "react";

import { View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.header]}>
        <Text>Primeiro</Text>
      </View>

      <View style={[styles.card, styles.screen1]}>
        <Text>Segundo</Text>
      </View>

      <View style={[styles.card, styles.screen2]}>
        <Text>Segundo</Text>
      </View>

      <View style={[styles.card, styles.content]}>
        <Text>Terceiro</Text>
      </View>

      

      <View style={[styles.card, styles.footer]}>
        <Text>Quarto</Text>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: "gray",
  },

  content: {
    height: 20,
    backgroundColor: "#555",
  },
  
  screen1: {
    backgroundColor: "#f4f4",
    height: 100,
    width:600,
    flex:1, 
    alignSelf: "flex-start",
    
  },
  screen2: {
    backgroundColor: "#d77",
    height: 100,
    width:600,
    flex:1, 
    alignSelf: "flex-end",
  },

  footer: {
    height: 80,
    backgroundColor: "#222",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fcfcfc",
    alignItems: "center",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "red",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export default App;
