import React from "react";
import { View } from "react-native";

const App = () => {
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />

    //   <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />

    //   <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} />
    // </View>

    // <View style={{ flex: 1 }}>
    //    <View style={{ flex: 1, backgroundColor: "powderblue" }} />

    //    <View style={{ flex: 2, backgroundColor: "skyblue" }} />

    //    <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    //  </View>

    // <View style={{ flex: 1, justifyContent: "space-around", alignItems: "stretch", flexDirection: 'row' }}>
    //    <View style={{ width: 50, height: 50, backgroundColor: "powderblue", alignSelf: 'flex-start' }} />

    //    <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />

    //    <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} />
    //  </View>


      //EXEMPLO 1 EXERCICIO AULA
      // <View style={{ flex: 1, justifyContent: "space-evenly", flexDirection: "column", alignItems: "center" }}>
      //       <View style={{ width: 150,  height: 150, backgroundColor: "powderblue" }} />
    
      //      {/* <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
    
      //       <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} /> */}
      //   </View>


    //EXEMPLO 2 EXERCICIO AULA
  //   <View style={{ flex: 1, justifyContent: "space-evenly", flexDirection: "column" }}>
  //      <View style={{  height: 150, backgroundColor: "powderblue" }} />

  //     {/* <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />

  //      <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} /> */}
  //  </View>

  //EXEMPLO 3 EXERCICIO AULA
  // <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", flexDirection: "column" }}>
  //       <View style={{  width: 100,height: 100, backgroundColor: "powderblue" }} />

  //      <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />

  //       <View style={{ width: 100, height: 100, backgroundColor: "steelblue" }} />
  // </View>

  //EXEMPLO 4 EXERCICIO AULA
  // <View style={{ flex: 1, flexDirection: "column-reverse", alignItems: "flex-end" }}>
  //      <View style={{width: 150,  height: 150, backgroundColor: "powderblue" }} />

  //      <View style={{ width: 150, height: 150, backgroundColor: "skyblue" }} />

  //      <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} />
  //   </View>

  //EXEMPLO 5 EXERCICIO AULA
  // <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
  //      <View style={{width: 150,  height: 150, backgroundColor: "blue" }} />

  //      <View style={{ width: 150, height: 150, backgroundColor: "white" }} />

  //      <View style={{ width: 150, height: 150, backgroundColor: "red" }} />
  //   </View>

  //EXEMPLO 6 EXERCICIO AULA
  <View style={{ flex: 1, flexDirection: "row",alignItems: "flex-start", alignContent: "space-around", justifyContent: "space-evenly", flexWrap: "wrap" }}>
  <View style={{width: 100,  height: 100, backgroundColor: "powderblue" }} />

  <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />

  <View style={{ width: 100, height: 100, backgroundColor: "steelblue" }} />

  <View style={{width: 100,  height: 100, backgroundColor: "powderblue" }} />

  <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />

  <View style={{ width: 100, height: 100, backgroundColor: "steelblue" }} />

  <View style={{width: 100,  height: 100, backgroundColor: "powderblue" }} />

  <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />

  <View style={{ width: 100, height: 100, backgroundColor: "steelblue" }} />

</View>

  );
};

export default App;
