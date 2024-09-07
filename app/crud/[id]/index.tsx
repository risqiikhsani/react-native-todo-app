import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Redirect, useLocalSearchParams } from "expo-router";

const index = () => {
  const { id } = useLocalSearchParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [deleted,setDeleted] = useState(false)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cat/${id}`, {
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

  const deleteData = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cat/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      Alert.alert("Success", "Cat deleted!");
      setDeleted(true)
    } catch (error) {
      console.error(error);
      setError(error.message);
      Alert.alert("Error", "Failed to delete data.");
    } finally {
      setLoading(false);
    }
  };

  if(deleted){
    return <Redirect href="/crud" />;
  }

  return (
    <View>
      <Text>cat</Text>
      <Text>Details of cat {id} </Text>
      {
        data && (
          <>
          <Text>name : {data.name}</Text>
          <Text>age : {data.age}</Text>
          <Text>color : {data.color}</Text>
          </>
        )
      }
      <Link
        href={{
          pathname: "/crud/[id]/update",
          params: { id: id.toString() },
        }}
      >
        Update
      </Link>
      <Pressable onPress={deleteData}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
