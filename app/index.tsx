import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="light" />

      <Text className="font-bold">Edit app/index.tsx to edit this screen.</Text>
      <Text>Testing</Text>

      <CustomButton
        title="View home"
        handlePress={() => router.push("/(home)")}
      />
      <CustomButton
        title="View Auth"
        handlePress={() => router.push("/(auth)")}
      />
      <CustomButton
        title="View List"
        handlePress={() => router.push("/list")}
      />
      <CustomButton
        title="View Form"
        handlePress={() => router.push("/form")}
      />
      <CustomButton
        title="View Image"
        handlePress={() => router.push("/image")}
      />
      <CustomButton
        title="View Video"
        handlePress={() => router.push("/video")}
      />
      <CustomButton
        title="View animated"
        handlePress={() => router.push("/animated")}
      />
    </SafeAreaView>
  );
}
