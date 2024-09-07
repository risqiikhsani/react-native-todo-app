import { FlatList, Text, View, ActivityIndicator, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-xl font-semibold text-center mb-4">Cat List</Text>
      <Link className="b-2 p-2 rounded-md bg-red-300 my-2" href="/crud/create">
        <Text>
          Create cat
        </Text>
      </Link>
      {error && <Text className="text-red-500 text-center mb-4">{error}</Text>}
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
          <Text className="text-lg text-gray-700 mt-2">Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-lg shadow mb-4">
              <Text className="text-lg font-medium text-gray-900">
                {item.name}
              </Text>
              <Link
                href={{
                  pathname: "/crud/[id]",
                  params: { id: item.id.toString() },
                }}
              >
                View details
              </Link>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Index;
