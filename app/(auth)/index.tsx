import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

const index = () => {
  return (
    <SafeAreaView>
      <Text>welcome to TodoApp</Text>
      <CustomButton
        title='Login'
        handlePress={() => router.push("/login")}
      />
      <CustomButton
        title='Sign Up'
        handlePress={() => router.push("/signup")}
      />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})