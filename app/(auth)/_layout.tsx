import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{
        headerTitle: "Auth page"
      }} />
      <Stack.Screen name="login" options={{
        headerTitle: "Login page"
      }} />
      <Stack.Screen name="signup" options={{
        headerTitle: "Signup page"
      }} />
    </Stack>
  );
}
