import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>home</Text>
      <Link href="/post">See posts</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})