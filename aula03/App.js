import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

const App = () => {
  const [nome, setNome] = useState(""); 

  let sobrenome = "Andrade"; 

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Qual é o seu nome ?</Text>
      <Text>{nome}</Text>
      <TextInput
        style={{ backgroundColor: "white", width: "80%" }}
        placeholder="Insira o seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Button onPress={() => setNome("mudou")} title="Enviar" />
    </View>
  );
};

export default App;
