import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Front page",
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerTitle: "Authentication",
        }}
      />
      <Stack.Screen
        name="(home)"
        options={{
          headerTitle: "Home",
        }}
      />
    </Stack>
  );
}
