import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import { doctors } from "./DoctorData";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DrProfile", { item })}
      >
        <View
          style={{
            backgroundColor: "#25AD91",
            paddingVertical: 20,
            borderRadius: 10,
            marginRight: 50,
          }}
        >
          <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
            <View style={{ justifyContent: "flex-end" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                {item.name}
              </Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                {item.specialty}
              </Text>
            </View>
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                marginRight: -50,
              }}
              source={{ uri: item.photo }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View
          style={{ paddingTop: 50, alignItems: "flex-end", paddingRight: 10 }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
              backgroundColor: "white",
              borderRadius: 30,
            }}
            source={require("../assets/userprofile.png")}
          />
        </View>
        <View style={{ paddingTop: 30 }}>
          <Text
            style={{
              color: "#C5C5CF",
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            Find a
          </Text>
          <Text
            style={{
              marginTop: -10,
              color: "#C5C5CF",
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            Doctor
          </Text>
        </View>
        <View style={{}}>
          <TextInput
            placeholder="Search by title"
            placeholderTextColor="gray"
            //   value={searchQuery}
            //   onChangeText={handleSearch}
            style={{
              backgroundColor: "#E0E8E6",
              paddingHorizontal: 10,
              height: 40,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#25AD91",
            marginTop: 30,
            marginRight: 225,
            paddingVertical: 3,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              paddingHorizontal: 5,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Hot Topic
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={doctors}
            horizontal
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#C5C5CF",
            paddingBottom: 10,
          }}
        >
          Categories
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 18 }}
              source={require("../assets/tools.png")}
            />
            <Text style={{ color: "#C5C5CF" }}>Medical Tools</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 10 }}
              source={require("../assets/medicine.png")}
            />
            <Text style={{ color: "#C5C5CF" }}>Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 4 }}
              source={require("../assets/hospital.png")}
            />
            <Text style={{ color: "#C5C5CF" }}>Hospital</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 25,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 18 }}
              source={require("../assets/cons.png")}
            />
            <Text style={{ color: "#C5C5CF" }}>Consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 10 }}
              source={require("../assets/checkup.png")}
            />
            <Text style={{ color: "#C5C5CF" }}>Checkup</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 5 }}
              source={require("../assets/heart.png")}
            />
            <Text style={{ color: "#C5C5CF" }}>Life Style</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
