import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStateContext } from '@/context/StateContext';

const index = () => {
    const { count, incrementCount, theme, toggleTheme } = useStateContext();

    return (
      <View>
        <Text>Count: {count}</Text>
        <Button title="Increment" onPress={incrementCount} />
        <Text>Current theme: {theme}</Text>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
    );
}

export default index

const styles = StyleSheet.create({})