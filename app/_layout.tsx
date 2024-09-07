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
      <Stack.Screen
        name="crud/index"
        options={{
          headerTitle: "CRUD",
        }}
      />
      <Stack.Screen
        name="crud/create"
        options={{
          headerTitle: "Create Cat",
        }}
      />
      <Stack.Screen
        name="crud/[id]/index"
        options={{
          headerTitle: "Cat detail",
        }}
      />
      <Stack.Screen
        name="crud/[id]/update"
        options={{
          headerTitle: "Cat Update",
        }}
      />
    </Stack>
  );
}
