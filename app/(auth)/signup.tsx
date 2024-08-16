import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <View>
      <Text>signup</Text>
      <Link href="/login">Already have an account ?</Link>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})