import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <Text>home</Text>
      <Link href="/post">See posts</Link>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})