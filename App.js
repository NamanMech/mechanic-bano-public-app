import React from 'react';
import { View, Button, Alert, Text } from 'react-native';
import { firebase } from './utils/firebaseConfig';

export default function App() {
  const testLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword("test@example.com", "123456");
      Alert.alert("✅ Login successful!");
    } catch (e) {
      Alert.alert("❌ Login error", e.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>Mechanic Bano Firebase Auth Test</Text>
      <Button title="Login with Firebase" onPress={testLogin} />
    </View>
  );
}
