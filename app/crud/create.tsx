import { Text, TextInput, View, Button, Alert, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from 'expo-router';
const Create = () => {
  const [name, onChangeName] = useState("");
  const [age, onChangeAge] = useState("1");
  const [color, onChangeColor] = useState("");
  const [success,setSuccess] = useState(false)

  const handleSubmit = async () => {
    const formData = { name, age, color };

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cats`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        Alert.alert("Success", "Data submitted successfully!");
        setSuccess(true)
        console.log("Response:", jsonResponse);
      } else {
        Alert.alert("Error", "Failed to submit data.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
      console.error("Error:", error);
    }
  };

  if(success){
    return <Redirect href="/crud" />;
  }

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-100">
      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Name</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 bg-white"
          onChangeText={onChangeName}
          value={name}
          placeholder="Enter name"
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Age</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 bg-white"
          onChangeText={onChangeAge}
          value={age}
          placeholder="Enter age"
          keyboardType="numeric"
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Color</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 bg-white"
          onChangeText={onChangeColor}
          value={color}
          placeholder="Enter color"
        />
      </View>

      
      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default Create;
