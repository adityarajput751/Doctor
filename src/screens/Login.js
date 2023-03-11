import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 170,
          alignItems: "center",
          flex: 0.2,
          paddingBottom: 20,
        }}
      >
        <Text style={{ fontSize: 70, fontWeight: "bold", color: "#25AD91" }}>
          Login
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#25AD91",
          flex: 0.8,
          paddingTop: 50,
          borderTopStartRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <TextInput
        keyboardType='number-pad'
          placeholder="Mobile Number"
          style={{
            paddingHorizontal: 5,
            fontSize: 20,
            paddingVertical: 10,
            marginTop: 30,
            color: "white",
            backgroundColor: "#C5C5CF",
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Dashboard')}}
          style={{
            marginTop: 50,
            alignItems: "center",
            backgroundColor: "#C5C5CF",
            paddingVertical: 7,
            borderRadius: 10,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
