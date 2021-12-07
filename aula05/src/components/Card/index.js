import React from 'react';

import { Text, Button, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

export default function Card({cadastraItem, list}) {
  return (
    <>
    <TouchableOpacity onPress={cadastraItem} style={styles.button}>
    <Text style={styles.text}>Inserir Item</Text>
    </TouchableOpacity>
    {list.map((item) => (
        <Text>{item}</Text> 

    ))}
    </>
  );
}
