import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
  return (
    <SafeAreaView>
      <Text>login</Text>
      <Link href="/signup" className='font-bold text-cyan-400'>Dont have an account ?</Link>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})