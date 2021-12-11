import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  createTable,
  createPessoa,
  getAllPessoas,
  deleteAllPessoas,
} from "./src/repository/pessoaRepository";

export default function App() {
  const [nome, setNome] = useState(null);
  const [idade, setIdade] = useState(null);
  const [listaPessoas, setListaPessoas] = useState([]);

  useEffect(async () => {
    createTable();
    setListaPessoas(await getAllPessoas());
  }, []);  // Instanciando o banco e ele cria a tabela

  const handleClick = async () => {
    if (nome === null || idade === null) return; //esse return não retorna nada, significa sair da função

    createPessoa(nome, idade);

    setListaPessoas(await getAllPessoas());

    setNome(null);
    setIdade(null);
  };

  const handleDelete = () => {
    deleteAllPessoas();
    setListaPessoas([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite eu Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite sua Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <Button title="Cadastre-se" onPress={handleClick} />
      <Button title="Excluir Lista" onPress={handleDelete} />

      <Text style={{ marginTop: 10, marginBottom: 10 }}>LISTA DE PESSOAS</Text>

      {listaPessoas.map((pessoa) => {
        return (
          <View key={pessoa.id}>
            <Text>ID: {pessoa.id}</Text>
            <Text>NOME: {pessoa.nome}</Text>
            <Text>IDADE:{pessoa.age}</Text>
          </View>
        );
      })}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "center",
  },
});