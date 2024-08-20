import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const index = () => {
  return (
    <View className='flex items-center justify-center'> 
      <Text>immage</Text>
      <Image
        className='w-20 h-20'
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Ionicons name="checkmark-circle" size={32} color="green" />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      backgroundColor: '#0553',
    },
  });