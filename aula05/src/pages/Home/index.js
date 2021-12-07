import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { styles } from "./styles";
import Card  from "../../components/Card";

export default function Home() {

    const [text, setText] = useState("Olá");
    const [listItem, setListItem] = useState([]);

    const handleClick = () => {
        setListItem([...listItem, text]);
        setText("");
    };

  return (

    <View style={styles.container}>
        <Text style={styles.textHome}>Aula 5</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      {/* <Button title="inserir item" onPress={handleClick} /> */}
      <Card list={listItem} cadastraItem={handleClick}/>

    </View>
  );
}



