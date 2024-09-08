import * as SecureStore from 'expo-secure-store';

// Save JWT token
const storeToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync('jwtToken', token);
  } catch (error) {
    console.error('Error storing token securely:', error);
  }
};

// Retrieve JWT token
const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('jwtToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

// Remove JWT token
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync('jwtToken');
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

export { storeToken, getToken, removeToken };