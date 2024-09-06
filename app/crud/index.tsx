import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const index = () => {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true) 
  const [error,setError] = useState(null)

  // fetch data from API

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    try {
     const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cats`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
     }) 
     const json = await response.json()
     setData(json)
    } catch (error) {
      console.error(error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <View>
      <Text>test</Text>
      {error && <Text>{error}</Text>}
      {
        loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <Text>{item.name}</Text>
            )}
          />
        ) 
      }
    </View>
  )
}

export default index

const styles = StyleSheet.create({})