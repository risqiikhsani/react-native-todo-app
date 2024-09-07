import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "CRUD",
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          headerTitle: "Create",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Cat detail",
        }}
      />
      <Stack.Screen
        name="[id]/update"
        options={{
          headerTitle: "Cat update",
        }}
      />
    </Stack>
  );
};

export default layout;

const styles = StyleSheet.create({});
