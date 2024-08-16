import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyle, textStyles, isLoading }: {
    title: string, handlePress: any, containerStyle?: string, textStyles?: string, isLoading?: boolean
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            disabled={isLoading}
            className={`bg-orange-400 rounded-xl p-4 m-2 ${containerStyle} ${isLoading ? 'opacity-10' : ''}`}
        >
            <Text className={`text-slate-900 text-lg font-bold ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({})