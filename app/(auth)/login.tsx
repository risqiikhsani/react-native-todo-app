import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const login = () => {
  return (
    <View>
      <Text>login</Text>
      <Link href="/signup">Dont have an account ?</Link>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})