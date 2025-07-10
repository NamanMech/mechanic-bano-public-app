import React from 'react';
import { View, Button, Text } from 'react-native';
import { auth } from '../utils/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('User:', result.user);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to Mechanic Bano App!</Text>
      <Button title="Login with Google" onPress={handleGoogleLogin} />
      <StatusBar style="auto" />
    </View>
  );
}
