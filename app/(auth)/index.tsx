import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>welcome</Text>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})