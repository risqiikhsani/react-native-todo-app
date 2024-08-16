import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const signup = () => {
  return (
    <SafeAreaView>
      <Text>signup</Text>
      <Link href="/login" className='font-bold text-cyan-400'>Already have an account ?</Link>
    </SafeAreaView>
  )
}

export default signup

const styles = StyleSheet.create({})