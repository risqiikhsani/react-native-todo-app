import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Testing</Text>
      <Link href="/(home)">View home</Link>
      <Link href="/(auth)">View auth</Link>
    </View>
  );
}
