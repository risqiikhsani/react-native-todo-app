import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
  return (
    <SafeAreaView>
      <Text>_layout</Text>
      <Slot/>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})