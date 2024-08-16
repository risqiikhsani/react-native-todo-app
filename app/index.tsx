import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text className="font-bold">Edit app/index.tsx to edit this screen.</Text>
      <Text>Testing</Text>

      <CustomButton
        title="View home"
        handlePress={() => router.push('/(home)')}
      />
      <CustomButton
        title="View Auth"
        handlePress={() => router.push('/(auth)')}
      />
    </SafeAreaView>
  );
}
