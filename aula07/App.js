import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, ActivityIndicator } from "react-native";
import gato from './assets/gatinho.webp';
import axios from 'axios';

export default function App() {

const [loading, setLoading] = useState(true);
const [apiData, setApiData] = useState(null);

const handleClick = async () => {;
  setLoading(true);

  await axios({
    method: 'GET',
    url: 'https://api.thecatapi.com/v1/images/search',
    responseType: 'json',
  }).then(response => {
    setApiData(response.data[0].url);
  });

  // setLoading(false);
  console.log("TERMINEI A FUNÇÃO"); 
};

//EXECUTA QUALQUER AÇÃO DEPOIS QUE A PAGINA RENDERIZAR 
useEffect(() => {
  handleClick();
}, []);

//EXECUTA UMA AÇÃO APOS SER RENDERIZADA A PAGINA, E EXECUTA TAMBEM ATRAVES DO ARRAY DE DEPENDENCIA,
//QUANDO UM STATE É ALTERADO.
useEffect(() => {
  console.log("APIDATA ALTERADA");
}, [apiData]);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          //source={apiData ? { uri: apiData} : gato }
          source={{ uri: apiData }}
          style={styles.img}
          resizeMode="contain"
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      {loading && <ActivityIndicator size="large" color="blue" />}
      <View style={styles.btnContainer}>
        <Button title="VEJA OUTRO FELINO" 
        onPress={handleClick }
        disabled={loading} 
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 3,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: 300,
    height: 600,
  },
});