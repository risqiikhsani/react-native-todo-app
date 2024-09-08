import AsyncStorage from '@react-native-async-storage/async-storage';

// Save JWT token
const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('jwtToken', token);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

// Retrieve JWT token
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

// Remove JWT token
const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('jwtToken');
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

export { storeToken, getToken, removeToken };