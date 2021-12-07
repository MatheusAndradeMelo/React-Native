import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import New from "../components/New";
import House from "../components/House";
import Recommended from "../components/Recommended";

//Instalações :
//expo install expo-font @expo-google-fonts/montserrat
//expo install @react-navigation/native
//expo install @react-navigation/native-stack
//expo install expo-app-loading
//expo install react-native-screens react-native-safe-area-context
//expo install react-native-swiper
//expo install react-native-stars

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#FFF" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <New
          cover={require("../assets/house1.jpg")}
          name="Casa em Cabo frio-RJ"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => navigation.navigate("detail")}
        />

        <New
          cover={require("../assets/house2.jpg")}
          name="Casa em Búzios-RJ"
          description="Casa nova próximo a praia de geriba, lugar seguro e monitorado 24horas."
          onPress={() => {}}
        />

        <New
          cover={require("../assets/house3.jpg")}
          name="Casa na Barra da tijuca"
          description="Casa nova e bem localizada, lugar seguro e monitorado 24horas."
          onPress={() => {}}
        />
      </ScrollView>

      <View
        style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
      >
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <House cover={require("../assets/house4.jpg")} />
        <House cover={require("../assets/house5.jpg")} />
        <House cover={require("../assets/house6.jpg")} />
      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>Dica do dia</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <Recommended
          cover={require("../assets/house1.jpg")}
          house="Casa em Cabo frio-RJ"
          offer="25%"
        />
        <Recommended
          cover={require("../assets/house4.jpg")}
          house="Casa em Búzios-RJ"
          offer="15%"
        />
        <Recommended
          cover={require("../assets/house6.jpg")}
          house="Casa na Barra da tijuca"
          offer="10%"
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    backgroundColor: "#FFF",
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 10,
    fontSize: 13,
    width: "90%",
  },
  contentNew: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },
});
