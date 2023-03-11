import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Image } from "react-native";

const DrProfile = ({ route }) => {
  const item = route?.params;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          backgroundColor: "#25AD91",
          flex: 0.38,
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 120, width: 120, marginTop: 50, borderRadius: 60 }}
          source={{ uri: item.item.photo }}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {item?.item?.name}
        </Text>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
          ({item?.item?.specialty})
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20, flex: 0.62 }}>
        <Text>{item?.item?.introduction}</Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: "bold",
            color: "#25AD91",
          }}
        >
          Appointment Fee: {item?.item?.appointmentFee}
        </Text>
        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            backgroundColor: "#25AD91",
            borderRadius: 20,
            marginHorizontal: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => Alert.alert("Done", "Appointment book successfully")}
          >
            <Text
              style={{
                fontSize: 20,
                paddingVertical: 10,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Book an Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DrProfile;
